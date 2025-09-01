// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('ECI Quotations', {
    
     
//     refresh: function(frm) {
        
//         //integer fields 
        
// frm.fields_dict.commercial_pre_rate.$input.css("text-align", "right");

// frm.fields_dict.premium_rate.$input.css("text-align", "right");

// frm.fields_dict.commercial_premium_amt_p.$input.css("text-align", "right");

// frm.fields_dict.political_pre_rate.$input.css("text-align", "right");

// frm.fields_dict.turnover__p.$input.css("text-align", "right");

// frm.fields_dict.political_premium_amt.$input.css("text-align", "right");

// frm.fields_dict.total_pre_amt.$input.css("text-align", "right");

// frm.fields_dict.com_pre_amt.$input.css("text-align", "right");

// frm.fields_dict.pol_pre_amt.$input.css("text-align", "right");

// frm.fields_dict.amt.$input.css("text-align", "right");

// frm.fields_dict.individual_first_lossp.$input.css("text-align", "right");

// frm.fields_dict.min_premium_depositp.$input.css("text-align", "right");

// frm.fields_dict.limit_of_descrition.$input.css("text-align", "right");

// frm.fields_dict.franchise_lossp.$input.css("text-align", "right");

// frm.fields_dict.insured_commercial_risks_for_all_insured_companies.$input.css("text-align", "right");

// frm.fields_dict.commercial.$input.css("text-align", "right");

// frm.fields_dict.political.$input.css("text-align", "right");

// frm.fields_dict.total.$input.css("text-align", "right");

// frm.fields_dict.per_enquiryp.$input.css("text-align", "right");

// frm.fields_dict.cl_per_monthp.$input.css("text-align", "right");

        
        
        
//         frm.set_df_property('eci_quo_table', 'cannot_add_rows', true);
        
        
//         var workflow_state = frm.doc.workflow_state;

//         // Check if the workflow state is "Approved"
//         if (workflow_state === "Approved") {
//             // Show client_name1 field and hide client_name field
//             frm.toggle_display('client_name1', true);
//             frm.toggle_display('client_name', false);
//         } else {
//             // If workflow state is not "Approved", reverse the display
//             frm.toggle_display('client_name1', false);
//             frm.toggle_display('client_name', true);
//         }


//        //  var workflow_state1 = frm.doc.workflow_state;

//         // Check if the workflow state is "Approved"
//         if (workflow_state === "Approved") {
//             // Show client_name1 field and hide client_name field
//             frm.toggle_display('proposal_no1', true);
//             frm.toggle_display('proposal_no', false);
//         } else {
//             // If workflow state is not "Approved", reverse the display
//             frm.toggle_display('proposal_no1', false);
//             frm.toggle_display('proposal_no', true);
//         }

//         generateScheduleNumber(frm);
        

         
//          $(document.body).on('click', function() {     1;
//             calculateAllValues(frm);
//         });
        
//      attachClickHandlers(frm);

//         $('.underlined').on('click', function(event) {
//             event.preventDefault();
//             var linkText = $(this).text().trim();
//             var workflowState = frm.doc.workflow_state;  // Assuming workflow_state is the field name in your form

//             switch (linkText) {
//                 case 'Covering Letter':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openNewDocument('covering Letter_ECI', frm);
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                       }
//                     break;

//                 case 'Specimen Policy document':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openNewDocument('Specimen Policy Document_ECI', frm);
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                          }
//                     break;

//                 case 'Acceptance form':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openNewDocument('Acceptance Advice letter_ECI', frm);
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                         }
//                     break;

//                 case 'Country Listing and rate':
//                     if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                         openNewDocument('Country Listing and rates_ECI', frm);
//                     } else {
//                         frappe.msgprint("Approval is required to access the document.");
//                       }
//                     break;

//                 default:
//                     console.log("No action defined for", linkText);
//             }
//         });
        

//      // Fetch submitted proposals
//      frappe.call({
//        method: 'frappe.client.get_list',
//        args: {
//         doctype: 'ECI Proposal',
//         filters: {
//             'workflow_state': 'Approved'
//         },
//         fields: ['client_name'],
//         limit_page_length: 100  // Adjust as needed
//     },
//     callback: function(submittedProposalsResponse) {
//         console.log("Submitted Proposals received:", submittedProposalsResponse);

//         if (submittedProposalsResponse.message) {
//             var submittedProposals = submittedProposalsResponse.message.map(x => x.client_name);

