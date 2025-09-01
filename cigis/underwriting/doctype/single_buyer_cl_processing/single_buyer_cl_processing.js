// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt
// frappe.ui.form.on('Single Buyer CL Processing', {
   
//     refresh: function(frm){
//             var workflowState = frm.doc.workflow_state;
//           if (frm.doc.yes) {
//             if (workflowState === "Pending" || workflowState === "Approved") {
//                 frm.add_custom_button(__('View CB Report'), function() {
//                 frappe.call({
//                  method: "frappe.client.get",
//                 args: {
//                 doctype: "CB Report",
//                 filters: {
//                     buyer: frm.doc.buyer,
//                     refnumber: frm.doc.cl_check_no,
//                 },
//                 fields: ["cb_request_number", "reqdate", "buyer", "refnumber", "date", "catagory", "code", "details", "description"]
//             },
//             callback: function (r) {
//                 if (!r.exc) {
//                     var cbReportData = r.message;
//                     if (cbReportData) {
//                         // Open prompt dialog only if data is found
//                         frappe.prompt([
//                             {'fieldname': 'credit_bureau_request', 'fieldtype': 'Heading', 'label': 'Credit Bureau Request'},
//                             {'fieldname': 'section_break_2','fieldtype': 'Section Break','label': ''},
//                             {'fieldname': 'cb_request_number', 'fieldtype': 'Data', 'label': 'CB Req Number', 'default': cbReportData.cb_request_number},
//                             {'fieldname': 'reqdate', 'fieldtype': 'Date', 'label': 'Req.Date', 'default': cbReportData.reqdate},
//                             {'fieldname': 'buyer', 'fieldtype': 'Data', 'label': 'Buyer', 'default': cbReportData.buyer},
//                             {'fieldname': 'column_break_1','fieldtype': 'Column Break','label': ''},
//                             {'fieldname': 'refnumber', 'fieldtype': 'Data', 'label': 'Ref.Number','default': cbReportData.refnumber},
//                             {'fieldname': 'section_break_3','fieldtype': 'Section Break','label': ''},
//                             {'fieldname': 'section_break_4','fieldtype': 'Section Break','label': ''},
//                             {'fieldname': 'credit_bureau_responce', 'fieldtype': 'Heading', 'label': 'Credit Bureau Response'},
//                             {'fieldname': 'section_break_5','fieldtype': 'Section Break','label': ''},
//                             {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date', 'default': cbReportData.date},
//                             {'fieldname': 'catagory', 'fieldtype': 'Data', 'label': 'Category', 'default': cbReportData.catagory},
//                             {'fieldname': 'code', 'fieldtype': 'Data', 'label': 'Code',  'default': cbReportData.code},
//                             {'fieldname': 'column_break_2','fieldtype': 'Column Break','label': ''},
//                             {'fieldname': 'details', 'fieldtype': 'Data', 'label': 'Details',  'default': cbReportData.details},
//                             {'fieldname': 'description', 'fieldtype': 'Small Text', 'label': 'Description', 'default': cbReportData.description},
//                         ], function(values){
//                             // Handle user input if needed
//                         }, 'CB Report');
//                     } else {
//                          frappe.msgprint("No CB Report data found for the selected buyer and credit limit number.");
//                          //frappe.msgprint("CB Report is not Available for this Buyer");
    
//                     }
//                 } else {
//                     console.error("Error occurred while fetching CB Report data:", r.exc);
//                      frappe.msgprint("Error occurred while fetching CB Report data. Please try again.");
//                 }
//             }
//         });   
    
    
//                 }).addClass("btn-primary");
//             }
//              }
    
                  
     
//             if(frm.doc.yes){
//             if (workflowState === "Pending" || workflowState === "Approved") {
//                 frm.toggle_display('cbreport', true);
//                 frm.toggle_display('report', false);
//                 frm.toggle_display('cb_request', false);
//                 // frm.toggle_display('table', false);
    
//             }
                
//             }   
//         },
//     cb_requests:function(frm){
//           frappe.new_doc('CB Request'); 
//               frappe.route_options = {
//                  buyer: frm.doc.buyer,
//                  refnumber: frm.doc.cl_check_no,
//                  policy_type: frm.doc.buyer_type
//             }
//          },
         
         
//      onload: function(frm){
            
