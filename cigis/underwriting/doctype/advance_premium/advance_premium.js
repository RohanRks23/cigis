// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Advance Premium', {
    
    
    
//     refresh: function(frm) {
        
//     alignFieldsRight(frm, fieldsToAlignRight);
    
        
//     frm.toggle_enable('policy_holder', true);  
        
//     frappe.call({
//     method: 'frappe.client.get_list',
//     args: {
//         doctype: 'Policy Approvals',
//         fields: ['policy_holder'],
//     },
//     callback: function(response) {
//         console.log("policy_holder received:", response);

//         // Extract the policy_holder values and store them in a Set for uniqueness
//         let uniqueFacilityNos = new Set(response.message.map(item => item.policy_holder));

//         // Convert the Set back to an Array
//         let FinalArray = Array.from(uniqueFacilityNos);

//         // Set the unique values as options for the policy_holder field
//         frm.set_df_property('policy_holder', 'options', FinalArray.join('\n'));

//         console.log("final", FinalArray);
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching policy_holder:", textStatus, errorThrown);
//     }
// });

        
//       frm.set_df_property('child_table','cannot_add_rows', true);
      
//         var workflowState = frm.doc.workflow_state;
//         if (workflowState === "Approved") {
//             frm.toggle_display('policy_no', false);
//             frm.toggle_display('policy_no1', true);
//         }
//         // Create a custom button for "Bond Invoice" if the workflow state is "Submitted"
//         // if (workflowState === "Approved") {
//         //     frm.add_custom_button(__('Submit to Finance'), function() {
//         //       frappe.new_doc('Advance Premium  Invoice');
//         //             frappe.route_options = {
//         //             policy_holder: frm.doc.policy_holder,
//         //                         }
//         //         console.log("Bond Invoice clicked!");
//         //     }).addClass("btn-primary");
//         // }
         
//         //   if (workflowState === "Approved") {
//         //       frm.toggle_display('policy_name', true);
//         //       frm.toggle_display('policy_holder', false);
    
//         // }
        
       

//             frm.fields_dict.add.$input.addClass('btn-primary');
        
//             frm.fields_dict['payment_type'].$input.on('focus', function() {
//              // Check if the noof_months_for_the_purpose field is empty
//             if (!frm.doc.noof_months_for_the_purpose) {
//                 // If noof_months_for_the_purpose field is empty, show a message and clear the feedback field
//                 frappe.msgprint('Please select the No.of Months for the Purpose field first.');
//                 frm.set_value('payment_type', '');
//             }
//          });
        
        
        
//         // Fetch data for credit limits and VAT if the document is new
//         if (frm.doc.__islocal) {
//             fetchDataForNewDocument(frm);
//         }

//         // Generate proposal number if not already present
//         if (!frm.doc.adv_premium_no) {
//             generateNumber(frm);
//         }

//         // // Trigger calculation when relevant fields change
//         // frm.fields_dict.estimated_turnover_for_year.$input.on("change", function() {
//         //     calculateEstimatedPremium(frm);
//         // });
//         // frm.fields_dict.premium_rate.$input.on("change", function() {
//         //     calculateEstimatedPremium(frm);
//         // });
       

//         // // Handle onchange event for estimated_turnover_for_year
//         // frm.fields_dict['estimated_turnover_for_year'].df.onchange = () => {
//         //     calculateEstimatedPremium(frm);
//         // };

//    frm.refresh_field('child_table');

        
//     },

//     comments: function(frm) {
//     // Check if the 'comments' field is not empty
//     if (frm.doc.comments) {
//         // Set a timeout to display the message after 5 seconds
//         setTimeout(function() {
//             frappe.msgprint('Click Add button after entering the Credit Limit and Credit Limits');
//         }, 5000); // 5000 milliseconds = 5 seconds
//     }
// },

     
//         estimated_turnover_for_year: function(frm) {
//         calculateEstimatedPremium(frm);
//         },

