// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('CI Recoveries', {
// 	refresh: function(frm) {
// 		frm.set_df_property('childtable','cannot_add_rows', true);
		
// 		frm.fields_dict.claim_amount.$input.css("text-align", "right");
// 		frm.fields_dict.amt_recovered.$input.css("text-align", "right");
// 		frm.fields_dict.due.$input.css("text-align", "right");
// 		frm.fields_dict.amount_recovered.$input.css("text-align", "right");
// 		frm.fields_dict.reinsurer_percentage.$input.css("text-align", "right");
// 		frm.fields_dict.beci_percentage.$input.css("text-align", "right");
// 		frm.fields_dict.reinsurer_amount.$input.css("text-align", "right");
// 		frm.fields_dict.beci_amount.$input.css("text-align", "right");
		
		
// 			var workflowState = frm.doc.workflow_state;
// 		   if (workflowState === "Approved") {
// 			   frm.toggle_display('ph_name', false);
// 			   frm.toggle_display('policy_holder', true);
// 		   }
		
// 		   // // Assuming workflow_state is defined somewhere
// 		   // var workflow_state = frm.doc.workflow_state;
   
// 		   // // Check if workflow_state is "Approved"
// 		   // if (workflow_state === "Approved") {
// 		   //     // Display policy_holder field and hide ph_name field
// 		   //     frm.toggle_display('policy_holder', true);
// 		   //     frm.toggle_display('ph_name', false);
// 		   //  }
// 		   //  //else {
// 		   // //     // If not "Approved", ensure the fields are displayed
// 		   // //     frm.toggle_display('policy_holder', true);
// 		   // //     frm.toggle_display('ph_name', true);
// 		   // // }
		   
// 		   frm.fields_dict.addnew.$input.addClass('btn-primary');
// 	   },
		
// 	   onload: function(frm) {
// 		   if (!frm.doc.recovery_no) {
// 			   generateNumberRecoveryNo(frm);
// 		   }
// 				if (!frm.doc.receipt_no) {
// 			   generateNumberReceiptNo(frm);
// 		   }
// 	   frappe.call({
// 		  method: 'frappe.client.get_list',
// 			  args: {
// 				  'doctype': 'CI Claim',
// 				  'filters': {
// 				   'workflow_state': 'Approved'
// 			   },
// 				'fields': ['ph_name'],
// 				limit_page_length: 100
// 			   },
// 			   callback: function(response) {
// 			   if (response.message) {
// 				var approvedClaims = response.message.map(function(claim) {
// 				return claim.ph_name;
// 				});
// 				  console.log("** Approved Claims:", approvedClaims);
   
// 		 // Set dropdown options with approved claims
// 				frm.set_df_property('ph_name', 'options', approvedClaims);
// 	   }
// 	 }
//    });
	
	  
// 	   },
	   
	   
// 	   ph_name: function(frm) {
// 			var policyName = frm.doc.ph_name;
   
// 	   // Set the value of policy_number field
// 		frm.set_value('policy_holder', policyName);
	   
// 		   frappe.call({
// 			   method: 'frappe.client.get_list',
// 			   args: {
// 				   doctype: 'CI Claim',
// 				   filters: {
// 					   ph_name: frm.doc.ph_name
// 				   },
// 				   fields: ['policyno', 'buyer', 'claim_refno', 'claim_value__p', 'client_type']
// 			   },
// 			   callback: function(r) {
				  
// 				   if (!r.exc) {
// 					   if (r.message && r.message.length > 0) {
// 						   var data = r.message[0]; // Get the first record from the fetched data
   
// 						   frm.set_value('policy_no', data.policyno);
// 						   frm.set_value('buyer', data.buyer); // Assuming 'client_type' is the correct field name
// 						   frm.set_value('claim_ref_no', data.claim_refno);
// 						   frm.set_value('claim_amount', data.claim_value__p);
// 						   frm.set_value('policy_type', data.client_type);
// 					   }
// 				   } else {
// 					   frm.set_value('status', '');
// 					   console.error("Error occurred:", r.exc);
// 				   }
// 			   }
// 		   });
// 		   frappe.call({
// 			   method: 'frappe.client.get_list',
// 			   args: {
// 				   doctype: 'Assign_Lawyer',
// 				   filters: {
// 					  ph_name : frm.doc.ph_name
// 				   },
// 				   fields: ['lawyer', 'lawyer_']
// 			   },
// 			   callback: function(response) {
// 				   console.log("DCI Proposals response:", response);
// 				   if (response.message && response.message.length > 0) {
// 					   var data_from_proposals = response.message[0];
// 					   // Populate fields if data is found
// 					   frm.set_value('lawyer_debt_collector', data_from_proposals.lawyer || '');
// 					   frm.set_value('lawyer', data_from_proposals.lawyer_ || '');
// 				   } else {
// 					   // Clear fields if no matching record found
// 					   frm.set_value('lawyer_debt_collector', '');
// 					   frm.set_value('lawyer', '');
// 				   }
// 			   },
// 			   error: function(err) {
// 				   console.error(err);
// 				   //frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
// 			   }
// 		   });
// 	   },
   
