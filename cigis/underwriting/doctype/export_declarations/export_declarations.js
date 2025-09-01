// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

 

// frappe.ui.form.on('Export Declarations', {
    
 
//   validate: function(frm) {
//       frm.call({
//               doc: frm.doc,
//               method: 'extractData',
//               callback: function(response) {
//                   console.log(response.message, "res");
  
//                   if (!response.exc) {
//                       console.log(response.message, "hi");
  
//                       var data = response.message;
  
//                       // Clear the form before loading data into the child table
//                       frappe.model.clear_doc(frm.doc);
//                       frm.clear_table('debtorsheduletable');
  
//                       var grandTotal = 0; // Initialize grand total to 0
  
//                       for (let x of data) {
//                           var child = frappe.model.add_child(frm.doc, "Debtor_schedule_child", "debtorsheduletable");
//                           console.log(child, "s");
  
//                           frappe.model.set_value(child.doctype, child.name, "buyer", x.Buyer);
//                           frappe.model.set_value(child.doctype, child.name, "current", x.Current);
//                           frappe.model.set_value(child.doctype, child.name, "tdays", x['30Days']);
//                           frappe.model.set_value(child.doctype, child.name, "sdays", x['60Days']);
//                           frappe.model.set_value(child.doctype, child.name, "ndays", x['90Days']);
//                           frappe.model.set_value(child.doctype, child.name, "odays", x['120Days']);
  
//                           // Calculate total for each row
//                           var total = x.Current + x['30Days'] + x['60Days'] + x['90Days'] + x['120Days'];
//                           frappe.model.set_value(child.doctype, child.name, "total", total);
  
//                           // Add total to grand total
//                           grandTotal += total;
//                       }
  
//                       frm.refresh_fields('debtorsheduletable');
  
//                       // Set grand total in the 'grand_total' field of the parent form
//                       frm.set_value('grand_total', grandTotal);
  
//                       console.log(data);
//                   } else {
//                       console.error(response.exc);
//                   }
//               }
//           });
//   },
  
  
  
//       onload: function(frm) {
//   if(!frm.doc.ed_number){
//             generateDDNumber(frm);
//               populateBuyerField(frm);
//               hideConfirmButton(frm);
              
//           }
//       // frm.initial_load = true;       
//       //   frm.selected_buyer = false;
//       //     frm.selected_terms_of_payment = false;
//       //     frm.selected_year = false;
//       //     frm.selected_month = false;  
//        frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   'doctype': 'Policy Approvals',
//                   'filters': {
//                       'workflow_state': 'Approved',
//                                           'policy_type': 'ECI'
  
//                   },
//                   'fields': ['policy_holder']
//               },
//               callback: function(response) {
//                   if (response.message) {
//                       var approvedInDomesticDeclarations = response.message.map(function(holder) {
//                           return holder.policy_holder;
//                       });
//                       console.log("** Approved Policy Holders in Domestic Declarations:", approvedInDomesticDeclarations);
  
//                       // Get currently set options from the form field
//                       var currentOptions = frm.get_field('policy_holder').df.options || '';
  
//                       // Combine options from both API calls and remove duplicates
//                       var combinedOptions = currentOptions.split('\n').concat(approvedInDomesticDeclarations).filter(function(item, index, self) {
//                           return self.indexOf(item) === index;
//                       });
  
//                       // Set dropdown options for policy holder field
//                       frm.set_df_property('policy_holder', 'options', combinedOptions.join('\n'));
//                   } else {
//                       console.log("No approved policy holders found in Domestic Declarations.");
//                   }
//               },
//               error: function(error) {
//                   console.error("API call failed:", error);
//                   frappe.msgprint('An error occurred while fetching policy holders from Domestic Declarations. Please check the console for details.');
//               }
//           });
  
//           var workflow_state = frm.doc.workflow_state;
  
//           // Check if the workflow state is "Approved"
//           if (workflow_state === "Approved") {
//               // Show policy_holder1 field and hide policy_holder field
//               frm.toggle_display('policy_holder1', true);
//               frm.toggle_display('policy_holder', false);
//           } else {
//               // If workflow state is not "Approved", reverse the display
//               frm.toggle_display('policy_holder1', false);
//               frm.toggle_display('policy_holder', true);
//           }
      
