// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('covering Letter_ECI', {
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
                    frm.set_value('address', response.message[0].postal_address);
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


//  onload(frm) {
//         // console.log("covering Letter - refresh function executed");

//         // // Retrieve client name from sessionStorage
//         // var selectedClientName = sessionStorage.getItem('selectedClientName');

//         // console.log(selectedClientName, "retrieved from sessionStorage");

//         // if (selectedClientName) {
//         //     // Set the 'to' field in the 'covering Letter' doctype
//         //     frm.set_value('to', selectedClientName);
//         //     console.log(selectedClientName, "set to the to field");
//         // } else {
//         //     console.log("No client name found in sessionStorage");
//         // }
        
//           frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Company-Details', // corrected doctype name
//                 filters: {
//                     name1: frm.doc.to // corrected field name
//                 },
//                 fields: ['postal_address']
//             },
//             callback: function(r) {
//                 console.log(r, 'hello'); // corrected console.log syntax
//                 if (!r.exc) {
//                     if (r.message && r.message.length > 0) {
//                         var data = r.message[0]; 
//                         frm.set_value('address', data.postal_address);
                       
                        
//                     } else {
//                         console.error("No data found for the selected company.");
//                     }
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
//             }
//         });
//     }





