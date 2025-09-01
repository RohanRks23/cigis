// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Policy Reviews History', {
// 	refresh(frm) {
//   frm.fields_dict.generate_report.$input.addClass('btn-primary');
//   frm.fields_dict.display_result.$input.addClass('btn-primary');
//    frm.fields_dict.clear.$input.addClass('btn-primary');
	 
// },
// display_result: function(frm) {
// 	let query = {};

// 	if (frm.doc.policy_holder) {
// 		query.policy_holder = frm.doc.policy_holder;
// 	}

// 	// Call to fetch data
// 	frappe.call({
// 		method: "frappe.client.get_list",
// 		args: {
// 			doctype: "Policy Reviews",
// 			filters: query,
// 			fields: ["policy_no", "policy_holder","premium_rate1","inception_date"]//, "date_of_review", "review_notes"]
// 		},
// 		callback: function(r) {
		  
// 			if (r.message) {
// 				frm.clear_table("result");
// 				frm.refresh_field('result');
// 				var data = r.message; 
// 				console.log(data,"response")
				
// 				for (let x of data) {
// 					var child = frappe.model.add_child(frm.doc, "result");
// 					console.log(child,"child table data")
// 					frappe.model.set_value(child.doctype, child.name, "policy_no", x.policy_no);
// 					frappe.model.set_value(child.doctype, child.name, "policy_holder", x.policy_holder);
// 					frappe.model.set_value(child.doctype, child.name, "premium", x.premium_rate1);
// 					frappe.model.set_value(child.doctype, child.name, "date", x.inception_date);
// 				}
// 				frm.refresh_fields("result");
// 			}
// 		}
// 	});
// 	frappe.validated = false;
// },

// clear: function(frm) {
// 	frm.set_value("policy_holder", "");
// 	frm.enable_save();
// }
// });

