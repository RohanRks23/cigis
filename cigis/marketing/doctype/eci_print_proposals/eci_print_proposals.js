// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('ECI Print Proposals', {
    onload: function (frm) {
        // frm.fields_dict['principal_buyer_table'].grid.wrapper.find('.grid-row .btn[data-fieldname="edit"]').hide();
        
        frm.set_df_property('print_child_table','cannot_add_rows', true);
        frm.set_df_property('spread_of_turnover_eci','cannot_add_rows', true);
        frm.set_df_property('past_experiences','cannot_add_rows', true);
        frm.set_df_property('principal_buyer_table','cannot_add_rows', true);
        
        // Client details
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Company-Details',
                name: frm.doc.client_name
            },
            callback: function (r) {
                console.log(r, "client details");

                if (r.message) {
                   frm.set_value('postal_address', r.message.postal_address);
                    frm.set_value('physical_address', r.message.physical_address);
                    frm.set_value('fax_number', r.message.fax);
                    frm.set_value('registered_no', r.message.registration_number);
                    frm.set_value('date_established', r.message.establisheddate);
                    frm.set_value('bankers_branch', r.message.bank);
                    frm.set_value('telephone_number', r.message.telephone);
                    frm.set_value('account_number', r.message.ac_no);
                    frm.set_value('email', r.message.email);
                     frm.set_value('name1', r.message.contact_person);
                    

                    // Refresh the form to reflect the changes
                    frm.refresh();
                } else {
                    console.error("Error occurred in client details:", r.exc);
                }
            }
        });
// Fetch trade style data
      frappe.call({
    method: 'frappe.client.get_list',
    args: {
        doctype: 'ECI Proposal',
        filters: {
            client_name: frm.doc.client_name
        },
        fields: ['associated_companies', 'government', 'private_buyers'],
        limit_page_length: 1 // Limit to one result for efficiency
    },
    callback: function(response) {
        console.log(response, "response");

        if (response.message && response.message.length > 0) {
            var data_from_proposals = response.message[0];
            console.log(data_from_proposals, "data_from_proposals");
            var trade_style = [];

            if (data_from_proposals.associated_companies) {
                trade_style.push('Associated Companies');
            }
            if (data_from_proposals.government) {
                trade_style.push('Government');
            }
            if (data_from_proposals.private_buyers) {
                trade_style.push('Private Buyers');
            }
            
            

            frm.set_value('trade_style', trade_style.join(', '));
        } else {
            frm.set_value('trade_style', ''); // Ensure 'trade_style' is cleared if no data is found
        }
    },
    error: function(error) {
        console.error("Error in frappe.call:", error);
        frm.set_value('trade_style', ''); // Clear the field in case of an error
    }
});

        // Fetch ECI Proposal data
        frappe.call({
            method: "frappe.client.get",
            args: {
                doctype: "ECI Proposal",
                filters: {
                    client_name: frm.doc.client_name
                },
                fields: ["directors_shareholders_table", "export_turnover", "principal_buyer", "baddebts","capacity","captured_on"]
            },
            callback: function (r) {
                console.log(r, "ECI Proposals data");
                if (!r.exc) {

                    if (r.message) {

                        frm.set_value('date', r.message.captured_on);
                         frm.set_value('capacity', r.message.capacity);

                    }
                }

                if (r.message) {
                    // Directors Shareholders Table
                    if (r.message.directors_shareholders_table) {
                        var data = r.message.directors_shareholders_table;

                        // Clear the child table before adding new rows
                        frm.clear_table('print_child_table');

                        for (let x of data) {
                            var child = frappe.model.add_child(frm.doc, "Print_child", "print_child_table");
                            frappe.model.set_value(child.doctype, child.name, "designation", x.designation);
                            frappe.model.set_value(child.doctype, child.name, "share_holder", x.directorname);

                            // Add more fields as needed
                        }

                        frm.refresh_fields('print_child_table');
                        console.log(data);
                    }

                    // Export Turnover
                    if (r.message.export_turnover) {
                        var data1 = r.message.export_turnover;

                        // Clear the child table before adding new rows
                        frm.clear_table('spread_of_turnover_eci');

                        for (let x of data1) {
                            var child1 = frappe.model.add_child(frm.doc, "Spread_of_turnover_ECI", "spread_of_turnover_eci");
                            frappe.model.set_value(child1.doctype, child1.name, "countries_of_destination", x.country_of_dest);
                            frappe.model.set_value(child1.doctype, child1.name, "total_turnover_during_last", x.total_turnoverlast_year);
                            frappe.model.set_value(child1.doctype, child1.name, "estimated_turnover_next_last_year", x.estturnovernext_12_months);
                            frappe.model.set_value(child1.doctype, child1.name, "currency_invoiced_in_egpularandusd", x.currency_invoiced_eg_pularandsusd);
                            frappe.model.set_value(child1.doctype, child1.name, "terms_of_payments_normal", x.terms_of_payment);
                            frappe.model.set_value(child1.doctype, child1.name, "terms_of_payments_maximum", x.directorname);

                            // Add more fields as needed
                        }

                        frm.refresh_fields('spread_of_turnover_eci');
                        console.log(data1);
                    }

                    // Principal Buyer
                    if (r.message.principal_buyer) {
                        var data2 = r.message.principal_buyer;

                        // Clear the child table before adding new rows
                        frm.clear_table('principal_buyer_table');

                        for (let x of data2) {
                            var child2 = frappe.model.add_child(frm.doc, "ECI_Principal_buyer_table", "principal_buyer_table");
                            frappe.model.set_value(child2.doctype, child2.name, "name_of_the_buyer", x.buyer_name);
                            frappe.model.set_value(child2.doctype, child2.name, "bank", x.bank);
                            frappe.model.set_value(child2.doctype, child2.name, "town_and_country", x.buyer_country);
                            frappe.model.set_value(child2.doctype, child2.name, "maximum_amount_outstanding_pula", x.amount_outstanding);

                            // Add more fields as needed
                        }

                        frm.refresh_fields('principal_buyer_table');
                        console.log(data2);
                    }

                    // Bad Debts
                    if (r.message.baddebts) {
                        var data3 = r.message.baddebts;

                        // Clear the child table before adding new rows
                        frm.clear_table('past_experiences');

                        for (let x of data3) {
                            var child3 = frappe.model.add_child(frm.doc, "ECI_Past_experience", "past_experiences");
                            frappe.model.set_value(child3.doctype, child3.name, "name_of_the_country", x.country);
                            frappe.model.set_value(child3.doctype, child3.name, "noof_cases", x.noof_cases);
                            frappe.model.set_value(child3.doctype, child3.name, "year1", x.year1);
                            frappe.model.set_value(child3.doctype, child3.name, "year2", x.year2);
                            frappe.model.set_value(child3.doctype, child3.name, "year3", x.year3);
                            frappe.model.set_value(child3.doctype, child3.name, "estimated", x.estimated);

                            // Add more fields as needed
                        }

                        frm.refresh_fields('past_experiences');
                        console.log(data3);
                    }
                } else {
                    console.error("Error occurred in ECI Proposals data:", r.exc);
                }
            }
        });
    },
   
});

