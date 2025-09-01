// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Letter Of Intends', {
     
     
//     refresh:function(frm){
       
//     frm.fields_dict.total_letter_of_intend_issued.$input.css("text-align", "right");
    
//     frm.set_df_property('letter_of_intends_details', 'cannot_add_rows', true);
     
//     frm.set_df_property('letter_of_intends_no_table', 'cannot_add_rows', true);
     
     
//     },
//     onload: function(frm){
        
       
//     //   frappe.call({
//     //             method: 'frappe.client.get_list',
//     //             args: {
//     //                 doctype: 'Bond Application',
//     //                 fields: ['facility_no']
//     //             },
//     //             callback: function(response) {
//     //                 console.log("facility_no received:", response);
                    
//     //                 if (response.message) {
//     //                     let finalArray = response.message.map(x => x.facility_no);
//     //                     frm.set_df_property('bond_facility_no', 'options', finalArray);
//     //                     console.log("final", finalArray);
//     //                 }
//     //             },
//     //             error: function(xhr, textStatus, errorThrown) {
//     //                 console.error("Error fetching policy holders:", textStatus, errorThrown);
//     //             }
//     //         });
//     //     }, 
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 fields: ['facility_no'],
               
//             },
//             callback: function(response) {
//                 console.log("facility_no received:", response);
                
//                 let DataArray = response.message;
//                 let uniqueFacilityNos = new Set();
    
//                 // Collect unique facility_no values
//                 for (let x of DataArray) {
//                     uniqueFacilityNos.add(x.facility_no);
//                 }
    
//                 // Convert set to array
//                 let FinalArray = Array.from(uniqueFacilityNos);
    
//                 frm.set_df_property('bond_facility_no', 'options', FinalArray);
//                 console.log("final", FinalArray);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching facility_no:", textStatus, errorThrown);
//             }
//         });
//     },
    
    
    
    
    
     
    
    
    
    
//     bond_facility_no: function (frm) {
        
          
                        
//          frm.set_value('facility_date', '');
//          frm.set_value('bondname', '');
        
                    
        
//          // Get the selected quotation number
//         let bond_facility_no = frm.doc.bond_facility_no;
        
//          // Re-enable the dropdown field after selection
//             frm.toggle_enable('bond_facility_no', true);
        
        
//             frappe.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "Bond Application",
//                 filters: {
//                     facility_no: frm.doc.bond_facility_no
//                 },
//                 fields: ["bond_no", "demand_date", "description_contract", "amount_in_pula","reg_date","facility_no","demand_date","facility_name"] 
//             },
//             callback: function(r) {
//                 console.log(r, "hello");
//                 if (!r.exc) {
//                     frm.doc.letter_of_intends_details = [];
//                     frm.refresh_field('letter_of_intends_details');
//                     var data = r.message;
//                     for (let x of data) {
//                         var child = frappe.model.add_child(frm.doc, "Letter Of Intends Details table", "letter_of_intends_details");
//                         console.log(child, "s")
     
//                         frappe.model.set_value(child.doctype, child.name, "bond_no", x.bond_no);
//                         frappe.model.set_value(child.doctype, child.name, "date", x.demand_date); 
//                         frappe.model.set_value(child.doctype, child.name, "description", x.description_contract);
//                         frappe.model.set_value(child.doctype, child.name, "value", x.amount_in_pula);
//                         frappe.model.set_value(child.doctype, child.name, "expiry", x.demand_date);
                       
//                     }
//                     frm.refresh_fields('letter_of_intends_details');
//                     console.log(data);
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
     
//                 // Set values in the parent form
//                 if (r.message && r.message.length > 0) {
//                     frm.set_value('facility_date', r.message[0].reg_date);
//                     frm.set_value('bondname', r.message[0].facility_name);
//                 }
//             }
//         });
     
//         frappe.validated = false;
//     },
//       add_new: function(frm) {
//         function getNextLoiNo() {
//             var currentYear = (new Date()).getFullYear();
//             var currentNumber = 1;
//             var lastLoiNo;
    
//             // Check if the child table is empty
//             if (!frm.doc.letter_of_intends_no_table || frm.doc.letter_of_intends_no_table.length === 0) {
//                 // Retrieve the last used LOI number from the database
//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Letter Of Intends',
//                         fields: ['loi', 'creation', 'bond_facility_no'],
//                         order_by: 'creation desc',
//                         limit: 1
//                     },
//                     async: false,
//                     callback: function(response) {
//                         if (response.message && response.message[0]) {
//                             lastLoiNo = response.message[0].loi;
//                         }
//                     }
//                 });
//             } else {
//                 // Retrieve the last used LOI number from local storage
//                 lastLoiNo = localStorage.getItem('last_loi_no');
//             }
    
