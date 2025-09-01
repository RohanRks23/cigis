// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Domestic Declarations', {

 
// 	refresh : function(frm) {
		

// 		alignFieldsRight(frm, fieldsToAlignRight);
	   
	   
	
//    generateDDNumber(frm);
   
   
//    frm.set_df_property('outstanding1', 'cannot_add_rows', true); 
//    frm.set_df_property('turnover1', 'cannot_add_rows', true); 

	
// 	//----------------------------------------
// 	   var workflow_state = frm.doc.workflow_state;

// 	   // Check if the workflow state is "Approved"
// 	   if (workflow_state === "Approved") {
// 		   // Show policy_holder1 field and hide policy_holder field
// 		   frm.toggle_display('policy_holder1', true);
// 		   frm.toggle_display('policy_holder', false);
// 	   } else {
// 		   // If workflow state is not "Approved", reverse the display
// 		   frm.toggle_display('policy_holder1', false);
// 		   frm.toggle_display('policy_holder', true);
// 	   }
   
//    var workflow_state1 = frm.doc.workflow_state;
// 		// Check if the workflow state is "Approved"
// 	   if (workflow_state1 === "Approved") {
// 		   // Show policy_holder1 field and hide policy_holder field
// 		   frm.toggle_display('policy_number1', true);
// 		   frm.toggle_display('policy_number', false);
// 	   } else {
// 		   // If workflow state is not "Approved", reverse the display
// 		   frm.toggle_display('policy_number1', false);
// 		   frm.toggle_display('policy_number', true);
// 	   }
  
//  frappe.call({
// 	   method: 'frappe.client.get_list',
// 	   args: {
// 		   doctype: 'Policy Approvals',
// 		   'filters': {
// 		 'workflow_state': 'Approved',
// 		  'policy_type': 'DCI'
// 	  },
// 		   fields: ['policy_holder'],
// 			limit_page_length: 100 
// 	   },
// 	   callback: function(response) {
// 		   console.log("policy_holder received:", response);
// 		   let DataArray = response.message;
// 		   let uniqueFacilityNos = new Set();

// 		   // Collect unique facility_no values
// 		   for (let x of DataArray) {
// 			   uniqueFacilityNos.add(x.policy_holder);
// 		   }

// 		   // Convert set to array
// 		   let FinalArray = Array.from(uniqueFacilityNos);

// 		   frm.set_df_property('policy_holder', 'options', FinalArray);
// 		   console.log("final", FinalArray);
// 	   },
// 	   error: function(xhr, textStatus, errorThrown) {
// 		   console.error("Error fetching policy_holder:", textStatus, errorThrown);
// 	   }
//    });  




// frappe.call({
// 		   method: 'frappe.client.get_list',
// 		   args: {
// 			   'doctype': 'Buyer',
// 			   'filters': {'dci': 1}, // Assuming you have a field 'dci' to identify DCI buyers
// 			   'fields': ['buyer_name'],
// 				limit_page_length: 100 // Adjust fields as needed
// 		   },
// 		   callback: function(response) {
// 			   var dci_buyers = response.message;
// 			   var options = dci_buyers.map(buyer => buyer.buyer_name);

// 			   // Set options for buyer_name and buyername1 fields
// 			   frm.set_df_property('buyer_name', 'options', options);
// 			   frm.set_df_property('buyername1', 'options', options);
// 		   }
// 	   });
	   
	   

//    },
   
// 	 onload: function(frm) {
// 	   alignFieldsRight(frm, fieldsToAlignRight);

// 	   //hide Sno.
// 	  //   $('<style>')
// 		   // .prop('type', 'text/css')
// 		   // .html('.row-index > span { display: none; }')
// 		   // .appendTo('head');
	   
//   },




//    without_vat: function(frm) {
// 	  if (frm.doc.without_vat) {
// 	 frm.set_value('vat_percentage', frm.doc.without_vat ? 0 : '');
// 	   }
//    },
   
//    with_vat: function(frm) {
// 	   if (frm.doc.with_vat) {
// 		   // Fetch VAT percentage from 'VAT' doctype
// 		   frappe.call({
// 			   method: 'frappe.client.get_list',
// 			   args: {
// 				   doctype: 'VAT',
// 				   limit: 1, // Fetch the first document
// 				   fields: ['vat']
// 			   },
// 			   callback: function(r) {
// 				   if (r.message && r.message.length > 0) {
// 					   frm.set_value('vat_percentage', r.message[0].vat);
// 					   frm.set_value('without_vat', 0); // Uncheck 'without_vat' checkbox
// 				   } else {
// 					   frappe.msgprint(__('Unable to fetch VAT percentage. Please try again.'));
// 					   frm.set_value('with_vat', 0); // Uncheck 'with_vat' checkbox if VAT fetch fails
// 				   }
// 			   }
// 		   });
// 	   } else {
// 		   frm.set_value('vat_percentage', '0'); // Clear the vat_percentage field if 'with_vat' is unchecked
// 	   }
//    },
   
   
//    policy_holder: function(frm) {
//    var policyHolder = frm.doc.policy_holder;

