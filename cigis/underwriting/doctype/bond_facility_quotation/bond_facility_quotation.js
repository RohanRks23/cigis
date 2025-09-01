// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Bond Facility Quotation', {
//     onload: function(frm) {
//         if (!frm.doc.quotation_no) {
//             generateNumber(frm);
//         }

//         // Set created_date field as read-only initially when creating a new form
//         if (frm.doc.__islocal) {
//             frm.set_df_property('created_date', 'read_only', true);
//         }

//         console.log('hello onload');

//         frm.fields_dict['name1'].get_query = function(doc) {
//             return {
//                 filters: {
//                     "workflow_state": "Approved"
//                 }
//             };
//         };

//         frappe.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "User",
//                 filters: {
//                     enabled: 1
//                 },
//                 fields: ["name", "full_name"]
//             },
//             callback: function(r) {
//                 if (r.message) {
//                     console.log("GM Approvers: ", r.message);

//                     let gm_approvers = r.message;
//                     let options = gm_approvers.map(approver => {
//                         return {'label': approver.full_name, 'value': approver.name};
//                     });

//                     console.log("Options: ", options);

//                     // Add options to the send_to field
//                     frm.set_df_property('send_to', 'options', options);
//                     frm.refresh_field('send_to');
//                 } else {
//                     console.log("No GM Approvers found");
//                 }
//             },
//             error: function(err) {
//                 console.log("Error: ", err);
//             }
//         });
//     },
//  name1: function(frm) {
//         if (frm.doc.name1) {
//             frappe.call({
//                 method: 'frappe.client.get_value',
//                 args: {
//                     doctype: 'Bond Facility',
//                     filters: { 'client_name': frm.doc.name1 },
//                     fieldname: ['facility_no', 'client_name', 'workflow_state']
//                 },
//                 callback: function(r) {
//                     if (r.message && r.message.client_name) {
//                         frm.set_value('bond_facility_no', r.message.facility_no);
//                         frm.set_value('quotation_status', r.message.workflow_state);
//                     }
//                 }
//             });
//         }
//     },


//     refresh: function(frm) {
//         frm.fields_dict.bond_facility_limit1.$input.css("text-align", "right");
//         frm.fields_dict.bond_facility_limit2.$input.css("text-align", "right");
//         frm.fields_dict.bond_facility_limit3.$input.css("text-align", "right");
//         frm.fields_dict.bond_facility_limit4.$input.css("text-align", "right");
//         frm.fields_dict.net_bond_facility.$input.css("text-align", "right");
//         frm.fields_dict.c1.$input.css("text-align", "right");
//         frm.fields_dict.c2.$input.css("text-align", "right");
//         frm.fields_dict.c3.$input.css("text-align", "right");
//         frm.fields_dict.c4.$input.css("text-align", "right");
//         frm.fields_dict.c5.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit_1.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit_2.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit_3.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit_4.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit_5.$input.css("text-align", "right");
//         frm.fields_dict.guarantee_fee_percentage.$input.css("text-align", "right");
//         frm.fields_dict.min_fee_guarantee.$input.css("text-align", "right");

//         // Basic logging to verify the script runs
//         console.log("Refresh event triggered");

//         const fields = [
//             'gmapprover_remark', 'quotation_authorized_by', 'section_break_x2nfv',
//             'send_to_recommendation', 'column_break_vi09k',
//             'send_to', 'column_break_lg95e', 'send_to_recommendation',
//             'column_break_pwves', 'include_marketing_as_mail_recipient'
//         ];

//         // Ensure the document has a workflow_state before proceeding
//         if (!frm.doc.workflow_state) {
//             console.log("No workflow_state found");
//             return;
//         }

//         // Log current workflow state for debugging
//         console.log("Current workflow state:", frm.doc.workflow_state);

//         // Show fields based on workflow_state
//         if (['Pending', 'Reject', 'Declined', 'Approved'].includes(frm.doc.workflow_state)) {
//             console.log(`Showing fields for ${frm.doc.workflow_state} state`);
//             fields.forEach(field => {
//                 frm.toggle_display(field, true);
//                 console.log("Showing field:", field);
//             });
//         } else {
//             // Hide fields for other states
//             console.log("Hiding fields for states other than Pending, Reject, Declined, and Approved");
//             fields.forEach(field => {
//                 frm.toggle_display(field, false);
//                 console.log("Hiding field:", field);
//             });
//         }
//     },

//     max_period_year: function(frm) {
//         let value = frm.doc.max_period_year;
//         let $field = frm.fields_dict.max_period_year.$wrapper.find('input');

//         if (value && value.toString().length > 2) {
//             $field.css('border', '2px solid red');
//         } else {
//             $field.css('border', ''); // Reset the border if the condition is not met
//         }
//     },

//     before_save: function(frm) {
//         // Set created_date if it's not already set
//         setCreatedDate(frm);
//     }
// });

// // Define a function to set the created_date field
// function setCreatedDate(frm) {
//     if (!frm.doc.created_date) {
//         frm.set_value('created_date', frappe.datetime.now_datetime());
//     }

//     // Enable the created_date field after saving the record
//     frm.set_df_property('created_date', 'read_only', false);
// }

// // Define generateNumber function outside the frappe.ui.form.on calls
// function generateNumber(frm) {
//     if (!frm.doc.quotation_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `BQT/${currentYear}/`;
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Facility Quotation',
//                 fields: ['quotation_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 console.log(r, "quotation no");
//                 if (r.message && r.message.length > 0) {
//                     let lastQuotationNo = r.message[0].quotation_no;
//                     let lastNumber = parseInt(lastQuotationNo.split("/").pop());
//                     if (!isNaN(lastNumber)) {
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('quotation_no', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('quotation_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }
