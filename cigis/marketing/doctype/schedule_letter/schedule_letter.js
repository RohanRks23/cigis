// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

 
frappe.ui.form.on('Schedule Letter', {
    onload: function(frm) {
        // Disable row addition and delete button in dci_child table
        frm.set_df_property('dci_child', 'cannot_add_rows', true);
        $(frm.fields_dict['dci_child'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
        
        // Apply CSS to hide the Edit button
        var css = `
            .btn-open-row {
                display: none !important;
            }
        `;
        $('<style>' + css + '</style>').appendTo('head');

        var proposalNumber = frm.doc.proposal_no;

        // Fetch data from Policy Approvals based on Proposal number
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Policy Approvals',
                filters: { proposal_no: proposalNumber },
                fields: ['policy_holder', 'policy_number', 'quotation_numbers'],
                limit: 1
            },
            callback: function(response) {
                if (response && response.message && response.message.length > 0) {
                    var policyApprovalData = response.message[0];
                    frm.set_value('name_of_insured', policyApprovalData.policy_holder);
                    frm.set_value('policy_no', policyApprovalData.policy_number);
                    frm.set_value('quotation_no', policyApprovalData.quotation_numbers);
                    
                    // Fetch data from DCI Quotations based on Proposal number
                    frappe.call({
                        method: 'frappe.client.get_list',
                        args: {
                            doctype: 'DCIQuotation',
                            filters: {
                                proposal_no1: proposalNumber,
                                client_name: frm.doc.name_of_insured
                            },
                            fields: [
                                'inception_date', 'goods_services', 'limit_of_discretion', 'insured_turnover', 'franchise_loss',
                                'min_annual_premium', 'premium_rate', 'fee_for_cl_per_month', 'fee_per_enquiry', 'maximum_liability',
                                'loss_ratio'
                            ],
                            limit: 1
                        },
                        callback: function(response) {
                            if (response && response.message && response.message.length > 0) {
                                var data = response.message[0];
                                
                                // Function to populate child table
                                function populateChildTable() {
                                    // Clear existing rows in the child table
                                    frm.clear_table('dci_child');
                                    
                                    // Add rows to the child table
                                    var rows = [
                                        { section: '1', policy: 'Definition 14', reference: 'Inception Date: ' + data.inception_date },
                                        { section: '2', policy: 'Definition 15', reference: 'Goods/Services: ' + data.goods_services },
                                        { section: '3', policy: 'Definition 8', reference: 'Insured percentages: ' + data.insured_turnover },
                                        { section: '4', policy: 'Proviso 8B', reference: 'Limit of Discretion: ' + data.limit_of_discretion },
                                        { section: '5', policy: 'Definition', reference: 'Franchise Loss: ' + data.franchise_loss },
                                        { section: '6(a)', policy: 'Proviso 13A', reference: 'Minimum Premium: P' + data.min_annual_premium },
                                        { section: '6(b)', policy: 'Proviso 13B', reference: 'Premium Rate (exclusive of VAT): ' + data.premium_rate },
                                        { section: '6(c)', policy: 'Proviso 13C', reference: 'Fee per CL per Month: P' + data.fee_for_cl_per_month + ', Fee per Enquiry: P' + data.fee_per_enquiry },
                                        { section: '7', policy: 'Definition 12', reference: 'Maximum Liability: P' + data.maximum_liability },
                                        { section: '8', policy: 'Definition 10', reference: 'Loss Ratio: ' + data.loss_ratio },
                                        { section: '9(a)', policy: 'Proviso 26', reference: 'Premium rate and Credit Limit fees are exclusive of VAT: ' }
                                    ];
                                    
                                    rows.forEach(function(rowData) {
                                        var row = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
                                        row.section = rowData.section;
                                        row.policy = rowData.policy;
                                        row.reference = rowData.reference;
                                    });
                                    
                                    // Refresh the child table
                                    frm.refresh_field('dci_child');
                                }

                                // Call the function to populate child table
                                populateChildTable();
                            } else {
                                frappe.msgprint('No matching record found in DCIQuotation.');
                            }
                        },
                        error: function(err) {
                            console.error('Error fetching data from DCIQuotation:', err);
                            frappe.msgprint('An error occurred while fetching data from DCIQuotation.');
                        }
                    });
                } else {
                    frappe.msgprint('No matching record found in Policy Approvals.');
                }
            },
            error: function(err) {
                console.error('Error fetching data from Policy Approvals:', err);
                frappe.msgprint('An error occurred while fetching data from Policy Approvals.');
            }
        });
         
    }
});




// frappe.ui.form.on('Schedule Letter', {
//     onload: function(frm) {
//         // Disable row addition in dci_child table
//         frm.set_df_property('dci_child', 'cannot_add_rows', true);
 
