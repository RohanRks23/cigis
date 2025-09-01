// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt


// frappe.ui.form.on('Bond Facility Quotation Acceptance', {
//     onload: function (frm) {
//         console.log('hello onload')
//           frm.fields_dict['name1'].get_query = function(doc) {
//             return {
//                 filters: {
//                     "Workflow_state": "Approved",
                   
//                 }
//             };
//         };
//      },
     
//       name1(frm) {
//             let name1 = frm.doc.name1;
//             if (name1) {
//               console.log("hi")
                       
//                         frappe.call({
//                             method: 'frappe.client.get_list',
//                             args: {
//                                 doctype: 'Bond Facility Quotation', 
//                                 filters: { 'name1': name1 },
//                                 fields: ['name1', 'quotation_no', 'bond_facility_no', 'quotation_authorized_by','bond_facility_limit1','bond_facility_limit2','bond_facility_limit3','bond_facility_limit4','net_bond_facility',
//                                 'security_percentage_for_limit_1','security_percentage_for_limit_2','security_percentage_for_limit_3','security_percentage_for_limit_4','security_percentage_for_limit_5','c1','c2','c3','c4','c5','note1','note2','note3','note4','note5'],
//                             },
//                             callback: function(response) {
//                                 console.log(response,"response")
//                                 let details = response.message[0];

//                                 console.log(details,"hello print all details")
//                                 frm.set_value('name1', details.name1);
//                                 frm.set_value('quotation_no', details.quotation_no);
//                                 frm.set_value('faciity_no', details.bond_facility_no);
//                                 frm.set_value('bond_quotation_is_authorized_by', details.quotation_authorized_by);
//                                 frm.set_value('bond_facility_limit1', details.bond_facility_limit1);
//                                 frm.set_value('bond_facility_limit2', details.bond_facility_limit2);
//                                 frm.set_value('bond_facility_limit3', details.bond_facility_limit3);
//                                 frm.set_value('bond_facility_limit4', details.bond_facility_limit4);
//                                 frm.set_value('net_facility_amount', details.net_bond_facility);
//                                 frm.set_value('currency1', details.c1);
//                                 frm.set_value('currency2', details.c2);
//                                 frm.set_value('currency3', details.c3);
//                                 frm.set_value('currency4', details.c4);
//                                 frm.set_value('currency5', details.c5);
//                                 frm.set_value('security_percentage_for_limit1', details.security_percentage_for_limit_1);
//                                 frm.set_value('security_percentage_for_limit2', details.security_percentage_for_limit_2);
//                                 frm.set_value('security_percentage_for_limit3', details.security_percentage_for_limit_3);
//                                 frm.set_value('security_percentage_for_limit4', details.security_percentage_for_limit_4);
//                                 frm.set_value('security_percentage_for_limit5', details.security_percentage_for_limit_5);
                                
                
//                             }
//                         });
//             }
        
        
//          frappe.call({
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
    
// refresh: function(frm) {
//         frm.fields_dict.bond_facility_limit1.$input.css("text-align", "right");
//         frm.fields_dict.bond_facility_limit2.$input.css("text-align", "right");
//         frm.fields_dict.bond_facility_limit3.$input.css("text-align", "right");
//         frm.fields_dict.bond_facility_limit4.$input.css("text-align", "right");
//         frm.fields_dict.net_facility_amount.$input.css("text-align", "right");
//         frm.fields_dict.currency1.$input.css("text-align", "right");
//         frm.fields_dict.currency2.$input.css("text-align", "right");
//         frm.fields_dict.currency3.$input.css("text-align", "right");
//         frm.fields_dict.currency4.$input.css("text-align", "right");
//         frm.fields_dict.currency5.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit1.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit2.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit3.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit4.$input.css("text-align", "right");
//         frm.fields_dict.security_percentage_for_limit5.$input.css("text-align", "right");
//         frm.fields_dict.guarantee_fee_percentage.$input.css("text-align", "right");
//         frm.fields_dict.min_fee_guarantee.$input.css("text-align", "right");

//     // Basic logging to verify the script runs
//     console.log("Refresh event triggered");

//     const fields = [
//         'gmapprover_remark', 'quotation_authorized_by', 'section_break_x2nfv',
//         'send_to_recommendation', 'column_break_vi09k',
//         'send_to', 'column_break_lg95e', 'send_to_recommendation',
//         'column_break_pwves', 'include_marketing_as_mail_recipient', 
//         // 'decline',
//         // 'column_break_n6qwn', 'approved', 'column_break_emazr',
//         // 'update', 'column_break_teue7', 'cancel'
//     ];

//     // Ensure the document has a workflow_state before proceeding
//     if (!frm.doc.workflow_state) {
//         console.log("No workflow_state found");
//         return;
//     }

//     // Log current workflow state for debugging
//     console.log("Current workflow state:", frm.doc.workflow_state);

//     // Show fields based on workflow_state
//     if (['Pending', 'Reject', 'Declined', 'Approved'].includes(frm.doc.workflow_state)) {
//         console.log(`Showing fields for ${frm.doc.workflow_state} state`);
//         fields.forEach(field => {
//             frm.toggle_display(field, true);
//             console.log("Showing field:", field);
//         });
//     } else {
//         // Hide fields for other states
//         console.log("Hiding fields for states other than Pending, Reject, Declined, and Approved");
//         fields.forEach(field => {
//             frm.toggle_display(field, false);
//             console.log("Hiding field:", field);
//         });
//     }
//         // Set the created_date if it's not already set
//         setCreatedDate(frm);
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

// }


