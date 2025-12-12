// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('DCI Quotation', {
//     onload: function(frm) {
//             if (!frm.doc.schedule_no) {
//                 generateNumber(frm);
//             }
    
//             // Fetch all client names from submitted proposals
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     'doctype': 'DCI Proposals',
//                     'filters': {
//                         'workflow_state': 'Approved'
//                     },
//                     'fields': ['client_name'],
//                      limit_page_length: 100  // Adjust this value as needed
    
//                 },
//             callback: function(response) {
//                 console.log("client_name received:", response);
//                 let DataArray = response.message;
//                 let uniqueclientnames = new Set();
     
//                 // Collect unique facility_no values
//                 for (let x of DataArray) {
//                     uniqueclientnames.add(x.client_name);
//                 }
     
//                 // Convert set to array
//                 let FinalArray = Array.from(uniqueclientnames);
     
//                 frm.set_df_property('client_name', 'options', FinalArray);
//                 console.log("final", FinalArray);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching client_name:", textStatus, errorThrown);
//             }    
            
                
//             });
     
          
//         },
        
//     client_name: function(frm) {
    
//             //  if (frm.doc.client_name) {
    
//                 frappe.call({
    
//                     method: 'frappe.client.get_list',
    
//                     args: {
    
//                         doctype: 'DCI Proposals', 
    
//                         filters: {
    
//                             'client_name': frm.doc.client_name
    
//                         },
    
//                     fields:['proposal_no']  
    
//                     },
    
//                     callback: function(response) {
//                         console.log("Response:", response); // Check response from server
    
//                         if (response.message && response.message.length > 0) {
//                             var proposalNumbers = response.message.map(item => item.proposal_no);
//                             console.log("proposal Numbers:", proposalNumbers); // Check policy numbers fetched
    
//                             // Update dropdown field options
//                             frm.set_df_property('proposal_no1', 'options', proposalNumbers.join('\n'));
//                             frm.refresh_field('proposal_no1'); // Refresh dropdown field
//                         } else {
//                             // Clear dropdown field options if no data found
//                             frm.set_df_property('proposal_no1', 'options', '');
//                             frm.refresh_field('proposal_no1'); // Refresh dropdown field
//                         }
//                     },
    
//                 });
    
//     },
    
//     // proposal_no: function(frm) {
//     //     var ProposalNo = frm.doc.proposal_no;
//     //         frm.set_value('proposal_no1', 'ProposalNo');
    
//     //     // Fetch data from DCI Proposals based on selected client name
//     //     frappe.call({
//     //         method: 'frappe.client.get_list',
//     //         args: {
//     //             doctype: 'DCI Proposals',
//     //             filters: {
//     //                 proposal_no: ProposalNo
//     //             },
//     //             fields: ['total_debtors', 'total_bad_debt', 'total_turnover', 'year_count', 'status', 'signed_on']
//     //         },
//     //         callback: function(response) {
//     //             console.log("DCI Proposals response:", response);
//     //             if (response.message && response.message.length > 0) {
//     //                 var data_from_proposals = response.message[0];
    
//     //                 var totalBadDebt = data_from_proposals.total_bad_debt;  // Default to 0 if undefined
//     //                 var totalTurnover = data_from_proposals.total_turnover;  // Default to 0 if undefined
//     //                 var yearCount = data_from_proposals.year_count;  // Default to 0 if undefined
    
//     //                 console.log('Total Bad Debt:', totalBadDebt);
//     //                 console.log('Total Turnover:', totalTurnover);
//     //                 console.log('Year Count:', yearCount);
    
//     //                 // Check if totalTurnover is not zero to avoid division by zero
//     //                 if (totalTurnover !== 0) {
//     //                     var lossRatio = (totalBadDebt / totalTurnover) * 100;
//     //                     frm.set_value('loss_ratio', lossRatio);
//     //                 } else {
//     //                     frm.set_value('loss_ratio', 0);
//     //                 }
    
//     //                 var avgLoss = totalBadDebt / (yearCount + 1);
//     //                 frm.set_value('average_bad_debts', avgLoss);
//     //                 frm.set_value('average_bad_debt_per_year', avgLoss);
    
//     //                 frm.set_value('total_no_of_debtors', data_from_proposals.total_debtors || '');
//     //                 frm.set_value('status11', data_from_proposals.status || '');
//     //                 frm.set_value('captured_on', data_from_proposals.signed_on || '');
    
//     //             } else {
//     //                 // Clear fields if no matching record found
//     //                 frm.set_value('total_no_of_debtors', '');
//     //                 frm.set_value('status11', '');
//     //                 frm.set_value('captured_on', '');
//     //                 frm.set_value('loss_ratio', '');
//     //                 frm.set_value('average_bad_debts', '');
//     //                 frm.set_value('average_bad_debt_per_year', '');
//     //             }
    
//     //             // Calling to refresh
//     //             fetchProposalData(frm);
//     //         }
//     //     });
//     // },main
    
    
//     proposal_no1: function(frm) {
//         var ProposalNo = frm.doc.proposal_no1;
//         frm.set_value('proposal_no2', ProposalNo);
    
//         // Fetch data from DCI Proposals based on selected client name
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'DCI Proposals',
//                 filters: {
//                     proposal_no: ProposalNo
//                 },
//                 fields: ['total_debtors', 'total_bad_debt', 'total_turnover', 'year_count', 'status', 'signed_on']
//             },
//             callback: function(response) {
//                 console.log("DCI Proposals response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_proposals = response.message[0];
    
//                     frappe.call({
//                         method: 'frappe.client.get_list',
//                         args: {
//                             doctype: 'DCI Quotation',
//                             filters: {
//                                 proposal_no1: ProposalNo,
//                                 workflow_state: 'Approved'
//                             },
//                             fields: ['proposal_no1']
//                         },
//                         callback: function(approvedResponse) {
//                             if (approvedResponse.message && approvedResponse.message.length > 0) {
//                                 frappe.msgprint('This proposal_no is already approved.');
//                             } else {
//                                 var totalBadDebt = data_from_proposals.total_bad_debt || 0;  // Default to 0 if undefined
//                                 var totalTurnover = data_from_proposals.total_turnover || 0;  // Default to 0 if undefined
//                                 var yearCount = data_from_proposals.year_count || 0;  // Default to 0 if undefined
    
//                                 console.log('Total Bad Debt:', totalBadDebt);
//                                 console.log('Total Turnover:', totalTurnover);
//                                 console.log('Year Count:', yearCount);
    
//                                 // Check if totalTurnover is not zero to avoid division by zero
//                                 if (totalTurnover !== 0) {
//                                     var lossRatio = (totalBadDebt / totalTurnover) * 100;
//                                     frm.set_value('loss_ratio', lossRatio);
//                                 } else {
//                                     frm.set_value('loss_ratio', 0);
//                                 }
    
//                                 var avgLoss = totalBadDebt / (yearCount + 1);
//                                 frm.set_value('average_bad_debts', avgLoss);
//                                 frm.set_value('average_bad_debt_per_year', avgLoss);
    
//                                 frm.set_value('total_no_of_debtors', data_from_proposals.total_debtors || '');
//                                 frm.set_value('status11', data_from_proposals.status || '');
//                                 frm.set_value('captured_on', data_from_proposals.signed_on || '');
//                             }
//                         }
//                     });
//                 } else {
//                     // Clear fields if no matching record found
//                     frm.set_value('total_no_of_debtors', '');
//                     frm.set_value('status11', '');
//                     frm.set_value('captured_on', '');
//                     frm.set_value('loss_ratio', '');
//                     frm.set_value('average_bad_debts', '');
//                     frm.set_value('average_bad_debt_per_year', '');
//                 }
    
//                 // Calling to refresh
//                 fetchProposalData(frm);
//             }
//         });
//     },
    
    
    
//     refresh: function(frm) {
//             // Attach click event handler to the underlined words
//             $('p.underlined a').on('click', function(event) {
//                 event.preventDefault();
//                 var linkText = $(this).text().trim();
    
//                 // Check if the workflow state is 'Approved'
//                 if (frm.doc.workflow_state !== 'Approved') {
//                     frappe.msgprint('The document must be approved to perform this action.');
//                     return;
//                 }
    
