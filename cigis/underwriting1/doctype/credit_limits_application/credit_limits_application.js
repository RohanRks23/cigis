// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Credit Limits Application', {
//     onload: function(frm) {
//         // Auto-generate credit limit number if not already populated
//         if (!frm.doc.credit_limit_no) {
//             generateNumber(frm);
//              //frm.set_value("terms_of_payments", "30 ");
//         }
        

 	 

        

//         // Fetch and set approved policy numbers in dropdown
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 'doctype': 'Credit Limits Application',
//                 'filters': {
//                     'workflow_state': 'Approved'
//                 },
//                 'fields': ['policy_number'],
//                 limit_page_length: 100
//             },
//             callback: function(submittedApplicationsResponse) {
//                 console.log(submittedApplicationsResponse,"submittedApplicationsResponse");
//                 if (submittedApplicationsResponse.message) {
//                     var submittedPolicyNumbers = submittedApplicationsResponse.message.map(function(application) {
//                         return application.policy_number;
//                     });

//                     // Fetch approved applications
//                     frappe.call({
//                         method: 'frappe.client.get_list',
//                         args: {
//                             'doctype': 'Policy Approvals',
//                             'filters': {
//                                 'workflow_state': 'Approved'
//                             },
//                             'fields': ['policy_number'],
//                             limit_page_length: 100
//                         },
//                         callback: function(approvedApplicationsResponse) {
//                           console.log(submittedApplicationsResponse,"submittedApplicationsResponse");
//                             if (approvedApplicationsResponse.message) {
//                                 var approvedPolicyNumbers = approvedApplicationsResponse.message.map(function(application) {
//                                     return application.policy_number;
//                                 });

//                                 var filteredClientNames = approvedPolicyNumbers.filter(function(application) {
//                                     return !submittedPolicyNumbers.includes(application);
//                                 });

//                                 // Set dropdown options with approved policy numbers
//                                 frm.set_df_property('policy_number', 'options', filteredClientNames);

//                                 // Set dropdown query with approved policy numbers
//                                 frm.set_query('policy_number', function() {
//                                     return {
//                                         filters: {
//                                             'name': ['in', approvedPolicyNumbers]
//                                         }
//                                     };
//                                 });
//                             }
//                         }
//                     });
//                 }
//             }
//          });
         
        





//         // Toggle display based on workflow state
//         var workflowState = frm.doc.workflow_state;
//         if (workflowState === "Approved") {
//             frm.toggle_display('policy_no', true);
//             frm.toggle_display('policy_number', false);
//         }
//           frm.fields_dict.new.$input.on('click', function() {
//             frappe.new_doc('Buyer');
//         });
//         frm.fields_dict.new.$input.addClass('btn-primary');
//     },
//     policy_number: function(frm) {
//         var policyNumber = frm.doc.policy_number;

//         // Set the value of policy_number field
//         frm.set_value('policy_no', policyNumber);

//         // Fetch data based on selected policy number
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Policy Approvals',
//                 filters: {
//                     policy_number: policyNumber
//                 },
//                 fields: ['policy_number', 'policy_holder', 'status', 'inception_date', 'policy_type']
//             },
//             callback: function(response) {
//                 if (response.message && response.message.length > 0) {
//                     var dataFromApprovals = response.message[0];

//                     // Populate fields if data is found
//                     frm.set_value('policy_number', dataFromApprovals.policy_number || '');
//                     frm.set_value('policy_holder_name', dataFromApprovals.policy_holder || '');
//                     frm.set_value('status', dataFromApprovals.status || '');
//                     frm.set_value('inception_date', dataFromApprovals.inception_date || '');
//                     frm.set_value('policy_type', dataFromApprovals.policy_type || '');

//                     // Set policy expire date
//                     setPolicyExpireDate(frm, dataFromApprovals.inception_date || '');
//                 } else {
//                     // Clear fields if no matching record found
//                     frm.set_value('policy_number', '');
//                     frm.set_value('policy_holder_name', '');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
//             }
//         });
// //          frappe.call({
// //             method: "frappe.client.get",
// //             args: {
// //                 doctype: "DCI Proposals",
// //                 filters: {
// //                     client_name: frm.doc.policy_holder_name,
// //                   // workflow_state: 'Submitted',
                    
                    
// //                 },
// //                 fields: ["principal_buyer_child_table"]
// //             },
// //           callback: function (r) {

// //                 console.log(r,"clent short name")

// //                 if (!r.exc) {
// //             if (r.message && r.message.principal_buyer_child_table && r.message.principal_buyer_child_table.length > 0) {
// //                 let buyer_name = r.message.principal_buyer_child_table[0].buyer_name;
// //                 //frm.set_value('buyer', buyer_name);
// //                 frm.set_df_property('buyer', 'options', buyer_name);
// //             }
// //         } else {

// //                     console.error("Error occurred:", r.exc);

// //                 }

// //             }
// // });

//         // Set default value for terms_of_payments
//       //  frm.set_value("terms_of_payments", "30 ");

//         // Attach click event to 'new' button
//         frm.fields_dict.new.$input.on('click', function() {
//             frappe.new_doc('Buyer');
//         });
//         frm.fields_dict.new.$input.addClass('btn-primary');
//     },
//     refresh: function(frm) {
//         // Set query filters for policy_number field
//         frm.fields_dict['policy_number'].get_query = function(doc) {
//             return {
//                 filters: {
//                     "workflow_state": "Approved",
//                     "status": "Active"
//                 }
//             };
//         };
//         frm.fields_dict.account_number.$input.css("text-align", "right");
//                 frm.fields_dict.limit_required.$input.css("text-align", "right");
//                   frm.fields_dict.terms_of_payments.$input.css("text-align", "right");
//                   frm.fields_dict.no_of_employees.$input.css("text-align", "right");
//                                       frm.fields_dict.reg_noid_no.$input.css("text-align", "right");
                                         

// if (frm.fields_dict.new) {
//             frm.fields_dict.new.$input.on('click', function() {
//                 frappe.new_doc('Buyer');
//             });
//             frm.fields_dict.new.$input.addClass('btn-primary');
//         }


//     }
// });

// // Function to generate credit limit number
// function generateNumber(frm) {
//     // Check if the credit limit no field is already populated
//     if (!frm.doc.credit_limit_no) {
//         // Get the current year
//         let currentYear = new Date().getFullYear();
//         let prefix = `CRL/${currentYear}/`;

//         // Make a call to get the last number asynchronously
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Credit Limits Application',
//                 fields: ['credit_limit_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastcredit_limit_no = r.message[0].credit_limit_no;
//                     let lastNumber = parseInt(lastcredit_limit_no.split("/").pop()); // Extract last part and parse it as integer
//                     if (!isNaN(lastNumber)) {
//                         // Increment the last number and pad it with leading zeros
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('credit_limit_no', prefix + newNumber);
//                     }
//                 } else {
//                     // If no previous numbers exist, set to default '0001'
//                     frm.set_value('credit_limit_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }

// // Function to set policy expire date
// function setPolicyExpireDate(frm, inceptionDate) {
//     var inceptionDateObj = frappe.datetime.str_to_obj(inceptionDate);
//     var policyExpireDate = new Date(inceptionDateObj);
//     policyExpireDate.setFullYear(policyExpireDate.getFullYear() + 1);
//     frm.set_value('policy_expire_date', frappe.datetime.obj_to_user(policyExpireDate));
// }


  

 