//           var workflow_state1 = frm.doc.workflow_state;
  
//           // Check if the workflow state is "Approved"
//           if (workflow_state1 === "Approved") {
//               // Show policy_no field and hide policy_number field
//               frm.toggle_display('policy_no', true);
//               frm.toggle_display('policy_number', false);
//           } else {
//               // If workflow state is not "Approved", reverse the display
//               frm.toggle_display('policy_no', false);
//               frm.toggle_display('policy_number', true);
//           }
//             calculateAmountPula(frm);
//              frm.fields_dict[' amount_pula'].$wrapper.find('input').css("text-align", "right");
                    
  
//       },
  
        
//    policy_number: function(frm) {
//           var policyNumber = frm.doc.policy_number;
  
//           frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   doctype: 'Policy Approvals',
//                   filters: {
//                       policy_number: policyNumber
//                   },
//                   fields: ['policy_number', 'policy_holder', 'status','premium']
//               },
//               callback: function(response) {
//                   if (response.message && response.message.length > 0) {
//                       var dataFromApprovals = response.message[0];
  
//                       frm.set_df_property('policy_holder', 'options', [dataFromApprovals.policy_holder]);
                       
//                       frm.set_value('status', dataFromApprovals.status || '');
//                                           frm.set_value('premium_rate', dataFromApprovals. premium || '');
  
//                   } else {
//                       frm.set_value('policy_number', '');
//                       frm.set_df_property('policy_holder', 'options', []);
//                       frm.set_value('status', '');
//                                           frm.set_value('premium_rate', '');
  
//                   }
//               },
//               error: function(err) {
//                   console.error(err);
//                   frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
//               }
//           });
            
            
//       },
//       policy_number: function(frm) {
//           var policyNumber = frm.doc.policy_number;
  
//           // Fetch data from Policy Approvals based on selected policy holder and policy type 'ECI'
//           frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   doctype: 'Policy Approvals',
//                   filters: {
//                       policy_number: policyNumber,
//                       policy_type: 'ECI'
//                   },
//                   fields: ['policy_number', 'policy_holder', 'status', 'inception_date','premium']
//               },
//                callback: function(approvedResponse) {
//                               if (approvedResponse.message && approvedResponse.message.length > 0) {
//                                   frappe.msgprint('This policy number is already approved.');
//                               } else {
//                                   // Populate fields if data is found
//                                   frm.set_value('policy_holder', policyApprovalData.policy_holder || '');
//                                   frm.set_value('policy_holder1', policyApprovalData.policy_holder || '');
//                                   frm.set_value('policy_number', policyApprovalData.policy_number || '');
//                                   frm.set_value('policy_no', policyApprovalData.policy_number || '');
//                                   frm.set_value('status', policyApprovalData.status || '');
//                                   frm.set_value('inception_date', policyApprovalData.inception_date || '');
//                                   frm.set_value('policy_expire_date', policyApprovalData.expiry_date || '');
                                   
//                               }
//                           },
//               error: function(err) {
//                   console.error(err);
//                   frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
//               }
//           });
            
//       },
    
  
      
//       refresh: function(frm) {
//           function shuffleArray(array) {
//               for (let i = array.length - 1; i > 0; i--) {
//                   const j = Math.floor(Math.random() * (i + 1));
//                   [array[i], array[j]] = [array[j], array[i]];
//               }
//               return array;
//           }
  
//           // Function to limit array length
//           function limitArray(array, limit) {
//               return array.slice(0, limit);
//           //       if (policyNumber && !frm.doc.inception_date) { // Only fetch if inception_date is empty
//           //     // frappe.call({
//           //     //     method: 'frappe.client.get_list',
//           //     //     args: {
//           //     //         doctype: 'Policy Approvals',
//           //     //         filters: {
//           //     //             policy_number: policyNumber
//           //     //         },
//           //     //         fields: ['inception_date']
//           //     //     },
//           //     //     callback: function(response) {
//           //     //         if (response.message && response.message.length > 0) {
//           //     //             var policyApproval = response.message[0];
//           //     //             var inceptionDate = policyApproval.inception_date;
  
