// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Policy Approvals', {
//     onload: function(frm) {
        
  
        
//     if (!frm.doc.policy_number) {
//             generateNumber(frm, 'policy_number');
//         }
       


//     frappe.call({
//     method: 'frappe.client.get_list',
//     args: {
//         doctype: 'DCIQuotation',
//         filters: {
//             'workflow_state': 'Approved'
//         },
//         fields: ['schedule_no'],
//         limit_page_length: 100  // Adjust this value as needed
//     },
//     callback: function(dci_response) {
//         console.log("DCI schedule_no received:", dci_response);

//         if (dci_response.message) {
//             let dciArray = dci_response.message.map(x => x.schedule_no);

//             // Fetch ECI Quotations after getting DCI Quotations
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'ECI Quotations',
//                     filters: {
//                         'workflow_state': 'Approved'
//                     },
//                     fields: ['schedule_no'],
//                     limit_page_length: 100  // Adjust this value as needed
//                 },
//                 callback: function(eci_response) {
//                     console.log("ECI schedule_no received:", eci_response);

//                     if (eci_response.message) {
//                         let eciArray = eci_response.message.map(x => x.schedule_no);
//                         let finalArray = dciArray.concat(eciArray);  // Combine both arrays
//                         frm.set_df_property('quotation_numbers', 'options', finalArray);
//                         console.log("final", finalArray);
//                     }
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching ECI Quotations:", textStatus, errorThrown);
//                 }
//             });
//         }
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching DCI Quotations:", textStatus, errorThrown);
//     }
// });

    
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//         doctype: 'Policy Approvals',
//         filters: {
//             workflow_state: 'Approved',
//             quotation_numbers: ['in', submittedDCIQuotations.concat(submittedECIQuotations)]
//           },
//         fields: ['quotation_numbers']
//        },
//        callback: function(approvedPolicyApprovalsResponse) {
//         if (approvedPolicyApprovalsResponse.message) {
//             var approvedPolicyApprovals = approvedPolicyApprovalsResponse.message.map(function(policyApproval) {
//                 return policyApproval.quotation_numbers;
//             });

//             console.log("** Approved Policy Approvals:", approvedPolicyApprovals);

//             var filteredQuotations = submittedDCIQuotations.concat(submittedECIQuotations).filter(function(quotation) {
//                 return !approvedPolicyApprovals.includes(quotation);
//             });

//             console.log("** Filtered Quotations:", filteredQuotations);

//             frm.set_df_property('quotation_numbers', 'options', filteredQuotations);
//         }
//     }
// });

        
        
        
        
        
//         // frappe.call({
//         //     method: 'frappe.client.get_list',
//         //     args: {
//         //         doctype: 'DCIQuotation',
//         //         filters: {
//         //             workflow_state: 'Approved'
//         //         },
//         //         fields: ['schedule_no'],
//         //         limit_page_length: 100
//         //     },
//         //     callback: function(submittedDCIQuotationsResponse) {
//         //         if (submittedDCIQuotationsResponse.message) {
//         //             var submittedDCIQuotations = submittedDCIQuotationsResponse.message.map(function(quotation) {
//         //                 return quotation.schedule_no;
//         //             });

//         //             console.log("** Submitted DCIQuotation:", submittedDCIQuotations);

//         //             console.log("** Fetching Submitted ECI Quotations **");

//         //             frappe.call({
//         //                 method: 'frappe.client.get_list',
//         //                 args: {
//         //                     doctype: 'ECI Quotations',
//         //                     filters: {
//         //                         workflow_state: 'Approved'
//         //                     },
//         //                     fields: ['schedule_no'],
//         //                     limit_page_length: 100
//         //                 },
//         //                 callback: function(submittedECIQuotationsResponse) {
//         //                     if (submittedECIQuotationsResponse.message) {
//         //                         var submittedECIQuotations = submittedECIQuotationsResponse.message.map(function(quotation) {
//         //                             return quotation.schedule_no;
//         //                         });

//         //                         console.log("** Submitted ECI Quotations:", submittedECIQuotations);

//         //                         console.log("** Fetching Approved Policy Approvals **");

