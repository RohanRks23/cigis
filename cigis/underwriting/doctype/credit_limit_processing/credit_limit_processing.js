// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Credit Limit Processing', {
//     refresh: function(frm) {
//        frm.fields_dict.credit_limit.$input.css("text-align", "right");
//        frm.fields_dict.overdue_amount.$input.css("text-align", "right");
//        frm.fields_dict.outstanding_amount.$input.css("text-align", "right");
//        frm.fields_dict.total_exposure.$input.css("text-align", "right");
//        frm.fields_dict.recommended_exposure.$input.css("text-align", "right");
//        frm.fields_dict.approved_amount.$input.css("text-align", "right");
      
       
       
//       var workflowState = frm.doc.workflow_state;
 
//         // Create a custom button for "Print Proposal" if the workflow state is "Submitted"
//         if (workflowState === "Approved") {
//             frm.add_custom_button(__('Print Annexure'), function() {
//                 frappe.new_doc('Credit Limit  Annexure')
//                     frappe.route_options = {
//                     capture_date: frm.doc.capture_date,
//                     policy_holder_name: frm.doc.policy_holder_name,
//                     policy_no:frm.doc.policy_no,
//                     credit_limit_no: frm.doc.credit_limit_no,
//                     buyer_name:frm.doc.buyer_name,
//                     trading__style: frm.doc.trading__style,
//                     location: frm.doc.location,
//                     credit_limit: frm.doc.approved_amount,
//                     terms_of_payments: frm.doc.terms_of_payments,
//                     days_from:frm.doc.days_from,
//                     conditions: frm.doc.conditions,
//                     buyer_id: frm.doc.buyer_id
//                 }
//                 console.log("Print Proposal clicked!");
//             }).addClass("btn-primary");
//         }
//         frm.fields_dict.financial_analysis.$input.addClass('btn-primary');
//         frm.fields_dict.director_share_holder_exposure.$input.addClass('btn-primary');
//         if (frm.doc.yes) {
//         if (workflowState === "Pending" || workflowState === "Approved") {
//             frm.add_custom_button(__('View CB Report'), function() {
//             frappe.call({
//              method: "frappe.client.get",
//             args: {
//             doctype: "CB Report",
//             filters: {
//                 buyer: frm.doc.buyer_name,
//                 refnumber: frm.doc.credit_limit_no,
//             },
//             fields: ["cb_request_number", "reqdate", "buyer", "refnumber", "date", "catagory", "code", "details", "description"]
//         },
//         callback: function (r) {
//             if (!r.exc) {
//                 var cbReportData = r.message;
//                 if (cbReportData) {
//                     // Open prompt dialog only if data is found
//                     frappe.prompt([
//                         {'fieldname': 'credit_bureau_request', 'fieldtype': 'Heading', 'label': 'Credit Bureau Request'},
//                         {'fieldname': 'section_break_2','fieldtype': 'Section Break','label': ''},
//                         {'fieldname': 'cb_request_number', 'fieldtype': 'Data', 'label': 'CB Req Number', 'default': cbReportData.cb_request_number},
//                         {'fieldname': 'reqdate', 'fieldtype': 'Date', 'label': 'Req.Date', 'default': cbReportData.reqdate},
//                         {'fieldname': 'buyer', 'fieldtype': 'Data', 'label': 'Buyer', 'default': cbReportData.buyer},
//                         {'fieldname': 'column_break_1','fieldtype': 'Column Break','label': ''},
//                         {'fieldname': 'refnumber', 'fieldtype': 'Data', 'label': 'Ref.Number','default': cbReportData.refnumber},
//                         {'fieldname': 'section_break_3','fieldtype': 'Section Break','label': ''},
//                         {'fieldname': 'section_break_4','fieldtype': 'Section Break','label': ''},
//                         {'fieldname': 'credit_bureau_responce', 'fieldtype': 'Heading', 'label': 'Credit Bureau Response'},
//                         {'fieldname': 'section_break_5','fieldtype': 'Section Break','label': ''},
//                         {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date', 'default': cbReportData.date},
//                         {'fieldname': 'catagory', 'fieldtype': 'Data', 'label': 'Category', 'default': cbReportData.catagory},
//                         {'fieldname': 'code', 'fieldtype': 'Data', 'label': 'Code',  'default': cbReportData.code},
//                         {'fieldname': 'column_break_2','fieldtype': 'Column Break','label': ''},
//                         {'fieldname': 'details', 'fieldtype': 'Data', 'label': 'Details',  'default': cbReportData.details},
//                         {'fieldname': 'description', 'fieldtype': 'Small Text', 'label': 'Description', 'default': cbReportData.description},
//                     ], function(values){
//                         // Handle user input if needed
//                     }, 'CB Report');
//                 } else {
//                      frappe.msgprint("No CB Report data found for the selected buyer and credit limit number.");
//                      //frappe.msgprint("CB Report is not Available for this Buyer");
 
