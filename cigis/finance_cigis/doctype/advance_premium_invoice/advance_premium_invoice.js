// // Copyright (c) 2024, SAiS and contributors
// // For license information, please see license.txt

// frappe.ui.form.on('Advance Premium Invoice', {
//     onload: function(frm) {
//        frm.set_df_property('advance_premium_invoice_table','cannot_add_rows', true);

//         // Fetch approved policy holders from Advance Premium
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Advance Premium',
//                 filters: {
//                     workflow_state: 'Approved'
//                 },
//                 fields: ['policy_holder', 'estimated_premium', 'premium_rate', 'total_amount', 'policy_no', 'estimated_turnover_for_year', 'vat', 'payment_month_and_year', 'year', 'noof_months_for_the_purpose', 'payment_type', 'quartely_premium_value', 'comments', 'monthly_premium_value', 'half_yearly_premium_value', 'yearly_premium_value']
//             },
//             callback: function(response) {
//                 if (response.message) {
//                     var approvedPolicyHolders = response.message.map(function(AdvancePremium) {
//                         return AdvancePremium.policy_holder;
//                     });
//                     frm.set_df_property('policy_holder', 'options', approvedPolicyHolders);
//                 }
//             }
//         });

//         if (frm.doc.__islocal) {
//             fetchAndFilterPolicyHolders(frm);
//         }

//         // Add a custom button to add rows to the first column
//     },

//     policy_holder: function(frm) {
//         var policyHolder = frm.doc.policy_holder;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Advance Premium',
//                 filters: {
//                     policy_holder: policyHolder,
//                     workflow_state: 'Approved'
//                 },
//                 fields: ['policy_holder','advance_premium', 'estimated_premium', 'premium_rate', 'total_amount', 'policy_no', 'estimated_turnover_for_year', 'vat', 'payment_month_and_year', 'year', 'noof_months_for_the_purpose', 'payment_type', 'quartely_premium_value', 'comments', 'monthly_premium_value', 'half_yearly_premium_value', 'yearly_premium_value']
//             },
//             callback: function(response) {
//                 if (response.message && response.message.length > 0) {
//                     var data_from_AdvancePremium = response.message[0];

//                     // Populate fields if data is found
//                     frm.set_value('premium_amount', data_from_AdvancePremium.estimated_premium || '');
//                     frm.set_value('premium_rate', data_from_AdvancePremium.premium_rate || '');
//                     frm.set_value('total_amount', data_from_AdvancePremium.advance_premium || '');
//                     frm.set_value('invoice_amount_without_vat', data_from_AdvancePremium.total_amount || '');
//                     frm.set_value('policy_no', data_from_AdvancePremium.policy_no || '');
//                     frm.set_value('estimated_turnover_for_year', data_from_AdvancePremium.estimated_turnover_for_year || '');
//                     frm.set_value('vat', data_from_AdvancePremium.vat || '');
//                     frm.set_value('payment_month', data_from_AdvancePremium.payment_month_and_year || '');
//                     frm.set_value('payment_year', data_from_AdvancePremium.year || '');
//                     frm.set_value('no_of_months_for_the_purpose', data_from_AdvancePremium.noof_months_for_the_purpose || '');
//                     frm.set_value('payment_type', data_from_AdvancePremium.payment_type || '');
//                     frm.set_value('quarterly_premium_value', data_from_AdvancePremium.quartely_premium_value || '');
//                     frm.set_value('comments', data_from_AdvancePremium.comments || '');
//                     frm.set_value('monthly_premium_value', data_from_AdvancePremium.monthly_premium_value || '');
//                     frm.set_value('half_yearly_premium_value', data_from_AdvancePremium.half_yearly_premium_value || '');
//                     frm.set_value('yearly_premium_value', data_from_AdvancePremium.yearly_premium_value || '');

//                     // Calculate the invoice amount
//                     var invoice_amount_without_vat = data_from_AdvancePremium.total_amount || 0;
//                     var vat = data_from_AdvancePremium.vat || 0;
//                     var invoice_amount = parseFloat(invoice_amount_without_vat) + (parseFloat(invoice_amount_without_vat) * parseFloat(vat) / 100);
//                     frm.set_value('invoice_amount', invoice_amount);

