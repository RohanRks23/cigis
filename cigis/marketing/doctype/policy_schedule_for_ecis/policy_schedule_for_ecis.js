// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Policy Schedule For ECIS', {
    onload: function(frm) {
        // Disable row addition in eci_policy table
        frm.set_df_property('eci_policy', 'cannot_add_rows', true);

        // Disable delete button in eci_policy grid
        $(frm.fields_dict['eci_policy'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);

        // Apply CSS to hide the Edit button
        var css = `
            .btn-open-row {
                display: none !important;
            }
        `;
        $('<style>' + css + '</style>').appendTo('head');

        // Fetch data from Policy Approvals based on Proposal number
        var proposalNumber = frm.doc.proposal_no;

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Policy Approvals',
                filters: {
                    proposal_no: proposalNumber
                },
                fields: ['policy_holder', 'policy_number', 'quotation_numbers'],
                limit: 1
            },
            callback: function(response) {
                if (response && response.message && response.message.length > 0) {
                    var policyApprovalData = response.message[0];

                    frm.set_value('name_of_insured', policyApprovalData.policy_holder);
                    frm.set_value('policy_number', policyApprovalData.policy_number);
                    frm.set_value('quotation_no', policyApprovalData.quotation_numbers);
                } else {
                    frappe.msgprint('No matching record found in Policy Approvals.');
                }
            },
            error: function(err) {
                console.error('Error fetching data from Policy Approvals:', err);
                frappe.msgprint('An error occurred while fetching data from Policy Approvals.');
            }
        });

        // Fetch data from ECI Quotations based on Proposal number
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'ECI Quotations',
                filters: {
                    proposal_no: proposalNumber
                },
                fields: ['inception_date', 'goods_services', 'limit_of_descrition', 'insured_commercial_risks_for_all_insured_companies', 'franchise_lossp',
                    'min_premium_depositp', 'total_pre_amt', 'individual_first_lossp', 'premium_rate', 'cl_per_monthp', 'per_enquiryp', 'premium_rate'],
                limit: 1
            },
            callback: function(response) {
                if (response && response.message && response.message.length > 0) {
                    var data = response.message[0];

                    // Function to populate child table
                    function populateChildTable() {
                        // Clear existing rows in the child table
                        frm.clear_table('eci_policy');

                        // Add rows to the child table
                        var rows = [
                            { section: '1', policy: 'Definition 14', reference: 'Inception Date: ' + "   " + data.inception_date },
                            { section: '2', policy: 'Definition 15', reference: 'Goods/Services: ' + "   " + data.goods_services },
                            { section: '3', policy: 'Definition 8', reference: 'Insured percentages: ' + "   " + data.insured_commercial_risks_for_all_insured_companies },
                            { section: '4', policy: 'Proviso 8B', reference: 'Limit of Discretion: ' + "   " + data.limit_of_descrition },
                            { section: '5', policy: 'Definition', reference: 'Franchise Loss: ' + "   " + data.franchise_lossp },
                            { section: '6(a)', policy: 'Proviso 13A', reference: 'Minimum Premium: P' + "   " + data.min_premium_depositp },
                            { section: '6(b)', policy: 'Proviso 13B', reference: 'Premium Rate (exclusive of VAT): ' + "   " + data.premium_rate },
                            { section: '6(c)', policy: 'Proviso 13C', reference: 'CL per month (P per CL): ' + "   " + data.cl_per_monthp + ',\nper enquiry (P per CL): ' + data.per_enquiryp },
                            { section: '7', policy: 'Definition 12', reference: 'Maximum Liability: P' + "   " + data.total_pre_amt },
                            { section: '8', policy: 'Definition 10', reference: 'First Loss Limit: P' + "   " + data.individual_first_lossp },
                            { section: '9(a)', policy: 'Proviso 26', reference: 'Premium rate and Credit Limit fees are exclusive of VAT: ' + "   " }
                        ];

                        rows.forEach(function(item) {
                            var row = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
                            row.section = item.section;
                            row.policy = item.policy;
                            row.reference = item.reference;
                        });

                        // Refresh the child table
                        frm.refresh_field('eci_policy');
                    }

                    // Call the function to populate child table
                    populateChildTable();
                } else {
                    frappe.msgprint('No matching record found in ECI Quotations.');
                }
            },
            error: function(err) {
                console.error('Error fetching data from ECI Quotations:', err);
                frappe.msgprint('An error occurred while fetching data from ECI Quotations.');
            }
        });
    }
});


//old code

// frappe.ui.form.on('Policy Schedule For ECIS', {
//     onload: function(frm) {
//           frm.set_df_property('eci_policy', 'cannot_add_rows', true);
        
//           $(frm.fields_dict['eci_policy'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
//         // Apply CSS to hide the Edit button
//         var css = `
//             .btn-open-row {
//                 display: none !important;
//             }
//         `;
//         $('<style>' + css + '</style>').appendTo('head');
//     },
//     refresh: function(frm) {
         
       
        
//         var proposalNumber = frm.doc.proposal_no;
        
        
//         frappe.call({
//             method: 'frappe.client.get_list',
//           args: {
//                 doctype: 'Policy Approvals',
//                 filters: {
//                     proposal_no: proposalNumber
//                 },
//                 fields: ['policy_holder', 'policy_number','quotation_numbers'],  //,'proposal_no'
//                 limit: 1
//             },
//             callback: function(response) {
//                 if (response && response.message && response.message.length > 0) {
//                     var policyApprovalData = response.message[0];
 