//         //                         frappe.call({
//         //                             method: 'frappe.client.get_list',
//         //                             args: {
//         //                                 doctype: 'Policy Approvals',
//         //                                 filters: {
//         //                                     workflow_state: 'Approved',
//         //                                     quotation_numbers: ['in', submittedDCIQuotations.concat(submittedECIQuotations)]
//         //                                 },
//         //                                 fields: ['quotation_numbers']
//         //                             },
//         //                             callback: function(approvedPolicyApprovalsResponse) {
//         //                                 if (approvedPolicyApprovalsResponse.message) {
//         //                                     var approvedPolicyApprovals = approvedPolicyApprovalsResponse.message.map(function(policyApproval) {
//         //                                         return policyApproval.quotation_numbers;
//         //                                     });

//         //                                     console.log("** Approved Policy Approvals:", approvedPolicyApprovals);

//         //                                     var filteredQuotations = submittedDCIQuotations.concat(submittedECIQuotations).filter(function(quotation) {
//         //                                         return !approvedPolicyApprovals.includes(quotation);
//         //                                     });

//         //                                     console.log("** Filtered Quotations:", filteredQuotations);

//         //                                     frm.set_df_property('quotation_numbers', 'options', filteredQuotations);
//         //                                 }
//         //                             }
//         //                         });
//         //                     }
//         //                 }
//         //             });
//         //         }
//         //     }
//         // });

//     },

//     quotation_numbers: function(frm) {
//         frm.set_value('policy_holder', '');
//         frm.set_value('proposal_no', '');
//         frm.set_value('inception_date', '');
//         frm.set_value('premium_rate', '');
//         frm.set_value('status', '');
//         frm.set_value('premium', '');
//         frm.set_value('policy_type', '');

//         let quotationNumber = frm.doc.quotation_numbers;

//         frm.toggle_enable('quotation_numbers', true);

//         if (quotationNumber.startsWith("DCQT")) {
//             console.log("Fetching data from DCIQuotation...");
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'DCIQuotation',
//                     filters: {
//                         schedule_no: quotationNumber
//                     },
//                     fieldname: ['client_name', 'proposal_no2', 'inception_date', 'premium_rate', 'status12', 'expected_annual_premium']
//                 },
//                 callback: function(r) {
//                     if (!r.exc && r.message) {
//                         frm.set_value('policy_holder', r.message.client_name);
//                        // frm.set_value('proposal_no', r.message.proposal_no);
//                         frm.set_value('proposal_no', r.message.proposal_no2);
//                         frm.set_value('inception_date', r.message.inception_date);
//                         frm.set_value('premium_rate', r.message.premium_rate);
//                         frm.set_value('status', r.message.status12);
//                         frm.set_value('premium', r.message.expected_annual_premium);
//                         frm.fields_dict.policy_type.set_value('DCI');

//                         // Generate policy number after setting policy holder
//                        generateNumber(frm, 'policy_number');
//                     } else {
//                         console.error("Error occurred while fetching data from DCIQuotation:", r.exc);
//                     }
//                 },
//             });
//         } else if (quotationNumber.startsWith("ECQT")) {
//             console.log("Fetching data from ECI Quotations...");
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'ECI Quotations',
//                     filters: {
//                         schedule_no: quotationNumber
//                     },
//                     fieldname: ['client_name', 'proposal_no1', 'inception_date','status1', 'amt']
//                 },
//                 callback: function(r) {
//                     if (!r.exc && r.message) {
//                         frm.set_value('policy_holder', r.message.client_name);
//                        // frm.set_value('proposal_no', r.message.proposal_no);
//                         frm.set_value('proposal_no', r.message.proposal_no1);
//                         frm.set_value('inception_date', r.message.inception_date);
//                         frm.set_value('status', r.message.status1);
//                         frm.set_value('premium_amount', r.message.amt);
//                         frm.fields_dict.policy_type.set_value('ECI');

//                         // Generate policy number after setting policy holder
//                         generateNumber(frm, 'policy_number');
//                     } else {
//                         console.error("Error occurred while fetching data from ECI Quotations:", r.exc);
//                     }
//                 },
//             });
//         } else {
//             console.log("Unknown prefix:", quotationNumber);
//         }
//     },

//     refresh: function(frm) {
        
//        frm.fields_dict.premium.$input.css("text-align", "right");
//        frm.fields_dict.premium_rate.$input.css("text-align", "right");
       
      

       
//         $('.underlined').on('click', function(event) {
//             event.preventDefault();
//             var linkText = $(this).text().trim();
//             var workflowState = frm.doc.workflow_state;  // Assuming workflow_state is the field name in your form

//             switch (linkText) {
//                 case 'Covering Letter':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Covering letter_CIGIS');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                      }
//                     break;
                    
//                 case 'Policy Document':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'New_Policy_Doc');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                      }
//                     break;
                    
