// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Financial Analysis', {
//     cashlatestyear: function(frm) {
//         calculateTotal(frm);
//     },
//     arly: function(frm) {
//         calculateTotal(frm);
//     },
//     mily: function(frm) {
//         calculateTotal(frm);
//     },
//     pely: function(frm) {
//         calculateTotal(frm);
//     }
// });

// function calculateTotal(frm) {
//     var total = 0;
//     total += parseFloat(frm.doc.cashlatestyear) || 0;
//     total += parseFloat(frm.doc.arly) || 0;
//     total += parseFloat(frm.doc.mily) || 0;
//     total += parseFloat(frm.doc.pely) || 0;
    
//     frm.set_value('tcaly', total);
//     frm.fields_dict.cashlatestyear.$input.css("text-align", "right");
//     frm.fields_dict.cashlatestyear1.$input.css("text-align", "right");
//     frm.fields_dict.cashlatestyear2.$input.css("text-align", "right");
//     frm.fields_dict.cashlatestyear3.$input.css("text-align", "right");
//     frm.fields_dict.cashlatestyear4.$input.css("text-align", "right");
//     frm.fields_dict.cashlatestyear5.$input.css("text-align", "right");
//     frm.fields_dict.arly.$input.css("text-align", "right");
//     frm.fields_dict.arly1.$input.css("text-align", "right");
//     frm.fields_dict.arly3.$input.css("text-align", "right");
//     frm.fields_dict.arly4.$input.css("text-align", "right");
//     frm.fields_dict.arly5.$input.css("text-align", "right");
//     frm.fields_dict.arly6.$input.css("text-align", "right");
//     frm.fields_dict.mily.$input.css("text-align", "right");
//     frm.fields_dict.mily2.$input.css("text-align", "right");
//     frm.fields_dict.mily3.$input.css("text-align", "right");
//     frm.fields_dict.mily4.$input.css("text-align", "right");
//     frm.fields_dict.mily5.$input.css("text-align", "right");
//     frm.fields_dict.mily6.$input.css("text-align", "right");
//     frm.fields_dict.pely.$input.css("text-align", "right");
//     frm.fields_dict.pely2.$input.css("text-align", "right");
//     frm.fields_dict.pely3.$input.css("text-align", "right");
//     frm.fields_dict.pely4.$input.css("text-align", "right");
//     frm.fields_dict.pely5.$input.css("text-align", "right");
//     frm.fields_dict.pely6.$input.css("text-align", "right");
//     frm.fields_dict.tcaly.$input.css("text-align", "right");
//     frm.fields_dict.tcaly2.$input.css("text-align", "right");
//     frm.fields_dict.tcaly3.$input.css("text-align", "right");
//     frm.fields_dict.tcaly4.$input.css("text-align", "right");
//     frm.fields_dict.tcaly5.$input.css("text-align", "right");
//     frm.fields_dict.tcaly6.$input.css("text-align", "right");
//     frm.fields_dict.faely.$input.css("text-align", "right");
//     frm.fields_dict.faely2.$input.css("text-align", "right");
//     frm.fields_dict.faely3.$input.css("text-align", "right");
//     frm.fields_dict.faely4.$input.css("text-align", "right");
//     frm.fields_dict.faely5.$input.css("text-align", "right");
//     frm.fields_dict.faely6.$input.css("text-align", "right");
//     frm.fields_dict.taly.$input.css("text-align", "right");
//     frm.fields_dict.taly2.$input.css("text-align", "right");
//     frm.fields_dict.taly3.$input.css("text-align", "right");
//     frm.fields_dict.taly4.$input.css("text-align", "right");
//     frm.fields_dict.taly5.$input.css("text-align", "right");
//     frm.fields_dict.taly6.$input.css("text-align", "right");
//     frm.fields_dict.acply.$input.css("text-align", "right");
//     frm.fields_dict.acply2.$input.css("text-align", "right");
//     frm.fields_dict.acply3.$input.css("text-align", "right");
//     frm.fields_dict.acply4.$input.css("text-align", "right");
//     frm.fields_dict.acply5.$input.css("text-align", "right");
//     frm.fields_dict.acply6.$input.css("text-align", "right");
//     frm.fields_dict.nply.$input.css("text-align", "right");
//     frm.fields_dict.nply2.$input.css("text-align", "right");
//     frm.fields_dict.nply3.$input.css("text-align", "right");
//     frm.fields_dict.nply4.$input.css("text-align", "right");
//     frm.fields_dict.nply5.$input.css("text-align", "right");
//     frm.fields_dict.nply6.$input.css("text-align", "right");
//     frm.fields_dict.aely.$input.css("text-align", "right");
//     frm.fields_dict.aely2.$input.css("text-align", "right");
//     frm.fields_dict.aely3.$input.css("text-align", "right");
//     frm.fields_dict.aely4.$input.css("text-align", "right");
//     frm.fields_dict.aely5.$input.css("text-align", "right");
//     frm.fields_dict.aely6.$input.css("text-align", "right");
//     frm.fields_dict.tclly.$input.css("text-align", "right");
//     frm.fields_dict.tclly2.$input.css("text-align", "right");
//     frm.fields_dict.tclly3.$input.css("text-align", "right");
//     frm.fields_dict.tclly4.$input.css("text-align", "right");
//     frm.fields_dict.tclly5.$input.css("text-align", "right");
//     frm.fields_dict.tclly6.$input.css("text-align", "right");
//     frm.fields_dict.ltlly.$input.css("text-align", "right");
//     frm.fields_dict.ltlly2.$input.css("text-align", "right");
//     frm.fields_dict.ltlly3.$input.css("text-align", "right");
//     frm.fields_dict.ltlly4.$input.css("text-align", "right");
//     frm.fields_dict.ltlly5.$input.css("text-align", "right");
//     frm.fields_dict.ltlly6.$input.css("text-align", "right");
//     frm.fields_dict.tlly.$input.css("text-align", "right");
//     frm.fields_dict.tlly2.$input.css("text-align", "right");
//     frm.fields_dict.tlly3.$input.css("text-align", "right");
//     frm.fields_dict.tlly4.$input.css("text-align", "right");
//     frm.fields_dict.tlly5.$input.css("text-align", "right");
//     frm.fields_dict.tlly6.$input.css("text-align", "right");
//     frm.fields_dict.coely.$input.css("text-align", "right");
//     frm.fields_dict.coely2.$input.css("text-align", "right");
//     frm.fields_dict.coely3.$input.css("text-align", "right");
//     frm.fields_dict.coely4.$input.css("text-align", "right");
//     frm.fields_dict.coely5.$input.css("text-align", "right");
//     frm.fields_dict.coely6.$input.css("text-align", "right");
//     frm.fields_dict.tlacoely.$input.css("text-align", "right");
//     frm.fields_dict.tlaoely2.$input.css("text-align", "right");
//     frm.fields_dict.tlaoely3.$input.css("text-align", "right");
//     frm.fields_dict.tlaoely4.$input.css("text-align", "right");
//     frm.fields_dict.tlaoely5.$input.css("text-align", "right");
//     frm.fields_dict.tlaoely6.$input.css("text-align", "right");
//     frm.fields_dict.latest_year.$input.css("text-align", "right");
//     frm.fields_dict.latest_year_1.$input.css("text-align", "right");
//     frm.fields_dict.latest_year_3.$input.css("text-align", "right");
//     frm.fields_dict.latest_year_4.$input.css("text-align", "right");
//     frm.fields_dict.latest_year_5.$input.css("text-align", "right");
//     frm.fields_dict.latest_year_6.$input.css("text-align", "right");
//     frm.fields_dict.cogsly.$input.css("text-align", "right");
//     frm.fields_dict.cogsly1.$input.css("text-align", "right");
//     frm.fields_dict.cogsly2.$input.css("text-align", "right");
//     frm.fields_dict.cogsly3.$input.css("text-align", "right");
//     frm.fields_dict.cogsly4.$input.css("text-align", "right");
//     frm.fields_dict.cogsly5.$input.css("text-align", "right");
//     frm.fields_dict.gmly.$input.css("text-align", "right");
//     frm.fields_dict.gmly1.$input.css("text-align", "right");
//     frm.fields_dict.gmly2.$input.css("text-align", "right");
//     frm.fields_dict.gmly3.$input.css("text-align", "right");
//     frm.fields_dict.gmly4.$input.css("text-align", "right");
//     frm.fields_dict.gmly5.$input.css("text-align", "right");
//     frm.fields_dict.ely.$input.css("text-align", "right");
//     frm.fields_dict.ely1.$input.css("text-align", "right");
//     frm.fields_dict.ely2.$input.css("text-align", "right");
//     frm.fields_dict.ely3.$input.css("text-align", "right");
//     frm.fields_dict.ely4.$input.css("text-align", "right");
//     frm.fields_dict.ely5.$input.css("text-align", "right");
//     frm.fields_dict.niftyly.$input.css("text-align", "right");
//     frm.fields_dict.niftyly1.$input.css("text-align", "right");
//     frm.fields_dict.niftyly2.$input.css("text-align", "right");
//     frm.fields_dict.niftyly3.$input.css("text-align", "right");
//     frm.fields_dict.niftyly4.$input.css("text-align", "right");
//     frm.fields_dict.niftyly5.$input.css("text-align", "right");
//     frm.fields_dict.sales.$input.css("text-align", "right");
//     frm.fields_dict.salesly.$input.css("text-align", "right");
//     frm.fields_dict.salesly2.$input.css("text-align", "right");
//     frm.fields_dict.costofgoodssold.$input.css("text-align", "right");
//     frm.fields_dict.costofgoodssoldly1.$input.css("text-align", "right");
//     frm.fields_dict.costofgoodssoldly2.$input.css("text-align", "right");
//     frm.fields_dict.grossmargin.$input.css("text-align", "right");
//     frm.fields_dict.grossmarginly1.$input.css("text-align", "right");
//     frm.fields_dict.grossmarginly2.$input.css("text-align", "right");
//     frm.fields_dict.expenses.$input.css("text-align", "right");
//     frm.fields_dict.expensesly.$input.css("text-align", "right");
//     frm.fields_dict.expensesly2.$input.css("text-align", "right");
//     frm.fields_dict.netincome.$input.css("text-align", "right");
//     frm.fields_dict.netincomely.$input.css("text-align", "right");
//     frm.fields_dict.netincomely2.$input.css("text-align", "right");
//     frm.fields_dict.currentratio.$input.css("text-align", "right");
//     frm.fields_dict.currentratio1.$input.css("text-align", "right");
//     frm.fields_dict.currentratio2.$input.css("text-align", "right");
//     frm.fields_dict.quickratio.$input.css("text-align", "right");
//     frm.fields_dict.quickratio1.$input.css("text-align", "right");
//     frm.fields_dict.quickratio2.$input.css("text-align", "right");
//     frm.fields_dict.debttoquityratio.$input.css("text-align", "right");
//     frm.fields_dict.debttoequityratio1.$input.css("text-align", "right");
//     frm.fields_dict.debttoequityratio2.$input.css("text-align", "right");
//     frm.fields_dict.workingcaptial.$input.css("text-align", "right");
//     frm.fields_dict.workingcaptial1.$input.css("text-align", "right");
//     frm.fields_dict.workingcaptial2.$input.css("text-align", "right");
//     frm.fields_dict.networth.$input.css("text-align", "right");
//     frm.fields_dict.networth1.$input.css("text-align", "right");
//     frm.fields_dict.networth2.$input.css("text-align", "right");
//     frm.fields_dict.dayssalesoutstanding.$input.css("text-align", "right");
//     frm.fields_dict.dayssalesoutstanding1.$input.css("text-align", "right");
//     frm.fields_dict.dayssalesoutstanding2.$input.css("text-align", "right");
//     frm.fields_dict.inventoryturnover.$input.css("text-align", "right");
//     frm.fields_dict.inventoryturnover1.$input.css("text-align", "right");
//     frm.fields_dict.inventoryturnover2.$input.css("text-align", "right");
//     frm.fields_dict.accountpayabletosales.$input.css("text-align", "right");
//     frm.fields_dict.accountpayabletosales1.$input.css("text-align", "right");
//     frm.fields_dict.accountpayabletosales2.$input.css("text-align", "right");
//     frm.fields_dict.accountreceivaleturnover.$input.css("text-align", "right");
//     frm.fields_dict.accountreceivaleturnover1.$input.css("text-align", "right");
//     frm.fields_dict.accountreceivaleturnover2.$input.css("text-align", "right");
//     frm.fields_dict.returnonsales.$input.css("text-align", "right");
//     frm.fields_dict.returnonsales1.$input.css("text-align", "right");
//     frm.fields_dict.returnonsales2.$input.css("text-align", "right");
//     frm.fields_dict.returnoncaptialequity.$input.css("text-align", "right");
//     frm.fields_dict.returnoncaptialequity1.$input.css("text-align", "right");
//     frm.fields_dict.returnoncaptialequity2.$input.css("text-align", "right");
//     frm.fields_dict.returnonassets.$input.css("text-align", "right");
//     frm.fields_dict.returnonassets1.$input.css("text-align", "right");
//     frm.fields_dict.returnonassets2.$input.css("text-align", "right");
//     frm.fields_dict.grossprofitmargin.$input.css("text-align", "right");
//     frm.fields_dict.grossprofitmargin1.$input.css("text-align", "right");
//     frm.fields_dict.grossprofitmargin2.$input.css("text-align", "right");






    
    
    