//       premium_rate: function(frm) {
          
//         calculateEstimatedPremium(frm);
        
//       },
      
     
       

//     onload: function(frm) {
        
               
//     // frm.fields_dict['premium_rate'].input.style.direction = 'rtl';
//     // frm.fields_dict['premium_rate'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['estimated_turnover_for_year'].input.style.direction = 'rtl';
//     // frm.fields_dict['estimated_turnover_for_year'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['estimated_premium'].input.style.direction = 'rtl';
//     // frm.fields_dict['estimated_premium'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['vat'].input.style.direction = 'rtl';
//     // frm.fields_dict['vat'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['monthly_premium_value'].input.style.direction = 'rtl';
//     // frm.fields_dict['monthly_premium_value'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['quartely_premium_value'].input.style.direction = 'rtl';
//     // frm.fields_dict['quartely_premium_value'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['half_yearly_premium_value'].input.style.direction = 'rtl';
//     // frm.fields_dict['half_yearly_premium_value'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['yearly_premium_value'].input.style.direction = 'rtl';
//     // frm.fields_dict['yearly_premium_value'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['noof_months_for_the_purpose'].input.style.direction = 'rtl';
//     // frm.fields_dict['noof_months_for_the_purpose'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['advance_premium'].input.style.direction = 'rtl';
//     // frm.fields_dict['advance_premium'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['credit_limit_fee'].input.style.direction = 'rtl';
//     // frm.fields_dict['credit_limit_fee'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['credit_limit'].input.style.direction = 'rtl';
//     // frm.fields_dict['credit_limit'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['credit_limit_enquiry_fee'].input.style.direction = 'rtl';
//     // frm.fields_dict['credit_limit_enquiry_fee'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['credit_limits'].input.style.direction = 'rtl';
//     // frm.fields_dict['credit_limits'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['a'].input.style.direction = 'rtl';
//     // frm.fields_dict['a'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['b'].input.style.direction = 'rtl';
//     // frm.fields_dict['b'].input.style.textAlign = 'right';
    
//     // frm.fields_dict['total_amount'].input.style.direction = 'rtl';
//     // frm.fields_dict['total_amount'].input.style.textAlign = 'right';
    
    
        
//         alignFieldsRight(frm, fieldsToAlignRight);
        
//         // Fetch approved policy numbers and populate options for policy_no if the document is new
//         if (frm.doc.__islocal) {
//             fetchApprovedPolicyNumbers(frm);
//         }
    
//     },

//     payment_type: function(frm) {
//         timeCal(frm);
//           // calculateTotal(frm);
//         advancepremium(frm);
//         frappe.msgprint("Data fetched successfully.");
//     },

//     credit_limit_fee: function(frm) {
//         calculateTotal(frm);
//     },

//     credit_limits: function(frm) {
//         calculateTotal(frm);
//     },

//     credit_limit_enquiry_fee: function(frm) {
//         calculateTotal(frm);
//     },
//     a: function(frm) {
//         calculateTotal(frm);
//     },
//     b: function(frm) {
//         calculateTotal(frm);
//     },
//     advance_premium: function(frm) {
//         // // calculateTotal(frm);
//         // advancepremium(frm);
//         // frappe.msgprint("Data fetched successfully.");

//     },

//     premium_charges: function(frm) {
//         calculateTotal(frm);
//     },

//     add: function(frm) {
//         AdvancePremium(frm);
//     },

// //     policy_holder: function(frm) {
       
// //          if (frm.doc.policy_holder) {
// //             frappe.call({
// //                 method: 'frappe.client.get_list',
// //                 args: {
// //                     doctype: 'Policy Approvals', // replace 'Policy Doctype' with the actual doctype name where policies are stored
// //                     filters: {
// //                         'policy_holder': frm.doc.policy_holder
// //                     },
// //                 fields:['policy_number']  
// //                 },
// //                 callback: function(r) {
// //                     if (r.message) {
// //                         let options = r.message.map(policy => policy.policy_number);
// //                         frm.set_df_property('policy_no', 'options', options);
// //                         frm.set_value('policy_no1', '');
// //                         frm.refresh_field('policy_no');
                        