//                 case 'Policy Schedule':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Policy Schedule _CIGIS');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                      }
//                     break;
                    
//                 case 'Policy Administration Guidelines':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Policy Administration guidelines');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                       }
//                     break;
                    
//                 case 'Credit Limit Application Forms':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Credit Limit Application  Forms');
//                     } else {
//                        frappe.msgprint("Approval is required to access the document.");
//                       }
//                     break;
                    
//                 default:
//                     console.log("No action defined for", linkText);
//             }
//         });


//  if (frm.doc.workflow_state === "Approved") {
//             // Add the custom button
//             frm.add_custom_button(__('Proforma Invoice'), function() {
//                 // Calculate the values needed
//                 var percent14 = (14 / 100) * frm.doc.premium;
//                 percent14 = Number(percent14.toFixed(2));
//                 var data4 = (parseFloat(frm.doc.premium) + percent14).toFixed(2);

//                 // Set route options for the new document
//                 frappe.route_options = {
//                     invoice_to: frm.doc.policy_holder,
//                     data1: frm.doc.premium,
//                     data2: frm.doc.premium,
//                     data3: percent14,
//                     data4: data4
//                 };

//                 // Create a new Proforma Invoice document
//                  frappe.new_doc('Proforma Invoice');

//                 console.log("Proforma Invoice button clicked!");
//             }).addClass("btn-primary");
//         } else {
//             // Optionally clear the button if needed
//             frm.page.clear_inner_btn_group();
//         }
//     },
    
//      policy_type: function(frm) {
//         toggle_fields(frm);
//     }
     
    
// });

//   function openDocument(frm, doctype) {
//     var parameters = {
//         policy_number: frm.doc.policy_number,
//         policy_holder: frm.doc.policy_holder,
//         proposal_no: frm.doc.proposal_no,
//         quotation_numbers: frm.doc.quotation_numbers,
//         attention_mr: frm.doc.policy_holder,
//         to: frm.doc.policy_holder
//     };

//     frappe.new_doc(doctype, parameters);
// }


//   function generateNumber(frm, field_name) {
//     let currentYear = new Date().getFullYear();
//     let prefix = `PLY/${currentYear}/`;

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Approvals',
//             fields: [field_name, 'creation'],
//             order_by: 'creation desc',
//             limit: 1
//         },
//         callback: function(r) {
//             if (r.message && r.message.length > 0) {
//                 let lastPolicyNo = r.message[0][field_name];
//                 let lastNumber = parseInt(lastPolicyNo.split("/").pop());
//                 if (!isNaN(lastNumber)) {
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value(field_name, prefix + newNumber);
//                 }
//             } else {
//                 frm.set_value(field_name, prefix + '0001');
//             }
//         }
//     });
// }


//   function toggle_fields(frm) {
//     if (frm.doc.policy_type === 'DCI') {
//         frm.set_df_property('premium_rate', 'hidden', 0);
//         frm.set_df_property('premium', 'hidden', 0);
//         frm.set_df_property('premium_amount', 'hidden', 1);
//     } else {
//         frm.set_df_property('premium_rate', 'hidden', 1);
//         frm.set_df_property('premium', 'hidden', 1);
//         frm.set_df_property('premium_amount', 'hidden', 0);
//     }
// }













  // function generateNumber(frm, field_name) {
//     let currentYear = new Date().getFullYear();
//     let policyHolder = frm.doc.policy_holder || 'PLY';
//     let prefix = `${policyHolder.substring(0, 3).toUpperCase()}/${currentYear}/`;

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Approvals',
//             fields: [field_name, 'creation'],
//             order_by: 'creation desc',
//             limit: 1
//         },
//         callback: function(r) {
//             if (r.message && r.message.length > 0) {
//                 let lastPolicyNo = r.message[0][field_name];
//                 let lastNumber = parseInt(lastPolicyNo.split("/").pop());
//                 if (!isNaN(lastNumber)) {
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value(field_name, prefix + newNumber);
//                 }
//             } else {
//                 frm.set_value(field_name, prefix + '0001');
//             }
//         }
//     });
// }
  // frm.add_custom_button(__('Proforma Invoice'), function() {
        //     var percent14 = (14 / 100) * frm.doc.premium;
        //     percent14 = Number(percent14.toFixed(2));
        //     var data4 = (parseFloat(frm.doc.premium) + percent14).toFixed(2);

        //     frappe.route_options = {
        //         invoice_to: frm.doc.policy_holder,
        //         data1: frm.doc.premium,
        //         data2: frm.doc.premium,
        //         data3: percent14,
        //         data4: data4
        //     };

        //     frappe.new_doc('Proforma Invoice');

        //     console.log("Proforma Invoice clicked!");
        // }).addClass("btn-primary");



