// }



// frappe.ui.form.on('Financial Analysis', {
//     cashlatestyear1: function(frm) {
//         calculateTotal1(frm);
//     },
//     arly1: function(frm) {
//         calculateTotal1(frm);
//     },
//     mily2: function(frm) {
//         calculateTotal1(frm);
//     },
//     pely2: function(frm) {
//         calculateTotal1(frm);
//     }
// });

// function calculateTotal1(frm) {
//     var total1 = 0;
//     total1 += parseFloat(frm.doc.cashlatestyear1) || 0;
//     total1 += parseFloat(frm.doc.arly1) || 0;
//     total1 += parseFloat(frm.doc.mily2) || 0;
//     total1 += parseFloat(frm.doc.pely2) || 0;
    
//     frm.set_value('tcaly2', total1);
// }

// frappe.ui.form.on('Financial Analysis', {
//     cashlatestyear2: function(frm) {
//         calculateTotal2(frm);
//     },
//     arly3: function(frm) {
//         calculateTotal2(frm);
//     },
//     mily3: function(frm) {
//         calculateTotal2(frm);
//     },
//     pely3: function(frm) {
//         calculateTotal2(frm);
//     }
// });

// function calculateTotal2(frm) {
//     var total2 = 0;
//     total2 += parseFloat(frm.doc.cashlatestyear2) || 0;
//     total2 += parseFloat(frm.doc.arly3) || 0;
//     total2 += parseFloat(frm.doc.mily3) || 0;
//     total2 += parseFloat(frm.doc.pely3) || 0;
    
//     frm.set_value('tcaly3', total2);
// }

// frappe.ui.form.on('Financial Analysis', {
//     tcaly: function(frm) {
//         calculateTotal3(frm);
//     },
//     faely: function(frm) {
//         calculateTotal3(frm);
//     },
   
// });

// function calculateTotal3(frm) {
//     var total3 = 0;
//     total3 += parseFloat(frm.doc.tcaly) || 0;
//     total3 += parseFloat(frm.doc.faely) || 0;

//     frm.set_value('taly', total3);
// }

// frappe.ui.form.on('Financial Analysis', {
//     tcaly2: function(frm) {
//         calculateTotal4(frm);
//     },
//     faely2: function(frm) {
//         calculateTotal4(frm);
//     },
   
// });

// function calculateTotal4(frm) {
//     var total4 = 0;
//     total4 += parseFloat(frm.doc.tcaly2) || 0;
//     total4 += parseFloat(frm.doc.faely2) || 0;

//     frm.set_value('taly2', total4);
// }

// frappe.ui.form.on('Financial Analysis', {
//     tcaly3: function(frm) {
//         calculateTotal5(frm);
//     },
//     faely3: function(frm) {
//         calculateTotal5(frm);
//     },
   
// });

// function calculateTotal5(frm) {
//     var total5 = 0;
//     total5 += parseFloat(frm.doc.tcaly3) || 0;
//     total5 += parseFloat(frm.doc.faely3) || 0;

//     frm.set_value('taly3', total5);
// }

// frappe.ui.form.on('Financial Analysis', {
//     latest_year: function(frm) {
//         calculateTotal6(frm);
//     },
//     cogsly: function(frm) {
//         calculateTotal6(frm);
//     },
   
// });

// function calculateTotal6(frm) {
//     var total6 = 0;
//     total6 += parseFloat(frm.doc.latest_year) || 0;
//     total6 -= parseFloat(frm.doc.cogsly) || 0;

//     frm.set_value('gmly', total6);
// }

// frappe.ui.form.on('Financial Analysis', {
//     latest_year_1: function(frm) {
//         calculateTotal7(frm);
//     },
//     cogsly1: function(frm) {
//         calculateTotal7(frm);
//     },
   
// });

// function calculateTotal7(frm) {
//     var total7 = 0;
//     total7 += parseFloat(frm.doc.latest_year_1) || 0;
//     total7 -= parseFloat(frm.doc.cogsly1) || 0;

//     frm.set_value('gmly1', total7);
// }

// frappe.ui.form.on('Financial Analysis', {
//     latest_year_3: function(frm) {
//         calculateTotal8(frm);
//     },
//     cogsly2: function(frm) {
//         calculateTotal8(frm);
//     },
   
// });

// function calculateTotal8(frm) {
//     var total8 = 0;
//     total8 += parseFloat(frm.doc.latest_year_3) || 0;
//     total8 -= parseFloat(frm.doc.cogsly2) || 0;

//     frm.set_value('gmly2', total8);
// }

// frappe.ui.form.on('Financial Analysis', {
//     gmly: function(frm) {
//         calculateTotal9(frm);
//     },
//     ely: function(frm) {
//         calculateTotal9(frm);
//     },
   
// });

// function calculateTotal9(frm) {
//     var total9 = 0;
//     total9 += parseFloat(frm.doc.gmly) || 0;
//     total9 -= parseFloat(frm.doc.ely) || 0;

//     frm.set_value('niftyly', total9);
// }

// frappe.ui.form.on('Financial Analysis', {
//     gmly1: function(frm) {
//         calculateTotal10(frm);
//     },
//     ely1: function(frm) {
//         calculateTotal10(frm);
//     },
   
// });

// function calculateTotal10(frm) {
//     var total10 = 0;
//     total10 += parseFloat(frm.doc.gmly1) || 0;
//     total10 -= parseFloat(frm.doc.ely1) || 0;

//     frm.set_value('niftyly1', total10);
// }

// frappe.ui.form.on('Financial Analysis', {
//     gmly2: function(frm) {
//         calculateTotal11(frm);
//     },
//     ely2: function(frm) {
//         calculateTotal11(frm);
//     },
   
// });

// function calculateTotal11(frm) {
//     var total11 = 0;
//     total11 += parseFloat(frm.doc.gmly2) || 0;
//     total11 -= parseFloat(frm.doc.ely2) || 0;

