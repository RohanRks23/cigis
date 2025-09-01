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
//                         bond_holder2
//                          let DataArray = response.message || [];
//                          let FinalArray = DataArray.map(x => x.sheriff_name);
//                          frm.set_df_property('bond_holder2', 'options', FinalArray);
                     
                        
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
//                 frm.set_df_property('bond_holder2', 'options', FinalArray);
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
// function  prepare_invoices(frm) {
//     console.log("hii");
//     console.log('bondholder',frm.doc.bond_holder1)
//     if (frm.doc.bond_holder1) {
//         if (frm.doc.other_bonds === 1 && frm.doc.deputyshreiff_bond === 1) {
//             frappe.msgprint('Please select only one type of bond.');
//         } 
//         else if (frm.doc.other_bonds === 1) {
//             console.log('calling Api')
//             frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Bond Application',
//                     filters: {
//                         facility_name: frm.doc.bond_holder
//                     },
//                     fields: ['beci_ref_number', 'guarantee_amount', 'guarantee_fee','month', 'guarantee_fee_p', 'reinsurer', 'beci_commission_p', 'reinsurer_commissions', 'reinsurer_refnumber', 'portion_of_guarantee_guarantee_vat_p', 'portion_of_guarantee_to_beci', 'reinsurer_portion_of_guarantee_fee_p', 'beci_portion_of_gurantee_amount_p', 'beci_commission', 'beci_commission_p', 'vat', 'reinsurer_commissions', 'reinsurer_refnumber']
//                 },
//                 callback: function(r) {
//                     console.log(r, 'hello');
//                     let extensionData = r.message[0];
//                     // Check if bond_holder is defined and not empty
//                     if (frm.doc.bond_holder1) {
//                         frappe.model.with_doctype('Prepare Invoice', function() {
//                             var doc = frappe.model.get_new_doc('Prepare Invoice');
//                             doc.bond_holder = frm.doc.bond_holder1;
//                             doc.bond_no = frm.doc.bond_no1;
//                             doc.bondextentreq_date = frm.doc.bond_extnreq_date1;
//                             doc.client = frm.doc.client1;
//                             doc.principal = frm.doc.principal1;
//                             doc.project = frm.doc.project1;
//                             doc.description = frm.doc.description1;
//                             doc.bond_period_from = frm.doc.bond_period_from1;
//                             doc.bond_period_to = frm.doc.bond_period_to2;
//                             doc.bond_value = frm.doc.bond_value1;
//                             doc.extension_req_no = frm.doc.extension_req_no1;
//                             doc.bondtype1 = frm.doc.bond_type_2;
//                             doc.month = extensionData.month;
//                             doc.beci_ref_no = extensionData.beci_ref_number;
//                             doc.guarantee_amount = extensionData.guarantee_amount;
//                             doc.guarantee_fee = extensionData.guarantee_fee;
//                             doc.guarantee_fee1 = extensionData.guarantee_fee_p;
//                             doc.reinsure = extensionData.reinsurer;
//                             doc.portion_of_guarantee_amount_to_reinsurer = extensionData.portion_of_guarantee_guarantee_vat_p;
//                             doc.portion_of_guarantee_amount_to_beci = extensionData.portion_of_guarantee_to_beci;
//                             doc.portion_of_guarantee_fee_to_reinsurer = extensionData.portion_of_guarantee_guarantee_vat_p;
//                             doc.portion_of_guarantee_fee_to_beci = extensionData.portion_of_guarantee_to_beci;
//                             doc.beci_commission = extensionData.beci_commission;
//                             doc.beci_commission_ = extensionData.beci_commission_p;
//                             doc.vat = extensionData.vat;
//                             doc.total = extensionData.guarantee_fee_p;
//                             doc.reinsurer_ = extensionData.reinsurer_commissions;
//                             doc.reinsurer_ref_number = extensionData.reinsurer_refnumber;
//                             // Calculate vat1 based on vat and guarantee_fee_p
//                             doc.vat1 = ((extensionData.vat + extensionData.guarantee_fee_p) / 100).toFixed(2);
//                             doc.total_due_with_vat = (parseFloat(extensionData.guarantee_fee_p) + parseFloat(doc.vat1)).toFixed(2);
//                             console.log("total_due_with_vat:", doc.total_due_with_vat);
                            
