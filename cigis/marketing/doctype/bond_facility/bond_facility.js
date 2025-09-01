// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Bond Facility', {
//     refresh: function(frm) {
//         // Ensure that the rejection_letter1 field exists before binding the event
//         // if (frm.fields_dict['rejection_letter1']) {
//         //     frm.fields_dict['rejection_letter1'].$input.on('click', function() {
//         //         frappe.new_doc('Rejection Letter Bond Facility');
//         //     });
//         // }

//         // Add the btn-primary class to the add_new button
        
//         if (frm.fields_dict.add_new) {
//             frm.fields_dict.add_new.$input.addClass('btn-primary');
//             frm.fields_dict.add_new1.$input.addClass('btn-primary');
//             frm.fields_dict.add_new2.$input.addClass('btn-primary');
//             frm.fields_dict.add_new3.$input.addClass('btn-primary');
//             frm.fields_dict.add_new4.$input.addClass('btn-primary');



//         }

//         // Generate a facility number if it does not exist
//         if (!frm.doc.facility_no) {
//             generateNumber(frm);
//         }
//          var workflowState = frm.doc.workflow_state;
         
//          if (workflowState === "Rejected") {
//             frm.add_custom_button(__('Rejection Letter'), function() {
//                 // Set route_options before creating the new document
//                 frappe.route_options = {
//                     facility_no: frm.doc.facility_no,
//                     to: frm.doc.client_name,
//                     registration_no: frm.doc.reg_no,
                    
//                 };

//                 // Create a new 'Rejection_Letter_1' document
//                 frappe.new_doc('Rejection Letter Bond Facility');
//  frappe.model.set_value(frm.doctype, frm.docname, 'created_date', frappe.datetime.now_datetime());
//                 console.log("Rejection Letter clicked!");
//             }).addClass("btn-primary");
//          }

//         frm.set_df_property('shareholders_table', 'cannot_add_rows', true); 
//         frm.set_df_property('company_child', 'cannot_add_rows', true); 
//         frm.set_df_property('current_bond', 'cannot_add_rows', true); 
//         frm.set_df_property('personel_child', 'cannot_add_rows', true); 
//          frm.set_df_property('company_child', 'cannot_add_rows', true); 
             
//         frm.fields_dict.ac_no.$input.css("text-align", "right");
//         frm.fields_dict.overdraft_facility.$input.css("text-align", "right");
//                 frm.fields_dict.overdraft_used.$input.css("text-align", "right");
//                                 frm.fields_dict.required_facility.$input.css("text-align", "right");

//     },


//     // onload: function(frm) {
//     //     frappe.call({
//     //         method: 'frappe.client.get',
//     //         args: {
//     //             doctype: 'DCI Proposals',
//     //             filters: {
//     //                 client_name: frm.doc.client_name
//     //             },
//     //             fields: [
//     //                 'agriculture', 'timber_products', 'steel_merchants', 'steel_doors_window_farmes', '_diaries', 'soda_ash', 
//     //                 'security_services', 'salt', 'road_construction', 'plastic_and_spices', 'pharmaceuticals', 'perishable_goods', 
//     //                 'hair_products', 'gas', 'fuel', 'frozen_chicken', 'airconditioning', 'aluminium_boats', 'fmcg', 'engraving', 
//     //                 'couriers', 'cosmetics', 'corporate_clothing', 'concrete_products', 'computer_electronic', 'cigarettes', 
//     //                 'animal_vaccines', 'arts_crafts', 'batteries', 'building_materials', 'cellular', 'cereals', 'canning_cans', 
//     //                 'heavy_plant', 'invoice_factoring', 'leather_products', 'logistics', 'lubricants__fuel', 'meat_products', 
//     //                 'media_products', 'media__radio', 'merchandise', 'packaging_materials'
//     //             ]
//     //         },
//     //         callback: function(r) {
//     //             console.log(r, "proposal_no1");
//     //             if (!r.exc) {
//     //                 if (r.message) {
//     //                     // Get the list of checked fields from Nature_Of_Business
//     //                     var checkedFields = [];
//     //                     $.each([
//     //                         'aluminium_boats', 'airconditioning', 'heavy_plant', 'invoice_factoring', 'leather_products', 'logistics', 
//     //                         'lubricants__fuel', 'meat_products', 'media_products', 'media__radio', 'merchandise', 'packaging_materials', 
//     //                         'agriculture', 'animal_vaccines', 'arts_crafts', 'batteries', 'building_materials', 'cellular', 'cereals', 
//     //                         'canning_cans', 'fmcg', 'engraving', 'couriers', 'cosmetics', 'corporate_clothing', 'concrete_products', 
//     //                         'computer_electronic', 'cigarettes', 'timber_products', 'steel_merchants', 'steel_doors_window_farmes', 
//     //                         '_diaries', 'soda_ash', 'security_services', 'salt', 'road_construction', 'plastic_and_spices', 
//     //                         'pharmaceuticals', 'perishable_goods', 'hair_products', 'gas', 'fuel', 'frozen_chicken'
//     //                     ], function(index, field) {
//     //                         if (r.message[field]) {
//     //                             checkedFields.push(field);
//     //                         }
//     //                     });

