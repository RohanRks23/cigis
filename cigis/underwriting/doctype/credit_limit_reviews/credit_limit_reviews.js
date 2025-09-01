// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Credit Limit Reviews', {
//     refresh: function(frm) {

        
//         frm.set_df_property('review_history', 'cannot_add_rows', true);
//         if (!frm.doc.clreview_no) {
//             generateNumber(frm);
//         }
//          var workflowState = frm.doc.workflow_state;

//  if (workflowState === "Approved") {
//             frm.toggle_display('policy_number', false);
//             frm.toggle_display('policy_number1', true);}
//             else {
//             // If workflow state is not "Approved", reverse the display
//             frm.toggle_display('policy_number', true);
//             frm.toggle_display('policy_number1', false);
//         }


//         if (workflowState === "Approved") {
//             frm.add_custom_button(__('Print Annexure'), function() {
//                 frappe.new_doc('Credit Limit  Annexure');
//                     frappe.route_options = {
//                     inception_date: frm.doc.capture_date,
//                     policy_holder_name: frm.doc.ph_name,
//                     policy_no:frm.doc.policy_number,
//                     credit_limit_no: frm.doc.credit_limit_no,
//                     buyer_name:frm.doc.buyer,
//                     trading__style: frm.doc.trading_style,
//                   // reinsurer: frm.doc.reinsurer,
//                     location: frm.doc.location,
//                   credit_limit: frm.doc.current_limit,
//                     terms_of_payments: frm.doc.terms_of_payments,
//                     conditions: frm.doc.conditions,
//                     buyer_id: frm.doc.buyer_id,
//                     days_from:frm.doc.days_from
//                 };
//                 console.log("Print Annexur clicked!");
//             }).addClass("btn-primary");
//         }
        
//         if (frm.doc.yes) {
        
//         if (workflowState === "Pending" || workflowState === "Approved") {
//             frm.add_custom_button(__('View CB Report'), function() {
                
//         frappe.call({
//         method: "frappe.client.get",
//         args: {
//             doctype: "CB Report",
//             filters: {
//                 buyer: frm.doc.buyer,
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
//                         {'fieldname': 'column_break_1','fieldtype': 'Column Break','label': ''},
//                         {'fieldname': 'buyer', 'fieldtype': 'Data', 'label': 'Buyer', 'default': cbReportData.buyer},
                        
                       
                        
//                         {'fieldname': 'refnumber', 'fieldtype': 'Data', 'label': 'Ref.Number','default': cbReportData.refnumber},
                        
//                         {'fieldname': 'section_break_3','fieldtype': 'Section Break','label': ''},
//                         {'fieldname': 'section_break_4','fieldtype': 'Section Break','label': ''},
//                         {'fieldname': 'credit_bureau_responce', 'fieldtype': 'Heading', 'label': 'Credit Bureau Response'},
//                         {'fieldname': 'section_break_5','fieldtype': 'Section Break','label': ''},
                        
//                         {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date', 'default': cbReportData.date},
//                         {'fieldname': 'catagory', 'fieldtype': 'Data', 'label': 'Category', 'default': cbReportData.catagory},
//                         {'fieldname': 'code', 'fieldtype': 'Data', 'label': 'Code',  'default': cbReportData.code},
                        
//                          {'fieldname': 'column_break_2','fieldtype': 'Column Break','label': ''},
                        
//                         {'fieldname': 'details', 'fieldtype': 'Data', 'label': 'Details',  'default': cbReportData.details},
//                         {'fieldname': 'description', 'fieldtype': 'Small Text', 'label': 'Description', 'default': cbReportData.description},
//                     ], function(values){
//                         // Handle user input if needed
//                     }, 'CB Report');
//                 } else {
//                     frappe.msgprint("No CB Report data found for the selected buyer.");
//                 }
//             } else {
//                 console.error("Error occurred while fetching CB Report data:", r.exc);
//                 frappe.msgprint("Error occurred while fetching CB Report data. Please try again.");
//             }
//         }
//     });
                
                
                
//             }).addClass("btn-primary");
//         }
//          }
         
