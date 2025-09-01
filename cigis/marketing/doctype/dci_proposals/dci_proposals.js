// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('DCI Proposals', {
    
    
    
//     // upload(frm){
//     //         var file = frm.doc.upload;
    
//     //     // Check if a file is uploaded
//     //     if (file) {
//     //         // Get the file extension
//     //         var fileExtension = file.split('.').pop().toLowerCase();
    
//     //         // Allowed file extensions (Excel and PDF)
//     //         var allowedExtensions = ['xlsx', 'xls'];
    
//     //         // Check if the file extension is allowed
//     //         if (!allowedExtensions.includes(fileExtension)) {
//     //             // Show an error message
//     //             frappe.msgprint(__("Only Excel (.xlsx, .xls) files are allowed"));
//     //             // Clear the file field
//     //             frm.set_value('upload', '');
//     //             clearTableAndTotal(frm);
//     //             return;
//     //         }
//     //     } else {
//     //         // If no file is uploaded, clear the table and grand_total field
//     //         clearTableAndTotal(frm);
//     //         return;
//     //     }
        
      
    
//     //      frm.call({
//     //     doc: frm.doc,
//     //     method: 'extractData',
//     //     callback: function(response) {
//     //         console.log(response.message, "res");
    
//     //         if (!response.exc) {
//     //             console.log(response.message, "hi");
    
//     //             var data = response.message;
    
//     //             // Clear the form before loading data into child table
//     //             frappe.model.clear_doc(frm.doc);
//     //             frm.clear_table('debtorsheduletable');
    
//     //             var grandTotal = 0; // Initialize grand total to 0
    
//     //             for (let x of data) {
//     //                 var child = frappe.model.add_child(frm.doc, "Debtor_schedule_child", "debtorsheduletable");
//     //                 console.log(child, "s");
    
//     //                 frappe.model.set_value(child.doctype, child.name, "buyer", x.Buyer);
//     //                 frappe.model.set_value(child.doctype, child.name, "current", x.Current);
//     //                 frappe.model.set_value(child.doctype, child.name, "tdays", x['30Days']);
//     //                 frappe.model.set_value(child.doctype, child.name, "sdays", x['60Days']);
//     //                 frappe.model.set_value(child.doctype, child.name, "ndays", x['90Days']);
//     //                 frappe.model.set_value(child.doctype, child.name, "odays", x['120Days']);
    
//     //                 // Calculate total for each row
//     //                 var total = x.Current + x['30Days'] + x['60Days'] + x['90Days'] + x['120Days'];
//     //                 frappe.model.set_value(child.doctype, child.name, "total", total);
    
//     //                 // Add total to grand total
//     //                 grandTotal += total;
//     //             }
    
//     //             frm.refresh_fields('debtorsheduletable');
    
//     //             // Set grand total in the 'grand_total' field of the parent form
//     //             frm.set_value('grand_total', grandTotal);
                
//     //             console.log(data);
//     //         } else {
//     //             console.error(response.exc);
//     //         }
//     //     }
//     // });
    
          
//     //     },
    
    
    
//        validate: function(frm) {
//             var fieldsToValidate = ['proposal_application', 'financial_statements__age_analysis', 'current_debtor_schedule'];
//             var allowedExtensions = ['xlsx', 'xls', 'pdf'];
    
//             fieldsToValidate.forEach(function(fieldname) {
//                 var file = frm.doc[fieldname];
//                 if (file) {
//                     var fileExtension = file.split('.').pop();
//                     if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
//                         frappe.msgprint(__("Please upload a file with extension .xlsx, .xls, or .pdf"));
//                         frm.set_value(fieldname, '');
//                     }
//                 }
//             });
//         },
    
    
    
//         upload(frm) {
//         var file = frm.doc.upload;
    
//         // Check if a file is uploaded
//         if (file) {
//             // Get the file extension
//             var fileExtension = file.split('.').pop().toLowerCase();
    
//             // Allowed file extensions (Excel and PDF)
//             var allowedExtensions = ['xlsx', 'xls'];
    
//             // Check if the file extension is allowed
//             if (!allowedExtensions.includes(fileExtension)) {
//                 // Show an error message
//                 frappe.msgprint(__("Only Excel (.xlsx, .xls) files are allowed"));
//                 // Clear the file field
//                 frm.set_value('upload', '');
//                 // clearTableAndTotal(frm);
//                 // return;
//             }
    
//             // If the uploaded file is an Excel file, make the API call
//             frm.call({
//                 doc: frm.doc,
//                 method: 'extractData',
//                 callback: function(response) {
//                     console.log(response.message, "res");
    
//                     if (!response.exc) {
//                         console.log(response.message, "hi");
    
//                         var data = response.message;
    
//                         // Clear the form before loading data into the child table
//                         frappe.model.clear_doc(frm.doc);
//                         frm.clear_table('debtorsheduletable');
    
//                         var grandTotal = 0; // Initialize grand total to 0
    
//                         for (let x of data) {
//                             var child = frappe.model.add_child(frm.doc, "Debtor_schedule_child", "debtorsheduletable");
//                             console.log(child, "s");
    
//                             frappe.model.set_value(child.doctype, child.name, "buyer", x.Buyer);
//                             frappe.model.set_value(child.doctype, child.name, "current", x.Current);
//                             frappe.model.set_value(child.doctype, child.name, "tdays", x['30Days']);
//                             frappe.model.set_value(child.doctype, child.name, "sdays", x['60Days']);
//                             frappe.model.set_value(child.doctype, child.name, "ndays", x['90Days']);
//                             frappe.model.set_value(child.doctype, child.name, "odays", x['120Days']);
    
//                             // Calculate total for each row
//                             var total = x.Current + x['30Days'] + x['60Days'] + x['90Days'] + x['120Days'];
//                             frappe.model.set_value(child.doctype, child.name, "total", total);
    
//                             // Add total to grand total
//                             grandTotal += total;
//                         }
    