//          frappe.call({
//           method: 'frappe.client.get_list',
//           args: {
//             'doctype': 'Single Buyer CL Application',
//             'filters': {
//               'workflow_state': 'Approved'
//             },
//             'fields': ['credit_limit_no']
//           },
//           callback: function(submittedProposalsResponse) {
//             if (submittedProposalsResponse.message) {
//               var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
//                 return proposal.credit_limit_no;
//               });
//               console.log("** Submitted Proposals:", submittedProposals);
//               console.log("** Fetching Approved Quotations **");
//               frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                   'doctype': 'Single Buyer CL Processing',
//                   'filters': {
//                     'workflow_state': 'Approved'
//                   },
//                   'fields': ['cl_check_no']
//                 },
//                 callback: function(approvedQuotationsResponse) {
//                     console.log(approvedQuotationsResponse,"approvedQuotationsResponse")
//                   if (approvedQuotationsResponse.message) {
//                     var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
//                       return quotation.cl_check_no;
//                     });
//                     console.log("** Approved Quotations:", approvedQuotations);
//                     // Filter client names (include only proposals not in approved quotations)
//                     var filteredClientNames = submittedProposals.filter(function(proposal) {
//                       return !approvedQuotations.includes(proposal);
//                     });
//                     console.log("** Filtered Client Names:", filteredClientNames);
//                       frm.set_df_property('cl_check_no', 'options', filteredClientNames);
//                       frm.fields_dict.credit_limit_required.$input.css("text-align", "right");
//                       frm.fields_dict.outstanding_amount.$input.css("text-align", "right");
//                       frm.fields_dict.total_exposure.$input.css("text-align", "right");
//                       frm.fields_dict.overdue_amount.$input.css("text-align", "right");
//                       frm.fields_dict.recommended_exposure.$input.css("text-align", "right");
//                       frm.fields_dict.approved_amount.$input.css("text-align", "right");
    
    
     
    
                      
    
//                   }
//                 }
//               }); // Close inner frappe.call
//             }
//           }
//         }); // Close outer frappe.call
    