// frappe.ui.form.on('Policy Approvals', {
//     onload: function(frm) {
//         if (!frm.doc.policy_number && frm.doc.policy_holder) {
//             generateNumber(frm, 'policy_number');
//         }

//         console.log("** Fetching Submitted DCIQuotation **");

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'DCIQuotation',
//                 filters: {
//                     workflow_state: 'Approved'
//                 },
//                 fields: ['schedule_no']
//             },
//             callback: function(submittedDCIQuotationsResponse) {
//                 if (submittedDCIQuotationsResponse.message) {
//                     var submittedDCIQuotations = submittedDCIQuotationsResponse.message.map(function(quotation) {
//                         return quotation.schedule_no;
//                     });

//                     console.log("** Submitted DCIQuotation:", submittedDCIQuotations);

//                     console.log("** Fetching Submitted ECI Quotations **");

//                     frappe.call({
//                         method: 'frappe.client.get_list',
//                         args: {
//                             doctype: 'ECI Quotations',
//                             filters: {
//                                 workflow_state: 'Approved'
//                             },
//                             fields: ['schedule_no']
//                         },
//                         callback: function(submittedECIQuotationsResponse) {
//                             if (submittedECIQuotationsResponse.message) {
//                                 var submittedECIQuotations = submittedECIQuotationsResponse.message.map(function(quotation) {
//                                     return quotation.schedule_no;
//                                 });

//                                 console.log("** Submitted ECI Quotations:", submittedECIQuotations);

//                                 console.log("** Fetching Approved Policy Approvals **");

//                                 frappe.call({
//                                     method: 'frappe.client.get_list',
//                                     args: {
//                                         doctype: 'Policy Approvals',
//                                         filters: {
//                                             workflow_state: 'Approved',
//                                             quotation_numbers: ['in', submittedDCIQuotations.concat(submittedECIQuotations)]
//                                         },
//                                         fields: ['quotation_numbers']
//                                     },
//                                     callback: function(approvedPolicyApprovalsResponse) {
//                                         if (approvedPolicyApprovalsResponse.message) {
//                                             var approvedPolicyApprovals = approvedPolicyApprovalsResponse.message.map(function(policyApproval) {
//                                                 return policyApproval.quotation_numbers;
//                                             });

//                                             console.log("** Approved Policy Approvals:", approvedPolicyApprovals);

//                                             var filteredQuotations = submittedDCIQuotations.concat(submittedECIQuotations).filter(function(quotation) {
//                                                 return !approvedPolicyApprovals.includes(quotation);
//                                             });

//                                             console.log("** Filtered Quotations:", filteredQuotations);

//                                             frm.set_df_property('quotation_numbers', 'options', filteredQuotations);
//                                         }
//                                     }
//                                 });
//                             }
//                         }
//                     });
//                 }
//             }
//         });
//     },

//     quotation_numbers: function(frm) {
//         frm.set_value('policy_holder', '');
//         frm.set_value('proposal_no', '');
//         frm.set_value('inception_date', '');
//         frm.set_value('premium_rate', '');
//         frm.set_value('status', '');
//         frm.set_value('premium', '');
//         frm.set_value('policy_type', '');

//         let quotationNumber = frm.doc.quotation_numbers;

//         frm.toggle_enable('quotation_numbers', true);

//         if (quotationNumber.startsWith("DCQT")) {
//             console.log("Fetching data from DCIQuotation...");
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'DCIQuotation',
//                     filters: {
//                         schedule_no: quotationNumber
//                     },
//                     fieldname: ['client_name', 'proposal_no', 'inception_date', 'premium_rate', 'status12', 'insured_turnover']
//                 },
//                 callback: function(r) {
//                     if (!r.exc && r.message) {
//                         frm.set_value('policy_holder', r.message.client_name);
//                         frm.set_value('proposal_no', r.message.proposal_no);
//                         frm.set_value('inception_date', r.message.inception_date);
//                         frm.set_value('premium_rate', r.message.premium_rate);
//                         frm.set_value('status', r.message.status12);
//                         frm.set_value('premium', r.message.insured_turnover);
//                         frm.fields_dict.policy_type.set_value('DCI');