//                         frm.refresh_fields('debtorsheduletable');
    
//                         // Set grand total in the 'grand_total' field of the parent form
//                         frm.set_value('grand_total', grandTotal);
    
//                         console.log(data);
//                     } else {
//                         console.error(response.exc);
//                     }
//                 }
//             });
//         } else {
//             // If no file is uploaded, clear the table and grand_total field
//             clearTableAndTotal(frm);
//             return;
//         }
//     },
    
     
    
        
    
    
    
//      // Replace 'YourDocType' with the name of your doctype
//         for_the_period_of: function(frm) {
//             // This function is triggered when the value of 'for_the_period_of' field changes
    
//             // Get the value of the month field
//             var monthValue = frm.doc.for_the_period_of;
    
//             // Check if the month value is within the range of 1 to 12
//             if (monthValue && (monthValue < 1 || monthValue > 12)) {
//                 // Show an error message
//                 frappe.msgprint(__("Month must be a number between 1 and 12"));
//                 // Clear the value of the month field
//                 frm.set_value('for_the_period_of', '');
//             }
//         },
        
        
//     // for_the_period_of:function(frm) {    
//     // // This function is triggered when the value of 'min_period_month' field changes// Get the value of the month field 
//     // var monthValue = frm.doc.min_period_month;    
//     // // Check if the month value is not empty and is not a number between 1 and 12
//     // if(monthValue && (isNaN(monthValue) || monthValue <1|| monthValue >12)) {        
//     // // Show an error message
//     //         frappe.msgprint(__("Month must be a number between 1 and 12"));        
//     // // Clear the value of the month field
//     //         frm.set_value('for_the_period_of','');    
//     //         } 
            
//     //     },
        
//         debtor_schedule:function(frm){
//            // Hide the "Add Row" button from the debtorsheduletable
//              frm.set_df_property('debtorsheduletable', 'cannot_add_rows', true);
//         },
        
//         alternate_information: function(frm) {
//             // Hide the "Add Row" button from the alternate_information_table
//              frm.set_df_property('alternate_information_table', 'cannot_add_rows', true);
//         },
        
        
       
//     refresh(frm) {
        
//          alignFieldsRight(frm, fieldsToAlignRight);
        
      
         
        
//     // frm.fields_dict.for_the_period_of.$input.css("text-align", "right");
//     // frm.fields_dict.estimated_loss.$input.css("text-align", "right");
//     // frm.fields_dict.on_a_turnover.$input.css("text-align", "right");
//     // frm.fields_dict.actual_loss.$input.css("text-align", "right");
//     // frm.fields_dict.currentyear_turnover.$input.css("text-align", "right");
//     // frm.fields_dict.govtsales.$input.css("text-align", "right");
//     // frm.fields_dict.nextyear_turnover.$input.css("text-align", "right");
//     // frm.fields_dict.govtsales2.$input.css("text-align", "right");
//     // frm.fields_dict.normal.$input.css("text-align", "right");
//     // frm.fields_dict.maximum.$input.css("text-align", "right");
//     // frm.fields_dict.total_debtors.$input.css("text-align", "right");
//     // frm.fields_dict.account_on_which_amount_exceeds.$input.css("text-align", "right");
//     // frm.fields_dict.estimated_of_the_total_monthly_book_debits.$input.css("text-align", "right");
    
    
    
//         //Only get Active Records
//         frm.fields_dict['client_name'].get_query = function(doc) {
//                 return {
//                     filters: {
//                         "status": "Active"
//                     }
//                 };
//             };
     
//            frm.set_df_property('directors_shareholders_table', 'cannot_add_rows', true);
//            frm.set_df_property('buyer_experience_child_table', 'cannot_add_rows', true);
//            frm.set_df_property('debt_history_child_table', 'cannot_add_rows', true);
//            frm.set_df_property('principal_buyer_child_table', 'cannot_add_rows', true);
        
//             // Replace 'your_child_table_fieldname' with the name of your child table field
            
//         frm.fields_dict.directors_shareholder_add_new.$input.addClass('btn-primary');
//         frm.fields_dict.buyer_experience_add_new.$input.addClass('btn-primary');
        
//         frm.fields_dict.debt_history_add_new.$input.addClass('btn-primary');
        
//         frm.fields_dict.calculate.$input.addClass('btn-primary');
      
//         //  frm.fields_dict.principal_buyer_add_new.$input.addClass('btn-primary');
         
         
          
//         //  frm.fields_dict.debtor_schedule_add_new.$input.toggle(frm.fields_dict.alternate_information.get_value());
    
//         //     frm.fields_dict.alternate_information.$input.on('change', function() {
//         //         frm.fields_dict.debtor_schedule_add_new.$input.toggle(frm.fields_dict.alternate_information.get_value());
//         //     });
        
        
        
        
//            var workflowState = frm.doc.workflow_state;
    
//             // Create a custom button for "Print Proposal" if the workflow state is "Submitted"
//             if (workflowState === "Approved") {
//                 frm.add_custom_button(__('Print Proposal'), function() {
//                     frappe.new_doc('Print proposal');
                    
//                        frappe.route_options = {
//                         client_name: frm.doc.client_name,
//                     },
                    
//             //Print Proposal code
    
//             frappe.ui.form.on('Print proposal', {
//             onload: function(frm) {
//                 alignFieldsRight(frm, fieldsToAlignRight);
                
//             // Client details
//             frappe.call({
//                 method: 'frappe.client.get',
//                 args: {
//                     doctype: 'Company-Details',
        
//                  filters: {
//                     name1: frm.doc.client_name
//                 },
//                 },
//                 callback: function (r) {
//                     console.log(r, "client details");
    