//         // Disable delete button in respective_bond_details grid
//         $(frm.fields_dict['dci_child'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
 
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
//       // Fetch data from Policy Approvals based on Proposal number
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Policy Approvals',
//                 filters: {
//                     proposal_no: proposalNumber
//                 },
//                 fields: ['policy_holder', 'policy_number', 'quotation_numbers'],
//                  limit: 1
//             },
//             callback: function(response) {
//                 if (response && response.message && response.message.length > 0) {
//                     var policyApprovalData = response.message[0];
//                     frm.set_value('name_of_insured', policyApprovalData.policy_holder);
//                     frm.set_value('policy_no', policyApprovalData.policy_number);
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
//       // Fetch data from DCI Quotations based on Proposal number
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'DCIQuotation',
//                 filters: {
//                     proposal_no1: proposalNumber,
//                     client_name: frm.doc.name_of_insured
//                 },
//                 fields: ['inception_date','goods_services','limit_of_discretion', 'insured_turnover', 'franchise_loss', 'min_annual_premium', 'premium_rate',
//                          'fee_for_cl_per_month', 'fee_per_enquiry', 'maximum_liability', 'loss_ratio','premium_rate'], 
//                 limit: 1
//             },
//             callback: function(response) {
//                 if (response && response.message && response.message.length > 0) {
//                     var inceptionDate = response.message[0].inception_date;
//                     var GoodsServices = response.message[0].goods_services;
//                     var limitdiscretion = response.message[0].limit_of_discretion;
//                     var insuredCommercial = response.message[0].insured_turnover;
//                     var franchiseLoss = response.message[0].franchise_loss;
//                     var minPremium = response.message[0].min_annual_premium;
//                     var premiumRate = response.message[0].premium_rate;
//                     var clPerMonth = response.message[0].fee_for_cl_per_month;
//                     var clPerEnquiry = response.message[0].fee_per_enquiry;
//                     var maxLiability = response.message[0].maximum_liability;
//                     var lossRatio = response.message[0].loss_ratio;
//                     var premium_rate = response.message[0].premium_rate;
 
//                     // Function to populate child table
//                     function populateChildTable() {
//                         // Clear existing rows in the child table
//                         frm.clear_table('dci_child');
 
//                         // Add rows to the child table
//                         var row1 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row1.section = '1';
//                         row1.policy = 'Definition 14';
//                         row1.reference = 'Inception Date: ' + inceptionDate;
 
// var row2 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
// row2.section = '2';
// row2.policy = 'Definition 15';
// row2.reference = 'Goods/Services: ' + "   "+ GoodsServices;
 
 
//                         var row3 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row3.section = '3';
//                         row3.policy = 'Definition 8';
//                         row3.reference = 'Insured percentages: ' + insuredCommercial;
 
//                         var row4 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row4.section = '4';
//                         row4.policy = 'Proviso 8B';
//                         row4.reference = 'Limit of Discretion: ' + limitdiscretion;
 
//                         var row5 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row5.section = '5';
//                         row5.policy = 'Definition';
//                         row5.reference = 'Franchise Loss: ' + franchiseLoss;
 
//                         var row6 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row6.section = '6(a)';
//                         row6.policy = 'Proviso 13A';
//                         row6.reference = 'Minimum Premium: P' + minPremium;
 
 
//                         var row7 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row7.section = '6(b)';
//                         row7.policy = 'Proviso 13B';
//                         row7.reference = 'Premium Rate (exclusive of VAT): ' + premiumRate;
 
//                         var row8 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row8.section = '6(c)';
//                         row8.policy = 'Proviso 13C';
//                         row8.reference = 'cl_per_monthp (P per CL): ' + clPerMonth + ', per_enquiryp (P per CL): ' + clPerEnquiry;
 
//                         var row9 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row9.section = '7';
//                         row9.policy = 'Definition 12';
//                         row9.reference = 'Maximum Liability: P' + maxLiability;
 
//                         var row10 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row10.section = '8';
//                         row10.policy = 'Definition 10';
//                         row10.reference = 'First Loss Limit: P' + lossRatio;
//                         var row11 = frappe.model.add_child(frm.doc, 'DCI_Child_Schedule_letter', 'dci_child');
//                         row11.section = '9(a)';
//                         row11.policy = 'Proviso 26';
//                         row11.reference = 'Premium rate and Credit Limit fees are exclusive of VAT: ' + '';
 
//                         // Refresh the child table
//                         frm.refresh_field('dci_child');
//                     }
 
//                     // Call the function to populate child table
//                     populateChildTable();
//                 } else {
//                     frappe.msgprint('No matching record found in DCIQuotation.');
//                 }
//             },
//             error: function(err) {
//                 console.error('Error fetching data from DCIQuotation:', err);
//                 frappe.msgprint('An error occurred while fetching data from DCIQuotation.');
//             }
//         });


 
 
//     }
 
 
// });
