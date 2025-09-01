// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('LOI Invoice', {

// 	refresh: function(frm) {
// 	   frm.fields_dict.amount.$input.css("text-align", "right");
// 	   frm.fields_dict.invoice_amount.$input.css("text-align", "right");
 
       
//         if (!frm.doc.invoice_no) {
//             generateNumber(frm);
//         }
//     // Fetch policy_holder from Policy Approvals
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Letter Of Intends',
           
//             fields: ['bond_facility_no'],
//             limit_page_length: 100  // Adjust this value as needed
//         },
//         callback: function(response) {
//             console.log("policy_holder received:", response);
 
//             if (response.message) {
//                 let finalArray = response.message.map(x => x.bond_facility_no);
//                 frm.set_df_property('bnd_facility_no', 'options', finalArray);
//                 console.log("final", finalArray);
//             }
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error("Error fetching policy holders:", textStatus, errorThrown);
//         }
//     });
// },
// bnd_facility_no: function (frm){
//   frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'Letter Of Intends',
//                 filters: {
//                     bond_facility_no: frm.doc.bnd_facility_no
//                 },
//                 fields: ['bondname', 'facility_date']
//             },
//             callback: function (r) {
//                 console.log(r,"clent short name")
//                 if (!r.exc) {
//                     if (r.message) {
//                         frm.set_value('client_name', r.message.bondname);
//                       frm.set_value('facility_date', r.message.facility_date);

//                     }
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
//             }
//         });

// frappe.call({
//     method: 'frappe.client.get',
//     args: {
//         doctype: 'Letter Of Intends',
//         filters: {
//             bond_facility_no: frm.doc.bnd_facility_no
//         },
//         fields: ['letter_of_intends_no_table']
//     },
//     callback: function (r) {
//         console.log(r, "client short name");

//         if (!r.exc) {
//             if (r.message && r.message.letter_of_intends_no_table && r.message.letter_of_intends_no_table.length > 0) {
//                 // Create an array to store all loi_no
//                 let loi_nos = r.message.letter_of_intends_no_table.map(item => item.loi_no);

//                 // Join the array into a single string with newline character to create options
//                 let options = loi_nos.join("\n");

//                 // Set the options to the dropdown field
//                 frm.set_df_property('loi_no', 'options', options);
                
//                 frm.doc.loi_details = r.message.letter_of_intends_no_table;
//             }
//         } else {
//             console.error("Error occurred:", r.exc);
//         }
//     }
// });

//  },
// loi_no: function(frm) {
//         // Get the selected loi_no
//         let selected_loi_no = frm.doc.loi_no;

//         // Find the matching record from the stored details
//         let selected_record = frm.doc.loi_details.find(item => item.loi_no === selected_loi_no);

//         if (selected_record) {
//             // Update the fields with the corresponding values
//             frm.set_value('principal', selected_record.principal);
//             frm.set_value('tender_no', selected_record.tender_no);
//             frm.set_value('invoice_amount', selected_record.bond_value);
//             frm.set_value('amount_date', selected_record.letter_of_intent_date);
//         }
//     }
// });



// function generateNumber(frm) {
//     if (!frm.doc.bond_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `INV/BND/${currentYear}/`;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'LOI Invoice',
//                 fields: ['invoice_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function (r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastBondNo = r.message[0].invoice_no;
//                     let lastNumber = parseInt(lastBondNo.split("/").pop()) || 0;
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value('invoice_no', prefix + newNumber);
//                 } else {
//                     frm.set_value('invoice_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }


