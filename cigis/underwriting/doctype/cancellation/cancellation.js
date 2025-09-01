// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt


// function deputyshrieffbonds(frm){
//     console.log("temp")
//     frm.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Deputy Sheriff Bond',  
//                      filters: {
//                     workflow_state: "Approved"
//                 },
//                     fields: ['sheriff_name']  
//                 },
//                 callback: function(response) {
//                     console.log(response, 'Get the data')
//                     if (response.message && response.message.length > 0) {
                        
//                          let DataArray = response.message || [];
//                          let FinalArray = DataArray.map(x => x.sheriff_name);
//                          frm.set_df_property('bond_holder', 'options', FinalArray);
                     
                        
//                     }
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching details from Deputy Shreiff Bond:", textStatus, errorThrown);
//                 }
//             });
// }
// function otherbons(frm){
//     frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 filters: {
//                     workflow_state: "Approved"
//                 },
//                 fields: ['facility_name']
//             },
//             callback: function(response) {
//                 console.log("facility_name received:", response);
//                 let DataArray = response.message || [];
//                 let FinalArray = DataArray.map(x => x.facility_name);
//                 frm.set_df_property('bond_holder', 'options', FinalArray);
//                 console.log("final", FinalArray);
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching approved bonds:", textStatus, errorThrown);
//             }
//         });
    
// }
// function handleFieldChange(frm, field, field1) {
//     return function() { // Return a function to be executed when onchange event occurs
//         console.log(field + " onchange triggered");
//         var value = frm.doc[field];
//         console.log("value:", value);
//         frm.doc[field1] = value;
//         frm.refresh_field(field1);
//     };
// }


    



// frappe.ui.form.on('Cancellation', {
// //   bond_no:function(frm){
// //     var bondno = frm.doc.bond_no;
// //     frm.set_value('bond_no1',bondno);
// //     },
//    date:function(frm){
//     var date = frm.doc.date;
//     frm.set_value('date',date1);
//     },
//    client:function(frm){
//     var client = frm.doc.client;
//     frm.set_value('client1',client);
//     },
//    principal:function(frm){
//     var principal = frm.doc.principal;
//     frm.set_value('principal1',principal);
//     },
//    description1:function(frm){
//     var description1 = frm.doc.description1;
//     frm.set_value('description2',description1);
//     },
//    description:function(frm){
//     var description = frm.doc.description;
//     frm.set_value('description3',description);
//     },
//    bond_period_from:function(frm){
//     var bond_period_from = frm.doc.bond_period_from;
//     frm.set_value('bond_period_from1',bond_period_from);
//     },
//    bond_period_to:function(frm){
//     var bond_period_to = frm.doc.bond_period_to;
//     frm.set_value('bond_period_to1',bond_period_to);
//     },
//    bond_value:function(frm){
//     var bond_value = frm.doc.bond_value;
//     frm.set_value('bond_value1',bond_value);
//     },
//    cancellation_req_no:function(frm){
//     var cancellation_req_no = frm.doc.cancellation_req_no;
//     frm.set_value('cancellation_req_no1',cancellation_req_no);
//     },
//    bondtype1:function(frm){
//     var bondtype1 = frm.doc.bondtype1;
//     frm.set_value('bondtype2',bondtype1);
//     },
// refresh(frm) {
    
//        frm.fields_dict.cancellation_req_no.$input.css("text-align","right");
//         frm.fields_dict.bond_value.$input.css("text-align","right");
//         frm.fields_dict.cancellation_req_no1.$input.css("text-align","right");
//         frm.fields_dict.bond_value1.$input.css("text-align","right");
       
        
        
//         frm.fields_dict['deputyshreiff_bond'].df.onchange = handleFieldChange(frm, 'deputyshreiff_bond', 'deputyshreiff_bond1');
//         frm.fields_dict['other_bonds'].df.onchange = handleFieldChange(frm, 'other_bonds', 'other_bonds1');
//         frm.fields_dict['bond_holder'].df.onchange = handleFieldChange(frm, 'bond_holder', 'bond_holder1');
       
          
//     // if (frm.doc.bond_no !== "") {
//     //     frm.set_df_property('bond_no', 'read_only', 0);
//     //     frm.set_df_property('bond_no', 'read_only', 1);
//     // }
//     },
// onload(frm) {
    
//     if (frm.doc.deputyshreiff_bond == 1) {
//         deputyshrieffbonds(frm)
//     } 
    
//     else if(frm.doc.other_bonds == 1){
//         otherbons(frm)
//     }
// },
// bond_holder(frm) {
//  frm.set_value('bond_no', '');
//  frm.set_value('client', '');
//  frm.set_value('principal', '');
//  frm.set_value('description', '');
//  frm.set_value('bond_period_from', '');
//  frm.set_value('bond_period_to', '');
//  frm.set_value('bond_value', '');
//  frm.set_value('bondtype1', '');
 
