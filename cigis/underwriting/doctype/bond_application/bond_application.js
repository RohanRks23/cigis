// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt
// frappe.ui.form.on('Bond Application', {
//    refresh: function (frm) {
//        frm.set_df_property('table','cannot_add_rows', true);
// frm.fields_dict.exchange_rate.$input.css("text-align", "right");
// frm.fields_dict.amount_in_pula.$input.css("text-align", "right");
// frm.fields_dict.foreign_currency_amount.$input.css("text-align", "right");
// frm.fields_dict.risk_percentage.$input.css("text-align", "right");
// frm.fields_dict.beci_ref_number.$input.css("text-align", "right");
// frm.fields_dict.guarantee_amount.$input.css("text-align", "right");
// frm.fields_dict.total_beci_exposure_onincl_this_gurantee.$input.css("text-align", "right");
// frm.fields_dict.total_in_excess_of_beci_exposure_limit_per_insured.$input.css("text-align", "right");
// frm.fields_dict.excess_insurable_by_reisurer.$input.css("text-align", "right");
// frm.fields_dict.guarantee_fee.$input.css("text-align", "right");
// frm.fields_dict.guarantee_fee_p.$input.css("text-align", "right");
// frm.fields_dict.portion_of_guarantee_guarantee_vat_p.$input.css("text-align", "right");
// frm.fields_dict.reinsurer_portion_of_guarantee_fee_p.$input.css("text-align", "right");
// frm.fields_dict.total_amount_payable_to_beci.$input.css("text-align", "right");
// frm.fields_dict.reinsurer_portion_of_guarantee_amount.$input.css("text-align", "right");
// frm.fields_dict.beci_commission_p.$input.css("text-align", "right");
// frm.fields_dict.reinsurer_commissions.$input.css("text-align", "right");
// frm.fields_dict.other_insurer_commissions.$input.css("text-align", "right");
// frm.fields_dict.total_amount_payable_to_reinsurer.$input.css("text-align", "right");
// frm.fields_dict.reinsurer_refnumber.$input.css("text-align", "right");
// frm.fields_dict.less_beci_exposure_limit_per_insured.$input.css("text-align", "right");
// frm.fields_dict.amount_insurable_by_reinsurer_beci.$input.css("text-align", "right");
// frm.fields_dict.month.$input.css("text-align", "right");
// frm.fields_dict.portion_of_guarantee_to_beci.$input.css("text-align", "right");
// frm.fields_dict.beci_portion_of_gurantee_fee.$input.css("text-align", "right");

// frm.fields_dict.beci_portion_of_gurantee_amount_p.$input.css("text-align", "right");
// frm.fields_dict.beci_commission.$input.css("text-align", "right");
// frm.fields_dict.reinsurer_commission.$input.css("text-align", "right");
// frm.fields_dict.other_insurer_commission.$input.css("text-align", "right");


//        var workflowState = frm.doc.workflow_state;

//        // Create a custom button for "Bond Invoice" if the workflow state is "Submitted"
//        if (workflowState === "Approved") {
//            frm.add_custom_button(__('Prepare Invoice'), function() {
               
//                frappe.new_doc('Bond Invoice')
//                    frappe.route_options = {
//                    bond_no: frm.doc.bond_no,
//                }
               
//                // Enable fields in the Bond Invoice form
//          frappe.ui.form.on('Bond Invoice', {
//            refresh: function(frm) {
//                // Enable the fields you want here
//            //   frm.set_df_property('bond_invoice', 'hidden', 1); // hide field
//            //   frm.set_df_property('ecgc_ref_no', 'hidden', 1);
//            //   frm.set_df_property('sheriff_name', 'hidden', 1);
//            //   frm.set_df_property('bond_guarantee_amount', 'hidden', 1);
//            //   frm.set_df_property('bond_period_from', 'hidden', 1);
//            //   frm.set_df_property('bond_month', 'hidden', 1);
//            //   frm.set_df_property('guarantee_fee_rate', 'hidden', 1);
//            //   frm.set_df_property('reinsure', 'hidden', 1);
//            //   frm.set_df_property('reinsurern_refnumber', 'hidden', 1);
//            //   frm.set_df_property('reinsurer_per', 'hidden', 1);
//            //   frm.set_df_property('portion_of_guarantee_amount_to_reinsurer', 'hidden', 1);
//            //   frm.set_df_property('portion_of_guarantee_fee_to_reinsurer', 'hidden', 1);
//            //   frm.set_df_property('ecgc_commission_', 'hidden', 1);
//            //   frm.set_df_property('bond_broker', 'hidden', 1);
//            //   frm.set_df_property('broker_', 'hidden', 1);
//            //   frm.set_df_property('total_duewith_out_vat', 'hidden', 1);
//            //   frm.set_df_property('vat_', 'hidden', 1);
//            //   frm.set_df_property('v_at', 'hidden', 1);
              
