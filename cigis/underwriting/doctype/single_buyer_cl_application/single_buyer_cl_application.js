// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on(S'ingle Buyer CL Application', {

//     refresh: function(frm) {
//         alignFieldsRight(frm, fieldsToAlignRight);
    
//       frm.fields_dict.new.$input.addClass('btn-primary');
//       frm.fields_dict['new'].$wrapper.find('button').on('click', function() {
//           frappe.new_doc('Buyer');
//       });
  
//       // Call additional functions
//       generateNumber(frm);
      
      
  
//       // Fetch options for 'buyer' field (DCI buyers)
//       frappe.call({
//           method: 'frappe.client.get_list',
//           args: {
//               doctype: 'Buyer',
//               filters: {'dci': 1}, // Assuming 'dci' identifies DCI buyers
//               fields: ['buyer_name'],
//                limit_page_length: 100 
//           },
//           callback: function(response) {
//               var dci_buyers = response.message;
//               var options = dci_buyers.map(buyer => buyer.buyer_name);
//               frm.set_df_property('buyer1', 'options', options);
//           }
//       });
      
      
      
  
  
  
//       // Fetch options for 'buyer1' field (ECI buyers)
//       frappe.call({
//           method: 'frappe.client.get_list',
//           args: {
//               doctype: 'Buyer',
//               filters: {'eci': 1}, // Assuming 'eci' identifies ECI buyers
//               fields: ['buyer_name'],
//                limit_page_length: 100 
//           },
//           callback: function(response) {
//               var eci_buyers = response.message;
//               var options = eci_buyers.map(buyer => buyer.buyer_name);
//               frm.set_df_property('buyer', 'options', options);
//           }
//       });
//   },
  
  
//     onload: function(frm) {
//             alignFieldsRight(frm, fieldsToAlignRight);
  
//   },
      
//       buyer1: function(frm) {
//           var BuyerName = frm.doc.buyer1;
//           console.log('Buyer selected:', BuyerName);
  
//           if (BuyerName && BuyerName.trim() !== '') {
//               frappe.call({
//                   method: 'frappe.client.get_list',
//                   args: {
//                       doctype: 'Buyer',
//                       filters: {
//                           buyer_name: BuyerName
//                       },
//                       fields: ['buyer_id', 'trading_name', 'registration_no', 'tel_no1', 'bank', 'branch', 'director_1',
//                                'director_2', 'director_3', 'director_4', 'physical_address', 'location2', 'fax', 'ac_no']
//                   },
//                   callback: function(response) {
//                       if (response.message && response.message.length > 0) {
//                           var data = response.message[0];
  
//                           // Populate fields if data is found
//                           frm.set_value('buyer_short_name1', data.buyer_id || '');
//                           frm.set_value('trading_style1', data.trading_name || '');
//                           frm.set_value('regno__id_no1', data.registration_no || '');
//                           frm.set_value('tel_no1', data.tel_no1 || '');
//                           frm.set_value('bank1', data.bank || '');
//                           frm.set_value('branch1', data.branch || '');
//                           frm.set_value('1_director_1', data.director_1 || '');
//                           frm.set_value('2_director2', data.director_2 || '');
//                           frm.set_value('3_director_3', data.director_3 || '');
//                           frm.set_value('4_director4', data.director_4 || '');
//                           frm.set_value('1_address1', data.physical_address || '');
//                           frm.set_value('fax_no1', data.fax || '');
//                           frm.set_value('account_no1', data.ac_no || '');
//                           frm.set_value('2_address2', data.location2 || '');
//                       } else {
//                           // Clear fields if no matching record found
//                           frm.set_value('buyer_short_name1', '');
//                           frm.set_value('trading_style1', '');
//                           frm.set_value('regno__id_no1', '');
//                           frm.set_value('tel_no1', '');
//                           frm.set_value('bank1', '');
//                           frm.set_value('branch1', '');
//                           frm.set_value('1_director_1', '');
//                           frm.set_value('2_director2', '');
//                           frm.set_value('3_director_3', '');
//                           frm.set_value('4_director4', '');
//                           frm.set_value('1_address1', '');
//                           frm.set_value('fax_no1', '');
//                           frm.set_value('account_no1', '');
//                           frm.set_value('2_address2', '');
  
//                           frappe.msgprint('No matching record found.');
//                       }
//                   },
//                   error: function(err) {
//                       console.error(err);
//                       frappe.msgprint('An error occurred while fetching data');
//                   }
//               });
//           } else {
//               // Handle case where 'buyer1' field is empty or not valid
//               frappe.msgprint('Error occurred.');
//           }
//       },
//        buyer: function(frm) {
//           var BuyerName = frm.doc.buyer;
//           console.log('Buyer selected:', BuyerName);
  