//           //     //             // Convert inception date string to Date object
//           //     //             var inceptionDateObj = frappe.datetime.str_to_obj(inceptionDate);
  
//           //     //             // Calculate expire date
//           //     //             var policyExpireDate = new Date(inceptionDateObj);
//           //     //             policyExpireDate.setFullYear(policyExpireDate.getFullYear() + 1);
  
//           //     //             // Set inception date and policy expire date field values
//           //     //             frm.set_value('inception_date', frappe.datetime.obj_to_user(inceptionDateObj));
//           //     //             frm.set_value('policy_expire_date', frappe.datetime.obj_to_user(policyExpireDate));
//           //     //         }
//           //     //     }
//           //     // });
  
//           // }
//           }
  
//           function populateBuyerField(buyerNames) {
//               const shuffledBuyerNames = shuffleArray(buyerNames);
//               const randomBuyerNames = limitArray(shuffledBuyerNames, 2);
//               frm.set_df_property('buyer', 'options', randomBuyerNames); // Set options to random buyer names
//               frm.refresh_field('buyer'); // Refresh the field to display updated options
               
//               frm.set_df_property('export_declaration','cannot_add_rows', true); 
                
//           }
  
//           // Fetch buyer data and populate 'buyer' field
//           frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   doctype: 'Buyer',
//                   fields: ['name', 'country'] // Fetching 'name' and 'country' fields
//               },
//               callback: function(response) {
//                   if (response && response.message && response.message.length > 0) {
//                       const buyersData = response.message;
//                       const buyerNames = buyersData.map(buyer => buyer.name);
//                       populateBuyerField(buyerNames);
  
//                       // Storing buyer data in a dictionary for quick lookup
//                       frm.buyersData = {};
//                       buyersData.forEach(buyer => {
//                           frm.buyersData[buyer.name] = buyer.country;
//                       });
//                   } else {
//                       console.error('No buyer data found or error fetching buyer data');
//                   }
//               },
//               error: function(xhr, textStatus, errorThrown) {
//                   console.error('Error fetching buyer data:', errorThrown);
//               }
//           });
  
//           // Event handler for 'buyer' field change
//           frm.fields_dict['buyer'].$input.on('change', function() {
//               const selectedBuyer = frm.doc.buyer;
              
//               if (frm.buyersData && frm.buyersData[selectedBuyer]) {
//                   const selectedCountry = frm.buyersData[selectedBuyer];
//                   frm.set_value('country', selectedCountry); // Setting country value based on selected buyer
//               }
//           });
  
//           // Event handler for 'buyer' field click
//           frm.fields_dict['buyer'].$input.on('click', function() {
//               const selectedBuyer = frm.doc.buyer;
              
//               if (frm.buyersData && frm.buyersData[selectedBuyer]) {
//                   const selectedCountry = frm.buyersData[selectedBuyer];
//                   frm.set_value('country', selectedCountry); // Setting country value based on selected buyer
//               }
//           });
          
//           // Attach onchange event handlers for fx_value and exchange_rate fields
          
  
//           togglePrepareInvoiceButton(frm);
            
//           frm.fields_dict.add.$input.addClass('btn-primary');
//           frm.fields_dict.prepare_invoice.$input.addClass('btn-primary');
//            frm.fields_dict.calculate.$input.addClass('btn-primary');
//    if (frm.doc.__islocal) {
//                    frm.toggle_display('prepare_invoice', false);
//                   // frm.toggle_display('add', false);
//   } 
//   else {
//         frm.toggle_display('prepare_invoice', true);
//   frm.toggle_display('add', false);
//   frm.toggle_display('calculate', false);
   
//   }
   
//       },
  
//       policy_holder: function(frm) {
//           fetchPremiumRate(frm);
//           togglePrepareInvoiceButton(frm);
//       },
  