//                 switch (linkText) {
//                     case 'Addendum and Endorsements to the policy':
//                         openNewDocument('Addendum and Endorsements to the policy', frm);
//                        // createAddendumDocument(frm);
//                         break;
//                     case 'Covering Letters':
//                         openNewDocument('Covering Letters', frm);
//                         break;
//                     case 'Schedule (Goods/Services)':
//                         openNewDocument('Schedule Letter', frm);
//                         break;
//                     case 'Specimen Policy Documents':
//                         openNewDocument('Specimen Policy Documents', frm);
//                         break;
//                     case 'Consent Form':
//                         openNewDocument('Consent Form', frm);
//                         break;
//                     case 'Acceptance Form':
//                         openNewDocument('Acceptance Form', frm);
//                         break;
//                     case 'Guide to the Administration of the policy':
//                         openNewDocument('Guide to the _Administration of the policy', frm);
//                         break;
//                     default:
//                         console.log("No action defined for", linkText);
//                 }
//             });
            
            
    
    
//     // premium values from dci proposal
    
    
//             // if (!frm.doc.__islocal) {
//             //     // Document is already saved, so fetch data from 'DCI Proposals' and populate fields
//             //     fetchProposalData(frm);
//             // }
    
    
//         frm.fields_dict['possible_declines_as_'].df.onchange = () => {
//         console.log("possible_declines_as_ onchange triggered");
//         var possible = parseFloat(frm.doc.possible_declines_as_);
//         console.log("possible:", possible);
//         frm.doc.possible_declines_by_beci = possible;
//         frm.refresh_field('possible_declines_by_beci');
                
//                     };
    
    
//     frm.fields_dict.expected_turnover.$input.css("text-align", "right");
//     frm.fields_dict.estimated_govt_sales_plus_cash_sales.$input.css("text-align", "right");
//     frm.fields_dict.total_no_of_debtors.$input.css("text-align", "right");
//     frm.fields_dict.limit_of_discretion.$input.css("text-align", "right");
//     frm.fields_dict.franchise_loss.$input.css("text-align", "right");
//     frm.fields_dict.loss_ratio.$input.css("text-align", "right");
//     frm.fields_dict.buyers_excluded.$input.css("text-align", "right");
//     frm.fields_dict.of_the_turnover.$input.css("text-align", "right");
//     frm.fields_dict.possible_declines_as_.$input.css("text-align", "right");
//     frm.fields_dict.insured_turnover.$input.css("text-align", "right");
//     frm.fields_dict.expected_insured_turnover.$input.css("text-align", "right");
//     frm.fields_dict.admin_cost_per_buyer.$input.css("text-align", "right");
//     frm.fields_dict.average_bad_debts.$input.css("text-align", "right");
//     frm.fields_dict.break_evenpoint.$input.css("text-align", "right");
//     frm.fields_dict.total_credit_sale_cost.$input.css("text-align", "right");
//     frm.fields_dict.cost_ratio.$input.css("text-align", "right");
//     frm.fields_dict.beci_margin_on_cost_ratio.$input.css("text-align", "right");
//     frm.fields_dict.premium_rate.$input.css("text-align", "right");
//     frm.fields_dict.min_annual_premium.$input.css("text-align", "right");
//     frm.fields_dict.expected_annual_premium.$input.css("text-align", "right");
//     frm.fields_dict.premium_deposit.$input.css("text-align", "right");
//     frm.fields_dict.maximum_liability.$input.css("text-align", "right");
//     frm.fields_dict.fee_per_enquiry.$input.css("text-align", "right");
//     frm.fields_dict.fee_for_cl_per_month.$input.css("text-align", "right");
    
//     // options
    
//     frm.fields_dict.expected_turnover_2.$input.css("text-align", "right");
//     frm.fields_dict.possible_declines_by_beci.$input.css("text-align", "right");
//     frm.fields_dict.expected_insured_turnover_2.$input.css("text-align", "right");
//     frm.fields_dict.expected_premium_income.$input.css("text-align", "right");
//     frm.fields_dict.estimated_govt_sales__plus_cash_sales.$input.css("text-align", "right");
//     frm.fields_dict.average_bad_debt_per_year.$input.css("text-align", "right");
//     frm.fields_dict.expected_profitloss_on_account.$input.css("text-align", "right");
    
//     frm.fields_dict.upfront_discount.$input.css("text-align", "right");
//     frm.fields_dict.proposed_prem_rate_after_discount.$input.css("text-align", "right");
//     frm.fields_dict.expected_prem_at_std.$input.css("text-align", "right");
//     frm.fields_dict.discount_offered.$input.css("text-align", "right");
//     frm.fields_dict.resultant_prem_income.$input.css("text-align", "right");
//     frm.fields_dict.allowable_claim_value.$input.css("text-align", "right");
//     frm.fields_dict.of_premium_received.$input.css("text-align", "right");
//     frm.fields_dict.premreceived_net_of_claims.$input.css("text-align", "right");
//     frm.fields_dict.retrospective_discount.$input.css("text-align", "right");
//     frm.fields_dict._net_premium_received.$input.css("text-align", "right");
//     frm.fields_dict.beci_profitloss_on_account.$input.css("text-align", "right");
//     frm.fields_dict.total_discount_given.$input.css("text-align", "right");
    
//     frm.fields_dict.upfront_discount2.$input.css("text-align", "right");
//     frm.fields_dict.proposed_prem_rate_after_discount2.$input.css("text-align", "right");
//     frm.fields_dict.expected_prem_at_std2.$input.css("text-align", "right");
//     frm.fields_dict.discount_offered2.$input.css("text-align", "right");
//     frm.fields_dict.resultant_prem_income2.$input.css("text-align", "right");
//     frm.fields_dict.allowable_claim_value2.$input.css("text-align", "right");
//     frm.fields_dict.of_premium_received2.$input.css("text-align", "right");
//     frm.fields_dict.premreceived_net_of_claims2.$input.css("text-align", "right");
//     frm.fields_dict.retrospective_discount2.$input.css("text-align", "right");
//     frm.fields_dict._net_premium_received2.$input.css("text-align", "right");
//     frm.fields_dict.beci_profitloss_on_account_.$input.css("text-align", "right");
//     frm.fields_dict.total_discount_given2.$input.css("text-align", "right");
    
    
    
    
//     var workflow_state = frm.doc.workflow_state;
//             if (workflow_state === "Approved") {
//                 frm.toggle_display('proposal_no2', true);
//                 frm.toggle_display('proposal_no1', false);}
//                 else {
//                 // If workflow state is not "Approved", reverse the display
//                 frm.toggle_display('proposal_no1', true);
//                 frm.toggle_display('proposal_no2', false);
//             }
    
     
    
//             },
            
//     min_annual_premium: function(frm) {
//             var proposalNo = frm.doc.proposal_no1;
    
//             // Check if proposal number is provided
//             if (proposalNo) {
//                 frappe.call({
//                     method: 'frappe.client.get',
//                     args: {
//                         doctype: 'DCI Proposals',
//                         filters: {
//                             proposal_no: proposalNo
//                         }
//                     },
//                     callback: function(response) {
//                         if (response.message) {
//                             var proposal = response.message;
    
//                             // List of fields to synchronize
//                             var fieldsToSync = [
//                                 'agriculture',
//                                 'airconditioning',
//                                 'aluminium_boats',
//                                 'animal_vaccines',
//                                 'arts_crafts',
//                                 'batteries',
//                                 'building_materials',
//                                 'canning_cans',
//                                 'cellular',
//                                 'cereals',
//                                 'cigarettes',
//                                 'computer_electronic',
//                                 'concrete_products',
//                                 'corporate_clothing',
//                                 'cosmetics',
//                                 'couriers',
//                                 'engraving',
//                                 'fmcg',
//                                 'frozen_chicken',
//                                 'fuel',
//                                 'gas',
//                                 'hair_products',
//                                 'heavy_plant',
//                                 'invoice_factoring',
//                                 'leather_products',
//                                 'logistics',
//                                 'lubricants__fuel',
//                                 'meat_products',
//                                 'media__radio',
//                                 'merchandise',
//                                 'packaging_materials',
//                                 'perishable_goods',
//                                 'pharmaceuticals',
//                                 'plastic_and_spices',
//                                 'road_construction',
//                                 'salt',
//                                 'security_services',
//                                 'soda_ash',
//                                 '_diaries',
//                                 'steel_doors_window_farmes',
//                                 'steel_merchants',
//                                 'timber_products',
//                                 'travelling_bags',
//                                 'water_supplies'
//                             ];
//     // Synchronize fields from DCI Proposals to goods_services field in DCI Quotations
//     var goods_services = '';
    