//                     if (r.message) {
//                         frm.set_value('postal_address', r.message.postal_address);
//                         frm.set_value('physical_address', r.message.physical_address);
//                         frm.set_value('fax', r.message.fax);
//                         frm.set_value('registrationno', r.message.registration_number);
//                         frm.set_value('establishmentdate', r.message.establisheddate);
//                         frm.set_value('bankers', r.message.bank);
//                         frm.set_value('telephone', r.message.telephone);
//                         frm.set_value('account_no', r.message.ac_no);
//                         frm.set_value('email', r.message.email);
    
//                         // Refresh the form to reflect the changes
//                         frm.refresh();
//                     } else {
//                         console.error("Error occurred in client details:", r.exc);
//                     }
//                 }
//             });
    
//             // Fetch trade style data
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'DCI Proposals',
//                     filters: {
//                         client_name: frm.doc.client_name
//                     },
//                     fields: ['associated_companies', 'government', 'retailers', 'manufacturers', 'wholesalers'],
//                     limit_page_length: 1 // Limit to one result for efficiency
//                 },
//                 callback: function(response) {
//                     if (response.message && response.message.length > 0) {
//                         var data_from_proposals = response.message[0];
//                         var trade_styles = [];
    
//                         if (data_from_proposals.associated_companies) {
//                             trade_styles.push('Associated Companies');
//                         }
//                         if (data_from_proposals.government) {
//                             trade_styles.push('Government');
//                         }
//                         if (data_from_proposals.retailers) {
//                             trade_styles.push('Retailers');
//                         }
//                         if (data_from_proposals.manufacturers) {
//                             trade_styles.push('Manufacturers');
//                         }
//                         if (data_from_proposals.wholesalers) {
//                             trade_styles.push('Wholesalers');
//                         }
    
//                         frm.set_value('trade_style', trade_styles.join(', '));
//                     } else {
//                         frm.set_value('trade_style', ''); // Ensure 'trade_style' is cleared if no data is found
//                     }
//                 },
//                 error: function(error) {
//                     console.error("Error in frappe.call:", error);
//                     frm.set_value('trade_style', ''); // Clear the field in case of an error
//                 }
//             });
    
//             // DCI Proposals data
//             frappe.call({
//                 method: "frappe.client.get",
//                 args: {
//                     doctype: "DCI Proposals",
//                     filters: {
//                         client_name: frm.doc.client_name
//                     },
//                     fields: ["directors_shareholders_table"]
//                 },
//                 callback: function (r) {
//                     console.log(r, "DCI Proposals data");
    
//                     if (r.message && r.message.directors_shareholders_table) {
//                         var data = r.message.directors_shareholders_table;
    
//                         // Clear the child table before adding new rows
//                         frm.clear_table('table');
    
//                         for (let x of data) {
//                             var child = frappe.model.add_child(frm.doc, "Print_child", "table");
//                             frappe.model.set_value(child.doctype, child.name, "designation", x.designation);
//                             frappe.model.set_value(child.doctype, child.name, "share_holder", x.directorname);
    
//                             // Add more fields as needed
//                         }
    
//                         frm.refresh_fields('table');
//                         console.log(data);
//                     } else {
//                         console.error("Error occurred in DCI Proposals data:", r.exc);
//                     }
//                 }
//             });
//         },
//     });
    
                    
//                     console.log("Print Proposal clicked!");
//                 }).addClass("btn-primary");
//             }
    
//             // Create a custom button for "Rejection Letter" if the status is "Rejected"
//              if (workflowState === "Rejected") {
//                 frm.add_custom_button(__('Rejection Letter'), function() {
//                     // Set route_options before creating the new document
//                     frappe.route_options = {
//                         to: frm.doc.client_name,
//                         // proposal_no: frm.doc.proposal_no,
//                         // regisration_no: frm.doc.registrationno,
//                         // date: frm.doc.establishmentdate,
//                         // information: frm.doc.remarks,
//                     };
    
//                     // Create a new 'Rejection_Letter_1' document
//                     frappe.new_doc('Rejection_Letter_1');
                    
                    
//                  //Rejection letter code
//                  frappe.ui.form.on('Rejection_Letter_1', {
//              refresh: function(frm) {
            
//             frappe.call({
//                 method: 'frappe.client.get',
//                 args: {
//                     doctype: 'DCI Proposals',
//                     filters: {
//                         client_name: frm.doc.to
//                     },
//                     fields: ['proposal_no', 'registrationno']
//                 },
//                callback: function (r) {
//                     console.log(r,"clent short name")
//                     if (!r.exc) {
//                        if (r.message) {
    
//                             frm.set_value('regisration_no', r.message.registrationno);
//                             frm.set_value('date', r.message.establishmentdate);
//                              frm.set_value('proposal_no', r.message.proposal_no);
//                         }
    
//                     } else {
    
//                         console.error("Error occurred:", r.exc);
    
//                     }
    
//                 }
    
//             });
            
//             frappe.call({
//                 method: 'frappe.client.get',
//                 args: {
//                     doctype: 'Company-Details',
//                     filters: {
//                         name1: frm.doc.to
//                     },
//                     fields: ['postal_address', 'location', 'physical_address']
//                 },
//                 callback: function (r) {
//                     console.log(r, "client details");
//                     if (!r.exc) {
//                         if (r.message) {
//                             // Concatenate the fields line by line
//                             let address = '';
                            
//                             if (r.message.name1) {
//                                 address += r.message.name1 + '\n';
//                             }
//                             if (r.message.location) {
//                                 address += r.message.location + '\n';
//                             }
//                             if (r.message.physical_address) {
//                                 address += r.message.physical_address + '\n';
//                             }
//                             if (r.message.postal_address) {
//                                 address += r.message.postal_address + '\n';
//                             }
                             
//                             // Remove the trailing newline character
//                             address = address.trim();
    