//             // Fetch approved quotations
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'ECI Quotations',
//                     filters: {
//                         'workflow_state': 'Approved'
//                     },
//                     fields: ['client_name'],
//                     limit_page_length: 100  // Adjust as needed
//                 },
//                 callback: function(response) {
//                     console.log("Quotations received:", response);
//                     let quotations = response.message.map(x => x.client_name);
                    
//                     // Combine unique client_names from both proposals and quotations
//                     let combinedNames = [...new Set([...submittedProposals, ...quotations])];
                    
//                     // Set dropdown options
//                     frm.set_df_property('client_name', 'options', combinedNames);
//                     console.log("Final client names array:", combinedNames);
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching quotations:", textStatus, errorThrown);
//                 }
//             });
//         }
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching submitted proposals:", textStatus, errorThrown);
//     }
// });
  
  
 
//     },
    

//     client_name: function(frm) {

//         var clientName = frm.doc.client_name;

//         // Fetch proposal numbers based on selected client name
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'ECI Proposal',
//                 filters: {
//                     'client_name': clientName
                    
                     
//                 },
//                 fields: ['proposal_no']
//             },
//             callback: function(response) {
//                 var proposalNumbers = response.message.map(item => item.proposal_no);
//                 frm.set_df_property('proposal_no', 'options', proposalNumbers);
//                 frm.refresh_field('proposal_no');
//             }
//         });
//     },


//     proposal_no: function(frm) {
        
//         var  ProposalNo = frm.doc.proposal_no;

//          frappe.call({
//     method: 'frappe.client.get_list',
//     args: {
//         doctype: 'ECI Proposal',
//         filters: {
//             proposal_no: ProposalNo
//         },
//         fields: ['client_name', 'proposal_no', 'status', 'captured_on'],
//         limit: 1  // Limit to fetch only one record, assuming proposal_no is unique
//     },
//     callback: function(response) {
//         console.log("ECI Proposal response:", response);

//         if (response.message && response.message.length > 0) {
//             var data_from_proposal = response.message[0];

//             // Check if the proposal is approved in ECI Quotations
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'ECI Quotations',
//                     filters: {
//                         proposal_no: ProposalNo,
//                         workflow_state: 'Approved'
//                     },
//                     limit: 1  // Assuming only one approved record is expected
//                 },
//                 callback: function(approvedResponse) {
//                     if (approvedResponse.message && approvedResponse.message.length > 0) {
//                         frappe.msgprint('This proposal number is already approved in ECI Quotations.');
//                         // Optionally clear or reset fields here based on your logic
//                     } else {
//                         // Populate fields from ECI Proposal if data is found
//                         frm.set_value('client_name1', data_from_proposal.client_name || '');
//                         frm.set_value('proposal_no1', data_from_proposal.proposal_no || '');
//                         frm.set_value('status1', data_from_proposal.status || '');
//                         frm.set_value('captured_on', data_from_proposal.captured_on || '');
//                     }
//                 },
//                 error: function(err) {
//                     console.error("Error checking ECI Quotations for approval:", err);
//                     frappe.msgprint('An error occurred while checking ECI Quotations for approval. Please check the console for details.');
//                 }
//             });

//         } else {
//             // Clear fields if no matching record found in ECI Proposal
//             frm.set_value('client_name1', '');
//             frm.set_value('proposal_no1', '');
//             frm.set_value('status1', '');
//             frm.set_value('captured_on', '');
//             frappe.msgprint('No matching record found in ECI Proposal for the selected Proposal No.');
//         }
//     },
//     error: function(err) {
//         console.error("Error fetching ECI Proposal data:", err);
//         frappe.msgprint('An error occurred while fetching data from ECI Proposal. Please check the console for details.');
//     }
// });




//         // frappe.call({
//         //     method: 'frappe.client.get_list',
//         //     args: {
//         //         doctype: 'ECI Proposal',
//         //         filters: {
//         //             proposal_no: ProposalNo
//         //         },
//         //         fields: ['client_name','proposal_no','status', 'captured_on'],
//         //         limit: 1  // Limit to fetch only one record, assuming proposal_no is unique
//         //     },
//         //     callback: function(response) {
//         //         console.log("ECI Proposal response:", response);
//         //         if (response.message && response.message.length > 0) {
//         //             var data_from_proposal = response.message[0];