//           if (BuyerName && BuyerName.trim() !== '') {
//               frappe.call({
//                   method: 'frappe.client.get_list',
//                   args: {
//                       doctype: 'Buyer',
//                       filters: {
//                           buyer_name: BuyerName
//                       },
//                       fields: ['buyer_id', 'trading_name', 'registration_no', 'tel_no1', 'bank', 'branch', 'director_1',
//                                'director_2', 'director_3', 'director_4', 'physical_address', 'location2', 'fax', 'ac_no']
//                   },
//                   callback: function(response) {
//                       if (response.message && response.message.length > 0) {
//                           var data_from_proposals = response.message[0];
  
//                           // Populate fields if data is found
//                           frm.set_value('buyer_short_name', data_from_proposals.buyer_id || '');
//                           frm.set_value('trading_style', data_from_proposals.trading_name || '');
//                           frm.set_value('regno__id_no', data_from_proposals.registration_no || '');
//                           frm.set_value('tel_no', data_from_proposals.tel_no1 || '');
//                           frm.set_value('bank', data_from_proposals.bank || '');
//                           frm.set_value('branch', data_from_proposals.branch || '');
//                           frm.set_value('director_1', data_from_proposals.director_1 || '');
//                           frm.set_value('director2', data_from_proposals.director_2 || '');
//                           frm.set_value('director_3', data_from_proposals.director_3 || '');
//                           frm.set_value('director4', data_from_proposals.director_4 || '');
//                           frm.set_value('address1', data_from_proposals.physical_address || '');
//                           frm.set_value('fax_no', data_from_proposals.fax || '');
//                           frm.set_value('account_no', data_from_proposals.ac_no || '');
//                           frm.set_value('address2', data_from_proposals.location2 || '');
//                       } else {
//                           // Clear fields if no matching record found
//                           frm.set_value('buyer_short_name', '');
//                           frm.set_value('trading_style', '');
//                           frm.set_value('regno__id_no', '');
//                           frm.set_value('tel_no', '');
//                           frm.set_value('bank', '');
//                           frm.set_value('branch', '');
//                           frm.set_value('director_1', '');
//                           frm.set_value('director2', '');
//                           frm.set_value('director_3', '');
//                           frm.set_value('director4', '');
//                           frm.set_value('address1', '');
//                           frm.set_value('fax_no', '');
//                           frm.set_value('account_no', '');
//                           frm.set_value('address2', '');
  
//                           frappe.msgprint('No matching record found.');
//                       }
//                   },
//                   error: function(err) {
//                       console.error(err);
//                       frappe.msgprint('An error occurred while fetching data');
//                   }
//               });
//           } else {
//               // Handle case where 'buyer' field is empty or not valid
//               frappe.msgprint('Error occurred.');
//           }
//       }
  
  
  
//   });
  
  
   
//   function generateNumber(frm) {
//       if (!frm.doc.credit_limit_no) {
//           let currentYear = new Date().getFullYear();
//           let prefix = `CLC/${currentYear}/`;
  
//           frappe.call({
//               method: 'frappe.client.get_list',
//               args: {
//                   doctype: 'Single Buyer CL Application',
//                   fields: ['credit_limit_no', 'creation'],
//                   order_by: 'creation desc',
//                   limit: 1
//               },
//               callback: function(r) {
//                   if (!r.exc) {
//                       if (r.message && r.message.length > 0) {
//                           let lastCreditLimitNo = r.message[0].credit_limit_no;
//                           let lastNumber = parseInt(lastCreditLimitNo.split("/").pop()) || 0;
//                           let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                           frm.set_value('credit_limit_no', prefix + newNumber);
//                       } else {
//                           frm.set_value('credit_limit_no', prefix + '0001');
//                       }
//                   } else {
//                       frappe.msgprint("Error occurred while fetching data.");
//                   }
//               }
//           });
//       }
//   }
  
  
//   // List of fields to align to the right
//   let fieldsToAlignRight = [
//       'credit_limit_required','credit_limit_required1'
//   ];
  
//   // Function to align fields to the right
//   function alignFieldsRight(frm, fields) {
//       fields.forEach(field => {
//           let fieldElement = frm.fields_dict[field];
//           if (fieldElement && fieldElement.input) {
//               fieldElement.input.style.direction = 'rtl'; // Setting direction to right-to-left
//               fieldElement.input.style.textAlign = 'right'; // Aligning text to the right
//           }
//       });
//   }
  
//   // Bind onload event for each field in fieldsToAlignRight
//   fieldsToAlignRight.forEach(field => {
//       frappe.ui.form.on('Single Buyer CL Application', field, function(frm) {
//           alignFieldsRight(frm, [field]); // Call alignFieldsRight function for each field
//       });
//   });
  
  
  