//     //                     // Hide all existing fields in Domestic Credit Insurance Schedule
//     //                     frm.fields.forEach(function(field) {
//     //                         if (field.df.fieldtype === 'Check') {
//     //                             frm.set_df_property(field.df.fieldname, 'hidden', true);
//     //                         }
//     //                     });

//     //                     // Iterate through checked fields and display them
//     //                     checkedFields.forEach(function(field) {
//     //                         frm.set_df_property(field, 'hidden', false);
//     //                     });
//     //                 }

//     //                 // Generate schedule_no directly
//     //                 generateNumber(frm);
//     //             } else {
//     //                 console.error("Error occurred:", r.exc);
//     //             }
//     //         }
//     //     });
               
         
//     // },

//     // rejection_letter1: function(frm) {
//     //     frappe.route_options = {
//     //         facility_no: frm.doc.facility_no,
//     //         to: frm.doc.client_name,
//     //         registration_no: frm.doc.reg_no,
//     //     };
//     //     frappe.new_doc('Rejection Letter Bond Facility');
//     // },

//     // add_new: function(frm) {
//     //     frappe.prompt([
//     //         {'fieldname': 'id_type', 'fieldtype': 'Select', 'options': '\nDRIVING LICENSE\nOMANG\nPASSPORT', 'label': 'ID Type'},
//     //         {'fieldname': 'surname', 'fieldtype': 'Data', 'label': 'Surname'},
//     //         {'fieldname': 'first_name', 'fieldtype': 'Data', 'label': 'First Name'},
//     //         {'fieldname': 'e_mail_id', 'fieldtype': 'Data', 'label': 'E-mail Id'},
//     //         {'fieldname': 'fax_no', 'fieldtype': 'Data', 'label': 'Fax No'},
//     //         {'fieldname': '', 'fieldtype': 'Column Break'},
//     //         {'fieldname': 'id_number', 'fieldtype': 'Data', 'label': 'ID Number'},
//     //         {'fieldname': 'middle_name', 'fieldtype': 'Data', 'label': 'Middle Name'},
//     //         {'fieldname': 'contact_no', 'fieldtype': 'Phone', 'label': 'Contact No'},
//     //         {'fieldname': 'share_held', 'fieldtype': 'Data', 'label': '% Share Held'},
//     //         {'fieldname': 'married_anccop', 'fieldtype': 'Select','options': '\nANC\nCOP ', 'label': 'Married ANC/COP'},
//     //         {'fieldname': 'designation', 'fieldtype': 'Select', 'options': '\nDIRECTOR\nMEMBER\nMANAGER\nOTHERS\nPARTNER\nPROPRIETOR', 'label': 'Designation'}
//     //     ],
//     //     function(values) {
//     //         var data = {
//     //             id_type: values.id_type,
//     //             id_number: values.id_number,
//     //             first_name: values.first_name,
//     //             contact_no: values.contact_no,
//     //             married_anccop: values.married_anccop,
//     //             share_held: values.share_held,
//     //         };
//     //         addDataToChildTable(frm, data);
//     //     }, 'Directors/ShareHolders');
//     // },

//     // add_new1: function(frm) {
//     //     frappe.prompt([
//     //         {'fieldname': 'name1', 'fieldtype': 'Data', 'label': 'Name'},
//     //         {'fieldname': 'registration_number', 'fieldtype': 'Data', 'label': 'Registration Number'},
//     //         {'fieldname': 'share_held', 'fieldtype': 'Data', 'label': '% Shares Held'},
//     //         {'fieldname': 'nature_of_business', 'fieldtype': 'Data', 'label': 'Nature Of Business'},
//     //         {'fieldname': '', 'fieldtype': 'Column Break'},
//     //         {'fieldname': 'bond_required', 'fieldtype': 'Data', 'label': 'Bond Required'},
//     //     ],
//     //     function(values) {
//     //         var data1 = {
//     //             name1: values.name1,
//     //             registration_number: values.registration_number,
//     //             share_held: values.share_held,
//     //             nature_of_business: values.nature_of_business,
//     //             bond_required: values.bond_required,
//     //         };
//     //         addDataToCompanyChildBondFacility(frm, data1);
//     //     }, 'Company');
//     // },
//     //  add_new1: function(frm) {
//     //     frappe.prompt([
//     //         {
//     //             'fieldname': 'name1',
//     //             'fieldtype': 'Link',
//     //             'label': 'Name',
//     //             'options': 'Company-Details',
//     //             'reqd': 1
//     //         },
//     //         {'fieldname': 'registration_number', 'fieldtype': 'Data', 'label': 'Registration Number'},
//     //         {'fieldname': 'share_held', 'fieldtype': 'Data', 'label': '% Shares Held'},
//     //          {'fieldname': '', 'fieldtype': 'Column Break'},
//     //         {'fieldname': 'nature_of_business', 'fieldtype': 'Data', 'label': 'Nature Of Business'},
//     //         // {'fieldname': '', 'fieldtype': 'Column Break'},
//     //         {
//     //             'fieldname': 'bond_required',
//     //             'fieldtype': 'Check',
//     //             'label': 'Bond Required'
//     //         },
//     //     ],
//     //     function(values) {
//     //         var data1 = {
//     //             name1: values.name1,
//     //             registration_number: values.registration_number,
//     //             share_held: values.share_held,
//     //             nature_of_business: values.nature_of_business,
//     //             bond_required: values.bond_required,
//     //         };
//     //         addDataToCompanyChildBondFacility(frm, data1);
//     //     }, 'Company');
//     // },

