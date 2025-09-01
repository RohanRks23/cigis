// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Debt Note Tax Invoice', {
 
// 	onload: function(frm) {
// 	  // Trigger the calculation on form refresh
// 	  calculateADD(frm);
//   },
//   amount8: function(frm) {
// 	  // Trigger the calculation when amount11 changes
// 	  calculateADD(frm);
//   },
//   amount11: function(frm) {
// 	  // Trigger the calculation when amount14 changes
// 	  calculateADD(frm);
//   },
//    amount13: function(frm) {
// 	  // Trigger the calculation when amount14 changes
// 	  calculateADD(frm);
//   },
// 	amount14: function(frm) {
//   //     // Trigger the calculation when amount14 changes
// 		calculateADD(frm);
// 	},
// 	 amount15: function(frm) {
//   //     // Trigger the calculation when amount14 changes
// 		calculateADD(frm);
// 	}
// });

// function calculateADD(frm) {
//   // Get the values of amount11 and amount14, default to 0 if they are not set
//   var amount8 = frm.doc.amount8 || 0;
//   var amount11 = frm.doc.amount11 || 0;
//   var amount13 =frm.doc.amount13|| 0;
//   var amount14=frm.doc.amount14|| 0;
//   var amount15=frm.doc.amount15||0;
//   // Convert to float to ensure numerical calculations
//   amount8 = parseFloat(amount8);
//   amount11 = parseFloat(amount11);
//   amount13 = parseFloat(amount13);
// amount14= parseFloat(amount14);
// amount15=parseFloat(amount15);
//   // Calculate the sum
//   var amount14 = amount8 + amount11+amount13;
// var amount19=amount14+amount15;
//   // Log the calculated value for debugging
//   console.log("amount14: " + amount14);

//   // Set the calculated value to amount15
//   frm.set_value('amount14', amount14);
// 	  frm.set_value('amount19', amount19);

// }

