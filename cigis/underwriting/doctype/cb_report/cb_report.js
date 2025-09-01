// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('CB Report', {
//     refresh: function(frm) {
        
//         		frm.fields_dict.veiw_cb_request.$input.addClass('btn-primary');
		
// 	  frappe.call({
//       method: 'frappe.client.get_list',
//       args: {
//          doctype: "CB Request",
//         'filters': {
//         },
//         'fields': ['buyer']
//       },
//       callback: function(submittedProposalsResponse) {
//         if (submittedProposalsResponse.message) {
//           var submittedProposals = submittedProposalsResponse.message.map(function(proposal) {
//             return proposal.buyer;
//           });
           
//           console.log("** Submitted Proposals:", submittedProposals);
//           console.log("** Fetching Approved Quotations **");
//            frm.set_df_property('buyer', 'options', submittedProposals);
//         //   frappe.call({
//         //     method: 'frappe.client.get_list',
//         //     args: {
//         //       'doctype': 'CB Report',
//         //       'filters': {
//         //         status: 'Saved' 
//         //       },
//         //       'fields': ['buyer']
//         //     },
//         //     callback: function(approvedQuotationsResponse) {
//         //         console.log(approvedQuotationsResponse,"approvedQuotationsResponse")
//         //       if (approvedQuotationsResponse.message) {
//         //         var approvedQuotations = approvedQuotationsResponse.message.map(function(quotation) {
//         //           return quotation.buyer;
//         //         });
//         //         console.log("** Approved Quotations:", approvedQuotations);
//         //         // Filter client names (include only proposals not in approved quotations)
//         //         var filteredClientNames = submittedProposals.filter(function(proposal) {
//         //           return !approvedQuotations.includes(proposal);
//         //         });
//         //         console.log("** Filtered Client Names:", filteredClientNames);
//         //           frm.set_df_property('buyer', 'options', filteredClientNames);
//         //         // Set dropdown query with filtered names
//         //       //  frm.set_query('client_name', function() {
//         //         //  return {
//         //          //   filters: {
//         //           //    'name': ['in', filteredClientNames]
//         //           // }
//         //           //};
//         //       // });
//         //       }
//         //     }
//         //   }); // Close inner frappe.call
//         }
//       }
//      // Close outer frappe.call
// });
	  
//         console.log("Form loaded: ", frm.docname);
//         if (!frm.is_new()) {
//             // Document is loaded from the database, increment and update the "number" field
//             console.log("Incrementing open count for existing document");
//             incrementOpenCountAndUpdateField(frm.docname, frm);
//         } else {
//             console.log("This is a new document");
//         }
//     },
    
    	
//   buyer: function(frm) {
      
//      frm.set_value('cb_request_number', '');
//      frm.set_value('reqdate', '');
//      frm.set_value('refnumber', '');
//      frm.set_value('policy_type', '');
                
    
//     //  // Get the selected quotation number
//     // let bond_facility_no = frm.doc.bond_facility_no;
    
//      // Re-enable the dropdown field after selection
//         frm.toggle_enable('buyer', true);
      
      
//         var buyer = frm.doc.buyer;
 
//         // Fetch data from DCI Proposals based on selected client name
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'CB Request',
//                 filters: {
//                     buyer: buyer
//                 },
//                 fields: ['cb_request_number', 'reqdate', 'refnumber','policy_type']
//             },
//             callback: function(response) {
//                 console.log("DCI Proposals response:", response);
//                 if (response.message && response.message.length > 0) {
//                     var data_from_proposals = response.message[0];
 
//                     // Populate fields if data is found
//                     frm.set_value('cb_request_number', data_from_proposals.cb_request_number || '');
//                     frm.set_value('reqdate', data_from_proposals.reqdate || '');
//                     frm.set_value('refnumber', data_from_proposals.refnumber || '');
//                     frm.set_value('policy_type', data_from_proposals.policy_type || '');
//                 } else {
//                     // Clear fields if no matching record found
//                     frm.set_value('cb_request_number', '');
//                     frm.set_value('reqdate', '');
//                     frm.set_value('refnumber', '');
//                     frm.set_value('policy_type', '');
//                     frappe.msgprint('No matching record found in DCI Proposals.');
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//                 frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//             }
//         });
//     },
    
//   veiw_cb_request:function(frm){
        
//          frappe.route_options = {
                
//              company_name: frm.doc.buyer,
             
//               //credit_limit:frm.doc.credit_limit,
//               //status:frm.doc.status,
//               //estd_date:frm.doc.captured_on
//             }, 
//           frappe.new_doc('View CB Request  Form'); 
          
          
        
          
           
//           },

// });

// function incrementOpenCountAndUpdateField(docname, frm) {
//     // Retrieve open count from localStorage
//     var openCount = localStorage.getItem('open_count_' + docname);
//     if (openCount === null) {
//         console.log("Open count not found in localStorage, initializing to 0");
//         openCount = 0;
//     } else {
//         openCount = parseInt(openCount);
//         console.log("Current open count retrieved from localStorage: ", openCount);
//     }

//     // Increment the open count
//     openCount += 1;
//     console.log("Incremented open count: ", openCount);

//     // Update open count in localStorage
//     localStorage.setItem('open_count_' + docname, openCount);

//     // Update the "number" field directly without marking form as dirty
//     frm.doc.number = openCount;
//     frm.refresh_field('number');
//     console.log("Updated 'number' field with open count: ", openCount);
// }

