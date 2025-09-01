// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt


function InternalPrint(frm) {
    console.log("Internal Print button clicked.");

    if (frm.doc.bond_application === 1) {
        console.log(frm.doc.bond_application, "type is selected");
        frappe.model.with_doctype('Print Internal Invoice', () => {
            let doc = frappe.model.get_new_doc('Print Internal Invoice');
            console.log(frm.doc, "get all data bond invoice to print ");
            console.log(frm.doc.facility_name)
            doc.client = frm.doc.facility_name;
            doc.bond_no = frm.doc.bond_no;
            doc.period = frm.doc.period_from;
            doc.to = frm.doc.to;
            doc.month = frm.doc.month;
            doc.bond_sub_type = frm.doc.bond_type;
            doc.guarantee_amount = frm.doc.bond_guarantee_amount;
            doc.rate = frm.doc.guarantee_amount;
            doc.premiumpula = frm.doc.premium_rate;
            doc.vat__14_ = frm.doc.vat_p;
            doc.total_due = frm.doc.total_due_without_vat;
            doc.reinsurer_refno = frm.doc.reinsurer_refnumber;
            doc.invoice_no  = frm.doc.bond_no;

            var premiumRate = parseFloat(frm.doc.premium_rate) || 0;
            var guaranteeFeeRate = parseFloat(frm.doc.guarantee_fee_rate) || 0;
            var bondGuaranteeAmount = parseFloat(frm.doc.bond_guarantee_amount) || 0;
            var Totalamt = premiumRate + guaranteeFeeRate + bondGuaranteeAmount;
            doc.sub_total = Totalamt;
            console.log(doc.sub_total, "total amount");

            doc.renewal_top_buttons = "1";

            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Renewals',
                    filters: {
                        bond_holder: frm.doc.client
                    },
                    fields: ['bond_no', 'client', 'principal', 'description', 'bondtype1']
                },
                callback: function(response) {
                    if (response.message && response.message.length > 0) {
                        console.log(response.message, "response data");
                        let prepareInvoiceData = response.message[0];
                        console.log(prepareInvoiceData, 'deputy shireff prepare invoice data');
                        doc.description = prepareInvoiceData.description;
                        // doc.bond_sub_type = prepareInvoiceData.bondtype1;
                        // doc.client = prepareInvoiceData.client;
                        // doc.principal = prepareInvoiceData.principal;
                        // doc.description1 = prepareInvoiceData.description;
                        // doc.bond_no = prepareInvoiceData.bond_no;

                        doc.other_bonds = frm.doc.bond_application;
                    } else {
                        console.log("No Deputy Sheriff Prepare Invoice found for the given criteria.");
                    }

                    // Save the current document before navigating to the next doctype
                    frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print Internal Invoice', response.message.name);
                            }
                        }
                    });
                }
            });
        });
    } 
    else if (frm.doc.deputy_sheriff === 1) {
        console.log("Deputy Sheriff Bond application selected.");
        frappe.model.with_doctype('Print Internal Invoice', () => {
            let doc = frappe.model.get_new_doc('Print Internal Invoice');
            console.log(doc, "get all data bond invoice to print ");
            console.log(frm.doc.facility_name)
            doc.client = frm.doc.facility_name;
            doc.bond_no = frm.doc.bond_no;
            doc.period = frm.doc.period_from;
            doc.to = frm.doc.to;
            doc.month = frm.doc.month;
            doc.bond_sub_type = frm.doc.bond_type;
            doc.guarantee_amount = frm.doc.bond_guarantee_amount;
            doc.rate = frm.doc.guarantee_amount;
            doc.premiumpula = frm.doc.premium_rate;
            doc.vat__14_ = frm.doc.vat_p;
            doc.total_due = frm.doc.total_due_without_vat;
            doc.reinsurer_refno = frm.doc.bond_no;
            doc.invoice_no  = frm.doc.bond_no;

            var premiumRate = parseFloat(frm.doc.premium_rate) || 0;
            var guaranteeFeeRate = parseFloat(frm.doc.guarantee_fee_rate) || 0;
            var bondGuaranteeAmount = parseFloat(frm.doc.bond_guarantee_amount) || 0;
            var subTotal = premiumRate + guaranteeFeeRate + bondGuaranteeAmount;
            doc.sub_total = subTotal;
            console.log(subTotal, "total amount");
            doc.renewal_top_buttons = "1";

            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Renewals',
                    filters: {
                        bond_holder: frm.doc.client
                    },
                    fields: ['bond_no', 'principal', 'description', 'bondtype1']
                },
                callback: function(response) {
                    if (response.message && response.message.length > 0) {
                        console.log(response.message, "response data");
                        let prepareInvoiceData = response.message[0];
                        console.log(prepareInvoiceData, 'deputy shireff prepare invoice data');
                        doc.description = prepareInvoiceData.description;
                        // doc.bond_sub_type = prepareInvoiceData.bondtype1;
                        // doc.client = prepareInvoiceData.client;
                        doc.principal = prepareInvoiceData.principal;
                        doc.description1 = prepareInvoiceData.description;
                        doc.bond_no = prepareInvoiceData.bond_no;

                        doc.deputy_sheriff = frm.doc.deputy_sheriff;
                    } else {
                        console.log("No Deputy Sheriff Prepare Invoice found for the given criteria.");
                    }

                    // Save the current document before navigating to the next doctype
                    frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print Internal Invoice', response.message.name);
                            }
                        }
                    });
                }
            });
        });
    }
}
function ExternalPrint(frm) {
    console.log("external Print button clicked.");

    if (frm.doc.bond_application === 1) {
        console.log(frm.doc.bond_application, "type is selected");
        frappe.model.with_doctype('Print External Invoice', () => {
            let doc = frappe.model.get_new_doc('Print External Invoice');
            doc.account  = frm.doc.facility_name;
            doc.invoice_n0 = frm.doc.bond_no;
            doc.amount1 = frm.doc.premium_rate;
            doc.amount2 = frm.doc.premium_p;
            doc.amount3 =frm.doc.vat;
            doc.amount4 = frm.doc.vat_p;
            doc.amount6 = frm.doc.reinsurer1;
            doc.amount9  = frm.doc.broker;
            doc.amount11 = frm.doc.beci;
            doc.amount12 =frm.doc.beci_commission;
            doc.amount15 = frm.doc.total_due
                 
             var premium = parseFloat(frm.doc.premium_p) || 0;
             var vat = parseFloat(frm.doc.vat_p) || 0;
            var Total1 = premium + vat;
            doc.amount5 = Total1;
            console.log(doc.amount5, "total amount");
            
          var reinsurer1 = parseFloat(frm.doc.reinsurer1) || 0;
         var broker = parseFloat(frm.doc.broker) || 0;
         var beci_commission = parseFloat(frm.doc.beci) || 0;
         var TotalAmount1 = reinsurer1 + broker + beci_commission;
         doc.amount13 = TotalAmount1;
        console.log(doc.amount13, "total amount");

            doc.renewal_top_buttons = "1";
            doc.other_bonds = frm.doc.bond_application;
             frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print External Invoice', response.message.name);
                            }
                        }
                    });

            
        });
    } else if (frm.doc.deputy_sheriff === 1) {
    console.log("Deputy Sheriff Bond application selected.");
    frappe.model.with_doctype('Print External Invoice', () => {
        let doc = frappe.model.get_new_doc('Print External Invoice');
        doc.amount1 = frm.doc.premium_rate;
        doc.amount2 = frm.doc.premium_p;
        doc.amount3 = frm.doc.vat;
        doc.amount4 = frm.doc.vat_p;
        doc.amount6 = frm.doc.reinsurer1;
        doc.amount9 = frm.doc.broker;
        doc.amount11 = frm.doc.beci;
        doc.amount12 = frm.doc.beci_commission;
        doc.amount15 = frm.doc.total_due;
        doc.account  = frm.doc.sheriff_name;
        doc.invoice_n0 = frm.doc.bond_no;

        var premium = parseFloat(frm.doc.premium_p) || 0;
        var vat = parseFloat(frm.doc.vat_p) || 0;
       
        var Total = premium + vat;
        doc.amount5 = Total;
        console.log(doc.amount5, "total amount");

        var reinsurer1 = parseFloat(frm.doc.reinsurer1) || 0;
        var broker = parseFloat(frm.doc.broker) || 0;
        var beci_commission = parseFloat(frm.doc.beci) || 0;
        var TotalAmount = reinsurer1 + broker + beci_commission;
        doc.amount13 = TotalAmount;
        console.log(doc.amount13, "total amount");

        doc.renewal_top_buttons = "1";
        doc.deputyshierff_bonds = frm.doc.deputy_sheriff;
        
          frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print External Invoice', response.message.name);
                            }
                        }
                    });

    });
}

}