//    console.log("Policy Holder:", policyHolder); // Check policy_holder value

//    // Check if policy_holder is not empty and matches a specific condition
//    if (policyHolder) {
// 	   frappe.call({
// 		   method: 'frappe.client.get_list',
// 		   args: {
// 			   doctype: 'Policy Approvals',
// 			   filters: {
// 				   'policy_holder': policyHolder,
// 				   'policy_type': 'DCI'
// 			   },
// 			   fields: ['policy_number']
// 		   },
// 		   callback: function(response) {
// 			   console.log("Response:", response); // Check response from server

// 			   if (response.message && response.message.length > 0) {
// 				   var policyNumbers = response.message.map(item => item.policy_number);
// 				   console.log("Policy Numbers:", policyNumbers); // Check policy numbers fetched

// 				   // Update dropdown field options
// 				   frm.set_df_property('policy_number', 'options', policyNumbers);
// 				   frm.refresh_field('policy_number'); // Refresh dropdown field
// 			   } else {
// 				   // Clear dropdown field options if no data found
// 				   frm.set_df_property('policy_number', 'options', []);
// 				   frm.refresh_field('policy_number'); // Refresh dropdown field
// 			   }
// 		   },
// 		   error: function(err) {
// 			   console.error("Error fetching Policy Approvals:", err); // Log error to console
// 			   frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
// 		   }
// 	   });
//    } else {
// 	   // Clear dropdown field options if policy_holder condition is not met
// 	   frm.set_df_property('policy_number', 'options', []);
// 	   frm.refresh_field('policy_number'); // Refresh dropdown field
//    }
// },


//    // policy_number: function(frm) {
//    //     var policyHolder = frm.doc.policy_number;

	 
	   
//    //     frappe.call({
//    //         method: 'frappe.client.get_list',
//    //         args: {
//    //             doctype: 'Policy Approvals',
//    //             filters: {
//    //                 'policy_number': frm.doc.policy_number,
//    //                 'policy_type': 'DCI'
			 
//    //         },
//    //             fields: ['policy_holder', 'policy_number','status', 'inception_date', 'expiry_date']
//    //         },
//    //         callback: function(response) {
//    //             if (response.message && response.message.length > 0) {
//    //                 var policyApprovalData = response.message[0];

//    //                 // Populate fields if data is found
//    //               frm.set_value('policy_holder', policyApprovalData.policy_holder || '');
//    //                 frm.set_value('policy_holder1', policyApprovalData.policy_holder || '');
//    //                 frm.set_value('policy_number', policyApprovalData.policy_number || '');
//    //                 frm.set_value('policy_number1', policyApprovalData.policy_number || '');
//    //                 frm.set_value('status', policyApprovalData.status || '');
//    //                 frm.set_value('inception_date', policyApprovalData.inception_date || '');
//    //                 frm.set_value('expiry_date', policyApprovalData.expiry_date || '');
//    //             } else {
//    //                 // Clear fields if no matching record found
//    //                 frm.set_value('policy_holder', '');
//    //                 frm.set_value('policy_holder1', '');
//    //                 frm.set_value('policy_number', '');
//    //                 frm.set_value('policy_number1', '');
//    //                 frm.set_value('status', '');
//    //                 frm.set_value('inception_date', '');
//    //                 frm.set_value('expiry_date', '');
//    //                 frappe.msgprint('No matching record found in Policy Approvals for the selected policy holder.');
//    //             }
//    //         },
//    //         error: function(err) {
//    //             console.error(err);
//    //             frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
//    //         }
//    //     });


//    // },
//    policy_number: function(frm) {
//    var policyNumber = frm.doc.policy_number;

//    // Fetch data from Policy Approvals
//    frappe.call({
// 	   method: 'frappe.client.get_list',
// 	   args: {
// 		   doctype: 'Policy Approvals',
// 		   filters: {
// 			   'policy_number': policyNumber,
// 			   'policy_type': 'DCI'
// 		   },
// 		   fields: ['policy_holder', 'policy_number', 'status', 'inception_date', 'expiry_date']
// 	   },
// 	   callback: function(response) {
// 		   if (response.message && response.message.length > 0) {
// 			   var policyApprovalData = response.message[0];

// 			   // Check if the policy number is already approved in Export Declarations
// 			   frappe.call({
// 				   method: 'frappe.client.get_list',
// 				   args: {
// 					   doctype: 'Domestic Declarations',
// 					   filters: {
// 						   'policy_number': policyNumber,
// 						   'workflow_state': 'Approved'
// 					   },
// 					   fields: ['policy_number']
// 				   },
// 				   callback: function(approvedResponse) {
// 					   if (approvedResponse.message && approvedResponse.message.length > 0) {
// 						   frappe.msgprint('This policy number is already approved.');
// 					   } else {
						
