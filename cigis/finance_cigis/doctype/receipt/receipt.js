// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// let serialNumber = 1; 

// function receipt(frm) {
//     const currentYear = new Date().getFullYear();
//     const serialNumberFormatted = serialNumber.toString().padStart(4, '000');

//     frm.set_value('receiptno', `RCPT/${currentYear}/${serialNumberFormatted}`);

//     serialNumber++;
// }

// function generateNumber(frm) {
//     if (!frm.doc.claim_ref_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `RCPT/${currentYear}/`;
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Receipt',
//                 fields: ['receiptno'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastReceiptNo = r.message[0].receiptno;
//                     let lastNumber = lastReceiptNo ? parseInt(lastReceiptNo.split("/").pop()) : null;
//                     if (!isNaN(lastNumber)) {
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('receiptno', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('receiptno', prefix + '0001');
//                 }
//             }
//         });
//     }
// }


// frappe.ui.form.on('Receipt', {
   
//    refresh(frm){
//        frm.fields_dict.depositamt.$input.css("text-align","right");
//        frm.fields_dict.totaldeduction.$input.css("text-align","right");
//        frm.fields_dict.depositbalance.$input.css("text-align","right");
//        frm.fields_dict.receiptamt.$input.css("text-align","right");
//        frm.fields_dict.deductamt.$input.css("text-align","right");
//        frm.fields_dict.invoicebalanceamt.$input.css("text-align","right");
//        frm.fields_dict.no.$input.css("text-align","right");
//    }, 
    
// onload(frm) {
//      if (!frm.doc.receiptno) {
//             generateNumber(frm);
// }
// },

//  reference(frm) {
//         var reference = frm.doc.reference;
//         console.log("Reference:", reference);
//           frm.set_value('client',''),
//           frm.set_value('policyno','')
//          frm.toggle_display(['depositamt', 'totaldeduction', 'deduct_from_deposit','depositbalance','invoiceno','payments','deductamt','invoicebalanceamt'], true);
         
//         if (reference == 'Adavnce Premium') {
            
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Advance Premium',
//                     filters: {
//                         workflow_state: "Approved"
//                     },
//                     fields: ['policy_holder']
//                 },
//                 callback: function(response) {
//                     console.log("Advance Premium response:", response); // Log API response for debugging
//                     let DataArray = response.message || [];
//                     let FinalArray = DataArray.map(x => x.policy_holder);
//                     frm.set_df_property('client', 'options', FinalArray);
//                     console.log("Final client options:", FinalArray);
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching Advance Premium:", textStatus, errorThrown);
//                 }
//             });
//               frm.toggle_display(['depositamt', 'totaldeduction', 'deduct_from_deposit','depositbalance','invoiceno','payments','deductamt','invoicebalanceamt'], false);
//         } 
//         else if (reference == 'Invoice') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'CI Invoices',
//                     filters: {
//                         // Adjust filters as needed based on how you want to fetch client details from CI Invoices
//                     },
//                     fields: ['policy_holder']
//                 },
//                 callback: function(response) {
//                     console.log("CI Invoices response:", response); // Log API response for debugging
//                     let DataArray = response.message || [];
//                     let FinalArray = DataArray.map(x => x.policy_holder);
//                     frm.set_df_property('client', 'options', FinalArray);
//                     console.log("Final client options:", FinalArray);
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching CI Invoices:", textStatus, errorThrown);
//                 }
//             });
//         }
//         else if (reference == 'PrePayment') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Bond Invoice',
//                     filters: {
//                         // Adjust filters as needed based on how you want to fetch client details from CI Invoices
//                     },
//                     fields: ['facility_name']
//                 },
//                 callback: function(response) {
//                     console.log("Bond Invoices response:", response); // Log API response for debugging
//                     let DataArray = response.message || [];
//                     let FinalArray = DataArray.map(x => x.facility_name);
//                     frm.set_df_property('client', 'options', FinalArray);
//                     console.log("Final client options:", FinalArray);
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching CI Invoices:", textStatus, errorThrown);
//                 }
//             });
//              frm.toggle_display(['depositamt', 'totaldeduction', 'deduct_from_deposit','depositbalance','invoiceno','payments','deductamt','invoicebalanceamt'], false);
//         }
//         else if (reference == 'Premium Deposite') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Bond Invoice',
//                     filters: {
//                         // Adjust filters as needed based on how you want to fetch client details from CI Invoices
//                     },
//                     fields: ['facility_name']
//                 },
//                 callback: function(response) {
//                     console.log("Bond Invoice response:", response); // Log API response for debugging
//                     let DataArray = response.message || [];
//                     let FinalArray = DataArray.map(x => x.facility_name);
//                     frm.set_df_property('client', 'options', FinalArray);
//                     console.log("Final client options:", FinalArray);
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching CI Invoices:", textStatus, errorThrown);
//                 }
//             });
//              frm.toggle_display(['depositamt', 'totaldeduction', 'deduct_from_deposit','depositbalance','invoiceno','payments','deductamt','invoicebalanceamt'], false);
//         }
//     },
    
//    client(frm) {
//     var client = frm.doc.client;
//     if (client) {
//         if (frm.doc.reference === 'Adavnce Premium') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Advance Premium',
//                     filters: {
//                         "policy_holder": client
//                     },
//                     fields: ['policy_no']
//                 },
//                 callback: function(response) {
//                     var data = response.message[0];
//                     if (data) {
//                         frm.set_value('policyno', data.policy_no);
//                     }
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching Advance Premium:", textStatus, errorThrown);
//                 }
//             });
//         } 
        
//         else if (frm.doc.reference === 'Invoice') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'CI Invoices',
//                     filters: {
//                         "policy_holder": client
//                     },
//                     fields: ['invoice_no']
//                 },
//                 callback: function(response) {
//                     var data = response.message[0];
//                     if (data) {
//                         frm.set_value('policyno', data.invoice_no);
//                         frm.set_value('invoiceno', data.invoice_no);
//                     }
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching CI Invoices:", textStatus, errorThrown);
//                 }
//             });
//         }
        
//          else if (frm.doc.reference === 'PrePayment') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Bond Invoice',
//                     filters: {
//                         "facility_name": client
//                     },
//                     fields: ['bond_no']
//                 },
//                 callback: function(response) {
//                     var data = response.message[0];
//                     if (data) {
//                         frm.set_value('policyno', data.bond_no);
//                     }
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching CI Invoices:", textStatus, errorThrown);
//                 }
//             });
//         }

//          else if (frm.doc.reference === 'Premium Deposite') {
//             frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Bond Invoice',
//                     filters: {
//                         "facility_name": client
//                     },
//                     fields: ['bond_no']
//                 },
//                 callback: function(response) {
//                     var data = response.message[0];
//                     if (data) {
//                         frm.set_value('policyno', data.bond_no);
//                     }
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching CI Invoices:", textStatus, errorThrown);
//                 }
//             });
//         }
//     }
// }

// });