//     frm.set_value('niftyly2', total11);
// }



// frappe.ui.form.on('Financial Analysis', {
//     cashlatestyear: function(frm) {
//         calculateCashRatio1(frm);
//     },
//     cashlatestyear1: function(frm) {
//         calculateCashRatio1(frm);
//         calculateCashRatio2(frm);
//     },
//     cashlatestyear2: function(frm) {
//         calculateCashRatio2(frm);
//         calculateCashRatio3(frm);
//     },
//     arly: function(frm) {
//         calculateARLYRatio1(frm);
//         calculateARLYRatio10(frm);
//     },
//     arly1: function(frm) {
//         calculateARLYRatio1(frm);
//         calculateARLYRatio2(frm);
//         calculateARLYRatio20(frm);
//     },
//     arly3: function(frm) {
//         calculateARLYRatio2(frm);
//         calculateARLYRatio3(frm);
//         calculateARLYRatio30(frm);
//     },
//      mily: function(frm) {
//         calculateMILYRatio1(frm);
//         calculateMILYRatio10(frm);
//     },
//     mily2: function(frm) {
//         calculateMILYRatio1(frm);
//         calculateMILYRatio2(frm);
//         calculateMILYRatio20(frm);

//     },
//     mily3: function(frm) {
//         calculateMILYRatio2(frm);
//         calculateMILYRatio3(frm);
//         calculateMILYRatio30(frm);


//     },
//      pely: function(frm) {
//         calculatePELYRatio1(frm);
//     },
//     pely2: function(frm) {
//         calculatePELYRatio1(frm);
//         calculatePELYRatio2(frm);
//     },
//     pely3: function(frm) {
//         calculatePELYRatio2(frm);
//         calculatePELYRatio3(frm);
//     },
//      tcaly: function(frm) {
//         calculateTCALYRatio1(frm);
//         calculateTCALYRatio10(frm);
//         calculateTCALYRatio11(frm);
//     },
//     tcaly2: function(frm) {
//         calculateTCALYRatio1(frm);
//         calculateTCALYRatio2(frm);
//         calculateTCALYRatio20(frm);
//         calculateTCALYRatio22(frm);
//     },
//     tcaly3: function(frm) {
//         calculateTCALYRatio2(frm);
//         calculateTCALYRatio3(frm);
//         calculateTCALYRatio30(frm);
//         calculateTCALYRatio33(frm);

//     },
//     faely: function(frm) {
//         calculateFAELYRatio1(frm);
//     },
//     faely2: function(frm) {
//         calculateFAELYRatio1(frm);
//         calculateFAELYRatio2(frm);
//     },
//     faely3: function(frm) {
//         calculateFAELYRatio2(frm);
//         calculateFAELYRatio3(frm);
//     },
//     taly: function(frm) {
//         calculateTALYRatio1(frm);
//     },
//     taly2: function(frm) {
//         calculateTALYRatio1(frm);
//         calculateTALYRatio2(frm);
//     },
//     taly3: function(frm) {
//         calculateTALYRatio2(frm);
//         calculateTALYRatio3(frm);
//     },
// });

// function calculateCashRatio1(frm) {
//     var cash = parseFloat(frm.doc.cashlatestyear) || 0;
//     var cash1 = parseFloat(frm.doc.cashlatestyear1) || 0;
    
//     if (cash1 === 0) {
//         frm.set_value('cashlatestyear3', '');
//     } else {
//         var ratio = (cash / cash1) * 100;
//         frm.set_value('cashlatestyear3', ratio.toFixed(2));
//     }
// }

// function calculateCashRatio2(frm) {
//     var cash1 = parseFloat(frm.doc.cashlatestyear1) || 0;
//     var cash2 = parseFloat(frm.doc.cashlatestyear2) || 0;
    
//     if (cash1 === 0) { // Corrected this condition from cash2 to cash1
//         frm.set_value('cashlatestyear4', '');
//     } else {
//         var ratio = (cash1 / cash2) * 100;
//         frm.set_value('cashlatestyear4', ratio.toFixed(2));
//     }
// }

// function calculateARLYRatio1(frm) {
//     var arly = parseFloat(frm.doc.arly) || 0;
//     var arly1 = parseFloat(frm.doc.arly1) || 0;
    
//     if (arly1 === 0) {
//         frm.set_value('arly4', '');
//     } else {
//         var ratio = (arly / arly1) * 100;
//         frm.set_value('arly4', ratio.toFixed(2));
//     }
// }

// function calculateARLYRatio2(frm) {
//     var arly1 = parseFloat(frm.doc.arly1) || 0;
//     var arly3 = parseFloat(frm.doc.arly3) || 0;
    
//     if (arly3 === 0) {
//         frm.set_value('arly5', '');
//     } else {
//         var ratio = (arly1 / arly3) * 100;
//         frm.set_value('arly5', ratio.toFixed(2));
//     }
// }

// function calculateMILYRatio1(frm) {
//     var mily = parseFloat(frm.doc.mily) || 0;
//     var mily2 = parseFloat(frm.doc.mily2) || 0;
    
//     if (mily2 === 0) {
//         frm.set_value('mily4', '');
//     } else {
//         var ratio = (mily / mily2) * 100;
//         frm.set_value('mily4', ratio.toFixed(2));
//     }
// }

// function calculateMILYRatio2(frm) {
//     var mily2 = parseFloat(frm.doc.mily2) || 0;
//     var mily3 = parseFloat(frm.doc.mily3) || 0;
    
//     if (mily3 === 0) {
//         frm.set_value('mily5', '');
//     } else {
//         var ratio = (mily2 / mily3) * 100;
//         frm.set_value('mily5', ratio.toFixed(2));
//     }
// }

// function calculatePELYRatio1(frm) {
//     var pely = parseFloat(frm.doc.pely) || 0;
//     var pely2 = parseFloat(frm.doc.pely2) || 0;
    
//     if (pely2 === 0) {
//         frm.set_value('pely4', '');
//     } else {
//         var ratio = (pely / pely2) * 100;
//         frm.set_value('pely4', ratio.toFixed(2));
//     }
// }

// function calculatePELYRatio2(frm) {
//     var pely2 = parseFloat(frm.doc.pely2) || 0;
//     var pely3 = parseFloat(frm.doc.pely3) || 0;
    
//     if (pely3 === 0) {
//         frm.set_value('pely5', '');
//     } else {
//         var ratio = (pely2 / pely3) * 100;
//         frm.set_value('pely5', ratio.toFixed(2));
//     }
// }

// function calculateTCALYRatio1(frm) {
//     var tcaly = parseFloat(frm.doc.tcaly) || 0;
//     var tcaly2 = parseFloat(frm.doc.tcaly2) || 0;
    
//     if (tcaly2 === 0) {
//         frm.set_value('tcaly4', '');
//     } else {
//         var ratio = (tcaly / tcaly2) * 100;
//         frm.set_value('tcaly4', ratio.toFixed(2));
//     }
// }

// function calculateTCALYRatio2(frm) {
//     var tcaly2 = parseFloat(frm.doc.tcaly2) || 0;
//     var tcaly3 = parseFloat(frm.doc.tcaly3) || 0;
    
//     if (tcaly3 === 0) {
//         frm.set_value('tcaly5', '');
//     } else {
//         var ratio = (tcaly2 / tcaly3) * 100;
//         frm.set_value('tcaly5', ratio.toFixed(2));
//     }
// }

// function calculateFAELYRatio1(frm) {
//     var faely = parseFloat(frm.doc.faely) || 0;
//     var faely2 = parseFloat(frm.doc.faely2) || 0;
    
//     if (faely2 === 0) {
//         frm.set_value('faely4', '');
//     } else {
//         var ratio = (faely / faely2) * 100;
//         frm.set_value('faely4', ratio.toFixed(2));
//     }
// }

// function calculateFAELYRatio2(frm) {
//     var faely2 = parseFloat(frm.doc.faely2) || 0;
//     var faely3 = parseFloat(frm.doc.faely3) || 0;
    
//     if (faely3 === 0) {
//         frm.set_value('faely5', '');
//     } else {
//         var ratio = (faely2 / faely3) * 100;
//         frm.set_value('faely5', ratio.toFixed(2));
//     }
// }

// function calculateTALYRatio1(frm) {
//     var taly = parseFloat(frm.doc.taly) || 0;
//     var taly2 = parseFloat(frm.doc.taly2) || 0;
    
//     if (taly2 === 0) {
//         frm.set_value('taly4', '');
//     } else {
//         var ratio = (taly / taly2) * 100;
//         frm.set_value('taly4', ratio.toFixed(2));
//     }
// }

// function calculateTALYRatio2(frm) {
//     var taly2 = parseFloat(frm.doc.taly2) || 0;
//     var taly3 = parseFloat(frm.doc.taly3) || 0;
    
//     if (taly3 === 0) {
//         frm.set_value('taly5', '');
//     } else {
//         var ratio = (taly2 / taly3) * 100;
//         frm.set_value('taly5', ratio.toFixed(2));
//     }
// }











// frappe.ui.form.on('Financial Analysis', {
//     acply: function(frm) {
//         calculateadd(frm);
//     },
//     nply: function(frm) {
//         calculateadd(frm);
//     },
//     aely: function(frm) {
//         calculateadd(frm);
//     }
// });

// function calculateadd(frm) {
//     var add = 0;
//     add += parseFloat(frm.doc.acply) || 0;
//     add += parseFloat(frm.doc.nply) || 0;
//     add += parseFloat(frm.doc.aely) || 0;

//     frm.set_value('tclly', add);
// }

