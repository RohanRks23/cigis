// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Consent Form For ECIS', {
    refresh(frm) {
        // Get the value of name1 field
        var name1 = frm.doc.name1;

        // Fetch Company Details document where the 'to' field matches name1
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Company-Details',
                filters: {
                    'to': name1
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
    },
    onload:function(frm){
         frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Company-Details', // corrected doctype name
                filters: {
                    name1: frm.doc.company_name // corrected field name
                },
                fields: ['bank', 'ac_no', 'branch', 'contact_person']
            },
            callback: function(r) {
                console.log(r, 'hello'); // corrected console.log syntax
                if (!r.exc) {
                    if (r.message && r.message.length > 0) {
                        var data = r.message[0]; 
                        frm.set_value('bank', data.bank);
                        frm.set_value('account_number', data.ac_no); // corrected field name
                        frm.set_value('branch', data.branch);
                       // frm.set_value('to_', data.contact_person);
                        
                    } else {
                        console.error("No data found for the selected company.");
                    }
                } else {
                    console.error("Error occurred:", r.exc);
                }
            }
        });
        
         frappe.call({
    method: 'frappe.client.get_list',
    args: {
        doctype: 'ECI Proposal', // corrected doctype name
        filters: {
            proposal_no: frm.doc.proposal_no // corrected field name
        },
        fields: ['capacity']
    },
    callback: function(r) {
        console.log(r, 'hello'); // corrected console.log syntax
        if (!r.exc) {
            if (r.message && r.message.length > 0) {
                var data = r.message[0]; 
                frm.set_value('designation', data.capacity); // corrected field name
            } else {
                console.error("No data found for the selected company.");
            }
        } else {
            console.error("Error occurred:", r.exc);
        }
    }
});
    }
});