//         if(frm.doc.yes){
//           if (workflowState === "Pending" || workflowState === "Approved") {
//             frm.toggle_display('cbreport', true);
//             frm.toggle_display('report', false);
//             frm.toggle_display('cb_request', false);
//             // frm.toggle_display('table', false);

//         }
        
        
//         }
//         frm.fields_dict.director_share_holder_exposure.$input.addClass('btn-primary');

//         //  frm.fields_dict.cb_request.$input.addClass('btn-primary');
//         frm.fields_dict.go_to_financial_analysis.$input.addClass('btn-primary');
        
        
        
//         alignFields(frm);
        

        

        
         
//     },
//    cb_request: function(frm) {
//     frappe.call({
//     method: 'frappe.client.get_list',
//     args: {
//         doctype: 'CB Request',
//         filters: {
//             buyer: frm.doc.buyer,
//             policy_type: frm.doc.policy_type
//         },
//         fields: ['toaddress', 'attention', 'from', 'attention1', 'subject']
//     },
//     callback: function (response) {
//         console.log("Bond Facility response:", response);
        
//         if (response.message && response.message.length > 0) {
//             // If records found, display a message
//             frappe.msgprint("CB Request already exists for this Buyer.");
//         } else {
//             // If no records found, open a new CB Request document
//             frappe.new_doc('CB Request');
//             frappe.route_options = {
//                 buyer: frm.doc.buyer,
//                 refnumber: frm.doc.credit_limit_no,
//                 policy_type: frm.doc.policy_type
//             };
//         }
//     },
//     error: function (err) {
//         console.error(err);
//         frappe.msgprint('An error occurred while fetching data from CB Request. Please check the console for details.');
//     }
// });

// },

    
   

//     go_to_financial_analysis: function(frm) {
//         frappe.new_doc('Financial Analysis');
//         frappe.route_options = {
//             buyer: frm.doc.buyer
//         };
//     },

//     director_share_holder_exposure: function(frm) {
//         openDirectorShareholderExposure(frm);
//     },

//     onload: function(frm) {
      

            
//     //  frappe.call({
//     //   method: 'frappe.client.get_list',
//     //   args: {
//     //     'doctype': 'Credit Limit Processing',
//     //     'filters': {
//     //       'workflow_state': 'Approved'
//     //     },
//     //     'fields': ['policy_holder_name'],
//     //      limit_page_length: 100  // Adjust this value as needed

//     //   },
//     //   callback: function(submittedProposalsResponse) {
//     //     if (submittedProposalsResponse.message) {
//     //       var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
//     //         return proposal.policy_holder_name;
//     //       });
//     //       console.log("** Submitted Proposals:", submittedProposals);
 
//     //       console.log("** Fetching Approved Quotations **");
//     //       frm.set_df_property('ph_name', 'options', submittedProposals);
//     //     }
//     //   }
//     // }); // Close outer frappe.call
  
  
//   frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Limit Processing',
//             'filters': {
//           'workflow_state': 'Approved'
//         },
//             fields: ['policy_holder_name'],
//             limit_page_length: 100  // Adjust this value as needed

//         },
//         callback: function(response) {
//             console.log("policy_holder_name received:", response);
//             let DataArray = response.message;
//             let uniquepolicy_holder_names = new Set();
 
//             // Collect unique policy_holder_name values
//             for (let x of DataArray) {
//                 uniquepolicy_holder_names.add(x.policy_holder_name);
//             }
 
//             // Convert set to array
//             let FinalArray = Array.from(uniquepolicy_holder_names);
 