frappe.ui.form.on('Bond Invoice', {      
    refresh(frm) {

frm.fields_dict.month.$input.css("text-align", "right");
frm.fields_dict.premium_rate.$input.css("text-align", "right");
frm.fields_dict.reinsurer.$input.css("text-align", "right");
frm.fields_dict.reinsurer_refnumber.$input.css("text-align", "right");
frm.fields_dict.reinsurer1.$input.css("text-align", "right");
frm.fields_dict.portion_of_guarantee_guarantee_vat_p.$input.css("text-align", "right");
frm.fields_dict.beci_commission_p.$input.css("text-align", "right");
frm.fields_dict.reinsurer_commissions.$input.css("text-align", "right");
frm.fields_dict.other_insurer_commissions.$input.css("text-align", "right");
frm.fields_dict.broker.$input.css("text-align", "right");
frm.fields_dict.total_due_without_vat.$input.css("text-align", "right");
frm.fields_dict.vat.$input.css("text-align", "right");
frm.fields_dict.total_due.$input.css("text-align", "right");
frm.fields_dict.demand_date.$input.css("text-align", "right");
frm.fields_dict.guarantee_amount.$input.css("text-align", "right");
frm.fields_dict.premium_p.$input.css("text-align", "right");
frm.fields_dict.beci.$input.css("text-align", "right");
frm.fields_dict.beci_portion_of_gurantee_amount_p.$input.css("text-align", "right");
frm.fields_dict.beci_commission.$input.css("text-align", "right");
frm.fields_dict.reinsurer_commission.$input.css("text-align", "right");
frm.fields_dict.other_insurer_commission.$input.css("text-align", "right");
frm.fields_dict.broker_commission__p.$input.css("text-align", "right");
frm.fields_dict.vat_p.$input.css("text-align", "right");
frm.fields_dict.ecgc_ref_no.$input.css("text-align", "right");
frm.fields_dict.bond_guarantee_amount.$input.css("text-align", "right");
frm.fields_dict.bond_month.$input.css("text-align", "right");
frm.fields_dict.guarantee_fee_rate.$input.css("text-align", "right");
frm.fields_dict.reinsure.$input.css("text-align", "right");
frm.fields_dict.reinsurern_refnumber.$input.css("text-align", "right");
frm.fields_dict.reinsurer_per.$input.css("text-align", "right");
frm.fields_dict.portion_of_guarantee_amount_to_reinsurer.$input.css("text-align", "right");
frm.fields_dict.portion_of_guarantee_fee_to_reinsurer.$input.css("text-align", "right");
frm.fields_dict.ecgc_commission_.$input.css("text-align", "right");
frm.fields_dict.broker_.$input.css("text-align", "right");
frm.fields_dict.total_duewith_out_vat.$input.css("text-align", "right");
frm.fields_dict.vat_.$input.css("text-align", "right");
frm.fields_dict.bond_total_due.$input.css("text-align", "right");
frm.fields_dict.guarantee_fee.$input.css("text-align", "right");
frm.fields_dict.ecgc.$input.css("text-align", "right");
frm.fields_dict.portion_of_guarantee_to_amount_ecgc.$input.css("text-align", "right");
frm.fields_dict.portion_of_guarante_fee_to_ecgc.$input.css("text-align", "right");
frm.fields_dict.ecgc_commission.$input.css("text-align", "right");
frm.fields_dict.broker_commission.$input.css("text-align", "right");
frm.fields_dict.v_at.$input.css("text-align", "right");


        // if(frm.doc.top_button){
        //          frm.add_custom_button(__('Internal Print'), function() {F
        //           }).addClass("btn-primary");
        
        //          frm.add_custom_button(__('External Print'), function() {
        //   }).addClass("btn-primary");
        // }
        
        // else if(frm.doc.renewal_top_buttons){
        //       frm.add_custom_button(__('Internal Print'), function() {
        //           }).addClass("btn-primary");
        
        //   frm.add_custom_button(__('External Print'), function() {
        //   }).addClass("btn-primary");
        // }
        
        
//   if (frm.doc.ecgc_ref_no) {
//     getthedatadeputysheriff(frm);
//      } 
   
//     else if (frm.doc.bond_no) {
//     getthedatabondapplication(frm);
//      }
    
    
   if (frm.doc.ecgc_ref_no !== undefined && frm.doc.ecgc_ref_no !== null && frm.doc.ecgc_ref_no !== "") {
       
         // Disable the fields you want here
              frm.set_df_property('bond_details', 'hidden', 1); // hide field
              frm.set_df_property('bond_no', 'hidden', 1);
              frm.set_df_property('facility_name', 'hidden', 1);
              frm.set_df_property('period_from', 'hidden', 1);
              frm.set_df_property('bond_type', 'hidden', 1);
              frm.set_df_property('bond_subtype', 'hidden', 1);
              frm.set_df_property('bond_invoice_no', 'hidden', 1);
              frm.set_df_property('month', 'hidden', 1);
              frm.set_df_property('premium_rate', 'hidden', 1);
              frm.set_df_property('invoice_date', 'hidden', 1);
              frm.set_df_property('reinsurer', 'hidden', 1);
              frm.set_df_property('reinsurer_refnumber', 'hidden', 1);
              frm.set_df_property('reinsurer1', 'hidden', 1);
              frm.set_df_property('portion_of_guarantee_guarantee_vat_p', 'hidden', 1);
              frm.set_df_property('beci_commission_p', 'hidden', 1);
              frm.set_df_property('reinsurer_commissions', 'hidden', 1);
              frm.set_df_property('other_insurer_commissions', 'hidden', 1);
              frm.set_df_property('broker1', 'hidden', 1);
              
              frm.set_df_property('broker', 'hidden', 1);
              frm.set_df_property('with_vat', 'hidden', 1);
              frm.set_df_property('with_out_vat', 'hidden', 1);
              frm.set_df_property('total_due_without_vat', 'hidden', 1);
              frm.set_df_property('vat', 'hidden', 1);
              frm.set_df_property('total_due', 'hidden', 1);
              frm.set_df_property('demand_date', 'hidden', 1);
              frm.set_df_property('bond_in_favour', 'hidden', 1);
              
               frm.set_df_property('guarantee_amount', 'hidden', 1);
              frm.set_df_property('premium_p', 'hidden', 1);
              frm.set_df_property('to', 'hidden', 1);
              frm.set_df_property('beci', 'hidden', 1);
              frm.set_df_property('beci_portion_of_gurantee_amount_p', 'hidden', 1);
              
              frm.set_df_property('beci_commission', 'hidden', 1);
              frm.set_df_property('reinsurer_commission', 'hidden', 1);
              frm.set_df_property('other_insurer_commission', 'hidden', 1);
              frm.set_df_property('broker_commission__p', 'hidden', 1);
              frm.set_df_property('vat_p', 'hidden', 1);
              
        
    }
    
    else if (frm.doc.bond_no !== undefined && frm.doc.bond_no !== null && frm.doc.bond_no !== "") {
        
            // Disable the fields you want here
              frm.set_df_property('bond_invoice', 'hidden', 1); // hide field
              frm.set_df_property('ecgc_ref_no', 'hidden', 1);
              frm.set_df_property('sheriff_name', 'hidden', 1);
              frm.set_df_property('bond_guarantee_amount', 'hidden', 1);
              frm.set_df_property('bond_period_from', 'hidden', 1);
              frm.set_df_property('bond_month', 'hidden', 1);
              frm.set_df_property('guarantee_fee_rate', 'hidden', 1);
              frm.set_df_property('reinsure', 'hidden', 1);
              frm.set_df_property('reinsurern_refnumber', 'hidden', 1);
              frm.set_df_property('reinsurer_per', 'hidden', 1);
              frm.set_df_property('portion_of_guarantee_amount_to_reinsurer', 'hidden', 1);
              frm.set_df_property('portion_of_guarantee_fee_to_reinsurer', 'hidden', 1);
              frm.set_df_property('ecgc_commission_', 'hidden', 1);
              frm.set_df_property('bond_broker', 'hidden', 1);
              frm.set_df_property('broker_', 'hidden', 1);
              frm.set_df_property('total_duewith_out_vat', 'hidden', 1);
              frm.set_df_property('vat_', 'hidden', 1);
              frm.set_df_property('v_at', 'hidden', 1);
              frm.set_df_property('bond_total_due', 'hidden', 1);
              frm.set_df_property('bond_invoice_date', 'hidden', 1);
              frm.set_df_property('bond_period_to', 'hidden', 1);
              frm.set_df_property('guarantee_fee', 'hidden', 1);
              frm.set_df_property('ecgc', 'hidden', 1);
              frm.set_df_property('portion_of_guarantee_to_amount_ecgc', 'hidden', 1);
              frm.set_df_property('portion_of_guarante_fee_to_ecgc', 'hidden', 1);
              frm.set_df_property('ecgc_commission', 'hidden', 1);
              frm.set_df_property('broker_commission', 'hidden', 1);
              frm.set_df_property('top_button', 'hidden', 1);
              frm.set_df_property('renewal_top_buttons','hidden', 1)
               
    }
    //----------------------------merge code from  Internal And External print
    
        console.log("Form refreshed.");
        console.log("Renewal top buttons value:", frm.doc.renewal_top_buttons);

        if (frm.doc.renewal_top_buttons === "1") {
            console.log("Renewal top buttons enabled.");

            frm.add_custom_button(__('Print Internal Invoice'), function() {
                console.log("heloooooo");
                InternalPrint(frm);
            }).addClass("btn-primary");

            frm.add_custom_button(__('Print External Invoice'), function() {
                console.log("External Print button clicked.");
                ExternalPrint(frm)
            }).addClass("btn-primary");
        }
        
        else if(frm.doc.top_button === "1"){
         frm.add_custom_button(__('Print Internal Invoice'), function() {
                console.log("heloooooo");
                InternalPrint(frm);
            }).addClass("btn-primary");

            frm.add_custom_button(__('Print External Invoice'), function() {
                console.log("External Print button clicked.");
                ExternalPrint(frm)
            }).addClass("btn-primary");
        }
    
    
    
    
   
    },                                                     

    total_due_without_vat: function(frm) {
        calculateVat_p(frm);
        calculateTotal_due(frm);
    },
    
    //Bond Invoice
    guarantee_amount: function(frm) {
        calculateBroker(frm);
    },
    broker: function(frm) {
        calculateBroker(frm);
    },
   
    
    
    //Bond Sheriff calculations 
    bond_broker: function(frm) {
        // Check if the Broker field has a value
        if (frm.doc.bond_broker) {
            // If Broker has a value, show the Broker Percentage field
            frm.set_value('broker_', 10);
        } else {
            frm.set_value('broker_', '');
        }
    },
    
    //Deputy Sheriff Calculation of Months
    bond_period_from: function(frm) {
        calculateMonths(frm);
    },
    
    bond_period_to: function(frm) {
        calculateMonths(frm);
    },
    
    reinsurer_per: function(frm) {
        calculateECGpercentage(frm); 
        calculatePortionofGuaranteeamounttoreinsurer(frm);
        calculatePortionofGuaranteefeetoreinsurer(frm);
    },
    
    bond_guarantee_amount: function(frm) {
        calculatePortionofGuaranteeamounttoreinsurer(frm); 
        calculateportionofguaranteeamounttoECGC(frm);
    },
    
    ecgc: function(frm) {
        calculateportionofguaranteeamounttoECGC(frm);
    },
    
    guarantee_fee: function(frm) {
        calculatePortionofGuaranteefeetoreinsurer(frm); 
        calculateportionofguaranteefeetoECG(frm);
        calculatetotaldduewithoutvat(frm);
        calculatevat(frm);
        calculatebrokercommission(frm);
    },
    
    ecgc_commission_: function(frm) {
        calculateportionofguaranteefeetoECG(frm);  
    },
    
    vat_: function(frm) {
        calculatevat(frm);
    },
    
    broker_: function(frm) {
        calculatebrokercommission(frm);
    },
    
    

});