//           frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'User',
//                     filters: {
//                         enabled: 1  // Fetch only active users
//                     },
//                     fields: ['name', 'full_name']
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         var user_options = response.message.map(user => ({
//                             value: user.name,
//                             label: user.full_name
//                         }));
    
//                         frm.set_df_property('recommended_to', 'options', user_options);
//                     } else {
//                         frappe.msgprint('No users found.');
//                     }
//                 },
//                 error: function(err) {
//                     console.error(err);
//                     frappe.msgprint('An error occurred while fetching the user list.');
//                 }
//             });
     
//         },
//         name1: function(frm) {
//             // Get the value entered in the name1 field
//             var name1Value = frm.doc.name1;
//             // Check if the name1 value is not empty and has at least 4 characters
//             if (name1Value && name1Value.length >= 4) {
//                 // Extract the first 4 characters from the name1 value
//                 var shortNameValue = name1Value.substring(0, 4);
//                 // Set the shortname field value to the extracted short name
//                 frm.set_value('client1', shortNameValue);
//             } else {
//                 // If name1 value is empty or has less than 4 characters, clear the shortname field
//                 frm.set_value('client1', '');
//             }
//         },
        
    
    
//     cl_check_no: function(frm) {
//             var policyNo = frm.doc.cl_check_no;
            
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Single Buyer CL Application',
//                     filters: {
//                         credit_limit_no: policyNo
//                     },
//                     fields: [
//                         'buyer', 'client1', 'comment', 'buyer_short_name', 'credit_limit_required', 'cl_application_date',  'address1', 'dci_buyer', 'eci_buyer'
//                          ]
//                 },
//                 callback: function(response) {
//                     console.log('response',response)
//                     if (response.message && response.message.length > 0) {
//                         var data_from_proposals = response.message[0];
                        
//                         frm.set_value('name1', data_from_proposals.client1 || '');
//                         frm.set_value('buyer', data_from_proposals.buyer_short_name || '');
//                         frm.set_value('buyer_name', data_from_proposals.buyer || '');
//                         frm.set_value('credit_limit_required', data_from_proposals.credit_limit_required || '');
//                         frm.set_value('comment', data_from_proposals.comment || '');
//                         frm.set_value('date', data_from_proposals.cl_application_date || '');
//                         frm.set_value('location', data_from_proposals.address1 || '');
    
//                         // Determine the bond_type based on eci and dci
//                       if (data_from_proposals.eci_buyer) {
//                             frm.set_value('buyer_type', 'ECI');
//                         } else if (data_from_proposals.dci_buyer) {
//                             frm.set_value('buyer_type', 'DCI');
//                         } else {
//                             frm.set_value('buyer_type', '');
//                         }
//                     } else {
//                         // Clear fields if no matching record found
//                         frm.set_value('client1', '');
//                         frm.set_value('name1', '');
//                         frm.set_value('buyer', '');
//                         frm.set_value('buyer_name', '');
//                         frm.set_value('credit_limit_required', '');
//                         frm.set_value('comment', '');
//                         frm.set_value('date', '');
//                         frm.set_value('location', '');
//                         frm.set_value('buyer_type', '');
//     // Get the selected quotation number
//     let cl_check_no = frm.doc.cl_check_no;
    
//     // Re-enable the dropdown field after selection
//     frm.toggle_enable('cl_check_no', true);
    
    
//                         frappe.msgprint('No matching record found in Single Buyer CL Application.');
//                     }
//                 },
//                 error: function(err) {
//                     console.error(err);
//                     frappe.msgprint('An error occurred while fetching data from Single Buyer CL Application. Please check the console for details.');
//                 }
                
                
//             });
//         }
//     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     cb_requests: function(frm){
    //         frappe.route_options = {
    //             buyer: frm.doc.buyer
               
    //         };
              
    //       frappe.new_doc('CB Request'); 
    //         //   frappe.route_options = {
    //         //      buyer: frm.doc.buyer_name,
    //         //      refnumber: frm.doc.credit_limit_no,
    //         //      policy_type: frm.doc.policy_type,
                
    //         // }; 
    //     }
        
    // });
    // //     onload: function(frm) {
    // //         frm.fields_dict['cl_check_no'].get_query = function(doc) {
    // //             return {
    // //                 filters: {
    // //                     "workflow_state": "Approved"
    // //                 }
    // //             };
    // //         };
    // //     },
    // //     refresh: function(frm) {
    // //         // Your refresh logic here
    // //     }
    // // });
    
            
    //             frappe.ui.form.on('Single Buyer CL Processing', {
    //     refresh: function(frm) {
    //         frm.add_custom_button(__('View CB Report'), function() {
    //             // Define cbReportData with actual data
    //             let cbReportData = {
    //                 cb_request_number: 'REQ12345',
    //                 reqdate: '2024-05-16',
    //                 buyer: 'John Doe',
    //                 refnumber: 'REF67890',
    //                 date: '2024-05-16',
    //                 category: 'Finance',
    //                 code: '123',
    //                 details: 'Sample details',
    //                 description: 'Sample description'
    //             };
    
    //             frappe.prompt([
    //                 {'fieldname': 'Cbreport', 'fieldtype': 'Heading', 'label': 'CB Report'},
    //                 {'fieldname': 'section_break_2', 'fieldtype': 'Section Break', 'label': ''},
    //                 {'fieldname': 'credit_bureau_request', 'fieldtype': 'Heading', 'label': 'Credit Bureau Request'},
    //                 {'fieldname': 'section_break_2', 'fieldtype': 'Section Break', 'label': ''},
    //                 {'fieldname': 'cb_req_number', 'fieldtype': 'Data', 'label': 'CB Req Number', 'default': cbReportData.cb_request_number},
    //                 {'fieldname': 'reqdate', 'fieldtype': 'Date', 'label': 'Req.Date', 'default': cbReportData.reqdate},
    //                 {'fieldname': 'buyer', 'fieldtype': 'Data', 'label': 'Buyer', 'default': cbReportData.buyer},
    //                 {'fieldname': 'column_break_1', 'fieldtype': 'Column Break', 'label': ''},
    //                 {'fieldname': 'refnumber', 'fieldtype': 'Data', 'label': 'Ref.Number', 'default': cbReportData.refnumber},
    //                 {'fieldname': 'section_break_3', 'fieldtype': 'Section Break', 'label': ''},
    //                 {'fieldname': 'section_break_4', 'fieldtype': 'Section Break', 'label': ''},
    //                 {'fieldname': 'credit_bureau_responce', 'fieldtype': 'Heading', 'label': 'Credit Bureau Response'},
    //                 {'fieldname': 'section_break_5', 'fieldtype': 'Section Break', 'label': ''},
    //                 {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date', 'default': cbReportData.date},
    //                 {'fieldname': 'category', 'fieldtype': 'Data', 'label': 'Category', 'default': cbReportData.category},
    //                 {'fieldname': 'code', 'fieldtype': 'Data', 'label': 'Code', 'default': cbReportData.code},
    //                 {'fieldname': 'column_break_2', 'fieldtype': 'Column Break', 'label': ''},
    //                 {'fieldname': 'details', 'fieldtype': 'Data', 'label': 'Details', 'default': cbReportData.details},
    //                 {'fieldname': 'description', 'fieldtype': 'Small Text', 'label': 'Description', 'default': cbReportData.description},
    //             ], function(values){
    //                 // Handle user input if needed
    //                 console.log(values);
    //             }, 'CB Report');
    //         });
    //     }
    // });
    
    
    
     
    
    
        
    