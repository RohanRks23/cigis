// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Policy Reviews', {
//     refresh: function(frm) {
//         if (!frm.doc.pr_number) {
//             generateProposalNumber(frm);
//         }

//         if (frm.doc.__islocal) {
//             fetchAndFilterPolicyNumbers(frm);
//         }
       
//             {         
//               frm.set_df_property('child_table', 'cannot_add_rows', true); 
//             } 
      

//         frm.fields_dict.add.$input.addClass('btn-primary');
//         frm.fields_dict.get_info.$input.addClass('btn-primary');
        
        
//         		frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Country Details',
//                 fields: ['country'],
//                 limit_page_length: 100  // Add this line to retrieve up to 100 records
//             },
//             callback: function(response) {
//                 let DataArray = response.message;
//                 let FinalArray = [];
//                 for (let x of DataArray) {
//                     FinalArray.push(x.country);
//                 }
//                 frm.set_df_property('country', 'options', FinalArray);
//                 console.log("final", FinalArray);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching approved bonds:", textStatus, errorThrown);
//             }
//         });
        
        
        
// frm.fields_dict.expected_insured_turnover1.$input.css("text-align", "right");
// frm.fields_dict.actual_insured_turnover1.$input.css("text-align", "right");
// frm.fields_dict.excess_shortfall1.$input.css("text-align", "right");
// frm.fields_dict.claims_as_of_actual_premium1.$input.css("text-align", "right");
// frm.fields_dict.total_cl_fee1.$input.css("text-align", "right");