// Function definitions...


function calculateVat_p(frm) {
    var total_vat = frm.doc.total_due_without_vat || 0;
    var vat = frm.doc.vat || 0;

    var total = total_vat * (vat / 100);

    frm.set_value('vat_p', total);
}


function calculateTotal_due(frm) {
    var total_vat = frm.doc.total_due_without_vat || 0;
    var vat_p = frm.doc.vat_p || 0;

    var total = total_vat + vat_p;

    frm.set_value('total_due', total);
}



//Deputy Sheriff month calculation code
function calculateMonths(frm) {
    console.log('calculateMonths function called');
    var from_date = frm.doc.bond_period_from;
    var to_date = frm.doc.bond_period_to;
 
    console.log('from_date:', from_date);
    console.log('to_date:', to_date);
 
    if (from_date && to_date) {
        var from_date_obj = frappe.datetime.str_to_obj(from_date);
        var to_date_obj = frappe.datetime.str_to_obj(to_date);
 
        var monthsDiff = (to_date_obj.getFullYear() - from_date_obj.getFullYear()) * 12;
        monthsDiff -= from_date_obj.getMonth();
        monthsDiff += to_date_obj.getMonth();
        console.log('Months difference:', monthsDiff);
        frm.set_value('bond_month', monthsDiff);
    } else {
        console.log('One or both dates are empty');
        frm.set_value('bond_month', '');
    }
}

