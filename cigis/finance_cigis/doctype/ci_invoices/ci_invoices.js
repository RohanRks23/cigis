// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

  
// frappe.ui.form.on('CI Invoices', {
//     tax_invoice: function(frm) {
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
//                         sub_total:frm.doc.vat,
//                         month :frm.doc.month,
//                         telephone: telephone,
//                         fax: fax,
//                         address: postal_address,
//                         city: location,
//                         attn: contact_person,
//                         vat: vat_reg_no,
//                         //country:country,
//                     };

//                     // Create a new Tax Invoice For CI Invoice document
//                     frappe.new_doc('Tax Invoice For CI Invoice');
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
//                     frappe.new_doc('Tax Invoice For CI Invoice');
//                 } else {
//                     // If the policy number is not found, display a message to the user
//                     frappe.msgprint(__('Policy Number not found for the selected Policy Holder.'));
//                 }
//             }
//         });
//         //   var childtable = frm.doc.export_invoice;
//         // for (var i = 0; i < childtable.length; i++) {
//         //     var row = childtable[i];
            
//         //     frappe.model.with_doctype('Tax Invoice For CI Invoice', function() {
//         //         var newDoc = frappe.model.get_new_doc('Tax Invoice For CI Invoice');
//         //                         frappe.model.set_value(newDoc.doctype, newDoc.name, 'qty', row.country);

//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, ' d', row. qty);
//         //           frappe.model.set_value(newDoc.doctype, newDoc.name, ' amount', row.c);
//         //       // frappe.model.set_value(newDoc.doctype, newDoc.name, 'premium', row.premamount);
//         //         frappe.set_route('Form', 'Tax Invoice For CI Invoice', newDoc.name);
//         //     });
//         // }

//         // Process export_invoice child table
//         // var invoiceChildTable = frm.doc.export_invoice;
//         // for (var j = 0; j < invoiceChildTable.length; j++) {
//         //     let row = invoiceChildTable[j];  // Use 'let' for block-scoped variable
//         //     frappe.model.with_doctype('Tax Invoice For CI Invoice', function() {
//         //         var newDoc = frappe.model.get_new_doc('Tax Invoice For CI Invoice');
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'country', row.country);
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency1', row.qty);
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency2', row.price);
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency3', row.amount);
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency4', row.qty);
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency5', row.price);
//         //         frappe.model.set_value(newDoc.doctype, newDoc.name, 'currency6', row.amount);
//         //         frappe.set_route('Form', 'Tax Invoice For CI Invoice', newDoc.name);
//         //     });
//         // }
          
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

//                     frappe.new_doc('Internal Invoice for CI Invoice');
//                 } else {
//                     frappe.msgprint(__('Telephone, Fax, and Postal Address not found for the selected Policy Holder.'));
//                 }
//             }
//         });
//         var childtable = frm.doc.export_buyer;
//         for (var i = 0; i < childtable.length; i++) {
//             var row = childtable[i];
            
//             frappe.model.with_doctype('Internal Invoice for CI Invoice', function() {
//                 var newDoc = frappe.model.get_new_doc('Internal Invoice for CI Invoice');
//                                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'data3', row.buyer);

//                 frappe.model.set_value(newDoc.doctype, newDoc.name, 'data5', row.declamt);
//                   frappe.model.set_value(newDoc.doctype, newDoc.name, 'data4', row. country);
              
//                 frappe.set_route('Form', 'Internal Invoice for CI Invoice', newDoc.name);
//             });
//         }
//     },
//      with_out_vat: function(frm) {
//         // Check if 'With Out Vat' checkbox is selected
//         if (frm.doc.with_out_vat) {
//             // Get the current invoice amount and VAT amount
//             var invoice_amount = frm.doc.invoice_amount;
//             var vat = frm.doc.vat;

//             // Calculate the invoice amount without VAT
//             var invoice_amount_without_vat = invoice_amount - vat;

//             // Set the calculated value in the 'invoice_amount_without_vat' field
//             frm.set_value('invoice_amount_without_vat', invoice_amount_without_vat);
//         } else {
//             // If 'With Out Vat' is not checked, clear the 'invoice_amount_without_vat' field
//             frm.set_value('invoice_amount_without_vat', null);
//         }
//     },
//      refresh: function(frm) {
//           frm.fields_dict['invoice_amount'].$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict['invoice_amount_without_vat'].$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict['vat'].$wrapper.find('input').css("text-align", "right");
//          frm.set_df_property('export_buyer','cannot_add_rows', true); 
//          frm.set_df_property('export_invoice','cannot_add_rows', true); 
//                   frm.fields_dict.tax_invoice.$input.addClass('btn-primary');
//          frm.fields_dict.internal_invoice.$input.addClass('btn-primary');

//           var exportBuyerRows = frm.doc.export_buyer || [];
//         if (exportBuyerRows.length > 0) {
//             // Show the export_buyer child table if there are rows
//             frm.fields_dict['export_buyer'].grid.wrapper.show();
//         } else {
//             // Hide the export_buyer child table if there are no rows
//             frm.fields_dict['export_buyer'].grid.wrapper.hide();
//         }

//         // Check if export_invoice table has any rows
//         var exportInvoiceRows = frm.doc.export_invoice || [];
//         if (exportInvoiceRows.length > 0) {
//             // Show the export_invoice child table if there are rows
//             frm.fields_dict['export_invoice'].grid.wrapper.show();
//         } else {
//             // Hide the export_invoice child table if there are no rows
//             frm.fields_dict['export_invoice'].grid.wrapper.hide();
//         }
//      }
// });
    
             