//       prepare_invoice: function(frm) {
//           prepareExportInvoice(frm);
          
          
//       },
  
//       add: function(frm) {
//           exportDeclarations(frm);   
//         // addToChildTable(frm);
//       },
  
//       add_second: function(frm) {
//           insertExportDeclarations(frm);
          
//       },
//        // Trigger the calculation when the form is updated (including after saving)
      
  
//       fx_value: function(frm) {
//           // Listen for changes in fx_value field
//           calculateAmountPula(frm);
//           frm.fields_dict['fx_value'].$wrapper.find('input').css("text-align", "right");
//       },
  
//       exchange_rate: function(frm) {
//           // Listen for changes in exchange_rate field
//           calculateAmountPula(frm);
//            frm.fields_dict['exchange_rate'].$wrapper.find('input').css("text-align", "right")
//       },
        
//       //  setup: function(frm) {
//       //     frm.selected_buyer = false;
//       //     frm.selected_terms_of_payment = false;
//       //     frm.selected_year = false;
//       //     frm.selected_month = false;
//       // },
  
//       // year: function(frm) {
//       //     if (frm.doc.year) {
//       //         frm.selected_year = true;
//       //         if (!frm.selected_month) {
//       //             frappe.msgprint(__('Please select the month.'));
//       //         }
//       //     }
//       // },
  
//       // declaration_for_the_month_of: function(frm) {
//       //     if (frm.doc.declaration_for_the_month_of) {
//       //         frm.selected_month = true;
//       //         if (!frm.selected_year) {
//       //             frappe.msgprint(__('Please select the year.'));
//       //         }
//       //     }
//       // },
  
//       // buyer: function(frm) {
//       //     frm.selected_buyer = !!frm.doc.buyer;
//       //     if (frm.doc.__islocal) { // Check if the form is in add mode
//       //         // Skip validation when adding new documents
//       //         return;
//       //     }
//       //     if (!frm.selected_year || !frm.selected_month) {
//       //         frappe.msgprint(__('First select year and month'));
//       //     } else if (!frm.selected_terms_of_payment) {
//       //         frappe.msgprint(__('Please select terms of payment.'));
//       //     }
//       //     frm.trigger('checkIfAllSelected');
//       // },
  
//       // terms_of_payment: function(frm) {
//       //     if (!frm.selected_buyer) {
//       //         frappe.msgprint(__('Please select buyer first.'));
//       //     } else {
//       //         frm.selected_terms_of_payment = !!frm.doc.terms_of_payment;
//       //         frm.trigger('checkIfAllSelected');
//       //     }
//       // },
  
//       // fx_value: function(frm) {
//       //     if (!frm.selected_buyer) {
//       //       // frappe.msgprint(__('Please select buyer first.'));
//       //     } else {
//       //         frm.selected_terms_of_payment = true;
//       //     }
//       //     frm.trigger('checkIfAllSelected');
//       //     calculateAmountPula(frm);
            
//       // },
  
//       // exchange_rate: function(frm) {
//       //     if (!frm.selected_buyer) {
//       //       // frappe.msgprint(__('Please select buyer first.'));
//       //     } else {
//       //         frm.selected_terms_of_payment = true;
//       //     }
//       //     frm.trigger('checkIfAllSelected');
//       //     calculateAmountPula(frm);
//       //       frm.fields_dict['exchange_rate'].$wrapper.find('input').css("text-align", "right")
//       // },
  
//       // checkIfAllSelected: function(frm) {
//       //     if (frm.selected_buyer && frm.selected_terms_of_payment && frm.selected_year && frm.selected_month) {
//       //         // Optionally display a message or perform additional actions
//       //       //  frappe.msgprint(__('All selections have been made.'));
//       //     }
//       // }
  
  
//       // Triggered when terms_of_payment field changes
       
     
  
//       // Triggered when buyer field changes
//       // buyer: function(frm) {
//       //     frm.selected_buyer = !!frm.doc.buyer;
  
//       //     if (!frm.selected_year || !frm.selected_month) {
//       //         frappe.msgprint(__('First select year and month.'));
//       //     } else if (!frm.selected_terms_of_payment) {
//       //       // frappe.msgprint(__('Please select terms of payment.'));
//       //     }
  