//Calculate ECG%
function calculateECGpercentage(frm){
    var reinsurerrate = frm.doc.reinsurer_per;
    
    var ecgpercentage = 100-reinsurerrate;
    
    frm.set_value('ecgc',ecgpercentage);
}

//Calculate Portion of guarantee amount to Reinsurer
function calculatePortionofGuaranteeamounttoreinsurer(frm){
    var guaranteeamount=frm.doc.bond_guarantee_amount;
    var reinsurerrate = frm.doc.reinsurer_per;
    
    var portionofguaranteeamounttoreinsurer = guaranteeamount*(reinsurerrate/100);
    
    frm.set_value('portion_of_guarantee_amount_to_reinsurer',portionofguaranteeamounttoreinsurer);
    
}

//Calculate Portion of guarantee Amount to ECGC
function calculateportionofguaranteeamounttoECGC(frm){
    
    var portion_of_guarantee_amount = frm.doc.bond_guarantee_amount;
    
    var ecgpercent = frm.doc.ecgc;
    
    var portion_of_guarantee_amounttoecg = portion_of_guarantee_amount*(ecgpercent/100);
    
     frm.set_value('portion_of_guarantee_to_amount_ecgc',portion_of_guarantee_amounttoecg);
}

//Calculate Portion of Guarantee fee to Reinsurer
function calculatePortionofGuaranteefeetoreinsurer(frm){
    var guaranteefee = frm.doc.guarantee_fee;
    var reinsurerrate = frm.doc.reinsurer_per;
    var guaranteefeetoreinsurer = guaranteefee*(reinsurerrate/100);
    var ecgccommission = guaranteefeetoreinsurer*[(100-reinsurerrate)/100];
    frm.set_value('portion_of_guarantee_fee_to_reinsurer',guaranteefeetoreinsurer);
    frm.set_value('ecgc_commission',ecgccommission);
}