//             frm.set_df_property('ph_name', 'options', FinalArray);
//             console.log("final", FinalArray);
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error("Error fetching policy_holder_name:", textStatus, errorThrown);
//         }
//     });  
    
    
// frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Buyer',
//                 fields: ['buyer_name'],
//                 limit_page_length: 100  // Add this line to retrieve up to 100 records
//             },
//             callback: function(response) {
//                 let DataArray = response.message;
//                 let FinalArray = [];
//                 for (let x of DataArray) {
//                     FinalArray.push(x.buyer_name);
//                 }
//                 frm.set_df_property('buyer', 'options', FinalArray);
//                 console.log("final", FinalArray);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching approved bonds:", textStatus, errorThrown);
//             }
//         });
    
    
//     //   frappe.call({
//     //         method: 'frappe.client.get_list',
//     //         args: {
//     //             doctype: 'Credit Limit Reviews', // Replace with the actual doctype name
//     //             filters: {
//     //                 // Define your filters here
//     //                 ph_name: frm.doc.ph_name,
//     //                 buyer: frm.doc.buyer,
//     //                 // Add more filters if needed
//     //             },
//     //             fields: ['clreview_no', 'date', 'cl_review_date', 'current_limit', 'reasons']
//     //         },
//     //         callback: function(response) {
//     //             if (response.message && response.message.length > 0) {
//     //                 response.message.forEach(function(row) {
//     //                     // Add row to review_history child table
//     //                     let new_row = frm.add_child('review_history');
//     //                     new_row.cl_review_no = row.clreview_no;
//     //                     new_row.review_date = row.date;
//     //                     new_row.expiry_date = row.cl_review_date;
//     //                     new_row.credit_limit = row.current_limit;
//     //                     new_row.reason = row.reasons;
//     //                 });
//     //                 frm.refresh_field('review_history');
//     //             }
            
//     //     }
    
//     // });
    
    

    

// },


// buyer: function(frm){
// frappe.call({
//     method: 'frappe.client.get_list',
//     args: {
//         doctype: 'Buyer',
//         filters: {
//             buyer_name: frm.doc.buyer
//         },
//         fields: ['estddate', 'no_of_employees']
//     },
//     callback: function(response) {
//         // Check if response is valid
//                 if (response.message && response.message.length > 0) {

//                 var buyerdata = response.message[0];


//                 // Example: Set values to fields in the form
//                 frm.set_value('estd_date', buyerdata.estddate || '');
//                 frm.set_value('no_of_employees', buyerdata.no_of_employees || '');
   
//                 }
//                 else{
//                     frm.set_value('estd_date', '');
//                     frm.set_value('no_of_employees', '');
//                 }
//                 }
// });



//                          fetchAndPopulateReviewHistory(frm);
                         
                         
                         




// },

// ph_name: function(frm) {

//          if (frm.doc.ph_name) {

//             frappe.call({

//                 method: 'frappe.client.get_list',

//                 args: {

//                     doctype: 'Credit Limit Processing', // replace 'Policy Doctype' with the actual doctype name where policies are stored

//                     filters: {

//                         'policy_holder_name': frm.doc.ph_name

//                     },

//                 fields:['policy_number']  

//                 },

//                 callback: function(response) {
//                     console.log("Response:", response); // Check response from server

//                     if (response.message && response.message.length > 0) {
//                         var policyNumbers = response.message.map(item => item.policy_number);
//                         console.log("Policy Numbers:", policyNumbers); // Check policy numbers fetched

//                         // Update dropdown field options
//                         frm.set_df_property('policy_number', 'options', policyNumbers.join('\n'));
//                         frm.refresh_field('policy_number'); // Refresh dropdown field
//                     } else {
//                         // Clear dropdown field options if no data found
//                         frm.set_df_property('policy_number', 'options', '');
//                         frm.refresh_field('policy_number'); // Refresh dropdown field
//                     }
//                 },

//             });

//         }
// },
 



// // ph_name: function(frm) {
// //         var phName = frm.doc.ph_name;

// //         // Fetch data from Credit Limit Processing based on policy_holder_name
// //         frappe.call({
// //             method: 'frappe.client.get_list',
// //             args: {
// //                 doctype: 'Credit Limit Processing',
// //                 filters: {
// //                     policy_holder_name: phName
// //                 },
// //                 fields: ['days_from','policy_number','credit_limit_no', 'use_of_the_credit_limit', 'capture_date', 'policy_holder_name', 'trading__style', 'credit_limit', 'business_organisation', 'type_of_business', 'customers', 'location', 'present_mgt_in_control_since', 'management_experience', 'bank_risk_category', 'itc_clearence', 'main_productservice', 'total_exposure', 'level_of_competition', 'management_consists_of', 'credit_bureau_opinion', 'financials', 'trading_experience', 'overdue_amount', 'balance_sheet_analysis', 'annual_sales_for_the_last_23_years', 'terms_of_payments', 'outstanding_amount', 'repayment_ability', 'comments', 'policy_type']
// //             },
// //             callback: function(response) {
// //                 console.log("Credit Limit Processing response:", response);