//                             // Set the concatenated address in the 'address' field
//                             frm.set_value('address', address);
//                         }
//                     } else {
//                         console.error("Error occurred:", r.exc);
//                     }
//                 }
//             });
//         }
//     });
    
    
//                     console.log("Rejection Letter clicked!");
//                 }).addClass("btn-primary");
//              }
    
    
//         //   if (!frm.doc.__islocal) { // Execute only if the document is not new
//         //   fetchAndFilterPolicyNumbers(frm);
//         //  }
    
        
//         },
        
     
        
//         //  onload_post_render(frm) {
//         //     // Add class to the debtor_schedule_add_new button
//         //     frm.fields_dict.debtor_schedule_add_new.$input.addClass('btn-primary');
//         // },
    
       
        
//     //   onload_post_render: function(frm) {
//     //         // Check if debtor_schedule_add_new is defined and $input exists before adding class
//     //         if (frm.fields_dict.debtor_schedule_add_new && frm.fields_dict.debtor_schedule_add_new.$input) {
//     //             frm.fields_dict.debtor_schedule_add_new.$input.addClass('btn-primary');
//     //         }
//     //      },
    
    
//      onload: function(frm) {
             
//              alignFieldsRight(frm, fieldsToAlignRight);
          
//             if (!frm.doc.proposal_no) {
//                 generateNumber(frm);
//             }
            
            
           
    
            
//         //   frappe.call({
    
//         //   method: 'frappe.client.get_list',
    
//         //   args: {
    
//         //     'doctype': 'Company-Details',
    
//         //     'filters': {
    
//         //       status: "Active"
    
//         //     },
    
//         //   fields: ['name1']
    
//         //   },
    
//         //   callback: function(submittedProposalsResponse) {
    
//         //     if (submittedProposalsResponse.message) {
    
//         //       var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
    
//         //         return proposal.name1;
                
              
     
    
//         //       });
    
//         //       console.log("** Submitted Proposals:", submittedProposals);
     
//         //       console.log("** Fetching Approved Quotations **");
    
//         //       frappe.call({
    
//         //         method: 'frappe.client.get_list',
    
//         //         args: {
    
//         //           'doctype': 'DCI Proposals',
    
//         //           'filters': {
    
//         //             'workflow_state': 'Submitted'
    
//         //           },
    
//         //           'fields': ['client_name']
    
//         //         },
    
//         //         callback: function(approvedQuotationsResponse) {
    
//         //             console.log(approvedQuotationsResponse,"approvedQuotationsResponse")
    
//         //           if (approvedQuotationsResponse.message) {
    
//         //             var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
    
//         //               return quotation.client_name;
    
//         //             });
    
//         //             console.log("** Approved Quotations:", approvedQuotations);
     
//         //             // Filter client names (include only proposals not in approved quotations)
    
//         //             var filteredClientNames = submittedProposals.filter(function(proposal) {
    
//         //               return !approvedQuotations.includes(proposal);
    
//         //             });
    
//         //             console.log("** Filtered Client Names:", filteredClientNames);
    
//         //               frm.set_df_property('client_name', 'options', filteredClientNames);
                      
                    
                 
    
                  
    
//         //           }
    
//         //         }
    
//         //       }); // Close inner frappe.call
    
//         //     }
    
//         //   }
    
//         // }); // Close outer frappe.call
            
            
//             // //Filtering only Active Records from companies
//             //  frm.fields_dict['client_name'].get_query = function(doc) {
//             //     return {
//             //         filters: {
//             //             // "workflow_state": "Submitted",
//             //             "status": "Active"
//             //         }
//             //     };
//             // };
            
            
    
//             // Function to calculate total number of debtors
//             function calculateTotalDebtors() {
//                 var total_debtors = 0;
//                 var child_table = frm.doc.alternate_information_table || [];
    
//                 // Loop through child table rows and sum up number_of_debtors
//                 child_table.forEach(function(row) {
//                     total_debtors += row.number_of_debtors ? parseFloat(row.number_of_debtors) : 0;
//                 });
    
//                 frm.doc.total_debtors = total_debtors;
//                 frm.refresh_field('total_debtors');
//             }
    
//             // Call the function initially
//             calculateTotalDebtors();
    
//             // Refresh total number of debtors when a row is added or removed in the child table
//             frm.fields_dict['alternate_information_table'].grid.on_grid_refresh = calculateTotalDebtors;
            
    
//         },
        
        
        
    
//      principal_buyer_add_new: function(frm) {
//           frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     'doctype': 'Buyer',
//                     'filters': {'dci': 1}, // Assuming you have a field 'dci_buyer' to identify DCI buyers
//                     'fields': ['buyer_name'] // Adjust fields as needed
//                 },
//                 callback: function(response) {
//                     var dci_buyers = response.message;
//                     var options = [];
//                     dci_buyers.forEach(function(buyer) {
//                         options.push({label: buyer.buyer_name, value: buyer.buyer_name});
//                     });
                    
                   
    
//                     frappe.prompt([
//                         {'fieldname': 'buyer_name', 'fieldtype': 'Select', 'options': options, 'label': 'Buyer Name'},
//                          {'fieldname': 'add_buyer', 'fieldtype': 'Button', 'label': 'Add New Buyer',
                    
//                         click: function() {
//                                  frappe.new_doc('Buyer'); 
                                    
//                                 }
//                         },
//                         {'fieldname': 'address', 'fieldtype': 'Data', 'label': 'Address'},
//                         {'fieldname': 'amount_outstanding', 'fieldtype': 'Data', 'label': 'Amount Outstanding'},
                       
//                         // Additional fields as needed
//                     ],
//                     function(values){
//                         // Construct an object with the field values
//                         var data = {
//                             buyer_name: values.buyer_name,
//                             address: values.address,
//                             amount_outstanding: values.amount_outstanding,
//                             add_buyer:values.add_buyer,
//                             // Include other field values here
//                         };
    
//                          // Save the object to LocalStorage
//                         localStorage.setItem('Principal_Buyer_ch', JSON.stringify(data));
    
//                         // Retrieve the data from LocalStorage
//                       var Principal_Buyer_ch = JSON.parse(localStorage.getItem('Principal_Buyer_ch'));
       
