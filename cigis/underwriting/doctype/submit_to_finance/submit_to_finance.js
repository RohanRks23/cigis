// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Submit to Finance', {
 
   

    
//     onload: function(frm) {
//         frm.set_df_property('child_table', 'cannot_add_rows', true);
        
//         // Generate DD number
//         generateDDNumber(frm);

//         // Fetch DCI Quotation
//         fetchDCIQuotation(frm);

//         // Fetch Domestic Declarations
//         fetchDomesticDeclarations(frm);

//         // Generate Client Number
//         generateClientNumber(frm);
        
    
//     },

//     credit_limit_fee: function(frm) {
//         calculateTotal(frm);
//     },
//     credit_limit: function(frm) {
//         calculateTotal(frm);
//     },
   
//     credit_limit_enquiry_fee: function(frm) {
//         calculateTotal(frm);
//     },
//     credit_limits: function(frm) {
//         calculateTotal(frm);
//     },
//     premium_charges: function(frm) {
//         calculateTotal(frm);
//     },
//     total: function(frm) {
//         calculateTotal(frm);
//     },
//     vat: function(frm) {
//         calculateTotal(frm);
//     },
//     invoice_amount: function(frm) {
//         calculateTotal(frm);
//     },
//     add: function(frm) {
//         submitToFinance(frm);
//     },

//     submit_to_finance: function(frm) {
//         frm.fields_dict.submit_to_finance.$input.addClass('btn-primary');

//         var name1 = frm.doc.name1;
//         var month = frm.doc.month;
//         var year = frm.doc.year;
//         var vat = frm.doc.vat;
//         var invoice_date = frm.doc.invoice_date;
//         var invoice_no = frm.doc.invoice_no;
//         var invoice_amount = frm.doc.invoice_amount;
//         var total = frm.doc.total;

//         var ci_invoice = frappe.model.get_new_doc('CI Invoices');
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'policy_holder', name1);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'month', month);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'year', year);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'vat', vat);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_date', invoice_date);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_no', invoice_no);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_amount', invoice_amount);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_amount_without_vat', total);

//         // Populate child table
//         const child_table = frm.doc.child_table.map(row => ({
//             description: row.description,
//             qty: row.quantity,
//             price: row.price,
//         }));
//         ci_invoice.export_invoice = child_table;

//         frappe.db.insert(ci_invoice)
//             .then(function(response) {
//                 if (response && response.name) {
//                     frappe.set_route("Form", "CI Invoices", response.name);
//                 } else {
//                     frappe.msgprint("Failed to create CI Invoice.");
//                 }
//             })
//             .catch(function(error) {
//                 console.error('Failed to create CI Invoice:', error);
//                 frappe.msgprint('An error occurred while creating CI Invoice.');
//             });
//     },
    
//     refresh: function(frm) {
 
 
// frm.fields_dict.invoice_amount.$input.css("text-align", "right");

// frm.fields_dict.premium_charges.$input.css("text-align", "right");

// frm.fields_dict.premium_rate.$input.css("text-align", "right");

// frm.fields_dict.a.$input.css("text-align", "right");

// frm.fields_dict.credit_limit_fee.$input.css("text-align", "right");

// frm.fields_dict.credit_limit.$input.css("text-align", "right");

// frm.fields_dict.b.$input.css("text-align", "right");

// frm.fields_dict.credit_limit_enquiry_fee.$input.css("text-align", "right");

// frm.fields_dict.credit_limits.$input.css("text-align", "right");

// frm.fields_dict.credit_limits.$input.css("text-align", "right");

// frm.fields_dict.total.$input.css("text-align", "right");

// frm.fields_dict.c.$input.css("text-align", "right");

// frm.fields_dict.vat.$input.css("text-align", "right");



//     }
    
   
   
   




// });






// function generateDDNumber(frm) {
//     if (!frm.doc.invoice_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `INV/${currentYear}/`;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Export Declaration Invoice',
//                 fields: ['invoice_no'],
//                 limit: 1,
//                 order_by: 'creation desc'
//             },
//             callback: function(response1) {
//                 let lastEDNumber = response1.message && response1.message.length > 0 ? response1.message[0].invoice_no : '0';
//                 let lastNumber = parseInt(lastEDNumber.split("/").pop()) || 0;