//                 }
//             } else {
//                 console.error("Error occurred while fetching CB Report data:", r.exc);
//                  frappe.msgprint("Error occurred while fetching CB Report data. Please try again.");
//             }
//         }
//     });   
 
 
//             }).addClass("btn-primary");
//         }
//          }
 
              
//         if(frm.doc.yes){
//         if (workflowState === "Pending" || workflowState === "Approved") {
//             frm.toggle_display('cbreport', true);
//             frm.toggle_display('report', false);
//             frm.toggle_display('cb_request', false);
//             // frm.toggle_display('table', false);
 
//         }
//         }
 
//          if (workflowState === "Approved") {
//             frm.toggle_display('policy_number', true);
//             frm.toggle_display('policy_no', false);

//         }

 
    
//     },
// onload: function(frm){
//      frappe.call({
//       method: 'frappe.client.get_list',
//       args: {
//         'doctype': 'Credit Limits Application',
//         'filters': {
//           'workflow_state': 'Approved'
//         },
//         'fields': ['policy_number'],
//           limit_page_length: 100
//       },
//       callback: function(submittedProposalsResponse) {
//         if (submittedProposalsResponse.message) {
//           var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
//             return proposal.policy_number;
//           });
//           console.log("** Submitted Proposals:", submittedProposals);
//           console.log("** Fetching Approved Quotations **");
//           frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//               'doctype': 'Credit Limit Processing',
//               'filters': {
//                 'workflow_state': 'Approved'
//               },
//               'fields': ['policy_no']
//             },
//             callback: function(approvedQuotationsResponse) {
//                 console.log(approvedQuotationsResponse,"approvedQuotationsResponse")
//               if (approvedQuotationsResponse.message) {
//                 var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
//                   return quotation.policy_no;
//                 });
//                 console.log("** Approved Quotations:", approvedQuotations);
//                 // Filter client names (include only proposals not in approved quotations)
//                 var filteredClientNames = submittedProposals.filter(function(proposal) {
//                   return !approvedQuotations.includes(proposal);
//                 });
//                 console.log("** Filtered Client Names:", filteredClientNames);
//                   frm.set_df_property('policy_no', 'options', filteredClientNames);
 
                  
 
//               }
//             }
//           }); // Close inner frappe.call
//         }
//       }
//     }); // Close outer frappe.call
 
 

//     },

 
//    policy_no: function(frm) {
//     var policyNo = frm.doc.policy_no;
 
//     // Set the value of policy_number field
//     frm.set_value('policy_number', policyNo);
 
//     // Fetch data from DCI Proposals based on selected policy_no
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Limits Application',
//             filters: {
//                 policy_number: policyNo
//             },
//             fields: ['policy_holder_name', 'inception_date', 'credit_limit_no', 'buyer', 'estd_date', 'no_of_employees', 'policy_type', 'trading_style', 'limit_required']
//         },
//         callback: function(response) {
//             if (response.message && response.message.length > 0) {
//                 var data_from_proposals = response.message[0];
//                 // Populate fields if data is found
//                 frm.set_value('policy_holder_name', data_from_proposals.policy_holder_name || '');
//                 frm.set_value('capture_date', data_from_proposals.inception_date || '');
//                 frm.set_value('credit_limit_no', data_from_proposals.credit_limit_no || '');
//                 frm.set_value('buyer_name', data_from_proposals.buyer || '');
//                 frm.set_value('estd_date', data_from_proposals.estd_date || '');
//                 frm.set_value('noof_employees', data_from_proposals.no_of_employees || '');
//                 frm.set_value('policy_type', data_from_proposals.policy_type || '');
//                 frm.set_value('trading__style', data_from_proposals.trading_style || '');
//                  frm.set_value('credit_limit', data_from_proposals.limit_required || '');
 
//             } else {
//                 // Clear fields if no matching record found
//                 frm.set_value('policy_holder_name', '');
//                 frm.set_value('capture_date', '');
//                 frm.set_value('credit_limit_no', '');
//                 frm.set_value('buyer_name', '');
//                 frm.set_value('estd_date', '');
//                 frm.set_value('noof_employees', '');
//                 frm.set_value('policy_type', '');
//                 frm.set_value('trading__style', '');
//                 frm.set_value('credit_limit', '');
//                 frappe.msgprint('No matching record found in DCI Proposals.');
//             }
//         },
//         error: function(err) {
//             console.error(err);
//             frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//         }
//     });
 