//       //     frm.trigger('checkIfAllSelected');
//       // },
  
   
//   //   terms_of_payment: function(frm) {
//   //       frm.selected_buyer = !!frm.doc.selected_buyer
//   //     // Check if selected_buyer is not selected
//   //     if (!frm.selected_year || !frm.selected_month ) {
//   //         frappe.msgprint(__('Please select a buyer first.'));
//   //         frappe.msgprint(__('First select year and month.'));
//   //         return;
//   //     }
//   //      else  {
//   //             frm.selected_buyer = !!frm.doc.selected_buyer;
//   //             frm.trigger('checkIfAllSelected');
               
//   //      }
       
//   // }, 
   
  
   
   
  
//       // Triggered when fx_value field changes
//       // fx_value: function(frm) {
//       //     frm.trigger('checkIfAllSelected');
//       //     calculateAmountPula(frm);
//       //      frm.fields_dict['fx_value'].$wrapper.find('input').css("text-align", "right");
//       // },
  
//       // // Triggered when exchange_rate field changes
//       // exchange_rate: function(frm) {
//       //     frm.trigger('checkIfAllSelected');
//       //     calculateAmountPula(frm);
//       //     frm.fields_dict['exchange_rate'].$wrapper.find('input').css("text-align", "right");
//       // },
  
//       // Custom function to check if all required fields are selected
//       // checkIfAllSelected: function(frm) {
//       //     frm.selected_terms_of_payment = !!frm.doc.terms_of_payment;
//       //     if (!frm.selected_buyer) {
//       //         frappe.msgprint(__('Please select buyer first.'));
//       //     } else if (!frm.selected_year || !frm.selected_month) {
//       //         frappe.msgprint(__('First select year and month.'));
//       //     } else if (!frm.selected_terms_of_payment) {
//       //         frappe.msgprint(__('Please select terms of payment.'));
//       //     }
//       // }
//        policy_holder: function(frm) {
//           var policyHolder = frm.doc.policy_holder;
  
//           console.log("Policy Holder:", policyHolder); // Check policy_holder value
  
//           // Check if policy_holder is not empty and matches a specific condition
//           if (policyHolder) {
//               frappe.call({
//                   method: 'frappe.client.get_list',
//                   args: {
//                       doctype: 'Policy Approvals',
//                       filters: {
//                           'policy_holder': policyHolder,
//                           'policy_type': 'ECI'
//                       },
//                       fields: ['policy_number']
//                   },
//                   callback: function(response) {
//                       console.log("Response:", response); // Check response from server
  
//                       if (response.message && response.message.length > 0) {
//                           var policyNumbers = response.message.map(item => item.policy_number);
//                           console.log("Policy Numbers:", policyNumbers); // Check policy numbers fetched
  
//                           // Update dropdown field options
//                           frm.set_df_property('policy_number', 'options', policyNumbers.join('\n'));
//                           frm.refresh_field('policy_number'); // Refresh dropdown field
//                       } else {
//                           // Clear dropdown field options if no data found
//                           frm.set_df_property('policy_number', 'options', '');
//                           frm.refresh_field('policy_number'); // Refresh dropdown field
//                       }
//                   },
//                   error: function(err) {
//                       console.error("Error fetching Policy Approvals:", err); // Log error to console
//                       frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
//                   }
//               });
//           } else {
//               // Clear dropdown field options if policy_holder condition is not met
//               frm.set_df_property('policy_number', 'options', '');
//               frm.refresh_field('policy_number'); // Refresh dropdown field
//           }
//       },
  
//       policy_number: function(frm) {
//           var policyNumber = frm.doc.policy_number;
  
//           frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   doctype: 'Policy Approvals',
//                   filters: {
//                       'policy_number': policyNumber,
//                       'policy_type': 'ECI'
//                   },
//                   fields: ['policy_holder', 'policy_number', 'status', 'inception_date', 'expiry_date','premium_rate']
//               },
//               callback: function(response) {
//                   if (response.message && response.message.length > 0) {
//                       var policyApprovalData = response.message[0];
  