// //                     }
// //                 }
// //             });
// //         }
// //         frm.set_value('policy_no', '');
// //       //  frm.set_value('policy_no1', '');
// //         frm.set_value('premium_rate', '');
// //         //fetchPolicyData(frm);
// //          // Re-enable the dropdown field after selection
// //         frm.toggle_enable('policy_holder', true);  
// //     // Fetch data from Policy Approvals based on selected policy number
// //     var policy_holder = frm.doc.policy_holder; // Uncommented to declare and initialize policy_no variable
// //     //frm.set_value('policy_name', policy_holder);
   
// //     // frm.toggle_display('policy_number', true);
// //     // frm.toggle_display('policy_no', false);
    
    

// // },

// policy_holder: function(frm) {
//     if (frm.doc.policy_holder) {
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Policy Approvals', // replace 'Policy Doctype' with the actual doctype name where policies are stored
//                 filters: {
//                     'policy_holder': frm.doc.policy_holder
//                 },
//                 fields: ['policy_number']
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     let options = r.message.map(policy => policy.policy_number);
//                     frm.set_df_property('policy_no', 'options', options);
//                     frm.set_value('policy_no1', '');
//                     frm.refresh_field('policy_no');
//                 }
//             }
//         });
//     }
//     frm.set_value('policy_no', '');
//     frm.set_value('policy_no1', ''); // Added this line
//     frm.set_value('premium_rate', '');
    
//     // Re-enable the dropdown field after selection
//     frm.toggle_enable('policy_holder', true);  
    
    
// },

// policy_no:function(frm){
//      if (frm.doc.policy_no) {
//         frm.set_value('policy_no1', frm.doc.policy_no); // Set policy_no1 based on policy_no selection
//     } else {
//         frm.set_value('policy_no1', ''); // Clear policy_no1 if policy_no is empty
//     }
//   fetchPolicyData(frm); 
  
    
// }
// });

// // Function to handle data fetching for new documents
// function fetchDataForNewDocument(frm) {
//     frappe.call({
//         method: 'frappe.client.get',
//         args: {
//             doctype: 'DCIQuotation',
//             filters: {
//                 client_name: frm.doc.policy_holder
//             },
//             fields: ['fee_for_cl_per_month','fee_per_enquiry']
//         },
//         callback: function(r) {
//             if (r.message) {
//                 frm.set_value('credit_limit_fee', r.message.fee_for_cl_per_month);
//                 frm.set_value('credit_limit_enquiry_fee', r.message.fee_per_enquiry);
//             }
//         }
//     });

//     frappe.call({
//         method: 'frappe.client.get',
//         args: {
//             doctype: 'VAT',
//             filters: {}
//         },
//         callback: function(r) {
//             if (r.message) {
//                 frm.set_value('vat', r.message.vat);
//             }
//         }
//     });
// }

// // Function to fetch approved policy numbers for options of policy_no field
// function fetchApprovedPolicyNumbers(frm) {
//     // frappe.call({
//     //     method: 'frappe.client.get_list',
//     //     args: {
//     //         'doctype': 'Policy Approvals',
//     //         'filters': {
//     //             'workflow_state': 'Approved'
//     //         },
//     //         'fields': ['policy_holder'],
//     //           limit_page_length: 100
//     //     },
//     //     callback: function(submittedProposalsResponse) {
//     //         if (submittedProposalsResponse.message) {
//     //             var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
//     //                 return proposal.policy_holder;
//     //             });
//     //             frappe.call({
//     //                 method: 'frappe.client.get_list',
//     //                 args: {
//     //                     'doctype': 'Advance Premium',
//     //                     'filters': {
//     //                         'workflow_state': 'Approved'
//     //                     },
//     //                     'fields': ['policy_holder']
//     //                 },
//     //                 callback: function(approvedQuotationsResponse) {
//     //                     if (approvedQuotationsResponse.message) {
//     //                         var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
//     //                             return quotation.policy_holder;
//     //                         });
//     //                         var filteredClientNames = submittedProposals.filter(function(proposal) {
//     //                             return !approvedQuotations.includes(proposal);
//     //                         });
//     //                         frm.set_df_property('policy_holder', 'options', filteredClientNames);
//     //                     }
//     //                 }
//     //             });
//     //         }
//     //     }
//     // });
// }