//                             // Set other_bonds flag
//                             doc.other_bonds = frm.doc.other_bonds;
                            
//                             //Save the current document before navigating to the next doctype
//                             frappe.call({
//                                 method: 'frappe.client.insert',
//                                 args: {
//                                     doc: doc
//                                 },
//                                 callback: function(response) {
//                                     if (!response.exc) {
//                                         frappe.set_route('Form', 'Prepare Invoice', response.message.name);
//                                     }
//                                 }
//                             });
//                         });
//                     }
//                 }
//             });
//         }
    
//   else if (frm.doc.deputyshreiff_bond === 1) {
//     console.log('deputyshreiff_bond');
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             doctype: 'Deputy Sheriff Bond',
//             filters: {
//                 bond_no: frm.doc.beci_ref_no
//             },
           
//         },
//         callback: function(r) {
//             console.log(r, 'hello');
//             if (r.message && r.message.length > 0) {
//                 // let extensionData = r.message[0];
               
//                 // Check if bond_holder is defined and not empty
//                 if (frm.doc.bond_holder1) {
//                     frappe.model.with_doctype('Prepare Invoice', function() {
//                         var doc = frappe.model.get_new_doc('Prepare Invoice');
//                         doc.bond_holder = frm.doc.bond_holder1;
//                         doc.bond_no = frm.doc.bond_no1;
//                         doc.bondextentreq_date = frm.doc.bond_extnreq_date1;
//                         doc.client = frm.doc.client1;
//                         doc.principal = frm.doc.principal1;
//                         doc.project = frm.doc.project1;
//                         doc.description = frm.doc.description1;
//                         doc.bond_period_from = frm.doc.bond_period_from1;
//                         doc.bond_period_to = frm.doc.bond_period_to2;
//                         doc.bond_value = frm.doc.bond_value1;
//                         doc.extension_req_no = frm.doc.extension_req_no1;
//                         doc.bondtype1 = frm.doc.bond_type_2;
                        

//                         // Fetch data from another doctype
//                         frappe.call({
//                             method: 'frappe.client.get_list',
//                             args: {
//                                 doctype: 'Deputy Sheriff Prepare Invoice',
//                                 filters: {
//                                     ecgc_refno: frm.doc.beci_ref_no
//                                 },
//                                 fields: ['ecgc_refno', 'guarantee_amount', 'month','guarantee_fee_rate','reinsure','date','reinsurer_ref_number','reinsurer_','portion_of_guarantee_amount_to_reinsurer','portion_of_guarantee_fee_to_reinsurer','ecgc_comission_','broker','broker_','broker_commission','total_due_with_out_vat','vat_','vat','total_due','invoice_date','bond_period_to','guarantee_fee','ecgc_','portion_of_guarantee_amount_to_ecgc','portion_of_guarantee_fee_to_ecgc','ecgc_commission']
//                             },
//                             callback: function(response) {
//                                 if (response.message && response.message.length > 0) {
//                                     console.log(response.message,"response data")
//                                     let prepareInvoiceData = response.message[0];
//                                     console.log(prepareInvoiceData,'deputy shireff prepare invoice data')
//                                     doc.beci_ref_no = prepareInvoiceData.ecgc_refno;
//                                     doc.guarantee_amount = prepareInvoiceData.guarantee_amount;
//                                     doc.month = prepareInvoiceData.month;
//                                     doc.guarantee_fee= prepareInvoiceData.guarantee_fee_rate;
//                                     doc.reinsure = prepareInvoiceData.reinsure;
//                                     doc.bond_period_from =prepareInvoiceData.date;
//                                     doc.reinsurer_ref_number =prepareInvoiceData.reinsurer_ref_number;
//                                     doc.reinsurer_ =prepareInvoiceData.reinsurer_;
//                                     doc.portion_of_guarantee_amount_to_reinsurer =prepareInvoiceData.portion_of_guarantee_amount_to_reinsurer;
//                                     doc.portion_of_guarantee_fee_to_reinsurer   = prepareInvoiceData.portion_of_guarantee_fee_to_reinsurer;
//                                     doc.beci_commission_ =prepareInvoiceData.ecgc_comission_;
//                                     doc.broker =prepareInvoiceData.broker;
//                                     doc.broker_ =prepareInvoiceData.broker_;
//                                     doc.broker_commission =prepareInvoiceData.broker_commission;
//                                     doc.total  = prepareInvoiceData.total_due_with_out_vat;
//                                     doc.vat = prepareInvoiceData.vat_;
//                                     doc.vat1 = prepareInvoiceData.vat;
//                                     doc.total_due_with_vat =prepareInvoiceData.total_due;
//                                     doc.invoice_date =prepareInvoiceData.invoice_date;
//                                     doc.bond_period_to =prepareInvoiceData.bond_period_to;
//                                     doc.guarantee_fee1 =prepareInvoiceData.guarantee_fee;
//                                     doc.beci_ =prepareInvoiceData.ecgc_;
//                                     doc.portion_of_guarantee_amount_to_beci =prepareInvoiceData.portion_of_guarantee_amount_to_ecgc;
//                                     doc.portion_of_guarantee_fee_to_beci =prepareInvoiceData.portion_of_guarantee_fee_to_ecgc;
//                                     doc.beci_commission = prepareInvoiceData.ecgc_commission;
//                                     doc.deputy_shreiff_bond = frm.doc.deputyshreiff_bond;
//                                 } else {
//                                     console.log("No Deputy Sheriff Prepare Invoice found for the given criteria.");
//                                 }