// frm.fields_dict.maximum_liability.$input.css("text-align", "right");
// frm.fields_dict.commercial_liability.$input.css("text-align", "right");
// frm.fields_dict.premium_rate.$input.css("text-align", "right");
// frm.fields_dict.political_liability.$input.css("text-align", "right");
// frm.fields_dict.cl_enquiry_fee.$input.css("text-align", "right");
// frm.fields_dict.cl_per_month.$input.css("text-align", "right");
// frm.fields_dict.no_of_cls.$input.css("text-align", "right");
// frm.fields_dict.no_of_enquiry.$input.css("text-align", "right");
// frm.fields_dict.insured.$input.css("text-align", "right");
// frm.fields_dict.maximum_liability1.$input.css("text-align", "right");
// frm.fields_dict.commercial_liability1.$input.css("text-align", "right");
// frm.fields_dict.premium_rate1.$input.css("text-align", "right");
// frm.fields_dict.political_liability1.$input.css("text-align", "right");
// frm.fields_dict.cl_enquiry_fee1.$input.css("text-align", "right");
// frm.fields_dict.cl_per_month1.$input.css("text-align", "right");
// frm.fields_dict.no_of_cls1.$input.css("text-align", "right");
// frm.fields_dict.no_of_enquiry1.$input.css("text-align", "right");
// frm.fields_dict.insured1.$input.css("text-align", "right");
// frm.fields_dict.maximum_liability2.$input.css("text-align", "right");
// frm.fields_dict.commercial_liability2.$input.css("text-align", "right");
// frm.fields_dict.premium_rate2.$input.css("text-align", "right");
// frm.fields_dict.political_liability2.$input.css("text-align", "right");
// frm.fields_dict.cl_enquiry_fee2.$input.css("text-align", "right");
// frm.fields_dict.cl_per_month2.$input.css("text-align", "right");
// frm.fields_dict.no_of_cls2.$input.css("text-align", "right");
// frm.fields_dict.no_of_enquiry2.$input.css("text-align", "right");
// frm.fields_dict.insured2.$input.css("text-align", "right");
// frm.fields_dict.expected_insured_turnover.$input.css("text-align", "right");
// frm.fields_dict.actual_insured_turnover.$input.css("text-align", "right");
// frm.fields_dict.excess_shortfall.$input.css("text-align", "right");
// frm.fields_dict.claims_as_of_actual_premium.$input.css("text-align", "right");
// frm.fields_dict.total_cl_fee.$input.css("text-align", "right");
// frm.fields_dict.expected_premium.$input.css("text-align", "right");
// frm.fields_dict.actual_premium_charged.$input.css("text-align", "right");
// frm.fields_dict.claims_provision.$input.css("text-align", "right");
// frm.fields_dict.actual_claims.$input.css("text-align", "right");
// frm.fields_dict.total_cl_enq_fee.$input.css("text-align", "right");
// frm.fields_dict.expected_insured_turnover2.$input.css("text-align", "right");
// frm.fields_dict.actual_insured_turnover2.$input.css("text-align", "right");
// frm.fields_dict.excess_shortfall2.$input.css("text-align", "right");
// frm.fields_dict.claims_as_of_actual_premium2.$input.css("text-align", "right");
// frm.fields_dict.total_cl_fee2.$input.css("text-align", "right");
// frm.fields_dict.expected_premium2.$input.css("text-align", "right");
// frm.fields_dict.actual_premium_charged2.$input.css("text-align", "right");
// frm.fields_dict.claims_provision2.$input.css("text-align", "right");
// frm.fields_dict.actual_claims2.$input.css("text-align", "right");
// frm.fields_dict.total_cl_enq_fee2.$input.css("text-align", "right");
// frm.fields_dict.total_receipts.$input.css("text-align", "right");
// frm.fields_dict.total_amount_of_claims.$input.css("text-align", "right");
// frm.fields_dict.cost_of_credit_information.$input.css("text-align", "right");
// frm.fields_dict.actual_profit_loss_on_policy.$input.css("text-align", "right");
// frm.fields_dict.total_receipts1.$input.css("text-align", "right");
// frm.fields_dict.total_amount_claims1.$input.css("text-align", "right");
// frm.fields_dict.cost_of_credit_information1.$input.css("text-align", "right");
// frm.fields_dict.actual_profit_loss_on_policy1.$input.css("text-align", "right");
// frm.fields_dict.total_receipts2.$input.css("text-align", "right");
// frm.fields_dict.total_amount_claims2.$input.css("text-align", "right");
// frm.fields_dict.cost_of_credit_information2.$input.css("text-align", "right");
// frm.fields_dict.actual_profit_loss_on_policy2.$input.css("text-align", "right");
// frm.fields_dict.to_estimate_for_next_12_months.$input.css("text-align", "right");
// frm.fields_dict.maximum_liabilityrev.$input.css("text-align", "right");
// frm.fields_dict.commercial_liabilityrev.$input.css("text-align", "right");
// frm.fields_dict.premium_raterev.$input.css("text-align", "right");
// frm.fields_dict.political_liabilityrev.$input.css("text-align", "right");
// frm.fields_dict.limit_of_discretion.$input.css("text-align", "right");
// frm.fields_dict.first_limit_loss.$input.css("text-align", "right");
// frm.fields_dict.cl_enquiry_fee3.$input.css("text-align", "right");
// frm.fields_dict.cl_per_month3.$input.css("text-align", "right");
// frm.fields_dict.insured3.$input.css("text-align", "right");
// frm.fields_dict.franchise_loss.$input.css("text-align", "right");
// frm.fields_dict.commercial_pre_rate.$input.css("text-align", "right");
// frm.fields_dict.political_pre_rate.$input.css("text-align", "right");
// frm.fields_dict.turnover.$input.css("text-align", "right");
// frm.fields_dict.political_premium_amt.$input.css("text-align", "right");
// frm.fields_dict.premium_rate_eci.$input.css("text-align", "right");
// frm.fields_dict.commercial_premium_amt.$input.css("text-align", "right");
// frm.fields_dict.total_pre_amtadd.$input.css("text-align", "right");
// frm.fields_dict.your_fieldname.$input.css("text-align", "right");
// frm.fields_dict.your_fieldname.$input.css("text-align", "right");



        
        
//     },
    
    
//     onload: function(frm) {
//         console.log("** Fetching Approved Policy Approvals **");

//         // Fetch approved policy approvals
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 'doctype': 'Policy Approvals',
//                 'filters': {
//                     'workflow_state': 'Approved'
//                 },
//                 'fields': ['policy_number', 'policy_holder', 'policy_type', 'inception_date'],
//                 limit_page_length: 100  // Adjust this value as needed

//             },
//             callback: function(approvedPolicyApprovalsResponse) {
//                 if (approvedPolicyApprovalsResponse.message) {
//                     var approvedPolicyApprovals = approvedPolicyApprovalsResponse.message;

//                     console.log("** Approved Policy Approvals:", approvedPolicyApprovals);

//                     // Set approved policy numbers to the field
//                     var policyNos = approvedPolicyApprovals.map(function(policyApproval) {
//                         return policyApproval.policy_number;
//                     });