// 				   // Populate fields if data is found
// 				   frm.set_value('policy_holder', policyApprovalData.policy_holder || '');
// 				   frm.set_value('policy_holder1', policyApprovalData.policy_holder || '');
// 				   frm.set_value('policy_number', policyApprovalData.policy_number || '');
// 				   frm.set_value('policy_number1', policyApprovalData.policy_number || '');
// 				   frm.set_value('status', policyApprovalData.status || '');
// 				   frm.set_value('inception_date', policyApprovalData.inception_date || '');
// 				   frm.set_value('expiry_date', policyApprovalData.expiry_date || '');
// 					   }
// 				   },
// 				   error: function(err) {
// 					   console.error("Error fetching approved policy numbers:", err);
// 					   frappe.msgprint('An error occurred while checking approved policy numbers. Please check the console for details.');
// 				   }
// 			   });
// 		 } else {
// 				   // Clear fields if no matching record found
// 				   frm.set_value('policy_holder', '');
// 				   frm.set_value('policy_holder1', '');
// 				   frm.set_value('policy_number', '');
// 				   frm.set_value('policy_number1', '');
// 				   frm.set_value('status', '');
// 				   frm.set_value('inception_date', '');
// 				   frm.set_value('expiry_date', '');
// 				   frappe.msgprint('No matching record found in Policy Approvals for the selected policy holder.');
// 			   }
// 	   },
// 	   error: function(err) {
// 		   console.error("Error fetching Policy Approvals:", err);
// 		   frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
// 	   }
//    });
// },

   
   
//    prepare_invoice: function(frm) {
//    // Add 'btn-primary' class to the button to set its color to blue
//    frm.fields_dict.prepare_invoice.$input.addClass('btn-primary');
   
//    // Get the policy holder's name, year, and month from the current form
//    var policy_holder = frm.doc.policy_holder;
//    var year = frm.doc.year; 
//    var month = frm.doc.month;
//    var vat = frm.doc.vat_percentage;
//    var status = frm.doc.status;

//    // Set the route options to pass the policy holder's name, year, and month
//    frappe.route_options = {
// 	   "name1": policy_holder,
// 	   "year": year,
// 	   "month": month,
// 	   "vat": vat,
// 	   "status": status
//    };

//    // Open a new document of 'Submit to Finance' doctype
//    frappe.new_doc('Submit to Finance');
// },


   
// upload1(frm) {

// console.log("upload1 function called"); // Log to trace function call
//    var file1 = frm.doc.upload1;

//    // Check if a file is uploaded
//    if (file1) {
// 	 console.log("File uploaded: ", file1); // Log file upload
// 	   // Get the file extension
// 	   var fileExtension1 = file1.split('.').pop().toLowerCase();

// 	   // Allowed file extensions (Excel and PDF)
// 	   var allowedExtensions1 = ['xlsx', 'xls'];

// 	   // Check if the file extension is allowed
// 	   if (!allowedExtensions1.includes(fileExtension1)) {
// 		   // Show an error message
// 			frappe.msgprint(__("Only Excel (.xlsx, .xls) files are allowed"));
// 		   // Clear the file field
// 		   frm.set_value('upload1', '');
// 		   // clearTableAndTotal(frm);
// 		   // return;
// 	   }

// 	   // If the uploaded file is an Excel file, make the API call
// 	 frm.call({
// 			   doc: frm.doc,
// 			   method: 'extractData1',
// 			   callback: function(response) {
// 				   console.log(response.message, "res");
// 				   if (!response.exc) {
// 					   console.log(response.message, "hi");
// 					   var data = response.message;
// 					   // Clear the form before loading data into child table
// 					   frappe.model.clear_doc(frm.doc);
// 					   frm.clear_table('outstanding1');
// 					   var grandTotal = 0; // Initialize grand total to 0
// 					   for (let x of data) {
// 						   var child = frappe.model.add_child(frm.doc, "Outstanding_Turnover_table", "outstanding1");
// 						   console.log(child, "s");
// 						   frappe.model.set_value(child.doctype, child.name, "buyer", x.Buyer);
// 						   frappe.model.set_value(child.doctype, child.name, "current", x.Current);
// 						   frappe.model.set_value(child.doctype, child.name, "30_days", x['30Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "60_days", x['60Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "90_days", x['90Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "120days", x['120Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "credit_days", x['Credit Days']);
// 						   // Calculate total for each row
// 						   var total = parseFloat(x.Current || 0) + parseFloat(x['30Days'] || 0) + parseFloat(x['60Days'] || 0) + parseFloat(x['90Days'] || 0) + parseFloat(x['120Days'] || 0);
// 						   frappe.model.set_value(child.doctype, child.name, "total", total);
						  
						
// 						   // Calculate adjust_wo_vat
						   