//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Submit to Finance',
//                         fields: ['invoice_no'],
//                         limit: 1,
//                         order_by: 'creation desc'
//                     },
//                     callback: function(response2) {
//                         let lastDomesticDeclarationsDDNumber = response2.message && response2.message.length > 0 ? response2.message[0].invoice_no : '0';
//                         let lastDomesticDeclarationsDDNo = parseInt(lastDomesticDeclarationsDDNumber.split("/").pop()) || 0;

//                         let maxLastNumber = Math.max(lastNumber, lastDomesticDeclarationsDDNo);
//                         let newNumber = (maxLastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('invoice_no', prefix + newNumber);
//                     },
//                     error: function(err) {
//                         console.error('Error fetching last Domestic Declarations number:', err);
//                         frappe.msgprint('An error occurred while fetching the last Domestic Declarations number.');
//                     }
//                 });
//             },
//             error: function(err) {
//                 console.error('Error fetching last Export Declarations number:', err);
//                 frappe.msgprint('An error occurred while fetching the last Export Declarations number.');
//             }
//         });
//     }
// }

// function fetchDCIQuotation(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'DCIQuotation',
//             filters: {
//                 clientName: frm.doc.client_name
//             },
//             fields: ['premium_rate', 'fee_per_enquiry', 'fee_for_cl_per_month']
//         },
//         callback: function(response) {
//             if (response.message && response.message.length > 0) {
//                 var data_from_dcqt = response.message[0];
//                 frm.set_value('premium_rate', data_from_dcqt.premium_rate || '');
//                 frm.set_value('credit_limit_enquiry_fee', data_from_dcqt.fee_per_enquiry || '');
//                 frm.set_value('credit_limit_fee', data_from_dcqt.fee_for_cl_per_month || '');
//             } else {
//                 frm.set_value('premium_rate', '');
//                 frm.set_value('credit_limit_fee', '');
//                 frm.set_value('credit_limit_enquiry_fee', '');
//             }
//         },
//         error: function(err) {
//             console.error(err);
//             frappe.msgprint('An error occurred while fetching data from DCIQuotation.');
//         }
//     });
// }

// function fetchDomesticDeclarations(frm) {
//     // Check if 'name1' is available in the form
//     if (!frm.doc.name1) {
//         //frappe.msgprint('Please enter a value for "Name1" before fetching domestic declarations.');
//         console.error('Name1 field is empty.');
//         return;
//     }

//     // Log the value of 'name1' being used for the fetch
//     console.log('Fetching domestic declarations for Name1:', frm.doc.name1);

//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Domestic Declarations',
//             filters: {
//                 'policy_holder': frm.doc.name1,
//                 'name': ['!=', '']
//             },
//             fields: ['outstanding_adjusted_wo_vat', 'turnover_adjusted_wo_vat'],
//             limit: 1
//         },
//         callback: function(response) {
//             // Log the raw response for debugging purposes
//             console.log('Fetch Domestic Declarations Response:', response);

//             if (response.message && response.message.length > 0) {
//                 var data = response.message[0];
//                 var outstanding_adjusted_wo_vat = data.outstanding_adjusted_wo_vat;
//                 var turnover_adjusted_wo_vat = data.turnover_adjusted_wo_vat;

//                 // Log the values being used to set 'premium_charges'
//                 console.log('outstanding_adjusted_wo_vat:', outstanding_adjusted_wo_vat);
//                 console.log('turnover_adjusted_wo_vat:', turnover_adjusted_wo_vat);

//                 if (outstanding_adjusted_wo_vat) {
//                     frm.set_value('premium_charges', outstanding_adjusted_wo_vat);
//                     console.log('Set premium_charges to:', outstanding_adjusted_wo_vat);
//                 } else if (turnover_adjusted_wo_vat) {
//                     frm.set_value('premium_charges', turnover_adjusted_wo_vat);
//                     console.log('Set premium_charges to:', turnover_adjusted_wo_vat);
//                 } else {
//                     frm.set_value('premium_charges', '');
//                     console.log('Set premium_charges to an empty string.');
//                 }
//             } else {
//                 frm.set_value('premium_charges', '');
//                 console.log('No matching domestic declarations found. Set premium_charges to an empty string.');
//             }
//         },
//         error: function(err) {
//             console.error('Error fetching domestic declarations:', err);
//             frappe.msgprint('An error occurred while fetching data from Domestic Declarations.');
//         }
//     });
// }

