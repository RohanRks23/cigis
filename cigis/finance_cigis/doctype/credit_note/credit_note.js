// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Credit Note', {
//     onload: function(frm) {
//         // Fetch CI Invoices to populate the policy holder dropdown
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'CI Invoices',
//                 fields: ['policy_holder']
//             },
//             callback: function(response) {
//                 if (response.message && response.message.length > 0) {
//                     var policyHolders = response.message.map(function(invoice) {
//                         return invoice.policy_holder;
//                     });
//                     // Set dropdown options for policy holder field
//                     frm.set_df_property('policy_holder', 'options', policyHolders);
//                 } else {
//                     frappe.msgprint('No CI Invoices found.');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching CI Invoices.');
//             }
//         });
//          frm.toggle_display('confirm', false);
//           frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'Export Declaration Invoice',
//                 filters: {
//                     no_of_cls: frm.doc.credit_limits
//                 }
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     frm.set_value('no_of_cls', r.message.credit_limits);
//                     frm.set_value('no_of_cl_enq', r.message.credit_limits1);
//                      frm.set_value('no_of_cls1', r.message.credit_limits);
//                     frm.set_value('no_of_cl_enq1', r.message.credit_limits1);
//                      frm.set_value('cl_fee', r.message.credit_limit_fee);
//                                           frm.set_value('cl_enquiry_fee', r.message.credit_limit_enquiry_fee);
// frm.set_value('cl_fee1', r.message.credit_limit_fee);
//                     frm.set_value('cl_enquiry_fee1', r.message.credit_limit_enquiry_fee);
//                 }
//             }
//         });

//         // frappe.call({
//         //     method: 'frappe.client.get',
//         //     args: {
//         //         doctype: 'ECI Quotations',
//         //         filters: {
//         //             per_enquiryp: frm.doc.per_enquiryp
//         //         }
//         //     },
//         //     callback: function(r) {
//         //         if (r.message) {
//         //             frm.set_value('cl_fee', r.message.cl_per_monthp);
//         //             frm.set_value('cl_enquiry_fee', r.message.per_enquiryp);
//         //             frm.set_value('cl_fee1', r.message.cl_per_monthp);
//         //             frm.set_value('cl_enquiry_fee1', r.message.per_enquiryp);
//         //         }
//         //     }
//         // });
//       if (!frm.doc.credit_note_no) {
//             generateNumber(frm);
//         }    
//         var workflowState = frm.doc.workflow_state;
//         if (workflowState === "Approved") {
//             frm.toggle_display('policy_holder1', true);
//             frm.toggle_display('policy_holder', false);
//         }
          
//     },
//     policy_holder: function(frm) {
//         var PH = frm.doc.policy_holder;
 
