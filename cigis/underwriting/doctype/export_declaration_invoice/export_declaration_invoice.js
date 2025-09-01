// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on(Export' Declaration Invoice', {
//     refresh: function(frm) {
//         calculateInvoiceAmount(frm); // Calculate on initial form load
//  frm.fields_dict['credit_limits'].$wrapper.find('input').css("text-align", "right");
//   frm.fields_dict['credit_limit_fee'].$wrapper.find('input').css("text-align", "right");
//     frm.fields_dict['x'].$wrapper.find('input').css("text-align", "right");
//       frm.fields_dict['y'].$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict['total'].$wrapper.find('input').css("text-align", "right");
//                 frm.fields_dict['premium_charges'].$wrapper.find('input').css("text-align", "right");
//                                 frm.fields_dict['invoice_amount'].$wrapper.find('input').css("text-align", "right");
//                                                                 frm.fields_dict['credit_limit_enquiry_fee'].$wrapper.find('input').css("text-align", "right");

//                                                                 frm.fields_dict['credit_limits1'].$wrapper.find('input').css("text-align", "right");






 
//         // Add primary class to buttons
//         frm.fields_dict.add.$input.addClass('btn-primary');
//         frm.fields_dict.submit_to_finance.$input.addClass('btn-primary');

//         // Add event listener for change event on the 'vat' field
//         frm.fields_dict['vat'].$input.on('change', function() {
//             calculateInvoiceAmount(frm); 
//         });
        
//         // Fetch VAT percentages and set options for 'vat' field
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 'doctype': 'VAT Percentage',
//                 'fields': ['vat']
//             },
//             callback: function(response) {
//                 if (response.message) {
//                     // Extract VAT percentages from the response
//                     var exportVats = response.message.map(function(vatObj) {
//                         return vatObj.vat;
//                     });
//                     // Set the options for the 'vat' field
//                     frm.set_df_property('vat', 'options', exportVats);
//                 }
//             }
//         });
        
//     },
    
     
//     onload: function(frm) {
//          if (!frm.doc.invoice_no)
//         {
//             generateDDNumber(frm);
              
//         }

//         // Load data from related documents
//         loadDataFromExportDeclarations(frm);
//         loadDataFromDCIQuotation(frm);
//          frappe.msgprint('Enter Credit Limits Values');
//     //      fetchFieldValues(frm).then(() => {
//     //   exportDeclarationInvoice(frm);
//     // }); 
//     fetchFieldValues(frm).then(() => {
//       exportDeclarationInvoice(frm);
//     });
      
//     },
//     credit_limit_fee: function(frm) {
//         calculateTotal(frm);
//         exportDeclarationInvoice(frm);
//     },
//     credit_limits: function(frm) {
//         calculateTotal(frm);
//           // frm.set_df_property('export_invoice', 'cannot_add_rows', true); 
        
//     },
//     credit_limit_enquiry_fee: function(frm) {
//         calculateTotal(frm);
//         exportDeclarationInvoice(frm);
//     },
//     premium_charges: function(frm) {
//         if (!frm.doc.credit_limits) {
//             frappe.msgprint('First enter Credit Limits value.');
//             return;
//         }
//         calculateTotal(frm);
//         exportDeclarationInvoice(frm);
         
                  
//     },
    
//     vat: function(frm) {
//          calculateInvoiceAmount(frm);
//           var vat = frm.doc.vat; 
//           var invoice_amount = frm.doc.invoice_amount;
//      },
    
//     submit_to_finance: function(frm) {
//         frappe.route_options = {
//             policy_holder: frm.doc.policy_holder,
//             month: frm.doc.month,
//             vat: frm.doc.vat,
//             invoice_date: frm.doc.invoice_date,
//             invoice_no: frm.doc.invoice_no,
//             invoice_amount: frm.doc.invoice_amount
//         };

