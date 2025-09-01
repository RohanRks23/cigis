// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Guide to the _Administration of the policy', {
    refresh:function(frm){
        frm.set_df_property('table','cannot_add_rows', true);
        $(frm.fields_dict['table'].grid.wrapper).find('.btn-grid-delete-row').prop('disabled', true);
 
// Apply CSS to hide the Edit button
var css = `.btn-open-row {
display: none !important;
}
`;
 
$('<style>' + css + '</style>').appendTo('head');
    },
onload:function(frm) {
        // Call to fetch data
        frm.call({
            method: "frappe.client.get_list",
            args: {
                doctype: "Guide_Store_Data",
                fields: ["period_overdue_days", "action_to_be_taken"]
            },
            callback: function (r) {
                console.log(r, "hello");
                frm.doc.table = [];
                var data = r.message;
                for (let x of data) {
                    var child = frappe.model.add_child(frm.doc, "Guide_Child_Table", "table");
                    console.log(child, "s");

                    // Add a new row to the "table" child table
                    frappe.model.set_value(child.doctype, child.name, "period_overdue_days", x.period_overdue_days);
                    frappe.model.set_value(child.doctype, child.name, "action_to_be_taken", x.action_to_be_taken);
                }

                // Refresh the form to display the updated child table
                frm.refresh_field('table');

                console.log(data); // Corrected variable name
            }
        });
    }
});
	