// 	   claim_amount: function(frm){
// 		   calculatedueamount(frm);
// 		   },
		   
// 	   amt_recovered: function(frm) {
// 	   // Call the function to calculate due amount
// 	   calculatedueamount(frm);
   
// 	   // Get the value of amt_recovered field
// 	   var amt_recovered = frm.doc.amt_recovered;
   
// 	   // Set the value of amount_recovered field
// 	   frm.set_value('amount_recovered', amt_recovered);
//    },
   
// 	   reinsurer_percentage: function(frm){
// 		   calculateReinsurerAndBeci(frm);
// 	   },
	   
// 	   beci_percentage: function(frm) {
// 		   calculateReinsurerAndBeci(frm);
// 	   },
	   
// 	   addnew: function(frm){
// 		  addDataToChildTable(frm); 
// 	   }
		
//    });
   
   
//    function calculatedueamount(frm){
	  
// 	   var claimamount = parseFloat(frm.doc.claim_amount) || 0; // Convert to float and handle potential non-numeric input
// 	   var amtrecovered = parseFloat(frm.doc.amt_recovered) || 0; // Convert to float and handle potential non-numeric input
	  
// 	 var due = claimamount-amtrecovered;
	  
// 	 frm.set_value('due',due);
	   
//    }
   
//    function addDataToChildTable(frm, data) {
// 	   // Get the values from your fields
// 	   var recpt_no = frm.doc.receipt_no;
// 	   var amtreceived = frm.doc.amount_recovered;
// 	   var date = frm.doc.date;
	
// 	   // Check if all required fields are filled
// 	   if (!recpt_no || !amtreceived || !date ) {
// 		   frappe.msgprint('Please fill all the required fields');
// 		   return;
// 	   }
	
// 	   // Check if the data already exists in the child table for the same buyer
// 	   var exists = false;
// 	   if (frm.doc.CI_Recoveries) {
// 		   frm.doc.CI_Recoveries.forEach(function(row) {
// 			   if (row.recpt_no === recpt_no) {
// 				   frappe.msgprint('You can only have one entry for ' + recpt_no);
// 				   exists = true;
// 				   return false; // Stop iterating
// 			   }
// 		   });
// 	   }
	
// 	   // If data doesn't exist, insert it into the child table
// 	   if (!exists) {
// 		   // Prepare the data for the child table
// 		   var child_data = {
// 			   "doctype": "CI Recoveries Child",
// 			   "parent": frm.doc.receipt_no,
// 			   "parenttype": "Profile",
// 			   "parentfield": "childtable",
// 			   "recpt_no": recpt_no,
// 			   "amtreceived": amtreceived,
// 			   "date": date,
// 		   };
	
// 		   // Add a child to the child table
// 		   var child = frappe.model.add_child(frm.doc, "CI Recoveries Child", "childtable");
	
// 		   // Set the values in the child table row
// 		   frappe.model.set_value(child.doctype, child.name, "recpt_no", recpt_no);
// 		   frappe.model.set_value(child.doctype, child.name, "amtreceived", amtreceived);
// 		   frappe.model.set_value(child.doctype, child.name, "date", date);
		   
// 		   // Clear the fields
// 		   // frm.set_value('receipt_no', '');
// 		   // frm.set_value('amount_recovered', '');
// 		   // frm.set_value('date', '');
		  
// 		   // Refresh the form to show the new data in the child table
// 		   frm.refresh_field('childtable');
// 	   }
//    }
   
//    function calculateReinsurerAndBeci(frm) {
// 	   // Retrieve necessary values from the form
// 	   var amountRecovered = parseFloat(frm.doc.amount_recovered);
// 	   var lawyerPercentage = parseFloat(frm.doc.lawyer);
// 	   var reinsurerPercentage = parseFloat(frm.doc.reinsurer_percentage); // Modified to use values from the form
// 	   var beciPercentage = parseFloat(frm.doc.beci_percentage); // Modified to use values from the form
   