// 							var vatpercentage =frm.doc.vat_percentage;
							
// 							var adjust_wo_vat = total / (1 + (vatpercentage / 100));
							
// 							frappe.model.set_value(child.doctype, child.name, "adjust_wo_vat", adjust_wo_vat);
							
// 				   //set te value for "grand total"
// 							 var childTableData = frm.doc.outstanding1 || [];
// 							 var grandTotal = childTableData.reduce(function(total, row) {
// 							 var rowTotal = parseFloat(row.total) || 0;
// 							 return total + rowTotal;
// 							 }, 0);
						 
// 							frm.set_value('grandtotal', grandTotal);
							
// 				   //set the value for adjusted with out vat
// 							 var adjustedvat = childTableData.reduce(function(adjust_wo_vat, row) {
// 							 var rowTotal = parseFloat(row.adjust_wo_vat) || 0;
// 							 return adjust_wo_vat + rowTotal;
// 							 }, 0);
						   
// 							 frm.set_value('outstanding_adjusted_wo_vat', adjustedvat);

							
// 						   // calculateGrandTotal(frm);
// 						   // calculateadjustedwithoutvat(frm); 
						   
// 					   }
// 					   frm.refresh_fields('outstanding1');
// 					   console.log(data);
// 				   } else {
					 
// 					   console.error(response.exc);
// 				   }
// 			   }
// 		   });
//    } else {
// 	   // If no file is uploaded, clear the table and grand_total field
// 	   clearTableAndTotal(frm);
// 	   return;
//    }
// },

 
// upload(frm) {
//    var file = frm.doc.upload;

//    // Check if a file is uploaded
//    if (file) {
// 	   // Get the file extension
// 	   var fileExtension = file.split('.').pop().toLowerCase();

// 	   // Allowed file extensions (Excel and PDF)
// 	   var allowedExtensions = ['xlsx', 'xls'];

// 	   // Check if the file extension is allowed
// 	   if (!allowedExtensions.includes(fileExtension)) {
// 		   // Show an error message
// 		   frappe.msgprint(__("Only Excel (.xlsx, .xls) files are allowed"));
// 		   // Clear the file field
// 		   frm.set_value('upload', '');
// 		   // clearTableAndTotal(frm);
// 		   // return;
// 	   }

// 	   // If the uploaded file is an Excel file, make the API call
// 			   frm.call({
// 			   doc: frm.doc,
// 			   method: 'extractData',
// 			   callback: function(response) {
// 				   console.log(response.message, "res");
// 				   if (!response.exc) {
// 					   console.log(response.message, "hi");
// 					   var data = response.message;
// 					   // Clear the form before loading data into child table
// 					   frappe.model.clear_doc(frm.doc);
// 					   frm.clear_table('turnover1');
// 					   var grandTotal = 0; // Initialize grand total to 0
// 					   for (let x of data) {
// 						   var child = frappe.model.add_child(frm.doc, "Outstanding_Turnover_table", "turnover1");
// 						   console.log(child, "s");
// 						   frappe.model.set_value(child.doctype, child.name, "buyer", x.Buyer);
// 						   frappe.model.set_value(child.doctype, child.name, "current", x.Current);
// 						   frappe.model.set_value(child.doctype, child.name, "30_days", x['30Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "60_days", x['60Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "90_days", x['90Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "120days", x['120Days']);
// 						   frappe.model.set_value(child.doctype, child.name, "credit_days", x['Credit Days']);
// 						   // Calculate total for each row
// 						   var total = parseFloat(x.Current || 0) + parseFloat(x['30Days'] || 0) + parseFloat(x['60Days'] || 0) + parseFloat(x['90Days'] || 0) + parseFloat(x['120Days'] || 0);
// 						   frappe.model.set_value(child.doctype, child.name, "total", total);
					 
// 							frappe.model.set_value(child.doctype, child.name, "adjust_wo_vat", total);
						  
// 						 //set value for rand total
// 						 var childTableData = frm.doc.turnover1 || [];
  
// 						 var grandTotal = childTableData.reduce(function(total, row) {
// 						 var rowTotal = parseFloat(row.total) || 0;
// 						 return total + rowTotal;
// 						 }, 0);
	
// 						 console.log("Grand Total:", grandTotal);
// 							frm.set_value('grandtotal1', grandTotal);


// 						   //set value for adjusted vat for turnover
						 
