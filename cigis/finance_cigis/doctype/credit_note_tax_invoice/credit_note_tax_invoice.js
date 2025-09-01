// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Credit Note Tax Invoice', {
//     onload: function(frm) {
//         // Trigger the calculation on form refresh
//         calculateADD(frm);
        
//     },
//     amount11: function(frm) {
//         // Trigger the calculation when amount11 changes
//         calculateADD(frm);
//     },
//     amount14: function(frm) {
//         // Trigger the calculation when amount14 changes
//         calculateADD(frm);
//     },
//      amount15: function(frm) {
//         // Trigger the calculation when amount14 changes
//         calculateADD(frm);
//     },
//      amount19: function(frm) {
//         // Trigger the calculation when amount14 changes
//         calculateADD(frm);
//     },
//     refresh:function(frm){
//         frm.fields_dict['amount9'].$wrapper.find('input').css("text-align", "right");
//             frm.fields_dict['amount10'].$wrapper.find('input').css("text-align", "right");
//     frm.fields_dict['amount11'].$wrapper.find('input').css("text-align", "right");
//     frm.fields_dict['amount12'].$wrapper.find('input').css("text-align", "right");
//    frm.fields_dict['amount13'].$wrapper.find('input').css("text-align", "right");
//     frm.fields_dict['amount14'].$wrapper.find('input').css("text-align", "right");
//     frm.fields_dict['amount15'].$wrapper.find('input').css("text-align", "right");
//      frm.fields_dict['amount19'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['amount16'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['amount3'].$wrapper.find('input').css("text-align", "right");
//           frm.fields_dict['amount4'].$wrapper.find('input').css("text-align", "right");




//     }
    
// });

// function calculateADD(frm) {
//     // Get the values of amount11 and amount14, default to 0 if they are not set
//     var amount11 = frm.doc.amount11 || 0;
//     var amount14 = frm.doc.amount14 || 0;
//     var amount15 =frm.doc.amount15|| 0;
//     var amount19=frm.doc.amount19|| 0;

//     // Convert to float to ensure numerical calculations
//     amount11 = parseFloat(amount11);
//     amount14 = parseFloat(amount14);
//     amount15 = parseFloat(amount15);
// amount19= parseFloat(amount19);
//     // Calculate the sum
//     var amount15 = amount11 + amount14;
// var amount16=amount15+amount19;
//     // Log the calculated value for debugging
//     console.log("amount15: " + amount15);

//     // Set the calculated value to amount15
//     frm.set_value('amount15', amount15);
//         frm.set_value('amount16', amount16);

// }