// frappe.ui.form.on('Financial Analysis', {
//     acply2: function(frm) {
//         calculateadd2(frm);
//     },
//     nply2: function(frm) {
//         calculateadd2(frm);
//     },
//     aely2: function(frm) {
//         calculateadd2(frm);
//     }
// });

// function calculateadd2(frm) {
//     var add2 = 0;
//     add2 += parseFloat(frm.doc.acply2) || 0;
//     add2 += parseFloat(frm.doc.nply2) || 0;
//     add2 += parseFloat(frm.doc.aely2) || 0;

//     frm.set_value('tclly2', add2);
// }


// frappe.ui.form.on('Financial Analysis', {
//     acply3: function(frm) {
//         calculateadd3(frm);
//     },
//     nply3: function(frm) {
//         calculateadd3(frm);
//     },
//     aely3: function(frm) {
//         calculateadd3(frm);
//     },
   
// });

// function calculateadd3(frm) {
//     var add3 = 0;
//     add3 += parseFloat(frm.doc.acply3) || 0;
//     add3 += parseFloat(frm.doc.nply3) || 0;
//     add3 += parseFloat(frm.doc.aely3) || 0;

//     frm.set_value('tclly3', add3);
// }


// frappe.ui.form.on('Financial Analysis', {
//     tclly: function(frm) {
//         calculateadd4(frm);
//     },
//     ltlly: function(frm) {
//         calculateadd4(frm);
//     },
   
// });

// function calculateadd4(frm) {
//     var add4 = 0;
//     add4 += parseFloat(frm.doc.tclly) || 0;
//     add4 += parseFloat(frm.doc.ltlly) || 0;

//     frm.set_value('tlly', add4);
// }


// frappe.ui.form.on('Financial Analysis', {
//     tclly2: function(frm) {
//         calculateadd5(frm);
//     },
//     ltlly2: function(frm) {
//         calculateadd5(frm);
//     },
   
// });

// function calculateadd5(frm) {
//     var add5 = 0;
//     add5 += parseFloat(frm.doc.tclly2) || 0;
//     add5 += parseFloat(frm.doc.ltlly2) || 0;

//     frm.set_value('tlly2', add5);
// }

// frappe.ui.form.on('Financial Analysis', {
//     tclly3: function(frm) {
//         calculateadd6(frm);
//     },
//     ltlly3: function(frm) {
//         calculateadd6(frm);
//     },
//     tlly: function(frm) {
//         calculateaddh(frm);
//     },
//     coely: function(frm) {
//         calculateaddh(frm);
//     },    
//     tlly2: function(frm) {
//         calculateaddh1(frm);
//     },
//     coely2: function(frm) {
//         calculateaddh1(frm);
//     },
//     tlly2: function(frm) {
//         calculateaddh2(frm);
//     },
//     coely3: function(frm) {
//         calculateaddh2(frm);
//     },
   
// });

// function calculateadd6(frm) {
//     var add6 = 0;
//     add6 += parseFloat(frm.doc.tclly3) || 0;
//     add6 += parseFloat(frm.doc.ltlly3) || 0;

//     frm.set_value('tlly3', add6);
// }

// function calculateaddh(frm) {
//     var addh = 0;
//     addh += parseFloat(frm.doc.tlly) || 0;
//     addh += parseFloat(frm.doc.coely) || 0;

//     frm.set_value('tlacoely', addh);
// }


// function calculateaddh1(frm) {
//     var addh1 = 0;
//     addh1 += parseFloat(frm.doc.tlly2) || 0;
//     addh1 += parseFloat(frm.doc.coely2) || 0;

//     frm.set_value('tlaoely2', addh1);
// }

// function calculateaddh2(frm) {
//     var addh2 = 0;
//     addh2 += parseFloat(frm.doc.tlly3) || 0;
//     addh2 += parseFloat(frm.doc.coely3) || 0;

//     frm.set_value('tlaoely3', addh2);
// }

// frappe.ui.form.on('Financial Analysis', {
//     acply: function(frm) {
//         calculateACPLYRatio1(frm);
//         calculateACPLYRatio10(frm);
//     },
//     acply2: function(frm) {
//         calculateACPLYRatio1(frm);
//         calculateACPLYRatio2(frm);
//         calculateACPLYRatio20(frm);
//     },
//     acply3: function(frm) {
//         calculateACPLYRatio2(frm);
//         calculateACPLYRatio3(frm);
//         calculateACPLYRatio30(frm);
//     },
//     nply: function(frm) {
//         calculateARLYRatio1(frm);
//     },
//     nply2: function(frm) {
//         calculateNPLYRatio1(frm);
//         calculateNPLYRatio2(frm);
//     },
//     nply3: function(frm) {
//         calculateNPLYRatio2(frm);
//         calculateNPLYRatio3(frm);
//     },
//      aely: function(frm) {
//         calculateAELYRatio1(frm);
//     },
//     aely2: function(frm) {
//         calculateAELYRatio1(frm);
//         calculateAELYRatio2(frm);
//     },
//     aely3: function(frm) {
//         calculateAELYRatio2(frm);
//         calculateAELYRatio3(frm);
//     },
//      tclly: function(frm) {
//         calculateTCLLYRatio1(frm);
//         calculateTCLLYRatio10(frm);
//     },
//     tclly2: function(frm) {
//         calculateTCLLYRatio1(frm);
//         calculateTCLLYRatio2(frm);
//         calculateTCLLYRatio20(frm);
//     },
//     tclly3: function(frm) {
//         calculateTCLLYRatio2(frm);
//         calculateTCLLYRatio3(frm);
//         calculateTCLLYRatio30(frm);

        
//     },
//      ltlly: function(frm) {
//         calculateLTLLYRatio1(frm);
//     },
//     ltlly2: function(frm) {
//         calculateLTLLYRatio1(frm);
//         calculateLTLLYRatio2(frm);
//     },
//     ltlly3: function(frm) {
//         calculateLTLLYRatio2(frm);
//         calculateLTLLYRatio3(frm);
//     },
//     tlly: function(frm) {
//         calculateTLLYRatio1(frm);
//         calculateTLLYRatio10(frm);
//     },
//     tlly2: function(frm) {
//         calculateTLLYRatio1(frm);
//         calculateTLLYRatio2(frm);
//         calculateTLLYRatio20(frm);
//     },
//     tlly3: function(frm) {
//         calculateTLLYRatio2(frm);
//         calculateTLLYRatio3(frm);
//         calculateTLLYRatio30(frm);
//     },
//     coely: function(frm) {
//         calculateCOELYRatio1(frm);
//         calculateCOELYRatio10(frm);
//     },
//     coely2: function(frm) {
//         calculateCOELYRatio1(frm);
//         calculateCOELYRatio2(frm);
//         calculateCOELYRatio20(frm);
//     },
//     coely3: function(frm) {
//         calculateCOELYRatio2(frm);
//         calculateCOELYRatio3(frm);
//         calculateCOELYRatio30(frm);

//     },
//     tlacoely: function(frm) {
//         calculateTLACOELYRatio1(frm);
//     },
//     tlaoely2: function(frm) {
//         calculateTLACOELYRatio1(frm);
//         calculateTLACOELYRatio2(frm);
//     },
//     tlaoely3: function(frm) {
//         calculateTLACOELYRatio2(frm);
//         calculateTLACOELYRatio3(frm);
//     },
// });

// function calculateACPLYRatio1(frm) {
//     var acply = parseFloat(frm.doc.acply) || 0;
//     var acply2 = parseFloat(frm.doc.acply2) || 0;
    
//     if (acply2 === 0) {
//         frm.set_value('acply4', '');
//     } else {
//         var ratio = (acply / acply2) * 100;
//         frm.set_value('acply4', ratio.toFixed(2));
//     }
// }

// function calculateACPLYRatio2(frm) {
//     var acply2 = parseFloat(frm.doc.acply2) || 0;
//     var acply3 = parseFloat(frm.doc.acply3) || 0;
    
//     if (acply3 === 0) { // Corrected this condition from cash2 to cash1
//         frm.set_value('acply5', '');
//     } else {
//         var ratio = (acply2 / acply3) * 100;
//         frm.set_value('acply5', ratio.toFixed(2));
//     }
// }

// function calculateNPLYRatio1(frm) {
//     var nply = parseFloat(frm.doc.nply) || 0;
//     var nply2 = parseFloat(frm.doc.nply2) || 0;
    
//     if (nply2 === 0) {
//         frm.set_value('nply4', '');
//     } else {
//         var ratio = (nply / nply2) * 100;
//         frm.set_value('nply4', ratio.toFixed(2));
//     }
// }

// function calculateNPLYRatio2(frm) {
//     var nply2 = parseFloat(frm.doc.nply2) || 0;
//     var nply3 = parseFloat(frm.doc.nply3) || 0;
    
//     if (nply3 === 0) {
//         frm.set_value('nply5', '');
//     } else {
//         var ratio = (nply2 / nply3) * 100;
//         frm.set_value('nply5', ratio.toFixed(2));
//     }
// }

// function calculateAELYRatio1(frm) {
//     var aely = parseFloat(frm.doc.aely) || 0;
//     var aely2 = parseFloat(frm.doc.aely2) || 0;
    
//     if (aely2 === 0) {
//         frm.set_value('aely4', '');
//     } else {
//         var ratio = (aely / aely2) * 100;
//         frm.set_value('aely4', ratio.toFixed(2));
//     }
// }

// function calculateAELYRatio2(frm) {
//     var aely2 = parseFloat(frm.doc.aely2) || 0;
//     var aely3 = parseFloat(frm.doc.aely3) || 0;
    
//     if (aely3 === 0) {
//         frm.set_value('aely5', '');
//     } else {
//         var ratio = (aely2 / aely3) * 100;
//         frm.set_value('aely5', ratio.toFixed(2));
//     }
// }

