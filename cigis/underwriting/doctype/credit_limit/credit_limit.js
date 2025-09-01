// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Credit Limit', {
    
//     refresh: function(frm){
//         $(frm.fields_dict['credit_limit'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
 
//        // Apply CSS to hide the Edit button
//          var css = `.btn-open-row {display: none !important;}`;
 
//         $('<style>' + css + '</style>').appendTo('head');
        
//        frm.set_df_property('credit_limit','cannot_add_rows', true);

//     frappe.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "Credit Limit Processing",
//                 // filters: {
//                 //     // Add filter to match names with the current form
//                 //     // name1: frm.doc.name1
//                 // },
//                 fields: ["credit_limit_no", "policy_holder_name", "buyer_name","approved_amount","approved_date"]
//             },
//             callback: function (r) {
//                 if (!r.exc) {
//                     console.log(r.message, "hi");
 
//                     var data = r.message;
 
//                     frm.clear_table('credit_limit');
 
//                     for (let x of data) {
//                         var child = frappe.model.add_child(frm.doc, "CreditLimitDisplaychild", "credit_limit","date");
//                         console.log(child, "s")
 
//                         frappe.model.set_value(child.doctype, child.name, "creditlimitno", x.credit_limit_no);
//                         frappe.model.set_value(child.doctype, child.name, "policyholder", x.policy_holder_name);
//                         frappe.model.set_value(child.doctype, child.name, "buyer", x.buyer_name);
//                         frappe.model.set_value(child.doctype, child.name, "creditlimitamount", x.approved_amount);
//                        frappe.model.set_value(child.doctype, child.name, "approvedon", x.approved_date);
                       
//                     }
//                     frm.refresh_fields('credit_limit');
//                     console.log(data);
//                 } else {
//                     console.error(r.exc);
//                 }
//             }
//         });
//     }
// });