//            //   frm.set_df_property('bond_total_due', 'hidden', 1);
//            //   frm.set_df_property('bond_invoice_date', 'hidden', 1);
//            //   frm.set_df_property('bond_period_to', 'hidden', 1);
//            //   frm.set_df_property('guarantee_fee', 'hidden', 1);
//            //   frm.set_df_property('ecgc', 'hidden', 1);
//            //   frm.set_df_property('portion_of_guarantee_to_amount_ecgc', 'hidden', 1);
//            //   frm.set_df_property('portion_of_guarante_fee_to_ecgc', 'hidden', 1);
//            //   frm.set_df_property('ecgc_commission', 'hidden', 1);
//            //   frm.set_df_property('broker_commission', 'hidden', 1);
//            //   frm.set_df_property('top_button', 'hidden', 1);
              
//            frappe.call({
//            method: 'frappe.client.get_list',
//            args: {
//                doctype: 'Bond Application',
//                filters: {
//                    bond_no: frm.doc.bond_no
//                },
//                fields: ['bond_no','broker','facility_name','bond_type','period_from','bond_subtype','month','reinsurer','beci_commission_p','reinsurer_commission','reinsurer_commissions','other_insurer_commission','other_insurer_commissions','beci_commission','to','bond_in_favour','demand_date','guarantee_amount','beci_portion_of_gurantee_fee','reinsurer_refnumber','reinsurer_portion_of_guarantee_fee_p','portion_of_guarantee_guarantee_vat_p','portion_of_guarantee_to_beci','guarantee_fee','vat']
//            },
//            callback: function(r) {
//                if (!r.exc && r.message && r.message.length > 0) {
//                    var bondApp = r.message[0];
//                    frm.set_value('facility_name', bondApp.facility_name); 
//                    frm.set_value('bond_invoice_no', bondApp.bond_no); 
//                    frm.set_value('bond_type', bondApp.bond_type);
//                    frm.set_value('period_from', bondApp.period_from);
//                    frm.set_value('bond_subtype', bondApp.bond_subtype);
//                    frm.set_value('month', bondApp.month);
//                    frm.set_value('reinsurer', bondApp.reinsurer); 
//                    frm.set_value('beci_commission_p', bondApp.beci_commission_p);
//                    frm.set_value('reinsurer_commissions', bondApp.reinsurer_commissions);
//                    frm.set_value('other_insurer_commissions', bondApp.other_insurer_commissions);
//                    frm.set_value('beci_commission', bondApp.beci_commission);
//                    frm.set_value('to', bondApp.to); 
//                    frm.set_value('bond_in_favour', bondApp.bond_in_favour);
//                    frm.set_value('demand_date', bondApp.demand_date);
//                    frm.set_value('guarantee_amount', bondApp.guarantee_amount);
//                    frm.set_value('beci_portion_of_gurantee_amount_p', bondApp.beci_portion_of_gurantee_fee);
//                    frm.set_value('reinsurer_refnumber', bondApp.reinsurer_refnumber);
//                    frm.set_value('reinsurer1', bondApp.portion_of_guarantee_guarantee_vat_p);
//                    frm.set_value('premium_p', bondApp.beci_portion_of_gurantee_fee); 
//                    frm.set_value('beci', bondApp.portion_of_guarantee_to_beci);
//                    frm.set_value('premium_rate', bondApp.guarantee_fee);
//                    frm.set_value('vat', bondApp.vat);
//                    frm.set_value('reinsurer_commission', bondApp.reinsurer_commission);
//                    frm.set_value('portion_of_guarantee_guarantee_vat_p', bondApp.reinsurer_portion_of_guarantee_fee_p);
//                    frm.set_value('other_insurer_commission', bondApp.other_insurer_commission);
//                    frm.set_value('total_due_without_vat', bondApp.beci_portion_of_gurantee_fee);
//                    frm.set_value('broker1', bondApp.broker);
                   
                  
//                } else {
//                    console.error("Error occurred:", r.exc);
//                }
//            }
//        });   
   
              
//            }
//        });
                               
              
                               
                               
                               