//                     frm.set_df_property('policy_no', 'options', policyNos);
//                 }
//             }
//         });
//     },


//    policy_no: function(frm) {
//         // Clear previous values
//         frm.set_value('policy_type', '');
//         frm.set_value('policy_holder', '');
//         frm.set_value('inception_date', '');
//         frm.set_value('policy_expiry_date', '');

//         // Get the selected policy number
//         let selectedPolicyNo = frm.doc.policy_no;

//         if (selectedPolicyNo) {
//             console.log("Fetching data for Policy No:", selectedPolicyNo);
//             // Fetch data for the selected policy number from Policy Approvals
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'Policy Approvals',
//                     filters: {
//                         policy_number: selectedPolicyNo
//                     },
//                     fieldname: ['policy_type', 'policy_holder', 'inception_date'] // Add the required fields from Policy Approvals
//                 },
//                 callback: function(r) {
//                     console.log("Response from Policy Approvals API:", r);
//                     if (!r.exc && r.message) {
//                         console.log("Setting values from Policy Approvals...");
//                         frm.set_value('policy_type', r.message.policy_type || '');
//                         frm.set_value('policy_holder', r.message.policy_holder || '');
//                         frm.set_value('inception_date', r.message.inception_date || '');

//                         // Show message to enter period from and period to
//                         frappe.msgprint(__('Please enter values for "Period From" and "Period To" fields and click the "Get Info" button.'));

//                         // Calculate policy_expiry_date and set it
//                         if (r.message.inception_date) {
//                             var inceptionDate = new Date(r.message.inception_date);
//                             var expiryDate = new Date(inceptionDate);
//                             expiryDate.setFullYear(expiryDate.getFullYear() + 1);
//                             frm.set_value('policy_expiry_date', frappe.datetime.str_to_user(expiryDate));
//                         }
//                     } 
//                 },
//             });
//         }
//     },

//     add_new: function(frm) {
//     // List of country names
//     var country_names = [
//         'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
//         'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
//         'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
//         'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)',
//         'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti',
//         'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")',
//         'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
//         'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
//         'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
//         'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
//         'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
//         'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia (formerly Macedonia)',
//         'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
//         'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
//         'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
//         'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan',
//         'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
//         'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
//     ];

//     // Display a prompt to enter field values with country options
//     frappe.prompt([
//         { label: 'Country', fieldname: 'country', fieldtype: 'Select', options: country_names, reqd: 1 },
//         { label: 'Terms Of Payment', fieldname: 'terms_of_paymentan', fieldtype: 'Select', options: '1-3m\n1-mLC\n4-6m\n4-6mLC\ncad\ncadLC\nTT7d', reqd: 1 },
//         { label: 'Commercial Pre Rate (%)', fieldname: 'commercial_pre_ratean', fieldtype: 'Currency', reqd: 1 },
//         { label: 'Political Pre Rate (%)', fieldname: 'political_pre_ratean', fieldtype: 'Currency', reqd: 1 },
//         { label: 'Premium Rate (%)', fieldname: 'premium_ratean', fieldtype: 'Currency', default: 0 }, // Include premium_ratean field

//         { label: '', fieldname: '', fieldtype: 'Column Break' },

//         { label: 'Commercial Premium Amount', fieldname: 'commercial_premium_amountan', fieldtype: 'Currency' },
//         { label: 'Political Premium Amount', fieldname: 'political_premium_amountan', fieldtype: 'Currency' },
//         { label: 'Total Premium Amount', fieldname: 'total_pre_amountan', fieldtype: 'Currency' },

//         { label: 'Buyer type', fieldname: 'buyer_type', fieldtype: 'Select', options: 'ASSOCIATED COMPANIES\nGOVERNMENT BUYERS\nPRIVATE BUYERS', reqd: 1 },
//         { label: 'Turnover', fieldname: 'turnover', fieldtype: 'Currency', reqd: 1 }
//     ], function(values) {
//         // Calculate premium_ratean based on commercial_pre_ratean and political_pre_ratean
//         const premium_ratean = parseFloat(values.commercial_pre_ratean) + parseFloat(values.political_pre_ratean);
        
//         // Set premium_ratean value in the prompt
//         values.premium_ratean = premium_ratean;