//         //             // Populate fields if data is found
//         //             frm.set_value('client_name1', data_from_proposal.client_name || '');
//         //               frm.set_value('proposal_no1', data_from_proposal.proposal_no || '');
//         //             frm.set_value('status1', data_from_proposal.status || '');
//         //             frm.set_value('captured_on', data_from_proposal.captured_on || '');
//         //         } else {
//         //             // Clear fields if no matching record found
//         //             frm.set_value('client_name1', '');
//         //             frm.set_value('proposal_no1', '');
//         //             frm.set_value('status1', '');
//         //             frm.set_value('captured_on', '');
//         //             frappe.msgprint('No matching record found in ECI Proposal for the selected Proposal No.');
//         //         }
//         //     },
//         //     error: function(err) {
//         //         console.error("Error fetching ECI Proposal data:", err);
//         //         frappe.msgprint('An error occurred while fetching data from ECI Proposal. Please check the console for details.');
//         //     }
//         // });
    
//         // Check if client name is provided
//         if (ProposalNo) {
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'ECI Proposal',
//                     filters: {
//                         proposal_no: ProposalNo
//                     },
//                     fields: [ // Place ECI Proposal fields here
//                         'name',
//                         'agriculture',
//                         'airconditioning',
//                         'aluminium_boats',
//                         'animal_vaccines',
//                         'arts_crafts',
//                         'batteries',
//                         'building_materials',
//                         'canning_cans',
//                         'cellular',
//                         'cereals',
//                         'cigarettes',
//                         'computer_electronic',
//                         'concrete_products',
//                         'corporate_clothing',
//                         'cosmetics',
//                         'couriers',
//                         'engraving',
//                         'fmcg',
//                         'frozen_chicken',
//                         'fuel',
//                         'gas',
//                         'hair_products',
//                         'heavy_plant',
//                         'invoice_factoring',
//                         'leather_products',
//                         'logistics',
//                         'lubricants__fuel',
//                         'meat_products',
//                         'media__radio', // Ensure this field is properly placed
//                         'merchandise',
//                         'packaging_materials',
//                         'perishable_goods',
//                         'pharmaceuticals',
//                         'plastics_spices',
//                         'road_construction',
//                         'salt',
//                         'security_services',
//                         'soda_ash',
//                         'stationary_diaries',
//                         'steel_doors',
//                         'steel_merchants',
//                         'timber_products',
//                         'travelling_bags',
//                         'water_supplies'
//                     ]
//                 },
//                 callback: function(response) {
//                     if (!response.exc) {
//                         var proposals = response.message;