//                console.log("Bond Invoice clicked!");
//            }).addClass("btn-primary");
//        }
// },


//    onload: function (frm) {
       
       
//        frappe.call({
//            method: 'frappe.client.get_list',
//            args: {
//                doctype: 'Bond Facility',
//                filters: {
//                    workflow_state: "Approved"
//                },
//                fields: ['client_name'],
//                limit_page_length: 100 
//            },
//            callback: function(response) {
//                console.log("client_name received:", response);
//                let DataArray = []
//                DataArray = response.message;
//                let FinalArray = [];

//                for (let x of DataArray) {
//                    console.log(x.client_name)
//                    FinalArray.push(x.client_name)

//                }
//                frm.set_df_property('facility_name', 'options', FinalArray);
//                console.log("final", FinalArray)

//            },
//            error: function(xhr, textStatus, errorThrown) {
//                console.error("Error fetching approved bonds:", textStatus, errorThrown);
//            }
//        });
      
//        if (!frm.doc.bond_no) {
//            generateNumber(frm);
//        }
       
  
       
//    frappe.call({
//       method: 'frappe.client.get_list',
//       args: {
//          doctype: 'VAT',
//          fields: ['vat'],
//       },
//    callback: function (response) {
//        console.log(response, "client short name");
//        if (!response.exc) {
//            var data = response.message;
//            if (data && data.length > 0) {
//                frm.set_value('vat', data[0].vat);
//            } else {
//                console.error("VAT document not found for the given filter.");
//            }
//        } else {
//            console.error("Error occurred:", response.exc);
//        }
//    }
// });



       


//    },
   


//    facility_name: function(frm) {
       
//        frappe.call({
//         method: 'frappe.client.get',
//         args: {
//            doctype: 'Bond Facility Quotation Acceptance',
//            filters: {
//                name1: frm.doc.facility_name
           
//             },
//          fields: ['net_facility_amount','name1']
//        },
//      callback: function (r) {
//                console.log(r, "client details_Bomd");

//                if (!r.exc) {
//                    if (r.message) {
//                        frm.set_value('total_facility_amt', r.message.net_facility_amount);
//                // frm.refresh();
//            }
//        } else {
//            console.error("Error occurred:", r.exc);
//        }
//    }
// });

//        frappe.call({
//        method: 'frappe.client.get',
//         args: {
//            doctype: 'Security',
//            filters: {
//                name1: frm.doc.facility_name,
//             },
//          fields: ['total_security_registered','client']
//        },
//      callback: function (r) {
//                console.log(r, "client details");

//                if (!r.exc) {
//                    if (r.message) {
//                        frm.set_value('total_security_amt', r.message.total_security_registered);
//                // frm.refresh();
//            }
//        } else {
//            console.error("Error occurred:", r.exc);
//        }
//    }
// });
// //-----------facility names filtering
//        frappe.call({
//            method: 'frappe.client.get_list',
//            args: {
//                doctype: 'Bond Facility',
//                filters: {
//                    client_name: frm.doc.facility_name
//                },
//                fields: ['facility_no', 'status1','reg_no','estd_date','broker']
//            },
//            callback: function(response) {
//                console.log("Bond Facility response:", response);
//                if (response.message && response.message.length > 0) {
//                    var data_from_proposals = response.message[0];

//                    // Populate fields if data is found
//                    frm.set_value('status', data_from_proposals.status1 || '');
//                    frm.set_value('facility_no', data_from_proposals.facility_no || '');
//                    frm.set_value('reg_no', data_from_proposals.reg_no || '');
//                    frm.set_value('reg_date', data_from_proposals.estd_date || '');
//                     frm.set_value('broker', data_from_proposals.broker || '');
//                } else {
//                    // Clear fields if no matching record found
//                    frm.set_value('status', '');
//                    frm.set_value('facility_no', '');
//                    frm.set_value('reg_no', '');
//                    frm.set_value('reg_date', '');
//                    frm.set_value('broker', '');
                   