// 						 var adjustedvat = childTableData.reduce(function(adjust_wo_vat, row) {
// 						 var rowTotal = parseFloat(row.adjust_wo_vat) || 0;
// 						 return adjust_wo_vat + rowTotal;
// 						 }, 0);
// 						 console.log("Grand Total:", grandTotal);
// 						 frm.set_value('turnover_adjusted_wo_vat', adjustedvat);

						  
// 						   // calculateGrandTotal1(frm);
// 						   // calculateadjustedwithoutvat1(frm); 
// 					   }
// 					   frm.refresh_fields('turnover1');
// 					   console.log(data);
// 				   } else {
					
// 					   console.error(response.exc);
// 				   }
// 			   }
// 		   });
//    } else {
// 	   // If no file is uploaded, clear the table and grand_total field
// 	   clearTableAndTotal1(frm);
// 	   return;
//    }
// },
   
   

//    thirty_days: function(frm) { updateTotal(frm); },
//    sixty_days: function(frm) { updateTotal(frm); },
//    current: function(frm){ updateTotal(frm); },
//    ninety_days: function(frm){ updateTotal(frm); },
//    onetwenty_days: function(frm){ updateTotal(frm); },

//    thirty_days1: function(frm) { updateTotal1(frm); },
//    sixty_days1: function(frm) { updateTotal1(frm); },
//    ninety_days1: function(frm){ updateTotal1(frm); },
//    onetwenty_days1: function(frm){ updateTotal1(frm); },
//    current1: function(frm){ updateTotal1(frm); },

//    add: function(frm){
//    addToChildTable(frm); 
//   // calculateGrandTotal(frm); 
//    calculateadjustedwithoutvat(frm);    
// 	calculateAndDisplayTotals(frm);
//    },
//    add1: function(frm) {
//    addToChildTable1(frm); 
//    //calculateGrandTotal1(frm); 
//    calculateadjustedwithoutvat1(frm);
// 	   calculateAndDisplayTotalsTurnover(frm);
//    },
   
// 	outstanding1: {
// 	   thirty_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   },
// 	   sixty_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   },
// 	   ninety_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   },
// 	   onetwenty_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   },
// 	   current: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   },
// 	   total: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   },
// 	   adjust_wo_vat: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotals(frm);
// 	   }
//    },
// 	turnover1: {
// 	   current: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   },
// 	   thirty_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   },
// 	   sixty_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   },
// 	   ninety_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   },
// 	   onetwenty_days: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   },
// 	   total: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   },
// 	   adjust_wo_vat: function(frm, cdt, cdn) {
// 		   calculateAndDisplayTotalsTurnover(frm);
// 	   }
//    }
   
   
//    // buyer_name: function(frm) {
//    //     if (!frm.doc.year && !frm.doc.month) {
//    //         frappe.msgprint(__('Please fill the year and month fields.'));
//    //         frappe.validated = false;
//    //     } else if (!frm.doc.year) {
//    //         frappe.msgprint(__('Please fill the year field.'));
//    //         frappe.validated = false;
//    //     } else if (!frm.doc.month) {
//    //         frappe.msgprint(__('Please fill the month field.'));
//    //         frappe.validated = false;
//    //     }
//    // },
   
//    // current: function(frm) {
//    //     if (!frm.doc.buyer_name) {
//    //         frappe.msgprint(__('Please select the buyer.'));
//    //         frappe.validated = false;
//    //     }
//    // },
   
//    // buyername1: function(frm) {
//    //     if (!frm.doc.year && !frm.doc.month) {
//    //         frappe.msgprint(__('Please fill the year and month fields.'));
//    //         frappe.validated = false;
//    //     } else if (!frm.doc.year) {
//    //         frappe.msgprint(__('Please fill the year field.'));
//    //         frappe.validated = false;
//    //     } else if (!frm.doc.month) {
//    //         frappe.msgprint(__('Please fill the month field.'));
//    //         frappe.validated = false;
//    //     }
//    // },
   
//    // turn: function(frm) {
//    //     if (!frm.doc.buyer_name) {
//    //         frappe.msgprint(__('Please select the buyer.'));
//    //         frappe.validated = false;
//    //     }
//    // },

//    // current1: function(frm) {
//    //     if (!frm.doc.buyer_name) {
//    //         frappe.msgprint(__('Please select the buyer.'));
//    //         frappe.validated = false;
//    //     }
//    // }




// });



// function generateDDNumber(frm) {
//    // Check if the ed_number field is already populated
//    if (!frm.doc.ed_number) {
// 	   // Get the current year
// 	   let currentYear = new Date().getFullYear();
// 	   let prefix = `DCL/${currentYear}/`;

// 	   // Make a call to get the last Export Declarations number asynchronously
// 	   frappe.call({
// 		   method: 'frappe.client.get_list',
// 		   args: {
// 			   doctype: 'Export Declarations',
// 			   fields: ['ed_number'],
// 			   limit: 1,
// 			   order_by: 'creation desc'
// 		   },
// 		   callback: function(response) {
// 			   let lastEDNumber = response.message && response.message.length > 0 ? response.message[0].ed_number : '0';
// 			   let lastNumber = parseInt(lastEDNumber.split("/").pop()) || 0; // Extract last part and parse it as integer