// //                 if (response.message && response.message.length > 0) {
// //                     var data = response.message[0];

// //                     // Populate fields if data is found
// //                     frm.set_value('policy_number', data.policy_number || '');
// //                     frm.set_value('credit_limit_no', data.credit_limit_no || '');
// //                     frm.set_value('use_of_the_credit_limit', data.use_of_the_credit_limit || '');
// //                     frm.set_value('inception_date', data.capture_date || '');
// //                     frm.set_value('ph_name', data.policy_holder_name || '');
// //                     frm.set_value('trading_style', data.trading__style || '');
// //                     frm.set_value('current_limit', data.credit_limit || '');
// //                     frm.set_value('business_organisation', data.business_organisation || '');
// //                     frm.set_value('type__of_business', data.type_of_business || '');
// //                     frm.set_value('customers', data.customers || '');
// //                     frm.set_value('location', data.location || '');
// //                     frm.set_value('present_mgt_in_control_since', data.present_mgt_in_control_since || '');
// //                     frm.set_value('management_experience', data.management_experience || '');
// //                     frm.set_value('bank_risk_category', data.bank_risk_category || '');
// //                     frm.set_value('itc_clearence', data.itc_clearence || '');
// //                     frm.set_value('main_product_service', data.main_productservice || '');
// //                     frm.set_value('total_exposure', data.total_exposure || '');
// //                     frm.set_value('level_of_competition', data.level_of_competition || '');
// //                     frm.set_value('management_consists_of', data.management_consists_of || '');
// //                     frm.set_value('credit_bureau_opinion', data.credit_bureau_opinion || '');
// //                     frm.set_value('financials', data.financials || '');
// //                     frm.set_value('trading_experience', data.trading_experience || '');
// //                     frm.set_value('overdue_amount', data.overdue_amount || '');
// //                     frm.set_value('balance_sheet_analysis', data.balance_sheet_analysis || '');
// //                     frm.set_value('annual_sales_for_the_last_23years', data.annual_sales_for_the_last_23_years || '');
// //                     frm.set_value('terms_of_payments', data.terms_of_payments || '');
// //                     frm.set_value('outstanding_amount', data.outstanding_amount || '');
// //                     frm.set_value('repayment_ability', data.repayment_ability || '');
// //                     frm.set_value('comments1', data.comments || '');
// //                     frm.set_value('policy_type', data.policy_type || '');
// //                     frm.set_value('days_from', data.days_from || '');
// //                 } else {
// //                     // Clear fields if no matching record found
// //                     frm.set_value('policy_number', '');
// //                     frm.set_value('days_from', '');
// //                     frm.set_value('credit_limit_no', '');
// //                     frm.set_value('use_of_the_credit_limit', '');
// //                     frm.set_value('inception_date', '');
// //                     frm.set_value('ph_name', '');
// //                     frm.set_value('trading__style', '');
// //                     frm.set_value('current_limit', '');
// //                     frm.set_value('business_organisation', '');
// //                     frm.set_value('type_of_business', '');
// //                     frm.set_value('customers', '');
// //                     frm.set_value('location', '');
// //                     frm.set_value('present_mgt_in_control_since', '');
// //                     frm.set_value('management_experience', '');
// //                     frm.set_value('bank_risk_category', '');
// //                     frm.set_value('itc_clearence', '');
// //                     frm.set_value('main_productservice', '');
// //                     frm.set_value('total_exposure', '');
// //                     frm.set_value('level_of_competition', '');
// //                     frm.set_value('management_consists_of', '');
// //                     frm.set_value('credit_burea_report', '');
// //                     frm.set_value('financials', '');
// //                     frm.set_value('trading_experience', '');
// //                     frm.set_value('overdue_amount', '');
// //                     frm.set_value('balance_sheet_analysis', '');
// //                     frm.set_value('annual_sales_for_the_last_23years', '');
// //                     frm.set_value('terms_of_payments', '');
// //                     frm.set_value('outstanding_amount', '');
// //                     frm.set_value('repayment_ability', '');
// //                     frm.set_value('comments1', '');
// //                     frm.set_value('policy_type', '');
// //                     frappe.msgprint('No matching record found in Credit Limit Processing.');
// //                 }

// //                 // Fetch and populate review_history child table
// //                 fetchReviewHistory(frm, phName);
// //             },
            
// //         });
        
        
       


// //     },
    
    
    
    
    
//     // policy_number: function(frm) {
//     //     var PolicyNumber = frm.doc.policy_number;
//     //     frm.set_value('policy_number1', PolicyNumber);


//     //     // Fetch data from Credit Limit Processing based on policy_holder_name
//     //     frappe.call({
//     //         method: 'frappe.client.get_list',
//     //         args: {
//     //             doctype: 'Credit Limit Processing',
//     //             filters: {
//     //                 policy_number: PolicyNumber
//     //             },
//     //             fields: ['days_from','credit_limit_no', 'use_of_the_credit_limit', 'capture_date', 'trading__style', 'credit_limit', 'business_organisation', 'type_of_business', 'customers', 'location', 'present_mgt_in_control_since', 'management_experience', 'bank_risk_category', 'itc_clearence', 'main_productservice', 'total_exposure', 'level_of_competition', 'management_consists_of', 'credit_bureau_opinion', 'financials', 'trading_experience', 'overdue_amount', 'balance_sheet_analysis', 'annual_sales_for_the_last_23_years', 'terms_of_payments', 'outstanding_amount', 'repayment_ability', 'comments', 'policy_type']
//     //         },
//     //         callback: function(response) {
//     //             console.log("Credit Limit Processing response:", response);

//     //             if (response.message && response.message.length > 0) {
//     //                 var data = response.message[0];