//                  // Add the retrieved data to the child table
//                 Principal_Buyer_addDataToChildTable(frm, Principal_Buyer_ch);
//                     },
//                     'Principal Buyer');
                    
                    
                    
                    
                    
//                 }
//             });
            
            
//       },
    
//     // Directors and shareholders 
//      directors_shareholder_add_new: function(frm) {
         
//             frappe.prompt([
//                 {'fieldname': 'id_type', 'fieldtype': 'Select','options': '   \nDRIVING LICENSE \nOMANG\nPASSPORT',  'label': 'ID Type'},
//                  {'fieldname': 'id_number', 'fieldtype': 'Data', 'label': 'ID No'},
//                 {'fieldname': 'surname', 'fieldtype': 'Data', 'label': 'Surname'},
//                 {'fieldname': 'first_name', 'fieldtype': 'Data', 'label': 'First Name'},
//                  {'fieldname': 'middle_name', 'fieldtype': 'Data', 'label': 'Middle Name'},
                
//                 {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//                   {'fieldname': 'e_mail_address', 'fieldtype': 'Data', 'label': 'E-Mail Address'},
//                 {'fieldname': 'fax', 'fieldtype': 'Data', 'label': 'Fax'},
//                 {'fieldname': 'contact_no', 'fieldtype': 'Phone', 'label': 'Contact No'},
//                 {'fieldname': 'designation', 'fieldtype': 'Select', 'options': '   \nDIRECTOR \nMEMBER \nMANAGER \nOTHERS \nPARTNERS \nPROPRIETOR', 'label': 'Designation'}
//             ],
//             function(values){
//                 // Construct an object with the field values
//                 var director_name = `${values.first_name || ''} ${values.middle_name || ''} ${values.surname || ''}`.trim();
//                 console.log(director_name,"director_name");
//                 var data = {
//                     id_type: values.id_type,
//                     id_number: values.id_number,
//                     director_name: director_name,
//                     // surname: values.surname,
//                     // first_name: values.first_name,
//                     // middle_name: values.middle_name,
//                     e_mail_address: values.e_mail_address,
//                     fax: values.fax,
//                     contact_no: values.contact_no,
//                     designation: values.designation,
//                 };
    
//                 // Save the object to LocalStorage
//                 localStorage.setItem('Directors_Shareholders_table', JSON.stringify(data));
                
//                 console.log(Directors_Shareholders_table,"tabledata")
    
//                 // Inform user that data has been saved to LocalStorage
//                 // frappe.msgprint('Data saved to LocalStorage successfully');
                
//                 // Retrieve the data from LocalStorage
//                 var Directors_Shareholders_table = JSON.parse(localStorage.getItem('Directors_Shareholders_table'));
                
//                 // Log the retrieved data to the console
//                 console.log(Directors_Shareholders_table, "data");
                
//                 // Add the retrieved data to the child table
//                 addDataToChildTable(frm, Directors_Shareholders_table);
//             },
//             'Directors/ShareHolders');
//         },
        
//     //Buyer Experience    
//     buyer_experience_add_new: function(frm){
//             frappe.prompt([
//                 {'fieldname': 'financial_year', 'fieldtype': 'Select','options': '   \n2000\n2001\n2002\n2003\n2004\n2005\n2006\n2007\n2008\n2009\n2010\n2011\n2012\n2013\n2014\n2015\n2016\n2017\n2018\n2019\n2020\n2021\n2022\n2023\n2024\n2025\n2026\n2027\n2028\n2029\n2030',  'label': 'Financial Year'},
//                 {'fieldname': 'turnover', 'fieldtype': 'Currency', 'label': 'Turnover'},
//                 {'fieldname': 'relative_bad_debt_loss', 'fieldtype': 'Currency', 'label': 'Relative Bad Debt Loss'},
//                 {'fieldname': 'largest_lost_client_name', 'fieldtype': 'Link', 'options': 'Company-Details', 'label': 'Largest Lost (Client Name)'},
//                 {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//                 {'fieldname': 'largest_loss', 'fieldtype': 'Currency', 'label': 'Largest Loss'},
//             ],
//             function(values){
//                 // Construct an object with the field values
//                 var data = {
//                     financial_year: values.financial_year,
//                     turnover: values.turnover,
//                     relative_bad_debt_loss: values.relative_bad_debt_loss,
//                     largest_loss: values.largest_loss,
//                     largest_lost_client_name: values.largest_lost_client_name,
//                 };
    
//                 // Save the object to LocalStorage
//                 localStorage.setItem('Buyer_experience_ch', JSON.stringify(data));
    
//                 // Retrieve the data from LocalStorage
//                 var Buyer_experience_ch = JSON.parse(localStorage.getItem('Buyer_experience_ch'));
    
//                 // Add the retrieved data to the child table
//                 BuyeraddDataToChildTable(frm, Buyer_experience_ch);
//             },
//             'Buyer Experience');
           
//         },
    
    
    
        
//     //debt History
//     debt_history_add_new: function(frm){
//           frappe.prompt([
//                 {'fieldname': 'month', 'fieldtype': 'Select','options': '   \nJanuary \n February\nMarch\nApril\nMay\nJune\nJuly\nAugust\nSeptember\nOctober\nNovember\nDecember',  'label': 'Month'},
//                 {'fieldname': 'last_year_debt', 'fieldtype': 'Currency', 'label': 'Last Year Debt'},
//                 {'fieldname': 'this_year_debt', 'fieldtype': 'Currency', 'label': 'This Year Debt'},
                
//             ],
//             function(values){
//                 // Construct an object with the field values
//                 var data = {
//                     month: values.month,
//                     last_year_debt: values.last_year_debt,
//                     this_year_debt: values.this_year_debt,
                    
//                 };
    
//                 // Save the object to LocalStorage
//                 localStorage.setItem('Debt_History_Child', JSON.stringify(data));
    