//                    frappe.msgprint('No matching record found in Bond Facility.');
//                }
//            },
//            error: function(err) {
//                console.error(err);
//                frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//            }
//        });
       
       
//        var facilityName = frm.doc.facility_name;

//        // Check if facility name is empty
//        if (facilityName) {
//            // Make API call to fetch data only if facility name is entered
//            fetchBondInFavourData(frm, facilityName);
//        } else {
//            // Clear table if facility name is empty
//            frm.clear_table('table');
//        }
   


  


//    },
   
   
   
   
   
   
//    vat: function(frm){
//        calculatetotalbeci_Amount(frm);
//    },
   
   
// //     exchange_rate: function(frm){
// //         calculatetotal_Amount(frm);
   
// // },

// //     foreign_currency_amount: function(frm){
// //     calculatetotal_Amount(frm);
// // },


// //Calculate balanced facility Amount

//    // balanced_facilty_amt: function(frm){
       
//    //     calculatefacilityamt(frm);
//    // },
   
//    // balanced_security_amt:function(frm){
   
//    //     calculatesecurityamt(frm);
//    // },
   
// //     utilized_facilty_amt:function(frm){
// //         // calculatetotal_bond_value(frm);
// //         calculatefacilityamt(frm);
       
// //         // calculateUtilizedfacilityAmount(frm);
       
   
// // },
    
//    // utilized_security_amt:function(frm){
//    //     calculatetotal_security_value(frm);
//    //     calculatesecurityamt(frm);
//    // },
   
//    // amount_in_pula: function(frm){
//    //     // calculatetotal_bond_value(frm);
//    // },
   
//    period_from:function(frm){
//        var periodfrom = frm.doc.period_from;
//        frm.set_value('premium_charged_for_period_of',periodfrom);
       
//    },
   
//    to:function(frm){
//        var to = frm.doc.to;
//        frm.set_value('to_',to);
       
//    },

//    add_new: function (frm) {
//        frappe.new_doc('Company-Details');
//    },
   
//    new_insurer:function(frm){
//       frappe.new_doc('Company-Details'); 
//    },
   
//    new:function(frm){
//         frappe.new_doc('Company-Details');
//    },
   
//    calculate_security:function(frm){
//        frappe.new_doc('Security Calculation');
//          frappe.route_options = {
//                    facility_no: frm.doc.facility_no,
//                    bond_no: frm.doc.bond_no,
//                    currency_code: frm.doc.currency_code,
//                }
//    },


//    bond_type: function(frm) {
//    var bondType = frm.doc.bond_type;

//    frm.set_df_property('bond_subtype', 'options', ['Select']);

//    if (bondType === 'CONSTRUCTION BOND') {
//        frm.set_df_property('bond_subtype', 'options', [
//            'Performance Bond',
//            'Advance Payment Bond',
//            'Tender Bond',
//            'Retention Bond',
//            'Payment Guarantee',
//            'Payment Bond'
//        ]);
//        msgprint("Please select Bond sub type.");
//    } else if (bondType === 'CUSTOMS BONDS') {
//        frm.set_df_property('bond_subtype', 'options', [
//            'Vat Deferral',
//            'Temporary Importation',
//            'Bonded Warehouse',
//            'Clearing Agent'
//        ]);
//        msgprint("Please select Bond sub type.");
//    }
// },

//    currency_code: function(frm) {
//    var currencyCode = frm.doc.currency_code;

//    // Regular expression to match any string of alphabets
//    var currencyRegex = /^[A-Za-z]+$/;

//    if (!currencyRegex.test(currencyCode)) {
//        frappe.msgprint(__("Please enter a valid currency code (Pula,USD)."));
//        frm.set_value('currency_code', '');
//    }
   
   
   
   
   
// },


//    //Calculation of Months
//    premium_charged_for_period_of: function(frm) {
//        calculateMonths(frm);
//    },
   
//    to_: function(frm) {
//        calculateMonths(frm);
//    },
   
   
//  //Calculation of Gaurantee fee and ReinsurePortion og Gurantee amount
//   month: function(frm) {
//        calculateTotal(frm);
//    },
//    guarantee_fee: function(frm) {
//        calculateTotal(frm);
//    },
   
//    guarantee_amount: function(frm) {
//        calculateTotal(frm);
//        calculateReinsurePortionofguaranteeamount(frm);
//        calculateBCIPortionofGuranteeAmount(frm);
//        calculatetotalbeci_Amount(frm);
       