//Calculate portion of Guarantee fee to ECG
function calculateportionofguaranteefeetoECG(frm){
    var guaranteefee = frm.doc.guarantee_fee;
    var becipercent = frm.doc.ecgc_commission_;
    var guaranteefeetoECGC = guaranteefee*(becipercent/100);
    frm.set_value('portion_of_guarante_fee_to_ecgc',guaranteefeetoECGC);
    
}

//Calculate Total Due with ot Vat
 function calculatetotaldduewithoutvat(frm){
     var guaranteefee = frm.doc.guarantee_fee;
     var totalduewithoutvat = guaranteefee/1.1;
     frm.set_value('total_duewith_out_vat',totalduewithoutvat);
     
 }

//calculate Vat
function calculatevat(frm){
      var guaranteefee = frm.doc.guarantee_fee;
      var vatpercentage = frm.doc.vat_;
      var vat = guaranteefee*(vatpercentage/100);
      frm.set_value('v_at',vat);
}

//Calculate Broker Commission
 function calculatebrokercommission(frm){
    var guaranteefee = frm.doc.guarantee_fee;
    var brokerrate = frm.doc.broker_;
    var brokercommission = guaranteefee*(brokerrate/100);
    frm.set_value('broker_commission', brokercommission);
    
 }

// function getthedatadeputysheriff(frm){
    