// },
// cb_request: function(frm) {
//         frappe.new_doc('CB Request'); 
//           frappe.route_options = {
//              buyer: frm.doc.buyer_name,
//              refnumber: frm.doc.credit_limit_no,
//              policy_type: frm.doc.policy_type,
//             }; 
//     //   frappe.prompt([
//     //         {'fieldname': 'toaddress', 'fieldtype': 'Data','label': 'TO'},
//     //         {'fieldname': 'attention', 'fieldtype': 'Data', 'label': 'ATTENTION'},
//     //         {'fieldname': 'from', 'fieldtype': 'Data', 'label': 'FROM'},
//     //         {'fieldname': 'attention1', 'fieldtype': 'Data', 'label': 'ATTENTION'},
//     //         {'fieldname': 'subject', 'fieldtype': 'Data', 'label': 'Subject'},
//     //         {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date', 'default': frappe.datetime.get_today()},
//     //         {'fieldname': 'amount_required', 'fieldtype': 'Data', 'label': 'Amount Required'},

//     //     ],
//     //     function(values){
//     //         var data = {
//     //             toaddress: values.toaddress,
//     //             attention: values.attention,
//     //             from: values.from,
//     //             attention1: values.attention1,
//     //             subject: values.subject,
//     //             date: values.date,
//     //             amount_required: values.amount_required,
//     //         };
//     //         // Save the object to LocalStorage
//     //         localStorage.setItem('CB Request ChildTable', JSON.stringify(data));
 
//     //         // Retrieve the data from LocalStorage
//     //         var CB_Request_ChildTable = JSON.parse(localStorage.getItem('CB Request ChildTable'));
//     //         // Log the retrieved data to the console
//     //         console.log(CB_Request_ChildTable, "data");
//     //         // Add the retrieved data to the child table
//     //         addDataToChildTable(frm, CB_Request_ChildTable);
//     //     },
//     //     'CB Request');
//     },
//     //  view_cb_report: function(frm) {
// //       // Fetch data from CB Report doctype based on buyer name and credit limit number
// //       frappe.call({
// //         method: "frappe.client.get",
// //         args: {
// //             doctype: "CB Report",
// //             filters: {
// //                 buyer: frm.doc.buyer_name,
// //                 refnumber: frm.doc.credit_limit_no,
// //             },
// //             fields: ["cb_request_number", "reqdate", "buyer", "refnumber", "date", "catagory", "code", "details", "description"]
// //         },
// //         callback: function (r) {
// //             if (!r.exc) {
// //                 var cbReportData = r.message;
// //                 if (cbReportData) {
// //                     // Open prompt dialog only if data is found
// //                     frappe.prompt([
// //                         {'fieldname': 'credit_bureau_request', 'fieldtype': 'Heading', 'label': 'Credit Bureau Request'},
// //                         {'fieldname': 'section_break_2','fieldtype': 'Section Break','label': ''},
// //                         {'fieldname': 'cb_request_number', 'fieldtype': 'Data', 'label': 'CB Req Number', 'default': cbReportData.cb_request_number},
// //                         {'fieldname': 'reqdate', 'fieldtype': 'Date', 'label': 'Req.Date', 'default': cbReportData.reqdate},
// //                         {'fieldname': 'buyer', 'fieldtype': 'Data', 'label': 'Buyer', 'default': cbReportData.buyer},
// //                          {'fieldname': 'column_break_1','fieldtype': 'Column Break','label': ''},
// //                         {'fieldname': 'refnumber', 'fieldtype': 'Data', 'label': 'Ref.Number','default': cbReportData.refnumber},
// //                         {'fieldname': 'section_break_3','fieldtype': 'Section Break','label': ''},
// //                         {'fieldname': 'section_break_4','fieldtype': 'Section Break','label': ''},
// //                         {'fieldname': 'credit_bureau_responce', 'fieldtype': 'Heading', 'label': 'Credit Bureau Response'},
// //                         {'fieldname': 'section_break_5','fieldtype': 'Section Break','label': ''},
// //                         {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date', 'default': cbReportData.date},
// //                         {'fieldname': 'catagory', 'fieldtype': 'Data', 'label': 'Category', 'default': cbReportData.catagory},
// //                         {'fieldname': 'code', 'fieldtype': 'Data', 'label': 'Code',  'default': cbReportData.code},
// //                          {'fieldname': 'column_break_2','fieldtype': 'Column Break','label': ''},
// //                         {'fieldname': 'details', 'fieldtype': 'Data', 'label': 'Details',  'default': cbReportData.details},
// //                         {'fieldname': 'description', 'fieldtype': 'Small Text', 'label': 'Description', 'default': cbReportData.description},
// //                     ], function(values){
// //                         // Handle user input if needed
// //                     }, 'CB Report');
// //                 } else {
// //                     frappe.msgprint("No CB Report data found for the selected buyer and credit limit number.");
// //                 }
// //             } else {
// //                 console.error("Error occurred while fetching CB Report data:", r.exc);
// //                 frappe.msgprint("Error occurred while fetching CB Report data. Please try again.");
// //             }
// //         }
// //     });
// // },
// // policy_no: function(frm) {
//     //     var policy_no = frm.doc.policy_no;
//     //     // Fetch data from DCI Proposals based on selected client name
//     //     frappe.call({
//     //         method: 'frappe.client.get_list',
//     //         args: {
//     //             doctype: 'Credit Limits Application',
//     //             filters: {
//     //                  policy_number:policy_no
//     //             },
//     //             fields: ['policy_holder_name', 'inception_date', 'credit_limit_no','buyer','estd_date','no_of_employees','policy_type','trading_style']
//     //         },
//     //         callback: function(response) {
//     //             if (response.message && response.message.length > 0) {
//     //                 var data_from_proposals = response.message[0];
//     //                 // Populate fields if data is found
//     //                 frm.set_value('policy_holder_name', data_from_proposals.policy_holder_name || '');
//     //                 frm.set_value('capture_date', data_from_proposals.inception_date || '');
//     //                 frm.set_value('credit_limit_no', data_from_proposals.credit_limit_no || '');
//     //                 frm.set_value('buyer_name', data_from_proposals.buyer || '');
//     //                 frm.set_value('estd_date', data_from_proposals.estd_date || '');
//     //                 frm.set_value('noof_employees', data_from_proposals.no_of_employees || '');
//     //                 frm.set_value('policy_type', data_from_proposals.policy_type || '');
//     //                 frm.set_value('trading__style', data_from_proposals.trading_style || '');
 
