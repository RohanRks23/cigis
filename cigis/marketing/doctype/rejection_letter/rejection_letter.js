// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Rejection Letter', {
//     refresh: function(frm) {
        
//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'DCI Proposals',
//                 filters: {
//                     client_name: frm.doc.to
//                 },
//                 fields: ['proposal_no', 'registrationno']
//             },
//            callback: function (r) {
//                 console.log(r,"clent short name")
//                 if (!r.exc) {
//                    if (r.message) {

//                         frm.set_value('regisration_no', r.message.registrationno);
//                         frm.set_value('date', r.message.establishmentdate);
//                          frm.set_value('proposal_no', r.message.proposal_no);
//                     }

//                 } else {

//                     console.error("Error occurred:", r.exc);

//                 }

//             }

//         });
//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'Company-Details',
//                 filters: {
//                     name1: frm.doc.to
//                 },
//                 fields: ['postal_address', 'location', 'physical_address']
//             },
//             callback: function (r) {
//                 console.log(r, "client details");
//                 if (!r.exc) {
//                     if (r.message) {
//                         // Concatenate the fields line by line
//                         let address = '';
                        
//                         if (r.message.name1) {
//                             address += r.message.name1 + '\n';
//                         }
//                         if (r.message.location) {
//                             address += r.message.location + '\n';
//                         }
//                         if (r.message.physical_address) {
//                             address += r.message.physical_address + '\n';
//                         }
//                         if (r.message.postal_address) {
//                             address += r.message.postal_address + '\n';
//                         }
                         
//                         // Remove the trailing newline character
//                         address = address.trim();

//                         // Set the concatenated address in the 'address' field
//                         frm.set_value('address', address);
//                     }
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
//             }
//         });
//     }
// });