//         // Validate all required fields
//         const requiredFields = ['country', 'terms_of_paymentan', 'commercial_pre_ratean', 'political_pre_ratean', 'buyer_type', 'turnover'];
//         const missingFields = requiredFields.filter(field => !values[field]);

//         if (missingFields.length > 0) {
//             const errorMessage = `Please fill out all required fields: ${missingFields.join(', ')}`;
//             frappe.msgprint(errorMessage); // Show error message
//             return;
//         }

//         // Calculate commercial_premium_amountan and political_premium_amountan
//         const commercial_premium_amountan = parseFloat(values.turnover) * (parseFloat(values.commercial_pre_ratean) / 100);
//         const political_premium_amountan = parseFloat(values.turnover) * (parseFloat(values.political_pre_ratean) / 100);

//         // Calculate total_pre_amountan based on turnover and premium_ratean
//         const total_pre_amountan = parseFloat(values.turnover) * (premium_ratean / 100);

//         // Proceed with adding a new row to the child table
//         var new_row = frappe.model.add_child(frm.doc, 'Policy Reviews Child', 'child_table');
//         new_row.country = values.country;
//         new_row.terms_of_payment = values.terms_of_paymentan;
//         new_row.comm_pre_rate = values.commercial_pre_ratean;
//         new_row.political_pre_rate = values.political_pre_ratean;
//         new_row.pre_rate = premium_ratean;
       

//         // Refresh the child table
//         frm.refresh_field('child_table');
//     }, 'Enter Policy Details');
// },


// get_info: function(frm) {
//     var policy_type = frm.doc.policy_type;
//     var policy_holder = frm.doc.policy_holder;

//     // Hide or display fields based on policy_type
//     if (policy_type === 'DCI') {
//         // Hide fields for ECI
//         frm.toggle_display(['commercial_liability','child_table','add','add_new','premium_rate_eci','commercial_premium_amt','country','terms_of_payment','commercial_pre_rate','buyer_type','political_pre_rate','turnover','political_premium_amt','total_pre_amt','political_liabilityrev','commercial_liabilityrev','political_liability','commercial_liability1','political_liability1','commercial_liability2','political_liability2']);
//         // Display fields for DCI
//         frm.toggle_display(['field_to_display_for_dci'], true);
//     } else if (policy_type === 'ECI') {
//         // Hide fields for DCI
//         frm.toggle_display(['maximum_liability','premium_raterev','maximum_liabilityrev', 'premium_rate','maximum_liability1', 'premium_rate1','maximum_liability2', 'premium_rate2']);
//         // Display fields for ECI
//         frm.toggle_display(['field_to_hide_for_dci']);
//         frm.toggle_display(['field_to_display_for_eci'], true);
//     }

//     // Fetch and set values based on policy_type
//     if (policy_type === 'DCI') {
//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'DCIQuotation',
//                 filters: { 'name': frm.doc.dci_quotation, 'client_name': policy_holder },
//                 fieldname: ['maximum_liability','insured_turnover','expected_premium_income','expected_insured_turnover','limit_of_discretion','franchise_loss', 'premium_rate', 'insured_turnover', 'fee_per_enquiry', 'fee_for_cl_per_month', 'expected_insured_turnover']
//             },
//             callback: function(response) {
//                 var dciQuotation = response.message;
//                 if (dciQuotation) {
//                     frm.set_value('maximum_liability', dciQuotation.maximum_liability);
//                     frm.set_value('premium_rate', dciQuotation.premium_rate);
//                     frm.set_value('insured', dciQuotation.insured_turnover);
//                     frm.set_value('cl_enquiry_fee', dciQuotation.fee_per_enquiry);
//                     frm.set_value('cl_per_month', dciQuotation.fee_for_cl_per_month);
//                     frm.set_value('cl_enquiry_fee3', dciQuotation.fee_per_enquiry);
//                     frm.set_value('cl_per_month3', dciQuotation.fee_for_cl_per_month);
                                        
//                     frm.set_value('total_cl_enq_fee', dciQuotation.fee_per_enquiry);
//                     frm.set_value('total_cl_fee', dciQuotation.fee_for_cl_per_month);


//                     frm.set_value('actual_insured_turnover', dciQuotation.insured_turnover);

//                     frm.set_value('expected_premium', dciQuotation.expected_premium_income);