// // Function to fetch policy data based on policy number
// function fetchPolicyData(frm) {
//     var policyNo = frm.doc.policy_no;
//     console.log('Policy Number:', policyNo);

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Approvals',
//             filters: {
//                 policy_number: policyNo
//             },
//             fields: ['premium_rate']
//         },
//         callback: function(response) {
//             console.log('Response:', response);

//             if (response.message && response.message.length > 0) {
//                 var data_from_proposals = response.message[0];
//                 frm.set_value('premium_rate', data_from_proposals.premium_rate || '');
//             } else {
//                 frm.set_value('premium_rate', '');
//               //  frappe.msgprint('No matching record found in Policy Approvals.');
//             }
//         },
//         error: function(err) {
//             console.error('Error:', err);
//             frappe.msgprint('An error occurred while fetching data from Policy approvals. Please check the console for details.');
//         }
//     });
// }


// // Function to generate proposal number
// function generateNumber(frm) {
//     if (!frm.doc.adv_premium_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `ADV/${currentYear}/`;
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Advance Premium',
//                 fields: ['adv_premium_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastadv_premiumNo = r.message[0].adv_premium_no;
//                     let lastNumber = parseInt(lastadv_premiumNo.split("/").pop());
//                     if (!isNaN(lastNumber)) {
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('adv_premium_no', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('adv_premium_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }

// // Function to handle Advance Premium calculations
// function AdvancePremium(frm) {
//     var payment_frequency = frm.doc.payment_type;
//     var premium_charges = 0;
    
//     var credit_limit_fee = frm.doc.credit_limit_fee;
//     var credit_limit_enquiry_fee = frm.doc.credit_limit_enquiry_fee;
//     var credit_limit = frm.doc.credit_limit;
//     var credit_limits = frm.doc.credit_limits;
    
//     // var advancepremium = frm.doc.advance_premium;
//     // var a           = frm.doc.a;
//     // var b           = frm.doc.b;
//     var total_amount = frm.doc.total_amount;

//     switch (payment_frequency) {
//         case 'Monthly':
//             premium_charges = frm.doc.monthly_premium_value;
//             break;
//         case 'Quarterly':
//             premium_charges = frm.doc.quartely_premium_value;
//             break;
//         case 'Half Yearly':
//             premium_charges = frm.doc.half_yearly_premium_value;
//             break;
//         case 'Yearly':
//             premium_charges = frm.doc.yearly_premium_value;
//             break;
//         default:
//             break;
//     }

//     if (frm.doc.child_table && frm.doc.child_table.length > 0) {
//         frm.doc.child_table.forEach(function(child) {
//             var premium_charge = 0;
//             var description = '';
//             var qty = 1;
//             var amount = 0;

//             switch (child.idx) {
//                 case 1:
//                     premium_charge = premium_charges;
//                     description = 'Premium Charges';
//                     qty = qty;
//                     amount = premium_charge * qty;
//                     break;
//                 case 2:
//                     premium_charge = credit_limit_fee;
//                     description = 'Credit Limit Fee';
//                     qty = credit_limit;
//                     amount = premium_charge * qty;
//                     break;
//                 case 3:
//                     premium_charge = credit_limit_enquiry_fee;
//                     description = 'Credit Limit Enquiry Fee';
//                     qty = credit_limits;
//                     amount = premium_charge * qty;
//                     break;
//                 default:
//                     break;
//             }

//             frappe.model.set_value(child.doctype, child.name, "price", premium_charge);
//             frappe.model.set_value(child.doctype, child.name, "description", description);
//             frappe.model.set_value(child.doctype, child.name, "qty", qty);
//             frappe.model.set_value(child.doctype, child.name, "amount", amount);
//         });
//     } else {
//         for (var i = 1; i <= 3; i++) {
//             var child = frappe.model.add_child(frm.doc, "Advance Premium Child", "child_table");
//             var premium_charge = 0;
//             var description = '';
//             var qty = 1;
//             var amount = 0;

//             switch (i) {
//                 case 1:
//                     premium_charge = premium_charges;
//                     description = 'Premium Charges';
//                     qty = qty;
//                     amount = premium_charge * qty;
//                     break;
//                 case 2:
//                     premium_charge = credit_limit_fee;
//                     description = 'Credit Limit Fee';
//                     qty = credit_limit;
//                     amount = premium_charge * qty;
//                     break;
//                 case 3:
//                     premium_charge = credit_limit_enquiry_fee;
//                     description = 'Credit Limit Enquiry Fee';
//                     qty = credit_limits;
//                     amount = premium_charge * qty;
//                     break;
//                 default:
//                     break;
//             }

//             frappe.model.set_value(child.doctype, child.name, "price", premium_charge);
//             frappe.model.set_value(child.doctype, child.name, "description", description);
//             frappe.model.set_value(child.doctype, child.name, "qty", qty);
//             frappe.model.set_value(child.doctype, child.name, "amount", amount);
//         }
//     }

//     frm.refresh_fields('child_table');
// }

// // Function to calculate estimated premium
// function calculateEstimatedPremium(frm) {
//     var estimated_turnover_for_year = frm.doc.estimated_turnover_for_year;
//     var premium_rate = frm.doc.premium_rate;
//     var estimated_premium = (estimated_turnover_for_year * premium_rate) / 100;
//     frm.set_value('estimated_premium', estimated_premium);
// }

// function calculateTotal(frm) {
//     // Parse input values as floats or default to 0 if NaN
//     var credit_limit_fee = parseFloat(frm.doc.credit_limit_fee);
//     var credit_limit = parseFloat(frm.doc.credit_limit);
//     var credit_limit_enquiry_fee = parseFloat(frm.doc.credit_limit_enquiry_fee);
//     var credit_limits = parseFloat(frm.doc.credit_limits);
//     var premium_charges = parseFloat(frm.doc.premium_charges);
//     var advance_premium = parseFloat(frm.doc.advance_premium);

//     // Calculate 'a' and 'b' values
//     var a = isNaN(credit_limit_fee) || isNaN(credit_limit) ? 0 : credit_limit_fee * credit_limit;
//     var b = isNaN(credit_limit_enquiry_fee) || isNaN(credit_limits) ? 0 : credit_limit_enquiry_fee * credit_limits;

//     // Set values for 'a' and 'b' fields in the form
//     frm.set_value('a', a);
//     frm.set_value('b', b);

//     // Calculate total amount by adding 'a', 'b', and 'advance_premium'
//     var total_amount = a + b + advance_premium;

//     // Set the calculated total amount value in the form
//     frm.set_value('total_amount', total_amount);
// }

// function timeCal(frm) {
//     console.log(frm.doc.payment_type);
//     let paymentType = frm.doc.payment_type;
//     let paymentValue = 1; // Default value
//     if (paymentType === "Monthly") {
//         paymentValue = 1;
//     } else if (paymentType === "Quarterly") {
//         paymentValue = 3;
//     } else if (paymentType === "Half Yearly") {
//         paymentValue = 6;
//     } else if (paymentType === "Yearly") {
//         paymentValue = 12;
//     }
 
//     console.log("Payment Value is", paymentValue);
 
//     let estimatedPremium = Number(frm.doc.estimated_premium) || 0;
//     let noofMonths = Number(frm.doc.noof_months_for_the_purpose) || 0;
//     let value = (estimatedPremium * paymentValue) / noofMonths;
//     value = parseFloat(value.toFixed(2)); // Round to 2 decimal places
 
//     console.log("Value is", value);
 
//     let fieldToUpdate = "";
//     switch (paymentType) {
//         case "Monthly":
//             fieldToUpdate = "monthly_premium_value";
//             break;
//         case "Quarterly":
//             fieldToUpdate = "quartely_premium_value";
//             break;
//         case "Half Yearly":
//             fieldToUpdate = "half_yearly_premium_value";
//             break;
//         case "Yearly":
//             fieldToUpdate = "yearly_premium_value";
//             break;
//     }
 
//     if (fieldToUpdate) {
//         frm.set_value(fieldToUpdate, value);
//         frm.refresh_field(fieldToUpdate); // Refresh the field
//     }
 
//     // Set premium charge directly based on payment type
//     frm.doc.premium_charges = value;
//     frm.refresh_field('premium_charges');
    
//     // Refresh the child table to reflect changes
//     frm.refresh_field('child_table');
// }


// function advancepremium(frm) {
//     console.log(frm.doc.payment_type);
//     let paymentType = frm.doc.payment_type;
//     let paymentValue = 1; // Default value
//     if (paymentType === "Monthly") {
//         paymentValue = 1;
//     } else if (paymentType === "Quarterly") {
//         paymentValue = 3;
//     } else if (paymentType === "Half Yearly") {
//         paymentValue = 6;
//     } else if (paymentType === "Yearly") {
//         paymentValue = 12;
//     }
 
//     console.log("Payment Value is", paymentValue);
 
//     let estimatedPremium = Number(frm.doc.estimated_premium) || 0;
//     let noofMonths = Number(frm.doc.noof_months_for_the_purpose) || 0;
//     let value = (estimatedPremium * paymentValue) / noofMonths;
//     value = parseFloat(value.toFixed(2)); // Round to 2 decimal places
 
//     console.log("Value is", value);
 
//     let fieldToUpdate = "";
//     switch (paymentType) {
//         case "Monthly":
//             fieldToUpdate = "advance_premium";
//             break;
//         case "Quarterly":
//             fieldToUpdate = "advance_premium";
//             break;
//         case "Half Yearly":
//             fieldToUpdate = "advance_premium";
//             break;
//         case "Yearly":
//             fieldToUpdate = "advance_premium";
//             break;
//     }
 
//     if (fieldToUpdate) {
//         frm.set_value(fieldToUpdate, value);
//         frm.refresh_field(fieldToUpdate); // Refresh the field
//     }
 
//     // Set premium charge directly based on payment type
//     frm.doc.premium_charges = value;
//     frm.refresh_field('advance_premium');
    
//     // Refresh the child table to reflect changes
//     frm.refresh_field('child_table');
// }


    
// // List of field names to align right
// let fieldsToAlignRight = ['premium_rate', 'estimated_turnover_for_year', 'estimated_premium','vat','monthly_premium_value','quartely_premium_value','half_yearly_premium_value','yearly_premium_value','noof_months_for_the_purpose',
// 'advance_premium','credit_limit_fee','credit_limit','credit_limits','b','total_amount','a','credit_limit_enquiry_fee']

// // Function to apply the styles
// function alignFieldsRight(frm, fields) {
//     fields.forEach(field => {
//         let fieldElement = frm.fields_dict[field];
//         if (fieldElement && fieldElement.input) {
//             fieldElement.input.style.direction = 'rtl';
//             fieldElement.input.style.textAlign = 'right';
//         }
//     });
// }


// // Handle auto-fetched fields
// fieldsToAlignRight.forEach(field => {
//     frappe.ui.form.on('Advance Premium', field, function(frm) {
//         alignFieldsRight(frm, [field]);
//     });
// });