//    },
    

// //Calculation of Portion of Gurantee to BECI % and Reinsure Portion of Guarantee Fee and ReinsurePortion og Gurantee amount
//  portion_of_guarantee_guarantee_vat_p: function(frm) {
//        calculatePortionOfGurantee(frm);
//        calculateReinsureportionofGurantee(frm);
//        calculateReinsurePortionofguaranteeamount(frm);
       
//    },

// //Calculation of BECI Portion of Guarantee Fee and Reinsure Portion of Guarantee Fee
// guarantee_fee_p: function(frm) {
//        calculateBECIportionofGurantee(frm);
//        calculateReinsureportionofGurantee(frm);
//        calculateOtherInsureCommission(frm);
//    },
// portion_of_guarantee_to_beci: function(frm) {
//        calculateBECIportionofGurantee(frm);
//        calculateBCIPortionofGuranteeAmount(frm);
//    },

// //Calculation of Reinsure Commission
// beci_portion_of_gurantee_fee: function(frm) {
//        calculateReinsureCommission(frm);
//    },
// reinsurer_commissions: function(frm) {
//        calculateReinsureCommission(frm);
//    },

// //Calculation of BECI Commission
// reinsurer_portion_of_guarantee_fee_p: function(frm) {
//        calculateBCICommission(frm);
//        calculateTotalAmountPayableToReinsure(frm) ;
//    },
   
// beci_commission_p: function(frm) {
//        calculateBCICommission(frm);
//        calculateTotalAmountPayableToReinsure(frm) 
//    },
   
// //Calculate Other insure Commission
// other_insurer_commissions: function(frm) {
//        calculateOtherInsureCommission(frm);
      
//    },
   

 
// });




       
// // // Function to calculate  Utilized facility Amount
// function calculatetotalutilizedfacilityamount(frm) {
// var childTableData = frm.doc.table || [];
//    var totalBondValueApproved = 0;

//    // Calculate Total Bond Value for Approved records
//    for (var i = 0; i < childTableData.length; i++) {
//        if (childTableData[i].status === 'Approved') {
//            totalBondValueApproved += parseFloat(childTableData[i].amount_in_pula) || 0;
//        }
//    }
   
//    // Update Utilized Facility Amount field in the form
//     frm.set_value('utilized_facilty_amt', totalBondValueApproved);
   
// }

// function calculateBalancedFacilityAmount(frm) {
//    var childTableData = frm.doc.table || [];
//    var totalBondValueApproved = 0;

//    // Calculate Total Bond Value for Approved records
//    for (var i = 0; i < childTableData.length; i++) {
//        if (childTableData[i].status === 'Approved') {
//            totalBondValueApproved += parseFloat(childTableData[i].amount_in_pula) || 0;
//        }
//    }

//    var totalFacilityAmt = frm.doc.total_facility_amt || 0;

//    // Calculate the balanced facility amount
//    var balancedFacilityAmt = totalFacilityAmt - totalBondValueApproved;

//    // Update the balanced_facilty_amt field in the form
//    frm.set_value('balanced_facilty_amt', balancedFacilityAmt);
// }



// // // Function to calculate Utilized Security Amount
// function calculatetotalutilizedsecurityamount(frm) {
//    var childTableData = frm.doc.table || [];
//    var totalBondValueApproved = 0;

//    // Calculate Total Bond Value for Approved records
//    for (var i = 0; i < childTableData.length; i++) {
//        if (childTableData[i].status === 'Approved') {
//            totalBondValueApproved += parseFloat(childTableData[i].security_required) || 0;
//        }
//    }

//     console.log(totalBondValueApproved,"toooooooo")
//    // Update Utilized Security Amount field in the form
//    frm.set_value('utilized_security_amt', totalBondValueApproved);
// }

// function calculatebalancedsecurityamt(frm) {
//    var childTableData = frm.doc.table || [];
//    var totalBondValueApproved = 0;

//    // Calculate Total Security Amount for Approved records
//    for (var i = 0; i < childTableData.length; i++) {
//        if (childTableData[i].status === 'Approved') {
//            totalBondValueApproved += parseFloat(childTableData[i].security_required) || 0;
//        }
//    }
   
//    var totalSecurityAmount = frm.doc.total_security_amt || 0;
   
//    // Perform Calculation here
//    var balancedSecurityAmt = totalSecurityAmount - totalBondValueApproved;