//         const ci_invoices_data = {
//             doctype: "CI Invoices",
//             parent: frm.doc.name,
//             policy_holder: frm.doc.policy_holder,
//             month: frm.doc.month,
//             year: frm.doc.year,
//             vat: frm.doc.vat,
//             invoice_date: frm.doc.invoice_date,
//             invoice_no: frm.doc.invoice_no,
//             invoice_amount: frm.doc.invoice_amount,
//             invoice_amount_without_vat: frm.doc.invoice_amount_without_vat,
//         };

//         const export_invoice = frm.doc.export_invoice.map(row => ({
//             description: row.description,
//             qty: row.qty,
//             price: row.premium_charges,
//             amount: row.amount,
//         }));

//         const export_buyer = frm.doc.export_buyer.map(row => ({
//             buyer: row.buyer,
//             country: row.country,
//             premium_rate: row.premium_rate,
//             premamount: row.turn_over_amt,
//             declamt: row.amount1,
//         }));

//         ci_invoices_data['export_invoice'] = export_invoice;
//         ci_invoices_data['export_buyer'] = export_buyer;

//         frappe.db.insert(ci_invoices_data).then(function(response) {
//             if (response && response.name) {
//                 frappe.set_route('Form', 'CI Invoices', response.name);
//             } else {
//                 console.error("Failed to insert data into CI Invoices.");
//             }
//         }).catch(function(err) {
//             console.error("Error occurred during insertion:", err);
//         });
//     },
//     //   after_save: function(frm) {
//     //     // After saving, ensure the form is marked as saved
//     //     frm.doc.__unsaved = false;
//     // },

//     // // Prevent saving if required fields are not filled
//     // validate: function(frm) {
//     //     if (!frm.doc.invoice_amount || !frm.doc.vat) {
//     //         frappe.msgprint('Please fill in all required fields.');
//     //         frappe.validated = false;
//     //     }
//     // }
 

// });

 

 
// function calculateInvoiceAmount(frm) {
//     // Function to calculate invoice amount

//     // Get field values
//     var total = frm.doc.total || 0;
//     var vat = frm.doc.vat || 0;
//     var x = frm.doc.x || 0;
//     var y = frm.doc.premium_charges || 0;
    
//     // Perform calculation
//     var result = (total * vat / 100) + parseFloat( x) + parseFloat( y) ;
    
//     // Set result into invoice_amount field
//     frm.set_value('invoice_amount', result);
// }

//  function generateDDNumber(frm) {
//     // Check if field is already populated
//     if (!frm.doc.invoice_no) {
//         // Get the current year
//         let currentYear = new Date().getFullYear();
//         let prefix = `INV/${currentYear}/`;

//         // Make a call to get the last Export Declarations number asynchronously
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Submit to Finance',
//                 fields: ['invoice_no'],
//                 limit: 1,
//                 order_by: 'creation desc'
//             },
//             callback: function(response) {
//                 let lastEDNumber = response.message && response.message.length > 0 ? response.message[0].invoice_no : '0';
//                 let lastNumber = parseInt(lastEDNumber.split("/").pop()) || 0; // Extract last part and parse it as integer

//                 // Make a call to get the last Domestic Declarations number asynchronously
//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Export Declaration Invoice',
//                         fields: ['invoice_no'],
//                         limit: 1,
//                         order_by: 'creation desc'
//                     },
//                     callback: function(response) {
//                         let lastDomesticDeclarationsDDNumber = response.message && response.message.length > 0 ? response.message[0].invoice_no : '0';
//                         let lastDomesticDeclarationsDDNo = parseInt(lastDomesticDeclarationsDDNumber.split("/").pop()) || 0;

//                         // Get the maximum of the last two numbers
//                         let maxLastNumber = Math.max(lastNumber, lastDomesticDeclarationsDDNo);

//                         // Increment the last number and pad it with leading zeros
//                         let newNumber = (maxLastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('invoice_no', prefix + newNumber);
//                     }
//                 });
//             }
//         });
//     }
     
// }