// if(frm.doc.other_bonds == 1 ){
// frm.call({
//      method: 'frappe.client.get_list',
//     args: {
//         doctype: 'Bond Application',
//         filters: {
//             facility_name: frm.doc.bond_holder,
//             workflow_state: "Approved"
//         },
//         fields: ['bond_no']
//     },
//     callback: function(response) {
//         console.log(response, 'Get the data');
//         if (response.message && response.message.length > 0) {
//             let DataArray = response.message;
//             console.log(response.message[0].bond_no,"dattaata")
//             let FinalArray = DataArray.map(x => x.bond_no);
//             frm.set_df_property('bond_no', 'options', FinalArray);
//            // console.log(bond_no,"bond number")
//         }
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching details from Bond Application:", textStatus, errorThrown);
//     }
// });
// }
// if(frm.doc.deputyshreiff_bond == 1 ){
// frm.call({
//     method: 'frappe.client.get_list',
//     args: {
//         doctype: 'Deputy Sheriff Bond',
//         filters: {
//             sheriff_name: frm.doc.bond_holder,
//             workflow_state: "Approved"
//         },
//         fields: ['bond_no']
//     },
//     callback: function(response) {
//         console.log(response, 'Get the data');
//         if (response.message && response.message.length > 0) {
//             let DataArray = response.message;
//             let FinalArray = DataArray.map(x => x.bond_no);
//             frm.set_df_property('bond_no', 'options', FinalArray.join('\n'));
//         }
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching details from Bond Application:", textStatus, errorThrown);
//     }
// });
// }
//     },
// //  when bond no select fetch the data from bond application
// bond_no(frm) {
//         console.log(frm.doc.bond_holder, "frm.doc.bond_holder");
//             var bondno = frm.doc.bond_no;
//             frm.set_value('bond_no1',bondno);
//         if(frm.doc.other_bonds == 1 ){
//             frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 filters: {
//                     bond_no: frm.doc.bond_no,
//                     workflow_state: "Approved"
//                 },
//                 fields: ['facility_name', 'bond_no', 'reg_date', 'bond_in_favour',  'description_contract', 'period_from', 'to', 'amount_in_pula', 'reg_no', 'bond_type'],
//                  limit_page_length: 100
//             },
//             callback: function(r) {
//                 console.log(r, "client details");
//                 // frm.set_df_property('bond_no', 'read_only', 1);
//                 if (r.message && r.message.length > 0) {
//                     var bondNoWithClient = r.message[0].bond_no + ' - ' + r.message[0].facility_name;
//                     //frm.set_value('bond_no', bondNoWithClient);
//                     frm.set_value('client', r.message[0].facility_name);
//                     frm.set_value('principal', r.message[0].bond_in_favour);
//                     frm.set_value('description', r.message[0].description_contract);
//                     frm.set_value('bond_period_from', r.message[0].period_from);
//                     frm.set_value('bond_period_to', r.message[0].to);
//                     frm.set_value('bond_value', r.message[0].amount_in_pula);
//                     frm.set_value('bondtype1', r.message[0].bond_type);
                    
//                 }
//             }
//         });
//         }
//         // deputyshreiff select fetch the data from  DeputySheriffBond_Details
//         if(frm.doc.deputyshreiff_bond == 1 ){
//              frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Deputy Sheriff Bond',
//                 filters: {
//                    bond_no: frm.doc.bond_no,
//                    workflow_state: "Approved"
//                 },
//                  fields: ['sheriff_name', 'bond_no', 'period_from', 'bond_value', 'description_of_contract', 'period_to'] 
//             },
//             callback: function(r) {
//                 console.log(r, "client details");
//                 // frm.set_df_property('bond_no', 'read_only', 1);
//               if (r.message && r.message.length > 0) {
//                    var message = r.message[0]; 
//                     frm.set_value('bond_period_from', message.period_from);
//                     frm.set_value('description', message.description_of_contract);
//                     frm.set_value('bond_period_to', message.period_to);
//                     frm.set_value('bond_value', message.bond_value);
//                     frm.set_value('client', message.sheriff_name); 
//                     frm.set_value('bondtype1', 'DEPUTY SHREIFF BOND');
//                 }
//             }
//         });
//         }
//     },
// // others bond selected fetch the bond holder from the bond application
// other_bonds(frm) {
//            if (frm.doc.deputyshreiff_bond === 1 && frm.doc.other_bonds === 1) {
//             frappe.msgprint('Please select only one type of bond.');
//             frm.set_value('deputyshreiff_bond', '0');
//             frm.set_value('other_bonds', '0');
//          }
//          var other_bonds = frm.doc.other_bonds;
        
//         if(other_bonds == 1){
            
