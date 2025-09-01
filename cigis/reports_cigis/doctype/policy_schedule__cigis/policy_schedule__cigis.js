// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Policy Schedule _CIGIS', {
    onload: function(frm) {
        frm.set_df_property('child_letter', 'cannot_add_rows', true);
        $(frm.fields_dict['child_letter'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);

        // Apply CSS to hide the Edit button
        var css = `
            .btn-open-row {
                display: none !important;
            }
        `;
        $('<style>' + css + '</style>').appendTo('head');

        var proposalNumber = frm.doc.proposal_no;

        // Validate proposal number
        if (!proposalNumber) {
            frappe.msgprint('Proposal number is missing.');
            return;
        }

        // Function to populate child table
        function populateChildTable(data) {
            // Clear existing rows in the child table
            frm.clear_table('child_letter');

            // Add rows to the child table
            data.forEach(function(item) {
                var row = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
                row.section = item.section;
                row.policy = item.policy;
                row.reference = item.reference;
            });

            // Refresh the child table
            frm.refresh_field('child_letter');
        }

        // Fetch data from the correct doctype based on the proposal number prefix
        if (proposalNumber.startsWith('ECI')) {
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'ECI Quotations',
                    filters: { proposal_no1: proposalNumber },
                    fields: [
                        'inception_date', 'goods_services', 'limit_of_descrition', 'insured_commercial_risks_for_all_insured_companies',
                        'franchise_lossp', 'min_premium_depositp', 'total_pre_amt', 'individual_first_lossp', 'premium_rate', 
                        'cl_per_monthp', 'per_enquiryp', 'premium_rate'
                    ],
                    limit: 1
                },
                callback: function(response) {
                    if (response && response.message && response.message.length > 0) {
                        var data = [{
                            section: '1', policy: 'Definition 14', reference: 'Inception Date: ' + response.message[0].inception_date
                        }, {
                            section: '2', policy: 'Definition 15', reference: 'Goods/Services: ' + response.message[0].goods_services
                        }, {
                            section: '3', policy: 'Definition 8', reference: 'Insured percentages: ' + response.message[0].insured_commercial_risks_for_all_insured_companies
                        }, {
                            section: '4', policy: 'Proviso 8B', reference: 'Limit of Discretion: ' + response.message[0].limit_of_descrition
                        }, {
                            section: '5', policy: 'Definition', reference: 'Franchise Loss: ' + response.message[0].franchise_lossp
                        }, {
                            section: '6(a)', policy: 'Proviso 13A', reference: 'Minimum Premium: P' + response.message[0].min_premium_depositp
                        }, {
                            section: '6(b)', policy: 'Proviso 13B', reference: 'Premium Rate (exclusive of VAT): ' + response.message[0].premium_rate
                        }, {
                            section: '6(c)', policy: 'Proviso 13C', reference: 'cl_per_monthp (P per CL): ' + response.message[0].cl_per_monthp + ', per_enquiryp (P per CL): ' + response.message[0].per_enquiryp
                        }, {
                            section: '7', policy: 'Definition 12', reference: 'Maximum Liability: P' + response.message[0].total_pre_amt
                        }, {
                            section: '8', policy: 'Definition 10', reference: 'First Loss Limit: P' + response.message[0].individual_first_lossp
                        }, {
                            section: '9(a)', policy: 'Proviso 26', reference: 'Premium rate and Credit Limit fees are exclusive of VAT: '
                        }];

                        populateChildTable(data);
                    } else {
                        frappe.msgprint('No matching record found for ECI.');
                    }
                },
                error: function(err) {
                    console.error('Error fetching ECI data:', err);
                    frappe.msgprint('An error occurred while fetching ECI data.');
                }
            });
        } else if (proposalNumber.startsWith('DCI')) {
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'DCIQuotation',
                    filters: { proposal_no1: proposalNumber },
                    fields: [
                        'inception_date', 'goods_services', 'limit_of_discretion', 'insured_turnover', 'franchise_loss',
                        'min_annual_premium', 'premium_rate', 'fee_for_cl_per_month', 'fee_per_enquiry', 'maximum_liability',
                        'loss_ratio', 'premium_rate'
                    ],
                    limit: 1
                },
                callback: function(response) {
                    if (response && response.message && response.message.length > 0) {
                        var data = [{
                            section: '1', policy: 'Definition 14', reference: 'Inception Date: ' + response.message[0].inception_date
                        }, {
                            section: '2', policy: 'Definition 15', reference: 'Goods/Services: ' + response.message[0].goods_services
                        }, {
                            section: '3', policy: 'Definition 8', reference: 'Insured percentages: ' + response.message[0].insured_turnover
                        }, {
                            section: '4', policy: 'Proviso 8B', reference: 'Limit of Discretion: ' + response.message[0].limit_of_discretion
                        }, {
                            section: '5', policy: 'Definition', reference: 'Franchise Loss: ' + response.message[0].franchise_loss
                        }, {
                            section: '6(a)', policy: 'Proviso 13A', reference: 'Minimum Premium: P' + response.message[0].min_annual_premium
                        }, {
                            section: '6(b)', policy: 'Proviso 13B', reference: 'Premium Rate (exclusive of VAT): ' + response.message[0].premium_rate
                        }, {
                            section: '6(c)', policy: 'Proviso 13C', reference: 'Fee per CL per Month: P' + response.message[0].fee_for_cl_per_month + ', Fee per Enquiry: P' + response.message[0].fee_per_enquiry
                        }, {
                            section: '7', policy: 'Definition 12', reference: 'Maximum Liability: P' + response.message[0].maximum_liability
                        }, {
                            section: '8', policy: 'Definition 10', reference: 'Loss Ratio: ' + response.message[0].loss_ratio
                        }, {
                            section: '9(a)', policy: 'Proviso 26', reference: 'Premium rate and Credit Limit fees are exclusive of VAT: '
                        }];

                        populateChildTable(data);
                    } else {
                        frappe.msgprint('No matching record found for DCI.');
                    }
                },
                error: function(err) {
                    console.error('Error fetching DCI data:', err);
                    frappe.msgprint('An error occurred while fetching DCI data.');
                }
            });
        } else {
            frappe.msgprint('Invalid proposal number prefix.');
        }
    }
});