//     //                 // Populate fields if data is found
//     //                 // frm.set_value('policy_number', data.policy_number || '');
//     //                 frm.set_value('credit_limit_no', data.credit_limit_no || '');
//     //                 frm.set_value('use_of_the_credit_limit', data.use_of_the_credit_limit || '');
//     //                 frm.set_value('inception_date', data.capture_date || '');
//     //                 // frm.set_value('ph_name', data.policy_holder_name || '');
//     //                 frm.set_value('trading_style', data.trading__style || '');
//     //                 frm.set_value('current_limit', data.credit_limit || '');
//     //                 frm.set_value('business_organisation', data.business_organisation || '');
//     //                 frm.set_value('type__of_business', data.type_of_business || '');
//     //                 frm.set_value('customers', data.customers || '');
//     //                 frm.set_value('location', data.location || '');
//     //                 frm.set_value('present_mgt_in_control_since', data.present_mgt_in_control_since || '');
//     //                 frm.set_value('management_experience', data.management_experience || '');
//     //                 frm.set_value('bank_risk_category', data.bank_risk_category || '');
//     //                 frm.set_value('itc_clearence', data.itc_clearence || '');
//     //                 frm.set_value('main_product_service', data.main_productservice || '');
//     //                 frm.set_value('total_exposure', data.total_exposure || '');
//     //                 frm.set_value('level_of_competition', data.level_of_competition || '');
//     //                 frm.set_value('management_consists_of', data.management_consists_of || '');
//     //                 frm.set_value('credit_bureau_opinion', data.credit_bureau_opinion || '');
//     //                 frm.set_value('financials', data.financials || '');
//     //                 frm.set_value('trading_experience', data.trading_experience || '');
//     //                 frm.set_value('overdue_amount', data.overdue_amount || '');
//     //                 frm.set_value('balance_sheet_analysis', data.balance_sheet_analysis || '');
//     //                 frm.set_value('annual_sales_for_the_last_23years', data.annual_sales_for_the_last_23_years || '');
//     //                 frm.set_value('terms_of_payments', data.terms_of_payments || '');
//     //                 frm.set_value('outstanding_amount', data.outstanding_amount || '');
//     //                 frm.set_value('repayment_ability', data.repayment_ability || '');
//     //                 frm.set_value('comments1', data.comments || '');
//     //                 frm.set_value('policy_type', data.policy_type || '');
//     //                 frm.set_value('days_from', data.days_from || '');
//     //             } else {
//     //                 // Clear fields if no matching record found
//     //                 // frm.set_value('policy_number', '');
//     //                 frm.set_value('days_from', '');
//     //                 frm.set_value('credit_limit_no', '');
//     //                 frm.set_value('use_of_the_credit_limit', '');
//     //                 frm.set_value('inception_date', '');
//     //                 // frm.set_value('ph_name', '');
//     //                 frm.set_value('trading_style', '');
//     //                 frm.set_value('current_limit', '');
//     //                 frm.set_value('business_organisation', '');
//     //                 frm.set_value('type__of_business', '');
//     //                 frm.set_value('customers', '');
//     //                 frm.set_value('location', '');
//     //                 frm.set_value('present_mgt_in_control_since', '');
//     //                 frm.set_value('management_experience', '');
//     //                 frm.set_value('bank_risk_category', '');
//     //                 frm.set_value('itc_clearence', '');
//     //                 frm.set_value('main_product_service', '');
//     //                 frm.set_value('total_exposure', '');
//     //                 frm.set_value('level_of_competition', '');
//     //                 frm.set_value('management_consists_of', '');
//     //                 frm.set_value('credit_burea_report', '');
//     //                 frm.set_value('financials', '');
//     //                 frm.set_value('trading_experience', '');
//     //                 frm.set_value('overdue_amount', '');
//     //                 frm.set_value('balance_sheet_analysis', '');
//     //                 frm.set_value('annual_sales_for_the_last_23years', '');
//     //                 frm.set_value('terms_of_payments', '');
//     //                 frm.set_value('outstanding_amount', '');
//     //                 frm.set_value('repayment_ability', '');
//     //                 frm.set_value('comments1', '');
//     //                 frm.set_value('policy_type', '');
//     //             }

//     //             // Fetch and populate review_history child table
//     //             fetchReviewHistory(frm, phName);
//     //         },
            
//     //     });
        
        
       


//     // },///main



// policy_number: function(frm) {
//     var PolicyNumber = frm.doc.policy_number;
//     frm.set_value('policy_number1', PolicyNumber);

//     // Fetch data from Credit Limit Processing based on policy_number
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Limit Processing',
//             filters: {
//                 policy_number: PolicyNumber
//             },
//             fields: ['buyer_id','days_from', 'credit_limit_no', 'use_of_the_credit_limit', 'capture_date', 'trading__style', 'credit_limit', 'business_organisation', 'type_of_business', 'customers', 'location', 'present_mgt_in_control_since', 'management_experience', 'bank_risk_category', 'itc_clearence', 'main_productservice', 'total_exposure', 'level_of_competition', 'management_consists_of', 'credit_bureau_opinion', 'financials', 'trading_experience', 'overdue_amount', 'balance_sheet_analysis', 'annual_sales_for_the_last_23_years', 'terms_of_payments', 'outstanding_amount', 'repayment_ability', 'comments', 'policy_type']
//         },
//         callback: function(response) {
//             console.log("Credit Limit Processing response:", response);

//             if (response.message && response.message.length > 0) {
//                 var data = response.message[0];

//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Credit Limit Reviews',
//                         filters: {
//                             policy_number: PolicyNumber,
//                             workflow_state: 'Approved'
//                         },
//                         fields: ['policy_number']
//                     },
//                     callback: function(approvedResponse) {
//                         if (approvedResponse.message && approvedResponse.message.length > 0) {
//                             frappe.msgprint('This policy number is already approved.');
//                         } else {
//                             // Populate fields if data is found
//                             frm.set_value('credit_limit_no', data.credit_limit_no || '');
//                             frm.set_value('buyer_id', data.buyer_id || '');