// function generateClientNumber(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Submit to Finance',
//             fields: ['client'],
//             order_by: 'creation desc',
//             limit: 1
//         },
//         callback: function(r) {
//             let lastClient = r.message.length > 0 ? r.message[0].client : '';
//             let lastNumber = lastClient ? parseInt(lastClient.substring(4)) : 0;
//             let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//             let client = frm.doc.name1.substring(0, 4) + newNumber;
//             frm.set_value('client', client);
//         },
//         error: function(err) {
//             console.error(err);
//             frappe.msgprint('An error occurred while generating the client number.');
//         }
//     });
// }

// function calculateTotal(frm) {
//     var a = frm.doc.premium_charges * frm.doc.premium_rate / 100 || 0;
//     var b = frm.doc.credit_limit_fee * frm.doc.credit_limit || 0;
//     var c = frm.doc.credit_limit_enquiry_fee * frm.doc.credit_limits || 0;
//     var total = a + b + c;
//     var vat = frm.doc.vat;
//     var invoice_amount = total + (total * (vat / 100));

//     frm.set_value('a', a);
//     frm.set_value('b', b);
//     frm.set_value('c', c);
//     frm.set_value('total', total);
//     frm.set_value('invoice_amount', invoice_amount);
// }

// function submitToFinance(frm) {
//     var premium_charges = frm.doc.premium_charges;
//     var credit_limit_fee = frm.doc.credit_limit_fee;
//     var credit_limit_enquiry_fee = frm.doc.credit_limit_enquiry_fee;
//     var credit_limit = frm.doc.credit_limit;
//     var credit_limits = frm.doc.credit_limits;

//     if (!premium_charges || !credit_limit_fee || !credit_limit_enquiry_fee) {
//         frappe.msgprint('Please fill all the required fields');
//         return;
//     }

//     var label_names = {
//         premium_charges: 'Premium Charges',
//         credit_limit_fee: 'Credit Limit Fee',
//         credit_limit_enquiry_fee: 'Credit Limit Enquiry Fee'
//     };

//     for (var i = 1; i <= 3; i++) {
//         var child = frappe.model.add_child(frm.doc, "Submit to Finance Child", "child_table");
//         var premium_charge = 0;
//         var description = '';
//         var quantity = 0;
//         var price = 0;
//         var amount = 0;

//         switch (i) {
//             case 1:
//                 premium_charge = premium_charges;
//                 description = label_names['premium_charges'];
//                 quantity = 1;
//                 price = frm.doc.a;
//                 amount = frm.doc.a;
//                 break;
//             case 2:
//                 premium_charge = credit_limit_fee;
//                 description = label_names['credit_limit_fee'];
//                 quantity = credit_limit;
//                 price = credit_limit_fee;
//                 amount = frm.doc.b;
//                 break;
//             case 3:
//                 premium_charge = credit_limit_enquiry_fee;
//                 description = label_names['credit_limit_enquiry_fee'];
//                 quantity = credit_limits;
//                 price = credit_limit_enquiry_fee;
//                 amount = frm.doc.c;
//                 break;
//             default:
//                 break;
//         }

//         frappe.model.set_value(child.doctype, child.name, "premium_charges", premium_charge);
//         frappe.model.set_value(child.doctype, child.name, "description", description);
//         frappe.model.set_value(child.doctype, child.name, "quantity", quantity);
//         frappe.model.set_value(child.doctype, child.name, "price", price);
//         frappe.model.set_value(child.doctype, child.name, "amount", amount);
//     }

//     frm.refresh_fields();
// }
















// frappe.ui.form.on('Submit to Finance', {
    
//      onload: function(frm) {
        
//         frm.set_df_property('child_table', 'cannot_add_rows', true);
        
//         generateDDNumber(frm);
        
//         var Name = frm.doc.name1;
//         var clientName = frm.doc.client_name;
//         var name1 = frm.doc.name1;
        
 
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Company-Details',
//                 filters: {
//                     name1: frm.doc.name1
//                 },
//                 fields: ['status','name1']
//             },
//             callback: function(response) {
//                 console.log("Company-details response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_company = response.message[0];
 
//                     // Populate fields if data is found
//                     frm.set_value('status', data_from_company.status || '');
                    