//     fieldsToSync.forEach(function(fieldName) {
//         if (proposal[fieldName]) {
//             goods_services += fieldName + ', ';
//         }
//     });
    
//     // Remove trailing comma and space
//     goods_services = goods_services.slice(0, -2);
    
//     // Set the value of goods_services field in DCI Quotations
//     frm.set_value('goods_services', goods_services);
    
    
//                         }
//                     }
//                 });
//             }
//         },
        
        
        
    
        
        
        
//     status11: function(frm) {
//              var ProposalNo = frm.doc.proposal_no1;
    
//             // Check if client name is provided
//             if (ProposalNo) {
//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'DCI Proposals',
//                         filters: {
//                             proposal_no: ProposalNo
//                         },
//                         fields: [ // Place DCI Proposals fields here
//                             'name',
//                             'agriculture',
//                             'airconditioning',
//                             'aluminium_boats',
//                             'animal_vaccines',
//                             'arts_crafts',
//                             'batteries',
//                             'building_materials',
//                             'canning_cans',
//                             'cellular',
//                             'cereals',
//                             'cigarettes',
//                             'computer_electronic',
//                             'concrete_products',
//                             'corporate_clothing',
//                             'cosmetics',
//                             'couriers',
//                             'engraving',
//                             'fmcg',
//                             'frozen_chicken',
//                             'fuel',
//                             'gas',
//                             'hair_products',
//                             'heavy_plant',
//                             'invoice_factoring',
//                             'leather_products',
//                             'logistics',
//                             'lubricants__fuel',
//                             'meat_products',
//                             'media__radio', // Ensure this field is properly placed
//                             'merchandise',
//                             'packaging_materials',
//                             'perishable_goods',
//                             'pharmaceuticals',
//                             'plastic_and_spices',
//                             'road_construction',
//                             'salt',
//                             'security_services',
//                             'soda_ash',
//                             '_diaries',
//                             'steel_doors_window_farmes',
//                             'steel_merchants',
//                             'timber_products',
//                             'travelling_bags',
//                             'water_supplies'
//                         ]
//                     },
//                     callback: function(response) {
//                         if (!response.exc) {
//                             var proposals = response.message;
    
//                             if (proposals.length > 0) {
//                                 var proposal = proposals[0];
//                                 // Synchronize fields from ECI Proposal to ECI Quotations
//                                 frm.set_value("agriculture", proposal.agriculture ? 1 : 0);
//                                 frm.set_value("airconditioning", proposal.airconditioning ? 1 : 0);
//                                 frm.set_value("aluminium_boats", proposal.aluminium_boats ? 1 : 0);
//                                 frm.set_value("animal_vaccines", proposal.animal_vaccines ? 1 : 0);
//                                 frm.set_value("arts_crafts", proposal.arts_crafts ? 1 : 0);
//                                 frm.set_value("batteries", proposal.batteries ? 1 : 0);
//                                 frm.set_value("building_materials", proposal.building_materials ? 1 : 0);
//                                 frm.set_value("canning_cans", proposal.canning_cans ? 1 : 0);
//                                 frm.set_value("cellular", proposal.cellular ? 1 : 0);
//                                 frm.set_value("cereals", proposal.cereals ? 1 : 0);
//                                 frm.set_value("cigarettes", proposal.cigarettes ? 1 : 0);
//                                 frm.set_value("computer_electronic", proposal.computer_electronic ? 1 : 0);
//                                 frm.set_value("concrete_products", proposal.concrete_products ? 1 : 0);
//                                 frm.set_value("corporate_clothing", proposal.corporate_clothing ? 1 : 0);
//                                 frm.set_value("cosmetics", proposal.cosmetics ? 1 : 0);
//                                 frm.set_value("couriers", proposal.couriers ? 1 : 0);
//                                 frm.set_value("engraving", proposal.engraving ? 1 : 0);
//                                 frm.set_value("fmcg", proposal.fmcg ? 1 : 0);
//                                 frm.set_value("frozen_chicken", proposal.frozen_chicken ? 1 : 0);
//                                 frm.set_value("fuel", proposal.fuel ? 1 : 0);
//                                 frm.set_value("gas", proposal.gas ? 1 : 0);
//                                 frm.set_value("hair_products", proposal.hair_products ? 1 : 0);
//                                 frm.set_value("heavy_plant", proposal.heavy_plant ? 1 : 0);
//                                 frm.set_value("invoice_factoring", proposal.invoice_factoring ? 1 : 0);
//                                 frm.set_value("leather_products", proposal.leather_products ? 1 : 0);
//                                 frm.set_value("logistics", proposal.logistics ? 1 : 0);
//                                 frm.set_value("lubricants__fuel", proposal.lubricants__fuel ? 1 : 0);
//                                 frm.set_value("meat_products", proposal.meat_products ? 1 : 0);
//                                 frm.set_value("media__radio", proposal.media__radio ? 1 : 0); // Corrected field name
//                                 frm.set_value("merchandise", proposal.merchandise ? 1 : 0);
//                                 frm.set_value("packaging_materials", proposal.packaging_materials ? 1 : 0);
//                                 frm.set_value("perishable_goods", proposal.perishable_goods ? 1 : 0);
//                                 frm.set_value("pharmaceuticals", proposal.pharmaceuticals ? 1 : 0);
//                                 frm.set_value("plastic_and_spices", proposal.plastic_and_spices ? 1 : 0);
//                                 frm.set_value("road_construction", proposal.road_construction ? 1 : 0);
//                                 frm.set_value("salt", proposal.salt ? 1 : 0);
//                                 frm.set_value("security_services", proposal.security_services ? 1 : 0);
//                                 frm.set_value("soda_ash", proposal.soda_ash ? 1 : 0);
//                                 frm.set_value("_diaries", proposal._diaries ? 1 : 0);
//                                 frm.set_value("steel_doors_window_farmes", proposal.steel_doors_window_farmes ? 1 : 0);
//                                 frm.set_value("steel_merchants", proposal.steel_merchants ? 1 : 0);
//                                 frm.set_value("timber_products", proposal.timber_products ? 1 : 0);
//                                 frm.set_value("travelling_bags", proposal.travelling_bags ? 1 : 0);
//                                 frm.set_value("water_supplies", proposal.water_supplies ? 1 : 0);
                                
