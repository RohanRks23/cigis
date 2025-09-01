// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Director and Shareholder Exposure', {
//     onload: function(frm) {
//         // Ensure directors_table cannot add rows and delete buttons are disabled
//         frm.set_df_property('directors_table', 'cannot_add_rows', true);
//         $(frm.fields_dict['directors_table'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);

//         // Apply CSS to hide the Edit button
//         var css = `
//             .btn-open-row {
//                 display: none !important;
//             }
//         `;
//         $('<style>' + css + '</style>').appendTo('head');

//         // Fetch and display all records initially
//         frm.trigger('fetch_all_records');

//         // Add event listener for changes in director_shareholder field
//         frm.fields_dict['director_shareholder'].df.onchange = () => {
//             if (!frm.doc.director_shareholder) {
//                 // If the director field is cleared, fetch and display all records
//                 frm.trigger('fetch_all_records');
//             }
//         };
//     },

//     fetch_all_records: function(frm) {
//         if (!frm.doc.buyer_name) {
//             // Fetch all data for Buyer doctype
//             frappe.db.get_list('Buyer', {
//                 fields: ['buyer_name', 'director_1', 'director_2', 'director_3', 'director_4']
//             }).then(function(r) {
//                 if (r && r.length > 0) {
//                     var buyerData = r;

//                     // Clear existing data in the Directors Table
//                     frm.clear_table('directors_table');

//                     // Loop through all data and add to the child table
//                     for (let x of buyerData) {
//                         var child = frappe.model.add_child(frm.doc, "Director and Shareholder Exposure childtable", "directors_table");

//                         // Set values for each row in the child table
//                         frappe.model.set_value(child.doctype, child.name, "company", x.buyer_name);
//                         frappe.model.set_value(child.doctype, child.name, "director_1", x.director_1);
//                         frappe.model.set_value(child.doctype, child.name, "director_2", x.director_2);
//                         frappe.model.set_value(child.doctype, child.name, "director_3", x.director_3);
//                         frappe.model.set_value(child.doctype, child.name, "director_4", x.director_4);
//                     }
//                     frm.refresh_field("directors_table");
//                 } else {
//                     frappe.msgprint(__('No data found.'));
//                 }
//             }).catch(function(err) {
//                 frappe.msgprint(__('Error fetching data: ') + err.message);
//             });
//         } else {
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Buyer',
//                     filters: {
//                         buyer_name: frm.doc.buyer_name
//                     },
//                     fields: ['buyer_name', 'director_1', 'director_2', 'director_3', 'director_4']
//                 },
//                 callback: function(r) {
//                     console.log(r, "r");
//                     if (r.message && r.message.length > 0) {
//                         // Clear existing data in the Directors Table
//                         frm.clear_table('directors_table');

//                         // Loop through all data and add to the child table
//                         for (let x of r.message) {
//                             var child = frappe.model.add_child(frm.doc, "Director and Shareholder Exposure childtable", "directors_table");

//                             // Set values for each row in the child table
//                             frappe.model.set_value(child.doctype, child.name, "company", x.buyer_name);
//                             frappe.model.set_value(child.doctype, child.name, "director_1", x.director_1);
//                             frappe.model.set_value(child.doctype, child.name, "director_2", x.director_2);
//                             frappe.model.set_value(child.doctype, child.name, "director_3", x.director_3);
//                             frappe.model.set_value(child.doctype, child.name, "director_4", x.director_4);
//                         }
//                         frm.refresh_field("directors_table");
//                     } else {
//                         // Handle case when no buyer is found with the given name
//                         frappe.msgprint(__('No buyer found with the given name.'));
//                     }
//                 }
//             });
//         }
//     },

//     search: function(frm) {
//         var director = frm.doc.director_shareholder;

//         if (!director) {
//             // If the director field is empty, fetch and display all records
//             frm.trigger('fetch_all_records');
//             return;
//         }

//         // Clear existing data in the Directors Table
//         frm.clear_table('directors_table');
//         frm.refresh();

//         // Fetch all data for Buyer doctype
//         frappe.db.get_list('Buyer', {
//             fields: ['buyer_name', 'director_1', 'director_2', 'director_3', 'director_4']
//         }).then(function(r) {
//             if (r && r.length > 0) {
//                 var directorData = r;
//                 var filteredData = [];

//                 // Loop through all data and filter based on director name in any field
//                 for (let x of directorData) {
//                     if (x.buyer_name === director || x.director_1 === director ||
//                         x.director_2 === director || x.director_3 === director ||
//                         x.director_4 === director) {
//                         filteredData.push(x);
//                     }
//                 }

//                 if (filteredData.length > 0) {
//                     for (let x of filteredData) {
//                         var child = frappe.model.add_child(frm.doc, "Director and Shareholder Exposure childtable", "directors_table");

//                         // Set values for each row in the child table
//                         frappe.model.set_value(child.doctype, child.name, "company", x.buyer_name);
//                         frappe.model.set_value(child.doctype, child.name, "director_1", x.director_1);
//                         frappe.model.set_value(child.doctype, child.name, "director_2", x.director_2);
//                         frappe.model.set_value(child.doctype, child.name, "director_3", x.director_3);
//                         frappe.model.set_value(child.doctype, child.name, "director_4", x.director_4);
//                     }
//                     frm.refresh_field("directors_table");
//                 } else {
//                     frappe.msgprint(__('No directors found for the given name.'));
//                 }
//             } else {
//                 frappe.msgprint(__('No data found.'));
//             }
//         }).catch(function(err) {
//             frappe.msgprint(__('Error fetching data: ') + err.message);
//         });
//     }
// });
