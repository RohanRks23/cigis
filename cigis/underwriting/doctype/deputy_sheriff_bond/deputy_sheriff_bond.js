// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Deputy Sheriff Bond', {
// 	refresh(frm) {
	  
	  
// 	  frm.fields_dict.bond_value.$input.css("text-align", "right");
//       frm.fields_dict.premium_without_vat.$input.css("text-align", "right");
//       frm.fields_dict.ecgc_reinsurance_commission.$input.css("text-align", "right");
//       frm.fields_dict.premium.$input.css("text-align", "right");
//       frm.fields_dict.premium_rate.$input.css("text-align", "right");
//       frm.fields_dict.reinsurer_rate.$input.css("text-align", "right");
                   

// 		// your code here
// 		 if(!frm.doc.bond_no){
// 	        generateBondNumber(frm);
// 	    }
	    
// 	    var workflowState = frm.doc.workflow_state;

//         // Create a custom button for "Bond Invoice" if the workflow state is "Submitted"
//        if (workflowState === "Approved") {
//     frappe.msgprint("Please click Prepare Invoice Button");
//     // Display the message before adding the button
//     frm.add_custom_button(__('Prepare Invoice'), function() {
//         frappe.new_doc('Bond Invoice');
//         // Set route options after creating the new document
//         frappe.route_options = {
//             ecgc_ref_no: frm.doc.bond_no
                 
//                     // sheriff_name: frm.doc.sheriff_name,
//                     // bond_period_from: frm.doc.period_from,
//                     // bond_period_to:frm.doc.period_to,
//                     // bond_guarantee_amount: frm.doc.bond_value,
//                     // reinsurern_refnumber:frm.doc.reinsurer_ref_numbeecgc_invoice_no,
//                     // reinsurer_per: frm.doc.reinsurer_rate,
//                     // guarantee_fee: frm.doc.premium,
//                     // bond_total_due: frm.doc.premium,
//                     // bond_broker        : frm.doc.broker,
//                     // reinsure     : frm.doc.reinsurer,
//                     // ecgc_commission_: frm.doc.ecgc_reinsurance_commission
                    
                    
    
//                 },
                
                
//                  // Enable fields in the Bond Invoice form
//           frappe.ui.form.on('Bond Invoice', {
//             refresh: function(frm) {
//                 // Enable the fields you want here
//             //   frm.set_df_property('bond_details', 'hidden', 1); // hide field
//             //   frm.set_df_property('bond_no', 'hidden', 1);
//             //   frm.set_df_property('facility_name', 'hidden', 1);
//             //   frm.set_df_property('period_from', 'hidden', 1);
//             //   frm.set_df_property('bond_type', 'hidden', 1);
//             //   frm.set_df_property('bond_subtype', 'hidden', 1);
//             //   frm.set_df_property('bond_invoice_no', 'hidden', 1);
//             //   frm.set_df_property('month', 'hidden', 1);
//             //   frm.set_df_property('premium_rate', 'hidden', 1);
//             //   frm.set_df_property('invoice_date', 'hidden', 1);
//             //   frm.set_df_property('reinsurer', 'hidden', 1);
//             //   frm.set_df_property('reinsurer_refnumber', 'hidden', 1);
//             //   frm.set_df_property('reinsurer1', 'hidden', 1);
//             //   frm.set_df_property('portion_of_guarantee_guarantee_vat_p', 'hidden', 1);
//             //   frm.set_df_property('beci_commission_p', 'hidden', 1);
//             //   frm.set_df_property('reinsurer_commissions', 'hidden', 1);
//             //   frm.set_df_property('other_insurer_commissions', 'hidden', 1);
//             //   frm.set_df_property('broker1', 'hidden', 1);
              
//             //   frm.set_df_property('broker', 'hidden', 1);
//             //   frm.set_df_property('with_vat', 'hidden', 1);
//             //   frm.set_df_property('with_out_vat', 'hidden', 1);
//             //   frm.set_df_property('total_due_without_vat', 'hidden', 1);
//             //   frm.set_df_property('vat', 'hidden', 1);
//             //   frm.set_df_property('total_due', 'hidden', 1);
//             //   frm.set_df_property('demand_date', 'hidden', 1);
//             //   frm.set_df_property('bond_in_favour', 'hidden', 1);
              
//             //   frm.set_df_property('guarantee_amount', 'hidden', 1);
//             //   frm.set_df_property('premium_p', 'hidden', 1);
//             //   frm.set_df_property('to', 'hidden', 1);
//             //   frm.set_df_property('beci', 'hidden', 1);
//             //   frm.set_df_property('beci_portion_of_gurantee_amount_p', 'hidden', 1);
              
//             //   frm.set_df_property('beci_commission', 'hidden', 1);
//             //   frm.set_df_property('reinsurer_commission', 'hidden', 1);
//             //   frm.set_df_property('other_insurer_commission', 'hidden', 1);
//             //   frm.set_df_property('broker_commission__p', 'hidden', 1);
//             //   frm.set_df_property('vat_p', 'hidden', 1);
              
               
//               frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Deputy Sheriff Bond',
//                 filters: {
//                     bond_no: frm.doc.ecgc_ref_no
//                 },
//                 fields: ['sheriff_name','period_to','period_from','bond_value','reinsurer_ref_numbeecgc_invoice_no','reinsurer_rate','premium','premium_rate','broker','reinsurer','ecgc_reinsurance_commission']
//             },
//             callback: function(r) {
//                 if (!r.exc && r.message && r.message.length > 0) {
//                     var bondApp = r.message[0];
//                     frm.set_value('sheriff_name', bondApp.sheriff_name);
//                     frm.set_value('bond_period_from', bondApp.period_from); 
//                     frm.set_value('bond_period_to', bondApp.period_to);
//                     frm.set_value('bond_guarantee_amount', bondApp.bond_value);
//                     frm.set_value('reinsurern_refnumber', bondApp.reinsurer_ref_numbeecgc_invoice_no);
//                     frm.set_value('reinsurer_per', bondApp.reinsurer_rate);
//                     frm.set_value('guarantee_fee', bondApp.premium); 
//                     frm.set_value('bond_total_due', bondApp.premium);
//                     frm.set_value('guarantee_fee_rate', bondApp.premium_rate);
//                     frm.set_value('bond_broker', bondApp.broker);
//                     frm.set_value('reinsure', bondApp.reinsurer);
//                     frm.set_value('ecgc_commission_', bondApp.ecgc_reinsurance_commission);
                    


	    
                  
                  
//                 } else {
//                     // console.error("Error occurred:", r.exc);
//                 }
//             }
//         }); 

 
    
               
//             }
//         });
                                
                
       
                 
//                 console.log("Print Annexur clicked!");
//             }).addClass("btn-primary");
//         }

	    
	    