//          frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Deputy Sheriff Bond',
//                 filters: {
//                     bond_no: frm.doc.ecgc_ref_no
//                 },
//                 fields: ['sheriff_name','period_to','period_from','bond_value','reinsurer_ref_numbeecgc_invoice_no','reinsurer_rate','premium','premium_rate','broker','reinsurer','ecgc_reinsurance_commission']
//             },
//             callback: function(r) {
//                 if (!r.exc && r.message && r.message.length > 0) {
//                     var bondApp = r.message[0];
//                     frm.set_value('sheriff_name', bondApp.sheriff_name);
//                     frm.set_value('bond_period_from', bondApp.period_from); 
//                     frm.set_value('bond_period_to', bondApp.period_to);
//                     frm.set_value('bond_guarantee_amount', bondApp.bond_value);
//                     frm.set_value('reinsurern_refnumber', bondApp.reinsurer_ref_numbeecgc_invoice_no);
//                     frm.set_value('reinsurer_per', bondApp.reinsurer_rate);
//                     frm.set_value('guarantee_fee', bondApp.premium); 
//                     frm.set_value('bond_total_due', bondApp.premium);
//                     frm.set_value('guarantee_fee_rate', bondApp.premium_rate);
//                     frm.set_value('bond_broker', bondApp.broker);
//                     frm.set_value('reinsure', bondApp.reinsurer);
//                     frm.set_value('ecgc_commission_', bondApp.ecgc_reinsurance_commission);
                
                  
//                 } else {
//                      console.error("Error occurred:", r.exc);
//                 }
//             }
//         });
    
// }

// function getthedatabondapplication(frm){
    
//       frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Bond Application',
//                 filters: {
//                     bond_no: frm.doc.bond_no
//                 },
//                 fields: ['bond_no','broker','facility_name','bond_type','period_from','bond_subtype','month','reinsurer','beci_commission_p','reinsurer_commission','reinsurer_commissions','other_insurer_commission','other_insurer_commissions','beci_commission','to','bond_in_favour','demand_date','guarantee_amount','beci_portion_of_gurantee_fee','reinsurer_refnumber','reinsurer_portion_of_guarantee_fee_p','portion_of_guarantee_guarantee_vat_p','portion_of_guarantee_to_beci','guarantee_fee','vat']
//             },
//             callback: function(r) {
//                 if (!r.exc && r.message && r.message.length > 0) {
//                     var bondApp = r.message[0];
//                     frm.set_value('facility_name', bondApp.facility_name); 
//                     frm.set_value('bond_invoice_no', bondApp.bond_no); 
//                     frm.set_value('bond_type', bondApp.bond_type);
//                     frm.set_value('period_from', bondApp.period_from);
//                     frm.set_value('bond_subtype', bondApp.bond_subtype);
//                     frm.set_value('month', bondApp.month);
//                     frm.set_value('reinsurer', bondApp.reinsurer); 
//                     frm.set_value('beci_commission_p', bondApp.beci_commission_p);
//                     frm.set_value('reinsurer_commissions', bondApp.reinsurer_commissions);
//                     frm.set_value('other_insurer_commissions', bondApp.other_insurer_commissions);
//                     frm.set_value('beci_commission', bondApp.beci_commission);
//                     frm.set_value('to', bondApp.to); 
//                     frm.set_value('bond_in_favour', bondApp.bond_in_favour);
//                     frm.set_value('demand_date', bondApp.demand_date);
//                     frm.set_value('guarantee_amount', bondApp.guarantee_amount);
//                     frm.set_value('beci_portion_of_gurantee_amount_p', bondApp.beci_portion_of_gurantee_fee);
//                     frm.set_value('reinsurer_refnumber', bondApp.reinsurer_refnumber);
//                     frm.set_value('reinsurer1', bondApp.portion_of_guarantee_guarantee_vat_p);
//                     frm.set_value('premium_p', bondApp.beci_portion_of_gurantee_fee); 
//                     frm.set_value('beci', bondApp.portion_of_guarantee_to_beci);
//                     frm.set_value('premium_rate', bondApp.guarantee_fee);
//                     frm.set_value('vat', bondApp.vat);
//                     frm.set_value('reinsurer_commission', bondApp.reinsurer_commission);
//                     frm.set_value('portion_of_guarantee_guarantee_vat_p', bondApp.reinsurer_portion_of_guarantee_fee_p);
//                     frm.set_value('other_insurer_commission', bondApp.other_insurer_commission);
//                     frm.set_value('total_due_without_vat', bondApp.beci_portion_of_gurantee_fee);
//                     frm.set_value('broker1', bondApp.broker);
                    
                   
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
//             }
//         });   
      
   
    
// }


function calculateBroker(frm) {
    var guarantee_amount = frm.doc.guarantee_amount || 0;
    var brokerPercent = frm.doc.broker || 0;

    // Calculate broker commission
    var brokerCommission = (guarantee_amount * brokerPercent / 100);

    // Set the value of broker_commission__p field
    frm.set_value('broker_commission__p', brokerCommission);
}



