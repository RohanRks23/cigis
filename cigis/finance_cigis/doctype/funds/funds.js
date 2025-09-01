// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Funds', {
//     refresh(frm){
//      frm.fields_dict.intialfundamount.$input.css("text-align","right"); 
//     },
    
//     onload: function(frm) {
//         // Fetch fund providers from the Fund doctype and populate the select field
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'FundProviderDetail',  // Name of the DocType you want to fetch from
//                 filters: {
//                     // Optional filters if needed
//                 },
//                 fields: ['name', 'shortname'],  // Fields you want to fetch
//                 order_by: 'shortname'  // Optional: order by fund_provider field
//             },
//             callback: function(response) {
//                 // Handle the response
//                 var funds1 = response.message;
//                 if (funds1) {
//                     var options = [];
//                     // Iterate through fetched funds
//                     funds1.forEach(function(funds) {
//                         // Add each fund provider to the options list
//                         options.push({
//                             'label': funds.fund_provider,
//                             'value': funds.shortname
//                         });
//                     });
//                     // Set options to the select field
//                     frm.set_df_property('fund_provider', 'options', options);
//                 }
//             }
//         });
//     },
//     fund_provider(frm) {
//          frm.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'FundProviderDetail',
//                 filters: {
//                     shortname: frm.doc.fund_provider
//                 },
//                 fields: ['shortname', 'fname', 'physicaladdress', 'status'],
//                 limit_page_length: 100
//             },
//             callback: function(r) {
//                 console.log(r, "client details");
               
//                 if (r.message && r.message.length > 0) {
//                     frm.set_value('fund_provider', r.message[0].shortname);
//                     frm.set_value('fname', r.message[0].fname);
//                     frm.set_value('address', r.message[0].physicaladdress);
//                     frm.set_value('status', r.message[0].status);
                   
//                 }
//             }
//         });
//     }
    
// });