//                         if (proposals.length > 0) {
//                             var proposal = proposals[0];
//                             // Synchronize fields from ECI Proposal to ECI Quotations
//                             frm.set_value("agriculture", proposal.agriculture ? 1 : 0);
//                             frm.set_value("airconditioning", proposal.airconditioning ? 1 : 0);
//                             frm.set_value("aluminium_boats", proposal.aluminium_boats ? 1 : 0);
//                             frm.set_value("animal_vaccines", proposal.animal_vaccines ? 1 : 0);
//                             frm.set_value("arts_crafts", proposal.arts_crafts ? 1 : 0);
//                             frm.set_value("batteries", proposal.batteries ? 1 : 0);
//                             frm.set_value("building_materials", proposal.building_materials ? 1 : 0);
//                             frm.set_value("canning_cans", proposal.canning_cans ? 1 : 0);
//                             frm.set_value("cellular", proposal.cellular ? 1 : 0);
//                             frm.set_value("cereals", proposal.cereals ? 1 : 0);
//                             frm.set_value("cigarettes", proposal.cigarettes ? 1 : 0);
//                             frm.set_value("computer_electronic", proposal.computer_electronic ? 1 : 0);
//                             frm.set_value("concrete_products", proposal.concrete_products ? 1 : 0);
//                             frm.set_value("corporate_clothing", proposal.corporate_clothing ? 1 : 0);
//                             frm.set_value("cosmetics", proposal.cosmetics ? 1 : 0);
//                             frm.set_value("couriers", proposal.couriers ? 1 : 0);
//                             frm.set_value("engraving", proposal.engraving ? 1 : 0);
//                             frm.set_value("fmcg", proposal.fmcg ? 1 : 0);
//                             frm.set_value("frozen_chicken", proposal.frozen_chicken ? 1 : 0);
//                             frm.set_value("fuel", proposal.fuel ? 1 : 0);
//                             frm.set_value("gas", proposal.gas ? 1 : 0);
//                             frm.set_value("hair_products", proposal.hair_products ? 1 : 0);
//                             frm.set_value("heavy_plant", proposal.heavy_plant ? 1 : 0);
//                             frm.set_value("invoice_factoring", proposal.invoice_factoring ? 1 : 0);
//                             frm.set_value("leather_products", proposal.leather_products ? 1 : 0);
//                             frm.set_value("logistics", proposal.logistics ? 1 : 0);
//                             frm.set_value("lubricants__fuel", proposal.lubricants__fuel ? 1 : 0);
//                             frm.set_value("meat_products", proposal.meat_products ? 1 : 0);
//                             frm.set_value("media__radio", proposal.media__radio ? 1 : 0); // Corrected field name
//                             frm.set_value("merchandise", proposal.merchandise ? 1 : 0);
//                             frm.set_value("packaging_materials", proposal.packaging_materials ? 1 : 0);
//                             frm.set_value("perishable_goods", proposal.perishable_goods ? 1 : 0);
//                             frm.set_value("pharmaceuticals", proposal.pharmaceuticals ? 1 : 0);
//                             frm.set_value("plastics_spices", proposal.plastics_spices ? 1 : 0);
//                             frm.set_value("road_construction", proposal.road_construction ? 1 : 0);
//                             frm.set_value("salt", proposal.salt ? 1 : 0);
//                             frm.set_value("security_services", proposal.security_services ? 1 : 0);
//                             frm.set_value("soda_ash", proposal.soda_ash ? 1 : 0);
//                             frm.set_value("stationary_diaries", proposal.stationary_diaries ? 1 : 0);
//                             frm.set_value("steel_doors", proposal.steel_doors ? 1 : 0);
//                             frm.set_value("steel_merchants", proposal.steel_merchants ? 1 : 0);
//                             frm.set_value("timber_products", proposal.timber_products ? 1 : 0);
//                             frm.set_value("travelling_bags", proposal.travelling_bags ? 1 : 0);
//                             frm.set_value("water_supplies", proposal.water_supplies ? 1 : 0);
                            
//                             // Toggle display of fields based on checkbox values
//                             frm.toggle_display("agriculture", proposal.agriculture ? 1 : 0);
//                             frm.toggle_display("airconditioning", proposal.airconditioning ? 1 : 0);
//                             frm.toggle_display("aluminium_boats", proposal.aluminium_boats ? 1 : 0);
//                             frm.toggle_display("animal_vaccines", proposal.animal_vaccines ? 1 : 0);
//                             frm.toggle_display("arts_crafts", proposal.arts_crafts ? 1 : 0);
//                             frm.toggle_display("batteries", proposal.batteries ? 1 : 0);
//                             frm.toggle_display("building_materials", proposal.building_materials ? 1 : 0);
//                             frm.toggle_display("canning_cans", proposal.canning_cans ? 1 : 0);
//                             frm.toggle_display("cellular", proposal.cellular ? 1 : 0);
//                             frm.toggle_display("cereals", proposal.cereals ? 1 : 0);
//                             frm.toggle_display("cigarettes", proposal.cigarettes ? 1 : 0);
//                             frm.toggle_display("computer_electronic", proposal.computer_electronic ? 1 : 0);
//                             frm.toggle_display("concrete_products", proposal.concrete_products ? 1 : 0);
//                             frm.toggle_display("corporate_clothing", proposal.corporate_clothing ? 1 : 0);
//                             frm.toggle_display("cosmetics", proposal.cosmetics ? 1 : 0);
//                             frm.toggle_display("couriers", proposal.couriers ? 1 : 0);
//                             frm.toggle_display("engraving", proposal.engraving ? 1 : 0);
//                             frm.toggle_display("fmcg", proposal.fmcg ? 1 : 0);
//                             frm.toggle_display("frozen_chicken", proposal.frozen_chicken ? 1 : 0);
//                             frm.toggle_display("fuel", proposal.fuel ? 1 : 0);
//                             frm.toggle_display("gas", proposal.gas ? 1 : 0);
//                             frm.toggle_display("hair_products", proposal.hair_products ? 1 : 0);
//                             frm.toggle_display("heavy_plant", proposal.heavy_plant ? 1 : 0);
//                             frm.toggle_display("invoice_factoring", proposal.invoice_factoring ? 1 : 0);
//                             frm.toggle_display("leather_products", proposal.leather_products ? 1 : 0);
//                             frm.toggle_display("logistics", proposal.logistics ? 1 : 0);
//                             frm.toggle_display("lubricants__fuel", proposal.lubricants__fuel ? 1 : 0);
//                             frm.toggle_display("meat_products", proposal.meat_products ? 1 : 0);
//                             frm.toggle_display("media__radio", proposal.media__radio ? 1 : 0); // Corrected field name
//                             frm.toggle_display("merchandise", proposal.merchandise ? 1 : 0);
//                             frm.toggle_display("packaging_materials", proposal.packaging_materials ? 1 : 0);
//                             frm.toggle_display("perishable_goods", proposal.perishable_goods ? 1 : 0);
//                             frm.toggle_display("pharmaceuticals", proposal.pharmaceuticals ? 1 : 0);
//                             frm.toggle_display("plastics_spices", proposal.plastics_spices ? 1 : 0);
//                             frm.toggle_display("road_construction", proposal.road_construction ? 1 : 0);
//                             frm.toggle_display("salt", proposal.salt ? 1 : 0);
//                             frm.toggle_display("security_services", proposal.security_services ? 1 : 0);
//                             frm.toggle_display("soda_ash", proposal.soda_ash ? 1 : 0);
//                             frm.toggle_display("stationary_diaries", proposal.stationary_diaries ? 1 : 0);
//                             frm.toggle_display("steel_doors", proposal.steel_doors ? 1 : 0);
//                             frm.toggle_display("steel_merchants", proposal.steel_merchants ? 1 : 0);
//                             frm.toggle_display("timber_products", proposal.timber_products ? 1 : 0);
//                             frm.toggle_display("travelling_bags", proposal.travelling_bags ? 1 : 0);
//                             frm.toggle_display("water_supplies", proposal.water_supplies ? 1 : 0);
//                         }
//                     } else {
//                         console.error("Error occurred in fetching data from ECI Proposal:", response.exc);
//                     }
//                 }
//             });
//         }
//     },

  
//     add_new: function(frm) {
        