//                 } else {
//                     // Clear fields if no matching record found
//                     frm.set_value('status', '');
                    
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from Company details. Please check the console for details.');
//             }
//         });
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'DCIQuotation',
//                 filters: {
//                     clientName: frm.doc.client_name
//                 },
//                 fields: ['premium_rate','fee_per_enquiry','fee_for_cl_per_month',]
//             },
//             callback: function(response) {
//                 console.log(" response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_dcqt = response.message[0];
 
//                     // Populate fields if data is found
//                     frm.set_value('premium_rate', data_from_dcqt.premium_rate || '');
//                     frm.set_value('credit_limit_enquiry_fee', data_from_dcqt.fee_per_enquiry || '');
//                     frm.set_value('credit_limit_fee', data_from_dcqt.fee_for_cl_per_month || '');



                    
//                 } else {
//                     // Clear fields if no matching record found
//                     frm.set_value('premium_rate', '');
//                     frm.set_value('credit_limit_fee', '');
//                      frm.set_value('credit_limit_enquiry_fee', '');
                    
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data. Please check the console for details.');
//             }
//         });
        
//         frappe.call({
//       method: 'frappe.client.get_list',
//       args: {
//         doctype: 'Domestic Declarations',
//         filters: {
//             'policy_holder': name1,
//             'name': ['!=', ''] // This condition ensures that 'name' is not empty
//         },
//         fields: ['outstanding_adjusted_wo_vat', 'turnover_adjusted_wo_vat'],
//         limit: 1 // Fetch only one record
//     },
//     callback: function(response) {
//         if (response.message && response.message.length > 0) {
//             var data = response.message[0];
//             var outstanding_adjusted_wo_vat = data.outstanding_adjusted_wo_vat;
//             var turnover_adjusted_wo_vat = data.turnover_adjusted_wo_vat;

//             // Assign values to the premium_charges field based on conditions
//             if (outstanding_adjusted_wo_vat) {
//                 frm.set_value('premium_charges', outstanding_adjusted_wo_vat);
//             } else if (turnover_adjusted_wo_vat) {
//                 frm.set_value('premium_charges', turnover_adjusted_wo_vat);
//             } else {
//                 frm.set_value('premium_charges', ''); // Set premium_charges to empty if both fields are empty
//             }
//         } else {
//             frm.set_value('premium_charges', ''); // Set premium_charges to empty if no matching record is found
//         }
//     }
// });
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Submit to Finance', 
//                 fields: ['client'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 let lastClient = r.message.length > 0 ? r.message[0].client : '';
//                 let lastNumber = lastClient ? parseInt(lastClient.substring(4)) : 0;
//                 let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                 let client = frm.doc.name1.substring(0, 4) + newNumber;
//                 frm.set_value('client', client);
//             }
//         });
        
// //      frappe.call({
// //         method: 'frappe.client.get',
// //         args: {
// //         doctype: 'VAT',
// //         filters: {}
// //         },
// //     callback: function(r) {
// //         if (r.message) {
// //             frm.set_value('vat', r.message.vat);
// //         }
// //     }
// //});

     

// },
    
    
   



//     credit_limit_fee: function(frm) {
//         calculateTotal(frm);
//     },
//     credit_limit: function(frm) {
//         calculateTotal(frm);
//     },
//     credit_limits: function(frm) {
//         calculateTotal(frm);
//     },
//     credit_limit_enquiry_fee: function(frm) {
//         calculateTotal(frm);
//     },
//     premium_charges: function(frm) {
//         calculateTotal(frm);
//     },
//     total: function(frm) {
//         calculateTotal(frm);
//     },
//     vat: function(frm) {
//         calculateTotal(frm);
//     },
//     invoice_amount: function(frm) {
//         calculateTotal(frm);
//     },
//     add: function(frm) {
//         SubmittoFinance(frm);
//     },
    
//     submit_to_finance: function(frm) {
//         // Add primary class to the submit button
//         frm.fields_dict.submit_to_finance.$input.addClass('btn-primary');

//         var name1 = frm.doc.name1;
//         var month = frm.doc.month;
//         var year = frm.doc.year;
//         var vat = frm.doc.vat;
//         var invoice_date = frm.doc.invoice_date;
//         var invoice_no = frm.doc.invoice_no;
//         var invoice_amount = frm.doc.invoice_amount;
//         var total = frm.doc.total; // Assuming this is the total amount