//                                 // Toggle display of fields based on checkbox values
//                                 frm.toggle_display("agriculture", proposal.agriculture ? 1 : 0);
//                                 frm.toggle_display("airconditioning", proposal.airconditioning ? 1 : 0);
//                                 frm.toggle_display("aluminium_boats", proposal.aluminium_boats ? 1 : 0);
//                                 frm.toggle_display("animal_vaccines", proposal.animal_vaccines ? 1 : 0);
//                                 frm.toggle_display("arts_crafts", proposal.arts_crafts ? 1 : 0);
//                                 frm.toggle_display("batteries", proposal.batteries ? 1 : 0);
//                                 frm.toggle_display("building_materials", proposal.building_materials ? 1 : 0);
//                                 frm.toggle_display("canning_cans", proposal.canning_cans ? 1 : 0);
//                                 frm.toggle_display("cellular", proposal.cellular ? 1 : 0);
//                                 frm.toggle_display("cereals", proposal.cereals ? 1 : 0);
//                                 frm.toggle_display("cigarettes", proposal.cigarettes ? 1 : 0);
//                                 frm.toggle_display("computer_electronic", proposal.computer_electronic ? 1 : 0);
//                                 frm.toggle_display("concrete_products", proposal.concrete_products ? 1 : 0);
//                                 frm.toggle_display("corporate_clothing", proposal.corporate_clothing ? 1 : 0);
//                                 frm.toggle_display("cosmetics", proposal.cosmetics ? 1 : 0);
//                                 frm.toggle_display("couriers", proposal.couriers ? 1 : 0);
//                                 frm.toggle_display("engraving", proposal.engraving ? 1 : 0);
//                                 frm.toggle_display("fmcg", proposal.fmcg ? 1 : 0);
//                                 frm.toggle_display("frozen_chicken", proposal.frozen_chicken ? 1 : 0);
//                                 frm.toggle_display("fuel", proposal.fuel ? 1 : 0);
//                                 frm.toggle_display("gas", proposal.gas ? 1 : 0);
//                                 frm.toggle_display("hair_products", proposal.hair_products ? 1 : 0);
//                                 frm.toggle_display("heavy_plant", proposal.heavy_plant ? 1 : 0);
//                                 frm.toggle_display("invoice_factoring", proposal.invoice_factoring ? 1 : 0);
//                                 frm.toggle_display("leather_products", proposal.leather_products ? 1 : 0);
//                                 frm.toggle_display("logistics", proposal.logistics ? 1 : 0);
//                                 frm.toggle_display("lubricants__fuel", proposal.lubricants__fuel ? 1 : 0);
//                                 frm.toggle_display("meat_products", proposal.meat_products ? 1 : 0);
//                                 frm.toggle_display("media__radio", proposal.media__radio ? 1 : 0); // Corrected field name
//                                 frm.toggle_display("merchandise", proposal.merchandise ? 1 : 0);
//                                 frm.toggle_display("packaging_materials", proposal.packaging_materials ? 1 : 0);
//                                 frm.toggle_display("perishable_goods", proposal.perishable_goods ? 1 : 0);
//                                 frm.toggle_display("pharmaceuticals", proposal.pharmaceuticals ? 1 : 0);
//                                 frm.toggle_display("plastic_and_spices", proposal.plastic_and_spices ? 1 : 0);
//                                 frm.toggle_display("road_construction", proposal.road_construction ? 1 : 0);
//                                 frm.toggle_display("salt", proposal.salt ? 1 : 0);
//                                 frm.toggle_display("security_services", proposal.security_services ? 1 : 0);
//                                 frm.toggle_display("soda_ash", proposal.soda_ash ? 1 : 0);
//                                 frm.toggle_display("_diaries", proposal._diaries ? 1 : 0);
//                                 frm.toggle_display("steel_doors_window_farmes", proposal.steel_doors_window_farmes ? 1 : 0);
//                                 frm.toggle_display("steel_merchants", proposal.steel_merchants ? 1 : 0);
//                                 frm.toggle_display("timber_products", proposal.timber_products ? 1 : 0);
//                                 frm.toggle_display("travelling_bags", proposal.travelling_bags ? 1 : 0);
//                                 frm.toggle_display("water_supplies", proposal.water_supplies ? 1 : 0);
//                             }
//                         } else {
//                             console.error("Error occurred in fetching data from ECI Proposal:", response.exc);
//                         }
//                     }
//                 });
//             }
//         },
    
        
//          calculate1: function(frm) {
//             calculateTurnover(frm);
    
//         },
    
        
        
//             calculate2(frm) {
//             calculateUpfrontDiscountOption1(frm);
//             calculateUpfrontDiscountOption2(frm);
//             calculateDiscountOfferedOption1(frm);
//             calculateDiscountOfferedOption2(frm);
//             calculateResultantPremiumIncomeOption1(frm);
//             calculateResultantPremiumIncomeOption2(frm);
//             calculateAllowableClaimPercentageOption1(frm);
//             calculateAllowableClaimPercentageOption2(frm);
//             calculatePremiumNetClaimsOption1(frm);
//             calculatePremiumNetClaimsOption2(frm);
//             calculateRetrospectiveDiscountOption1(frm);
//             calculateRetrospectiveDiscountOption2(frm);
//             calculateBECIProfitLossOption1(frm);
//             calculateBECIProfitLossOption2(frm);
//             calculateTotalDiscountOption1(frm);
//             calculateTotalDiscountOption2(frm);
//         },
    
        
        
        
//         });
    
//     function generateNumber(frm) {
//         // Check if the proposal number field is already populated
//         if (!frm.doc.schedule_no) {
//             // Get the current year
//             let currentYear = new Date().getFullYear();
//             let prefix = `DCQT/${currentYear}/`;
    
//             // Make a call to get the last number asynchronously
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'DCI Quotation',
//                     fields: ['schedule_no'],
//                     order_by: 'creation desc',
//                     limit: 1
//                 },
//                 callback: function(r) {
//                     if (r.message && r.message.length > 0) {
//                         let lastScheduleNo = r.message[0].schedule_no;
//                         let lastNumber = parseInt(lastScheduleNo.split("/").pop()); // Extract last part and parse it as integer
//                         if (!isNaN(lastNumber)) {
//                             // Increment the last number and pad it with leading zeros
//                             let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                             frm.set_value('schedule_no', prefix + newNumber);
//                         }
//                     } else {
//                         // If no previous numbers exist, set to default '0001'
//                         frm.set_value('schedule_no', prefix + '0001');
//                     }
//                 }
//             });
//         }
//     }
    
//     function openNewDocument(doctype, frm) {
//         var proposal_no = frm.doc.proposal_no1;
//         var client_name = frm.doc.client_name;
//         var schedule_no = frm.doc.schedule_no;
//         var to = frm.doc.client_name;
//         var policy_name = frm.doc.client_name;
//         var companyname = frm.doc.client_name;
//         frappe.new_doc(doctype, {
//             proposal_no: proposal_no,
//             client_name: client_name,
//             schedule_no: schedule_no,
//             to: client_name,
//             policy_name: client_name,
//             company: client_name,
//             proposal_nos: proposal_no,
//             policy_names: client_name,
//             proposal_no1: proposal_no,
//             company_name: client_name,
//             tos: client_name
//         });
//     }
    
    
    
    
    
    
//     function fetchProposalData(frm) {
//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'DCI Proposals',
//                 filters: { proposal_no: frm.doc.proposal_no1},
//                 fields: ["currentyear_turnover", "nextyear_turnover", "govtsales", "govtsales2", "total_debtors"]
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     var currentYearTurnover = parseFloat(r.message.currentyear_turnover) || 0;
//                     var nextYearTurnover = parseFloat(r.message.nextyear_turnover) || 0;
//                     var averageTurnover = (currentYearTurnover + nextYearTurnover) / 2;
    
//                     // Using frm.doc to set the field value
//                     frm.doc.expected_turnover = averageTurnover;
//                     frm.doc.expected_turnover_2 = averageTurnover;
    
//                     // Trigger a refresh to reflect the changes in the form UI
//                     frm.refresh_field('expected_turnover');
//                     frm.refresh_field('expected_turnover_2');
    
    
//                     var govtSales = parseFloat(r.message.govtsales) || 0;
//                     var cashSales = parseFloat(r.message.govtsales2) || 0;
//                     var averageSales = (govtSales + cashSales) / 2;
                    
//                     // Using frm.doc to set the field value
//                     frm.doc.estimated_govt_sales_plus_cash_sales = averageSales;
//                     frm.doc.estimated_govt_sales__plus_cash_sales = averageSales;
    
//                     // Trigger a refresh to reflect the changes in the form UI
//                     frm.refresh_field('estimated_govt_sales_plus_cash_sales');
//                     frm.refresh_field('estimated_govt_sales__plus_cash_sales');
    
//                     // Using jQuery to set the field value
//                     // $('input[data-fieldname="estimated_govt_sales_plus_cash_sales"]').val(averageSales).trigger('change');
    
//                     // var totalDebtors = parseFloat(r.message.total_debtors) || 0;
//                     // // Using frm.doc to set the field value
//                     // frm.doc.total_no_of_debtors = totalDebtors;
//                     // // Trigger a refresh to reflect the changes in the form UI
//                     // frm.refresh_field('total_no_of_debtors');
//                 }
//             }
//         });
//     }
    
    
    
    
    
    
//     function calculateTurnover(frm) {
//         var expectedTurnover = frm.doc.expected_turnover;
//         var estimatedGovtSalesPlusCashSales = frm.doc.estimated_govt_sales_plus_cash_sales;
//         var possibleDeclines = frm.doc.possible_declines_as_;
        
//         // Correcting the formula for 'ofTheTurnover'
//         var ofTheTurnover = (expectedTurnover -estimatedGovtSalesPlusCashSales) * possibleDeclines/ 100;
//         frm.set_value('of_the_turnover', ofTheTurnover);
        
//         // Correcting the formula for 'expectedInsuredTurnover'
//         var expectedInsuredTurnover = expectedTurnover - estimatedGovtSalesPlusCashSales;
//         frm.set_value('expected_insured_turnover', expectedInsuredTurnover);
//         frm.set_value('expected_insured_turnover_2', expectedInsuredTurnover);
    
