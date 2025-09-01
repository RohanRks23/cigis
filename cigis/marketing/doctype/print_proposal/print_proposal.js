// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Print proposal', {
    onload: function (frm) {
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
                    frm.set_value('fax', r.message.fax);
                    frm.set_value('registrationno', r.message.registration_number);
                    frm.set_value('establishmentdate', r.message.establisheddate);
                    frm.set_value('bankers', r.message.bank);
                    frm.set_value('telephone', r.message.telephone);
                    frm.set_value('account_no', r.message.ac_no);
                    frm.set_value('email', r.message.email);

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
                doctype: 'DCI Proposals',
                filters: {
                    client_name: frm.doc.client_name
                },
                fields: ['associated_companies', 'government', 'retailers', 'manufacturers', 'wholesalers'],
                limit_page_length: 1 // Limit to one result for efficiency
            },
            callback: function(response) {
                if (response.message && response.message.length > 0) {
                    var data_from_proposals = response.message[0];
                    var trade_styles = [];

                    if (data_from_proposals.associated_companies) {
                        trade_styles.push('Associated Companies');
                    }
                    if (data_from_proposals.government) {
                        trade_styles.push('Government');
                    }
                    if (data_from_proposals.retailers) {
                        trade_styles.push('Retailers');
                    }
                    if (data_from_proposals.manufacturers) {
                        trade_styles.push('Manufacturers');
                    }
                    if (data_from_proposals.wholesalers) {
                        trade_styles.push('Wholesalers');
                    }

                    frm.set_value('trade_style', trade_styles.join(', '));
                } else {
                    frm.set_value('trade_style', ''); // Ensure 'trade_style' is cleared if no data is found
                }
            },
            error: function(error) {
                console.error("Error in frappe.call:", error);
                frm.set_value('trade_style', ''); // Clear the field in case of an error
            }
        });

        // DCI Proposals data
        frappe.call({
            method: "frappe.client.get",
            args: {
                doctype: "DCI Proposals",
                filters: {
                    client_name: frm.doc.client_name
                },
                fields: ["directors_shareholders_table"]
            },
            callback: function (r) {
                console.log(r, "DCI Proposals data");

                if (r.message && r.message.directors_shareholders_table) {
                    var data = r.message.directors_shareholders_table;

                    // Clear the child table before adding new rows
                    frm.clear_table('table');

                    for (let x of data) {
                        var child = frappe.model.add_child(frm.doc, "Print_child", "table");
                        frappe.model.set_value(child.doctype, child.name, "designation", x.designation);
                        frappe.model.set_value(child.doctype, child.name, "share_holder", x.directorname);

                        // Add more fields as needed
                    }

                    frm.refresh_fields('table');
                    console.log(data);
                } else {
                    console.error("Error occurred in DCI Proposals data:", r.exc);
                }
            }
        });
    },
});























