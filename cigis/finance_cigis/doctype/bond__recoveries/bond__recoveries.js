// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bond  Recoveries', {
	refresh(frm) {
	    
	     frm.set_df_property('bond_recoveries','cannot_add_rows', true);
		// your code here
		   if (!frm.doc.recovery_no) {
            generateNumberRecoveryNo(frm);
        }
        	 if (!frm.doc.receipt_no) {
            generateNumberReceiptNo(frm);
        }
        
         var workflowState = frm.doc.workflow_state;

        // Create a custom button for "Bond Invoice" if the workflow state is "Submitted"
        if (workflowState === "Approved") {
            
            frm.toggle_display('bondno', true);
            frm.toggle_display('bondholder', true);
            frm.toggle_display('bond_no', false);
            frm.toggle_display('bond_holder', false);

        }

        
	},
	
	onload: function(frm) { 
    // frappe.call({
    //   method: 'frappe.client.get_list',
    //   args: {
    //     'doctype': 'Bond Claims',
    //     'filters': {
    //       'workflow_state': 'Approved'
    //     },
    //     'fields': ['client']
    //   },
    //   callback: function(submittedProposalsResponse) {
    //     if (submittedProposalsResponse.message) {
    //       var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
    //         return proposal.client;
    //       });
    //       console.log("** Submitted Proposals:", submittedProposals);
 
    //       console.log("** Fetching Approved Quotations **");
    //       frappe.call({
    //         method: 'frappe.client.get_list',
    //         args: {
    //           'doctype': 'Bond  Recoveries',
    //           'filters': {
    //             'workflow_state': 'Approved'
    //           },
    //           'fields': ['bond_holder']
    //         },
    //         callback: function(approvedQuotationsResponse) {
    //             console.log(approvedQuotationsResponse,"approvedQuotationsResponse")
    //           if (approvedQuotationsResponse.message) {
    //             var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
    //               return quotation.bond_holder;
    //             });
    //             console.log("** Approved Quotations:", approvedQuotations);
 
    //             // Filter client names (include only proposals not in approved quotations)
    //             var filteredClientNames = submittedProposals.filter(function(proposal) {
    //               return !approvedQuotations.includes(proposal);
    //             });
    //             console.log("** Filtered Client Names:", filteredClientNames);
    //               frm.set_df_property('bond_holder', 'options', filteredClientNames);
 
    //             // Set dropdown query with filtered names
    //           //  frm.set_query('client_name', function() {
    //             //  return {
    //              //   filters: {
    //               //    'name': ['in', filteredClientNames]
    //               // }
    //               //};
    //           // });
    //           }
    //         }
    //       }); // Close inner frappe.call
    //     }
    //   }
    // }); // Close outer frappe.call
    
    frappe.call({
      method: 'frappe.client.get_list',
      args: {
        'doctype': 'Bond Claims',
        'filters': {
          'workflow_state': 'Approved'
        },
        'fields': ['bond_no']
      },
      callback: function(submittedProposalsResponse) {
        if (submittedProposalsResponse.message) {
          var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
            return proposal.bond_no;
          });
          console.log("** Submitted Proposals:", submittedProposals);
 
          console.log("** Fetching Approved Quotations **");
          frappe.call({
            method: 'frappe.client.get_list',
            args: {
              'doctype': 'Bond  Recoveries',
              'filters': {
                'workflow_state': 'Approved'
              },
              'fields': ['bond_no']
            },
            callback: function(approvedQuotationsResponse) {
                console.log(approvedQuotationsResponse,"approvedQuotationsResponse")
              if (approvedQuotationsResponse.message) {
                var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
                  return quotation.bond_no;
                });
                console.log("** Approved Quotations:", approvedQuotations);
 
                // Filter client names (include only proposals not in approved quotations)
                var filteredClientNames = submittedProposals.filter(function(proposal) {
                  return !approvedQuotations.includes(proposal);
                });
                console.log("** Filtered Client Names:", filteredClientNames);
                  frm.set_df_property('bond_no', 'options', filteredClientNames);
 
                // Set dropdown query with filtered names
              //  frm.set_query('client_name', function() {
                //  return {
                 //   filters: {
                  //    'name': ['in', filteredClientNames]
                   // }
                  //};
               // });
              }
            }
          }); // Close inner frappe.call
        }
      }
    }); // Close outer frappe.call

    },
    
    
    bond_no: function(frm){
        
        var bondno = frm.doc.bond_no;
	    frm.set_value('bondno',bondno);
	    
        
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond Claims',
                filters: {
                    bond_no: frm.doc.bond_no
                },
                fields: ['client']
            },
            callback: function(response) {
                console.log("DCI Proposals response:", response);
                if (response.message && response.message.length > 0) {
                    var data_from_proposals = response.message[0];
 
                    // Populate fields if data is found
                    // frm.set_value('bond_holder', data_from_proposals.client || '');
                   frm.set_df_property('bond_holder', 'options', data_from_proposals.client);
                   
                } else {
                    // Clear fields if no matching record found
                    // frm.set_value('bond_holder', '');
                    
               
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
            }
        }); 
    },
    
    

	bond_holder: function(frm) {
	    
	    var bondholder = frm.doc.bond_holder;
	    frm.set_value('bondholder',bondholder);
	    
       
        // Fetch data from DCI Proposals based on selected client name
          frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond Claims',
                filters: {
                    client: frm.doc.bond_holder,
                    bond_no: frm.doc.bond_no
                },
                fields: ['principal', 'claim_ref_no','reinsurer']
            },
            callback: function(response) {
                console.log("DCI Proposals response:", response);
                if (response.message && response.message.length > 0) {
                    var data_from_proposals = response.message[0];
 
                    // Populate fields if data is found
                   
                    frm.set_value('principal', data_from_proposals.principal || '');
                    frm.set_value('claim_refno', data_from_proposals.claim_ref_no || '');
                    frm.set_value('reinsurer', data_from_proposals.reinsurer || '');
                } else {
                    // Clear fields if no matching record found
                
                    frm.set_value('principal', '');
                    frm.set_value('claim_refno', '');
                    frm.set_value('reinsurer', '');
               
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
            }
        });
        
          frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Assign_Lawyer',
                filters: {
                  ph_name : frm.doc.bond_holder
                },
                fields: ['lawyer', 'lawyer_']
            },
            callback: function(response) {
                console.log("DCI Proposals response:", response);
                if (response.message && response.message.length > 0) {
                    var data_from_proposals = response.message[0];
 
                    // Populate fields if data is found
                    frm.set_value('lawerdebt_collector', data_from_proposals.lawyer || '');
                    frm.set_value('lawer_', data_from_proposals.lawyer_ || '');
                  
                } else {
                    // Clear fields if no matching record found
                    frm.set_value('lawerdebt_collector', '');
                    frm.set_value('lawer_', '');
                  
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
            }
        });
        
          frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Claim Process',
                filters: {
                  client  : frm.doc.bond_holder
                //   client1  : frm.doc.bond_holder
                },
                fields: ['status', 'claimamount','reinsure']
            },
            callback: function(response) {
                console.log("DCI Proposals response:", response);
                if (response.message && response.message.length > 0) {
                    var data_from_proposals = response.message[0];
 
                    // Populate fields if data is found
                    frm.set_value('status', data_from_proposals.status || '');
                    frm.set_value('claim_amount', data_from_proposals.claimamount || '');
                    frm.set_value('reinsurer_percentage', data_from_proposals.reinsure || '');
                  
                } else {
                    // Clear fields if no matching record found
                    frm.set_value('status', '');
                    frm.set_value('claim_amount', '');
                    frm.set_value('reinsurer_percentage', '');
                   
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
            }
        });
        
        
    },
	
    add_new: function(frm){
        
        var amontrecovered = frm.doc.amtrecovered;
        var paymentreceiptno = frm.doc.receipt_no;
     frappe.prompt([
        {'fieldname': 'amount_recovered', 'fieldtype': 'Data', 'label': 'Amount Recovered','default': amontrecovered },
        
        {'fieldname': 'payment_mode', 'fieldtype': 'Select', 'label': 'Payment Mode', 'options': ['BANK DIRECT DEPOSIT', 'BANK GUARANTEE', 'CREDIT CARD', 'CHEQUE', 'CASH']},
        
        {'fieldname': 'column_break', 'fieldtype': 'Column Break', 'label': ''}, // Column Break
        
        {'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date'},
        
        {'fieldname': 'payment_no', 'fieldtype': 'Data', 'label': 'Payment No','default':paymentreceiptno},
        
       
       
    ],
    function(values) {
            // Check if all required fields are filled
                var data = {
                    amountrecovered: values.amount_recovered,
                    paymentmode: values.payment_mode,
                    date: values.date,
                    paymentno: values.payment_no
                };
                
            // Save the object to LocalStorage
            localStorage.setItem('Bond Recoveries Child Table', JSON.stringify(data));
            
            
            // Retrieve the data from LocalStorage
            var Bond_recoveries = JSON.parse(localStorage.getItem('Bond Recoveries Child Table'));
            
          
            
            // Add the retrieved data to the child table
            addDataToChildTable(frm, Bond_recoveries);
             
        },
        'Bond Recoveries');
    
    
	},
	
	claim_amount: function(frm){
	    
	    calculatedueamount(frm);
	},
	
	amtrecovered: function(frm){
	    
	      calculatedueamount(frm);
	    
	},
	

  	
	
});