//                                 // Save the current document before navigating to the next doctype
//                                 frappe.call({
//                                     method: 'frappe.client.insert',
//                                     args: {
//                                         doc: doc
//                                     },
//                                     callback: function(response) {
//                                         if (!response.exc) {
//                                             frappe.set_route('Form', 'Prepare Invoice', response.message.name);
//                                         }
//                                     }
//                                 });
//                             }
//                         });
//                     });
//                 }
//             } else {
//                 console.log("No Deputy Sheriff Bond found for the given sheriff name.");
//             }
//         }
//     });
// }
// }

// }





// frappe.ui.form.on('Bond Extensions', {
//     // bond_no:function(frm){
//     // var bondno = frm.doc.bond_no;
//     // frm.set_value('bond_no1',bondno);
//     //   console.log(bond_no,"sudha")
//     // console.log(frm.doc.bond_no1,"sudha1")
//     // },
//     bond_extnreq_date:function(frm){
//     var bondextnreqdate = frm.doc.bond_extnreq_date;
//     frm.set_value('bond_extnreq_date1',bondextnreqdate);
//     },
//     client:function(frm){
//     var client = frm.doc.client;
//     frm.set_value('client1',client);
//     },
//     principal:function(frm){
//     var principal = frm.doc.principal;
//     frm.set_value('principal1',principal);
//     },
//     project:function(frm){
//     var project = frm.doc.project;
//     frm.set_value('project1',project);
//     },
//     description:function(frm){
//      var description = frm.doc.description;
//     frm.set_value('description1',description);
//     },
//     bond_period_from:function(frm){
//      var bond_period_from = frm.doc.bond_period_from;
//     frm.set_value('bond_period_from1',bond_period_from);
//     },
//     bond_period_to:function(frm){
//      var bond_period_to = frm.doc.bond_period_to;
//     frm.set_value('bond_period_to2',bond_period_to);
//     },
//     bond_value:function(frm){
//      var bond_value = frm.doc.bond_value;
//     frm.set_value('bond_value1',bond_value);
//     },
//     extension_req_no:function(frm){
//      var extension_req_no = frm.doc.extension_req_no;
//     frm.set_value('extension_req_no1',extension_req_no);
//     },
//     bond_type_1:function(frm){
//      var bond_type_1 = frm.doc.bond_type_1;
//     frm.set_value('bond_type_2',bond_type_1);
//     },
    
// refresh(frm) {
   