//      frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'CI Invoices',
//             filters: {
//                 policy_holder: PH
//             },
//             fields: ['invoice_date', 'invoice_no', 'vat', 'invoice_amount']
//         },
//         callback: function(response) {
//             console.log("response:", response);
//             if (response.message && response.message.length > 0) {
//                 var cl_data = response.message[0];
//                 var policyHolder = frm.doc.policy_holder
//                 // Populate fields if data is found
//                 frm.set_value('invoice_date', cl_data.invoice_date || '');
//                 frm.set_value('invoice_no', cl_data.invoice_no || '');
//                 frm.set_value('vat', cl_data.vat || '');
//                 frm.set_value('total_amountincl_vat', cl_data.invoice_amount || '');
//                 frm.set_value('policy_holder1', policyHolder);
//                 // Fetch child table data based on the selected policy holder
//                 frappe.call({
//                     method: "frappe.client.get",
//                     args: {
//                         doctype: "CI Invoices",
//                         filters: {
//                             policy_holder: PH
//                         },
//                         fields: ["export_buyer"]
//                     },
//                     callback: function(r) {
//                         console.log(r, "client short name");
//                         if (!r.exc) {
//                             if (r.message && r.message.export_buyer && r.message.export_buyer.length > 0) {
//                                 frm.clear_table('credit_note_child');
//                                 r.message.export_buyer.forEach(function(buyer) {
//                                     var child = frappe.model.add_child(frm.doc, "credit note child", "credit_note_child");
//                                     frappe.model.set_value(child.doctype, child.name, "country", buyer.country);
//                                     frappe.model.set_value(child.doctype, child.name, "buyer", buyer.buyer);
//                                     frappe.model.set_value(child.doctype, child.name, "dcl_amt", buyer.declamt);
//                                     frappe.model.set_value(child.doctype, child.name, "premium_rate", buyer.premium_rate);
//                                     frappe.model.set_value(child.doctype, child.name, "amount", buyer.premamount); 
//                                     // Add more fields as needed
//                                 });
//                                 frm.refresh_fields('credit_note_child');
//                             } else {
//                                 console.error("No export buyer found.");
//                             }
//                         } else {
//                             console.error("Error occurred:", r.exc);
//                         }
//                     }
//                 });
//             } else {
//                 // Clear fields and child table if no matching record found
//                 frm.set_value('invoice_date', '');
//                 frm.set_value('invoice_no', '');
//                 frm.set_value('vat', '');
//                 frm.set_value('total_amountincl_vat', '');
//                 frm.clear_table('credit_note_child');
//                 frappe.msgprint('No matching record found.');
//             }
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error(textStatus, errorThrown);
//             frappe.msgprint('An error occurred while fetching data.');
//         }
//     });
//         frappe.call({
//             method: "frappe.client.get",
//             args: {
//                 doctype: "CI Invoices",
//                 filters: {
//                     policy_holder: PH
//                 },
//                 fields: ["export_buyer"]
//             },
//             callback: function(r) {
//                 console.log(r, "client short name");
//                 if (!r.exc) {
//                     if (r.message && r.message.export_buyer.length > 0) {
//                         var buyer = r.message.export_buyer[0]; // Assuming you only want the first buyer
//                         frm.set_value('dcl_amount1', buyer.declamt);
//                         frm.set_value('premium_rate1', buyer.premium_rate);
//                         frm.set_value('dcl_amount2', buyer.declamt);
//                         frm.set_value('premium_rate2', buyer.premium_rate);
//                     } else {
//                         console.error("No export buyer found.");
//                     }
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
//             }
//         });
//      var cl_fee = frm.doc.cl_fee; 
// var cl_fee1 = frm.doc.cl_fee1; 
// var cl_enquiry_fee = frm.doc.cl_enquiry_fee;
// var no_of_cls = frm.doc.no_of_cls;
// var no_of_cls1 = frm.doc.no_of_cls1;
// var no_of_cl_enq = frm.doc.no_of_cl_enq;
// var cl_enquiry_fee1 = frm.doc.cl_enquiry_fee1;
// var no_of_cl_enq1 = frm.doc.no_of_cl_enq1;
// var dcl_amount1 = frm.doc.dcl_amount1;
// var premium_rate1 = frm.doc.premium_rate1;
// var dcl_amount2 = frm.doc.dcl_amount2;
// var premium_rate2 = frm.doc.premium_rate2;

// // Calculate all the values first
// var b = cl_fee * no_of_cls;
// var c = cl_enquiry_fee * no_of_cl_enq;
// var e = cl_fee1 * no_of_cls1;
// var f = cl_enquiry_fee1 * no_of_cl_enq1;
// var a = dcl_amount1 * premium_rate1;
// var d = dcl_amount2 * premium_rate2;

// // Calculate cl_enquiry_fee
// var cl_enquiry_fee_calculated = cl_enquiry_fee * no_of_cl_enq;
// var cl_enquiry_fee_calculated1 = cl_enquiry_fee1 * no_of_cl_enq1;
 