//         var avgbaddebts = frm.doc.average_bad_debts;
        
//         // Calculating 'debtorsDifference' and 'breakEvenPoint'
//         var debtorsDifference = frm.doc.total_no_of_debtors - frm.doc.buyers_excluded;
//         var breakEvenPoint = debtorsDifference * frm.doc.admin_cost_per_buyer;
//         frm.set_value('break_evenpoint', breakEvenPoint);
    
//         // Calculate expected_annual_premium based on insured_turnover
//         var insuredTurnover = frm.doc.insured_turnover || 0; // Handle case when insured_turnover is not defined
//         var premiumRate = frm.doc.premium_rate; // Assuming premium_rate is defined somewhere
    
//         var expectedAnnualPremium;
//         if (insuredTurnover === 0) {
//             expectedAnnualPremium = premiumRate * expectedInsuredTurnover / 100;
//         } else {
//             expectedAnnualPremium = premiumRate * insuredTurnover / 100;
//         }
    
//         var premiumDeposit;
//         if (expectedAnnualPremium >= 0) {
//             premiumDeposit = expectedAnnualPremium;
//         } else {
//             premiumDeposit = 0;
//         }
    
//         frm.set_value('premium_deposit', premiumDeposit);
//         frm.set_value('expected_annual_premium', expectedAnnualPremium);
//         frm.set_value('expected_premium_income', expectedAnnualPremium);
//         frm.set_value('expected_profitloss_on_account', expectedAnnualPremium);
    
//         // Calculate maxvalue and maxliability
//         var maxvalue = expectedAnnualPremium * 25;
//         var maxliability = maxvalue;
//         frm.set_value('maximum_liability', maxliability);
    
//         // Call to calculateLossRatio (assuming this function exists and is defined elsewhere)
//             calculateTotalCreditSaleCost(frm);
    
//     }
    
    
    
    
    
    
//     function calculateTotalCreditSaleCost(frm) {
//         var totalCreditSaleCost = frm.doc.break_evenpoint + frm.doc.average_bad_debts;
//         frm.set_value('total_credit_sale_cost', totalCreditSaleCost);
//         console.log('total');
    
//         var expectedInsuredTurnover = frm.doc.expected_insured_turnover;
//         if (expectedInsuredTurnover !== 0) {
//             var costRatio = (totalCreditSaleCost / expectedInsuredTurnover) * 100;
//             frm.set_value('cost_ratio', costRatio);
//         }
//         calculateMinAnnualPremium(frm);
//     }
    
    
    
    
    
//     function calculateMinAnnualPremium(frm) {
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Premium',
//                 fields: ['min_premium']
//             },
//             callback: function(response) {
//                 if (response && response.message && response.message.length > 0) {
//                     var minPremium = response.message[0].min_premium || 0;
//                     frm.set_value('min_annual_premium', minPremium);
//                 }
//             },
//             error: function(err) {
//                 console.log("Error in calculating minimum annual premium:", err);
//             }
//         });
//     }
    
    
    
    
//     // Function to calculate upfront discount for Option 1
//     function calculateUpfrontDiscountOption1(frm) {
//         let upfront_discount = parseFloat(frm.doc.upfront_discount);
//         let proposed_prem_rate_after_discount = frm.doc.premium_rate - (frm.doc.premium_rate * upfront_discount / 100);
//         frm.set_value('proposed_prem_rate_after_discount', proposed_prem_rate_after_discount.toFixed(2));
//     }
    
//     // Function to calculate upfront discount for Option 2
//     function calculateUpfrontDiscountOption2(frm) {
//         let upfront_discount_ = parseFloat(frm.doc.upfront_discount2);
//         let proposed_prem_rate_after_discount_ = frm.doc.premium_rate - (frm.doc.premium_rate * upfront_discount_ / 100);
//         frm.set_value('proposed_prem_rate_after_discount2', proposed_prem_rate_after_discount_.toFixed(2));
//     }
    
//     // Function to calculate discount offered for Option 1
//     function calculateDiscountOfferedOption1(frm) {
//         let discount_offered = frm.doc.expected_prem_at_std * (frm.doc.upfront_discount / 100);
//         frm.set_value('discount_offered', discount_offered.toFixed(2));
//     }
    
//     // Function to calculate discount offered for Option 2
//     function calculateDiscountOfferedOption2(frm) {
//         let discount_offered_ = frm.doc.expected_prem_at_std2 * (frm.doc.upfront_discount2 / 100);
//         frm.set_value('discount_offered2', discount_offered_.toFixed(2));
//     }
    
//     // Function to calculate resultant premium income for Option 1
//     function calculateResultantPremiumIncomeOption1(frm) {
//         let resultant_prem_income = frm.doc.expected_prem_at_std - frm.doc.discount_offered;
//         frm.set_value('resultant_prem_income', resultant_prem_income.toFixed(2));
//     }
    
//     // Function to calculate resultant premium income for Option 2
//     function calculateResultantPremiumIncomeOption2(frm) {
//         let resultant_prem_income_ = frm.doc.expected_prem_at_std2 - frm.doc.discount_offered2;
//         frm.set_value('resultant_prem_income2', resultant_prem_income_.toFixed(2));
//     }
    
//     // Function to calculate allowable claim percentage for Option 1
//     function calculateAllowableClaimPercentageOption1(frm) {
//         let of_premium_received = frm.doc.resultant_prem_income * (frm.doc.allowable_claim_value / 100);
//         frm.set_value('of_premium_received', of_premium_received.toFixed(2));
//     }
    
//     // Function to calculate allowable claim percentage for Option 2
//     function calculateAllowableClaimPercentageOption2(frm) {
//         let of_premium_received_ = frm.doc.resultant_prem_income2 * (frm.doc.allowable_claim_value2 / 100);
//         frm.set_value('of_premium_received2', of_premium_received_.toFixed(2));
//     }
    
//     // Function to calculate premium net claims for Option 1
//     function calculatePremiumNetClaimsOption1(frm) {
//         let premreceived_net_of_claims = frm.doc.resultant_prem_income - frm.doc.of_premium_received;
//         frm.set_value('premreceived_net_of_claims', premreceived_net_of_claims.toFixed(2));
//     }
    
//     // Function to calculate premium net claims for Option 2
//     function calculatePremiumNetClaimsOption2(frm) {
//         let premreceived_net_of_claims_ = frm.doc.resultant_prem_income2 - frm.doc.of_premium_received2;
//         frm.set_value('premreceived_net_of_claims2', premreceived_net_of_claims_.toFixed(2));
//     }
    
//     // Function to calculate retrospective discount for Option 1
//     function calculateRetrospectiveDiscountOption1(frm) {
//         let _net_premium_received = (frm.doc.premreceived_net_of_claims * frm.doc.retrospective_discount) / 100;
//         frm.set_value('_net_premium_received', _net_premium_received.toFixed(2));
//     }
    
//     // Function to calculate retrospective discount for Option 2
//     function calculateRetrospectiveDiscountOption2(frm) {
//         let _net_premium_received_ = (frm.doc.premreceived_net_of_claims2 * frm.doc.retrospective_discount2) / 100;
//         frm.set_value('_net_premium_received2', _net_premium_received_.toFixed(2));
//     }
    
//     // Function to calculate BECI profit loss for Option 1
//     function calculateBECIProfitLossOption1(frm) {
//         let beci_profitloss_on_account = frm.doc.premreceived_net_of_claims - frm.doc._net_premium_received;
//         frm.set_value('beci_profitloss_on_account', beci_profitloss_on_account.toFixed(2));
//     }
    
//     // Function to calculate BECI profit loss for Option 2
//     function calculateBECIProfitLossOption2(frm) {
//         let beci_profitloss_on_account_ = frm.doc.premreceived_net_of_claims2 - frm.doc._net_premium_received2;
//         frm.set_value('beci_profitloss_on_account_', beci_profitloss_on_account_.toFixed(2));
//     }
    
//     // Function to calculate total discount given for Option 1
//     function calculateTotalDiscountOption1(frm) {
//         let total_discount_given = parseFloat(frm.doc.discount_offered) + parseFloat(frm.doc.allowable_claim_value) + parseFloat(frm.doc._net_premium_received);
//         frm.set_value('total_discount_given', total_discount_given.toFixed(2));
//     }
    