//           frm.fields_dict.bond_value.$input.css("text-align","right");
//           frm.fields_dict.extension_req_no.$input.css("text-align","right");
//           frm.fields_dict.new_bond_value.$input.css("text-align","right");
//           frm.fields_dict.new_premium_rate.$input.css("text-align","right");
//           frm.fields_dict.bond_value1.$input.css("text-align","right");
//           frm.fields_dict.extension_req_no1.$input.css("text-align","right")
        
//          if (frm.doc.workflow_state === 'Approved') {
//              frm.add_custom_button(__('Prepare Invoice'), function() {
//             prepare_invoices(frm)

//         }).addClass("btn-primary");
//         }


// //      frm.fields_dict['deputyshreiff_bond'].df.onchange = () => {
// //         var bondType = frm.doc.deputyshreiff_bond;
// //         console.log(bondType,"bondType")
// //         if (deputyshreiff_bond === 'deputyshreiff_bond1') {
// //         frm.set_current_tab('deputyshreiff_bond1');
// //           console.log(deputyshreiff_bond1,"deputyshreiff_bond1")
// //       } else {
// //         frm.set_current_tab('other_bonds');
// //       }
// // };
         
// //  frm.fields_dict['deputyshreiff_bond'].df.onchange = () => {
// //             console.log("deputyshreiff_bond onchange triggered");
// //             var value = frm.doc.deputyshreiff_bond;
// //             console.log("value:", value);
// //             frm.doc.deputyshreiff_bond1 = value;
// //             frm.refresh_field('deputyshreiff_bond1');
// //         };

//         // frm.fields_dict['other_bonds'].df.onchange = () => {
//         //     console.log("other_bonds onchange triggered");
//         //     var value = frm.doc.other_bonds;
//         //     console.log("value:", value);
//         //     frm.doc.other_bonds1 = value;
//         //     frm.refresh_field('other_bonds1');
//         // };

//         // frm.fields_dict['bond_holder2'].df.onchange = () => {
//         //     console.log("bond_holder2 onchange triggered");
//         //     var value = frm.doc.bond_holder2;
//         //     console.log("value:", value);
//         //     frm.doc.bond_holder1 = value;
//         //     frm.refresh_field('bond_holder1');
//         // };

//         // Add more fields and their event listeners below
//         // frm.fields_dict['bond_no'].df.onchange = () => {
//         //     console.log("bond_no onchange triggered");
//         //     var value = frm.doc.bond_no;
//         //     console.log("value:", value);
//         //     frm.doc.bond_no1 = value;
//         //     frm.refresh_field('bond_no1');
         
//         // };

//         frm.fields_dict['deputyshreiff_bond'].df.onchange = handleFieldChange(frm, 'deputyshreiff_bond', 'deputyshreiff_bond1');
//         frm.fields_dict['other_bonds'].df.onchange = handleFieldChange(frm, 'other_bonds', 'other_bonds1');
//         frm.fields_dict['bond_holder2'].df.onchange = handleFieldChange(frm, 'bond_holder2', 'bond_holder1');
       

 


// // frm.refresh_fields(['bond_type_2',  'bond_no1']);
// // console.log("Fields refreshed:", ['bond_type_2',  'bond_no1']);

//     // if (frm.doc.bond_no !== "") {
//     //     frm.set_df_property('bond_no', 'read_only', 0);
//     //     frm.set_df_property('bond_no2', 'read_only', 1);
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

// // Define the functions properly within the object
// bond_holder2: function(frm) {
   
//     frm.set_value('bond_no', '');
//     frm.set_value('bond_extnreq_date', '');
//     frm.set_value('client', '');
//     frm.set_value('principal', '');
//     frm.set_value('project', '');
//     frm.set_value('description', '');
//     frm.set_value('bond_period_from', '');
//     frm.set_value('bond_period_to', '');
//     frm.set_value('bond_value', '');
//     frm.set_value('extension_req_no', '');
//     frm.set_value('bond_type_1', '');
//     frm.set_value('new_bond_value', '');
    
//     if (frm.doc.other_bonds == 1) {
//         frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 filters: {
//                     facility_name: frm.doc.bond_holder2,
//                     workflow_state: "Approved"
//                 },
//                 fields: ['bond_no']
//             },
//             callback: function(response) {
//                 console.log(response, 'Get the data');
//                 if (response.message && response.message.length > 0) {
//                     let DataArray = response.message;
//                     console.log(response.message[0].bond_no,"dattaata");
//                     let FinalArray = DataArray.map(x => x.bond_no);
//                     frm.set_df_property('bond_no', 'options', FinalArray);
//                 }
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching details from Bond Application:", textStatus, errorThrown);
//             }
//         });
//     }