// // Set the calculated values to the fields you want
// frm.set_value('b', b);
// frm.set_value('c', c);
// frm.set_value('e', e);
// frm.set_value('f', f);
// frm.set_value('a', a);
// frm.set_value('d', d);
// frm.set_value('cl_enquiry_fee', cl_enquiry_fee_calculated);
// frm.set_value('cl_enquiry_fee1', cl_enquiry_fee_calculated1);

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'CI Invoices',
//             filters: {
//                 policy_holder: PH
//             },
//             fields: ['invoice_date', 'invoice_no', 'vat', 'invoice_amount']
//         },
//         callback: function(response) {
//             console.log("response:", response);
//             if (response.message && response.message.length > 0) {
//                 var cl_data = response.message[0];

//                 // Populate fields if data is found
//                 frm.set_value('invoice_date', cl_data.invoice_date || '');
//                 frm.set_value('invoice_no', cl_data.invoice_no || '');
//                 frm.set_value('vat', cl_data.vat || '');
//                 frm.set_value('total_amountincl_vat', cl_data.invoice_amount || '');

//                 // Fetch child table data based on the selected policy holder
//                 frappe.call({
//                     method: "frappe.client.get",
//                     args: {
//                         doctype: "CI Invoices",
//                         filters: {
//                             policy_holder: PH
//                         },
//                         fields: ["export_buyer"]
//                     },
//                     callback: function(r) {
//                         console.log(r, "client short name");
//                         if (!r.exc) {
//                             if (r.message && r.message.export_buyer && r.message.export_buyer.length > 0) {
//                                 frm.clear_table('credit_note_child2');
//                                 r.message.export_buyer.forEach(function(buyer) {
//                                     var child = frappe.model.add_child(frm.doc, "Credit Note Child2", "credit_note_child1");
//                                     frappe.model.set_value(child.doctype, child.name, "country", buyer.country);
//                                     frappe.model.set_value(child.doctype, child.name, "buyer", buyer.buyer);
//                                      frappe.model.set_value(child.doctype, child.name, "dcl_amt", buyer.declamt);
//                                      frappe.model.set_value(child.doctype, child.name, "premium_rate", buyer.premium_rate);
//                                      frappe.model.set_value(child.doctype, child.name, "amount", buyer.premamount); 
//                                     // // Add more fields as needed
//                                 });
//                                 frm.refresh_fields('credit_note_child1');
//                             } else {
//                                 console.error("No export buyer found.");
//                             }
//                         } else {
//                             console.error("Error occurred:", r.exc);
//                         }
//                     }
//                 });
//             } else {
//                 // Clear fields and child table if no matching record found
//                 frm.set_value('invoice_date', '');
//                 frm.set_value('invoice_no', '');
//                 frm.set_value('vat', '');
//                 frm.set_value('total_amountincl_vat', '');
//                 frm.clear_table('Credit Note Child2');
//                 frappe.msgprint('No matching record found.');
//             }
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error(textStatus, errorThrown);
//             frappe.msgprint('An error occurred while fetching data.');
//         }
//     });
    
//      },
//     // tax_invoice: function(frm) {
//     //      frappe.route_options = {
//     //         invoice_to: frm.doc.policy_holder,
//     //         crn: frm.doc.invoice_no,
//     //         date: frm.doc.invoice_date,
//     //         ref_inv: frm.doc.credit_note_no,
//     //         amount9: frm.doc.no_of_cls,
//     //         amount10: frm.doc.cl_fee,
//     //         amount11: frm.doc.b,
//     //         amount12: frm.doc.no_of_cl_enq,
//     //         amount13: frm.doc.cl_enquiry_fee,
//     //         amount14: frm.doc.c,
//     //         amount19: frm.doc.vat,
//     //      }
//     //     frappe.new_doc('Credit Note Tax Invoice');
//     // },
//     // internal_invoice: function(frm) {
//     //     frappe.new_doc('Credit Note Internal Invoice');
//     // },
//      tax_invoice: function(frm) {
//         // Fetch the telephone, fax, and postal address from Company-Details based on the policy_holder
//         frappe.call({
//             method: 'frappe.client.get_value',
//             args: {
//                 doctype: 'Company-Details',
//                 fieldname: ['telephone', 'fax', 'postal_address', 'location', 'contact_person', 'vat_reg_no'],
//                 filters: { name: frm.doc.policy_holder }
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     // Telephone, fax, and postal address fetched successfully
//                     const telephone = r.message.telephone;
//                     const fax = r.message.fax;
//                     const postal_address = r.message.postal_address;
//                     const location = r.message.location;
//                     const contact_person = r.message.contact_person;
//                     const vat_reg_no = r.message.vat_reg_no;
//                     const country = r.message.country;

