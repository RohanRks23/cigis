// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

 
// frappe.ui.form.on('Debit Note', {
//     refresh(frm) {
//         frm.fields_dict.vat.$input.css("text-align", "right");
//         frm.fields_dict.total_amountincl_vat.$input.css("text-align", "right");
//         frm.fields_dict.dd_amount.$input.css("text-align", "right");
//         frm.fields_dict.premium_rate.$input.css("text-align", "right");
//         frm.fields_dict.cl_fee.$input.css("text-align", "right");
//         frm.fields_dict.cl_enquiry_fee.$input.css("text-align", "right");
//         frm.fields_dict.premiumrate.$input.css("text-align", "right");
//         frm.fields_dict.clfee.$input.css("text-align", "right");
//         frm.fields_dict.clenquiryfee.$input.css("text-align", "right");
//          frm.fields_dict.no_of_cls.$input.css("text-align", "right");
//         frm.fields_dict.no_of_cl_enq.$input.css("text-align", "right");
        
        
        
//         frm.fields_dict.ddamount.$input.css("text-align", "right");
//         frm.fields_dict.noofcls.$input.css("text-align", "right");
//         frm.fields_dict.noofclenq.$input.css("text-align", "right");
//         frm.fields_dict.premium_rate1.$input.css("text-align", "right");
//         frm.fields_dict.cl_fee1.$input.css("text-align", "right");
//         frm.fields_dict.cl_enquiry_fee1.$input.css("text-align", "right");
//         frm.fields_dict.premium_rate2.$input.css("text-align", "right");
//         frm.fields_dict.cl_fee2.$input.css("text-align", "right");
//         frm.fields_dict.cl_enquiry_fee2.$input.css("text-align", "right");
        
//         if (!frm.doc.dedbit_note_no) {
//             generateNumber(frm);
//         }
        
//           var workflowState = frm.doc.workflow_state;
//         if (workflowState === "Approved") {
//             frm.toggle_display('ph_name', true);
//             frm.toggle_display('policy_holder', false);
//         }

//         frappe.call({
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
//                             doctype: 'Debit Note',
//                             filters: {
//                                 workflow_state: 'Approved'
//                             },
//                             fields: ['policy_holder']
//                         },
//                         callback: function(approvedQuotationsResponse) {
//                             console.log(approvedQuotationsResponse, "approvedQuotationsResponse");
//                             if (approvedQuotationsResponse.message) {
//                                 var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
//                                     return quotation.policy_holder;
//                                 });
//                                 console.log("** Approved Quotations:", approvedQuotations);

//                                 var filteredClientNames = submittedProposals.filter(function(proposal) {
//                                     return !approvedQuotations.includes(proposal);
//                                 });
//                                 console.log("** Filtered Client Names:", filteredClientNames);

//                                 frm.set_df_property('policy_holder', 'options', filteredClientNames);
//                             }
//                         }
//                     });
//                 }
//             }
//         });

//         frm.add_custom_button(__('Tax Invoice'), function() {
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'Company-Details',
//                     fieldname: ['telephone', 'fax', 'postal_address', 'location', 'contact_person', 'vat_reg_no', 'country'],
//                     filters: {
//                         name: frm.doc.policy_holder
//                     }
//                 },
//                 callback: function(r) {
//                     if (r.message) {
//                         const { telephone, fax, postal_address, location, contact_person, vat_reg_no, country } = r.message;
//                         frappe.route_options = {
//                             invoice_to: frm.doc.policy_holder,
//                             date: frm.doc.invoice_date,
//                             invoice_no: frm.doc.invoice_no,
//                             reference: frm.doc.debit_note_no,
//                             crn: frm.doc.invoice_no,
//                             amount6: frm.doc.dd_amount,
//                             amount7: frm.doc.premium_rate,
//                             amount8: frm.doc.premiumrate,
//                             amount9: frm.doc.no_of_cls,
//                             amount10: frm.doc.cl_fee,
//                             amount11: frm.doc.clfee,
//                             amount17: frm.doc.no_of_cl_enq,
//                             amount12: frm.doc.cl_enquiry_fee,
//                             amount13: frm.doc.clenquiryfee,
//                             amount15: frm.doc.vat,
//                             telephone: telephone,
//                             fax: fax,
//                             address: postal_address,
//                             city: location,
//                             attn: contact_person,
//                             vat: vat_reg_no,
//                             country: country,
//                         };

