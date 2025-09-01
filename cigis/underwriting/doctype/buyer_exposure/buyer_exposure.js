// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Buyer Exposure', {
//     refresh: function(frm) {   
//         frm.set_df_property('respective_policies_and_credit_limits', 'cannot_add_rows', true); 
//          frm.set_df_property('respective_bond_details','cannot_add_rows', true); 
//     $(frm.fields_dict['respective_policies_and_credit_limits'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
//         $(frm.fields_dict['respective_bond_details'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);

//         // Apply CSS to hide the Edit button
//         var css = `
//             .btn-open-row {
//                 display: none !important;
//             }
//         `;
//         $('<style>' + css + '</style>').appendTo('head');
//     },
 
//     search(frm) {
//         frm.trigger('onload');
//     },
     
//         onload: function(frm) {
//         var buyer = frm.doc.buyer;
//         var bondholder = frm.doc.bond_holder;

//         // Clear existing data in Bond Details Child table
//         frm.clear_table('respective_bond_details');

//         // Fetch data for Bond Details Child
//         frm.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "Bond Application",
//                 filters: {
//                     facility_name: bondholder
//                 },
//                 fields: ["bond_no", "bond_in_favour", "facility_name", "amount_in_pula", "period_from", "to"]
//             },
//             callback: function(r) {
//                 console.log(r, "hello");
//                 var bondData = r.message;
//                 for (let x of bondData) {
//                     var child = frappe.model.add_child(frm.doc, "Buyer Exposure Bond Details Child", "respective_bond_details");

//                     frappe.model.set_value(child.doctype, child.name, "bond_no", x.bond_no);
//                     frappe.model.set_value(child.doctype, child.name, "principal", x.bond_in_favour);
//                     frappe.model.set_value(child.doctype, child.name, "bond_holder", x.facility_name);
//                     frappe.model.set_value(child.doctype, child.name, "bond_value", x.amount_in_pula);
//                     frappe.model.set_value(child.doctype, child.name, "period_from", x.period_from);
//                     frappe.model.set_value(child.doctype, child.name, "period_to", x.to);
//                 }

//                 frm.refresh_field("respective_bond_details");
//             }
//         });

//         // Clear existing data in Credit Limits Child table
//         frm.clear_table('respective_policies_and_credit_limits');

//         // Fetch data for Credit Limits Child
//       frm.call({
//     method: "frappe.client.get_list",
//     args: {
//         doctype: "Credit Limit Processing",
//         filters: {
//             buyer_name: buyer
//         },
//         fields: ["policy_no", "policy_holder_name", "buyer_name", "approved_amount", "cl_review_date", "workflow_state"] // Added "workflow_state" here
//     },
//     callback: function(r) {
//         console.log(r, "hello");
//         var creditData = r.message;
//         for (let x of creditData) {
//             var child = frappe.model.add_child(frm.doc, "Buyer Exposure Credit Limits Child", "respective_policies_and_credit_limits");

//             frappe.model.set_value(child.doctype, child.name, "policy_no", x.policy_no);
//             frappe.model.set_value(child.doctype, child.name, "policy_holder", x.policy_holder_name);
//             frappe.model.set_value(child.doctype, child.name, "buyer", x.buyer_name);
//             frappe.model.set_value(child.doctype, child.name, "credit_limit_approved", x.approved_amount);
//             frappe.model.set_value(child.doctype, child.name, "cl_approved_date", x.cl_review_date);
//             frappe.model.set_value(child.doctype, child.name, "status", x.workflow_state); // Setting the workflow_state here
//         }

//         frm.refresh_field("respective_policies_and_credit_limits");
//     }
// });


//         frm.refresh();
//     }
// });