//              var other_bonds = frm.doc.other_bonds;
       
//         // frm.call({
//         //     method: 'frappe.client.get_list',
//         //     args: {
//         //         doctype: 'Bond Application',
//         //         filters: {
//         //             workflow_state: "Approved"
//         //         },
//         //         fields: ['facility_name']
//         //     },
//         //     callback: function(response) {
//         //         console.log("facility_name received:", response);
//         //         let DataArray = response.message || [];
//         //         let FinalArray = DataArray.map(x => x.facility_name);
//         //         frm.set_df_property('bond_holder', 'options', FinalArray);
//         //         console.log("final", FinalArray);
//         //     },
//         //     error: function(xhr, textStatus, errorThrown) {
//         //         console.error("Error fetching approved bonds:", textStatus, errorThrown);
//         //     }
//         // });
        
//          frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//              doctype: 'Bond Application',
//               filters: {
//                     workflow_state: "Approved"  
//                 },
//           fields: ['facility_name'],
//     },
//     callback: function(response) {
//         console.log("facility_name received:", response);
//        let uniquedata = new Set(response.message.map(item => item.facility_name));
//        let FinalArray = Array.from(uniquedata);
//        frm.set_df_property('bond_holder', 'options', FinalArray.join('\n'));
//        console.log("final", FinalArray);
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching policy_holder:", textStatus, errorThrown);
//     }
// });

//         // frm.set_df_property('bond_no', 'read_only', 1);
//         // frm.set_df_property('bond_no', 'read_only', 0);
        
//         }
//         else{
//             let FinalArray = []
//             frm.set_df_property('bond_holder', 'options', FinalArray);
//         }
        
//         var other_bonds = frm.doc.other_bonds;
//         if (other_bonds === 0) {
//             // Clear all fields when 'other_bonds' is unchecked

//             frm.set_value('bond_holder', '');
//             frm.set_value('bond_no', '');
//             frm.set_value('bond_no', '');
//             frm.set_value('client', '');
//             frm.set_value('principal', '');
//             frm.set_value('description', '');
//             frm.set_value('bond_period_from', '');
//             frm.set_value('bond_period_to', '');
//             frm.set_value('bond_value', '');
//             frm.set_value('bondtype1', '');
        
//         }


//     },
// // deputy sheiffbond selected fetch the bond holder from the deputyshreiff_bond
// deputyshreiff_bond(frm) {
//             if (frm.doc.deputyshreiff_bond === 1 && frm.doc.other_bonds === 1) {
//             frappe.msgprint('Please select only one type of bond.');
//             frm.set_value('deputyshreiff_bond', '0');
//             frm.set_value('other_bonds', '0');
//          }
//         var deputyshreiff = frm.doc.deputyshreiff_bond;
//         if (deputyshreiff === 1) {
//     // Fetch details from deputyshreiff_bond 
//             //  frm.call({
//             //     method: 'frappe.client.get_list',
//             //     args: {
//             //         doctype: 'Deputy Sheriff Bond',  
//             //          filters: {
//             //         workflow_state: "Approved"
//             //     },
//             //         fields: ['sheriff_name']  
//             //     },
//             //     callback: function(response) {
//             //         console.log(response, 'Get the data')
//             //         if (response.message && response.message.length > 0) {
                        
//             //              let DataArray = response.message || [];
//             //              let FinalArray = DataArray.map(x => x.sheriff_name);
//             //              frm.set_df_property('bond_holder', 'options', FinalArray);
                     
                        
//             //         }
//             //     },
//             //     error: function(xhr, textStatus, errorThrown) {
//             //         console.error("Error fetching details from Deputy Shreiff Bond:", textStatus, errorThrown);
//             //     }
//             // });
            
//              frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//              doctype: 'Deputy Sheriff Bond',
//               filters: {
//                     workflow_state: "Approved" 
//                 },
//           fields: ['sheriff_name'],
//     },
//     callback: function(response) {
//         console.log("sheriff_name received:", response);
//         let uniquedata = new Set(response.message.map(item => item.sheriff_name));
//         let FinalArray = Array.from(uniquedata);
//         frm.set_df_property('bond_holder', 'options', FinalArray.join('\n'));
//         console.log("final", FinalArray);
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching policy_holder:", textStatus, errorThrown);
//     }
// });
            
//         } else {

//             let FinalArray = []
//             frm.set_df_property('bond_holder', 'options', FinalArray);
//             console.log("bond_holder",frm.doc.bond_holder2)
            
//              frm.set_value('bond_holder', '');
//             frm.set_value('bond_no', '');
//             frm.set_value('bond_period_from', '');
//             frm.set_value('description', '');
//             frm.set_value('bond_period_to', '');
//             frm.set_value('bond_value', '');
//         }
//     },
    
   

 

    
// });