// 			   // Make a call to get the last Domestic Declarations number asynchronously
// 			   frappe.call({
// 				   method: 'frappe.client.get_list',
// 				   args: {
// 					   doctype: 'Domestic Declarations',
// 					   fields: ['ed_number'],
// 					   limit: 1,
// 					   order_by: 'creation desc'
// 				   },
// 				   callback: function(response) {
// 					   let lastDomesticDeclarationsDDNumber = response.message && response.message.length > 0 ? response.message[0].ed_number : '0';
// 					   let lastDomesticDeclarationsDDNo = parseInt(lastDomesticDeclarationsDDNumber.split("/").pop()) || 0;

// 					   // Get the maximum of the last two numbers
// 					   let maxLastNumber = Math.max(lastNumber, lastDomesticDeclarationsDDNo);

// 					   // Increment the last number and pad it with leading zeros
// 					   let newNumber = (maxLastNumber + 1).toString().padStart(4, '0');
// 					   frm.set_value('ed_number', prefix + newNumber);
// 				   }
// 			   });
// 		   }
// 	   });
//    }
// }





// // Function to clear table and grand_total field
// function clearTableAndTotal(frm) {
//    // Clear the table
//    frm.clear_table('outstanding1');
//    // Clear the grand_total field
//    frm.set_value('grandtotal', '');
//    frm.set_value('outstanding_adjusted_wo_vat', '');
// }

// function clearTableAndTotal1(frm) {
//    // Clear the table
//    frm.clear_table('turnover1');
//    // Clear the grand_total field
//    frm.set_value('grandtotal1', '');
//    frm.set_value('turnover_adjusted_wo_vat', '');
// }


// function updateTotal(frm) {
//    var total30 = parseFloat(frm.doc['thirty_days']) || 0;
//    var total60 = parseFloat(frm.doc['sixty_days']) || 0;
//    var total90 = parseFloat(frm.doc['ninety_days']) || 0;
//    var total120 = parseFloat(frm.doc['onetwenty_days']) || 0;
//    var totalcurrent = parseFloat(frm.doc['current']) || 0;
//    var total = total30 + total60 + total90 + total120 + totalcurrent;
   
//    var novat = totalcurrent+total30+total60+total90;
   
//    frm.set_value('total', total);
   
// 	var vatpercentage =frm.doc.vat_percentage;
							
// 	var adjust_wo_vat = novat / (1 + (vatpercentage / 100));
							
// 	frm.set_value('adjusted', adjust_wo_vat);
   
//    }

// function updateTotal1(frm) {
//    var total30 = parseFloat(frm.doc['thirty_days1']) || 0;
//    var total60 = parseFloat(frm.doc['sixty_days1']) || 0;
//    var total90 = parseFloat(frm.doc['ninety_days1']) || 0;
//    var total120 = parseFloat(frm.doc['onetwenty_days1']) || 0;
//    var totalcurrent1 = parseFloat(frm.doc['current1']) || 0;
//    var total = total30 + total60 + total90 + total120 + totalcurrent1;

// 	   var novat1 = totalcurrent1+total30+total60+total90;

//    frm.set_value('total1', total);
   
  
	 
// 	var vatpercentage =frm.doc.vat_percentage;
							
// 	var adjust_wo_vat = novat1 / (1 + (vatpercentage / 100));
							
// 	frm.set_value('adjusted1', adjust_wo_vat);
   
						  
   

// }

// function addToChildTable(frm) {
//    var row = frappe.model.add_child(frm.doc, "Outstanding_Turnover_table", "outstanding1");
//    row["buyer"] = frm.doc['buyer_name'];
//    row["credit_days"] = frm.doc['credit_days'];
//    row["current"] = frm.doc['current'];
//    row["30_days"] = frm.doc['thirty_days'];
//    row["60_days"] = frm.doc['sixty_days'];
//    row["90_days"] = frm.doc['ninety_days'];
//    row["120days"] = frm.doc['onetwenty_days'];
//    row.total = frm.doc['total'];
//    row.adjust_wo_vat = frm.doc['adjusted'];
   
//    refresh_field("outstanding1");
//    frm.set_value("buyer_name", "");
//    //frm.set_value("credit_days", "");
//    frm.set_value("thirty_days", "");
//    frm.set_value("sixty_days", "");
//    frm.set_value("ninety_days", "");
//    frm.set_value("onetwenty_days", "");
//    frm.set_value("current", "");
//    frm.set_value("total", 0);
//    frm.set_value("adjusted", 0);
   

  
// }

