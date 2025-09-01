// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Proforma Invoice', {
    refresh: function(frm) {
        
        
        
frm.fields_dict.vat_registration_no.$input.css("text-align", "right");
//frm.fields_dict.taxno.$input.css("text-align", "right");
frm.fields_dict.fax.$input.css("text-align", "right");
frm.fields_dict.data1.$input.css("text-align", "right");
frm.fields_dict.data2.$input.css("text-align", "right");
frm.fields_dict.data3.$input.css("text-align", "right");
frm.fields_dict.data4.$input.css("text-align", "right");


        var invoiceTo = frm.doc.invoice_to;

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Company-Details',
                filters: {
                    name1: invoiceTo
                },
                fields: ['director_1', 'telephone', 'fax', 'establisheddate', 'vat_reg_no', 'contact_person'],
                limit: 1
            },
            callback: function(response) {
                if (response && response.message && response.message.length > 0) {
                    var companyData = response.message[0];

                    // Set values only if a matching record is found
                    frm.set_value('name1', companyData.director_1);
                    frm.set_value('telephone', companyData.telephone);
                    frm.set_value('fax', companyData.fax);
                   // frm.set_value('taxno', companyData.taxno);
                    frm.set_value('date', companyData.establisheddate);
                    frm.set_value('vat_registration_no', companyData.vat_reg_no);
                    frm.set_value('reference', companyData.contact_person);
                } else {
                    // Reset values if no matching record is found
                    frm.set_value('name1', '');
                    frm.set_value('telephone', '');
                    frm.set_value('fax', '');
                   // frm.set_value('taxno', '');
                    frm.set_value('date', '');
                    frm.set_value('vat_registration_no', '');
                    frm.set_value('reference', '');
                }
            },
            error: function(err) {
                console.error('Error fetching data:', err);
                frappe.msgprint('An error occurred while fetching data from Company Details.');
            }
        });
    }
});