//     if (frm.doc.deputyshreiff_bond == 1) {
//         frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Deputy Sheriff Bond',
//                 filters: {
//                     sheriff_name: frm.doc.bond_holder2,
//                     workflow_state: "Approved"
//                 },
//                 fields: ['bond_no']
//             },
//             callback: function(response) {
//                 console.log(response, 'Get the data');
//                 if (response.message && response.message.length > 0) {
//                     let DataArray = response.message;
//                     let FinalArray = DataArray.map(x => x.bond_no);
//                     frm.set_df_property('bond_no', 'options', FinalArray);
//                 }
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("Error fetching details from Bond Application:", textStatus, errorThrown);
//             }
//         });
//     }
// },

// // Define the bond_no2 function
// bond_no(frm) {
    
//     var bondno = frm.doc.bond_no;
//     frm.set_value('bond_no1',bondno);
//      console.log(frm.doc.bond_no1,"bondno1")
    
//     console.log(frm.doc.bond_holder2, "frm.doc.bond_holder2");

//     if (frm.doc.other_bonds == 1) {
//         // Fetch data from Bond Application
//         frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 filters: {
//                     bond_no: frm.doc.bond_no,
//                     workflow_state: "Approved"
//                 },
//                 fields: [
//                     'facility_name', 'bond_no', 'reg_date', 'bond_in_favour', 
//                     'project', 'description_contract', 'period_from', 'to', 
//                     'amount_in_pula', 'reg_no', 'bond_type'
//                 ],
//                 limit_page_length: 100
//             },
//             callback: function(response) {
//                 console.log(response, "client details");
//                 // frm.set_df_property('bond_no2', 'read_only', 1);

//                 if (response.message && response.message.length > 0) {
//                     let bondDetails = response.message[0];
//                     frm.set_value('bond_extnreq_date', bondDetails.reg_date);
//                     frm.set_value('client', bondDetails.facility_name);
//                     frm.set_value('principal', bondDetails.bond_in_favour);
//                     frm.set_value('project', bondDetails.project);
//                     frm.set_value('description', bondDetails.description_contract);
//                     frm.set_value('bond_period_from', bondDetails.period_from);
//                     frm.set_value('bond_period_to', bondDetails.to);
//                     frm.set_value('bond_value', bondDetails.amount_in_pula);
//                     frm.set_value('extension_req_no', bondDetails.reg_no);
//                     frm.set_value('bond_type_1', bondDetails.bond_type);
//                     frm.set_value('new_bond_value', bondDetails.amount_in_pula);
//                 }
//             }
//         });
//     }

//     if (frm.doc.deputyshreiff_bond == 1) {
//         // Fetch data from Deputy Sheriff Bond
//         frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Deputy Sheriff Bond',
//                 filters: {
//                     sheriff_name: frm.doc.bond_holder2,
//                     workflow_state: "Approved"
//                 },
//                 fields: ['sheriff_name', 'bond_no', 'period_from', 'bond_value', 'description_of_contract', 'period_to']
//             },
//             callback: function(r) {
//                 console.log(r, "client details");
//                 // frm.set_df_property('bond_no2', 'read_only', 1);
//                 if (r.message && r.message.length > 0) {
//                     var message = r.message[0];
//                     frm.set_value('bond_period_from', message.period_from);
//                     frm.set_value('description', message.description_of_contract);
//                     frm.set_value('bond_period_to', message.period_to);
//                     frm.set_value('bond_value', message.bond_value);
//                     frm.set_value('new_bond_value', message.bond_value);
//                     frm.set_value('client', message.sheriff_name);
//                     frm.set_value('principal', message.sheriff_name);
//                     frm.set_value('bond_type_1', 'DEPUTY SHERIFF BOND');
//                 }
//             }
//         });
//     }
// },

