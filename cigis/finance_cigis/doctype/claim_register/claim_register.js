// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Claim Register', {
//     refresh: function(frm) {
//         frm.fields_dict.claim_value.$input.css("text-align", "right");
//         var workflowState = frm.doc.workflow_state;
//         if (workflowState === "Approved") {
//             frm.toggle_display('policyno', true);
//             frm.toggle_display('policy_no', false);
//         }
//     },

//     onload: function(frm) {
//         if (!frm.doc.claim_reg_no) {
//             generateNumber(frm);
//         }

//         // Fetch unique policy holders from Policy Approvals
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Policy Approvals',
//                 fields: ['policy_holder'],
//                 limit_page_length: 1000
//             },
//             callback: function(response) {
//                 console.log("policy_holder received:", response);

//                 if (response.message) {
//                     let uniquePolicyHolders = [];
//                     response.message.forEach(function(record) {
//                         if (!uniquePolicyHolders.includes(record.policy_holder)) {
//                             uniquePolicyHolders.push(record.policy_holder);
//                         }
//                     });

//                     frm.set_df_property('ph_name', 'options', uniquePolicyHolders);
//                     console.log("final", uniquePolicyHolders);
//                 }
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching policy holders:", textStatus, errorThrown);
//             }
//         });
//     },

// ph_name: function(frm) {
//     var phName = frm.doc.ph_name;

//     // Fetch data from Policy Approvals based on selected policy_holder
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Approvals',
//             filters: {
//                 policy_holder: phName,
//                 workflow_state: 'Approved' // Assuming you only want approved records
//             },
//             fields: ['policy_number']
//         },
//         callback: function(r) {
//             console.log(r, "policy details");

//             if (!r.exc && r.message && r.message.length > 0) {
//                 // Collect all policy numbers
//                 let policyNumbers = r.message.map(x => x.policy_number);

//                 // Set options and value for policy_no
//                 frm.set_df_property('policy_no', 'options', policyNumbers);
//                 frm.set_value('policy_no', policyNumbers[0]);
//                 frm.set_value('policyno', buyers.join('\n'));  
//             } else {
//                 // Handle case where no matching records are found
//                 frm.set_df_property('policy_no', 'options', []);
//                 frm.set_value('policy_no', '');
//                 frm.set_value('policyno', ''); 
//                 console.log("No matching records found");
//             }
//         },
//         error: function(r) {
//             console.error("Error occurred:", r.exc);
//             frappe.msgprint("Error occurred while fetching policy details");
//         }
//     });
// },
// policy_no: function(frm) {    
//         var phNo = frm.doc.policy_no;

//         // Fetch data from Credit Limits Application based on selected policy number
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Credit Limits Application',
//                 filters: {
//                     policy_number: policy_no
//                 },
//                 fields: ['buyer']
//             },
//             callback: function(r) {
//                 console.log(r, "buyer details");

//                 if (!r.exc && r.message && r.message.length > 0) {
//                     var buyers = r.message.map(function(record) {
//                         return record.buyer;
//                     });

//                     // Set options and set value for buyer
//                     frm.set_df_property('buyer', 'options', buyers);
//                     frm.set_value('buyer', buyers[0]);  // Set the first buyer as default
//                     frm.set_value('buyerinfo', buyers.join('\n'));  // Set the buyerinfo field

//                     // Set value for policyno field
//                     frm.set_value('policyno', phNo);
//                 } else {
//                     // Handle case where no matching records are found
//                     frm.set_df_property('buyer', 'options', []);
//                     frm.set_value('buyer', '');  // Clear the field or set a default value
//                     frm.set_value('buyerinfo', '');  // Clear the buyerinfo field
//                     console.log("No matching records found");
//                 }
//             },
//             error: function(r) {
//                 console.error("Error occurred:", r.exc);
//                 frappe.msgprint("Error occurred while fetching buyer details");
//             }
//         });
//     }
// });
// function generateNumber(frm) {

//     // Check if the proposal number field is already populated

//     if (!frm.doc.claim_reg_no) {

//         // Get the current year

//         let currentYear = new Date().getFullYear();

//         let prefix = `RCLM/${currentYear}/`;
 
//         // Make a call to get the last number asynchronously

//         frappe.call({

//             method: 'frappe.client.get_list',

//             args: {

//                 doctype: 'Claim Register',

//                 fields: ['claim_reg_no', 'creation'],

//                 order_by: 'creation desc',

//                 limit: 1

//             },

//             callback: function(r) {

//                 console.log(r,"ClaimRegNo");

//                 if (r.message && r.message.length > 0) {

//                     let lastClaimRegNo = r.message[0].claim_reg_no;

//                     let lastNumber = parseInt(lastClaimRegNo.split("/").pop()); // Extract last part and parse it as integer

//                     if (!isNaN(lastNumber)) {

//                         // Increment the last number and pad it with leading zeros

//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');

//                         frm.set_value('claim_reg_no', prefix + newNumber);

//                     }

//                 } else {

//                     // If no previous numbers exist, set to default '0001'

//                     frm.set_value('claim_reg_no', prefix + '0001');

//                 }

//             }

//         });

//     }

// }