//                     frm.set_value('expected_insured_turnover', dciQuotation.expected_insured_turnover);
//                     frm.set_value('premium_raterev', dciQuotation.premium_rate);
//                     frm.set_value('maximum_liabilityrev', dciQuotation.maximum_liability);

                    
                    
                    
                    
//                 }
//             }
//         });
//     } else if (policy_type === 'ECI') {
//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'ECI Quotations',
//                 filters: { 'name': frm.doc.eci_quotation, 'client_name': policy_holder },
//                 fieldname: ['premium_rate','insured_commercial_risks_for_all_insured_companies','individual_first_lossp','limit_of_descrition', 'political_pre_rate', 'franchise_lossp', 'buyer_type', 'commercial', 'political', 'country_of_dest', 'terms_of_payment', 'commercial_pre_rate', 'turnover__p', 'political_premium_amt', 'total_pre_amt', 'cl_per_monthp', 'per_enquiryp', 'commercial_premium_amt_p']

//                 // ['premium_rate','','','political_pre_rate','franchise_lossp','buyer_type','commercial', 'political', 'country_of_dest', 'terms_of_payment', 'commercial_pre_rate', 'political_pre_rate', 'turnover__p', 'political_premium_amt', 'total_pre_amt', 'buyer_type', 'cl_per_monthp', 'per_enquiryp', 'commercial_premium_amt_p']
//             },
//             callback: function(response) {
//                 var eciQuotation = response.message;
//                 if (eciQuotation) {
//                     frm.set_value('commercial_liability', eciQuotation.commercial);
//                     frm.set_value('political_liability', eciQuotation.political);
//                     // frm.set_value('country', eciQuotation.country_of_dest);
//                     // frm.set_value('terms_of_payment', eciQuotation.terms_of_payment);
//                     // frm.set_value('commercial_pre_rate', eciQuotation.commercial_pre_rate);
//                     // frm.set_value('commercial_premium_amt', eciQuotation.commercial_premium_amt_p);
//                     frm.set_value('cl_enquiry_fee', eciQuotation.per_enquiryp);
//                     frm.set_value('cl_per_month', eciQuotation.cl_per_monthp);
                    
//                     frm.set_value('cl_enquiry_fee3', eciQuotation.per_enquiryp);
//                     frm.set_value('cl_per_month3', eciQuotation.cl_per_monthp);

                    
//                     // frm.set_value('premium_rate_eci', eciQuotation.premium_rate);                    
//                     // frm.set_value('buyer_type', eciQuotation.buyer_type);  
                    
//                     frm.set_value('franchise_loss', eciQuotation.franchise_lossp); 
                    
//                     // frm.set_value('political_pre_rate', eciQuotation.political_pre_rate); 
                    
                    
//                     // frm.set_value('political_premium_amt', eciQuotation.political_premium_amt);                    
//                     frm.set_value('first_limit_loss', eciQuotation.individual_first_lossp);  
//                     frm.set_value('limit_of_discretion', eciQuotation.limit_of_descrition);    
                    
//                     frm.set_value('commercial_liabilityrev', eciQuotation.commercial);               
//                     frm.set_value('political_liabilityrev', eciQuotation.political);
//                     // frm.set_value('turnover', eciQuotation.turnover__p);
//                     frm.set_value('insured3', eciQuotation.insured_commercial_risks_for_all_insured_companies);
//                     // frm.set_value('total_pre_amt', eciQuotation.total_pre_amt);
//                     frappe.msgprint('click the Add button after giving the values for the Country,Terms of Payment,Commercial Pre Rate,Political Pre Rate,Buyer Type,Turnover fields under the Limit of Discretion ');

                    





//                 }
//             }
//         });
//     }

//     var period_from = frm.doc.period_from;
//     var period_to = frm.doc.period_to;
//     var period_under_review = formatDate(period_from) + ' to ' + formatDate(period_to);
//     frm.set_value('period_under_review', period_under_review);
// },

//  add: function(frm) {
//         policychild(frm);
//     }










// });

// function generateProposalNumber(frm) {
//     let currentYear = new Date().getFullYear();
//     let prefix = `PRV/${currentYear}/`;

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Reviews',
//             fields: ['pr_number'],
//             order_by: 'creation desc',
//             limit: 1
//         },
//         callback: function(r) {
//             if (r.message && r.message.length > 0) {
//                 let lastPRNumber = r.message[0].pr_number;
//                 let lastNumber = parseInt(lastPRNumber.split("/").pop());
//                 if (!isNaN(lastNumber)) {
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value('pr_number', prefix + newNumber);
//                 }
//             } else {
//                 frm.set_value('pr_number', prefix + '0001');
//             }
//         }
//     });
// }