//    console.log(balancedSecurityAmt, 'balanced_security_amt');
   
//    // Update the balanced_security_amt field in the form
//    frm.set_value('balanced_security_amt', balancedSecurityAmt);
// }




// function calculateOtherInsureCommission(frm) {
//    var field1_value = frm.doc.guarantee_fee_p;
//    var field2_value = frm.doc.other_insurer_commissions;
 
//      // Perform your calculation here
//    var total =field1_value *(field2_value/100)

//    frm.set_value('other_insurer_commission', total);
     
// }

// function calculateTotalAmountPayableToReinsure(frm) {
//    var field1_value = frm.doc.reinsurer_portion_of_guarantee_fee_p;
//    var field2_value = frm.doc.beci_commission_p;
 
//      // Perform your calculation here
//    var total = field1_value - field2_value

//    frm.set_value('total_amount_payable_to_reinsurer', total);
     
// }

// function calculateBCICommission(frm) {
//    var field1_value = frm.doc.reinsurer_portion_of_guarantee_fee_p;
//    var field2_value = frm.doc.beci_commission_p;
 
//      // Perform your calculation here
//    var total = field1_value * (field2_value/100)

//    frm.set_value('beci_commission', total);
     
// }

// function calculateBCIPortionofGuranteeAmount(frm) {
//    var field1_value = frm.doc.guarantee_amount;
//    var field2_value = frm.doc.portion_of_guarantee_to_beci;
 
//      // Perform your calculation here
//    var total = field1_value * (field2_value/100)

//    frm.set_value('beci_portion_of_gurantee_amount_p', total);
     
// }


// function calculateReinsurePortionofguaranteeamount(frm) {
//    var field1_value = frm.doc.guarantee_amount;
//    console.log(field1_value); // Access the value from frm.doc

//    var field2_value = frm.doc.portion_of_guarantee_guarantee_vat_p;
//    console.log(field2_value); // Access the value from frm.doc

//    // Perform your calculation here
//    var total = field1_value * (field2_value / 100);
//    console.log(total, "insurecommission");

//    frm.set_value('reinsurer_portion_of_guarantee_amount', total);
// }


// function calculateReinsureCommission(frm) {
//    var field1_value = frm.doc.beci_portion_of_gurantee_fee;
//    var field2_value = frm.doc.reinsurer_commissions;
 
//      // Perform your calculation here
//    var total = field1_value * (field2_value/100)

//    frm.set_value('reinsurer_commission', total);
     
// }


// function calculateReinsureportionofGurantee(frm) {
//    var field1_value = frm.doc.guarantee_fee_p;
//    var field2_value = frm.doc.portion_of_guarantee_guarantee_vat_p;
 
//      // Perform your calculation here
//    var total = field1_value*(field2_value/100)

//    frm.set_value('reinsurer_portion_of_guarantee_fee_p', total);
     
// }


// function calculateBECIportionofGurantee(frm) {
//    var field1_value = frm.doc.guarantee_fee_p;
//    var field2_value = frm.doc.portion_of_guarantee_to_beci;
 
//      // Perform your calculation here
//    var total = field1_value * (field2_value/100)

//    frm.set_value('beci_portion_of_gurantee_fee', total);
     
// }


// function calculatePortionOfGurantee(frm) {
//    var field1_value = frm.doc.portion_of_guarantee_guarantee_vat_p;
 
//      // Perform your calculation here
//    var total = 100-field1_value;

//    frm.set_value('portion_of_guarantee_to_beci', total);
     
// }


// function calculateMonths(frm) {
//    console.log('calculateMonths function called');
//    var from_date = frm.doc.premium_charged_for_period_of;
//    var to_date = frm.doc.to_;

//    console.log('from_date:', from_date);
//    console.log('to_date:', to_date);

//    if (from_date && to_date) {
//        var from_date_obj = frappe.datetime.str_to_obj(from_date);
//        var to_date_obj = frappe.datetime.str_to_obj(to_date);

//        var monthsDiff = (to_date_obj.getFullYear() - from_date_obj.getFullYear()) * 12;
//        monthsDiff -= from_date_obj.getMonth();
//        monthsDiff += to_date_obj.getMonth();
       
//        console.log('Months difference:', monthsDiff);
//        frm.set_value('month', monthsDiff);
//    } else {
//        console.log('One or both dates are empty');
//        frm.set_value('month', '');
//    }
// }