//                         frappe.call({
//                             method: 'frappe.client.get_value',
//                             args: {
//                                 doctype: 'Policy Approvals',
//                                 fieldname: ['policy_number'],
//                                 filters: {
//                                     policy_holder: frm.doc.policy_holder
//                                 }
//                             },
//                             callback: function(r) {
//                                 if (r.message && r.message.policy_number) {
//                                     frappe.route_options.reference = r.message.policy_number;
//                                     frappe.new_doc('Debt Note Tax Invoice', frm, frappe.route_options);
//                                 } else {
//                                     frappe.msgprint(__('Policy Number not found for the selected Policy Holder.'));
//                                 }
//                             }
//                         });
//                     } else {
//                         frappe.msgprint(__('Company details not found for the selected Policy Holder.'));
//                     }
//                 }
//             });
//         }).addClass('btn-primary');

//         frm.add_custom_button(__('Internal Invoice'), function() {
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'Company-Details',
//                     fieldname: ['postal_address', 'location', 'vat_reg_no'],
//                     filters: {
//                         name: frm.doc.policy_holder
//                     }
//                 },
//                 callback: function(r) {
//                     if (r.message) {
//                         const postal_address = r.message.postal_address;
//                         const location = r.message.location;
//                         const vat_reg_no = r.message.vat_reg_no;
//                         frappe.route_options = {
//                             name1: frm.doc.policy_holder,
//                             date: frm.doc.invoice_date,
//                             address: postal_address,
//                             city: location,
//                             vat_registration_no: vat_reg_no,
//                         };
//                         frappe.new_doc('Debit Note Internal Invoice', frm, frappe.route_options);
//                     } else {
//                         frappe.msgprint(__('Telephone, Fax, and Postal Address not found for the selected Policy Holder.'));
//                     }
//                 }
//             });
//         }).addClass('btn-primary');
//     },

//     policy_holder: function(frm) {
//         var clientName = frm.doc.policy_holder;
        
//          frm.set_value('ph_name', clientName);

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'CI Invoices',
//                 filters: { policy_holder: clientName },
//                 fields: ['invoice_no', 'invoice_date']
//             },
//             callback: function(response) {
//                 console.log("DCI Proposals response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_proposals = response.message[0];
//                     frm.set_value('invoice_no', data_from_proposals.invoice_no || '');
//                     frm.set_value('invoice_date', data_from_proposals.invoice_date || '');
//                 } else {
//                     frm.set_value('invoice_no', '');
//                     frm.set_value('invoice_date', '');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//             }
//         });

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Export Declaration Invoice',
//                 filters: { policy_holder: clientName },
//                 fields: ['credit_limit_fee', 'credit_limits', 'credit_limit_enquiry_fee', 'credit_limits1', 'total']
//             },
//             callback: function(response) {
//                 console.log("DCI Proposals response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_proposals = response.message[0];
//                     frm.set_value('cl_fee', data_from_proposals.credit_limit_fee || '');
//                     frm.set_value('cl_enquiry_fee', data_from_proposals.credit_limit_enquiry_fee || '');
//                     frm.set_value('no_of_cls', data_from_proposals.credit_limits || '');
//                     frm.set_value('no_of_cl_enq', data_from_proposals.credit_limits1 || '');
//                     frm.set_value('cl_fee1', data_from_proposals.credit_limit_fee || '');
//                     frm.set_value('cl_enquiry_fee1', data_from_proposals.credit_limit_enquiry_fee || '');
//                     frm.set_value('noofcls', data_from_proposals.credit_limits || '');
//                     frm.set_value('noofclenq', data_from_proposals.credit_limits1 || '');
//                 } else {
//                     frm.set_value('premium_rate', '');
//                     frm.set_value('cl_fee', '');
//                     frm.set_value('cl_enquiry_fee', '');
//                     frm.set_value('no_of_cls', '');
//                     frm.set_value('no_of_cl_enq', '');
//                     frm.set_value('cl_fee1', '');
//                     frm.set_value('cl_enquiry_fee1', '');
//                     frm.set_value('noofcls', '');
//                     frm.set_value('noofclenq', '');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//             }
//         });

//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'Export Declarations',
//                 filters: { policy_holder: clientName },
//                 fields: ['premium_rate']
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     frm.set_value('premium_rate', r.message.premium_rate);
//                     frm.set_value('premium_rate1', r.message.premium_rate);
//                 }
//             }
//         });

//         frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'VAT',
//                 filters: {}
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     frm.set_value('vat', r.message.vat);
//                 }
//             }
//         });
//     },

