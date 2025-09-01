// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('List Of Quotations', {
//     display_result(frm) {
//         let query = {};

//         // Call to fetch data
//         frm.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "DCIQuotation",
//                 filters: query,
//                 fields: ["schedule_no", "inception_date", "proposal_no", "client_name", "maximum_liability", "premium_rate"]
//             },
//             callback: function(r) {
//                 console.log(r, "hello");
//                 frm.doc.result = [];
//                 frm.refresh_field('result');
//                 var data = r.message;
//                 for (let x of data) {
//                     var child = frappe.model.add_child(frm.doc, "Result", "result");
//                     console.log(child, "s")
//                     // Add a new row to the "Search_Results" child table
//                     frappe.model.set_value(child.doctype, child.name, "qutn_no", x.schedule_no);
//                     frappe.model.set_value(child.doctype, child.name, "prop_no", x.proposal_no);
//                     frappe.model.set_value(child.doctype, child.name, "client", x.client_name);
//                     frappe.model.set_value(child.doctype, child.name, "date", x.inception_date);
//                     frappe.model.set_value(child.doctype, child.name, "maximum_polictical_liability", x.maximum_liability);
//                     frappe.model.set_value(child.doctype, child.name, "prem_rate", x.premium_rate);
//                     frappe.model.set_value(child.doctype, child.name, "prop_date", x.inception_date);
//                 }
//                 // Refresh the form to display the updated child table
//                 frm.refresh_fields('result');
//                 console.log(data); // Corrected variable name
//             }
//         });
//     },

//     refresh(frm) {
//         frm.fields_dict.display_result.$input.addClass('btn-primary');
//                 frm.fields_dict.generate_report.$input.addClass('btn-primary');

//     }
// });










// frappe.ui.form.on('List Of Quotations', {
//     display_result(frm) {
//         let query = {};

//         // Call to fetch data
//         frm.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "DCIQuotation",
//                 filters: query,
//                 fields: ["schedule_no", "inception_date", "proposal_no", "client_name", "maximum_liability", "premium_rate"]
//             },
//             callback: function(r) {
//                 console.log(r, "hello");
//                 frm.doc.result = [];
//                 frm.refresh_field('result');
//                 var data = r.message;
//                 for (let x of data) {
//                     var child = frappe.model.add_child(frm.doc, "Result", "result");
//                     console.log(child, "s")
//                     // Add a new row to the "Search_Results" child table
//                     frappe.model.set_value(child.doctype, child.name, "qutn_no", x.schedule_no);
//                     frappe.model.set_value(child.doctype, child.name, "prop_no", x.proposal_no);
//                     frappe.model.set_value(child.doctype, child.name, "client", x.client_name);
//                     frappe.model.set_value(child.doctype, child.name, "date", x.inception_date);
//                     frappe.model.set_value(child.doctype, child.name, "maximum_polictical_liability", x.maximum_liability);
//                     frappe.model.set_value(child.doctype, child.name, "prem_rate", x.premium_rate);
//                     frappe.model.set_value(child.doctype, child.name, "prop_date", x.inception_date);
//                 }
//                 // Refresh the form to display the updated child table
//                 frm.refresh_fields('result');
//                 console.log(data); // Corrected variable name
//             }
//         });
//     },

//     generate_report(frm) {
//         // Print the report after generating the data
//         frm.save()
//         setTimeout(function() {
//                     frm.print_doc();
//                 }, 5000); // Example delay of 2000 milliseconds (2 seconds)
//     },

//     refresh(frm) {
//         frm.fields_dict.display_result.$input.addClass('btn-primary');
//         frm.fields_dict.generate_report.$input.addClass('btn-primary');
//     }
// });