//                             frm.set_value('use_of_the_credit_limit', data.use_of_the_credit_limit || '');
//                             frm.set_value('inception_date', data.capture_date || '');
//                             frm.set_value('trading_style', data.trading__style || '');
//                             frm.set_value('current_limit', data.credit_limit || '');
//                             frm.set_value('business_organisation', data.business_organisation || '');
//                             frm.set_value('type__of_business', data.type_of_business || '');
//                             frm.set_value('customers', data.customers || '');
//                             frm.set_value('location', data.location || '');
//                             frm.set_value('present_mgt_in_control_since', data.present_mgt_in_control_since || '');
//                             frm.set_value('management_experience', data.management_experience || '');
//                             frm.set_value('bank_risk_category', data.bank_risk_category || '');
//                             frm.set_value('itc_clearence', data.itc_clearence || '');
//                             frm.set_value('main_product_service', data.main_productservice || '');
//                             frm.set_value('total_exposure', data.total_exposure || '');
//                             frm.set_value('level_of_competition', data.level_of_competition || '');
//                             frm.set_value('management_consists_of', data.management_consists_of || '');
//                             frm.set_value('credit_bureau_opinion', data.credit_bureau_opinion || '');
//                             frm.set_value('financials', data.financials || '');
//                             frm.set_value('trading_experience', data.trading_experience || '');
//                             frm.set_value('overdue_amount', data.overdue_amount || '');
//                             frm.set_value('balance_sheet_analysis', data.balance_sheet_analysis || '');
//                             frm.set_value('annual_sales_for_the_last_23years', data.annual_sales_for_the_last_23_years || '');
//                             frm.set_value('terms_of_payments', data.terms_of_payments || '');
//                             frm.set_value('outstanding_amount', data.outstanding_amount || '');
//                             frm.set_value('repayment_ability', data.repayment_ability || '');
//                             frm.set_value('comments1', data.comments || '');
//                             frm.set_value('policy_type', data.policy_type || '');
//                             frm.set_value('days_from', data.days_from || '');
//                         }
//                     },
//                     error: function(err) {
//                         console.error("Error fetching approved policy numbers:", err);
//                         frappe.msgprint('An error occurred while checking approved policy numbers. Please check the console for details.');
//                     }
//                 });

//                 // Fetch and populate review_history child table
//                 fetchReviewHistory(frm, PolicyNumber);

//             } else {
//                 // Clear fields if no matching record found
//                 frm.set_value('buyer_id', '');
//                 frm.set_value('days_from', '');
//                 frm.set_value('credit_limit_no', '');
//                 frm.set_value('use_of_the_credit_limit', '');
//                 frm.set_value('inception_date', '');
//                 frm.set_value('trading_style', '');
//                 frm.set_value('current_limit', '');
//                 frm.set_value('business_organisation', '');
//                 frm.set_value('type__of_business', '');
//                 frm.set_value('customers', '');
//                 frm.set_value('location', '');
//                 frm.set_value('present_mgt_in_control_since', '');
//                 frm.set_value('management_experience', '');
//                 frm.set_value('bank_risk_category', '');
//                 frm.set_value('itc_clearence', '');
//                 frm.set_value('main_product_service', '');
//                 frm.set_value('total_exposure', '');
//                 frm.set_value('level_of_competition', '');
//                 frm.set_value('management_consists_of', '');
//                 frm.set_value('credit_bureau_opinion', '');
//                 frm.set_value('financials', '');
//                 frm.set_value('trading_experience', '');
//                 frm.set_value('overdue_amount', '');
//                 frm.set_value('balance_sheet_analysis', '');
//                 frm.set_value('annual_sales_for_the_last_23years', '');
//                 frm.set_value('terms_of_payments', '');
//                 frm.set_value('outstanding_amount', '');
//                 frm.set_value('repayment_ability', '');
//                 frm.set_value('comments1', '');
//                 frm.set_value('policy_type', '');
//             }
//         },
//         error: function(err) {
//             console.error("Error fetching Credit Limit Processing data:", err);
//             frappe.msgprint('An error occurred while fetching Credit Limit Processing data. Please check the console for details.');
//         }
//     });
// },