// 	   // Check if necessary values are valid numbers
// 	   if (isNaN(amountRecovered) || isNaN(lawyerPercentage) || isNaN(reinsurerPercentage) || isNaN(beciPercentage)) {
// 		   console.error("One or more input values are not valid numbers.");
// 		   return; // Exit function if input values are not valid
// 	   }
   
// 	   // Calculate LawAmt
// 	   var lawAmt = amountRecovered * (lawyerPercentage / 100);
// 	   console.log("Law Amt:", lawAmt);
// 	   // Calculate Remaining
// 	   var remaining = amountRecovered - lawAmt;
   
// 	   // Calculate reinsurer_amount and beci_amount
// 	   var reinsurerAmount = (remaining * (reinsurerPercentage / 100)).toFixed(2);
// 	   var beciAmount = (remaining * (beciPercentage / 100)).toFixed(2);
   
// 	   // Set values in the form
// 	   frm.set_value('reinsurer_amount', reinsurerAmount);
// 	   frm.set_value('beci_amount', beciAmount);
//    }
   
//    function generateNumberRecoveryNo(frm) {
// 	   // Check if the proposal number field is already populated
// 	   if (!frm.doc.recovery_no) {
// 		   // Get the current year
// 		   let currentYear = new Date().getFullYear();
// 		   let prefix = `REC/${currentYear}/`;
	
// 		   // Make a call to get the last number asynchronously
// 		   frappe.call({
// 			   method: 'frappe.client.get_list',
// 			   args: {
// 				   doctype: 'CI Recoveries',
// 				   fields: ['recovery_no', 'creation'],
// 				   order_by: 'creation desc',
// 				   limit: 1
// 			   },
// 			   callback: function(r) {
// 				   if (r.message && r.message.length > 0) {
// 					   let lastProposalNo = r.message[0].recovery_no;
// 					   let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
// 					   if (!isNaN(lastNumber)) {
// 						   // Increment the last number and pad it with leading zeros
// 						   let newNumber = (lastNumber + 1).toString().padStart(4, '0');
// 						   frm.set_value('recovery_no', prefix + newNumber);
// 					   }
// 				   } else {
// 					   // If no previous numbers exist, set to default '0001'
// 					   frm.set_value('recovery_no', prefix + '0001');
// 				   }
// 			   }
// 		   });
// 	   }
//    }
   
//    function generateNumberReceiptNo(frm) {
// 	   // Check if the proposal number field is already populated
// 	   if (!frm.doc.receipt_no) {
// 		   // Get the current year
// 		   let currentYear = new Date().getFullYear();
// 		   let prefix = `RCPT/${currentYear}/`;
	
// 		   // Make a call to get the last number asynchronously
// 		   frappe.call({
// 			   method: 'frappe.client.get_list',
// 			   args: {
// 				   doctype: 'CI Recoveries',
// 				   fields: ['receipt_no', 'creation'],
// 				   order_by: 'creation desc',
// 				   limit: 1
// 			   },
// 			   callback: function(r) {
// 				   if (r.message && r.message.length > 0) {
// 					   let lastProposalNo = r.message[0].receipt_no;
// 					   let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
// 					   if (!isNaN(lastNumber)) {
// 						   // Increment the last number and pad it with leading zeros
// 						   let newNumber = (lastNumber + 1).toString().padStart(4, '0');
// 						   frm.set_value('receipt_no', prefix + newNumber);
// 					   }
// 				   } else {
// 					   // If no previous numbers exist, set to default '0001'
// 					   frm.set_value('receipt_no', prefix + '0001');
// 				   }
// 			   }
// 		   });
// 	   }
//    }
   
   
   
   
   
   
   //   frappe.call({
   //             method: 'frappe.client.get_list',
   //             args: {
   //                 doctype: 'CI Claim',
   //                 filters: {
   //                     workflow_state: "Approved"
   //                 },
   //                 fields: ['ph_name']
   //             },
   //             callback: function(response) {
   //                 let DataArray = []
   //                 DataArray = response.message;
   //                 let FinalArray = [];
	
   //                 for (let x of DataArray) {
   //                     FinalArray.push(x.ph_name)
	
   //                 }
   //                 frm.set_df_property('ph_name', 'options', FinalArray);
   //                 console.log("final", FinalArray)
	
   //             },
   //             error: function(xhr, textStatus, errorThrown) {
   //                 console.error("Error fetching approved bonds:", textStatus, errorThrown);
   //             }
   //         });