//         // Prepare CI Invoice document with provided field values
//         var ci_invoice = frappe.model.get_new_doc('CI Invoices');
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'policy_holder', name1);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'month', month);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'year', year);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'vat', vat);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_date', invoice_date);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_no', invoice_no);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_amount', invoice_amount);
//         frappe.model.set_value(ci_invoice.doctype, ci_invoice.name, 'invoice_amount_without_vat', total);

//         // Prepare child table data
//         const child_table = frm.doc.child_table.map(row => ({
//             description: row.description,
//             qty: row.quantity,
//             price: row.price,
//         }));

//         // Set child table data to CI Invoice document
//         ci_invoice.export_invoice = child_table;

//         // Insert CI Invoice document
//         frappe.db.insert(ci_invoice).then(function(response) {
//             if (response && response.name) {
//                 // Open the CI Invoices doctype after insertion
//                 frappe.set_route("Form", "CI Invoices", response.name);
//             } else {
//                 frappe.msgprint("Failed to create CI Invoice.");
//             }
//         });
//     }
// });

// function generateDDNumber(frm) {
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


// function calculateTotal(frm) {
//     var a = frm.doc.premium_charges * frm.doc.premium_rate / 100 || 0;
//     var b = frm.doc.credit_limit_fee * frm.doc.credit_limit || 0;
//     var c = frm.doc.credit_limit_enquiry_fee * frm.doc.credit_limits || 0;
//     var total = a + b + c;
//     var vat = frm.doc.vat;
    
//     var invoice_amount = total + (total * (vat / 100));
    
//     frm.set_value('a', a);
//     frm.set_value('b', b);
//     frm.set_value('c', c);
//     frm.set_value('total', total);
//     frm.set_value('invoice_amount', invoice_amount); 
   
// }


// function SubmittoFinance(frm) {
//     // Get the values from your fields
//     var premium_charges = frm.doc.premium_charges;
//     var credit_limit_fee = frm.doc.credit_limit_fee;
//     var credit_limit_enquiry_fee = frm.doc.credit_limit_enquiry_fee;
//     var credit_limit = frm.doc.credit_limit;
//     var credit_limits = frm.doc.credit_limits;

//     // Check if all required fields are filled
//     if (!premium_charges || !credit_limit_fee || !credit_limit_enquiry_fee) {
//         frappe.msgprint('Please fill all the required fields');
//         return;
//     }

//     // Define label names corresponding to each field
//     var label_names = {
//         premium_charges: 'Premium Charges',
//         credit_limit_fee: 'Credit Limit Fee',
//         credit_limit_enquiry_fee: 'Credit Limit Enquiry Fee'
//     };

//     // Add three child rows at once
//     for (var i = 1; i <= 3; i++) {
//         var child = frappe.model.add_child(frm.doc, "Submit to Finance Child", "child_table");
//         var premium_charge = 0;
//         var description = '';
//         var quantity = 0;
//         var price = 0;
//         var amount = 0;

//         switch (i) {
//             case 1:
//                 premium_charge = premium_charges;
//                 description = label_names['premium_charges'];
//                 quantity = 1; 
//                 price = frm.doc.a; // Set price to the value of 'a' from the form
//                 amount = frm.doc.a; // Set amount to the value of 'a' from the form
//                 break;
//             case 2:
//                 premium_charge = credit_limit_fee;
//                 description = label_names['credit_limit_fee'];
//                 quantity = credit_limit;
//                 price = credit_limit_fee; 
//                 amount = frm.doc.b;
//                 break;
//             case 3:
//                 premium_charge = credit_limit_enquiry_fee;
//                 description = label_names['credit_limit_enquiry_fee'];
//                 quantity = credit_limits; 
//                 price = credit_limit_enquiry_fee; 
//                 amount = frm.doc.c;
//                 break;
//             default:
//                 break;
//         }

//         // Set the values in the child table row
//         frappe.model.set_value(child.doctype, child.name, "premium_charges", premium_charge);
//         frappe.model.set_value(child.doctype, child.name, "description", description);
//         frappe.model.set_value(child.doctype, child.name, "quantity", quantity); // Set the qty field
//         frappe.model.set_value(child.doctype, child.name, "price", price); // Set the price field
//         frappe.model.set_value(child.doctype, child.name, "amount", amount); // Set the amount field
//     }

   
//     // Refresh the form to show the new data in the child table
//     frm.refresh_fields();
// }