//                 // Retrieve the data from LocalStorage
//                 var Debt_History_Child = JSON.parse(localStorage.getItem('Debt_History_Child'));
    
//                 // Add the retrieved data to the child table
//                 Debt_HistoryaddDataToChildTable(frm, Debt_History_Child);
//             },
//             'Debt History');
//       },
      
//     //debtor schedule(Alternate Information Add New)
//     debtor_schedule_add_new: function(frm){
//          frappe.prompt([
//                 {'fieldname': 'debt_range_from', 'fieldtype': 'Date',  'label': 'Debt Range from'},
//                 {'fieldname': 'debt_range_to', 'fieldtype': 'Date', 'label': 'Debt Range To'},
//                 {'fieldname': 'number_of_debtors', 'fieldtype': 'Data', 'label': 'Number Of Debtors'},
                
//             ],
//             function(values){
//                 // Construct an object with the field values
//                 var data = {
//                     debt_range_from: values.debt_range_from,
//                     debt_range_to: values.debt_range_to,
//                     number_of_debtors: values.number_of_debtors,
                    
//                 };
    
//                 // Save the object to LocalStorage
//                 localStorage.setItem('Alter_Child_table', JSON.stringify(data));
                
//                 // frm.set_value('total_debtors', values.number_of_debtors);
    
//                 // Retrieve the data from LocalStorage
//                 var Alter_Child_table = JSON.parse(localStorage.getItem('Alter_Child_table'));
    
//                 // Add the retrieved data to the child table
//                 debtor_schedule_addDataToChildTable(frm, Alter_Child_table);
//             },
//             'Debtor Schedule');
//     },
      
//     // //Debtor Shedule(Debtor Shedule Add New) 
//     //  debtor_add_new: function(frm) {
//     //     frappe.prompt([
//     //         {'fieldname': 'buyer', 'fieldtype': 'Link', 'label': 'Buyer', 'options':'Buyer'},
//     //         {'fieldname': 'current', 'fieldtype': 'Currency', 'label': 'Current'},
//     //         {'fieldname': 'tdays', 'fieldtype': 'Currency', 'label': '30Days'},
//     //         {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//     //         {'fieldname': 'sdays', 'fieldtype': 'Currency', 'label': '60Days'},
//     //         {'fieldname': 'ndays', 'fieldtype': 'Currency', 'label': '90Days'},
//     //         {'fieldname': 'odays', 'fieldtype': 'Currency', 'label': '120Days'},
//     //         // {'fieldname': 'total', 'fieldtype': 'Currency', 'label': 'Total'},
//     //     ],
//     //     function (values) {
//     //          // Calculate the total
//     //         var total = parseFloat(values.current || 0) + parseFloat(values.tdays || 0) + parseFloat(values.sdays || 0) + parseFloat(values.ndays || 0) + parseFloat(values.odays || 0);
            
//     //         // Assign the total to the Total field
//     //         values.total = total;
//     //         // Add the new debtor row
//     //       var data = {
//     //                 buyer: values.buyer,
//     //                 current: values.current,
//     //                 tdays: values.tdays,
//     //                 sdays: values.sdays,
//     //                 ndays: values.ndays,
//     //                 odays: values.odays,
//     //                 total: values.total
                    
//     //           };
//     //               // Save the object to LocalStorage
//     //             localStorage.setItem('Debtor_schedule_child', JSON.stringify(data));
                
//     //              // Retrieve the data from LocalStorage
//     //           var Debtor_schedule_child = JSON.parse(localStorage.getItem('Debtor_schedule_child'));
    
//     //           // Add the retrieved data to the child table
//     //             debtor_addDataToChildTable(frm, Debtor_schedule_child);
    
    
           
            
//     //     },
//     //     'Debtor Schedule');
//     // },
    
//     //Quotation Percentage Calculation
//     // calculate: function(frm) {
        
//     //     if(frm.doc.all_buyers){
//     //         // Call the function to calculate the monthly debits percentage
//     //         calculateMonthlyDebitsPercentage(frm);
//     //     }
       
//     //     else{
//     //         frappe.msgprint("Please select the check box of 'All the buyers'"); // Print a message when the file is uploaded successfully
    
//     //     }
//     //     if(frm.doc.account_on_which_amount_exceeds){
//     //              calculateMonthlyDebitsPercentage(frm); 
//     //     }
//     //      else{
//     //         frappe.msgprint("Please enter the amount"); // Print a message when the file is uploaded successfully
    
//     //     }
//     // }
    
//     calculate: function(frm) {
//         if (frm.doc.all_buyers || frm.doc.account_on_which_amount_exceeds) {
//             if (frm.doc.all_buyers || (frm.doc.account_on_which_amount_exceeds && frm.doc.amount)) {
//                 calculateMonthlyDebitsPercentage(frm);
//             } else {
//                 frappe.msgprint("Please select the 'All buyers'."); 
//             }
//         } else {
//             frappe.msgprint("Please select 'All buyers' and enter the 'Amount'."); 
//         }
//     }
    
    
    