// function calculateTCLLYRatio1(frm) {
//     var tclly = parseFloat(frm.doc.tclly) || 0;
//     var tclly2 = parseFloat(frm.doc.tclly2) || 0;
    
//     if (tclly2 === 0) {
//         frm.set_value('tclly4', '');
//     } else {
//         var ratio = (tclly / tclly2) * 100;
//         frm.set_value('tclly4', ratio.toFixed(2));
//     }
// }

// function calculateTCLLYRatio2(frm) {
//     var tclly2 = parseFloat(frm.doc.tclly2) || 0;
//     var tclly3 = parseFloat(frm.doc.tclly3) || 0;
    
//     if (tclly3 === 0) {
//         frm.set_value('tclly5', '');
//     } else {
//         var ratio = (tclly2 / tclly3) * 100;
//         frm.set_value('tclly5', ratio.toFixed(2));
//     }
// }

// function calculateLTLLYRatio1(frm) {
//     var ltlly = parseFloat(frm.doc.ltlly) || 0;
//     var ltlly2 = parseFloat(frm.doc.ltlly2) || 0;
    
//     if (ltlly2 === 0) {
//         frm.set_value('ltlly4', '');
//     } else {
//         var ratio = (ltlly / ltlly2) * 100;
//         frm.set_value('ltlly4', ratio.toFixed(2));
//     }
// }

// function calculateLTLLYRatio2(frm) {
//     var ltlly2 = parseFloat(frm.doc.ltlly2) || 0;
//     var ltlly3 = parseFloat(frm.doc.ltlly3) || 0;
    
//     if (ltlly3 === 0) {
//         frm.set_value('ltlly5', '');
//     } else {
//         var ratio = (ltlly2 / ltlly3) * 100;
//         frm.set_value('ltlly5', ratio.toFixed(2));
//     }
// }

// function calculateTLLYRatio1(frm) {
//     var tlly = parseFloat(frm.doc.tlly) || 0;
//     var tlly2 = parseFloat(frm.doc.tlly2) || 0;
    
//     if (tlly2 === 0) {
//         frm.set_value('tlly2', '');
//     } else {
//         var ratio = (tlly / tlly2) * 0;
//         frm.set_value('tlly4', ratio.toFixed(2));
//     }
// }

// function calculateTLLYRatio2(frm) {
//     var tlly2 = parseFloat(frm.doc.tlly2) || 0;
//     var tlly3 = parseFloat(frm.doc.tlly3) || 0;
    
//     if (tlly3 === 0) {
//         frm.set_value('tlly3', '');
//     } else {
//         var ratio = (tlly2 / tlly3) * 0;
//         frm.set_value('tlly5', ratio.toFixed(2));
//     }
// }

// function calculateCOELYRatio1(frm) {
//     var coely = parseFloat(frm.doc.coely) || 0;
//     var coely2 = parseFloat(frm.doc.coely2) || 0;
    
//     if (coely2 === 0) {
//         frm.set_value('coely4', '');
//     } else {
//         var ratio = (coely / coely2) * 100;
//         frm.set_value('coely4', ratio.toFixed(2));
//     }
// }

// function calculateCOELYRatio2(frm) {
//     var coely2 = parseFloat(frm.doc.coely2) || 0;
//     var coely3 = parseFloat(frm.doc.coely3) || 0;
    
//     if (coely3 === 0) {
//         frm.set_value('coely5', '');
//     } else {
//         var ratio = (coely2 / coely3) * 100;
//         frm.set_value('coely5', ratio.toFixed(2));
//     }
// }


// function calculateTLACOELYRatio1(frm) {
//     var tlacoely = parseFloat(frm.doc.tlacoely) || 0;
//     var tlaoely2 = parseFloat(frm.doc.tlaoely2) || 0;
    
//     if (tlaoely2 === 0) {
//         frm.set_value('tlaoely4', '');
//     } else {
//         var ratio = (tlacoely / tlaoely2) * 100;
//         frm.set_value('tlaoely4', ratio.toFixed(2));
//     }
// }

// function calculateTLACOELYRatio2(frm) {
//     var tlaoely2 = parseFloat(frm.doc.tlaoely2) || 0;
//     var tlaoely3 = parseFloat(frm.doc.tlaoely3) || 0;
    
//     if (tlaoely3 === 0) {
//         frm.set_value('tlaoely5', '');
//     } else {
//         var ratio = (tlaoely2 / tlaoely3) * 100;
//         frm.set_value('tlaoely5', ratio.toFixed(2));
//     }
// }

// frappe.ui.form.on('Financial Analysis', {
//     tclly: function(frm) {
//         calculateadd7(frm);
//     },
//     ltlly: function(frm) {
//         calculateadd7(frm);
//     },
   
// });

// function calculateadd7(frm) {
//     var add7 = 0;
//     add7 += parseFloat(frm.doc.tclly) || 0;
//     add7 += parseFloat(frm.doc.ltlly) || 0;

//     frm.set_value('tlacoely', add7);
// }


// frappe.ui.form.on('Financial Analysis', {
//     tclly2: function(frm) {
//         calculateadd8(frm);
//     },
//     ltlly2: function(frm) {
//         calculateadd8(frm);
//     },
   
// });

// function calculateadd8(frm) {
//     var add8 = 0;
//     add8 += parseFloat(frm.doc.tclly2) || 0;
//     add8 += parseFloat(frm.doc.ltlly2) || 0;

//     frm.set_value('tlaoely2', add8);
// }


// frappe.ui.form.on('Financial Analysis', {
//     tclly3: function(frm) {
//         calculateadd9(frm);
//     },
//     ltlly3: function(frm) {
//         calculateadd9(frm);
//     },
   
// });

// function calculateadd9(frm) {
//     var add9 = 0;
//     add9 += parseFloat(frm.doc.tclly3) || 0;
//     add9 += parseFloat(frm.doc.ltlly3) || 0;

//     frm.set_value('tlaoely3', add9);
// }


// frappe.ui.form.on('Financial Analysis', {
//     latest_year: function(frm) {
//         calculateNetRatio1(frm);
//         calculateNetRatio10(frm);
//         calculateNetRatioh1(frm);
//         calculateNetRatioh11(frm);
//     },
//     latest_year_1: function(frm) {
//         calculateNetRatio1(frm);
//         calculateNetRatio2(frm);
//         calculateNetRatio20(frm);
//         calculateNetRatioh2(frm);
//         calculateNetRatioh22(frm);
//     },
//     latest_year_3: function(frm) {
//         calculateNetRatio3(frm);
//         calculateNetRatio2(frm);
//         calculateNetRatio30(frm);
//         calculateNetRatioh3(frm);
//         calculateNetRatioh33(frm);
//     },
//     cogsly: function(frm) {
//         calculatecogslyRatio1(frm);
//         calculatecogslyRatio10(frm);
//         calculatecogslyRatioh1(frm);
//     },
//     cogsly1: function(frm) {
//         calculatecogslyRatio1(frm);
//         calculatecogslyRatio2(frm);
//         calculatecogslyRatio20(frm);
//         calculatecogslyRatioh2(frm);
//     },
//     cogsly2: function(frm) {
//         calculatecogslyRatio3(frm);
//         calculatecogslyRatio2(frm);
//         calculatecogslyRatio30(frm);
//         calculatecogslyRatioh3(frm);
//     },
//     gmly: function(frm) {
//         calculategmlyRatio1(frm);
//     },
//     gmly1: function(frm) {
//         calculategmlyRatio2(frm);
//         calculategmlyRatio1(frm);
//     },
//     gmly2: function(frm) {
//         calculategmlyRatio3(frm);
//         calculategmlyRatio2(frm);
//     },
//     ely: function(frm) {
//         calculateelyRatio1(frm);
//         calculateelyRatio11(frm);
//     },
//     ely1: function(frm) {
//         calculateelyRatio2(frm);
//         calculateelyRatio1(frm);
//         calculateelyRatio22(frm);
//     },
//     ely2: function(frm) {
//         calculateelyRatio3(frm);
//         calculateelyRatio2(frm);
//         calculateelyRatio33(frm);
//     },
//     niftyly: function(frm) {
//         calculateniftylyRatio1(frm);
//         calculateniftylyRatio10(frm);
//         calculateniftylyRatio11(frm);
//         calculateniftylyRatioh1(frm);
//     },
//     niftyly1: function(frm) {
//         calculateniftylyRatio1(frm);
//         calculateniftylyRatio2(frm);
//         calculateniftylyRatio20(frm);
//         calculateniftylyRatio22(frm);
//         calculateniftylyRatioh2(frm);
//     },
//     niftyly2: function(frm) {
//         calculateniftylyRatio3(frm);
//         calculateniftylyRatio2(frm);
//         calculateniftylyRatio30(frm);
//         calculateniftylyRatio33(frm);
//         calculateniftylyRatioh3(frm);
//     }
     
   
// });