//                     // Debugging line to check the fetched telephone number, fax, and postal address
//                     console.log("Telephone fetched: ", telephone);
//                     console.log("Fax fetched: ", fax);
//                     console.log("Postal Address fetched: ", postal_address);
//                     console.log("Location fetched: ", location);
//                     console.log("Contact Person fetched: ", contact_person);
//                     console.log("Vat Reg No fetched: ", vat_reg_no);
//                   // console.log("Country fetched: ", country);

//                     // Setting route options for the new Tax Invoice For CI Invoice document
//                     frappe.route_options = {
//                         invoice1: frm.doc.policy_holder,
//                         date1: frm.doc.invoice_date,
//                         invoice2: frm.doc.invoice_no,
//                          ref_inv: frm.doc.credit_note_no,
//                          crn: frm.doc.invoice_no,
//                        amount9  :frm.doc.no_of_cls,
//                        amount10:frm.doc.cl_fee,
//                        amount11:frm.doc.b,
//                        amount12:frm.doc.no_of_cl_enq,
//                        amount13:frm.doc.cl_enquiry_fee,
//                        amount14:frm.doc.c,
//                        amount19:frm.doc.vat,
//                       declaration :frm.doc.month,
//                         telephone: telephone,
//                         fax: fax,
//                         address: postal_address,
//                         city: location,
//                         attn: contact_person,
//                         vat: vat_reg_no,
//                         country:country,
//                     };

//                     // Create a new Tax Invoice For CI Invoice document
//                     frappe.new_doc('Credit Note Tax Invoice');
//                 } else {
//                     // If the telephone, fax, and postal address are not found, display a message to the user
//                     frappe.msgprint(__('Telephone, Fax, and Postal Address not found for the selected Policy Holder.'));
//                 }
//             }
//         });

//         // Fetch the policy number from Policy Approvals based on the policy_holder
//         frappe.call({
//             method: 'frappe.client.get_value',
//             args: {
//                 doctype: 'Policy Approvals',
//                 fieldname: ['policy_number'],
//                 filters: { policy_holder: frm.doc.policy_holder }
//             },
//             callback: function(r) {
//                 if (r.message && r.message.policy_number) {
//                     // Policy number fetched successfully
//                     const policy_number = r.message.policy_number;

//                     // Debugging line to check the fetched policy number
//                     console.log("Policy Number fetched: ", policy_number);

//                     // Appending to route options for the new Tax Invoice For CI Invoice document
//                     frappe.route_options.reference1 = policy_number;

//                     // Create a new Tax Invoice For CI Invoice document
//                     frappe.new_doc('Credit Note Tax Invoice');
//                 } else {
//                     // If the policy number is not found, display a message to the user
//                     frappe.msgprint(__('Policy Number not found for the selected Policy Holder.'));
//                 }
//             }
//         });
//           var childtable = frm.doc.credit_note_child;
//         for (var i = 0; i < childtable.length; i++) {
//             var row = childtable[i];
            
//             frappe.model.with_doctype('Credit Note Tax Invoice', function() {
//                 var newDoc = frappe.model.get_new_doc('Credit Note Tax Invoice');
//                                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'amount1', row.country);

