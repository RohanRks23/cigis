// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Tax Invoice For CI Invoice', {
//     refresh: function(frm) {
        
// frm.fields_dict.declaration_amount.$input.css("text-align", "right");

// frm.fields_dict.rate.$input.css("text-align", "right");

// frm.fields_dict.premium.$input.css("text-align", "right");



//         frm.set_df_property('tax_child', 'cannot_add_rows', true); 
//           frm.fields_dict['g'].$wrapper.find('input').css("text-align", "right");
//             frm.fields_dict['sub_total'].$wrapper.find('input').css("text-align", "right");
//                         frm.fields_dict['currency9'].$wrapper.find('input').css("text-align", "right");


//         frappe.call({
//             method: "frappe.client.get",
//             args: {
//                 doctype: "CI Invoices",
//                 filters: {
//                     month: frm.doc.month
//                 },
//                 fields: ["export_invoice"]
//             },
//             callback: function(r) {
//                 console.log(r, "CI Invoicesdata");

//                 if (!r.exc) {
//                     var data = r.message.export_invoice;

//                     // Clear the child table before adding new rows
//                     frm.clear_table('tax_child');

//                     for (let x of data) {
//                         var child = frappe.model.add_child(frm.doc, "Tax invoice child", "tax_child");
//                         frappe.model.set_value(child.doctype, child.name, "description", x.description);
//                         frappe.model.set_value(child.doctype, child.name, "qty", x.qty);
//                         frappe.model.set_value(child.doctype, child.name, "price", x.price);
//                         frappe.model.set_value(child.doctype, child.name, "amount", x.amount);
//                         // Add more fields as needed
//                     }

//                     frm.refresh_fields('tax_child');
//                     console.log(data);

//                     // Calculate the total after adding new rows
//                     calculate_g(frm);
//                 } else {
//                     console.error("Error occurred in DCI Proposals data:", r.exc);
//                 }
//             }
//         });
//     },
//     g: function(frm) {
//         calculateADD(frm);
//     },
//     sub_total: function(frm) {
//         calculateADD(frm);
//     }
// });
 


// frappe.ui.form.on('Tax Invoice Child', {
//     // Trigger the calculation when the amount field in the child table is changed
//     amount: function(frm, cdt, cdn) {
//         calculate_g(frm);
//     }
// });

// function calculate_g(frm) {
//     // Initialize the subtotal
//     let g = 0;

//     // Check if the child table exists and has entries
//     if (frm.doc.tax_child && frm.doc.tax_child.length) {
//         // Loop through each row in the child table
//         frm.doc.tax_child.forEach(function(row) {
//             // Add the amount of the current row to the subtotal if amount is defined and a number
//             if (row.amount) {
//                 g += parseFloat(row.amount);
//             }
//         });
//     }

//     // Log the calculated subtotal to the console for debugging
//     console.log('Calculated g:', g);

//     // Set the calculated subtotal to the g field of the main doctype
//     frm.set_value('g', g);

//     // Refresh the field to show the updated value
//     frm.refresh_field('g');
// }

// function calculateADD(frm) {
//     // Get the values of g and other fields if needed, default to 0 if they are not set
//     var g = frm.doc.g || 0;

//     // Convert to float to ensure numerical calculations
//     g = parseFloat(g);

//     // Calculate the sum (if there are additional fields to be included in the calculation, add them here)
//     var total = g; // Add other fields if necessary

//     // Log the calculated value for debugging
//     console.log("Total g: " + total);

//     // Set the calculated value to the g field
//     frm.set_value('g', total);
// }
// function calculateADD(frm) {
//     let g = frm.doc.g || 0;
//     let sub_total = frm.doc.sub_total || 0;

//     // Ensure g and sub_total are numbers
//     g = parseFloat(g);
//     sub_total = parseFloat(sub_total);

//     let currency9 = g + sub_total;

//     // Set the value of currency9 field
//     frm.set_value('currency9', currency9);
// }
