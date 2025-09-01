// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('CB Request', {
// 	refresh(frm) {
	    
// 	    frm.fields_dict.amount_required.$input.css("text-align", "right");
// 		// your code here
// 			if (!frm.doc.cb_request_number) {
//             generateNumber(frm);
// 	}  
	
// 	}
// });

// //Auto generation of Proposal No
// function generateNumber(frm) {
//     // Check if the proposal number field is already populated
//     if (!frm.doc.cb_request_number) {
//         // Get the current year
//         let currentYear = new Date().getFullYear();
//         let prefix = `CBR/${currentYear}/`;
//         // Make a call to get the last number asynchronously
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'CB Report',
//                 fields: ['cb_request_number', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function(r) {
//                 console.log(r,"cb_request_number no");
//                 if (r.message && r.message.length > 0) {
//                     let lastCBRequestNumber = r.message[0].cb_request_number;
//                     let lastNumber = parseInt(lastCBRequestNumber.split("/").pop()); // Extract last part and parse it as integer
//                     if (!isNaN(lastNumber)) {
//                         // Increment the last number and pad it with leading zeros
//                         let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                         frm.set_value('cb_request_number', prefix + newNumber);
//                     }
//                 } else {
//                     // If no previous numbers exist, set to default '0001'
//                     frm.set_value('cb_request_number', prefix + '0001');
//                 }
//             }
//         });
//     }
// }