//old code
// frappe.ui.form.on('Policy Schedule _CIGIS', {
    
//      onload: function(frm) {
//     frm.set_df_property('child_letter', 'cannot_add_rows', true);
     
//      $(frm.fields_dict['child_letter'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
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
        
//         // Check if the proposal number starts with 'ECI'
//         if (proposalNumber.startsWith('ECI')) {
//             // Fetch data from ECI Quotations based on Proposal number
//       frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'ECI Quotations',
//                 filters: {
//                     proposal_no1: proposalNumber
//                 },
//                 fields: ['inception_date','goods_services','limit_of_descrition','insured_commercial_risks_for_all_insured_companies',
//                 'franchise_lossp','min_premium_depositp','total_pre_amt','individual_first_lossp','premium_rate','cl_per_monthp','per_enquiryp','premium_rate'], 
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



//                         // Function to populate child table
//                         function populateChildTable() {
//                             // Clear existing rows in the child table
//                           frm.clear_table('child_letter');

//                             // Add rows to the child table
//                             var row1 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row1.section = '1';
//                             row1.policy = 'Definition 14';
//                             row1.reference = 'Inception Date: ' + "   " + inceptionDate;

//                             var row2 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row2.section = '2';
//                             row2.policy = 'Definition 15';
//                             row2.reference = 'Goods/Services:' + "   " + GoodsServices ;

//                             var row3 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row3.section = '3';
//                             row3.policy = 'Definition 8';
//                             row3.reference = 'Insured percentages: ' + insuredCommerical;

//                             var row4 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row4.section = '4';
//                             row4.policy = 'Proviso 8B';
//                             row4.reference = 'Limit of Discretion: ' + limitDescription;

//                             var row5 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row5.section = '5';
//                             row5.policy = 'Definition';
//                             row5.reference = 'Franchise Loss: ' + franchiseLoss;

//                             var row6 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row6.section = '6(a)';
//                             row6.policy = 'Proviso 13A';
//                             row6.reference = 'Minimum Premium: P' + minPremium;

//                             var row7 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row7.section = '6(b)';
//                             row7.policy = 'Proviso 13B';
//                             row7.reference = 'Premium Rate (exclusive of VAT): ' + premiumrate;

//                             var row8 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row8.section = '6(c)';
//                             row8.policy = 'Proviso 13C';
//                             row8.reference = 'cl_per_monthp (P per CL): ' + cl_per_month + ', per_enquiryp (P per CL): ' + cl_per_enquiry;

//                             var row9 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row9.section = '7';
//                             row9.policy = 'Definition 12';
//                             row9.reference = 'Maximum Liability: P' + totalPreamt;

//                             var row10 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row10.section = '8';
//                             row10.policy = 'Definition 10';
//                             row10.reference = 'First Loss Limit: P' + individualFirstloss;
                            
//                             var row11 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row11.section = '9(a)';
//                             row11.policy = 'Proviso 26';
//                             row11.reference = 'Premium rate and Credit Limit fees are exclusive of VAT: ' + '';