//                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'amount2', row.dcl_amt);
//                   frappe.model.set_value(newDoc.doctype, newDoc.name, 'amount3', row.premium_rate);
//                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'amount4', row.amount);
//                 frappe.set_route('Form', 'Credit Note Tax Invoice', newDoc.name);
//             });
//         }

         
//     },
//      internal_invoice: function(frm) {
//         frappe.call({
//             method: 'frappe.client.get_value',
//             args: {
//                 doctype: 'Company-Details',
//                 fieldname: ['postal_address', 'location', 'vat_reg_no'],
//                 filters: { name: frm.doc.policy_holder }
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     const postal_address = r.message.postal_address;
//                     const location = r.message.location;
 
//                     const vat_reg_no = r.message.vat_reg_no;
                    
//                     console.log("Postal Address fetched: ", postal_address);
//                     console.log("Location fetched: ", location);
                   
//                     console.log("Vat Reg No fetched: ", vat_reg_no);
                    

//                     frappe.route_options = {
//                         name1: frm.doc.policy_holder,
//                         date: frm.doc.invoice_date,
//                         address: postal_address,
//                         city: location,
                        
//                         vat: vat_reg_no,
                        
//                     };

//                     frappe.new_doc('Credit Note Internal Invoice');
//                 } else {
//                     frappe.msgprint(__('Telephone, Fax, and Postal Address not found for the selected Policy Holder.'));
//                 }
//             }
//         });
//         var childtable = frm.doc.credit_note_child;
//         for (var i = 0; i < childtable.length; i++) {
//             var row = childtable[i];
            
//             frappe.model.with_doctype('Credit Note Internal Invoice', function() {
//                 var newDoc = frappe.model.get_new_doc('Credit Note Internal Invoice');
//                                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency1', row.buyer);

//                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency2', row.dcl_amt);
//                   frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency3', row. country);
              
//                 frappe.set_route('Form', 'Credit Note Internal Invoice', newDoc.name);
//             });
//         }
//     },
//     refresh: function(frm) {
//                   frm.fields_dict['no_of_cls'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['no_of_cl_enq'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['premium_rate1'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['dcl_amount1'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['cl_fee'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['cl_enquiry_fee'].$wrapper.find('input').css("text-align", "right");
//          frm.fields_dict['a'].$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict['b'].$wrapper.find('input').css("text-align", "right");
//        frm.fields_dict['c'].$wrapper.find('input').css("text-align", "right");
//        frm.fields_dict['dcl_amount2'].$wrapper.find('input').css("text-align", "right");
//        frm.fields_dict['no_of_cl_enq1'].$wrapper.find('input').css("text-align", "right");
//        frm.fields_dict['no_of_cls1'].$wrapper.find('input').css("text-align", "right");
//  frm.fields_dict['cl_fee1'].$wrapper.find('input').css("text-align", "right");
//        frm.fields_dict['cl_enquiry_fee1'].$wrapper.find('input').css("text-align", "right");
//  frm.fields_dict['d'].$wrapper.find('input').css("text-align", "right");
//        frm.fields_dict['e'].$wrapper.find('input').css("text-align", "right");
//               frm.fields_dict['f'].$wrapper.find('input').css("text-align", "right");
//                             frm.fields_dict['total_amountincl_vat'].$wrapper.find('input').css("text-align", "right");
//                                           frm.fields_dict['vat'].$wrapper.find('input').css("text-align", "right");







        
//         frm.fields_dict.internal_invoice.$input.addClass('btn-primary');
//         frm.fields_dict.tax_invoice.$input.addClass('btn-primary');
//         frm.fields_dict.cancel.$input.addClass('btn-primary');
//        // frm.fields_dict['credit_note_child'].grid.wrapper.find('.grid-add-row').hide();
//        frm.set_df_property('credit_note_child','cannot_add_rows', true); 
//         frm.set_df_property('credit_note_child1','cannot_add_rows', true);
//                 if (frm.doc.__islocal) {
//             // If the form is new and unsaved, keep the button hidden
//             frm.toggle_display('internal_invoice', false);
//             frm.toggle_display('tax_invoice', false);
//             frm.toggle_display('dcl_amount1', false);
//             frm.toggle_display('premium_rate1', false);
//               frm.toggle_display('a', false);
//                 frm.toggle_display('dcl_amount2', false);
//                   frm.toggle_display('premium_rate2', false);
//                     frm.toggle_display('d', false);
//         } else {
//             // If the form is saved, show the button
//             frm.toggle_display('internal_invoice', true);
//               frm.toggle_display('tax_invoice', true);
//               frm.toggle_display('dcl_amount1', true);
//                   frm.toggle_display('premium_rate1', true);
//                   frm.toggle_display('a', true);
//                     frm.toggle_display('dcl_amount2', true);
//                       frm.toggle_display('premium_rate2', true);
//                         frm.toggle_display('d', true);
//                           frm.toggle_display('credit_note_child', false);
//                             frm.toggle_display('invoce_details', false);
//                                                         frm.toggle_display('credit_note_child1', false);