function InternalPrint(frm) {
    console.log("Internal Print button clicked.");

    if (frm.doc.bond_application === 1) {
        console.log(frm.doc.bond_application, "type is selected");
        frappe.model.with_doctype('Print Internal Invoice', () => {
            let doc = frappe.model.get_new_doc('Print Internal Invoice');
            console.log(frm.doc, "get all data bond invoice to print ");
            console.log(frm.doc.facility_name)
            doc.client = frm.doc.facility_name;
            doc.bond_no = frm.doc.bond_no;
            doc.period = frm.doc.period_from;
            doc.to = frm.doc.to;
            doc.month = frm.doc.month;
            doc.bond_sub_type = frm.doc.bond_type;
            doc.guarantee_amount = frm.doc.bond_guarantee_amount;
            doc.rate = frm.doc.guarantee_amount;
            doc.premiumpula = frm.doc.premium_rate;
            doc.vat__14_ = frm.doc.vat_p;
            doc.total_due = frm.doc.total_due_without_vat;
            doc.reinsurer_refno = frm.doc.reinsurer_refnumber;
            doc.invoice_no  = frm.doc.bond_no;

            var premiumRate = parseFloat(frm.doc.premium_rate) || 0;
            var guaranteeFeeRate = parseFloat(frm.doc.guarantee_fee_rate) || 0;
            var bondGuaranteeAmount = parseFloat(frm.doc.bond_guarantee_amount) || 0;
            var Totalamt = premiumRate + guaranteeFeeRate + bondGuaranteeAmount;
            doc.sub_total = Totalamt;
            console.log(doc.sub_total, "total amount");

            doc.renewal_top_buttons = "1";

            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Renewals',
                    filters: {
                        bond_holder: frm.doc.client
                    },
                    fields: ['bond_no', 'client', 'principal', 'description', 'bondtype1']
                },
                callback: function(response) {
                    if (response.message && response.message.length > 0) {
                        console.log(response.message, "response data");
                        let prepareInvoiceData = response.message[0];
                        console.log(prepareInvoiceData, 'deputy shireff prepare invoice data');
                        doc.description = prepareInvoiceData.description;
                        // doc.bond_sub_type = prepareInvoiceData.bondtype1;
                        // doc.client = prepareInvoiceData.client;
                        // doc.principal = prepareInvoiceData.principal;
                        // doc.description1 = prepareInvoiceData.description;
                        // doc.bond_no = prepareInvoiceData.bond_no;

                        doc.other_bonds = frm.doc.bond_application;
                    } else {
                        console.log("No Deputy Sheriff Prepare Invoice found for the given criteria.");
                    }

                    // Save the current document before navigating to the next doctype
                    frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print Internal Invoice', response.message.name);
                            }
                        }
                    });
                }
            });
        });
    } else if (frm.doc.deputy_sheriff === 1) {
        console.log("Deputy Sheriff Bond application selected.");
        frappe.model.with_doctype('Print Internal Invoice', () => {
            let doc = frappe.model.get_new_doc('Print Internal Invoice');
            console.log(doc, "get all data bond invoice to print ");
            console.log(frm.doc.facility_name)
            doc.client = frm.doc.facility_name;
            doc.bond_no = frm.doc.bond_no;
            doc.period = frm.doc.period_from;
            doc.to = frm.doc.to;
            doc.month = frm.doc.month;
            doc.bond_sub_type = frm.doc.bond_type;
            doc.guarantee_amount = frm.doc.bond_guarantee_amount;
            doc.rate = frm.doc.guarantee_amount;
            doc.premiumpula = frm.doc.premium_rate;
            doc.vat__14_ = frm.doc.vat_p;
            doc.total_due = frm.doc.total_due_without_vat;
            doc.reinsurer_refno = frm.doc.bond_no;
            doc.invoice_no  = frm.doc.bond_no;

            var premiumRate = parseFloat(frm.doc.premium_rate) || 0;
            var guaranteeFeeRate = parseFloat(frm.doc.guarantee_fee_rate) || 0;
            var bondGuaranteeAmount = parseFloat(frm.doc.bond_guarantee_amount) || 0;
            var subTotal = premiumRate + guaranteeFeeRate + bondGuaranteeAmount;
            doc.sub_total = subTotal;
            console.log(subTotal, "total amount");
            doc.renewal_top_buttons = "1";

            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Renewals',
                    filters: {
                        bond_holder: frm.doc.client
                    },
                    fields: ['bond_no', 'principal', 'description', 'bondtype1']
                },
                callback: function(response) {
                    if (response.message && response.message.length > 0) {
                        console.log(response.message, "response data");
                        let prepareInvoiceData = response.message[0];
                        console.log(prepareInvoiceData, 'deputy shireff prepare invoice data');
                        doc.description = prepareInvoiceData.description;
                        // doc.bond_sub_type = prepareInvoiceData.bondtype1;
                        // doc.client = prepareInvoiceData.client;
                        doc.principal = prepareInvoiceData.principal;
                        doc.description1 = prepareInvoiceData.description;
                        doc.bond_no = prepareInvoiceData.bond_no;

                        doc.deputy_sheriff = frm.doc.deputy_sheriff;
                    } else {
                        console.log("No Deputy Sheriff Prepare Invoice found for the given criteria.");
                    }

                    // Save the current document before navigating to the next doctype
                    frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print Internal Invoice', response.message.name);
                            }
                        }
                    });
                }
            });
        });
    }
}
function ExternalPrint(frm) {
    console.log("external Print button clicked.");

    if (frm.doc.bond_application === 1) {
        console.log(frm.doc.bond_application, "type is selected");
        frappe.model.with_doctype('Print External Invoice', () => {
            let doc = frappe.model.get_new_doc('Print External Invoice');
            doc.account  = frm.doc.facility_name;
            doc.invoice_n0 = frm.doc.bond_no;
            doc.amount1 = frm.doc.premium_rate;
            doc.amount2 = frm.doc.premium_p;
            doc.amount3 =frm.doc.vat;
            doc.amount4 = frm.doc.vat_p;
            doc.amount6 = frm.doc.reinsurer1;
            doc.amount9  = frm.doc.broker;
            doc.amount11 = frm.doc.beci;
            doc.amount12 =frm.doc.beci_commission;
            doc.amount15 = frm.doc.total_due
                 
             var premium = parseFloat(frm.doc.premium_p) || 0;
             var vat = parseFloat(frm.doc.vat_p) || 0;
            var Total1 = premium + vat;
            doc.amount5 = Total1;
            console.log(doc.amount5, "total amount");
            
          var reinsurer1 = parseFloat(frm.doc.reinsurer1) || 0;
         var broker = parseFloat(frm.doc.broker) || 0;
         var beci_commission = parseFloat(frm.doc.beci) || 0;
         var TotalAmount1 = reinsurer1 + broker + beci_commission;
         doc.amount13 = TotalAmount1;
        console.log(doc.amount13, "total amount");

            doc.renewal_top_buttons = "1";
            doc.other_bonds = frm.doc.bond_application;
             frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print External Invoice', response.message.name);
                            }
                        }
                    });

            
        });
    } else if (frm.doc.deputy_sheriff === 1) {
    console.log("Deputy Sheriff Bond application selected.");
    frappe.model.with_doctype('Print External Invoice', () => {
        let doc = frappe.model.get_new_doc('Print External Invoice');
        doc.amount1 = frm.doc.premium_rate;
        doc.amount2 = frm.doc.premium_p;
        doc.amount3 = frm.doc.vat;
        doc.amount4 = frm.doc.vat_p;
        doc.amount6 = frm.doc.reinsurer1;
        doc.amount9 = frm.doc.broker;
        doc.amount11 = frm.doc.beci;
        doc.amount12 = frm.doc.beci_commission;
        doc.amount15 = frm.doc.total_due;
        doc.account  = frm.doc.sheriff_name;
        doc.invoice_n0 = frm.doc.bond_no;

        var premium = parseFloat(frm.doc.premium_p) || 0;
        var vat = parseFloat(frm.doc.vat_p) || 0;
       
        var Total = premium + vat;
        doc.amount5 = Total;
        console.log(doc.amount5, "total amount");

        var reinsurer1 = parseFloat(frm.doc.reinsurer1) || 0;
        var broker = parseFloat(frm.doc.broker) || 0;
        var beci_commission = parseFloat(frm.doc.beci) || 0;
        var TotalAmount = reinsurer1 + broker + beci_commission;
        doc.amount13 = TotalAmount;
        console.log(doc.amount13, "total amount");

        doc.renewal_top_buttons = "1";
        doc.deputyshierff_bonds = frm.doc.deputy_sheriff;
        
          frappe.call({
                        method: 'frappe.client.insert',
                        args: {
                            doc: doc
                        },
                        callback: function(response) {
                            if (!response.exc) {
                                frappe.set_route('Form', 'Print External Invoice', response.message.name);
                            }
                        }
                    });

    });
}

}

// frappe.ui.form.on('Bond Invoice', {
//     refresh(frm) {
//         console.log("Form refreshed.");
//         console.log("Renewal top buttons value:", frm.doc.renewal_top_buttons);

//         if (frm.doc.renewal_top_buttons === "1") {
//             console.log("Renewal top buttons enabled.");

//             frm.add_custom_button(__('Print Internal Invoice '), function() {
//                 console.log("heloooooo");
//                 InternalPrint(frm);
//             }).addClass("btn-primary");

//             frm.add_custom_button(__('Print External Invoice '), function() {
//                 console.log("External Print button clicked.");
//                 ExternalPrint(frm)
//             }).addClass("btn-primary");
//         }
        
//         else if(frm.doc.top_button === "1")
//          frm.add_custom_button(__('Print Internal Invoice '), function() {
//                 console.log("heloooooo");
//                 InternalPrint(frm);
//             }).addClass("btn-primary");

//             frm.add_custom_button(__('Print External Invoice '), function() {
//                 console.log("External Print button clicked.");
//                 ExternalPrint(frm)
//             }).addClass("btn-primary");
//     }
// });