//                     // Refresh the form after setting values
//                     frm.refresh();
//                 }
//             },
//         });
//     },

//     payment_type: function(frm) {
//         var paymentType = frm.doc.payment_type;

//         // Function to show or hide fields based on payment type
//         showHideFieldsBasedOnPaymentType(frm, paymentType);
//     },
    
    
//     policy_no: function(frm){
// 		 frappe.call({
//             method: "frappe.client.get",
//             args: {
//                 doctype: "Advance Premium",
//                 filters: {
//                      policy_holder: frm.doc.policy_holder
//                 },
//                 fields: ["child_table"]
//             },
//             callback: function (r) {

//                 if (!r.exc) {
//                     var data = r.message.child_table;

//                     // Clear the child table before adding new rows
//                     frm.clear_table('advance_premium_invoice_table');

//                     for (let x of data) {
//                         var child = frappe.model.add_child(frm.doc, "Advance premium Invoice Child", "advance_premium_invoice_table");
//                         frappe.model.set_value(child.doctype, child.name, "description", x.description);
//                         frappe.model.set_value(child.doctype, child.name, "quantity", x.qty);
//                         frappe.model.set_value(child.doctype, child.name, "price", x.price);
//                         frappe.model.set_value(child.doctype, child.name, "amount", x.amount);
                        
//                         // Add more fields as needed
//                     }

//                     frm.refresh_fields('advance_premium_invoice_table');
//                     console.log(data);
//                 } else {
//                     console.error("Error occurred in Advance Premium  data:", r.exc);
//                 }
//             }
//         });
		
// 	}

    
// });

// // Function to show or hide fields based on payment type
// function showHideFieldsBasedOnPaymentType(frm, paymentType) {
//     if (paymentType === 'Monthly') {
//         // Show fields relevant to monthly payment
//         frm.toggle_display(['monthly_premium_value'], true);
//         frm.toggle_display(['quarterly_premium_value', 'half_yearly_premium_value', 'yearly_premium_value'], false);
//     } else if (paymentType === 'Quarterly') {
//         // Show fields relevant to quarterly payment
//         frm.toggle_display(['quarterly_premium_value'], true);
//         frm.toggle_display(['monthly_premium_value', 'half_yearly_premium_value', 'yearly_premium_value'], false);
//     } else if (paymentType === 'Half Yearly') {
//         // Show fields relevant to half yearly payment
//         frm.toggle_display(['half_yearly_premium_value'], true);
//         frm.toggle_display(['monthly_premium_value', 'quarterly_premium_value', 'yearly_premium_value'], false);
//     } else if (paymentType === 'Yearly') {
//         // Show fields relevant to yearly payment
//         frm.toggle_display(['yearly_premium_value'], true);
//         frm.toggle_display(['monthly_premium_value', 'quarterly_premium_value', 'half_yearly_premium_value'], false);
//     } else {
//         // Hide all fields if payment type is not recognized
//         frm.toggle_display(['monthly_premium_value', 'quarterly_premium_value', 'half_yearly_premium_value', 'yearly_premium_value'], false);
//     }
// }

// function fetchAndFilterPolicyHolders(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Advance Premium Invoice',
//             filters: {
//                 workflow_state: 'Approved'
//             },
//             fields: ['policy_holder']
//         },
//         callback: function(response) {
//             if (response && response.message) {
//                 var approvedPolicyHolders = response.message.map(function(holder) {
//                     return holder.policy_holder;
//                 });

//                 var policyHolderField = frm.fields_dict['policy_holder'];

//                 if (policyHolderField) {
//                     policyHolderField.df.options = policyHolderField.df.options.filter(function(policyHolder) {
//                         return approvedPolicyHolders.indexOf(policyHolder) === -1;
//                     });
//                     policyHolderField.refresh();
//                 }
//             } else {
//                 console.error('Error fetching approved policy holders from Advance Premium.');
//             }
//         },
//         error: function(xhr, textStatus, errorThrown) {
//             console.error('Error:', errorThrown);
//         }
//     });
// }

