// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Security', {
     
  
//     onload: function(frm) {
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Facility Quotation Acceptance',
//                 fields: ['name1']
//             },
//             callback: function(response) {
//                 console.log("Client names received:", response);
//                 let finalArray = response.message.map(x => x.name1);
//                 frm.set_df_property('name1', 'options', finalArray);
//                 console.log("Final array:", finalArray);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching approved bonds:", textStatus, errorThrown);
//             }
//         });
//     },

//     refresh: function(frm) { 
    
// frm.fields_dict.total_security_registered.$input.css("text-align", "right");
//  frm.fields_dict.released_security.$input.css("text-align", "right");
// frm.fields_dict.net_security.$input.css("text-align", "right");
 
//         frm.fields_dict.add_security.$input.addClass('btn-primary');
//         frm.set_df_property('link', 'cannot_add_rows', true);
//     },

//     name1: function(frm) {
//         var name = frm.doc.name1;
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Facility Quotation Acceptance',
//                 filters: { name1: name },
//                 fields: ['name1', 'quotation_no', 'faciity_no', 'net_facility_amount']
//             },
//             callback: function(response) {
//                 console.log("Bond Facility response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data = response.message[0];
//                     frm.set_value('name1', data.name1 || '');
//                     frm.set_value('quotation_no', data.quotation_no || '');
//                     frm.set_value('facility_no', data.faciity_no || '');
//                     frm.set_value('facilityamount', data.net_facility_amount || '');
//                 } else {
//                     frm.set_value('name1', "");
//                     frm.set_value('quotation_no', "");
//                     frm.set_value('facility_no', "");
//                     frm.set_value('facilityamount', "");
//                     frappe.msgprint('No matching record found in Bond Facility.');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//             }
//         });
//     },

//     add_security: function(frm) {
//         function getNextIdNo() {
//             var currentYear = (new Date()).getFullYear();
//             var currentNumber = 1;
//             var lastIdNo;

//             if (!frm.doc.link || frm.doc.link.length === 0) {
//                 frappe.call({
//                     method: 'frappe.client.get_list',
//                     args: {
//                         doctype: 'Security',
//                         fields: ['id', 'creation'],
//                         order_by: 'creation desc',
//                         limit: 1
//                     },
//                     async: false,
//                     callback: function(response) {
//                         if (response.message && response.message[0]) {
//                             lastIdNo = response.message[0].id;
//                         }
//                     }
//                 });
//             } else {
//                 lastIdNo = localStorage.getItem('last_id_no');
//             }

//             if (lastIdNo) {
//                 var lastNumber = parseInt(lastIdNo.split('/')[2]);
//                 currentNumber = lastNumber + 1;
//             }

//             var nextIdNo = `SID/${currentYear}/${('000' + currentNumber).slice(-4)}`;
//             return nextIdNo;
//         }

//         frappe.prompt([
//             {'fieldname': 'id', 'fieldtype': 'Data', 'label': 'ID', 'default': getNextIdNo()},
//             {'fieldname': 'securitytype', 'fieldtype': 'Select', 'options': 'BOARD RESOLUTION\nCASH DEPOSIT\nCOUNTER INDEMNITY\nCASH INVESTMENT\nMORTGAGE\nPERSONAL SURITIES\nRECIPROCAL INDEMNITY', 'label': 'Security Type'},
//             {'fieldname': 'details2', 'fieldtype': 'Data', 'label': 'Details'},
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//               {'fieldname': 'status', 'fieldtype': 'Select','options': 'In Use\nUse', 'label': 'Status'},
//             {'fieldname': 'security_value', 'fieldtype': 'Int', 'label': 'Security Value'},
//             {'fieldname': 'security_signed_by', 'fieldtype': 'Data', 'label': 'Security Signed By'},
           
           
//         ],
//         function(values) {
//             var data = {
//                 id: values.id,
//                 securitytype: values.securitytype,
//                 details2: values.details2,
//                 security_value: values.security_value,
//                 security_signed_by: values.security_signed_by,
//                 status: values.status,
//             };

//             var nextIdNo = getNextIdNo();
//             localStorage.setItem('last_id_no', nextIdNo);

//             addDataToChildTable(frm, data);
//         },
//         'Security');
//     },

//     before_save: function(frm) {
//         if (frm.doc.link && frm.doc.link.length > 0) {
//         var lastRowLoiNo = frm.doc.link[frm.doc.link.length - 1].id;
//         frm.set_value('id', lastRowLoiNo);
//         console.log(lastRowLoiNo,'number')
//     }
//     }
// });

// function addDataToChildTable(frm, data) {
//     var childTable = frm.fields_dict['link'].grid;
//     var newRow = childTable.add_new_row();
//     frappe.model.set_value(newRow.doctype, newRow.name, 'id', data.id);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'securitytype', data.securitytype);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'details2', data.details2);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'security_value', data.security_value);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'security_signed_by', data.security_signed_by);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'status', data.status);
//     childTable.refresh();
//     calculate_intend_issued(frm);
// }


// function calculate_intend_issued(frm) {
//     var childTableData = frm.doc.link || [];

//     // Calculate Total Security Value
//     var totalSecurityValue = childTableData.reduce(function(total, row) {
//         var rowSecurityValue = parseFloat(row.security_value) || 0; // Convert to float; default to 0 if NaN
//         return total + rowSecurityValue;
//     }, 0);

//     // Update Total Security Registered field in the form
//     frm.set_value('total_security_registered', totalSecurityValue);
//     frm.set_value('net_security', totalSecurityValue);
//     frm.fields_dict.total_security_registered.$input.css("text-align", "right");
//     frm.fields_dict.net_security.$input.css("text-align", "right");

// }

