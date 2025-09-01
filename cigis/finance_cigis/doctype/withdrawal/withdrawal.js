// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Withdrawal', {
//     onload(frm) {
//         frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Funds',
//                 fields: ['fund_provider']
//             },
//             callback: function(response) {
//                 console.log("fund_provider received:", response);
//                 let FundProviderData = response.message || [];
//                 let FinalFundProviderData = FundProviderData.map(x => x.fund_provider);
//                 frm.set_df_property('fund_provider', 'options', FinalFundProviderData);
//                 console.log("final", FinalFundProviderData);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching lawyers details:", textStatus, errorThrown);
//             }
//         });
//     },

//       refresh: function(frm) { 
//           frm.fields_dict.initial_fund.$input.css("text-align","right");
//           frm.set_df_property('withdral_history', 'cannot_add_rows', true); 
//            console.log(withdral_history,"childtable")
          
//       }, 
 
      
  
 
//     fund_provider(frm) {
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Funds',
//                 filters: {
//                     'fund_provider': frm.doc.fund_provider,
//                 },
//                 fields: ['fname', 'fund_refid', 'fundname','inceptiondate','intialfundamount','status'], 
//                 limit_page_length: 100
//             },
//             callback: function(response) {
//                 var data = response.message[0];
//                 if (data) {
//                     frm.set_value('name1', data.fname);
//                     frm.set_value('status', data.status);
//                     frm.set_value('fund_ref_id', data.fund_refid);
//                     frm.set_value('name1', data.fundname);
//                     frm.set_value('fund_inception_date', data.inceptiondate);
//                     frm.set_value('initial_fund', data.intialfundamount);
//                 }
//             }
//         });
//     },
// // add(frm) {
// //     function generateNextFundtrnno() {
// //         var childTable = frm.doc.withdral_history || [];
// //         var lastFundtrnno = '';
 
// //         if (childTable.length > 0) {
// //             lastFundtrnno = childTable[childTable.length - 1].fundtrnno;
// //         }
 
       
// //         var lastNumber = parseInt(lastFundtrnno.split('/')[2]) || 0;
// //         var nextNumber = lastNumber + 1;
 
       
// //         var nextFundtrnno = 'FPEP/' + (new Date()).getFullYear() + '/' + nextNumber.toString().padStart(4, '0');
// //         return nextFundtrnno;
// //     }
 
   
// //     var nextFundtrnno = generateNextFundtrnno();
 
  
// //     var dialog = new frappe.ui.Dialog({
// //         title: 'Withdrawal Details',
// //         fields: [
// //             {
// //                 fieldname: 'fundtrnno',
// //                 label: 'Fundtrnno',
// //                 fieldtype: 'Data',
// //                 default: nextFundtrnno, 
// //                 read_only: true 
// //             },
// //             {
// //                 fieldname: 'date',
// //                 label: 'Date',
// //                 fieldtype: 'Date',
// //             },
// //             {
// //                 fieldname: 'withdrawls',
// //                 label: 'Withdrawls',
// //                 fieldtype: 'Currency',
// //             },
// //         ],
// //         primary_action_label: 'Submit',
// //         primary_action: function() {
// //             var fundtrnno = dialog.get_value('fundtrnno');
// //             var date = dialog.get_value('date');
// //             var withdrawls = dialog.get_value('withdrawls');
 
         
// //             var row = frm.add_child('withdral_history', {
// //                 'fundtrnno': fundtrnno,
// //                 'date': date,
// //                 'withdrawls': withdrawls
// //             });
 
            
// //             frm.refresh_field('withdral_history');
 
          
// //             dialog.hide();
// //             totalwithdrawaladdition(frm);
// //         }
// //     });
 
  
// //     dialog.show();
// // }
 
//  add: function(frm) {
//     function getNextLoiNo() {
//         var currentYear = (new Date()).getFullYear();
//         var currentNumber = 1;
//         var lastLoiNo;
 
//         // Check if the child table is empty
//         if (!frm.doc.withdral_history || frm.doc.withdral_history.length === 0) {
//             // Retrieve the last used LOI number from the database
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Withdrawal',
//                     fields: ['fundtrnno', 'creation'],
//                     order_by: 'creation desc',
//                     limit: 1
//                 },
//                 async: false,
//                 callback: function(response) {
//                     if (response.message && response.message[0]) {
//                         lastLoiNo = response.message[0].fundtrnno;
//                     }
//                 }
//             });
//         } else {
//             // Retrieve the last used LOI number from local storage
//             lastLoiNo = localStorage.getItem('last_loi_no');
//         }
 
//         // If the child table is not empty, or no records found in the database, use local storage for incrementation
//         if (lastLoiNo) {
//             var lastNumber = parseInt(lastLoiNo.split('/')[2]);
//             currentNumber = lastNumber + 1;
//         }
 
//         var nextLoiNo = `FPEP/${currentYear}/${('000' + currentNumber).slice(-4)}`;
//         return nextLoiNo;
//     }
 
//     frappe.prompt([
        
//         {'fieldname': 'fundtrnno', 'fieldtype': 'Data', 'label': 'Fundtrnno:', 'default': getNextLoiNo()},
//         {'fieldname': 'date', 'fieldtype': 'Date','label': 'Date:'},
//         {'fieldname': 'withdrawls', 'fieldtype': 'Currency', 'label': 'Withdrawls'},
        
//     ],
//     function(values) {
//         var data = {
//             loi_no: values.fundtrnno,
//             principal: values.date,
//             tender_no: values.withdrawls,
            
//         };
 
//         var nextLoiNo = getNextLoiNo();
//         localStorage.setItem('last_loi_no', nextLoiNo);
 
//         // Add the retrieved data to the child table
//         addDataToChildTable(frm, data);
//     },
//     'Withdrawl details');
// },
 
 

//     // Set the last row's loi_no into the loi field before saving the record
//   before_save: function(frm) {
//     if (frm.doc.withdral_history && frm.doc.withdral_history.length > 0) {
//         var lastRowLoiNo = frm.doc.withdral_history[frm.doc.withdral_history.length - 1].fundtrnno;
//         frm.set_value('fundtrnno', lastRowLoiNo);
//         console.log(lastRowLoiNo,'number')
//     }
// }


// });


  
 

// function addDataToChildTable(frm, data) {
//     var childTable = frm.fields_dict['withdral_history'].grid;
//     var newRow = childTable.add_new_row();
//     frappe.model.set_value(newRow.doctype, newRow.name, 'fundtrnno', data.loi_no);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'date', data.principal);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'withdrawls', data.tender_no);
    
//     childTable.refresh();
//     totalwithdrawaladdition(frm);
// }
 
 
// function totalwithdrawaladdition(frm){
//     var childTableData = frm.doc.withdral_history || [];
//     // Initialize totalBondValue with the first row's value
//     var totalCapitalValue = childTableData.length > 0 ? parseFloat(childTableData[0].withdrawls) || 0 : 0;
 
//     // Subtract values of subsequent rows from totalBondValue
//     for (var i = 1; i < childTableData.length; i++) {
//         var rowSecurityValue = parseFloat(childTableData[i].withdrawls) || 0;
//         totalCapitalValue += rowSecurityValue;
//     }
//     frm.set_value('total_withdraw_amount', totalCapitalValue);
// }