// function addToChildTable1(frm) {
//    var row = frappe.model.add_child(frm.doc, "Outstanding_Turnover_table", "turnover1");
//    row["buyer"] = frm.doc['buyername1'];
//    row["credit_days"] = frm.doc['creditdays1'];
//    row["30_days"] = frm.doc['thirty_days1'];
//    row["60_days"] = frm.doc['sixty_days1'];
//    row["90_days"] = frm.doc['ninety_days1'];
//    row["120days"] = frm.doc['onetwenty_days1'];
//    row["current"] = frm.doc['current1'];
//    row.total = frm.doc['total1'];
//    row.adjust_wo_vat = frm.doc['adjusted1'];
   
//    refresh_field("turnover1");
//    frm.set_value("buyername1", "");
//   // frm.set_value("creditdays1", "");
//    frm.set_value("thirty_days1", "");
//    frm.set_value("sixty_days1", "");
//    frm.set_value("ninety_days1", "");
//    frm.set_value("onetwenty_days1", "");
//    frm.set_value("current1", "");
//    frm.set_value("total1", 0);
//    frm.set_value("adjusted1", 0);
 

// }

// function calculateGrandTotal(frm) {
//    var childTableData = frm.doc.outstanding1 || [];
//    var grandTotal = childTableData.reduce(function(total, row) {
// 	   var rowTotal = parseFloat(row.total) || 0;
// 	   return total + rowTotal;
//    }, 0);
//    console.log("Grand Total:", grandTotal);
//    frm.set_value('grandtotal', grandTotal);
// }

// function calculateGrandTotal1(frm) {
//    var childTableData = frm.doc.turnover1 || [];
  
//    var grandTotal = childTableData.reduce(function(total, row) {
// 	   var rowTotal = parseFloat(row.total) || 0;
// 	   return total + rowTotal;
//    }, 0);
	
//    console.log("Grand Total:", grandTotal);
//    frm.set_value('grandtotal1', grandTotal);
// }

// function calculateadjustedwithoutvat(frm) {
//    var childTableData = frm.doc.outstanding1 || [];
//    var grandTotal = childTableData.reduce(function(adjust_wo_vat, row) {
// 	   var rowTotal = parseFloat(row.adjust_wo_vat) || 0;
// 	   return adjust_wo_vat + rowTotal;
//    }, 0);
//    console.log("Grand Total:", grandTotal);
//    frm.set_value('outstanding_adjusted_wo_vat', grandTotal);
// }

// function calculateadjustedwithoutvat1(frm) {
//    var childTableData = frm.doc.turnover1 || [];
//    var grandTotal = childTableData.reduce(function(adjust_wo_vat, row) {
// 	   var rowTotal = parseFloat(row.adjust_wo_vat) || 0;
// 	   return adjust_wo_vat + rowTotal;
//    }, 0);
//    console.log("Grand Total:", grandTotal);
//    frm.set_value('turnover_adjusted_wo_vat', grandTotal);
// }




// function calculateAndDisplayTotals(frm) {
//    var childTableData = frm.doc.outstanding1 || [];
//    var grandTotal = 0;
//    var grandAdjustedWithoutVat = 0;
//    var totalcurrent = 0;
//    var totalThirtyDays = 0;
//    var totalSixtyDays = 0;
//    var totalNinetyDays = 0;
//    var totalOneTwentyDays = 0;

//    // Remove existing total row if present
//    frm.doc.outstanding1 = childTableData.filter(function(row) {
// 	   return !row.is_total_row;
//    });

//    childTableData.forEach(function(row) {
// 	   if (!row.is_total_row) {
// 		   grandTotal += parseFloat(row.total) || 0;
// 		   grandAdjustedWithoutVat += parseFloat(row.adjust_wo_vat) || 0;
// 		   totalcurrent += parseFloat(row.current) || 0;
// 		   totalThirtyDays += parseFloat(row["30_days"]) || 0;
// 		   totalSixtyDays += parseFloat(row["60_days"]) || 0;
// 		   totalNinetyDays += parseFloat(row["90_days"]) || 0;
// 		   totalOneTwentyDays += parseFloat(row["120days"]) || 0;
// 	   }
//    });

//    frm.set_value('grandtotal', grandTotal);
//    frm.set_value('outstanding_adjusted_wo_vat', grandAdjustedWithoutVat);

// 	addTotalRow(frm,totalcurrent,totalThirtyDays, totalSixtyDays, totalNinetyDays, totalOneTwentyDays, grandTotal, grandAdjustedWithoutVat);
// }




// function addTotalRow(frm, totalcurrent,totalThirtyDays, totalSixtyDays, totalNinetyDays, totalOneTwentyDays, grandTotal, grandAdjustedWithoutVat) {
//    var totalRow = frappe.model.add_child(frm.doc, "Outstanding_Turnover_table", "outstanding1");

//    // Set fields for the total row
//    totalRow.is_total_row = 1;
//    totalRow.buyer = "";
//    totalRow.credit_days = "";
   