//                       // Check if policy number is already approved
//                       frappe.call({
//                           method: 'frappe.client.get_list',
//                           args: {
//                               doctype: 'Export Declarations',
//                               filters: {
//                                   'policy_number': policyNumber,
//                                   'workflow_state': 'Approved'
//                               },
//                               fields: ['policy_number']
//                           },
//                           callback: function(approvedResponse) {
//                               if (approvedResponse.message && approvedResponse.message.length > 0) {
//                                   frappe.msgprint('This policy number is already approved.');
//                               } else {
//                                   // Populate fields if data is found
//                                   frm.set_value('policy_holder', policyApprovalData.policy_holder || '');
//                                   frm.set_value('policy_holder1', policyApprovalData.policy_holder || '');
//                                   frm.set_value('policy_number', policyApprovalData.policy_number || '');
//                                   frm.set_value('policy_no', policyApprovalData.policy_number || '');
//                                   frm.set_value('status', policyApprovalData.status || '');
//                                   frm.set_value('inception_date', policyApprovalData.inception_date || '');
//                                   frm.set_value('policy_expire_date', policyApprovalData.expiry_date || '');
//                                                                   frm.set_value('premium_rate', policyApprovalData. premium_rate || '');
  
//                               }
//                           },
//                           error: function(err) {
//                               console.error("Error fetching approved policy numbers:", err);
//                               frappe.msgprint('An error occurred while checking approved policy numbers. Please check the console for details.');
//                           }
//                       });
//                   } else {
//                       // Clear fields if no matching record found
//                       frm.set_value('policy_holder', '');
//                       frm.set_value('policy_holder1', '');
//                       frm.set_value('policy_number', '');
//                       frm.set_value('policy_no', '');
//                       frm.set_value('status', '');
//                       frm.set_value('inception_date', '');
//                       frm.set_value('policy_expire_date', '');
//                                           frm.set_value('premium_rate', '');
  
//                       frappe.msgprint('No matching record found in Policy Approvals for the selected policy holder.');
//                   }
//               },
//               error: function(err) {
//                   console.error("Error fetching Policy Approvals:", err);
//                   frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
//               }
//           });
//       }
  
//   });
  
  
//   // frappe.ui.form.on('Export Declarations', {
//   //     inception_date: function(frm) {
//   //         if (frm.doc.inception_date) {
//   //             // Convert inception date string to Date object
//   //             var inceptionDateObj = frappe.datetime.str_to_obj(frm.doc.inception_date);
      
//   //             // Calculate expire date
//   //             var PolicyexpireDate = new Date(inceptionDateObj);
//   //             PolicyexpireDate.setFullYear(PolicyexpireDate.getFullYear() + 1);
      
//   //             // Set policy expire date field value
//   //             frm.set_value('policy_expire_date', frappe.datetime.obj_to_user(PolicyexpireDate));
//   //         }
//   //     }
//   // });
   
   
  
//    function generateDDNumber(frm) {
//       // Check if the ed_number field is already populated
//       if (!frm.doc.ed_number) {
//           // Get the current year
//           let currentYear = new Date().getFullYear();
//           let prefix = `DCL/${currentYear}/`;
  
//           // Make a call to get the last Export Declarations number asynchronously
//           frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   doctype: 'Export Declarations',
//                   fields: ['ed_number'],
//                   limit: 1,
//                   order_by: 'creation desc'
//               },
//               callback: function(response) {
//                   let lastEDNumber = response.message && response.message.length > 0 ? response.message[0].ed_number : '0';
//                   let lastNumber = parseInt(lastEDNumber.split("/").pop()) || 0; // Extract last part and parse it as integer
  
//                   // Make a call to get the last Domestic Declarations number asynchronously
//                   frappe.call({
//                       method: 'frappe.client.get_list',
//                       args: {
//                           doctype: 'Domestic Declarations',
//                           fields: ['ed_number'],
//                           limit: 1,
//                           order_by: 'creation desc'
//                       },
//                       callback: function(response) {
//                           let lastDomesticDeclarationsDDNumber = response.message && response.message.length > 0 ? response.message[0].ed_number : '0';
//                           let lastDomesticDeclarationsDDNo = parseInt(lastDomesticDeclarationsDDNumber.split("/").pop()) || 0;
  
