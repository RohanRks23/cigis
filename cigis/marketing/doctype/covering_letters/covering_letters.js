// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Covering Letters', {
    refresh(frm) {
        // Get the value of name1 field
        var companyname = frm.doc.company;

        // Fetch Company Details document where the 'name1' field matches companyname
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Company-Details',
                filters: {
                    'name1': companyname
                },
                fields: ['name1', 'postal_address'],
                limit: 1 // Limit to fetch only one document
            },
            callback: function(response) {
                if (response.message && response.message.length > 0) {
                    var companyDetails = response.message[0];
                    // Set the company and companyname fields in covering letters
                  //  frm.set_value('company', companyDetails.name1);
                    frm.set_value('companyname', companyDetails.name1);
                    // Set the address field in covering letters
                    frm.set_value('address', companyDetails.postal_address);
                } else {
                    // Handle case where no matching Company Details document is found
                    frappe.msgprint("No matching Company Details found for: " + company);
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching Company Details.');
            }
        });
    }
});