//        // frm.set_df_property('eci_quo_table', 'cannot_add_rows', true);

        
//         // Retrieve values from the main form fields
//         var country_of_dest = frm.doc.country_of_dest;
//         var terms_of_payment = frm.doc.terms_of_payment;
//         var commercial_pre_rate = frm.doc.commercial_pre_rate;
//         var premium_rate = frm.doc.premium_rate;
//         var commercial_premium_amt_p = frm.doc.commercial_premium_amt_p;
//         var buyer_type = frm.doc.buyer_type;
//         var political_pre_rate = frm.doc.political_pre_rate;
//         var turnover__p = frm.doc.turnover__p;
//         var political_premium_amt = frm.doc.political_premium_amt;
//         var total_pre_amt = frm.doc.total_pre_amt;

//         // Add a new row to the child table
//         var child = frappe.model.add_child(frm.doc, "ECI quotation childtable", "eci_quo_table");
        
//         // Set values for the fields in the child table
//         frappe.model.set_value(child.doctype, child.name, "country", country_of_dest);
//         frappe.model.set_value(child.doctype, child.name, "payment_terms", terms_of_payment);
//         frappe.model.set_value(child.doctype, child.name, "commprerate", commercial_pre_rate);
//         frappe.model.set_value(child.doctype, child.name, "premium_rate", premium_rate);
//         frappe.model.set_value(child.doctype, child.name, "commpreamt", commercial_premium_amt_p);
//         frappe.model.set_value(child.doctype, child.name, "buyer_type", buyer_type);
//         frappe.model.set_value(child.doctype, child.name, "polprerate", political_pre_rate);
//         frappe.model.set_value(child.doctype, child.name, "turnover", turnover__p);
//         frappe.model.set_value(child.doctype, child.name, "polpreamt", political_premium_amt);
//         frappe.model.set_value(child.doctype, child.name, "total_pre_amt", total_pre_amt);
        
//         // Refresh the child table field to display the new row
//         frm.refresh_field('eci_quo_table');
//         calculate_comm_pre_amt(frm);
//         calculate_poll_pre_amt(frm);
//         calculate_amount(frm);
        