// function calculateTotal(frm) {
//    var field1_value = frm.doc.month;
//    var field2_value = frm.doc.guarantee_fee;
//    var field3_value = frm.doc.guarantee_amount;
   
//    // Perform your calculation here
//    var total = (field1_value / 12) * (field2_value / 100) * field3_value;

//    frm.set_value('guarantee_fee_p', total);
     
// }


// // Function to update fields
// function updateFields(frm) {
//    var periodFromField = frm.fields_dict['period_from'];
//    var toField = frm.fields_dict['to'];
//    // var amountInPulaField = frm.fields_dict['amount_in_pula'];
   

//    var periodFromValue = periodFromField.get_value();
//    var toValue = toField.get_value();
//    // var amountInPulaValue = amountInPulaField.get_value();
   

//    frm.set_value('premium_charged_for_period_of', periodFromValue);
//    frm.set_value('to_', toValue);
//    // frm.set_value('guarantee_amount', amountInPulaValue);
// }



// // //Generate bond number
// // function generateNumber(frm) {
// //     if (!frm.doc.bond_no) {
// //         let currentYear = new Date().getFullYear();
// //         let prefix = `BND/${currentYear}/`;

// //         frappe.call({
// //             method: 'frappe.client.get_list',
// //             args: {
// //                 doctype: 'Bond Application',
// //                 fields: ['bond_no', 'creation'],
// //                 order_by: 'creation desc',
// //                 limit: 1
// //             },
// //             callback: function (r) {
// //                 if (r.message && r.message.length > 0) {
// //                     let lastBondNo = r.message[0].bond_no;
// //                     let lastNumber = parseInt(lastBondNo.split("/").pop()) || 0;
// //                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
// //                     frm.set_value('bond_no', prefix + newNumber);
// //                 } else {
// //                     frm.set_value('bond_no', prefix + '0001');
// //                 }
// //             }
// //         });
// //     }
// // }

// function generateNumber(frm) {
//    // Check if the bond number field is already populated
//    if (!frm.doc.bond_no) {
//        // Get the current year
//        let currentYear = new Date().getFullYear();
//        let prefix = `BND/${currentYear}/`;

//        // Make a call to get the last bond number asynchronously
//        frappe.call({
//            method: 'frappe.client.get_list',
//            args: {
//                doctype: 'Bond Application',
//                fields: ['bond_no'],
//                limit: 1,
//                order_by: 'creation desc'
//            },
//            callback: function(response) {
//                console.log(response, "bond no");
//                let lastBondNo = response.message && response.message.length > 0 ? response.message[0].bond_no : '0';
//                let lastNumber = parseInt(lastBondNo.split("/").pop()); // Extract last part and parse it as integer

//                // Make a call to get the last deputy sheriff bond number asynchronously
//                frappe.call({
//                    method: 'frappe.client.get_list',
//                    args: {
//                        doctype: 'Deputy Sheriff Bond',
//                        fields: ['bond_no'],
//                        limit: 1,
//                        order_by: 'creation desc'
//                    },
//                    callback: function(response) {
//                        console.log(response, "deputy sheriff bond no");
//                        let lastDeputySheriffBondNo = response.message && response.message.length > 0 ? response.message[0].bond_no : '0';
//                        let lastDeputySheriffBondNumber = parseInt(lastDeputySheriffBondNo.split("/").pop());

//                        // Get the maximum of the two last bond numbers
//                        let maxLastNumber = Math.max(lastNumber, lastDeputySheriffBondNumber);

//                        if (!isNaN(maxLastNumber)) {
//                            // Increment the last number and pad it with leading zeros
//                            let newNumber = (maxLastNumber + 1).toString().padStart(4, '0');
//                            frm.set_value('bond_no', prefix + newNumber);
//                        } else {
//                            // If no previous numbers exist, set to default '0001'
//                            frm.set_value('bond_no', prefix + '0001');
//                        }
//                    }
//                });
//            }
//        });
//    }
// }




// // function calculatefacilityamt(frm){
// //     var field_value1 = frm.doc.total_facility_amt;
// //     var field_value2 = frm.doc.utilized_facilty_amt;
// //     console.log(field_value1,'field_value1')
// //     //Perform Calculation here
// //     var total = field_value1 - field_value2;
// //     console.log(total,'total_facility_amt')
// //     frm.set_value('balanced_facilty_amt', total);
// // }