//                           // Get the maximum of the last two numbers
//                           let maxLastNumber = Math.max(lastNumber, lastDomesticDeclarationsDDNo);
  
//                           // Increment the last number and pad it with leading zeros
//                           let newNumber = (maxLastNumber + 1).toString().padStart(4, '0');
//                           frm.set_value('ed_number', prefix + newNumber);
//                       }
//                   });
//               }
//           });
//       }
//   }
  
//   function populateBuyerField(frm) {
//       frappe.call({
//           method: 'frappe.client.get_list',
//           args: {
//               doctype: 'Buyer',
//               fields: ['name', 'country']
//           },
//           callback: function(response) {
//               if (response && response.message && response.message.length > 0) {
//                   const buyersData = response.message;
//                   const buyerNames = buyersData.map(buyer => buyer.name);
//                   const shuffledBuyerNames = shuffleArray(buyerNames);
//                   const randomBuyerNames = limitArray(shuffledBuyerNames, 2);
//                   frm.set_df_property('buyer', 'options', randomBuyerNames);
//                   frm.refresh_field('buyer');
//                   // Storing buyer data in a dictionary for quick lookup
//                   frm.buyersData = {};
//                   buyersData.forEach(buyer => {
//                       frm.buyersData[buyer.name] = buyer.country;
//                   });
//               } else {
//                   console.error('No buyer data found or error fetching buyer data');
//               }
//           },
//           error: function(xhr, textStatus, errorThrown) {
//               console.error('Error fetching buyer data:', errorThrown);
//           }
//       });
//   }
  
   
  
//   function togglePrepareInvoiceButton(frm) {
//       // Show the button after the form is saved
//       frm.toggle_display('prepare_invoice', !frm.doc.__islocal);
        
         
  
//   }
  
//   function hideConfirmButton(frm) {
//       frm.toggle_display('confirm', false);
           
  
      
      
  
       
//   }
   
   
  
    
//   function calculateAmountPula(frm) {
  
//       var fx_value = parseFloat(frm.doc.fx_value) || 0;
  
//       var premium_rate = parseFloat(frm.doc.premium_rate) || 0;
  
//       var exchange_rate = parseFloat(frm.doc.exchange_rate) || 0;
  
//       if (exchange_rate === 0) {
  
         
//         // frappe.msgprint(__('Exchange rate cannot be zero.'));
  
//           return;
  
//       }
  
//       var amount_pula = fx_value / exchange_rate;
  
//       var amount1 = premium_rate * amount_pula / 100;
  
//       frm.set_value('amount_pula', amount_pula.toFixed(2));
  
//       frm.set_value('amount1', amount1.toFixed(2));
  
//   } 
   
   
   
  
  
//   function prepareExportInvoice(frm) {
//       const export_invoice = frm.doc.export_declaration.map(row => ({
//           buyer: row.buyer,
//           turn_over_amt: row.pula,
//           premium_rate: row.premium_rate,
//           amount1:row.amount1,
//           country:row.country,
          
//       }));
      
  
//       const child_2_data = {
//           doctype: "Export Declaration Invoice",
//           export_buyer: export_invoice,
//           export_pula: export_invoice,
//           export_premium_rate: export_invoice,
        
//         export_country:export_invoice,
//         export_amount1:export_invoice,
//       };
//     frappe.route_options = {
//                policy_holder: frm.doc.policy_holder,
//           };
//       frappe.model.with_doctype("Export Declaration Invoice", function() {
//           var doc = frappe.model.get_new_doc("Export Declaration Invoice");
//           doc.export_buyer = export_invoice;
//           doc.export_pula = export_invoice;
//           doc.export_premium_rate = export_invoice;
//           doc.export_amount1=export_invoice;
//           doc.export_country=export_invoice,
  
  
//           frappe.set_route("Form", "Export Declaration Invoice", doc.name);
//       });
//   }
  