//             // If the child table is not empty, or no records found in the database, use local storage for incrementation
//             if (lastLoiNo) {
//                 var lastNumber = parseInt(lastLoiNo.split('/')[2]);
//                 currentNumber = lastNumber + 1;
//             }
    
//             var nextLoiNo = `LOI/${currentYear}/${('000' + currentNumber).slice(-4)}`;
//             return nextLoiNo;
//         }
    
//         frappe.prompt([
//             {'fieldname': 'loi_no', 'fieldtype': 'Data', 'label': 'LOI Req. No:', 'default': getNextLoiNo()},
//             {'fieldname': 'principal', 'fieldtype': 'Link','options': 'Company-Details', 'label': 'Principal:'},
//             {'fieldname': 'new', 'fieldtype': 'Button', 'label': 'New', 'click': function() {
//                 frappe.new_doc('Company'); 
//             }},
//             {'fieldname': 'tender_no', 'fieldtype': 'Data', 'label': 'Tender No:'},
//             {'fieldname': 'project_description', 'fieldtype': 'Data', 'label': 'Project Description'},
//             {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//             {'fieldname': 'letter_of_intent_date', 'fieldtype': 'Date', 'label': 'Letter Of Intent Date'},
//             {'fieldname': 'bond_value', 'fieldtype': 'Currency', 'label': 'Bond Value : P'},
//             {'fieldname': 'project_sum', 'fieldtype': 'Currency', 'label': 'Project Sum: P'},
//             {'fieldname': 'bond_facility_no', 'fieldtype': 'Data', 'label': 'Bond Facility No', 'default': frm.doc.bond_facility_no}, // Set default value to bond_facility_no field
//         ],
//         function(values) {
//             var data = {
//                 loi_no: values.loi_no,
//                 principal: values.principal,
//                 tender_no: values.tender_no,
//                 project_description: values.project_description,
//                 letter_of_intent_date: values.letter_of_intent_date,
//                 bond_value: values.bond_value,
//                 project_sum: values.project_sum,
//                  bond_facility_no: values.bond_facility_no,
//             };
    
//             var nextLoiNo = getNextLoiNo();
//             localStorage.setItem('last_loi_no', nextLoiNo);
    
//             // Add the retrieved data to the child table
//             addDataToChildTable(frm, data);
//         },
//         'Letter Of Intends No Table');
//     },
    
    
     
//         // Set the last row's loi_no into the loi field before saving the record
//       before_save: function(frm) {
//         if (frm.doc.letter_of_intends_no_table && frm.doc.letter_of_intends_no_table.length > 0) {
//             var lastRowLoiNo = frm.doc.letter_of_intends_no_table[frm.doc.letter_of_intends_no_table.length - 1].loi_no;
//             frm.set_value('loi', lastRowLoiNo);
//             console.log(lastRowLoiNo,'number')
//         }
//     }
//     });
     
//     function addDataToChildTable(frm, data) {
//         var childTable = frm.fields_dict['letter_of_intends_no_table'].grid;
//         var newRow = childTable.add_new_row();
//         frappe.model.set_value(newRow.doctype, newRow.name, 'loi_no', data.loi_no);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'principal', data.principal);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'tender_no', data.tender_no);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'project_description', data.project_description);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'letter_of_intent_date', data.letter_of_intent_date);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'bond_value', data.bond_value);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'project_sum', data.project_sum);
//         frappe.model.set_value(newRow.doctype, newRow.name, 'bond_facility_no', data.bond_facility_no);
//         childTable.refresh();
//         calculate_intend_issued(frm);
//     }
     
     
     
//     function calculate_intend_issued(frm){
//         var childTableData = frm.doc.letter_of_intends_no_table || [];
     
//         // Calculate Total Turnover
//         var totalBondValue = childTableData.reduce(function(bond_value, row) {
//             // Convert row.turnover to a number using parseFloat or parseInt
//             var rowBondValue = parseFloat(row.bond_value) || 0; // Convert to float; default to 0 if NaN
     
//             return bond_value + rowBondValue;
//         }, 0);
     
//         // Update Total Turnover field in the form
//         frm.set_value('total_letter_of_intend_issued', totalBondValue);
//     }
    
    
    
    