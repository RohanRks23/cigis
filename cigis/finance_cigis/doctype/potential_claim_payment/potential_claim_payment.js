// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Potential Claim Payment', {
// 	refresh(frm) {
// 	frm.fields_dict.credit_limit.$input.css("text-align", "right");
// 	frm.fields_dict.total_payment.$input.css("text-align", "right");
// 	frm.fields_dict.total_potential_claim_value.$input.css("text-align", "right");
// 	frm.fields_dict.balance_claim_value.$input.css("text-align", "right");
// 	frm.fields_dict.amount_paid.$input.css("text-align", "right");
	
// 			 var workflowState = frm.doc.workflow_state;
	
	
// 	if (workflowState === "Approved") {
// 		frm.toggle_display('policy_no', false);
// 		frm.toggle_display('policy_no1', true);
		
// 		frm.toggle_display('buyer', false);
// 		frm.toggle_display('buyer1', true);
		
// 		frm.toggle_display('potential_claim_no', false);
// 		frm.toggle_display('potential_claim_no1', true);
// 	} else {
// 		// If workflow state is not "Approved", reverse the display
// 		frm.toggle_display('policy_no', true);
// 		frm.toggle_display('policy_no1', false);
		
// 		frm.toggle_display('buyer', true);
// 		frm.toggle_display('buyer1', false);
		
// 		frm.toggle_display('potential_claim_no', true);
// 		frm.toggle_display('potential_claim_no1', false);
// 	}
	
// 		},
// 		onload(frm){
// 			frappe.call({
// 			method: 'frappe.client.get_list',
// 			args: {
// 				doctype: 'Potential Claims',
// 				 filters: {
// 						workflow_state: 'Approved'
// 					},
// 				fields: ['ph_name'],
// 				limit_page_length: 100 
// 			},
// 			callback: function(response) {
// 				console.log("ph_name received:", response);
// 				let DataArray = response.message;
// 				let uniqueFacilityNos = new Set();
	 
// 				// Collect unique ph_name values
// 				for (let x of DataArray) {
// 					uniqueFacilityNos.add(x.ph_name);
// 				}
	 
// 				// Convert set to array
// 				let FinalArray = Array.from(uniqueFacilityNos);
	 
// 				frm.set_df_property('ph_name', 'options', FinalArray);
// 				console.log("final", FinalArray);
// 			},
// 			error: function(xhr, textStatus, errorThrown) {
// 				console.error("Error fetching ph_name:", textStatus, errorThrown);
// 			}
// 		});
// 		   generatePaymentNumber(frm) 
// 		},
// 		ph_name: function(frm) {
// 			if (frm.doc.ph_name) {
// 				frappe.call({
// 					method: 'frappe.client.get_list',
// 					args: {
// 						doctype: 'Potential Claims',
// 						filters: {
// 							'ph_name': frm.doc.ph_name
// 						},
// 					fields:['policyno']  
// 					},
// 					callback: function(r) {
// 						if (r.message) {
// 							let options = r.message.map(policy => policy.policyno);
// 							frm.set_df_property('policy_no', 'options', options);
// 							frm.refresh_field('policy_no');
// 						}
// 					}
// 				});
// 			}
// 		},
// 		policy_no: function(frm) {
// 					var PolicyNo = frm.doc.policy_no;
// 		frm.set_value('policy_no1', PolicyNo);
	
// 			if (frm.doc.policy_no) {
// 				frappe.call({
// 					method: 'frappe.client.get_list',
// 					args: {
// 						doctype: 'Potential Claims',
// 						filters: {
// 							'policyno': frm.doc.policy_no
// 						},
// 					fields:['buyer']  
// 					},
// 					callback: function(r) {
// 						if (r.message) {
// 							let options = r.message.map(policy => policy.buyer);
// 							frm.set_df_property('buyer', 'options', options);
// 							frm.refresh_field('buyer');
							
// 						}
// 					}
// 				});
// 			}
// 		},
// 		buyer: function(frm) {
			
// 			 var Buyers = frm.doc.buyer;
// 		frm.set_value('buyer1', Buyers);
	