//                     frm.set_value('name_of_insured', policyApprovalData.policy_holder);
//                     frm.set_value('policy_number', policyApprovalData.policy_number);
//                     //frm.set_value('proposal_no', policyApprovalData.proposal_no);
//                     frm.set_value('quotation_no', policyApprovalData.quotation_numbers);
//                 } else {
//                     frappe.msgprint('No matching record found in Policy Approvals.');
//                 }
//             },
//             error: function(err) {
//                 console.error('Error fetching data from Policy Approvals:', err);
//                 frappe.msgprint('An error occurred while fetching data from Policy Approvals.');
//             }
//         });
//}
//         // Fetch data from ECI Quotations based on Proposal number
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'ECI Quotations',
//                 filters: {
//                     proposal_no: proposalNumber
//                 },
//                 fields: ['inception_date','goods_services','limit_of_descrition','insured_commercial_risks_for_all_insured_companies','franchise_lossp',
//                 'min_premium_depositp','total_pre_amt','individual_first_lossp','premium_rate','cl_per_monthp','per_enquiryp','premium_rate'], 
//                 limit: 1
//             },
//             callback: function(response) {
//                 if (response && response.message && response.message.length > 0) {
//                     var inceptionDate = response.message[0].inception_date;
//                     var GoodsServices = response.message[0].goods_services;
//                     var limitDescription = response.message[0].limit_of_descrition;
//                     var insuredCommerical = response.message[0].insured_commercial_risks_for_all_insured_companies;
//                     var franchiseLoss = response.message[0].franchise_lossp;
//                     var minPremium = response.message[0].min_premium_depositp;
//                     var totalPreamt = response.message[0].total_pre_amt;
//                     var individualFirstloss = response.message[0].individual_first_lossp;
//                     var premiumrate = response.message[0].premium_rate;
//                     var cl_per_month = response.message[0].cl_per_monthp;
//                     var cl_per_enquiry = response.message[0].per_enquiryp;
//                     var premium_rate = response.message[0].premium_rate;

//                     // Function to populate child table
//           function populateChildTable() {
//                         // Clear existing rows in the child table
//                         frm.clear_table('eci_policy');

//             var row1 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row1.section = '1';
//             row1.policy = 'Definition 14';
//             row1.reference = 'Inception Date: ' + "   "+ inceptionDate;
                        
//             var row2 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row2.section = '2';
//             row2.policy = 'Definition 15';
//             row2.reference = 'Goods/Services: ' + "   "+ GoodsServices;
            
            
//             var row3 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row3.section = '3';
//             row3.policy = 'Definition 8';
//             row3.reference = 'Insured percentages:' + "   "+ insuredCommerical;                       
                         
//             var row4 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row4.section = '4';
//             row4.policy = 'Proviso 8B';
//             row4.reference = 'Limit of Discretion:' + "   "+ limitDescription;

//             var row5 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row5.section = '5';
//             row5.policy = 'Definition';
//             row5.reference = 'Franchise Loss:' + "   "+ franchiseLoss ;

//             var row6 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row6.section = '6(a)';
//             row6.policy = 'Proviso 13A';
//             row6.reference = 'Minimum Premium:P' + "   "+ minPremium ;

//             var row7 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row7.section = '6(b)';
//             row7.policy = 'Proviso 13B';
//             row7.reference = 'Premium Rate(exclusive of VAT):' + "   "+ premiumrate ;

//             // var row8 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             // row8.section = '6(c)';
//             // row8.policy = 'Proviso 13C';
//             // row8.reference = 'per_enquiryp(P per CL):' + cl_per_enquiry;
            
//           var row8 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//           row8.section = '6(c)';
//           row8.policy = 'Proviso 13C';
//           row8.reference = 'cl_per_monthp(P per CL): ' + "   "+ cl_per_month + ',\nper_enquiryp(P per CL): ' + cl_per_enquiry;


//             var row9 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row9.section = '7';
//             row9.policy = 'Definition 12';
//             row9.reference = 'Maximum Liability: P' + "   "+ totalPreamt;

//             var row10 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row10.section = '8';
//             row10.policy = 'Definition 10';
//             row10.reference = 'First Loss Limit: P'  + "   "+ individualFirstloss;
            
//             var row11 = frappe.model.add_child(frm.doc, 'ECI_Policy_Schedule_letter', 'eci_policy');
//             row11.section = '9(a)';
//             row11.policy = 'Proviso 26';
//             row11.reference = 'Premium rate and Credit Limit fees are exclusive of VAT:'+ "   "+ '';

            

//                         // Refresh the child table
//                         frm.refresh_field('eci_policy');
//                     }
//                     // Call the function to populate child table
//                     populateChildTable();
//                     //  populateChildTable(frm);
//                 } else {
//                     frappe.msgprint('No matching record found in ECI Quotations.');
//                 }
//             },
//             error: function(err) {
//                 console.error('Error fetching data from ECI Quotations:', err);
//                 frappe.msgprint('An error occurred while fetching data from ECI Quotations.');
//             }
//         });
        
 
// });