// function calculateNetRatio1(frm) {
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (latest_year === 0) {
//         frm.set_value('latest_year_4', '');
//     } else {
//         var ratio = (latest_year / latest_year_1) * 100;
//         frm.set_value('latest_year_4', ratio.toFixed(2));
//     }
// }

// function calculateNetRatio2(frm) {
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;
    
//     if (latest_year_1 === 0) {
//         frm.set_value('latest_year_5', '');
//     } else {
//         var ratio = (latest_year_1 / latest_year_3) * 100;
//         frm.set_value('latest_year_5', ratio.toFixed(2));
//     }
// }

// function calculateNetRatio3(frm) {
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;
    
//     if (latest_year_3 === 0) {
//         frm.set_value('latest_year_6', '');
//     } else {
//         var ratio = (latest_year_3 / latest_year_3) * 100;
//         frm.set_value('latest_year_6', ratio.toFixed(2));
//     }
// }


// function calculatecogslyRatio1(frm) {
//     var cogsly = parseFloat(frm.doc.cogsly) || 0;
//     var cogsly1 = parseFloat(frm.doc.cogsly1) || 0;

//     if (cogsly === 0) {
//         frm.set_value('cogsly3', '');
//     } else {
//         var ratio = (cogsly / cogsly1) * 100;
//         frm.set_value('cogsly3', ratio.toFixed(2));
//     }
// }
// function calculatecogslyRatio2(frm) {
//     var cogsly1 = parseFloat(frm.doc.cogsly1) || 0;
//     var cogsly2 = parseFloat(frm.doc.cogsly2) || 0;

//     if (cogsly1 === 0) {
//         frm.set_value('cogsly4', '');
//     } else {
//         var ratio = (cogsly1 / cogsly2) * 100;
//         frm.set_value('cogsly4', ratio.toFixed(2));
//     }
// }

// function calculatecogslyRatio3(frm) {
//     var cogsly2 = parseFloat(frm.doc.cogsly2) || 0;
//     var cogsly2 = parseFloat(frm.doc.cogsly2) || 0;

//     if (cogsly2 === 0) {
//         frm.set_value('cogsly5', '');
//     } else {
//         var ratio = (cogsly2 / cogsly2) * 100;
//         frm.set_value('cogsly5', ratio.toFixed(2));
//     }
// }


// function calculategmlyRatio1(frm) {
//     var gmly = parseFloat(frm.doc.gmly) || 0;
//     var gmly1 = parseFloat(frm.doc.gmly1) || 0;

//     if (gmly === 0) {
//         frm.set_value('gmly3', '');
//     } else {
//         var ratio = (gmly / gmly1) * 100;
//         frm.set_value('gmly3', ratio.toFixed(2));
//     }
// }
// function calculategmlyRatio2(frm) {
//     var gmly1 = parseFloat(frm.doc.gmly1) || 0;
//     var gmly2 = parseFloat(frm.doc.gmly2) || 0;

//     if (gmly1 === 0) {
//         frm.set_value('gmly4', '');
//     } else {
//         var ratio = (gmly1 / gmly2) * 100;
//         frm.set_value('gmly4', ratio.toFixed(2));
//     }
// }

// function calculategmlyRatio3(frm) {
//     var gmly2 = parseFloat(frm.doc.gmly2) || 0;
//     var gmly2 = parseFloat(frm.doc.gmly2) || 0;

//     if (gmly2 === 0) {
//         frm.set_value('gmly5', '');
//     } else {
//         var ratio = (gmly2 / gmly2) * 100;
//         frm.set_value('gmly5', ratio.toFixed(2));
//     }
// }

// function calculateelyRatio1(frm) {
//     var ely = parseFloat(frm.doc.ely) || 0;
//     var ely1 = parseFloat(frm.doc.ely1) || 0;

//     if (ely === 0) {
//         frm.set_value('ely3', '');
//     } else {
//         var ratio = (ely / ely1) * 100;
//         frm.set_value('ely3', ratio.toFixed(2));
//     }
// }
// function calculateelyRatio2(frm) {
//     var ely1 = parseFloat(frm.doc.ely1) || 0;
//     var ely2 = parseFloat(frm.doc.ely2) || 0;

//     if (ely1 === 0) {
//         frm.set_value('ely4', '');
//     } else {
//         var ratio = (ely1 / ely2) * 100;
//         frm.set_value('ely4', ratio.toFixed(2));
//     }
// }

// function calculateelyRatio3(frm) {
//     var ely2 = parseFloat(frm.doc.ely2) || 0;
//     var ely2 = parseFloat(frm.doc.ely2) || 0;

//     if (ely2 === 0) {
//         frm.set_value('ely5', '');
//     } else {
//         var ratio = (ely2 / ely2) * 100;
//         frm.set_value('ely5', ratio.toFixed(2));
//     }
// }

// function calculateniftylyRatio1(frm) {
//     var niftyly = parseFloat(frm.doc.niftyly) || 0;
//     var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;

//     if (niftyly === 0) {
//         frm.set_value('niftyly3', '');
//     } else {
//         var ratio = (niftyly / niftyly1) * 100;
//         frm.set_value('niftyly3', ratio.toFixed(2));
//     }
// }
// function calculateniftylyRatio2(frm) {
//     var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;
//     var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;

//     if (niftyly1 === 0) {
//         frm.set_value('niftyly4', '');
//     } else {
//         var ratio = (niftyly1 / niftyly2) * 100;
//         frm.set_value('niftyly4', ratio.toFixed(2));
//     }
// }
// function calculateniftylyRatio3(frm) {
//     var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;
//     var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;

//     if (niftyly2 === 0) {
//         frm.set_value('niftyly5', '');
//     } else {
//         var ratio = (niftyly2 / niftyly2) * 100;
//         frm.set_value('niftyly5', ratio.toFixed(2));
//     }
// }


// function calculateTCALYRatio10(frm) {
//     var tclly = parseFloat(frm.doc.tclly) || 0;
//     var tcaly = parseFloat(frm.doc.tcaly) || 0;

//     if (tcaly === 0) {
//         frm.set_value('currentratio', '');
//     } else {
//         var ratio = (tclly / tcaly) ;
//         frm.set_value('currentratio', ratio.toFixed(2));
//     }
// }

// function calculateTCALYRatio20(frm) {
//     var tclly2 = parseFloat(frm.doc.tclly2) || 0;
//     var tcaly2 = parseFloat(frm.doc.tcaly2) || 0;

//     if (tcaly2 === 0) {
//         frm.set_value('currentratio1', '');
//     } else {
//         var ratio = (tclly2 / tcaly2) ;
//         frm.set_value('currentratio1', ratio.toFixed(2));
//     }
// }

// function calculateTCALYRatio30(frm) {
//     var tclly3 = parseFloat(frm.doc.tclly3) || 0;
//     var tcaly3 = parseFloat(frm.doc.tcaly3) || 0;

//     if (tcaly3 === 0) {
//         frm.set_value('currentratio2', '');
//     } else {
//         var ratio = (tclly3 / tcaly3);
//         frm.set_value('currentratio2', ratio.toFixed(2));
//     }
// }



// function calculateTCLLYRatio10(frm) {
//     var tclly = parseFloat(frm.doc.tclly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (tclly === 0) {
//         frm.set_value('quickratio', '');
//     } else {
//         var ratio = (tclly / latest_year) ;
//         frm.set_value('quickratio', ratio.toFixed(2));
//     }
// }

// function calculateTCLLYRatio20(frm) {
//     var tclly2 = parseFloat(frm.doc.tclly2) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (tclly2 === 0) {
//         frm.set_value('quickratio1', '');
//     } else {
//         var ratio = (tclly2 / latest_year_1) ;
//         frm.set_value('quickratio1', ratio.toFixed(2));
//     }
// }

// function calculateTCLLYRatio30(frm) {
//     var tclly3 = parseFloat(frm.doc.tclly3) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (tclly3 === 0) {
//         frm.set_value('quickratio2', '');
//     } else {
//         var ratio = (tclly3 / latest_year_3);
//         frm.set_value('quickratio2', ratio.toFixed(2));
//     }
// }

// function calculateMILYRatio10(frm) {
//     var mily = parseFloat(frm.doc.mily) || 0;

//         var ratio = (365 / mily);
//         frm.set_value('dayssalesoutstanding', ratio.toFixed(2));
    
// }


// function calculateMILYRatio20(frm) {
//     var mily2 = parseFloat(frm.doc.mily2) || 0;

    
//         var ratio = (365 / mily2) ;
//         frm.set_value('dayssalesoutstanding1', ratio.toFixed(2));
//     }

// function calculateMILYRatio30(frm) {
//     var mily3 = parseFloat(frm.doc.mily3) || 0;

    
//         var ratio = (365 / mily3) ;
//         frm.set_value('dayssalesoutstanding2', ratio.toFixed(2));
//     }


// function calculatecogslyRatio10(frm) {
//     var cogsly = parseFloat(frm.doc.cogsly) || 0;
//     var mily = parseFloat(frm.doc.mily) || 0;

//     if (cogsly === 0) {
//         frm.set_value('inventoryturnover', '');
//     } else {
//         var ratio = (cogsly / mily);
//         frm.set_value('inventoryturnover', ratio.toFixed(2));
//     }
// }

// function calculatecogslyRatio20(frm) {
//     var cogsly1 = parseFloat(frm.doc.cogsly1) || 0;
//     var mily2 = parseFloat(frm.doc.mily2) || 0;

//     if (cogsly1 === 0) {
//         frm.set_value('inventoryturnover1', '');
//     } else {
//         var ratio = (cogsly1 / mily2);
//         frm.set_value('inventoryturnover1', ratio.toFixed(2));
//     }
// }

// function calculatecogslyRatio30(frm) {
//     var cogsly2 = parseFloat(frm.doc.cogsly2) || 0;
//     var mily3 = parseFloat(frm.doc.mily3) || 0;

//     if (cogsly2 === 0) {
//         frm.set_value('inventoryturnover2', '');
//     } else {
//         var ratio = (cogsly2 / mily3);
//         frm.set_value('inventoryturnover2', ratio.toFixed(2));
//     }
// }


// function calculateACPLYRatio10(frm) {
//     var cogsly = parseFloat(frm.doc.cogsly) || 0;
//     var acply = parseFloat(frm.doc.acply) || 0;

//     if (acply === 0) {
//         frm.set_value('accountpayabletosales', '');
//     } else {
//         var ratio = (cogsly / acply);
//         frm.set_value('accountpayabletosales', ratio.toFixed(2));
//     }
// }
// function calculateACPLYRatio20(frm) {
//     var cogsly1 = parseFloat(frm.doc.cogsly1) || 0;
//     var acply2 = parseFloat(frm.doc.acply2) || 0;

//     if (acply2 === 0) {
//         frm.set_value('accountpayabletosales1', '');
//     } else {
//         var ratio = (cogsly1 / acply2);
//         frm.set_value('accountpayabletosales1', ratio.toFixed(2));
//     }
// }




// function calculateACPLYRatio30(frm) {
//     var cogsly2 = parseFloat(frm.doc.cogsly2) || 0;
//     var acply3 = parseFloat(frm.doc.acply3) || 0;

//     if (acply3 === 0) {
//         frm.set_value('accountpayabletosales2', '');
//     } else {
//         var ratio = (cogsly2 / acply3);
//         frm.set_value('accountpayabletosales2', ratio.toFixed(2));
//     }
// }

// function calculateniftylyRatio10(frm) {
//     var niftyly = parseFloat(frm.doc.niftyly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;


    
//         var ratio = (niftyly / latest_year) * 100 ;
//         frm.set_value('returnonsales', ratio.toFixed(2));
//     }
    
// function calculateniftylyRatio20(frm) {
//     var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;


    
//         var ratio = (niftyly1 / latest_year_1) * 100 ;
//         frm.set_value('returnonsales1', ratio.toFixed(2));
//     }

// function calculateniftylyRatio30(frm) {
//     var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;


    
//         var ratio = (niftyly2 / latest_year_3) * 100 ;
//         frm.set_value('returnonsales2', ratio.toFixed(2));
//     }



// function calculateTLLYRatio10(frm) {
//     var add10 = 0;
//     add10 += parseFloat(frm.doc.taly) || 0;
//     add10 -= parseFloat(frm.doc.tlly) || 0;

//     frm.set_value('networth', add10);
// }

// function calculateTLLYRatio20(frm) {
//     var add11 = 0;
//     add11 += parseFloat(frm.doc.taly2) || 0;
//     add11 -= parseFloat(frm.doc.tlly2) || 0;

//     frm.set_value('networth1', add11);
// }

// function calculateTLLYRatio30(frm) {
//     var add12 = 0;
//     add12 += parseFloat(frm.doc.taly3) || 0;
//     add12 -= parseFloat(frm.doc.tlly3) || 0;

//     frm.set_value('networth2', add12);
// }

// function calculateARLYRatio10(frm) {
//     var arly = parseFloat(frm.doc.arly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (arly === 0) {
//         frm.set_value('accountreceivaleturnover', '');
//     } else {
//         var ratio = (arly / latest_year);
//         frm.set_value('accountreceivaleturnover', ratio.toFixed(2));
//     }
// }

// function calculateARLYRatio20(frm) {
//     var arly1 = parseFloat(frm.doc.arly1) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (arly1 === 0) {
//         frm.set_value('accountreceivaleturnover1', '');
//     } else {
//         var ratio = (arly1 / latest_year);
//         frm.set_value('accountreceivaleturnover1', ratio.toFixed(2));
//     }
// }

// function calculateARLYRatio30(frm) {
//     var arly3 = parseFloat(frm.doc.arly3) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (arly3 === 0) {
//         frm.set_value('accountreceivaleturnover2', '');
//     } else {
//         var ratio = (arly3 / latest_year);
//         frm.set_value('accountreceivaleturnover2', ratio.toFixed(2));
//     }
// }


// function calculateTCALYRatio11(frm) {
//     var add13 = 0;
//     add13 += parseFloat(frm.doc.tcaly) || 0;
//     add13 -= parseFloat(frm.doc.tclly) || 0;

//     frm.set_value('workingcaptial', add13);
// }


// function calculateTCALYRatio22(frm) {
//     var add14 = 0;
//     add14 += parseFloat(frm.doc.tcaly2) || 0;
//     add14 -= parseFloat(frm.doc.tclly2) || 0;

//     frm.set_value('workingcaptial1', add14);
// }


// function calculateTCALYRatio33(frm) {
//     var add15 = 0;
//     add15 += parseFloat(frm.doc.tcaly3) || 0;
//     add15 -= parseFloat(frm.doc.tclly3) || 0;

//     frm.set_value('workingcaptial2', add15);
// }

// function calculateNetRatio10(frm) {
//     var niftyly = parseFloat(frm.doc.niftyly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (latest_year === 0) {
//         frm.set_value('grossprofitmargin', '');
//     } else {
//         var ratio = (niftyly / latest_year);
//         frm.set_value('grossprofitmargin', ratio.toFixed(2));
//     }
// }

// function calculateNetRatio20(frm) {
//     var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (latest_year_1 === 0) {
//         frm.set_value('grossprofitmargin', '');
//     } else {
//         var ratio = (niftyly1 / latest_year_1);
//         frm.set_value('grossprofitmargin1', ratio.toFixed(2));
//     }
// }

// function calculateNetRatio30(frm) {
//     var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (latest_year_3 === 0) {
//         frm.set_value('grossprofitmargin', '');
//     } else {
//         var ratio = (niftyly2 / latest_year_3);
//         frm.set_value('grossprofitmargin2', ratio.toFixed(2));
//     }
// }


// frappe.ui.form.on('finance Analysis', {
//     workingcaptial: function(frm) {
//         calculateWCRatio1(frm);
//     },
//     workingcaptial1: function(frm) {
//         calculateWCRatio2(frm);
//     },
//     workingcaptial2: function(frm) {
//         calculateWCRatio3(frm);
//     }
// });

// function calculateWCRatio1(frm) {
//     var niftyly = parseFloat(frm.doc.niftyly) || 0;
//     var workingcaptial = parseFloat(frm.doc.workingcaptial) || 0;

//     if (workingcaptial === 0 || niftyly === 0) {
//         frm.set_value('returnoncaptialequity', '');
//     } else {
//         var ratio = niftyly / workingcaptial;
//         frm.set_value('returnoncaptialequity', ratio.toFixed(2));
//     }
// }

// function calculateWCRatio2(frm) {
//  var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;
//     var workingcaptial1 = parseFloat(frm.doc.workingcaptial1) || 0;

//     if (workingcaptial1 === 0 || niftyly1 === 0) {
//         frm.set_value('returnoncaptialequity1', '');
//     } else {
//         var ratio = niftyly1 / workingcaptial1;
//         frm.set_value('returnoncaptialequity1', ratio.toFixed(2));
//     }
// }

// function calculateWCRatio3(frm) {
//  var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;
//     var workingcaptial2 = parseFloat(frm.doc.workingcaptial2) || 0;

//     if (workingcaptial2 === 0 || niftyly2 === 0) {
//         frm.set_value('returnoncaptialequity2', '');
//     } else {
//         var ratio = niftyly2 / workingcaptial2;
//         frm.set_value('returnoncaptialequity2', ratio.toFixed(2));
//     }
// }


// function calculateCashRatio3(frm) {
//     var cashlatestyear2 = parseFloat(frm.doc.cashlatestyear2) || 0;

//         var ratio = (cashlatestyear2 / cashlatestyear2) * 100 ;
//         frm.set_value('cashlatestyear5', ratio.toFixed(2));
//     }
// function calculateARLYRatio3(frm) {
//     var arly3 = parseFloat(frm.doc.arly3) || 0;

//         var ratio = (arly3 / arly3) * 100 ;
//         frm.set_value('arly6', ratio.toFixed(2));
//     }
    
// function calculateMILYRatio3(frm) {
//     var mily3 = parseFloat(frm.doc.mily3) || 0;

//         var ratio = (mily3 / mily3) * 100 ;
//         frm.set_value('mily6', ratio.toFixed(2));
//     }    
    
// function calculatePELYRatio3(frm) {
//     var pely3 = parseFloat(frm.doc.pely3) || 0;

//         var ratio = (pely3 / pely3) * 100 ;
//         frm.set_value('pely6', ratio.toFixed(2));
//     }    
    
// function calculateTCALYRatio3(frm) {
//     var tcaly3 = parseFloat(frm.doc.tcaly3) || 0;

//         var ratio = (tcaly3 / tcaly3) * 100 ;
//         frm.set_value('tcaly6', ratio.toFixed(2));
//     }    
    
// function calculateFAELYRatio3(frm) {
//     var faely3 = parseFloat(frm.doc.faely3) || 0;

//         var ratio = (faely3 / faely3) * 100 ;
//         frm.set_value('faely6', ratio.toFixed(2));
//     }    
    
    
// function calculateTALYRatio3(frm) {
//     var taly3 = parseFloat(frm.doc.taly3) || 0;

//         var ratio = (taly3 / taly3) * 100 ;
//         frm.set_value('taly6', ratio.toFixed(2));
//     }    
    
      
// function calculateACPLYRatio3(frm) {
//     var acply3 = parseFloat(frm.doc.acply3) || 0;

//         var ratio = (acply3 / acply3) * 100 ;
//         frm.set_value('acply6', ratio.toFixed(2));
//     }    
    
// function calculateNPLYRatio3(frm) {
//     var nply3 = parseFloat(frm.doc.nply3) || 0;

//         var ratio = (nply3 / nply3) * 100 ;
//         frm.set_value('nply6', ratio.toFixed(2));
//     }    
          
    
// function calculateAELYRatio3(frm) {
//     var aely3 = parseFloat(frm.doc.aely3) || 0;

//         var ratio = (aely3 / aely3) * 100 ;
//         frm.set_value('aely6', ratio.toFixed(2));
//     }    
        
    
// function calculateTCLLYRatio3(frm) {
//     var tclly3 = parseFloat(frm.doc.tclly3) || 0;

//         var ratio = (tclly3 / tclly3) * 100 ;
//         frm.set_value('tclly6', ratio.toFixed(2));
//     }    
        
    
    
// function calculateLTLLYRatio3(frm) {
//     var ltlly3 = parseFloat(frm.doc.ltlly3) || 0;

//         var ratio = (ltlly3 / ltlly3) * 100 ;
//         frm.set_value('ltlly6', ratio.toFixed(2));
//     }    
        
    
    
// function calculateTLLYRatio3(frm) {
//     var tlly3 = parseFloat(frm.doc.tlly3) || 0;

//         var ratio = (tlly3 / tlly3) * 100 ;
//         frm.set_value('tlly6', ratio.toFixed(2));
//     }    
        
    
    
// function calculateCOELYRatio3(frm) {
//     var coely3 = parseFloat(frm.doc.coely3) || 0;

//         var ratio = (coely3 / coely3) * 100 ;
//         frm.set_value('coely6', ratio.toFixed(2));
//     }    
        
     
// function calculateTLACOELYRatio3(frm) {
//     var tlaoely3 = parseFloat(frm.doc.tlaoely3) || 0;

//         var ratio = (tlaoely3 / tlaoely3) * 100 ;
//         frm.set_value('tlaoely6', ratio.toFixed(2));
//     }    
       
// function calculateniftylyRatio11(frm) {
//     var niftyly = parseFloat(frm.doc.niftyly) || 0;
//     var taly = parseFloat(frm.doc.taly) || 0;


//         var ratio = (niftyly / taly)  ;
//         frm.set_value('returnonassets', ratio.toFixed(2));
//     }    
    
    
// function calculateniftylyRatio22(frm) {
//     var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;
//     var taly2 = parseFloat(frm.doc.taly2) || 0;


//         var ratio = (niftyly1 / taly2)  ;
//         frm.set_value('returnonassets1', ratio.toFixed(2));
//     }   
    
// function calculateniftylyRatio33(frm) {
//     var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;
//     var taly3 = parseFloat(frm.doc.taly3) || 0;


//         var ratio = (niftyly2 / taly3)  ;
//         frm.set_value('returnonassets2', ratio.toFixed(2));
//     }       
    
    
// function calculateCOELYRatio10(frm) {
//  var tclly = parseFloat(frm.doc.tclly) || 0;
//     var coely = parseFloat(frm.doc.coely) || 0;

//     if (coely === 0 || tclly === 0) {
//         frm.set_value('debttoquityratio', '');
//     } else {
//         var ratio = tclly / coely;
//         frm.set_value('debttoquityratio', ratio.toFixed(2));
//     }
// }    
    
// function calculateCOELYRatio20(frm) {
//  var tclly2 = parseFloat(frm.doc.tclly2) || 0;
//     var coely2 = parseFloat(frm.doc.coely2) || 0;

//     if (coely2 === 0 || tclly2 === 0) {
//         frm.set_value('debttoequityratio1', '');
//     } else {
//         var ratio = tclly2 / coely2;
//         frm.set_value('debttoequityratio1', ratio.toFixed(2));
//     }
// }   
   
// function calculateCOELYRatio30(frm) {
//  var tclly3 = parseFloat(frm.doc.tclly3) || 0;
//     var coely3 = parseFloat(frm.doc.coely3) || 0;

//     if (coely3 === 0 || tclly3 === 0) {
//         frm.set_value('debttoequityratio2', '');
//     } else {
//         var ratio = tclly3 / coely3;
//         frm.set_value('debttoequityratio2', ratio.toFixed(2));
//     }
// }    
 
// function calculateNetRatioh11(frm) {
//  var latest_year = parseFloat(frm.doc.latest_year) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (latest_year === 0)  {
//         frm.set_value('sales', '');
//     } else {
//         var ratio = (latest_year / latest_year) ;
//         frm.set_value('sales', ratio.toFixed(2));
//     }
// }    

// function calculateNetRatioh22(frm) {
//  var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (latest_year_1 === 0)  {
//         frm.set_value('salesly', '');
//     } else {
//         var ratio = (latest_year_1 / latest_year_1) ;
//         frm.set_value('salesly', ratio.toFixed(2));
//     }
// }  

// function calculateNetRatioh33(frm) {
//  var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (latest_year_3 === 0)  {
//         frm.set_value('salesly2', '');
//     } else {
//         var ratio = (latest_year_3 / latest_year_3) ;
//         frm.set_value('salesly2', ratio.toFixed(2));
//     }
// }  

// function calculatecogslyRatioh1(frm) {
//  var cogsly = parseFloat(frm.doc.cogsly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (cogsly === 0)  {
//         frm.set_value('costofgoodssold', '');
//     } else {
//         var ratio = (cogsly / latest_year) * 100 ;
//         frm.set_value('costofgoodssold', ratio.toFixed(2));
//     }
// }

// function calculatecogslyRatioh2(frm) {
//  var cogsly1 = parseFloat(frm.doc.cogsly1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (cogsly1 === 0)  {
//         frm.set_value('costofgoodssoldly1', '');
//     } else {
//         var ratio = (cogsly1 / latest_year_1) * 100 ;
//         frm.set_value('costofgoodssoldly1', ratio.toFixed(2));
//     }
// }

// function calculatecogslyRatioh3(frm) {
//  var cogsly2 = parseFloat(frm.doc.cogsly2) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (cogsly2 === 0)  {
//         frm.set_value('costofgoodssoldly2', '');
//     } else {
//         var ratio = (cogsly2 / latest_year_3) * 100 ;
//         frm.set_value('costofgoodssoldly2', ratio.toFixed(2));
//     }
// }
   
//  function calculateNetRatioh1(frm) {
//  var gmly = parseFloat(frm.doc.gmly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (latest_year === 0)  {
//         frm.set_value('grossmargin', '');
//     } else {
//         var ratio = (gmly / latest_year) * 100;
//         frm.set_value('grossmargin', ratio.toFixed(2));
//     }
// }  
   
//  function calculateNetRatioh2(frm) {
//  var gmly1 = parseFloat(frm.doc.gmly1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (latest_year_1 === 0)  {
//         frm.set_value('grossmarginly1', '');
//     } else {
//         var ratio = (gmly1 / latest_year_1) * 100;
//         frm.set_value('grossmarginly1', ratio.toFixed(2));
//     }
// }   
   
   
   
// function calculateNetRatioh3(frm) {
//  var gmly2 = parseFloat(frm.doc.gmly2) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (latest_year_3 === 0)  {
//         frm.set_value('grossmarginly2', '');
//     } else {
//         var ratio = (gmly2 / latest_year_3) * 100;
//         frm.set_value('grossmarginly2', ratio.toFixed(2));
//     }
// }  
   
// function calculateelyRatio11(frm) {
//  var ely = parseFloat(frm.doc.ely) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (ely === 0)  {
//         frm.set_value('expenses', '');
//     } else {
//         var ratio = (ely / latest_year) * 100 ;
//         frm.set_value('expenses', ratio.toFixed(2));
//     }
// } 

// function calculateelyRatio22(frm) {
//  var ely1 = parseFloat(frm.doc.ely1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (ely1 === 0)  {
//         frm.set_value('expensesly', '');
//     } else {
//         var ratio = (ely1 / latest_year_1) * 100 ;
//         frm.set_value('expensesly', ratio.toFixed(2));
//     }
// } 
   
// function calculateelyRatio33(frm) {
//  var ely2 = parseFloat(frm.doc.ely2) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (ely2 === 0)  {
//         frm.set_value('expensesly2', '');
//     } else {
//         var ratio = (ely2 / latest_year_3) * 100 ;
//         frm.set_value('expensesly2', ratio.toFixed(2));
//     }
// }  

// function calculateniftylyRatioh1(frm) {
//  var niftyly = parseFloat(frm.doc.niftyly) || 0;
//     var latest_year = parseFloat(frm.doc.latest_year) || 0;

//     if (niftyly === 0)  {
//         frm.set_value('netincome', '');
//     } else {
//         var ratio = (niftyly / latest_year) * 100 ;
//         frm.set_value('netincome', ratio.toFixed(2));
//     }
// } 

// function calculateniftylyRatioh2(frm) {
//  var niftyly1 = parseFloat(frm.doc.niftyly1) || 0;
//     var latest_year_1 = parseFloat(frm.doc.latest_year_1) || 0;

//     if (niftyly1 === 0)  {
//         frm.set_value('netincomely', '');
//     } else {
//         var ratio = (niftyly1 / latest_year_1) * 100 ;
//         frm.set_value('netincomely', ratio.toFixed(2));
//     }
// } 

// function calculateniftylyRatioh3(frm) {
//  var niftyly2 = parseFloat(frm.doc.niftyly2) || 0;
//     var latest_year_3 = parseFloat(frm.doc.latest_year_3) || 0;

//     if (niftyly2 === 0)  {
//         frm.set_value('netincomely2', '');
//     } else {
//         var ratio = (niftyly2 / latest_year_3) * 100 ;
//         frm.set_value('netincomely2', ratio.toFixed(2));
//     }
// } 
    
// frappe.ui.form.on('finance Analysis', {
//     grossmarginly2: function(frm) {
//         calculateex5(frm);
//     },
//     expensesly2: function(frm) {
//         calculateex5(frm);
//     },
   
// });

// function calculateex5(frm) {
//     var ex5 = 0;
//     ex5 += parseFloat(frm.doc.grossmarginly2) || 0;
//     ex5 -= parseFloat(frm.doc.expensesly2) || 0;

//     frm.set_value('netincomely2', ex5);
// }     
    
    
    
    
    
    
    