// 			if (frm.doc.buyer) {
// 				frappe.call({
// 					method: 'frappe.client.get_list',
// 					args: {
// 						doctype: 'Potential Claims',
// 						filters: {
// 							'buyer': frm.doc.buyer
// 						},
// 					fields:['claim_ref_no']  
// 					},
// 					callback: function(r) {
// 						if (r.message) {
// 							let options = r.message.map(policy => policy.claim_ref_no);
// 							frm.set_df_property('potential_claim_no', 'options', options);
// 							frm.refresh_field('potential_claim_no');
// 						}
// 					}
// 				});
// 			}
// 		},
// 		potential_claim_no: function(frm) {
// 			var PotentialClaimNo = frm.doc.potential_claim_no;
// 		frm.set_value('potential_claim_no1', PotentialClaimNo);
// 		frappe.call({
// 			method: 'frappe.client.get_list',
// 			args: {
// 				doctype: 'Potential Claims',
// 				filters: {
// 					potential_claim_no: frm.doc.claim_ref_no,
// 					workflow_state: 'Approved'
// 				},
// 				fields: ['inception_date', 'claim_value', 'terms_of_payment', 'client_type', 'cl_inception_date', 'credit_limit']
// 			},
// 			callback: function(r) {
// 				if (r.message && r.message.length > 0) {
// 					var data = r.message[0];
// 					frappe.call({
// 						method: 'frappe.client.get_list',
// 						args: {
// 							doctype: 'Potential Claim Payment',
// 							filters: {
// 								policy_no: frm.doc.policy_no,
// 								workflow_state: 'Approved'
// 							},
// 							fields: ['policy_no']
// 						},
// 						callback: function(approvedResponse) {
// 							if (approvedResponse.message && approvedResponse.message.length > 0) {
// 								frappe.msgprint('This policy number is already approved.');
// 							} else {
// 								// Populate fields if data is found
// 								frm.set_value('total_potential_claim_value', data.claim_value || '');
// 								frm.set_value('balance_claim_value', data.claim_value || '');
// 								frm.set_value('inception_date', data.inception_date || '');
// 								frm.set_value('client_type', data.client_type || '');
// 								frm.set_value('cl_inception_date', data.cl_inception_date || '');
// 								frm.set_value('terms_of_payment', data.terms_of_payment || '');
// 								frm.set_value('credit_limit', data.credit_limit || '');
// 							}
// 						},
// 						error: function(err) {
// 							console.error('Error fetching data from Potential Claim Payment:', err);
// 							frappe.msgprint('Failed to fetch data from Potential Claim Payment. Please try again.');
// 						}
// 					});
// 				} else {
// 					frappe.msgprint('No approved potential claims found for this claim reference number.');
// 				}
// 			},
// 			error: function(err) {
// 				console.error('Error fetching data from Potential Claims:', err);
// 				frappe.msgprint('Failed to fetch data from Potential Claims. Please try again.');
// 			}
// 		});
// 	}
	
// 	});
	
	// Function to generate unique payment number
	// function generatePaymentNumber(frm) {
	// 	// Check if the payment number field is already populated
	// 	if (!frm.doc.payment_no) {
	// 		let currentYear = new Date().getFullYear();
	// 		let prefix = `PCP/${currentYear}/`;
	
	// 		// Get the last payment number asynchronously
	// 		frappe.call({
	// 			method: 'frappe.client.get_list',
	// 			args: {
	// 				doctype: 'Potential Claim Payment',
	// 				fields: ['payment_no'],
	// 				order_by: 'creation desc',
	// 				limit: 1
	// 			},
	// 			callback: function(r) {
	// 				if (r.message && r.message.length > 0) {
	// 					let lastPaymentNo = r.message[0].payment_no;
	// 					let lastNumber = parseInt(lastPaymentNo.split("/").pop()) || 0; // Extract last part and parse it as integer
	// 					let newNumber = (lastNumber + 1).toString().padStart(4, '0');
	// 					frm.set_value('payment_no', prefix + newNumber);
	// 				} else {
	// 					// If no previous numbers exist, set to default '0001'
	// 					frm.set_value('payment_no', prefix + '0001');
	// 				}
	// 			},
	// 			error: function(err) {
	// 				console.error('Error fetching payment number:', err);
	// 				frappe.msgprint('Failed to generate payment number. Please try again.');
	// 			}
	// 		});
	// 	}
	// }