// 	},


   
// 	add_new:function(frm){
	    
// 	     frappe.new_doc('DeputySheriffBond');
	    
// 	},
	
// 	bond_no: function(frm) {
//         if (frm.doc.bond_no) {
//             frm.set_value('reinsurer_ref_numbeecgc_invoice_no', frm.doc.bond_no);
//         } else {
//             frm.set_value('reinsurer_ref_numbeecgc_invoice_no', '');
//         }
//     },
    
//     bond_value: function(frm) {

//         calculateResults(frm);

//     },

//     premium: function(frm) {

//         calculatepremiumwithoutvat(frm);

//     },
    
//     premium_without_vat: function(frm) {

//         calculateResults(frm);

//     },

	
	
// })

//Automatic generation of bondno)
// function generateBondNumber(frm) {
//     // Check if the proposal number field is already populated
//     if (!frm.doc.bond_no) {
//         // Get the current year
//         let currentYear = new Date().getFullYear();
//         let prefix = `BND/${currentYear}/`;

//         // Make a call to get the last number asynchronously
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Deputy Sheriff Bond',
//                 fields: ['bond_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 console.log(r,"proposal no");
//                 if (r.message && r.message.length > 0) {
//                     let lastProposalNo = r.message[0].bond_no;
//                     let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
//                     if (!isNaN(lastNumber)) {
//                         // Increment the last number and pad it with leading zeros
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('bond_no', prefix + newNumber);
//                     }
//                 } else {
//                     // If no previous numbers exist, set to default '0001'
//                     frm.set_value('bond_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }
// function generateBondNumber(frm) {
//     // Check if the bond number field is already populated
//     if (!frm.doc.bond_no) {
//         // Get the current year
//         let currentYear = new Date().getFullYear();
//         let prefix = `BND/${currentYear}/`;

//         // Make a call to get the last bond number asynchronously
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 fields: ['bond_no'],
//                 limit: 1,
//                 order_by: 'creation desc'
//             },
//             callback: function(response) {
//                 console.log(response, "bond no");
//                 let lastBondNo = response.message && response.message.length > 0 ? response.message[0].bond_no : '0';
//                 let lastNumber = parseInt(lastBondNo.split("/").pop()); // Extract last part and parse it as integer

//                 // Make a call to get the last deputy sheriff bond number asynchronously
//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Deputy Sheriff Bond',
//                         fields: ['bond_no'],
//                         limit: 1,
//                         order_by: 'creation desc'
//                     },
//                     callback: function(response) {
//                         console.log(response, "deputy sheriff bond no");
//                         let lastDeputySheriffBondNo = response.message && response.message.length > 0 ? response.message[0].bond_no : '0';
//                         let lastDeputySheriffBondNumber = parseInt(lastDeputySheriffBondNo.split("/").pop());

//                         // Get the maximum of the two last bond numbers
//                         let maxLastNumber = Math.max(lastNumber, lastDeputySheriffBondNumber);

//                         if (!isNaN(maxLastNumber)) {
//                             // Increment the last number and pad it with leading zeros
//                             let newNumber = (maxLastNumber + 1).toString().padStart(4, '0');
//                             frm.set_value('bond_no', prefix + newNumber);
//                         } else {
//                             // If no previous numbers exist, set to default '0001'
//                             frm.set_value('bond_no', prefix + '0001');
//                         }
//                     }
//                 });
//             }
//         });
//     }
// }



// function calculatepremiumwithoutvat(frm) {

   

//     var premium = frm.doc.premium || 0; // Get the value of field2, default to 0 if empty

//     var result = (premium/1.14); // Calculate the result
 
//     frm.set_value('premium_without_vat', result); // Set the calculated result to result_field
    
// }


// function calculateResults(frm) {
    
//     var bondvalue = frm.doc.bond_value || 0; // Get the value of field1, default to 0 if empty

//     var premiumwithoutvat = frm.doc.premium_without_vat || 0; // Get the value of field1, default to 0 if empty

//     var results = (premiumwithoutvat * 100)/bondvalue; // Calculate the results
 
//     frm.set_value('premium_rate', results); // Set the calculated result to result_field
    
// }



// // List of field names to align right
// let fieldsToAlignRight = ['bond_value', 'premium_without_vat', 'ecgc_reinsurance_commission','premium','premium_rate','reinsurer_rate'];

// // Function to apply the styles
// function alignFieldsRight(frm, fields) {
//     fields.forEach(field => {
//         let fieldElement = frm.fields_dict[field];
//         if (fieldElement && fieldElement.input) {
//             fieldElement.input.style.direction = 'rtl';
//             fieldElement.input.style.textAlign = 'right';
//         }
//     });
//}