//     // all_buyers:function(frm){
//     //     if(frm.doc.calculate){
//     //       calculateMonthlyDebitsPercentage(frm);  
//     //     }
//     // }
    
    
//     });
    
    
    
    
    // Function to calculate monthly debits percentage
    // function calculateMonthlyDebitsPercentage(frm) {
    //     var grandTotal = frm.doc.grand_total || 0;
    
    //     // Check if the grand total is greater than zero
    //     if (grandTotal > 0) {
    //         // var allBuyersChecked = frm.doc.all_buyers || false;
    //         var accountExceeds = frm.doc.account_on_which_amount_exceeds || 0;
    
    //         // Calculate the estimated monthly debits percentage
    //         var estimatedPercentage = accountExceeds/grandTotal * 100;
    
    //         // Update the field with the calculated percentage
    //         frm.set_value('estimated_of_the_total_monthly_book_debits', estimatedPercentage);
    
           
    //     } else {
    //         // If grand total is zero, show the message
    //         frappe.msgprint('There is no Buyers');
    //     }
    // }
    
    // //Debtor Shedule(Debtor Shedule Add New) 
    // function debtor_addDataToChildTable(frm, data) {
    //     var childTable = frm.fields_dict['debtorsheduletable'].grid;
    //     var newRow = childTable.add_new_row();
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'buyer', data.buyer);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'current', data.current);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'tdays', data.tdays);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'sdays', data.sdays);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'ndays', data.ndays);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'odays', data.odays);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'total', data.total);
        
    
    //     childTable.refresh();
    //     // Recalculate and update Grand Total after adding data to the child table
    //     calculateAndUpdateGrandTotal(frm);
    // }
    
    
    // // Function to calculate and update Grand Total
    // function calculateAndUpdateGrandTotal(frm) {
    //     var childTableData = frm.doc.debtorsheduletable || [];
    
    //     // Calculate Grand Total
    //     var grandTotal = childTableData.reduce(function(total, row) {
    //         return total + (row.total || 0);
    //     }, 0);
    
    //     // Update Grand Total field in the form
    //     frm.set_value('grand_total', grandTotal);
    // }
    
    //addDataToChildTable in Directors add Shareholders table
    //Local storage data displaying in child table
    // function addDataToChildTable(frm, data) {
    //     // Access the child table grid
    //     var childTable = frm.fields_dict['directors_shareholders_table'].grid;
    
    //     // Add a new row to the child table
    //     var newRow = childTable.add_new_row();
    
    //     // Set values for each field in the row
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'id_type', data.id_type);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'id_number', data.id_number);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'directorname', data.director_name);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'emailaddress', data.e_mail_address);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'fax', data.fax);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'contact_no', data.contact_no);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'designation', data.designation);
    
    
    //     // Refresh the child table to reflect the changes
    //     childTable.refresh();
    // }
    
    
    
    //Buyer_Experience_addDataToChildTable in Buyer Experience table
    //Local storage data displaying in child table
    // Add data to Buyer Experience child table
    // function BuyeraddDataToChildTable(frm, data) {
    //     var childTable = frm.fields_dict['buyer_experience_child_table'].grid;
    //     var newRow = childTable.add_new_row();
    
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'financial_year', data.financial_year);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'turnover', data.turnover);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'relative_bad_debt_loss', data.relative_bad_debt_loss);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'largest_loss', data.largest_loss);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'largest_lost_client_name', data.largest_lost_client_name);
    
    //     childTable.refresh();
        
    //     calculatetotal_turnover(frm);
    //     calculatetotal_baddebts(frm);
    //     calculateTotalYear(frm)
    // }
    
    
    
    
    
    
    
    //Debt_HistoryaddDataToChildTable in Debt History table
    //Local storage data displaying in child table
    // Add data to Dibt History child table
    // function Debt_HistoryaddDataToChildTable(frm, data) {
    //     var childTable = frm.fields_dict['debt_history_child_table'].grid;
    //     var newRow = childTable.add_new_row();
    
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'month', data.month);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'last_year_debt', data.last_year_debt);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'this_year_debt', data.this_year_debt);
    
    //     childTable.refresh();
    // }
    
    
    ///debtor_schedule_addDataToChildTable in debtorschedule table
    // function debtor_schedule_addDataToChildTable(frm, data) {
    //     var childTable = frm.fields_dict['alternate_information_table'].grid;
    //     var newRow = childTable.add_new_row();
    
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'debt_range_from', data.debt_range_from);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'debt_range_to', data.debt_range_to);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'number_of_debtors', data.number_of_debtors);
    
    //     childTable.refresh();
        
    //     calculatetotal_debtors(frm)
    // }
    
    // Function to clear table and grand_total field
    // function clearTableAndTotal(frm) {
    //     // Clear the table
    //     frm.clear_table('debtorsheduletable');
    //     // Clear the grand_total field
    //     frm.set_value('grand_total', '');
    // }
    
    //Principal_buyer_addDataToChildTable in debtorschedule table
    // function Principal_Buyer_addDataToChildTable(frm, data) {
    //     var childTable = frm.fields_dict['principal_buyer_child_table'].grid;
    //     var newRow = childTable.add_new_row();
    
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'buyer_name', data.buyer_name);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'address', data.address);
    //     frappe.model.set_value(newRow.doctype, newRow.name, 'amount_outstanding', data.amount_outstanding);
    
    //     childTable.refresh();
    // }
    
    //Auto generation of Proposal No for all users
    // function generateNumber(frm) {
    //     // Check if the proposal number field is already populated
    //     if (!frm.doc.proposal_no) {
    //         // Get the current year
    //         let currentYear = new Date().getFullYear();
    //         let prefix = `DCI/${currentYear}/`;
    
    //         // Make a call to get the last number asynchronously
    //         frappe.call({
    //             method: 'frappe.client.get_list',
    //             args: {
    //                 doctype: 'DCI Proposals',
    //                 fields: ['proposal_no', 'creation'],
    //                 order_by: 'creation desc',
    //                 limit: 1
    //             },
    //             callback: function(r) {
    //                 console.log(r,"proposal no");
    //                 if (r.message && r.message.length > 0) {
    //                     let lastProposalNo = r.message[0].proposal_no;
    //                     let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
    //                     if (!isNaN(lastNumber)) {
    //                         // Increment the last number and pad it with leading zeros
    //                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
    //                         frm.set_value('proposal_no', prefix + newNumber);
    //                     }
    //                 } else {
    //                     // If no previous numbers exist, set to default '0001'
    //                     frm.set_value('proposal_no', prefix + '0001');
    //                 }
    //             }
    //         });
    //     }
    // }
    
    
    // // Auto generation of Proposal No for individual users
    // function generateNumber(frm) {
    //     // Check if the proposal number field is already populated
    //     if (!frm.doc.proposal_no) {
    //         // Get the current year
    //         let currentYear = new Date().getFullYear();
    //         let prefix = `DCI/${currentYear}/`;
    
    //         // Get the current user
    //         let currentUser = frappe.session.user;
    //         let userPrefix = currentUser + "/";
    
    //         // Make a call to get the last number asynchronously for the specific user
    //         frappe.call({
    //             method: 'frappe.client.get_list',
    //             args: {
    //                 doctype: 'DCI Proposals',
    //                 fields: ['proposal_no', 'creation'],
    //                 filters: [['owner', '=', currentUser]],
    //                 order_by: 'creation desc',
    //                 limit: 1
    //             },
    //             callback: function(r) {
    //                 console.log(r, "proposal no");
    //                 if (r.message && r.message.length > 0) {
    //                     let lastProposalNo = r.message[0].proposal_no;
    //                     let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
    //                     if (!isNaN(lastNumber)) {
    //                         // Increment the last number and pad it with leading zeros
    //                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
    //                         frm.set_value('proposal_no', prefix + newNumber);
    //                     }
    //                 } else {
    //                     // If no previous numbers exist, set to default '0001'
    //                     frm.set_value('proposal_no', prefix + '0001');
    //                 }
    //             }
    //         });
    //     }
    // }
    
    
    // function calculatetotal_debtors(frm){
    //     var childTableData = frm.doc.alternate_information_table || [];
    
    //     // Calculate Total Turnover
    //     var totalDebtors = childTableData.reduce(function(number_of_debtors, row) {
    //         // Convert row.turnover to a number using parseFloat or parseInt
    //         var rowDebtors = parseFloat(row.number_of_debtors) || 0; // Convert to float; default to 0 if NaN
    
    //         return number_of_debtors + rowDebtors;
    //     }, 0);
    
    //     // Update Total Turnover field in the form
    //     frm.set_value('total_debtors', totalDebtors);
    // }
    
    
    
    
    // function calculatetotal_turnover(frm){
    //     var childTableData = frm.doc.buyer_experience_child_table || [];
    
    //     // Calculate Total Turnover
    //     var totalTurnover = childTableData.reduce(function(turnover, row) {
    //         // Convert row.turnover to a number using parseFloat or parseInt
    //         var rowTurnover = parseFloat(row.turnover) || 0; // Convert to float; default to 0 if NaN
    
    //         return turnover + rowTurnover;
    //     }, 0);
    
    //     // Update Total Turnover field in the form
    //     frm.set_value('total_turnover', totalTurnover);
    // }
    
    
    // function calculatetotal_baddebts(frm){
    //     var childTableData = frm.doc.buyer_experience_child_table || [];
    
    //     // Calculate Total Turnover
    //     var totalBadDebts = childTableData.reduce(function(relative_bad_debt_loss, row) {
    //         // Convert row.turnover to a number using parseFloat or parseInt
    //         var rowBadDebts = parseFloat(row.relative_bad_debt_loss) || 0; // Convert to float; default to 0 if NaN
    
    //         return relative_bad_debt_loss + rowBadDebts;
    //     }, 0);
    
    //     // Update Total Turnover field in the form
    //     frm.set_value('total_bad_debt', totalBadDebts);
    // }
    
    
    
    // function calculateTotalYear(frm) {
    //     var childTableData = frm.doc.buyer_experience_child_table || [];
    
    //     // Get the number of records (length of the array)
    //     var yearCount = childTableData.length;
    
    //     // Update 'year_count' field in the form with the count
    //     frm.set_value('year_count', yearCount);
    // }
    
         
        
    
    
    
    // List of field names to align right
    // let fieldsToAlignRight = ['for_the_period_of', 'estimated_loss', 'on_a_turnover','actual_loss','currentyear_turnover','govtsales','nextyear_turnover','govtsales2',
    // 'normal','maximum','total_debtors','account_on_which_amount_exceeds','estimated_of_the_total_monthly_book_debits'];
    
    // Function to apply the styles
    // function alignFieldsRight(frm, fields) {
    //     fields.forEach(field => {
    //         let fieldElement = frm.fields_dict[field];
    //         if (fieldElement && fieldElement.input) {
    //             fieldElement.input.style.direction = 'rtl';
    //             fieldElement.input.style.textAlign = 'right';
    //         }
    //     });
    // };
    
    
    // function fetchAndFilterPolicyNumbers(frm) {
    //   frappe.call({
    //     method: 'frappe.client.get',
    //     args: {
    //       doctype: 'DCI Proposals',
    //       filters: {
    //         workflow_state: 'Submitted', // Filter for submitted DCI Proposals
    //         proposal_no: frm.doc.proposal_no
    //       },
    //       fields: ['proposal_no', 'client_name']
    //     },
    //     callback: function(response) {
    //       console.log(response, "clientname dataaa");
    //       if (response && response.message) {
    //         if (!response.exe) {
    //           var proposals = response.message; // Assuming 'message' contains an array of proposals
    
    //           // Check if proposals are found
    //           if (proposals.length > 0) {
    //             // Check if fetched proposal has the same proposal_no
    //             if (proposals[0].proposal_no === frm.doc.proposal_no) {
    //               var client_name = proposals[0].client_name;
    //               console.log("Client Name:", client_name);
    //               frm.set_value('client_name', client_name);
    //             } else {
    //               console.warn("Proposal number mismatch. Client name not set.");
    //             }
    //           } else {
    //             console.warn("No proposals found for proposal_no:", frm.doc.proposal_no);
    //           }
    //         }
    //       } else {
    //         console.error('Error fetching approved policy numbers and client names from Policy Reviews.');
    //       }
    //     },
    //     error: function(xhr, textStatus, errorThrown) {
    //       console.error('Error:', errorThrown);
    //     }
    //   });
    // }
    
    
    
    
    
    
    
    
    