// // others bond selected fetch the bond holder from the bond application
//     other_bonds(frm) {
//          if (frm.doc.deputyshreiff_bond === 1 && frm.doc.other_bonds === 1) {
//             frappe.msgprint('Please select only one type of bond.');
//            frm.set_value('deputyshreiff_bond', '0');
//            frm.set_value('other_bonds', '0');
//          }
//          var other_bonds = frm.doc.other_bonds;
        
//        if(other_bonds == 1){
            
//              var other_bonds = frm.doc.other_bonds;

            
       
//         // frm.call({
//         //     method: 'frappe.client.get_list',
//         //     args: {
//         //         doctype: 'Bond Application',
//         //         filters: {
//         //             workflow_state: "Approved"
//         //         },
//         //         fields: ['facility_name','bond_no']
//         //     },
//         //     callback: function(response) {
//         //         console.log("facility_name received:", response);
//         //         let DataArray = response.message || [];
//         //         let FinalArray = DataArray.map((x,index) => x.facility_name + "-" + x.bond_no.slice(-4));
//         //             FullFinalArray = DataArray.map((x,index) => ({'facility_name':x.facility_name,'bond_no':x.bond_no}));

//         //         frm.set_df_property('bond_holder2', 'options', FinalArray);
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
//        frm.set_df_property('bond_holder2', 'options', FinalArray);
//        console.log("final", FinalArray);
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching policy_holder:", textStatus, errorThrown);
//     }
// });

//         // frm.set_df_property('bond_no', 'read_only', 1);
//         // frm.set_df_property('bond_no2', 'read_only', 0);
        
//         }
//         else{
//             let FinalArray = []
//             frm.set_df_property('bond_holder2', 'options', FinalArray);
//         }
        
//         var other_bonds = frm.doc.other_bonds;
//         if (other_bonds === 0) {
//             // Clear all fields when 'other_bonds' is unchecked

//             frm.set_value('bond_holder2', '');
//             frm.set_value('bond_no', '');
//             frm.set_value('bond_extnreq_date', '');
//             frm.set_value('client', '');
//             frm.set_value('principal', '');
//             frm.set_value('project', '');
//             frm.set_value('description', '');
//             frm.set_value('bond_period_from', '');
//             frm.set_value('bond_period_to', '');
//             frm.set_value('bond_value', '');
//             frm.set_value('extension_req_no', '');
//             frm.set_value('bond_type_1', '');
//             frm.set_value('new_bond_value', '');
//         }


//     },
// // deputy sheiffbond selected fetch the bond holder from the deputyshreiff_bond
//      deputyshreiff_bond(frm) {
//           if (frm.doc.deputyshreiff_bond === 1 && frm.doc.other_bonds === 1) {
//             frappe.msgprint('Please select only one type of bond.');
//             frm.set_value('deputyshreiff_bond', '0');
//             frm.set_value('other_bonds', '0');
//           }
//         var deputyshreiff = frm.doc.deputyshreiff_bond;
//         if (deputyshreiff === 1) {
//     // Fetch details from deputyshreiff_bond 
//             // frm.call({
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
//             //              frm.set_df_property('bond_holder2', 'options', FinalArray);
                     
                        
//             //         }
//             //     },
//             //     error: function(xhr, textStatus, errorThrown) {
//             //         console.error("Error fetching details from Deputy Shreiff Bond:", textStatus, errorThrown);
//             //     }
//             // });
            
//             frappe.call({
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
//         frm.set_df_property('bond_holder2', 'options', FinalArray);
//         console.log("final", FinalArray);
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("Error fetching policy_holder:", textStatus, errorThrown);
//     }
// });
            
//         } else {

//             let FinalArray = []
//             frm.set_df_property('bond_holder2', 'options', FinalArray);
//             console.log("bond_holder2",frm.doc.bond_holder2)
            
//              frm.set_value('bond_holder2', '');
//             frm.set_value('bond_no', '');
//             frm.set_value('bond_period_from', '');
//             frm.set_value('description', '');
//             frm.set_value('bond_period_to', '');
//             frm.set_value('bond_value', '');
//             frm.set_value('client', '');
//             frm.set_value('principal', '');
//         }
//     },
    
   

 

    
// });