function calculatedueamount(frm){
   
    var claimamount = parseFloat(frm.doc.claim_amount) || 0; // Convert to float and handle potential non-numeric input
    var amtrecovered = parseFloat(frm.doc.amtrecovered) || 0; // Convert to float and handle potential non-numeric input
   
   var due = claimamount-amtrecovered;
   
   frm.set_value('due',due);
    
}
    


function addDataToChildTable(frm, data) {
    var childTable = frm.fields_dict['bond_recoveries'].grid;
    var newRow = childTable.add_new_row();
    frappe.model.set_value(newRow.doctype, newRow.name, 'recptno', data.paymentno);
    frappe.model.set_value(newRow.doctype, newRow.name, 'amtreceived', data.amountrecovered);
    frappe.model.set_value(newRow.doctype, newRow.name, 'date', data.date);
    frappe.model.set_value(newRow.doctype, newRow.name, 'payment_mode', data.paymentmode);
    
    childTable.refresh();
}

function generateNumberRecoveryNo(frm) {
    // Check if the proposal number field is already populated
    if (!frm.doc.recovery_no) {
        // Get the current year
        let currentYear = new Date().getFullYear();
        let prefix = `REC/${currentYear}/`;
 
        // Make a call to get the last number asynchronously
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond  Recoveries',
                fields: ['recovery_no', 'creation'],
                order_by: 'creation desc',
                limit: 1
            },
            callback: function(r) {
                console.log(r,"recovery no");
                if (r.message && r.message.length > 0) {
                    let lastProposalNo = r.message[0].recovery_no;
                    let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
                    if (!isNaN(lastNumber)) {
                        // Increment the last number and pad it with leading zeros
                        let newNumber = (lastNumber + 1).toString().padStart(4, '0');
                        frm.set_value('recovery_no', prefix + newNumber);
                    }
                } else {
                    // If no previous numbers exist, set to default '0001'
                    frm.set_value('recovery_no', prefix + '0001');
                }
            }
        });
    }
}
function generateNumberReceiptNo(frm) {
    // Check if the proposal number field is already populated
    if (!frm.doc.receipt_no) {
        // Get the current year
        let currentYear = new Date().getFullYear();
        let prefix = `RCPT/${currentYear}/`;
 
        // Make a call to get the last number asynchronously
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond  Recoveries',
                fields: ['receipt_no', 'creation'],
                order_by: 'creation desc',
                limit: 1
            },
            callback: function(r) {
                console.log(r,"receipt no");
                if (r.message && r.message.length > 0) {
                    let lastProposalNo = r.message[0].receipt_no;
                    let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
                    if (!isNaN(lastNumber)) {
                        // Increment the last number and pad it with leading zeros
                        let newNumber = (lastNumber + 1).toString().padStart(4, '0');
                        frm.set_value('receipt_no', prefix + newNumber);
                    }
                } else {
                    // If no previous numbers exist, set to default '0001'
                    frm.set_value('receipt_no', prefix + '0001');
                }
            }
        });
    }
}