//     inception_date: function(frm){
        
//        frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Policy Approvals',
//                 filters: {
//                     policy_holder: frm.doc.ph_name
//                 },
//                 fields: ['inception_date']
//             },
//             callback: function(response) {
//                 console.log('capture');
//                 if (response.message && response.message.length > 0) {
//                     var policyApproval = response.message[0];
//                     var inceptionDate = policyApproval.inception_date;

//                     console.log("Inception Date:", inceptionDate);

//                     var expiryDate = new Date(inceptionDate);
//                     expiryDate.setFullYear(expiryDate.getFullYear() + 1);

//                     frm.set_value('policy_expiry_date', frappe.datetime.str_to_user(expiryDate));
//                     console.log("Policy Expiry Date:", frm.doc.policy_expiry_date);
//                 } 
//             }
//         }); 
//     },
    
    
    
    

    
    
  
//    });



// function generateNumber(frm) {
//     if (!frm.doc.clreview_no) {
//         var currentYear = new Date().getFullYear();
//         var prefix = `CLRV/${currentYear}/`;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Credit Limit Reviews',
//                 fields: ['clreview_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     var lastClreviewNo = r.message[0].clreview_no;
//                     var lastNumber = parseInt(lastClreviewNo.split("/").pop());
//                     if (!isNaN(lastNumber)) {
//                         var newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('clreview_no', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('clreview_no', prefix + '0001');
//                 }
//             },
//             error: function(err) {
//                 console.error('Error fetching credit limit reviews:', err);
//             }
//         });
//     }
// }

// function openDirectorShareholderExposure(frm) {
//     frappe.new_doc('Director and Shareholder Exposure');
//     frappe.route_options = {
//         buyer_name: frm.doc.buyer
//     };
//         frappe.ui.form.on('Director and Shareholder Exposure', {
//         onload: function(frm) {
//             // Hide the specific fields and search button
//             frm.toggle_display('director_shareholder', false);
//             frm.toggle_display('search',false);
//             // Replace 'director_shareholder_field' with the actual field name you want to hide
//             frm.page.btn_primary.hide(); // Hides the primary button, typically the save button
 
           
//             $('.search-btn-class').hide();
//         }
//     });

// }

// function fetchAndPopulateReviewHistory(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Limit Reviews',
//             filters: {
//                 ph_name: frm.doc.ph_name,
//                 buyer: frm.doc.buyer
//             },
//             fields: ['clreview_no', 'date', 'cl_review_date', 'current_limit', 'reasons']
//         },
//         callback: function(response) {
//             if (response.message) {
//                 console.log('Fetched records:', response.message); // Log fetched records for debugging

//                 // Clear existing child table rows
//                 frm.clear_table('review_history');

//                 // Iterate through fetched records and add to child table
//                 response.message.forEach(function(row) {
//                     let new_row = frm.add_child('review_history');
//                     new_row.cl_review_no = row.clreview_no;
//                     new_row.review_date = row.date;
//                     new_row.expiry_date = row.cl_review_date;
//                     new_row.credit_limit = row.current_limit;
//                     new_row.reason = row.reasons;
//                 });

//                 // Refresh the child table field
//                 frm.refresh_field('review_history');
//             } else {
//                 console.log('No records found or error fetching data.'); // Log error message if no records found
//             }
//         },
//         error: function(err) {
//             console.log('Error fetching data:', err.responseText); // Log error response if fetch fails
//         }
//     });
// }





// function alignFields(frm) {
//     const rightAlignedFields = [
//         'total_exposure',
//         'outstanding_amount',
//         'overdue_amount',
//         'no_of_employees',
//         'current_limit',
//         'required_limit',
//         'approved_limit',
//         'recomended_exposure'
//     ];
//     const centerAlignedFields = [
//         'terms_of_payments'
//     ];
    
//     rightAlignedFields.forEach(field => {
//         frm.fields_dict[field].$input.css("text-align", "right");
//     });

//     centerAlignedFields.forEach(field => {
//         frm.fields_dict[field].$input.css("text-align", "center");
//     });
// }