//   function exportDeclarations(frm) {
//       var buyer = frm.doc.buyer;
//       var terms_of_payment = frm.doc.terms_of_payment;
//       var exchange_rate = frm.doc.exchange_rate;
//       var fx_value = frm.doc.fx_value;
//       var amount_pula = frm.doc.amount_pula;
//       var premium_rate = frm.doc.premium_rate;
//       var country=frm.doc.country;
//       var amount1=frm.doc.amount1;
  
//       if (!buyer || !terms_of_payment || !exchange_rate || !fx_value || !amount_pula || !premium_rate||!country||!amount1) {
//           //frappe.msgprint('Please fill all the required fields');
//           return;
//       }
  
//       var exists = false;
//       if (frm.doc.export_declaration) {
//           frm.doc.export_declaration.forEach(function(row) {
//               if (row.buyer === buyer) {
//                   frappe.msgprint('You can only have one entry for ' + buyer);
//                   exists = true;
//                   return false;
//               }
//           });
//       }
  
//       if (!exists) {
//           var child_data = {
//               "doctype": "Export Declaration Child",
//               "parent": frm.doc.name,
//               "parenttype": "Profile",
//               "parentfield": "export_declaration",
//               "buyer": buyer,
//               "terms_of_payment": terms_of_payment,
//               "exchange_rate": exchange_rate,
//               "fx_value": fx_value,
//               "pula": amount_pula,
//               "premium_rate": premium_rate,
//               "country":country,
//               "amount1":amount1,
//           };
  
//           var child = frappe.model.add_child(frm.doc, "Export Declaration Child", "export_declaration");
//           frappe.model.set_value(child.doctype, child.name, "buyer", buyer);
         
          
  
//           frappe.model.set_value(child.doctype, child.name, "terms_of_payment", terms_of_payment);
//           frappe.model.set_value(child.doctype, child.name, "exchange_rate", exchange_rate);
//           frappe.model.set_value(child.doctype, child.name, "fx_value", fx_value);
//           frappe.model.set_value(child.doctype, child.name, "pula", amount_pula);
//           frappe.model.set_value(child.doctype, child.name, "premium_rate", premium_rate);
//           frappe.model.set_value(child.doctype, child.name, "country",country);
//           frappe.model.set_value(child.doctype, child.name, "amount1",amount1);
  
//                 // frappe.model.set_value(child.doctype, child.name, "country",country);
  
  
//           // Clear form fields after adding export declaration
//           clearFormFields(frm);
  
//           frm.refresh_field('export_declaration');
//       }
//   }
  
   
  
   
  
//   function clearFormFields(frm) {
     
      
//       // Function to clear form fields after adding export declaration
//     // frm.set_value('status', '');
//       frm.set_value('buyer', ''); // corrected field name
//       frm.set_value('terms_of_payment', '');
//       frm.set_value('exchange_rate', '');
//       frm.set_value('fx_value', '');
//       frm.set_value('amount_pula', '');
//   }
  
//    function shuffleArray(array) {
//       for (var i = array.length - 1; i > 0; i--) {
//           var j = Math.floor(Math.random() * (i + 1));
//           var temp = array[i];
//           array[i] = array[j];
//           array[j] = temp;
//       }
//       return array;
//   }
         
//    function addToChildTable(frm) {
//       var row = frappe.model.add_child(frm.doc, "Export Declaration Chid", "export_declaration");
    
//       row["buyer"] = frm.doc['buyer'];
//       row["terms_of_payment"] = frm.doc['terms_of_payment'];
//       row["exchange_rate"] = frm.doc['exchange_rate'];
//       row["fx_value"] = frm.doc['fx_value'];
   
  
//       frm.refresh_field("export_declaration");
  
//       // Clear the form fields after adding to the child table
//       frm.set_value("buyer", "");
//       frm.set_value("terms_of_payment", "");
//       frm.set_value("exchange_rate", "");
//       frm.set_value("fx_value", "");
      
//   }
   
    
  
     