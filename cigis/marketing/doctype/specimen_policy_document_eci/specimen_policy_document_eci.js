// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Specimen Policy Documents', {
    refresh(frm) {
        // Get the value of name1 field
        var name1 = frm.doc.to;
 
        // Fetch Company Details document where the 'to' field matches name1
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Company-Details',
                filters: {
                    'name1': name1
                },
                fields: ['postal_address'],
                limit: 1 // Limit to fetch only one document
            },
            callback: function(response) {
                if (response.message && response.message.length > 0) {
                    // Set the postal_address field to the of field in New_Policy_Doc document
                    frm.set_value('of', response.message[0].postal_address);
                } else {
                    // Handle case where no matching Company Details document is found
                    frappe.msgprint("No matching Company Details found for: " + name1);
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching Company Details.');
            }
        });
    }
});