//     // Function to calculate total discount given for Option 2
//     function calculateTotalDiscountOption2(frm) {
//         let total_discount_givens = parseFloat(frm.doc.discount_offered2) + parseFloat(frm.doc.allowable_claim_value2) + parseFloat(frm.doc._net_premium_received2);
//         frm.set_value('total_discount_given2', total_discount_givens.toFixed(2));
//     }
    
    
    
    
    
    
    
    
    
        
        
    
    
    
    
    
    
    
    // function fetchProposalData(frm) {
    //     frappe.call({
    //         method: 'frappe.client.get',
    //         args: {
    //             doctype: 'DCI Proposals',
    //             filters: { proposal_no: frm.doc.proposal_no1},
    //             fields: ["currentyear_turnover", "nextyear_turnover", "govtsales", "govtsales2", "total_debtors"]
    //         },
    //         callback: function(r) {
    //             if (r.message) {
    //                 var currentYearTurnover = parseFloat(r.message.currentyear_turnover) || 0;
    //                 var nextYearTurnover = parseFloat(r.message.nextyear_turnover) || 0;
    //                 var averageTurnover = (currentYearTurnover + nextYearTurnover) / 2;
    
    //                 // Using frm.doc to set the field value
    //                 frm.doc.expected_turnover = averageTurnover;
    //                 frm.doc.expected_turnover_2 = averageTurnover;
    
    //                 // Trigger a refresh to reflect the changes in the form UI
    //                 frm.refresh_field('expected_turnover');
    //                 frm.refresh_field('expected_turnover_2');
    
    
    //                 var govtSales = parseFloat(r.message.govtsales) || 0;
    //                 var cashSales = parseFloat(r.message.govtsales2) || 0;
    //                 var averageSales = (govtSales + cashSales) / 2;
                    
    //                 // Using frm.doc to set the field value
    //                 frm.doc.estimated_govt_sales_plus_cash_sales = averageSales;
    //                 frm.doc.estimated_govt_sales__plus_cash_sales = averageSales;
    
    //                 // Trigger a refresh to reflect the changes in the form UI
    //                 frm.refresh_field('estimated_govt_sales_plus_cash_sales');
    //                 frm.refresh_field('estimated_govt_sales__plus_cash_sales');
    
    //                 // Using jQuery to set the field value
    //                 // $('input[data-fieldname="estimated_govt_sales_plus_cash_sales"]').val(averageSales).trigger('change');
    
    //                 // var totalDebtors = parseFloat(r.message.total_debtors) || 0;
    //                 // // Using frm.doc to set the field value
    //                 // frm.doc.total_no_of_debtors = totalDebtors;
    //                 // // Trigger a refresh to reflect the changes in the form UI
    //                 // frm.refresh_field('total_no_of_debtors');
    //             }
    //         }
    //     });
    // }
    
    
    
    
    
    
    // function calculateTurnover(frm) {
    //     var expectedTurnover = frm.doc.expected_turnover;
    //     var estimatedGovtSalesPlusCashSales = frm.doc.estimated_govt_sales_plus_cash_sales;
    //     var possibleDeclines = frm.doc.possible_declines_as_;
        
    //     // Correcting the formula for 'ofTheTurnover'
    //     var ofTheTurnover = (expectedTurnover -estimatedGovtSalesPlusCashSales) * possibleDeclines/ 100;
    //     frm.set_value('of_the_turnover', ofTheTurnover);
        
    //     // Correcting the formula for 'expectedInsuredTurnover'
    //     var expectedInsuredTurnover = expectedTurnover - estimatedGovtSalesPlusCashSales;
    //     frm.set_value('expected_insured_turnover', expectedInsuredTurnover);
    //     frm.set_value('expected_insured_turnover_2', expectedInsuredTurnover);
    
    //     var avgbaddebts = frm.doc.average_bad_debts;
        
    //     // Calculating 'debtorsDifference' and 'breakEvenPoint'
    //     var debtorsDifference = frm.doc.total_no_of_debtors - frm.doc.buyers_excluded;
    //     var breakEvenPoint = debtorsDifference * frm.doc.admin_cost_per_buyer;
    //     frm.set_value('break_evenpoint', breakEvenPoint);
    
    //     // Calculate expected_annual_premium based on insured_turnover
    //     var insuredTurnover = frm.doc.insured_turnover || 0; // Handle case when insured_turnover is not defined
    //     var premiumRate = frm.doc.premium_rate; // Assuming premium_rate is defined somewhere
    
    //     var expectedAnnualPremium;
    //     if (insuredTurnover === 0) {
    //         expectedAnnualPremium = premiumRate * expectedInsuredTurnover / 100;
    //     } else {
    //         expectedAnnualPremium = premiumRate * insuredTurnover / 100;
    //     }
    
    //     var premiumDeposit;
    //     if (expectedAnnualPremium >= 0) {
    //         premiumDeposit = expectedAnnualPremium;
    //     } else {
    //         premiumDeposit = 0;
    //     }
    
    //     frm.set_value('premium_deposit', premiumDeposit);
    //     frm.set_value('expected_annual_premium', expectedAnnualPremium);
    //     frm.set_value('expected_premium_income', expectedAnnualPremium);
    //     frm.set_value('expected_profitloss_on_account', expectedAnnualPremium);
    
    //     // Calculate maxvalue and maxliability
    //     var maxvalue = expectedAnnualPremium * 25;
    //     var maxliability = maxvalue;
    //     frm.set_value('maximum_liability', maxliability);
    
    //     // Call to calculateLossRatio (assuming this function exists and is defined elsewhere)
    //         calculateTotalCreditSaleCost(frm);
    
    // }
    
    
    
    
    
    
    // function calculateTotalCreditSaleCost(frm) {
    //     var totalCreditSaleCost = frm.doc.break_evenpoint + frm.doc.average_bad_debts;
    //     frm.set_value('total_credit_sale_cost', totalCreditSaleCost);
    //     console.log('total');
    
    //     var expectedInsuredTurnover = frm.doc.expected_insured_turnover;
    //     if (expectedInsuredTurnover !== 0) {
    //         var costRatio = (totalCreditSaleCost / expectedInsuredTurnover) * 100;
    //         frm.set_value('cost_ratio', costRatio);
    //     }
    //     calculateMinAnnualPremium(frm);
    // }
    
    
    
    
    
    // function calculateMinAnnualPremium(frm) {
    //     frappe.call({
    //         method: 'frappe.client.get_list',
    //         args: {
    //             doctype: 'Premium',
    //             fields: ['min_premium']
    //         },
    //         callback: function(response) {
    //             if (response && response.message && response.message.length > 0) {
    //                 var minPremium = response.message[0].min_premium || 0;
    //                 frm.set_value('min_annual_premium', minPremium);
    //             }
    //         },
    //         error: function(err) {
    //             console.log("Error in calculating minimum annual premium:", err);
    //         }
    //     });
    // }
    
    
    
    
    // Function to calculate upfront discount for Option 1
    // function calculateUpfrontDiscountOption1(frm) {
    //     let upfront_discount = parseFloat(frm.doc.upfront_discount);
    //     let proposed_prem_rate_after_discount = frm.doc.premium_rate - (frm.doc.premium_rate * upfront_discount / 100);
    //     frm.set_value('proposed_prem_rate_after_discount', proposed_prem_rate_after_discount.toFixed(2));
    // }
    
    // Function to calculate upfront discount for Option 2
    // function calculateUpfrontDiscountOption2(frm) {
    //     let upfront_discount_ = parseFloat(frm.doc.upfront_discount2);
    //     let proposed_prem_rate_after_discount_ = frm.doc.premium_rate - (frm.doc.premium_rate * upfront_discount_ / 100);
    //     frm.set_value('proposed_prem_rate_after_discount2', proposed_prem_rate_after_discount_.toFixed(2));
    // }
    
    // Function to calculate discount offered for Option 1
    // function calculateDiscountOfferedOption1(frm) {
    //     let discount_offered = frm.doc.expected_prem_at_std * (frm.doc.upfront_discount / 100);
    //     frm.set_value('discount_offered', discount_offered.toFixed(2));
    // }
    
    // Function to calculate discount offered for Option 2
    // function calculateDiscountOfferedOption2(frm) {
    //     let discount_offered_ = frm.doc.expected_prem_at_std2 * (frm.doc.upfront_discount2 / 100);
    //     frm.set_value('discount_offered2', discount_offered_.toFixed(2));
    // }
    
    // Function to calculate resultant premium income for Option 1
    // function calculateResultantPremiumIncomeOption1(frm) {
    //     let resultant_prem_income = frm.doc.expected_prem_at_std - frm.doc.discount_offered;
    //     frm.set_value('resultant_prem_income', resultant_prem_income.toFixed(2));
    // }
    
    // Function to calculate resultant premium income for Option 2
    // function calculateResultantPremiumIncomeOption2(frm) {
    //     let resultant_prem_income_ = frm.doc.expected_prem_at_std2 - frm.doc.discount_offered2;
    //     frm.set_value('resultant_prem_income2', resultant_prem_income_.toFixed(2));
    // }
    
    // Function to calculate allowable claim percentage for Option 1
    // function calculateAllowableClaimPercentageOption1(frm) {
    //     let of_premium_received = frm.doc.resultant_prem_income * (frm.doc.allowable_claim_value / 100);
    //     frm.set_value('of_premium_received', of_premium_received.toFixed(2));
    // }
    
    // Function to calculate allowable claim percentage for Option 2
    // function calculateAllowableClaimPercentageOption2(frm) {
    //     let of_premium_received_ = frm.doc.resultant_prem_income2 * (frm.doc.allowable_claim_value2 / 100);
    //     frm.set_value('of_premium_received2', of_premium_received_.toFixed(2));
    // }
    
    // Function to calculate premium net claims for Option 1
    // function calculatePremiumNetClaimsOption1(frm) {
    //     let premreceived_net_of_claims = frm.doc.resultant_prem_income - frm.doc.of_premium_received;
    //     frm.set_value('premreceived_net_of_claims', premreceived_net_of_claims.toFixed(2));
    // }
    
    // Function to calculate premium net claims for Option 2
    // function calculatePremiumNetClaimsOption2(frm) {
    //     let premreceived_net_of_claims_ = frm.doc.resultant_prem_income2 - frm.doc.of_premium_received2;
    //     frm.set_value('premreceived_net_of_claims2', premreceived_net_of_claims_.toFixed(2));
    // }
    
    // Function to calculate retrospective discount for Option 1
    // function calculateRetrospectiveDiscountOption1(frm) {
    //     let _net_premium_received = (frm.doc.premreceived_net_of_claims * frm.doc.retrospective_discount) / 100;
    //     frm.set_value('_net_premium_received', _net_premium_received.toFixed(2));
    // }
    
    // Function to calculate retrospective discount for Option 2
    // function calculateRetrospectiveDiscountOption2(frm) {
    //     let _net_premium_received_ = (frm.doc.premreceived_net_of_claims2 * frm.doc.retrospective_discount2) / 100;
    //     frm.set_value('_net_premium_received2', _net_premium_received_.toFixed(2));
    // }
    
    // Function to calculate BECI profit loss for Option 1
    // function calculateBECIProfitLossOption1(frm) {
    //     let beci_profitloss_on_account = frm.doc.premreceived_net_of_claims - frm.doc._net_premium_received;
    //     frm.set_value('beci_profitloss_on_account', beci_profitloss_on_account.toFixed(2));
    // }
    
    // Function to calculate BECI profit loss for Option 2
    // function calculateBECIProfitLossOption2(frm) {
    //     let beci_profitloss_on_account_ = frm.doc.premreceived_net_of_claims2 - frm.doc._net_premium_received2;
    //     frm.set_value('beci_profitloss_on_account_', beci_profitloss_on_account_.toFixed(2));
    // }
    
    // Function to calculate total discount given for Option 1
    // function calculateTotalDiscountOption1(frm) {
    //     let total_discount_given = parseFloat(frm.doc.discount_offered) + parseFloat(frm.doc.allowable_claim_value) + parseFloat(frm.doc._net_premium_received);
    //     frm.set_value('total_discount_given', total_discount_given.toFixed(2));
    // }
    
    // Function to calculate total discount given for Option 2
    // function calculateTotalDiscountOption2(frm) {
    //     let total_discount_givens = parseFloat(frm.doc.discount_offered2) + parseFloat(frm.doc.allowable_claim_value2) + parseFloat(frm.doc._net_premium_received2);
    //     frm.set_value('total_discount_given2', total_discount_givens.toFixed(2));
    // }
    
    
    
    
    
    
    
    
    
        
        
    
    
    
    
    
    
    // function fetchProposalData(frm) {
    //     frappe.call({
    //         method: 'frappe.client.get',
    //         args: {
    //             doctype: 'DCI Proposals',
    //             filters: { proposal_no: frm.doc.proposal_no1},
    //             fields: ["currentyear_turnover", "nextyear_turnover", "govtsales", "govtsales2", "total_debtors"]
    //         },
    //         callback: function(r) {
    //             if (r.message) {
    //                 var currentYearTurnover = parseFloat(r.message.currentyear_turnover) || 0;
    //                 var nextYearTurnover = parseFloat(r.message.nextyear_turnover) || 0;
    //                 var averageTurnover = (currentYearTurnover + nextYearTurnover) / 2;
    
    //                 // Using frm.doc to set the field value
    //                 frm.doc.expected_turnover = averageTurnover;
    //                 frm.doc.expected_turnover_2 = averageTurnover;
    
    //                 // Trigger a refresh to reflect the changes in the form UI
    //                 frm.refresh_field('expected_turnover');
    //                 frm.refresh_field('expected_turnover_2');
    
    
    //                 var govtSales = parseFloat(r.message.govtsales) || 0;
    //                 var cashSales = parseFloat(r.message.govtsales2) || 0;
    //                 var averageSales = (govtSales + cashSales) / 2;
                    
    //                 // Using frm.doc to set the field value
    //                 frm.doc.estimated_govt_sales_plus_cash_sales = averageSales;
    //                 frm.doc.estimated_govt_sales__plus_cash_sales = averageSales;
    
    //                 // Trigger a refresh to reflect the changes in the form UI
    //                 frm.refresh_field('estimated_govt_sales_plus_cash_sales');
    //                 frm.refresh_field('estimated_govt_sales__plus_cash_sales');
    
    //                 // Using jQuery to set the field value
    //                 // $('input[data-fieldname="estimated_govt_sales_plus_cash_sales"]').val(averageSales).trigger('change');
    
    //                 // var totalDebtors = parseFloat(r.message.total_debtors) || 0;
    //                 // // Using frm.doc to set the field value
    //                 // frm.doc.total_no_of_debtors = totalDebtors;
    //                 // // Trigger a refresh to reflect the changes in the form UI
    //                 // frm.refresh_field('total_no_of_debtors');
    //             }
    //         }
    //     });
    // }
    
    
    
    
    
    
    // function calculateTurnover(frm) {
    //     var expectedTurnover = frm.doc.expected_turnover;
    //     var estimatedGovtSalesPlusCashSales = frm.doc.estimated_govt_sales_plus_cash_sales;
    //     var possibleDeclines = frm.doc.possible_declines_as_;
        
    //     // Correcting the formula for 'ofTheTurnover'
    //     var ofTheTurnover = (expectedTurnover -estimatedGovtSalesPlusCashSales) * possibleDeclines/ 100;
    //     frm.set_value('of_the_turnover', ofTheTurnover);
        
    //     // Correcting the formula for 'expectedInsuredTurnover'
    //     var expectedInsuredTurnover = expectedTurnover - estimatedGovtSalesPlusCashSales;
    //     frm.set_value('expected_insured_turnover', expectedInsuredTurnover);
    //     frm.set_value('expected_insured_turnover_2', expectedInsuredTurnover);
    
    //     var avgbaddebts = frm.doc.average_bad_debts;
        
    //     // Calculating 'debtorsDifference' and 'breakEvenPoint'
    //     var debtorsDifference = frm.doc.total_no_of_debtors - frm.doc.buyers_excluded;
    //     var breakEvenPoint = debtorsDifference * frm.doc.admin_cost_per_buyer;
    //     frm.set_value('break_evenpoint', breakEvenPoint);
    
    //     // Calculate expected_annual_premium based on insured_turnover
    //     var insuredTurnover = frm.doc.insured_turnover || 0; // Handle case when insured_turnover is not defined
    //     var premiumRate = frm.doc.premium_rate; // Assuming premium_rate is defined somewhere
    
    //     var expectedAnnualPremium;
    //     if (insuredTurnover === 0) {
    //         expectedAnnualPremium = premiumRate * expectedInsuredTurnover / 100;
    //     } else {
    //         expectedAnnualPremium = premiumRate * insuredTurnover / 100;
    //     }
    
    //     var premiumDeposit;
    //     if (expectedAnnualPremium >= 0) {
    //         premiumDeposit = expectedAnnualPremium;
    //     } else {
    //         premiumDeposit = 0;
    //     }
    
    //     frm.set_value('premium_deposit', premiumDeposit);
    //     frm.set_value('expected_annual_premium', expectedAnnualPremium);
    //     frm.set_value('expected_premium_income', expectedAnnualPremium);
    //     frm.set_value('expected_profitloss_on_account', expectedAnnualPremium);
    
    //     // Calculate maxvalue and maxliability
    //     var maxvalue = expectedAnnualPremium * 25;
    //     var maxliability = maxvalue;
    //     frm.set_value('maximum_liability', maxliability);
    
    //     // Call to calculateLossRatio (assuming this function exists and is defined elsewhere)
    //         calculateTotalCreditSaleCost(frm);
    
    // }
    
    
    
    
    
    
    // function calculateTotalCreditSaleCost(frm) {
    //     var totalCreditSaleCost = frm.doc.break_evenpoint + frm.doc.average_bad_debts;
    //     frm.set_value('total_credit_sale_cost', totalCreditSaleCost);
    //     console.log('total');
    
    //     var expectedInsuredTurnover = frm.doc.expected_insured_turnover;
    //     if (expectedInsuredTurnover !== 0) {
    //         var costRatio = (totalCreditSaleCost / expectedInsuredTurnover) * 100;
    //         frm.set_value('cost_ratio', costRatio);
    //     }
    //     calculateMinAnnualPremium(frm);
    // }
    
    
    
    
    
    // function calculateMinAnnualPremium(frm) {
    //     frappe.call({
    //         method: 'frappe.client.get_list',
    //         args: {
    //             doctype: 'Premium',
    //             fields: ['min_premium']
    //         },
    //         callback: function(response) {
    //             if (response && response.message && response.message.length > 0) {
    //                 var minPremium = response.message[0].min_premium || 0;
    //                 frm.set_value('min_annual_premium', minPremium);
    //             }
    //         },
    //         error: function(err) {
    //             console.log("Error in calculating minimum annual premium:", err);
    //         }
    //     });
    // }
    
    
    
    
    // Function to calculate upfront discount for Option 1
    // function calculateUpfrontDiscountOption1(frm) {
    //     let upfront_discount = parseFloat(frm.doc.upfront_discount);
    //     let proposed_prem_rate_after_discount = frm.doc.premium_rate - (frm.doc.premium_rate * upfront_discount / 100);
    //     frm.set_value('proposed_prem_rate_after_discount', proposed_prem_rate_after_discount.toFixed(2));
    // }
    
    // Function to calculate upfront discount for Option 2
    // function calculateUpfrontDiscountOption2(frm) {
    //     let upfront_discount_ = parseFloat(frm.doc.upfront_discount2);
    //     let proposed_prem_rate_after_discount_ = frm.doc.premium_rate - (frm.doc.premium_rate * upfront_discount_ / 100);
    //     frm.set_value('proposed_prem_rate_after_discount2', proposed_prem_rate_after_discount_.toFixed(2));
    // }
    
    // Function to calculate discount offered for Option 1
    // function calculateDiscountOfferedOption1(frm) {
    //     let discount_offered = frm.doc.expected_prem_at_std * (frm.doc.upfront_discount / 100);
    //     frm.set_value('discount_offered', discount_offered.toFixed(2));
    // }
    
    // Function to calculate discount offered for Option 2
    // function calculateDiscountOfferedOption2(frm) {
    //     let discount_offered_ = frm.doc.expected_prem_at_std2 * (frm.doc.upfront_discount2 / 100);
    //     frm.set_value('discount_offered2', discount_offered_.toFixed(2));
    // }
    
    // Function to calculate resultant premium income for Option 1
    // function calculateResultantPremiumIncomeOption1(frm) {
    //     let resultant_prem_income = frm.doc.expected_prem_at_std - frm.doc.discount_offered;
    //     frm.set_value('resultant_prem_income', resultant_prem_income.toFixed(2));
    // }
    
    // Function to calculate resultant premium income for Option 2
    // function calculateResultantPremiumIncomeOption2(frm) {
    //     let resultant_prem_income_ = frm.doc.expected_prem_at_std2 - frm.doc.discount_offered2;
    //     frm.set_value('resultant_prem_income2', resultant_prem_income_.toFixed(2));
    // }
    
    // Function to calculate allowable claim percentage for Option 1
    // function calculateAllowableClaimPercentageOption1(frm) {
    //     let of_premium_received = frm.doc.resultant_prem_income * (frm.doc.allowable_claim_value / 100);
    //     frm.set_value('of_premium_received', of_premium_received.toFixed(2));
    // }
    
    // Function to calculate allowable claim percentage for Option 2
    // function calculateAllowableClaimPercentageOption2(frm) {
    //     let of_premium_received_ = frm.doc.resultant_prem_income2 * (frm.doc.allowable_claim_value2 / 100);
    //     frm.set_value('of_premium_received2', of_premium_received_.toFixed(2));
    // }
    
    // Function to calculate premium net claims for Option 1
    // function calculatePremiumNetClaimsOption1(frm) {
    //     let premreceived_net_of_claims = frm.doc.resultant_prem_income - frm.doc.of_premium_received;
    //     frm.set_value('premreceived_net_of_claims', premreceived_net_of_claims.toFixed(2));
    // }
    
    // Function to calculate premium net claims for Option 2
    // function calculatePremiumNetClaimsOption2(frm) {
    //     let premreceived_net_of_claims_ = frm.doc.resultant_prem_income2 - frm.doc.of_premium_received2;
    //     frm.set_value('premreceived_net_of_claims2', premreceived_net_of_claims_.toFixed(2));
    // }
    
    // Function to calculate retrospective discount for Option 1
    // function calculateRetrospectiveDiscountOption1(frm) {
    //     let _net_premium_received = (frm.doc.premreceived_net_of_claims * frm.doc.retrospective_discount) / 100;
    //     frm.set_value('_net_premium_received', _net_premium_received.toFixed(2));
    // }
    
    // Function to calculate retrospective discount for Option 2
    // function calculateRetrospectiveDiscountOption2(frm) {
    //     let _net_premium_received_ = (frm.doc.premreceived_net_of_claims2 * frm.doc.retrospective_discount2) / 100;
    //     frm.set_value('_net_premium_received2', _net_premium_received_.toFixed(2));
    // }
    
    // Function to calculate BECI profit loss for Option 1
    // function calculateBECIProfitLossOption1(frm) {
    //     let beci_profitloss_on_account = frm.doc.premreceived_net_of_claims - frm.doc._net_premium_received;
    //     frm.set_value('beci_profitloss_on_account', beci_profitloss_on_account.toFixed(2));
    // }
    
    // Function to calculate BECI profit loss for Option 2
    // function calculateBECIProfitLossOption2(frm) {
    //     let beci_profitloss_on_account_ = frm.doc.premreceived_net_of_claims2 - frm.doc._net_premium_received2;
    //     frm.set_value('beci_profitloss_on_account_', beci_profitloss_on_account_.toFixed(2));
    // }
    
    // Function to calculate total discount given for Option 1
    // function calculateTotalDiscountOption1(frm) {
    //     let total_discount_given = parseFloat(frm.doc.discount_offered) + parseFloat(frm.doc.allowable_claim_value) + parseFloat(frm.doc._net_premium_received);
    //     frm.set_value('total_discount_given', total_discount_given.toFixed(2));
    // }
    
    // Function to calculate total discount given for Option 2
    // function calculateTotalDiscountOption2(frm) {
    //     let total_discount_givens = parseFloat(frm.doc.discount_offered2) + parseFloat(frm.doc.allowable_claim_value2) + parseFloat(frm.doc._net_premium_received2);
    //     frm.set_value('total_discount_given2', total_discount_givens.toFixed(2));
    // }
    
    
    
    
    
    
    
    
    
        
        
    