//           // Clear the main form fields
//         frm.set_value('country_of_dest', '');
//         frm.set_value('terms_of_payment', '');
//         frm.set_value('commercial_pre_rate', 0);
//         frm.set_value('premium_rate', 0);
//         frm.set_value('commercial_premium_amt_p', 0);
//         frm.set_value('buyer_type', '');
//         frm.set_value('political_pre_rate', 0);
//         frm.set_value('turnover__p', 0);
//         frm.set_value('political_premium_amt', 0);
//         frm.set_value('total_pre_amt', 0);
        
//     },
    
    
//     onload: function(frm) {

 
//         var proposalNumber = frm.doc.proposal_no;


//         var checkedFields = [];

//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'ECI Proposal',
//                 filters: {
//                     proposal_no: proposalNumber
//                 }
//             },
//             callback: function(response) {
//                 if (response && response.message) {
//                     console.log('ECI Proposal data fetched successfully:');
//                     // Define the list of fields to check
//                     var fieldsToCheck = [
//                         'agriculture',
//                         'airconditioning',
//                         'aluminium_boats',
//                         'animal_vaccines',
//                         'arts_crafts',
//                         'batteries',
//                         'building_materials',
//                         'canning_cans',
//                         'cellular',
//                         'cereals',
//                         'cigarettes',
//                         'computer_electronic',
//                         'concrete_products',
//                         'corporate_clothing',
//                         'cosmetics',
//                         'couriers',
//                         'engraving',
//                         'fmcg',
//                         'frozen_chicken',
//                         'fuel',
//                         'gas',
//                         'hair_products',
//                         'heavy_plant',
//                         'invoice_factoring',
//                         'leather_products',
//                         'logistics',
//                         'lubricants__fuel',
//                         'meat_products',
//                         'media__radio',
//                         'merchandise',
//                         'packaging_materials',
//                         'perishable_goods',
//                         'pharmaceuticals',
//                         'plastics_spices',
//                         'road_construction',
//                         'salt',
//                         'security_services',
//                         'soda_ash',
//                         'stationary_diaries',
//                         'steel_doors',
//                         'steel_merchants',
//                         'timber_products',
//                         'travelling_bags',
//                         'water_supplies'
//                     ];

//                     // Loop through each field in the response
//                     for (var field of fieldsToCheck) {
//                         // Get the value of the field
//                         var fieldValue = response.message[field];
//                         // Check if the field type is "Check" and the value is 1
//                         if (fieldValue === 1) {
//                             // Add the field name to the checkedFields array
//                             checkedFields.push(field);
//                         }
//                     }

//                     // Create the goods_services field and set its value
//                     frm.set_value('goods_services', checkedFields.join(', '));

//                     // Log the value of goods_services to the console
//                     console.log('Value of goods_services:', frm.doc.goods_services);
//                 } else {
//                     console.log('No matching record found in ECI Proposal.');
//                     frappe.msgprint('No matching record found in ECI Proposal.');
//                 }
//             },
//             error: function(err) {
//                 console.error('Error fetching data from ECI Proposal:', err);
//                 frappe.msgprint('An error occurred while fetching data from ECI Proposal.');
//             }
//         });
        
//             }
            
    
  
            
// });
        

// function generateScheduleNumber(frm) {
//     // Check if the schedule number field is already populated
//     if (!frm.doc.schedule_no) {
//         // Get the current year
//         let currentYear = new Date().getFullYear();
//         let prefix = `ECQT/${currentYear}/`;

//         // Make a call to get the last number asynchronously
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'ECI Quotations',
//                 fields: ['schedule_no'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastScheduleNo = r.message[0].schedule_no;
//                     let lastNumber = parseInt(lastScheduleNo.split("/").pop()); // Extract last part and parse it as an integer
//                     if (!isNaN(lastNumber)) {
//                         // Increment the last number and pad it with leading zeros
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('schedule_no', prefix + newNumber);
//                     }
//                 } else {
//                     // If no previous numbers exist, set to default '0001'
//                     frm.set_value('schedule_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }




// //Calculation part
// function calculateAllValues(frm) {
//     var doc = frm.doc;
//     if (doc.turnover__p && doc.commercial_pre_rate && doc.political_pre_rate) {
//         // Calculate commercial premium amount
//         var commercial_premium_amt_p = doc.turnover__p * doc.commercial_pre_rate / 100;

//         // Calculate political premium amount
//         var political_premium_amt = doc.turnover__p * doc.political_pre_rate / 100;