// // function calculatesecurityamt(frm){
// //     var field_value3 = frm.doc.total_security_amt;
// //     var field_value4 = frm.doc.utilized_security_amt;
// //     console.log(field_value3,'field_value3')
// //     //Perform Calculation here
// //     var total = field_value3 - field_value4;
// //     console.log(total,'total_facility_amt')
// //     frm.set_value('balanced_security_amt', total);
// // }


// // function calculatetotal_bond_value(frm){
// //     var childTableData = frm.doc.table || [];

// //     // Calculate Total Bond Value
// //     var totalBondValue = childTableData.reduce(function(amount_in_pula, row) {
// //         // Convert row.amount_in_pula to a number using parseFloat or parseInt
// //         var rowBondValue = parseFloat(row.amount_in_pula) || 0; // Convert to float; default to 0 if NaN

// //         // Accumulate bond values for each row
// //         return amount_in_pula + rowBondValue;
// //     }, 0);

// //     // Update Total Bond Value field in the form
// //     frm.set_value('utilized_facilty_amt', totalBondValue);
// // }



// // function calculatetotal_security_value(frm){
// // var childTableData = frm.doc.table || [];

// //     // Calculate Total Bond Value
// //     var totalSecurityValue = childTableData.reduce(function(security_required, row) {
// //         // Convert row.amount_in_pula to a number using parseFloat or parseInt
// //         var rowSecurityValue = parseFloat(row.security_required) || 0; // Convert to float; default to 0 if NaN

// //         // Accumulate bond values for each row
// //         return security_required + rowSecurityValue;
// //     }, 0);

// //     // Update Total Bond Value field in the form
// //     frm.set_value('utilized_security_amt', totalSecurityValue);
   
// // }



// // function calculatetotal_Amount(frm){
// //     var field1_value = frm.doc.exchange_rate;
// //     var field2_value = frm.doc.foreign_currency_amount;
   
   
// //     // Perform your calculation here
// //     var total = (field1_value * field2_value);

// //     frm.set_value('amount_in_pula', total);
// //     frm.set_value('guarantee_amount', total);
     
// // }


// function calculatetotalbeci_Amount(frm){
//    var vat_value = frm.doc.vat;
//    var gamount_value = frm.doc.guarantee_amount;
   
   
//    // Perform your calculation here
//    var total = (gamount_value * (vat_value/100));

//    frm.set_value('total_amount_payable_to_beci', total);
     
// }


// //Fetch the data in to child table
// function fetchBondInFavourData(frm, facilityName) {
//    frappe.call({
//        method: 'frappe.client.get_list',
//        args: {
//            doctype: 'Bond Application',
//            filters: {
//                facility_name: facilityName
//            },
//            fields: ['name', 'workflow_state', 'bond_no', 'bond_in_favour', 'period_from', 'to', 'amount_in_pula', 'security_required','workflow_state'],
//            limit: 2,
//        },
//        callback: function(r) {
//            if (!r.exc) {
//                var data = r.message;

//                frm.clear_table('table');

//                for (let x of data) {
//                    var child = frappe.model.add_child(frm.doc, "Previous Bond Details", "table");

//                    frappe.model.set_value(child.doctype, child.name, "bond_no", x.bond_no);
//                    frappe.model.set_value(child.doctype, child.name, "bond_in_favour", x.bond_in_favour);
//                    frappe.model.set_value(child.doctype, child.name, "period_from", x.period_from);
//                    frappe.model.set_value(child.doctype, child.name, "to", x.to);
//                    frappe.model.set_value(child.doctype, child.name, "amount_in_pula", x.amount_in_pula);
//                    frappe.model.set_value(child.doctype, child.name, "security_required", x.security_required);
//                    frappe.model.set_value(child.doctype, child.name, "status", x.workflow_state); // Set workflow state
//                }
//                frm.refresh_fields('table');
//                // calculatetotal_security_value(frm)
               
//                 calculatetotalutilizedfacilityamount(frm);
   
//     calculatetotalutilizedsecurityamount(frm);
    
//     calculateBalancedFacilityAmount(frm);
      
//     calculatebalancedsecurityamt(frm);
       
               
//            } else {
//                console.error(r.exc);
//            }
//        }
//    });
   
 
   
// }