//                         // Generate policy number after setting policy holder
//                         if (!frm.doc.policy_number) {
//                             generateNumber(frm, 'policy_number');
//                         }
//                     } else {
//                         console.error("Error occurred while fetching data from DCIQuotation:", r.exc);
//                     }
//                 },
//             });
//         } else if (quotationNumber.startsWith("ECQT")) {
//             console.log("Fetching data from ECI Quotations...");
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'ECI Quotations',
//                     filters: {
//                         schedule_no: quotationNumber
//                     },
//                     fieldname: ['client_name', 'proposal_no', 'inception_date', 'premium_rate', 'status1', 'min_premium_depositp']
//                 },
//                 callback: function(r) {
//                     if (!r.exc && r.message) {
//                         frm.set_value('policy_holder', r.message.client_name);
//                         frm.set_value('proposal_no', r.message.proposal_no);
//                         frm.set_value('inception_date', r.message.inception_date);
//                         frm.set_value('premium_rate', r.message.premium_rate);
//                         frm.set_value('status', r.message.status1);
//                         frm.set_value('premium', r.message.min_premium_depositp);
//                         frm.fields_dict.policy_type.set_value('ECI');

//                         // Generate policy number after setting policy holder
//                         if (!frm.doc.policy_number) {
//                             generateNumber(frm, 'policy_number');
//                         }
//                     } else {
//                         console.error("Error occurred while fetching data from ECI Quotations:", r.exc);
//                     }
//                 },
//             });
//         } else {
//             console.log("Unknown prefix:", quotationNumber);
//         }
//     },

//     refresh: function(frm) {
//         $('.underlined').on('click', function(event) {
//             event.preventDefault();
//             var linkText = $(this).text().trim();
//             var workflowState = frm.doc.workflow_state;  // Assuming workflow_state is the field name in your form

//             switch (linkText) {
//                 case 'Covering Letter':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Covering letter_CIGIS');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                      }
//                     break;
                    
//                 case 'Policy document':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'New_Policy_Doc');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                      }
//                     break;
                    
//                 case 'Policy schedule':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Policy Schedule _CIGIS');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                      }
//                     break;
                    
//                 case 'Policy Administration guidelines':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Policy Administration guidelines');
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                       }
//                     break;
                    
//                 case 'Credit Limit Application Forms':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openDocument(frm, 'Credit Limit Application  Forms');
//                     } else {
//                       frappe.msgprint("Approval is required to access the document.");
//                       }
//                     break;
                    
//                 default:
//                     console.log("No action defined for", linkText);
//             }
//         });

//         frm.add_custom_button(__('Proforma Invoice'), function() {
//             var percent14 = (14 / 100) * frm.doc.premium;
//             percent14 = Number(percent14.toFixed(2));
//             var data4 = (parseFloat(frm.doc.premium) + percent14).toFixed(2);

//             frappe.route_options = {
//                 invoice_to: frm.doc.policy_holder,
//                 data1: frm.doc.premium,
//                 data2: frm.doc.premium,
//                 data3: percent14,
//                 data4: data4
//             };

//             frappe.new_doc('Proforma Invoice');

//             console.log("Proforma Invoice clicked!");
//         }).addClass("btn-primary");
//     }
// });

// function openDocument(frm, doctype) {
//     var parameters = {
//         policy_number: frm.doc.policy_number,
//         policy_holder: frm.doc.policy_holder,
//         proposal_no: frm.doc.proposal_no,
//         quotation_numbers: frm.doc.quotation_numbers,
//         attention_mr: frm.doc.policy_holder,
//         to: frm.doc.policy_holder
//     };

//     frappe.new_doc(doctype, parameters);
// }

// function generateNumber(frm, field_name) {
//     let currentYear = new Date().getFullYear();
//     let policyHolder = frm.doc.policy_holder || 'PLY';
//     let prefix = `${policyHolder.substring(0, 3).toUpperCase()}/${currentYear}/`;

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Approvals',
//             fields: [field_name, 'creation'],
//             order_by: 'creation desc',
//             limit: 1
//         },
//         callback: function(r) {
//             if (r.message && r.message.length > 0) {
//                 let lastPolicyNo = r.message[0][field_name];
//                 let lastNumber = parseInt(lastPolicyNo.split("/").pop());
//                 if (!isNaN(lastNumber)) {
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value(field_name, prefix + newNumber);
//                 }
//             } else {
//                 frm.set_value(field_name, prefix + '0001');
//             }
//         }
//     });
// }