//         }
       
//           frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: "CI Invoices",
//                 filters: {},
//                 fields: ['policy_holder']
//             },
//             callback: function(submittedProposalsResponse) {
//                 if (submittedProposalsResponse.message) {
//                     var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
//                         return proposal.policy_holder;
//                     });
//                     console.log("** Submitted Proposals:", submittedProposals);
//                     console.log("** Fetching Approved Quotations **");
//                     frappe.call({
//                         method: 'frappe.client.get_list',
//                         args: {
//                             doctype: 'Credit Note',
//                             filters: {
//                                 workflow_state: 'Approved'
//                             },
//                             fields: ['policy_holder']
//                         },
//                         callback: function(approvedNotesResponse) {
//                             console.log(approvedNotesResponse, "approvedNotesResponse");
//                             if (approvedNotesResponse.message) {
//                                 var approvedNotes = approvedNotesResponse.message.map(function(note) {
//                                     return note.policy_holder;
//                                 });
//                                 console.log("** Approved Notes:", approvedNotes);
//                                 // Filter client names (include only proposals not in approved quotations)
//                                 var filteredClientNames = submittedProposals.filter(function(invoice) {
//                                     return !approvedNotes.includes(invoice);
//                                 });
//                                 console.log("** Filtered Client Names:", filteredClientNames);
//                                 frm.set_df_property('policy_holder', 'options', filteredClientNames);
                                  
//                             }
//                         }
//                     });  
//                 }
//             }
//         });
        
//     }
     
     
// });
   
// function generateNumber(frm) {
//     // Get the current year
//     let currentYear = new Date().getFullYear();

//     // Make a call to get the last number asynchronously
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Credit Note',
//             fields: ['credit_note_no'],
//             order_by: 'creation desc',
//             limit: 1
//         },
//         callback: function(r) {
//             if (r.message && r.message.length > 0) {
//                 let lastNumber = parseInt(r.message[0].credit_note_no.split("/")[2]);  
 
//                 if (!isNaN(lastNumber)) {
//                     // Increment the last number and pad it with leading zeros
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value('credit_note_no', `INV/${currentYear}/${newNumber}`);
//                      //frm.set_value('credit_note_no', prefix + newNumber);
//                 } else {
//                     // If the last number is not a valid number, set to default '0001'
//                   // frm.set_value('credit_note_no', `INV/${currentYear}/0001`);
//                   frm.set_value('credit_note_no', prefix + '0001');
//                 }
//             } else {
//                 // If no previous numbers exist, set to default '0001'
//                 frm.set_value('credit_note_no', `INV/${currentYear}/0001`);
//             }
//         }
      

//     });
// }
 