//                             // Refresh the child table
//                             frm.refresh_field('child_letter');
//                         }

//                         // Call the function to populate child table
//                         populateChildTable();
//                     } else {
//                         frappe.msgprint('No matching record found.');
//                     }
//                 },
//                 error: function(err) {
//                     console.error('Error fetching data:', err);
//                     frappe.msgprint('An error occurred while fetching data.');
//                 }
//             });
//         } else if (proposalNumber.startsWith('DCI')) {
//             // Fetch data from DCI Quotations based on Proposal number
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'DCIQuotation',
//                     filters: {
//                         proposal_no1: proposalNumber
//                     },
//                     fields: [
//                         'inception_date',
//                         'goods_services',
//                         'limit_of_discretion',
//                         'insured_turnover',
//                         'franchise_loss',
//                         'min_annual_premium',
//                         'premium_rate',
//                         'fee_for_cl_per_month',
//                         'fee_per_enquiry',
//                         'maximum_liability',
//                         'loss_ratio',
//                         'premium_rate'
//                     ],
//                     limit: 1
//                 },
//                 callback: function(response) {
//                     if (response && response.message && response.message.length > 0) {
//                         var inceptionDate = response.message[0].inception_date;
//                         var GoodsServices = response.message[0].goods_services;
//                         var limitdiscretion = response.message[0].limit_of_discretion;
//                         var insuredCommercial = response.message[0].insured_turnover;
//                         var franchiseLoss = response.message[0].franchise_loss;
//                         var minPremium = response.message[0].min_annual_premium;
//                         var premiumRate = response.message[0].premium_rate;
//                         var clPerMonth = response.message[0].fee_for_cl_per_month;
//                         var clPerEnquiry = response.message[0].fee_per_enquiry;
//                         var maxLiability = response.message[0].maximum_liability;
//                         var lossRatio = response.message[0].loss_ratio;
//                         var premium_rate = response.message[0].premium_rate;


//                         // Function to populate child table
//                         function populateChildTable() {
//                             // Clear existing rows in the child table
//                           frm.clear_table('child_letter');

//                             // Add rows to the child table
//                             var row1 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row1.section = '1';
//                             row1.policy = 'Definition 14';
//                             row1.reference = 'Inception Date: ' + inceptionDate;

//                             var row2 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row2.section = '2';
//                             row2.policy = 'Definition 15';
//                             row2.reference = 'Goods/Services:' + GoodsServices;

//                             var row3 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row3.section = '3';
//                             row3.policy = 'Definition 8';
//                             row3.reference = 'Insured percentages: ' + insuredCommercial;

//                             var row4 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row4.section = '4';
//                             row4.policy = 'Proviso 8B';
//                             row4.reference = 'Limit of Discretion: ' + limitdiscretion;

//                             var row5 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row5.section = '5';
//                             row5.policy = 'Definition';
//                             row5.reference = 'Franchise Loss: ' + franchiseLoss;

//                             var row6 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row6.section = '6(a)';
//                             row6.policy = 'Proviso 13A';
//                             row6.reference = 'Minimum Premium: P' + minPremium;


//                             var row7 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row7.section = '6(b)';
//                             row7.policy = 'Proviso 13B';
//                             row7.reference = 'Premium Rate (exclusive of VAT): ' + premiumRate;

//                             var row8 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row8.section = '6(c)';
//                             row8.policy = 'Proviso 13C';
//                             row8.reference = 'cl_per_monthp (P per CL): ' + clPerMonth + ', per_enquiryp (P per CL): ' + clPerEnquiry;

//                             var row9 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row9.section = '7';
//                             row9.policy = 'Definition 12';
//                             row9.reference = 'Maximum Liability: P' + maxLiability;

//                             var row10 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row10.section = '8';
//                             row10.policy = 'Definition 10';
//                             row10.reference = 'First Loss Limit: P' + lossRatio;
                            
//                             var row11 = frappe.model.add_child(frm.doc, 'Policy_schedule_childtable', 'child_letter');
//                             row11.section = '9(a)';
//                             row11.policy = 'Proviso 26';
//                             row11.reference = 'Premium rate and Credit Limit fees are exclusive of VAT: ' + '';

//                             // Refresh the child table
//                           frm.refresh_field('child_letter');
//                         }

//                         // Call the function to populate child table
//                         populateChildTable();
//                     } else {
//                         frappe.msgprint('No matching record found in DCIQuotation.');
//                     }
//                 },
//                 error: function(err) {
//                     console.error('Error fetching data from DCIQuotation:', err);
//                     frappe.msgprint('An error occurred while fetching data from DCIQuotation.');
//                 }
//             });
//         }
//     }
// });