//     ////---------Invoice Details tab
//     dd_amount: function(frm) {
//         calculateDD_Amount(frm);
//     },
//     premium_rate: function(frm) {
//         calculateDD_Amount(frm);
//     },
//     no_of_cls: function(frm) {
//         calculateno_of_cls(frm);
//     },
//     cl_fee: function(frm) {
//         calculateno_of_cls(frm);
//     },
//     no_of_cl_enq: function(frm) {
//         calculateno_of_cl_enq(frm);
//     },
//     cl_enquiry_fee: function(frm) {
//         calculateno_of_cl_enq(frm);
//     },

//     ////---------Debit note details
//     ddamount: function(frm) {
//         calculateDDAmount1(frm);
//     },
//     premium_rate1: function(frm) {
//         calculateDDAmount1(frm);
//     },
//     noofcls: function(frm) {
//         calculateno_ofcls(frm);
//     },
//     cl_fee1: function(frm) {
//         calculateno_ofcls(frm);
//     },
//     noofclenq: function(frm) {
//         calculateno_ofclenq(frm);
//     },
//     cl_enquiry_fee1: function(frm) {
//         calculateno_ofclenq(frm);
//     },
// });

// function generateNumber(frm) {
//     if (!frm.doc.dedbit_note_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `INV/${currentYear}/DDR`;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Debit Note',
//                 fields: ['dedbit_note_no'],
//                 order_by: 'dedbit_note_no desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastProposalNo = r.message[0].dedbit_note_no;
//                     let lastNumber = parseInt(lastProposalNo.split("DDR").pop());
//                     if (!isNaN(lastNumber)) {
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('dedbit_note_no', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('dedbit_note_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }

////---------Invoice Details tab
// function calculateDD_Amount(frm) {
//     var dd_amount = frm.doc.dd_amount;
//     var premium_rate = frm.doc.premium_rate;

//     dd_amount = parseFloat(dd_amount.replace(/[^\d.]/g, ''));
//     var premiumrate = (dd_amount * premium_rate) / 100;

//     var formattedPremiumRate = formatNumberWithoutCurrencySymbol(premiumrate);
//     var formattedDDAmount = formatNumberWithoutCurrencySymbol(dd_amount);

//     frm.set_value('premiumrate', formattedPremiumRate);
//     frm.set_value('dd_amount', formattedDDAmount);
//     frm.set_value('premiumrate', premiumrate);
// }

// function formatNumberWithoutCurrencySymbol(number) {
//     return number.toLocaleString('en-US');
// }

// function calculateno_of_cls(frm) {
//     var no_of_cls = frm.doc.no_of_cls;
//     var cl_fee = frm.doc.cl_fee;
//     var clfee = cl_fee * no_of_cls;
//     frm.set_value('clfee', clfee);
// }

// function calculateno_of_cl_enq(frm) {
//     var no_of_cl_enq = frm.doc.no_of_cl_enq;
//     var cl_enquiry_fee = frm.doc.cl_enquiry_fee;
//     var clenquiryfee = no_of_cl_enq * cl_enquiry_fee;
//     frm.set_value('clenquiryfee', clenquiryfee);
// }

////---------Debit note details
// function calculateDDAmount1(frm) {
//     var ddamount = frm.doc.ddamount;
//     var premium_rate1 = frm.doc.premium_rate1;

//     ddamount = parseFloat(ddamount.replace(/[^\d.]/g, ''));
//     var premium_rate2 = (premium_rate1 * ddamount) / 100;

//     var formattedpremium_rate2 = formatNumberWithoutCurrencySymbol(premium_rate2);
//     var formattedddamount = formatNumberWithoutCurrencySymbol(ddamount);

//     frm.set_value('premium_rate2', formattedpremium_rate2);
//     frm.set_value('ddamount', formattedddamount);
//     frm.set_value('premium_rate2', premium_rate2);
// }

// function calculateno_ofcls(frm) {
//     var noofcls = frm.doc.noofcls;
//     var cl_fee1 = frm.doc.cl_fee1;
//     var cl_fee2 = cl_fee1 * noofcls;
//     frm.set_value('cl_fee2', cl_fee2);
// }

// function calculateno_ofclenq(frm) {
//     var noofclenq = frm.doc.noofclenq;
//     var cl_enquiry_fee1 = frm.doc.cl_enquiry_fee1;
//     var cl_enquiry_fee2 = noofclenq * cl_enquiry_fee1;
//     frm.set_value('cl_enquiry_fee2', cl_enquiry_fee2);
// }





























 