// function fetchAndFilterPolicyNumbers(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Policy Reviews',
//             filters: {
//                 workflow_state: 'Approved'
//             },
//             fields: ['policy_no']

//         },
//         callback: function(response) {
//             if (response && response.message) {
//                 var approvedPolicyNumbers = response.message.map(function(review) {
//                     return review.policy_no;
//                 });

//                 var policyNoField = frm.fields_dict['policy_no'];

//                 if (policyNoField) {
//                     policyNoField.df.options = policyNoField.df.options.filter(function(policyNo) {
//                         return approvedPolicyNumbers.indexOf(policyNo) === -1;
//                     });
//                     policyNoField.refresh();
//                 }
//             } else {
//                 console.error('Error fetching approved policy numbers from Policy Reviews.');
//             }
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error('Error:', errorThrown);
//         }
//     });
// }

// function formatDate(date) {
//     var formattedDate = frappe.datetime.str_to_user(date);
//     return formattedDate;
// }



// function policychild(frm) {
//     // Parse values from document fields
//     const commercial_pre_rate = parseFloat(frm.doc.commercial_pre_rate);
//     const political_pre_rate = parseFloat(frm.doc.political_pre_rate);
//     const turnover = parseFloat(frm.doc.turnover);


//     // Check if parsed values are valid numbers
//     if (!isNaN(commercial_pre_rate) && !isNaN(political_pre_rate) && !isNaN(turnover)) {
//         // Calculate premium_rate_eci
//         const premium_rate_eci = commercial_pre_rate + political_pre_rate;
//         frm.set_value('premium_rate_eci', premium_rate_eci);

//         // Calculate commercial_premium_amt
//         const commercial_premium_amt = turnover * (commercial_pre_rate / 100);
//         frm.set_value('commercial_premium_amt', commercial_premium_amt);

//         // Calculate political_premium_amt
//         const political_premium_amt = turnover * (political_pre_rate / 100);
//         frm.set_value('political_premium_amt', political_premium_amt);

//         // Calculate total_pre_amtadd
//         const total_pre_amtadd = turnover * (premium_rate_eci / 100);
//         frm.set_value('total_pre_amtadd', total_pre_amtadd);


//         // Access other document fields
//         const country = frm.doc.country;
//         const terms_of_payment = frm.doc.terms_of_payment;

//         // Add a new row to the child table
//         const new_row = frappe.model.add_child(frm.doc, 'Policy Reviews Child', 'child_table');
//         new_row.country = country;
//         new_row.pre_rate = premium_rate_eci; // Use the calculated premium_rate_eci
//         new_row.comm_pre_rate = commercial_pre_rate;
//         new_row.political_pre_rate = political_pre_rate;
//         new_row.terms_of_payment = terms_of_payment;
//         new_row.total_pre_amt = total_pre_amtadd;
//         new_row.political_premium_amt = political_premium_amt;
//         new_row.commercial_premium_amt = commercial_premium_amt;

//         // Refresh the child table to reflect the changes
//         frm.refresh_field('child_table');

//         // Reset the fields
//         frm.set_value('country', '');
//         frm.set_value('terms_of_payment', '');
//         frm.set_value('commercial_pre_rate', 0);
//         frm.set_value('commercial_premium_amt', 0);
//         frm.set_value('political_pre_rate', 0);
//         frm.set_value('political_premium_amt', 0);
//         frm.set_value('buyer_type', '');
//         frm.set_value('premium_rate_eci', 0);
//         frm.set_value('total_pre_amtadd', 0);
//         frm.set_value('turnover', '');
//     } else {
//         // Handle error or set default values if parsing fails
//         frm.set_value('premium_rate_eci', 0);
//         frm.set_value('commercial_premium_amt', 0);
//         frm.set_value('political_premium_amt', 0);
//         frm.set_value('total_pre_amtadd', 0);
//         frm.set_value('turnover', '');

//         // Display an error message or log the error
//         frappe.msgprint('Invalid input values. Please enter the values for Country,Terms of Payment,Turnover,Commercial Pre Rate,Political Pre Rate, Buyer Type and click on Add Button.');
//     }
// }