// function loadDataFromExportDeclarations(frm) {
//     frappe.call({
//         method: 'frappe.client.get',
//         args: {
//             doctype: 'Export Declarations',
//             filters: {
//                 policy_holder: frm.doc.policy_holder
//             }
//         },
//         callback: function(r) {
//             if (r.message) {
//           // frm.set_value('policy_holder', r.message.policy_holder);
//             }
//         }
//     });
// }

// function loadDataFromDCIQuotation(frm) {
//     frappe.call({
//         method: 'frappe.client.get',
//         args: {
//             doctype: 'ECI Quotations',
//             filters: {
//                 per_enquiryp: frm.doc.per_enquiryp
//             }
//         },
//         callback: function(r) {
//             if (r.message) {
//                 frm.set_value('credit_limit_fee', r.message.cl_per_monthp);
//                 frm.set_value('credit_limit_enquiry_fee', r.message.per_enquiryp);
//             }
//         }
//     });
// }

// function calculateTotal(frm) {
//     var x = frm.doc.credit_limit_fee * frm.doc.credit_limits;
//     var y = frm.doc.credit_limit_enquiry_fee * frm.doc.credit_limits1;
//     var premiumCharges = +frm.doc.premium_charges;

//     var total = x + y + premiumCharges;

//     frm.set_value('x', x);
//     frm.set_value('y', y);
//     frm.set_value('total', total);
// }

 
//   function exportDeclarationInvoice(frm) {
//   // Get the values from your fields
//   var premium_charges = frm.doc.premium_charges;
//   var credit_limit_fee = frm.doc.credit_limit_fee;
//   var credit_limit_enquiry_fee = frm.doc.credit_limit_enquiry_fee;
//   var credit_limits = frm.doc.credit_limits;
//   var credit_limits1 = frm.doc.credit_limits1;
 
//   // Check if all required fields are filled
//   if (!premium_charges || !credit_limit_fee || !credit_limit_enquiry_fee) {
//   // frappe.msgprint('Please fill all the required fields');
//     return;
//   }
 
//   // Define label names corresponding to each field
//   var label_names = {
//     premium_charges: 'Premium Charges',
//     credit_limit_fee: 'Credit Limit Fee',
//     credit_limit_enquiry_fee: 'Credit Limit Enquiry Fee'
//   };
 
//   // Clear existing child table rows
//   frm.clear_table('export_invoice');
 
//   // Add three child rows at once
//   for (var i = 1; i <= 3; i++) {
//     var child = frappe.model.add_child(frm.doc, "Export Invoice Item Child", "export_invoice");
//     var premium_charge = 0;
//     var description = '';
//     var qty = 0;
//     var amount = 0;
 
//     switch (i) {
//       case 1:
//         premium_charge = premium_charges;
//         description = label_names['premium_charges'];
//         qty = credit_limits; // Set qty to credit_limits for the first row
//         amount = premium_charge * qty;
//         break;
//       case 2:
//         premium_charge = credit_limit_fee;
//         description = label_names['credit_limit_fee'];
//         qty = credit_limits1; // Set qty to credit_limits1 for the second row
//         amount = premium_charge * qty;
//         break;
//       case 3:
//         premium_charge = credit_limit_enquiry_fee;
//         description = label_names['credit_limit_enquiry_fee'];
//         qty = credit_limits; // Set qty to credit_limits for the third row (same as first row)
//         amount = premium_charge * qty;
//         break;
//       default:
//         break;
//     }
 
//     // Set the values in the child table row
//     frappe.model.set_value(child.doctype, child.name, "premium_charges", premium_charge);
//     frappe.model.set_value(child.doctype, child.name, "description", description);
//     frappe.model.set_value(child.doctype, child.name, "qty", qty); // Set the qty field
//     frappe.model.set_value(child.doctype, child.name, "amount", amount); // Set the amount field
//   }
 
//   // Refresh the child table to show the new data
//   frm.refresh_field('export_invoice');
//                                                                   frm.fields_dict[' amount'].$wrapper.find('input').css("text-align", "right");

// }
 
 
 
