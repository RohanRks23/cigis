// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Claim Payment', {
	refresh: function(frm) {
	    frm.fields_dict.payment_amount.$input.css("text-align", "right");
		frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Claim Process',
                filters: {
                    workflow_state: "Approved"
                },
                fields: ['client'],
                  limit_page_length: 100
            },
            callback: function(response) {
                let DataArray = [];
                DataArray = response.message;
                let FinalArray = [];
 
                for (let x of DataArray) {
                    FinalArray.push(x.client)
 
                }
                frm.set_df_property('client', 'options', FinalArray);
                console.log("final", FinalArray);
 
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("Error fetching approved bonds:", textStatus, errorThrown);
            }
        });
	},
 client: function(frm) {
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Claim Process',
                filters: {
                   client: frm.doc.client
                },
                fields: ['paymentrefno', 'insuredamt']
            },
            callback: function(r) {
               
                if (!r.exc) {
                    if (r.message && r.message.length > 0) {
                        var data = r.message[0]; // Get the first record from the fetched data

                        frm.set_value('payment_no', data.paymentrefno);
                        frm.set_value('payment_amount', data.insuredamt); // Assuming 'client_type' is the correct field name
                    }
                } else {
                    frm.set_value('payment_no', '');
                     frm.set_value('payment_amount', '');
                    console.error("Error occurred:", r.exc);
                }
            }
        });
    },

});