//         // Calculate total premium amount
//         var total_pre_amt = doc.turnover__p * (doc.commercial_pre_rate + doc.political_pre_rate) / 100;

//         // // Calculate additional values
//         // var commercial = commercial_premium_amt_p * 25;
//         // var political = political_premium_amt * 25;
//         // var total = total_pre_amt * 25;
//          // frm.set_value('commercial', commercial);
//         // frm.set_value('political', political);
//         // frm.set_value('total', total);
        


//         // Set calculated values to respective fields
//         frm.set_value('commercial_premium_amt_p', commercial_premium_amt_p);
//         frm.set_value('political_premium_amt', political_premium_amt);
//         frm.set_value('total_pre_amt', total_pre_amt);
       
// 	}

// }


// function calculate_comm_pre_amt(frm){
//     var childTableData = frm.doc.eci_quo_table || [];
 
//     // Calculate Total Turnover
//     var totalCommPre = childTableData.reduce(function(commpreamt, row) {
//         // Convert row.turnover to a number using parseFloat or parseInt
//         var rowCommPre= parseFloat(row.commpreamt) || 0; // Convert to float; default to 0 if NaN
 
//         return commpreamt + rowCommPre;
//     }, 0);
 
//     // Update Total Turnover field in the form
//     frm.set_value('com_pre_amt', totalCommPre);
    
//     var commercial = frm.doc.com_pre_amt * 25;
//     frm.set_value('commercial', commercial);
// }


// function calculate_amount(frm){
//     var childTableData = frm.doc.eci_quo_table || [];
 
//     // Calculate Total Turnover
//     var totalAmount = childTableData.reduce(function(total_pre_amt, row) {
//         // Convert row.turnover to a number using parseFloat or parseInt
//         var rowAmount= parseFloat(row.total_pre_amt) || 0; // Convert to float; default to 0 if NaN
 
//         return total_pre_amt + rowAmount;
//     }, 0);
 
//     // Update Total Turnover field in the form
//     frm.set_value('amt', totalAmount);
    
//     var total = frm.doc.amt * 25;
//     frm.set_value('total', total);
// }


// function calculate_poll_pre_amt(frm){
//     var childTableData = frm.doc.eci_quo_table || [];
 
//     // Calculate Total Turnover
//     var totalPollPre = childTableData.reduce(function(polpreamt, row) {
//         // Convert row.turnover to a number using parseFloat or parseInt
//         var rowPollPre= parseFloat(row.polpreamt) || 0; // Convert to float; default to 0 if NaN
 
//         return polpreamt + rowPollPre;
//     }, 0);
 
//     // Update Total Turnover field in the form
//     frm.set_value('pol_pre_amt', totalPollPre);
    
//     var political = frm.doc.pol_pre_amt * 25;
//     frm.set_value('political', political);
// }


// function attachClickHandlers(frm) {
//     $('.underlined').on('click', function(event) {
//         event.preventDefault();
//         var linkText = $(this).text().trim();
//         var workflowState = frm.doc.workflow_state;  // Assuming workflow_state is the field name in your form

//         switch (linkText) {
//             case 'Policy Schedule':
//                 if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                     openNewDocument('Policy Schedule For ECIS', frm);
//                 } else {
//                     frappe.msgprint("Approval is required to access the document.");
//                     }
//                 break;
         

//             case 'Consent Form':
//                 if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                     openNewDocument('Consent Form For ECIS', frm);
//                 } else {
//                     frappe.msgprint("Approval is required to access the document.");
//                   }
//                 break;

//             case 'Agenda and Endorsement':
//                 if (workflowState === 'Approved' || workflowState === 'Rejected') {
//                     openNewDocument('Agenda and Endorsements for ECIS', frm);
//                 } else {
//                     frappe.msgprint("Approval is required to access the document.");
//                 }
//                 break;
                
//             default:
//                 console.log("No action defined for", linkText);
//         }
//     });
// }


// function openNewDocument(doctype, frm) {
//     // Get necessary data from the current form or any other source
//     var data = {
//         to: frm.doc.client_name,
//          proposal_no: frm.doc.proposal_no,
//         policy_no: frm.doc.schedule_no,
//         company_name:frm.doc.client_name,
//         draw:frm.doc.client_name
        
//     };
//     // Open the new doctype with the required data
//     frappe.new_doc(doctype, data);
// } 