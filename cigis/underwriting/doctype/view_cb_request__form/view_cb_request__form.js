// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('View CB Request  Form', {
	refresh(frm) {
	      frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Credit Limit Processing',
                filters: {
                    buyer_name: frm.doc.company_name
                }
            },
            callback: function(r) {
                if (r.message) {
                    frm.set_value('trading_style', r.message.trading__style);
                    frm.set_value('credit_limit', r.message.credit_limit);
                }
            }
        });
// 		// your code here
	},
	
onload(frm){
	    
  frappe.call({
    method: "frappe.client.get",
    args: {
        doctype:"CB Request",
        filters: {
            buyer: frm.doc.company_name,
            policy_type: frm.doc.policy_type
        },
        fields: ["toaddress","attention","from","attention1","subject","date"]
    },
    callback: function (r) {
        console.log(r, "cb request data");

        if (!r.exc) {
            var data = r.message; // Access the data object under 'message'
            console.log(data,"cb request");
            
            // Now, access properties of the data object
            frm.set_value('toaddress', data.toaddress);
            frm.set_value('attention', data.attention);
            frm.set_value('from', data.from);
            frm.set_value('attention1', data.attention1);
            frm.set_value('subject', data.subject);
            frm.set_value('date', data.date);
        } else {
            // console.error("Error occurred in DCI Proposals data:", r.exc);
        }
    }
});



//   frappe.call({
//     method: "frappe.client.get",
//     args: {
//         doctype:"Credit Limit Processing",
//         filters: {
//             buyer_name: frm.doc.company_name,
//             policy_type: frm.doc.policy_type
//         },
//         fields: ["table"]
//     },
//     callback: function (r) {
//         console.log(r, "DCI Proposals data");

//         if (!r.exc) {
//             var data = r.message.table[0]; // Access the data object under 'message'
//             console.log(data,"rtyuio");
            
//             // Now, access properties of the data object
//             frm.set_value('toaddress', data.toaddress);
//             frm.set_value('attention', data.attention);
//             frm.set_value('from', data.from);
//             frm.set_value('attention1', data.attention1);
//             frm.set_value('subject', data.subject);
//             frm.set_value('date', data.date);
//         } else {
//             console.error("Error occurred in DCI Proposals data:", r.exc);
//         }
//     }
// });




  frappe.call({
    method: "frappe.client.get",
    args: {
        doctype: "Buyer",
        filters: {
            buyer_name: frm.doc.company_name,
            policy_type: frm.doc.policy_type
        },
        fields: ['physical_address','registration_no','postal_address','tel_no1','fax','country','bank','ac_no','branch','referance_1','director_1']
    },
    callback: function (r) {
        console.log(r, "Buyers data");

         if (r.message) {
          // var data = r.message.table[0]; // Access the data object under 'message'
            
            // Now, access properties of the data object
                    frm.set_value('physical_address', r.message.physical_address);
                    frm.set_value('registration_number', r.message.registration_no);
                    frm.set_value('postal_address', r.message.postal_address);
                    frm.set_value('telephone_number', r.message.tel_no1);
                    frm.set_value('fax_no', r.message.fax);
                    frm.set_value('country', r.message.country);
                    frm.set_value('bank', r.message.bank);
                    frm.set_value('account_number', r.message.ac_no);
                    frm.set_value('branch', r.message.branch);
                    frm.set_value('trade_references', r.message.referance_1);
                     frm.set_value('director_and_share_holders', r.message.director_1);
                    
                    // frm.set_value('buyer_name', data_from_proposals.company_name || '');
                    // frm.set_value('physical_address', data_from_proposals.physical_address || '');
                    // frm.set_value('registration_number', data_from_proposals.registration_no || '');
                    // frm.set_value('postal_address', data_from_proposals.postal_address || '');
                    // frm.set_value('telephone_number', data_from_proposals.tel_no1 || '');
                    // frm.set_value('fax', data_from_proposals.fax_no || '');
                    
        } else {
            console.error("Error occurred in DCI Proposals data:", r.exc);
        }
    }
})


	    
	    
	 
	    
	}
})