//     // add_new2: function(frm) {
//     //     frappe.prompt([
//     //         {'fieldname': 'name_of_bankinsurance_company', 'fieldtype': 'Data', 'label': 'Name Of Bank/Insurance Company'},
//     //         {'fieldname': 'facility', 'fieldtype': 'Data', 'label': 'Facility'},
//     //         {'fieldname': 'bonds_out_standing', 'fieldtype': 'Data', 'label': 'Bond(s) Out Standing'},
//     //         {'fieldname': 'rate_charged', 'fieldtype': 'Data', 'label': 'Rate Charged'},
//     //     ],
//     //     function(values) {
//     //         var data1 = {
//     //             name_of_bankinsurance_company: values.name_of_bankinsurance_company,
//     //             facility: values.facility,
//     //             bonds_out_standing: values.bonds_out_standing,
//     //             rate_charged: values.rate_charged,
//     //         };
//     //         localStorage.setItem('current_bond', JSON.stringify(data1));
//     //         var current_bond = JSON.parse(localStorage.getItem('current_bond'));
//     //         addDataToCurrentBondChildBondFacility(frm, current_bond);
//     //     }, 'Current Bond');
//     // },
//     //  add_new3: function(frm) {
//     //     frappe.prompt([
//     //         {'fieldname': 'name1', 'fieldtype': 'Data', 'label': 'Name'},
//     //         {'fieldname': 'position', 'fieldtype': 'Data', 'label': 'Position'},
//     //         {'fieldname': 'period_with_companyyears', 'fieldtype': 'Data', 'label': 'Period With Company(Years)'}
//     //     ],
//     //     function(values) {
//     //         var data1 = {
//     //             name1: values.name1,
//     //             position: values.position,
//     //             period_with_companyyears: values.period_with_companyyears
//     //         };
//     //         localStorage.setItem('personel_child', JSON.stringify(data1));
//     //         var personel_child = JSON.parse(localStorage.getItem('personel_child'));
//     //         addDataTopersonnelchildbondfacility(frm, personel_child);
//     //     }, 'Personnel');
//     // },
//     //  add_new4: function(frm) {
//     //     frappe.prompt([
//     //         {'fieldname': 'company', 'fieldtype': 'Data', 'label': 'Company', 'reqd': 1},
//     //         {'fieldname': 'address', 'fieldtype': 'Data', 'label': 'Address', 'reqd': 1},
//     //         {'fieldname': 'type', 'fieldtype': 'Data', 'label': 'Type', 'reqd': 1}
//     //     ],
//     //     function(values) {
//     //         var data = {
//     //             company: values.company,
//     //             address: values.address,
//     //             type: values.type
//     //         };
//     //         localStorage.setItem('group_company', JSON.stringify(data));
//     //         var group_company = JSON.parse(localStorage.getItem('group_company'));
//     //         addDataToGroupCompanyChild(frm, group_company);
//     //     }, 'Group Company', 'Submit');
//     // },
     
    
// //     validate(frm) {
// //          var acNo = frm.doc.ac_no;

// //         console.log(acNo); // Check the value of ac_no

// //         // Validate the ac_no to ensure it is exactly 10 digits
// //         var acNoRegex = /^\d{1,15}$/;
// //         if (!acNoRegex.test(acNo)) {
// //             //frappe.msgprint(__("It allows only 15-digit for account number field."));
// //             frappe.validated = false; // Prevent form submission
// //         }

// //     },
// //     setup: function(frm) {
// //         frm.fields_dict['client_name'].get_query = function(doc) {
// //             return {
// //                 doctype: 'Company-Details',
// //                 filters: {
// //                     'status': 'Active'
// //                 }
// //             };
// //         };
// //     },
     
