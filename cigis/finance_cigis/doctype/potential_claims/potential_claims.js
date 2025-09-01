// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Potential Claims', {
//     refresh: function(frm) {
//         frm.set_df_property('potential_claim_table', 'cannot_add_rows', true);
        
//         frm.fields_dict.claim_value.$input.css("text-align", "right");
//         frm.fields_dict.credit_limit.$input.css("text-align", "right");
//         frm.fields_dict.amount.$input.css("text-align", "right");
//         frm.fields_dict.vat.$input.css("text-align", "right");
        
//         var workflowState = frm.doc.workflow_state;
//         if (workflowState === "Approved") {
//             frm.toggle_display('policyno', false);
//             frm.toggle_display('policy_no', true);
//         }
        
//     },

//     onload: function(frm) {
//         if (!frm.doc.claim_ref_no) {
//             generateNumber(frm);
//         }

//         fetchApprovedClaimRegisters(frm);
//         fetchBuyerNames(frm);
//         fetchVATDetails(frm);
//     },

// //     ph_name: function(frm) {
// //     // Fetch claim register details

// //     // Update policy number options based on ph_name
// //     if (frm.doc.ph_name) {
// //         frappe.call({
// //             method: 'frappe.client.get_list',
// //             args: {
// //                 doctype: 'Claim Register', // replace 'Policy Doctype' with the actual doctype name where policies are stored
// //                 filters: {
// //                     'ph_name': frm.doc.ph_name
// //                 },
// //                 fields: ['policy_no']
// //             },
// //             callback: function(r) {
// //                 if (r.message) {
// //                     let options = r.message.map(policy => policy.policy_no);
// //                     frm.set_df_property('policyno', 'options', options);
// //                     frm.set_value('policy_no',options );
// //                     frm.refresh_field('policyno');
// //                 }
// //             }
// //         });
// //     }

// //     frm.set_value('policyno', '');
     
// // },

// ph_name: function(frm) {
//     // Fetch claim register details

//     // Update policy number options based on ph_name
//     if (frm.doc.ph_name) {
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Claim Register', // replace 'Policy Doctype' with the actual doctype name where policies are stored
//                 filters: {
//                     'ph_name': frm.doc.ph_name
//                 },
//                 fields: ['policy_no']
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     let options = r.message.map(policy => policy.policy_no);
//                     frm.set_df_property('policyno', 'options', options);
//                     frm.set_value('policy_no', '');
//                     frm.refresh_field('policyno');
//                 }
//             }
//         });
//     } else {
//         frm.set_value('policy_no', '');
//     }
// },

//     policyno:function(frm) {
        
//        if (frm.doc.policyno) {
//             frm.set_value('policy_no', frm.doc.policyno);
//         } else {
//             frm.set_value('policy_no', '');
//         }
        
//            fetchClaimRegisterDetails(frm);
//     },

//     buyer: function(frm) {
//         fetchCreditLimitDetails(frm);
//     },
    
//    add_new: function(frm) {
//         console.log("Add New Button Clicked");
//         if (frm.doc.with_vat) {
//             updateAmtWithVat(frm);
//         }

//         exportDeclarations(frm);
//     }
// });