//     //             } else {
//     //                 // Clear fields if no matching record found
//     //                 frm.set_value('policy_holder_name', '');
//     //                 frm.set_value('capture_date', '');
//     //                 frm.set_value('credit_limit_no', '');
//     //                 frm.set_value('buyer_name', '');
//     //                 frm.set_value('estd_date', '');
//     //                 frm.set_value('noof_employees', '');
//     //                 frm.set_value('policy_type', '');
//     //                 frm.set_value('trading__style', '');
//     //                 frappe.msgprint('No matching record found in DCI Proposals.');
//     //             }
//     //         },
//     //         error: function(err) {
//     //             console.error(err);
//     //             frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//     //         }
//     //     });
//     // },
 
//     buyer_name: function(frm) {
//     var buyer_name = frm.doc.buyer_name; // Get the value of buyer_name from the form
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Buyer',
//             filters: {
//                 buyer_name: buyer_name // Use the buyer_name variable here
//             },
//             fields: ['buyer_name', 'buyer_id']
//         },
//         callback: function(r) {
//             console.log(r, 'finance');
//             if (r.message && r.message.length > 0) {
//                 // Assuming only one buyer is expected in the response
//                 frm.set_value('buyer_id', r.message[0].buyer_id);
//             } else {
//                 // Handle case when no buyer is found with the given name
//                 frm.set_value('buyer_id', '');
//             }
//         }
//     });
// },
// director_share_holder_exposure: function(frm) {

//     // Open Director and Shareholder Exposure directly
//     frappe.new_doc('Director and Shareholder Exposure');
//     frappe.route_options = {
//         buyer_name: frm.doc.buyer_name
//     };
 
//     // Add a hook to hide fields after the document is created
//     frappe.ui.form.on('Director and Shareholder Exposure', {
//         onload: function(frm) {
//             // Hide the specific fields and search button
//             frm.toggle_display('director_shareholder', false);
//             frm.toggle_display('search',false);
//             // Replace 'director_shareholder_field' with the actual field name you want to hide
//             frm.page.btn_primary.hide(); // Hides the primary button, typically the save button
 
//             // To hide the search button specifically, you might need to use jQuery or direct DOM manipulation
//             // Assuming the search button has a class or ID you can select
//             $('.search-btn-class').hide();// Replace with the actual class or ID selector for the search button
//         }
//     });
// },


 
//     financial_analysis: function(frm) {
//         frappe.new_doc('Financial Analysis');
//         frappe.route_options = {
//             buyer: frm.doc.buyer_name
//         };
//     }
// });
 
//  function addDataToChildTable(frm, data) {
//     // Access the child table grid
//     var childTable = frm.fields_dict['table'].grid;
//     // Add a new row to the child table
//     var newRow = childTable.add_new_row();
//     // Set values for each field in the row
//     frappe.model.set_value(newRow.doctype, newRow.name, 'toaddress', data.toaddress);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'attention', data.attention);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'from', data.from);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'attention1', data.attention1);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'subject', data.subject);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'date', data.date);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'amount_required', data.amount_required);

//     // Refresh the child table to reflect the changes
//     childTable.refresh()
// }