// //  client_name: function(frm) {
// //     if (frm.doc.client_name) {
// //         frappe.call({
// //             method: "frappe.client.get_list",
// //             args: {
// //                 doctype: "Bond Facility",
// //                 filters: {
// //                     client_name: frm.doc.client_name
// //                 },
// //                 fields: ["name"]
// //             },
// //             callback: function(r) {
// //                 if (r.message && r.message.length > 0) {
// //                     frappe.msgprint(__('Client already exists!'));
// //                 } else {
// //                     // Check if the client name is 'approved'
// //                     if (frm.doc.client_name.toLowerCase() === 'approved') {
// //                         if (!frm.doc.msg_displayed) {
// //                             frappe.msgprint(__('Client Name is approved!'));
// //                             frm.set_value('msg_displayed', 1);
// //                         } else {
// //                             frappe.msgprint(__('The client name is already approved.'));
// //                         }
// //                     } else {
// //                         // frm.set_value('msg_displayed', 0);
// //                     }
// //                 }
// //             }
// //         });
// //     }
// // }


// });

// Function to add data to the child table
// function addDataToChildTable(frm, data) {
//     var childTable = frm.fields_dict['shareholders_table'].grid;
//     var newRow = frappe.model.add_child(frm.doc, childTable.doctype, 'shareholders_table');
//     frappe.model.set_value(newRow.doctype, newRow.name, 'id_type', data.id_type);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'id_number', data.id_number);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'first_name', data.first_name);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'contact_no', data.contact_no);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'married_anccop', data.married_anccop);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'share_held', data.share_held);
//     frm.refresh_field('shareholders_table');
// }
// function addDataToCompanyChildBondFacility(frm, data1) {
//     var childTable = frm.fields_dict['company_child'].grid;
//     var newRow = frappe.model.add_child(frm.doc, childTable.doctype, 'company_child');
//     frappe.model.set_value(newRow.doctype, newRow.name, 'name1', data1.name1);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'registration_number', data1.registration_number);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'share_held', data1.share_held);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'nature_of_business', data1.nature_of_business);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'bond_required', data1.bond_required);
//     frm.refresh_field('company_child');
// }


// Function to add data to the company child bond facility table
// function addDataToCompanyChildBondFacility(frm, data1) {
//     var childTable = frm.fields_dict['company_child'].grid;
//     var newRow = frappe.model.add_child(frm.doc, childTable.doctype, 'company_child');
//     frappe.model.set_value(newRow.doctype, newRow.name, 'name1', data1.name1);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'registration_number', data1.registration_number);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'share_held', data1.share_held);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'nature_of_business', data1.nature_of_business);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'bond_required', data1.bond_required);
//     frm.refresh_field('company_child');
// }

// function addDataToCurrentBondChildBondFacility(frm, data) {
//     var childTable = frm.fields_dict['current_bond'].grid;
//     var newRow = frappe.model.add_child(frm.doc, childTable.doctype, 'current_bond');
//     frappe.model.set_value(newRow.doctype, newRow.name, 'name_of_bankinsurance_company', data.name_of_bankinsurance_company);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'facility', data.facility);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'bonds_out_standing', data.bonds_out_standing);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'rate_charged', data.rate_charged);
//     frm.refresh_field('current_bond');
// }

// function addDataTopersonnelchildbondfacility(frm, data) {
//     var childTable = frm.fields_dict['personel_child'].grid;
//     var newRow = frappe.model.add_child(frm.doc, childTable.doctype, 'personel_child');
//     frappe.model.set_value(newRow.doctype, newRow.name, 'name1', data.name1);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'position', data.position);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'period_with_companyyears', data.period_with_companyyears);
    
//     frm.refresh_field('personel_child');
// }
// function addDataToGroupCompanyChild(frm, data) {
//     var childTable = frm.fields_dict['group_company'].grid;
//     var newRow = frappe.model.add_child(frm.doc, 'Group Company Child Doctype', 'group_company');
//     frappe.model.set_value(newRow.doctype, newRow.name, 'company', data.company);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'address', data.address);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'type', data.type);

//     frm.refresh_field('group_company');
// }
 
// Auto generation of Proposal No
// function generateNumber(frm) {
//     if (!frm.doc.facility_no) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `BFC/${currentYear}/`;
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Facility',
//                 fields: ['facility_no', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastFacilityNo = r.message[0].facility_no;
//                     let lastNumber = parseInt(lastFacilityNo.split("/").pop());
//                     if (!isNaN(lastNumber)) {
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('facility_no', prefix + newNumber);
//                     }
//                 } else {
//                     frm.set_value('facility_no', prefix + '0001');
//                 }
//             }
//         });
//     }
// }

