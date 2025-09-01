// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Capital Addition', {
//     refresh: function(frm) {
      
// frm.fields_dict.total1.$input.css("text-align", "right");
 
//         frm.set_df_property('capital_addition','cannot_add_rows', true);
//         // Fetch policy_holder from Policy Approvals
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Funds',
//                 fields: ['fund_provider'],
//                 limit_page_length: 100 
//             },
//             callback: function(response) {
//                 console.log("fund_provider received:", response);
//                 if (response.message) {
//                     let finalArray = response.message.map(x => x.fund_provider);
//                     frm.set_df_property('fund_provider', 'options', finalArray);
//                     console.log("final", finalArray);
//                 }
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching policy holders:", textStatus, errorThrown);
//             }
//         });
//     },


//  total_capital_addition(frm){
//     calculatetotalCapitalAddition(frm)
//   },
  
//  fund_provider(frm){
     
//       var FunProvider = frm.doc.fund_provider;
 
//         // Fetch data from DCI Proposals based on selected client name
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Funds',
//                 filters: {
//                     fund_provider: FunProvider
//                 },
//                 fields: ['fname', 'fstatus','inceptiondate','fund_refid','intialfundamount']
//             },
//             callback: function(response) {
//                 console.log("Bond Facility response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_proposals = response.message[0];
 
//                     // Populate fields if data is found
//                     frm.set_value('name1', data_from_proposals.fname || '');
//                     frm.set_value('status', data_from_proposals.fstatus || '');
//                     frm.set_value('fund_inception_date', data_from_proposals.inceptiondate || '');
//                     frm.set_value('fund_ref_id', data_from_proposals.fund_refid || '');
//                      frm.set_value('initial_fund', data_from_proposals.intialfundamount || '');
//                 } else {
//                     // Clear fields if no matching record found
//                     frm.set_value('status', '');
//                     frm.set_value('name1', '');
//                     frm.set_value('fund_inception_date', '');
//                     frm.set_value('fund_ref_id', '');
//                     frm.set_value('initial_fund', '');
                    
//                     frappe.msgprint('No matching record found in Bond Facility.');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//             }
//         });
//   frappe.call({
//             method: 'frappe.client.get',
//             args: {
//                 doctype: 'Withdrawal',
//                 filters: {
//                  fund_provider: frm.doc.fund_provider 
//                 },

//                 fields: ['total_withdraw_amount']

//             },

//             callback: function (r) {

//                 console.log(r,"clent short name")

//                 if (!r.exc) {

//                     if (r.message) {

//                         frm.set_value('total_withdraw_amount', r.message.total_withdraw_amount);
//                     }
//                 } else {

//                     console.error("Error occurred:", r.exc);

//                 }

//             }

//         });
//  },
 
 
 
 
// add_new: function(frm) {
//     function getNextLoiNo() {
//         var currentYear = (new Date()).getFullYear();
//         var currentNumber = 1;
//         var lastLoiNo;
 
//         // Check if the child table is empty
//         if (!frm.doc.capital_addition || frm.doc.capital_addition.length === 0) {
//             // Retrieve the last used LOI number from the database
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Capital Addition',
//                     fields: ['fundtrtno', 'creation'],
//                     order_by: 'creation desc',
//                     limit: 1
//                 },
//                 async: false,
//                 callback: function(response) {
//                     if (response.message && response.message[0]) {
//                         lastLoiNo = response.message[0].fundtrtno;
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
 
//         var nextLoiNo = `FDEP/${currentYear}/${('000' + currentNumber).slice(-4)}`;
//         return nextLoiNo;
//     }
 
//     frappe.prompt([
//                 { 'fieldname': 'date', 'fieldtype': 'Date', 'label': 'Date' },
//                 { 'fieldname': 'description', 'fieldtype': 'Data', 'label': 'Description' },
//                 { 'fieldname': '', 'fieldtype': 'Column Break', 'label': '' },
//                 { 'fieldname': 'amount', 'fieldtype': 'Data', 'label': 'Amount P' },
//                 { 'fieldname': 'fundtrtno', 'fieldtype': 'Data', 'label': 'FundtrtNo', 'default': getNextLoiNo() },
//             ],
//     function(values) {
//         var data = {
//             loi_no: values.date,
//             principal: values.amount,
//             tender_no: values.fundtrtno,
            
//         };
 
//         var nextLoiNo = getNextLoiNo();
//         localStorage.setItem('last_loi_no', nextLoiNo);
 
//         // Add the retrieved data to the child table
//         addDataToChildTable(frm, data);
//     },
//     'Letter Of Intends No Table');
// },
 
 

//     // Set the last row's loi_no into the loi field before saving the record
//   before_save: function(frm) {
//     if (frm.doc.capital_addition && frm.doc.capital_addition.length > 0) {
//         var lastRowLoiNo = frm.doc.capital_addition[frm.doc.capital_addition.length - 1].fundtrtno;
//         frm.set_value('fundtrtno', lastRowLoiNo);
//         console.log(lastRowLoiNo,'number')
//     }
// }
// });

 
 
 
 
 
 
 
 
 




 
//  function addDataToChildTable(frm, data) {
//     var childTable = frm.fields_dict['capital_addition'].grid;
//     var newRow = childTable.add_new_row();
//     frappe.model.set_value(newRow.doctype, newRow.name, 'date', data.loi_no);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'amount', data.principal);
//     frappe.model.set_value(newRow.doctype, newRow.name, 'fundtrtno', data.tender_no);
//     childTable.refresh();
//     totaladdition(frm);
// } 
 


// function totaladdition(frm){
//     var initial_fund = frm.doc.initial_fund || 0; // Initialize with 0 if initial_fund is not set
//     var childTableData = frm.doc.capital_addition || [];
  
//     // Initialize totalCapitalValue with the first row's value
//     var totalCapitalValue = childTableData.length > 0 ? parseFloat(childTableData[0].amount) || 0 : 0;

//     // Add values of subsequent rows to totalCapitalValue
//     for (var i = 1; i < childTableData.length; i++) {
//         var rowAmount = parseFloat(childTableData[i].amount) || 0;
//         totalCapitalValue += rowAmount;
//     }
    
//     // Calculate total capital addition by adding initial_fund and totalCapitalValue
//     var totalValues = initial_fund + totalCapitalValue;
    
//     frm.set_value('total_capital_addition', totalValues);
//      frm.set_value('total_rows', totalCapitalValue);
    
// }



// function calculatetotalCapitalAddition(frm){
//     var total_withdraw_amount = frm.doc.total_withdraw_amount;
//     var total_capital_addition = frm.doc.total_capital_addition;
    
    
//     // Perform your calculation here
//     var total = (total_capital_addition - total_withdraw_amount);

//     frm.set_value('total1', total);
      
//  }
 
 
 
 
 