// function generateNumber(frm) {
//     if (!frm.doc.claim_ref_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `PCLM/${currentYear}/`;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Potential Claims',
//                 fields: ['claim_ref_no'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastClaimRefNo = r.message[0].claim_ref_no;
//                     let lastNumber = lastClaimRefNo ? parseInt(lastClaimRefNo.split("/").pop()) : null;
//                     if (!isNaN(lastNumber)) {
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('claim_ref_no', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('claim_ref_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }

// function fetchApprovedClaimRegisters(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Claim Register',
//             filters: {
//                  workflow_state: "Approved"
//              },
//             fields: ['ph_name'],
//             limit_page_length: 100
//         },
//         callback: function(response) {
//             console.log("ph_name received:", response);
//             let DataArray = response.message;
//             let uniqueFacilityNos = new Set();
 
//             // Collect unique facility_no values
//             for (let x of DataArray) {
//                 uniqueFacilityNos.add(x.ph_name);
//             }
 
//             // Convert set to array
//             let FinalArray = Array.from(uniqueFacilityNos);
 
//             frm.set_df_property('ph_name', 'options', FinalArray);
//             console.log("final", FinalArray);
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error("Error fetching ph_name:", textStatus, errorThrown);
//         }
//     });
   
// }

// function fetchBuyerNames(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Limit Processing',
//             fields: ['buyer_name']
//         },
//         callback: function(response) {
//             if (response.message) {
//                 let finalArray = response.message.map(x => x.buyer_name);
//                 frm.set_df_property('buyer', 'options', finalArray);
//             }
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error("Error fetching buyers:", textStatus, errorThrown);
//         }
//     });
// }

// function fetchVATDetails(frm) {
//     frappe.call({
//         method: 'frappe.client.get',
//         args: {
//             doctype: 'VAT',
//             filters: {}
//         },
//         callback: function(r) {
//             if (r.message) {
//                 frm.set_value('vat', r.message.vat);
//             }
//         }
//     });
// }

// function fetchClaimRegisterDetails(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Claim Register',
//             filters: {
//                 policy_no: frm.doc.policyno,
//             },
//             fields: ['policy_type', 'inception_date', 'claim_value']
//         },
//         callback: function(response) {
//             var data = response.message[0];
            
            
//             if (data) {
//                 //frm.set_value('policyno', data.policy_no);
//                 frm.set_value('client_type', data.policy_type);
//                 frm.set_value('inception_date', data.inception_date);
//                 frm.set_value('claim_value', data.claim_value);
//                 frm.set_value('status', 'Approved');
//             } else {
//                 frm.set_value('status', '');
//             }
//         }
//     });
// }


// function fetchClaimRegisterDetails(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Claim Register',
//             filters: {
//                 policy_no: frm.doc.policyno,
//             },
//             fields: ['policy_type', 'inception_date', 'claim_value']
//         },
//         callback: function(response) {
//             if (response.message && response.message.length > 0) {
//                 var claimData = response.message[0];
                
//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Potential Claims',
//                         filters: {
//                             policy_no: frm.doc.policyno,
//                             workflow_state: 'Approved'
//                         },
//                         fields: ['policyno']
//                     },
//                     callback: function(approvedResponse) {
//                         if (approvedResponse.message && approvedResponse.message.length > 0) {
//                             frappe.msgprint('This Policy No is already approved.');
//                         } else {
//                             if (claimData) {
//                                 frm.set_value('client_type', claimData.policy_type);
//                                 frm.set_value('inception_date', claimData.inception_date);
//                                 frm.set_value('claim_value', claimData.claim_value);
//                                 frm.set_value('status', 'Approved');
//                             } else {
//                                 frm.set_value('status', '');
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 frm.set_value('status', '');
//             }
//         }
//     });
// }



// function fetchCreditLimitDetails(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Limit Processing',
//             filters: {
//                 buyer_name: frm.doc.buyer
//             },
//             fields: ['credit_limit', 'cl_review_date', 'estd_date']
//         },
//         callback: function(response) {
//             var data = response.message[0];
//             if (data) {
//                 frm.set_value('credit_limit', data.credit_limit);
//                 frm.set_value('cl_expiry_date', data.cl_review_date);
//                 frm.set_value('cl_inception_date', data.estd_date);
//             }
//         }
//     });
// }

// function exportDeclarations(frm) {
//     console.log("Export Declarations Function Called");
//     var type = frm.doc.type;
//     var invoice_no = frm.doc.invoice_no;
//     var date = frm.doc.date;
//     var amount = frm.doc.amount;
//     var with_vat = frm.doc.with_vat;
//     var without_vat = frm.doc.without_vat;

//     console.log("Type:", type);
//     console.log("Invoice No:", invoice_no);
//     console.log("Date:", date);
//     console.log("Amount:", amount);

//     if (!type || !date || !amount || !invoice_no) {
//         frappe.msgprint('Please fill all the required fields');
//         return;
//     }

//     // Calculate total OSAmt from existing rows
//     var existingOSAmt = (frm.doc.potential_claim_table || []).reduce((acc, row) => acc + row.os_amt, 0);

//     // Calculate OSAmt for the new row
//     var OSAmt = amount + existingOSAmt;

//     // Add a new row to the potential_claim_table
//     var child = frappe.model.add_child(frm.doc, "Potential Claim Child", "potential_claim_table");

//     frappe.model.set_value(child.doctype, child.name, "type", type);
//     frappe.model.set_value(child.doctype, child.name, "date", date);
//     frappe.model.set_value(child.doctype, child.name, "amount", amount);
//     frappe.model.set_value(child.doctype, child.name, "balance", amount);
//     frappe.model.set_value(child.doctype, child.name, "invoice_no", invoice_no);
//     frappe.model.set_value(child.doctype, child.name, "os_amt", OSAmt);

//     if (with_vat) {
//         var amt_wo_vat = ((amount * 100) / (100 + 14)).toFixed(2);
//         frappe.model.set_value(child.doctype, child.name, "amt_wo_vat", amt_wo_vat);
//     } else if (without_vat) {
//         frappe.model.set_value(child.doctype, child.name, "amt_wo_vat", amount);
//         frm.set_value('vat', 0);
//     }

//     frm.refresh_field('potential_claim_table');

//     update_statement_date(frm);
//     updateAmtWithVat(frm);

//     frm.set_value('type', '');
//     frm.set_value('date', '');
//     frm.set_value('amount', '');
//     frm.set_value('invoice_no', '');
//     frm.set_value('with_vat', 0);
//     frm.set_value('without_vat', 0);
// }


// function update_statement_date(frm) {
//     if (frm.doc.potential_claim_table) {
//         frm.doc.potential_claim_table.forEach(function(row) {
//             if (row.date) {
//                 let date = new Date(row.date);
//                 let endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//                 let endOfMonthString = frappe.datetime.get_datetime_as_string(endOfMonth);
//                 frappe.model.set_value(row.doctype, row.name, "statement_date", endOfMonthString);

//                 let dueDate = new Date(endOfMonth);
//                 dueDate.setDate(dueDate.getDate() + 30);
//                 let dueDateString = frappe.datetime.get_datetime_as_string(dueDate);
//                 frappe.model.set_value(row.doctype, row.name, "due_date", dueDateString);
//             }
//         });
//         frm.refresh_field('potential_claim_table');
//     }
// }

// function updateAmtWithVat(frm) {
//     if (frm.doc.potential_claim_table) {
//         frm.doc.potential_claim_table.forEach(function(row) {
//             if (row.amount) {
//                 var amt_wo_vat;
//                 if (frm.doc.with_vat) {
//                     amt_wo_vat = ((row.amount * 100) / (100 + 14)).toFixed(2);
//                 } else if (frm.doc.without_vat) {
//                     amt_wo_vat = row.amount;
//                 }
//                 frappe.model.set_value(row.doctype, row.name, "amt_wo_vat", amt_wo_vat);
//             }
//         });
//         frm.refresh_field('potential_claim_table');
//     }
// }