//   totalRow.current = totalcurrent; 

//    totalRow["30_days"] = totalThirtyDays; // Set the total of 30_days
//    totalRow["60_days"] = totalSixtyDays;
//    totalRow["90_days"] = totalNinetyDays;
//    totalRow["120days"] = totalOneTwentyDays;
//    totalRow.total = grandTotal;
//    totalRow.adjust_wo_vat = grandAdjustedWithoutVat;

//    frm.refresh_field("outstanding1");
// }



// function calculateAndDisplayTotalsTurnover(frm) {
//    var childTableDataTurnover = frm.doc.turnover1 || [];
//    var grandTotalTurnover = 0;
//    var grandAdjustedWithoutVatTurnover = 0;
//    var totalCurrentTurnover = 0;
//    var totalThirtyDaysTurnover = 0;
//    var totalSixtyDaysTurnover = 0;
//    var totalNinetyDaysTurnover = 0;
//    var totalOneTwentyDaysTurnover = 0;

//    // Remove existing total row if present
//    frm.doc.turnover1 = childTableDataTurnover.filter(function(row) {
// 	   return !row.is_total_row;
//    });

//    // Calculate totals
//    childTableDataTurnover.forEach(function(row) {
// 	   if (!row.is_total_row) {
// 		   grandTotalTurnover += parseFloat(row.total) || 0;
// 		   grandAdjustedWithoutVatTurnover += parseFloat(row.adjust_wo_vat) || 0;
// 		   totalCurrentTurnover += parseFloat(row.current) || 0;
// 		   totalThirtyDaysTurnover += parseFloat(row["30_days"]) || 0;
// 		   totalSixtyDaysTurnover += parseFloat(row["60_days"]) || 0;
// 		   totalNinetyDaysTurnover += parseFloat(row["90_days"]) || 0;
// 		   totalOneTwentyDaysTurnover += parseFloat(row["120days"]) || 0;
// 	   }
//    });


//    frm.set_value('grandtotal1', grandTotalTurnover);
//    frm.set_value('turnover_adjusted_wo_vat', grandAdjustedWithoutVatTurnover);

//    // Add total row to child table
//    addTotalRowTurnover(frm, totalCurrentTurnover, totalThirtyDaysTurnover, totalSixtyDaysTurnover, totalNinetyDaysTurnover, totalOneTwentyDaysTurnover, grandTotalTurnover, grandAdjustedWithoutVatTurnover);
// }

// function addTotalRowTurnover(frm, totalCurrentTurnover, totalThirtyDaysTurnover, totalSixtyDaysTurnover, totalNinetyDaysTurnover, totalOneTwentyDaysTurnover, grandTotalTurnover, grandAdjustedWithoutVatTurnover) {
//    var totalRowTurnover = frappe.model.add_child(frm.doc, "Turnover_Turnover_table", "turnover1");

//    totalRowTurnover.is_total_row = 1;
//    totalRowTurnover["buyer"] = "";
//    totalRowTurnover["credit_days"] = "";
//    totalRowTurnover.current = totalCurrentTurnover; // Set the total of current
//    totalRowTurnover["30_days"] = totalThirtyDaysTurnover;
//    totalRowTurnover["60_days"] = totalSixtyDaysTurnover;
//    totalRowTurnover["90_days"] = totalNinetyDaysTurnover;
//    totalRowTurnover["120days"] = totalOneTwentyDaysTurnover;
//    totalRowTurnover.total = grandTotalTurnover;
//    totalRowTurnover.adjust_wo_vat = grandAdjustedWithoutVatTurnover;

//    frm.refresh_field("turnover1");
// }

// // function removeDuplicates(arr) {
// //     // Function to remove duplicates from an array
// //     var uniqueArr = [];
// //     arr.forEach(function(item) {
// //         if (uniqueArr.indexOf(item) === -1) {
// //             uniqueArr.push(item);
// //         }
// //     });
// //     return uniqueArr;
// // }


// let fieldsToAlignRight = ['vat_percentage','current', 'thirty_days', 'sixty_days','ninety_days','onetwenty_days','credit_days','total','adjusted','creditdays1',
// 'current1','thirty_days1','sixty_days1','ninety_days1','onetwenty_days1','total1','adjusted1','turn'] 

// function alignFieldsRight(frm, fields) {
//    fields.forEach(field => {
// 	   let fieldElement = frm.fields_dict[field];
// 	   if (fieldElement && fieldElement.input) {
// 		   fieldElement.input.style.direction = 'rtl';
// 		   fieldElement.input.style.textAlign = 'right';
// 	   }
//    });
// }


// fieldsToAlignRight.forEach(field => {
//    frappe.ui.form.on('Domestic Declarations', field, function(frm) {
// 	   alignFieldsRight(frm, [field]);
//    });
// });

