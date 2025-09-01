// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('ECI Proposal', {
    
//     validate: function(frm) {
//          var fieldsToValidate = ['proposal_application', 'financial_statements__age_analysis', 'current_debtor_schedule'];
//          var allowedExtensions = ['xlsx', 'xls', 'pdf'];
 
//          fieldsToValidate.forEach(function(fieldname) {
//              var file = frm.doc[fieldname];
//              if (file) {
//                  var fileExtension = file.split('.').pop();
//                  if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
//                      frappe.msgprint(__("Please upload a file with extension .xlsx, .xls, or .pdf"));
//                      frm.set_value(fieldname, '');
//                  }
//              }
//          });
//      },
     
     
//  refresh(frm) {
     
//   frm.fields_dict['client_name'].get_query = function(doc) {
//              return {
//                  filters: {
//                      "status": "Active"
//                  }
//              };
//          };
      
       
//  frm.set_df_property('directors_shareholders_table','cannot_add_rows', true);
//  frm.set_df_property('export_turnover','cannot_add_rows', true);
//  frm.set_df_property('principal_buyer','cannot_add_rows', true);
//  frm.set_df_property('baddebts','cannot_add_rows', true);
 
//         //  frm.fields_dict.export_turnover_add_new.$input.addClass('btn-primary');
//         //  frm.fields_dict.directors_shareholder_add_new.$input.addClass('btn-primary');
//         //  frm.fields_dict.principalbuyer_add_new.$input.addClass('btn-primary');
//         //  frm.fields_dict.baddebts_addnew.$input.addClass('btn-primary');
//         //  frm.fields_dict.add_buyer.$input.addClass('btn-primary');
        
        
//           var workflowState = frm.doc.workflow_state;
 
//          // Create a custom button for "Print Proposal" if the workflow state is "Submitted"
//          if (workflowState === "Approved") {
//              frm.add_custom_button(__('Print Proposals'), function() {
                
//           frappe.route_options = {
//                      client_name: frm.doc.client_name,
//                  },
//                   frappe.new_doc('ECI Print proposals')
//      frappe.ui.form.on('ECI Print proposals', {
//      refresh: function (frm) {
//          // frm.fields_dict['principal_buyer_table'].grid.wrapper.find('.grid-row .btn[data-fieldname="edit"]').hide();
         
//          // frm.set_df_property('print_child_table','cannot_add_rows', true);
//          // frm.set_df_property('spread_of_turnover_eci','cannot_add_rows', true);
//          // frm.set_df_property('past_experiences','cannot_add_rows', true);
//          // frm.set_df_property('principal_buyer_table','cannot_add_rows', true);
         
//          // Client details
//          frappe.call({
//              method: 'frappe.client.get',
//              args: {
//                  doctype: 'Company-Details',
//                   filters: {
//                  name1: frm.doc.client_name
//                   }
//              },
//              callback: function (r) {
//                  console.log(r, "client details");
 
//                  if (r.message) {
//                     frm.set_value('postal_address', r.message.postal_address);
//                      frm.set_value('physical_address', r.message.physical_address);
//                      frm.set_value('fax_number', r.message.fax);
//                      frm.set_value('registered_no', r.message.registration_number);
//                      frm.set_value('date_established', r.message.establisheddate);
//                      frm.set_value('bankers_branch', r.message.bank);
//                      frm.set_value('telephone_number', r.message.telephone);
//                      frm.set_value('account_number', r.message.ac_no);
//                      frm.set_value('email', r.message.email);
//                       frm.set_value('name1', r.message.contact_person);
                     
 
//                      // Refresh the form to reflect the changes
//                      frm.refresh();
//                  } else {
//                      console.error("Error occurred in client details:", r.exc);
//                  }
//              }
//          });
//  // Fetch trade style data
//        frappe.call({
//      method: 'frappe.client.get_list',
//      args: {
//          doctype: 'ECI Proposal',
//          filters: {
//              client_name: frm.doc.client_name
//          },
//          fields: ['associated_companies', 'government', 'private_buyers'],
//          limit_page_length: 1 // Limit to one result for efficiency
//      },
//      callback: function(response) {
//          console.log(response, "response");
 
//          if (response.message && response.message.length > 0) {
//              var data_from_proposals = response.message[0];
//              console.log(data_from_proposals, "data_from_proposals");
//              var trade_style = [];
 
//              if (data_from_proposals.associated_companies) {
//                  trade_style.push('Associated Companies');
//              }
//              if (data_from_proposals.government) {
//                  trade_style.push('Government');
//              }
//              if (data_from_proposals.private_buyers) {
//                  trade_style.push('Private Buyers');
//              }
             
             
 
//              frm.set_value('trade_style', trade_style.join(', '));
//          } else {
//              frm.set_value('trade_style', ''); // Ensure 'trade_style' is cleared if no data is found
//          }
//      },
//      error: function(error) {
//          console.error("Error in frappe.call:", error);
//          frm.set_value('trade_style', ''); // Clear the field in case of an error
//      }
//  });
 
//          // Fetch ECI Proposal data
//          frappe.call({
//              method: "frappe.client.get",
//              args: {
//                  doctype: "ECI Proposal",
//                  filters: {
//                      client_name: frm.doc.client_name
//                  },
//                  fields: ["directors_shareholders_table", "export_turnover", "principal_buyer", "baddebts","capacity","captured_on"]
//              },
//              callback: function (r) {
//                  console.log(r, "ECI Proposals data");
//                  if (!r.exc) {
 
//                      if (r.message) {
 
//                          frm.set_value('date', r.message.captured_on);
//                           frm.set_value('capacity', r.message.capacity);
 
//                      }
//                  }
 
//                  if (r.message) {
//                      // Directors Shareholders Table
//                      if (r.message.directors_shareholders_table) {
//                          var data = r.message.directors_shareholders_table;
 
//                          // Clear the child table before adding new rows
//                          frm.clear_table('print_child_table');
 
//                          for (let x of data) {
//                              var child = frappe.model.add_child(frm.doc, "Print_child", "print_child_table");
//                              frappe.model.set_value(child.doctype, child.name, "designation", x.designation);
//                              frappe.model.set_value(child.doctype, child.name, "share_holder", x.directorname);
 
//                              // Add more fields as needed
//                          }
 
//                          frm.refresh_fields('print_child_table');
//                          console.log(data);
//                      }
 
//                      // Export Turnover
//                      if (r.message.export_turnover) {
//                          var data1 = r.message.export_turnover;
 
//                          // Clear the child table before adding new rows
//                          frm.clear_table('spread_of_turnover_eci');
 
//                          for (let x of data1) {
//                              var child1 = frappe.model.add_child(frm.doc, "Spread_of_turnover_ECI", "spread_of_turnover_eci");
//                              frappe.model.set_value(child1.doctype, child1.name, "countries_of_destination", x.country_of_dest);
//                              frappe.model.set_value(child1.doctype, child1.name, "total_turnover_during_last", x.total_turnoverlast_year);
//                              frappe.model.set_value(child1.doctype, child1.name, "estimated_turnover_next_last_year", x.estturnovernext_12_months);
//                              frappe.model.set_value(child1.doctype, child1.name, "currency_invoiced_in_egpularandusd", x.currency_invoiced_eg_pularandsusd);
//                              frappe.model.set_value(child1.doctype, child1.name, "terms_of_payments_normal", x.terms_of_payment);
//                              frappe.model.set_value(child1.doctype, child1.name, "terms_of_payments_maximum", x.directorname);
 
//                              // Add more fields as needed
//                          }
 
//                          frm.refresh_fields('spread_of_turnover_eci');
//                          console.log(data1);
//                      }
 
//                      // Principal Buyer
//                      if (r.message.principal_buyer) {
//                          var data2 = r.message.principal_buyer;
 
//                          // Clear the child table before adding new rows
//                          frm.clear_table('principal_buyer_table');
 
//                          for (let x of data2) {
//                              var child2 = frappe.model.add_child(frm.doc, "ECI_Principal_buyer_table", "principal_buyer_table");
//                              frappe.model.set_value(child2.doctype, child2.name, "name_of_the_buyer", x.buyer_name);
//                              frappe.model.set_value(child2.doctype, child2.name, "bank", x.bank);
//                              frappe.model.set_value(child2.doctype, child2.name, "town_and_country", x.buyer_country);
//                              frappe.model.set_value(child2.doctype, child2.name, "maximum_amount_outstanding_pula", x.amount_outstanding);
 
//                              // Add more fields as needed
//                          }
 
//                          frm.refresh_fields('principal_buyer_table');
//                          console.log(data2);
//                      }
 
//                      // Bad Debts
//                      if (r.message.baddebts) {
//                          var data3 = r.message.baddebts;
 
//                          // Clear the child table before adding new rows
//                          frm.clear_table('past_experiences');
 
//                          for (let x of data3) {
//                              var child3 = frappe.model.add_child(frm.doc, "ECI_Past_experience", "past_experiences");
//                              frappe.model.set_value(child3.doctype, child3.name, "name_of_the_country", x.country);
//                              frappe.model.set_value(child3.doctype, child3.name, "noof_cases", x.noof_cases);
//                              frappe.model.set_value(child3.doctype, child3.name, "year1", x.year1);
//                              frappe.model.set_value(child3.doctype, child3.name, "year2", x.year2);
//                              frappe.model.set_value(child3.doctype, child3.name, "year3", x.year3);
//                              frappe.model.set_value(child3.doctype, child3.name, "estimated", x.estimated);
 
//                              // Add more fields as needed
//                          }
 
//                          frm.refresh_fields('past_experiences');
//                          console.log(data3);
//                      }
//                  } else {
//                      console.error("Error occurred in ECI Proposals data:", r.exc);
//                  }
//              }
//          });
//      },
    
//  });
                 
                 
//                  console.log("Print Proposal clicked!");
//              }).addClass("btn-primary");
//          }
 
//          // Create a custom button for "Rejection Letter" if the status is "Rejected"
//           if (workflowState === "Rejected") {
//              frm.add_custom_button(__('Rejection Letters'), function() {
//                  // Set route_options before creating the new document
//                  frappe.route_options = {
//                      to: frm.doc.client_name,
//                      proposal_no: frm.doc.proposal_no,
//                      regisration_no: frm.doc.registration_no,
//                      date: frm.doc.establishment_date,
//                      information: frm.doc.remarks,
//                  };
 
//                  // Create a new 'Rejection_Letter_1' document
//                  frappe.new_doc('ECI_Rejection_Letter');
                 
                 
//   frappe.ui.form.on('ECI_Rejection_Letter', {
//      refresh: function(frm){
//      frappe.call({
//              method: 'frappe.client.get',
//              args: {
//                  doctype: 'Company-Details',
//                  filters: {
//                      name1: frm.doc.to
//                  },
//                  fields: ['postal_address', 'location', 'physical_address']
//              },
//              callback: function (r) {
//                  console.log(r, "client details");
//                  if (!r.exc) {
//                      if (r.message) {
//                          // Concatenate the fields line by line
//                          let address = '';
                         
//                          if (r.message.name1) {
//                              address += r.message.name1 + '\n';
//                          }
//                          if (r.message.location) {
//                              address += r.message.location + '\n';
//                          }
//                          if (r.message.physical_address) {
//                              address += r.message.physical_address + '\n';
//                          }
//                          if (r.message.postal_address) {
//                              address += r.message.postal_address + '\n';
//                          }
                          
//                          // Remove the trailing newline character
//                          address = address.trim();
 
//                          // Set the concatenated address in the 'address' field
//                          frm.set_value('address', address);
//                      }
//                  } else {
//                      console.error("Error occurred:", r.exc);
//                  }
//              }
     
//          });
//      }
//  });
 
//                  console.log("Rejection Letter clicked!");
//              }).addClass("btn-primary");
//           }
          
         
         
//          // your code here
//      },
     
     
//  onload: function(frm) {
     
     
//      if (!frm.doc.proposal_no) {
//          generateNumber(frm);
//      }
//          // frappe.call({
//          //      method: 'frappe.client.get_list',
//          //      args: {
//          //         doctype: 'Company-Details',
//          //         fields: ['name1'],
//          //         'filters': {
//          //           status: "Active"
//          //              },
//          //         limit_page_length: 100  // Add this line to retrieve up to 100 records
//          //     },
//          //     callback: function(response) {
//          //         let DataArray = response.message;
//          //         let FinalArray = [];
//          //         for (let x of DataArray) {
//          //             FinalArray.push(x.name1);
//          //         }
//          //         frm.set_df_property('client_name', 'options', FinalArray);
//          //         console.log("final", FinalArray);
//          //     },
//          //     error: function(xhr, textStatus, errorThrown) {
//          //         console.error("Error fetching approved bonds:", textStatus, errorThrown);
//          //     }
//          // });
     
    
//  },
 
//  // client_name: function (frm) {
//  //   var ClientName = frm.doc.client_name;
//  //       // Fetch data from DCI Proposals based on selected client name
//  //         frappe.call({
//  //             method: 'frappe.client.get_list',
//  //             args: {
//  //                 doctype: 'Company-Details',
//  //                 filters: {
//  //                     name1: ClientName
//  //                 },
//  //                 fields: ['trading_name', 'status','establisheddate','registration_number']
//  //             },
//  //             callback: function(response) {
//  //                 console.log("Company-details response:", response);
//  //                 if (response.message && response.message.length > 0) {
//  //                     var data_from_proposals = response.message[0];
  
//  //                     // Populate fields if data is found
//  //                     frm.set_value('trading_name', data_from_proposals.trading_name || '');
//  //                     frm.set_value('status', data_from_proposals.status || '');
//  //                     frm.set_value('establishment_date', data_from_proposals.establisheddate || '');
//  //                     frm.set_value('registration_no', data_from_proposals.registration_number || '');
//  //                 } else {
//  //                     // Clear fields if no matching record found
//  //                     frm.set_value('status', '');
//  //                     frm.set_value('trading_name', '');
//  //                     frm.set_value('establishment_date', '');
//  //                     frm.set_value('registration_no', '');
                     
//  //                     frappe.msgprint('No matching record found in Company-Details.');
//  //                 }
//  //             },
//  //             error: function(err) {
//  //                 console.error(err);
//  //                 frappe.msgprint('An error occurred while fetching data from DCI Proposals. Please check the console for details.');
//  //             }
//  //         });
//  //   },
 
     
//  // Directors and shareholders 
//   directors_shareholder_add_new: function(frm) {
      
//          frappe.prompt([
//              {'fieldname': 'id_type', 'fieldtype': 'Select','options': '   \nDRIVING LICENSE \nOMANG\nPASSPORT',  'label': 'ID Type'},
//               {'fieldname': 'id_number', 'fieldtype': 'Data', 'label': 'ID No'},
//              {'fieldname': 'surname', 'fieldtype': 'Data', 'label': 'Surname'},
//               {'fieldname': 'first_name', 'fieldtype': 'Data', 'label': 'First Name'},
//              {'fieldname': 'middle_name', 'fieldtype': 'Data', 'label': 'Middle Name'},
            
             
         
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//               {'fieldname': 'e_mail_address', 'fieldtype': 'Data', 'label': 'E-Mail Address'},
//            {'fieldname': 'fax', 'fieldtype': 'Data', 'label': 'Fax'},
//              {'fieldname': 'contact_no', 'fieldtype': 'Phone', 'label': 'Contact No'},
//              {'fieldname': 'designation', 'fieldtype': 'Select', 'options': '   \nDIRECTOR \nMEMBER \nMANAGER \nOTHERS \nPARTNERS \nPROPRIETOR', 'label': 'Designation'}
//          ],
//          function(values){
//              // Construct an object with the field values
//              var director_name = `${values.first_name || ''} ${values.middle_name || ''} ${values.surname || ''}`.trim();
//              console.log(director_name,"director_name");
//              var data = {
//                  id_type: values.id_type,
//                  id_number: values.id_number,
//                  director_name: director_name,
//                  // surname: values.surname,
//                  // first_name: values.first_name,
//                  // middle_name: values.middle_name,
//                  e_mail_address: values.e_mail_address,
//                  fax: values.fax,
//                  contact_no: values.contact_no,
//                  designation: values.designation,
//              };
 
//              // Save the object to LocalStorage
//              localStorage.setItem('directors_shareholders_table', JSON.stringify(data));
             
//              console.log(Directors_Shareholders_table,"tabledata")
 
//              // Inform user that data has been saved to LocalStorage
//              // frappe.msgprint('Data saved to LocalStorage successfully');
             
//              // Retrieve the data from LocalStorage
//              var Directors_Shareholders_table = JSON.parse(localStorage.getItem('directors_shareholders_table'));
             
//              // Log the retrieved data to the console
//              console.log(Directors_Shareholders_table, "data");
             
//              // Add the retrieved data to the child table
//              addDataToChildTable(frm, Directors_Shareholders_table);
//          },
//          'Directors/ShareHolders');
//      },
     
//  //Export TurnOver	
//  export_turnover_add_new: function(frm) {
      
//          frappe.prompt([
//              {'fieldname': 'buyer_type', 'fieldtype': 'Heading', 'label': 'Type of Buyer'},
             
//              {'fieldname': '', 'fieldtype': 'Section Break', 'label': ''},
             
//              {'fieldname': 'associate_companies', 'fieldtype': 'Check','label': 'ASSOCIATED COMPANIES'},
             
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
             
//              {'fieldname': 'government_buyers', 'fieldtype': 'Check', 'label': 'GOVERNMENT BUYERS'},
             
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
             
//              {'fieldname': 'private_buyers', 'fieldtype': 'Check', 'label': 'PRIVATE BUYERS'},
             
//              {'fieldname': '', 'fieldtype': 'Section Break', 'label': ''},
             
//              {'fieldname': 'country_of_dest', 'fieldtype': 'Link', 'options': 'Country', 'label': 'Country'},
//              {'fieldname': 'currency_invoiced_eg_pularandsusd', 'fieldtype': 'Select','options': '   \nNamibian Doller \nBOTSWANA PULA \nSouth African Rands',  'label': 'Currency'},
//              {'fieldname': 'total_turnoverlast_year', 'fieldtype': 'Currency', 'label': 'Last TurnOver'},
//              {'fieldname': 'estturnovernext_12_months', 'fieldtype': 'Currency', 'label': 'Estimated TurnOver'},
             
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
             
//            // {'fieldname': 'text', 'fieldtype': 'Data', 'label': ''},
             
//              {'fieldname': 'terms_of_payment', 'fieldtype': 'Select','options': '   \n1-3m \n1-3mLC \n4-6m \n4-6mLC \ncad \ncadlc \nTT7d', 'label': 'Terms of Payment'},
            
//          ],
//          function(values){
//              // Construct an object with the field values
//          //   var data = {
//          //         associate_companies: values.associate_companies,
//          //         government_buyers: values.government_buyers,
//          //         private_buyers: values.private_buyers,
//          //         country_of_dest: values.country_of_dest,
//          //         total_turnoverlast_year: values.total_turnoverlast_year,
//          //         estturnovernext_12_months: values.estturnovernext_12_months,
//          //         currency_invoiced_eg_pularandsusd: values.currency_invoiced_eg_pularandsusd,
//          //         terms_of_payment: values.terms_of_payment,
//          //     };
         
//          // Construct an object with the field values
//          var data = {
//              buyer_type: values.associate_companies ? 'Associated Companies' :
//                          values.government_buyers ? 'Government Buyers' :
//                          values.private_buyers ? 'Private Buyers' : '',
//              associate_companies: values.associate_companies,
//              government_buyers: values.government_buyers,
//              private_buyers: values.private_buyers,
//              country_of_dest: values.country_of_dest,
//              total_turnoverlast_year: values.total_turnoverlast_year,
//              estturnovernext_12_months: values.estturnovernext_12_months,
//              currency_invoiced_eg_pularandsusd: values.currency_invoiced_eg_pularandsusd,
//              terms_of_payment: values.terms_of_payment,
//          };
 
//              // Save the object to LocalStorage
//              localStorage.setItem('Export_TurnOver_table', JSON.stringify(data));
             
//              console.log(Export_TurnOver_table,"tabledata");
 
//              // Inform user that data has been saved to LocalStorage
//              // frappe.msgprint('Data saved to LocalStorage successfully');
             
//              // Retrieve the data from LocalStorage
//              var Export_TurnOver_table = JSON.parse(localStorage.getItem('Export_TurnOver_table'));
             
//              // Log the retrieved data to the console
//              console.log(Export_TurnOver_table, "data");
             
//              // Add the retrieved data to the child table
//              export_turnover_addDataToChildTable(frm, Export_TurnOver_table);
             
//               // Update the field in the other tab
//            frm.set_value('country_text', values.country_of_dest);
//          },
//          'Export TurnOver');
//      },
     
//  //Principal Buyer 
//  principalbuyer_add_new: function(frm) {
     
//  frappe.call({
//      method: 'frappe.client.get_list',
//      args: {
//          'doctype': 'Buyer',
//          'filters': {'eci': 1}, // Assuming you have a field 'eci' to identify specific buyers
//          'fields': ['buyer_name', 'country', 'associated_companies', 'government_buyers', 'private_buyers'] // Adjust fields as needed
//      },
//      callback: function(response) {
//          var eci_buyers = response.message;
//          var options = [];
//          var buyer_country_map = {}; // Map to store buyer_name -> country mapping
//          var buyer_type = {};
         
//          eci_buyers.forEach(function(buyer) {
//              options.push({label: buyer.buyer_name, value: buyer.buyer_name});
//              buyer_country_map[buyer.buyer_name] = buyer.country; // Populate the map
             
//              //buyer_type
//              var types = [];
//              if (buyer.associated_companies) {
//                  types.push('Associated Companies');
//              }
//              if (buyer.government_buyers) {
//                  types.push('Government Buyers');
//              }
//              if (buyer.private_buyers) {
//                  types.push('Private Buyers');
//              }
//              buyer_type[buyer.buyer_name] = types.join(', ');
//          });
 
//          frappe.prompt([
//              {'fieldname': 'buyer_name', 'fieldtype': 'Select', 'options': options, 'label': 'Buyer Name',
//                  onchange: function() {
//                      var buyer_name = this.value;
//                      var buyer_country = buyer_country_map[buyer_name];
//                      // Set the value of 'Buyer Country' field in the dialog box
//                      $('input[data-fieldname="buyer_country"]').val(buyer_country);
                     
//                      var buyer_types = buyer_type[buyer_name];
//                      $('input[data-fieldname="buyer_type"]').val(buyer_types);
//                  }
//              },
//              {'fieldname': 'add_buyer', 'fieldtype': 'Button','label': 'Add New Buyer',
//                  click: function() {
                     
//                    frappe.new_doc('Buyer'); 
                     
//                  },
                 
               
                  
//              },
//               {'fieldname': 'buyer_type', 'fieldtype': 'Data', 'label': 'Buyer Type'},
//              {'fieldname': 'buyer_country', 'fieldtype': 'Data', 'label': 'Buyer Country'}, 
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
//              {'fieldname': 'bank', 'fieldtype': 'Select', 'options': '   \n Bank of Botswana \n First National Bank Botswana (FNBB) \nStandard Chartered Bank Botswana\nBarclays Bank of Botswana (now Absa Bank Botswana)\nStanbic Bank Botswana\nBank Gaborone\nCapital Bank\nBancABC Botswana', 'label': 'Bank Name'},
//              {'fieldname': 'accno', 'fieldtype': 'Data', 'label': 'Account No'},
             
            
//              {'fieldname': 'branch', 'fieldtype': 'Data', 'label': 'Branch'},
//              {'fieldname': 'amount_outstanding', 'fieldtype': 'Currency', 'label': 'O/S Amount'},
//              // Additional fields as needed
//          ],
//          function(values){
//              // Construct an object with the field values
//              var data = {
//                  buyer_name: values.buyer_name,
//                  buyer_country: $('input[data-fieldname="buyer_country"]').val(),
//                  buyer_type: $('input[data-fieldname="buyer_type"]').val(),
//                  bank: values.bank,
//                  accno: values.accno,
//                  amount_outstanding: values.amount_outstanding
//              };
 
//              // Save the object to LocalStorage
//              localStorage.setItem('Principal_Buyer_Table', JSON.stringify(data));
 
//              // Retrieve the data from LocalStorage
//              var Principal_Buyer_Table = JSON.parse(localStorage.getItem('Principal_Buyer_Table'));
 
//              // Log the retrieved data to the console
//              console.log(Principal_Buyer_Table, "data");
 
//              // Add the retrieved data to the child table
//              principle_buyer_addDataToChildTable(frm, Principal_Buyer_Table);
//          },
//          'Principal Buyer');
         
              
 
//      },
//  });
 
 
 
 
 
 
     
      
//          // frappe.prompt([
//          //     {'fieldname': 'buyer_name', 'fieldtype': 'Link', 'options': 'Add_Buyers', 'label': 'Buyer'},
             
//          //     {'fieldname': 'buyer_country', 'fieldtype': 'Data','label': 'Buyer Country'},
             
//          //      {'fieldname': 'bank', 'fieldtype': 'Link', 'options': 'Bank_Details', 'label': 'Bank Name'},
             
//          //      {'fieldname': 'accno', 'fieldtype': 'Data', 'label': 'Account No'},
             
//          //     {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
             
//          //     {'fieldname': 'buyer_type', 'fieldtype': 'Data', 'label': 'Buyer Type'},
             
//          //     {'fieldname': 'branch', 'fieldtype': 'Data', 'label': 'Branch'},
             
//          //      {'fieldname': 'amount_outstanding', 'fieldtype': 'Currency', 'label': 'O/S Amount'},
             
//          // ],
//          // function(values){
             
//          //     // Construct an object with the field values
//          //   var data = {
//          //         buyer_name: values.buyer_name,
//          //         bank: values.bank,
//          //         accno: values.accno,
//          //         amount_outstanding: values.amount_outstanding
//          //     };
 
//          //   // Save the object to LocalStorage
//          //     localStorage.setItem('Principal_Buyer_Table', JSON.stringify(data));
             
//          //     console.log(Principal_Buyer_Table,"tabledata");
 
//          //     // Inform user that data has been saved to LocalStorage
//          //     // frappe.msgprint('Data saved to LocalStorage successfully');
             
//          //     // Retrieve the data from LocalStorage
//          //     var Principal_Buyer_Table = JSON.parse(localStorage.getItem('Principal_Buyer_Table'));
             
//          //     // Log the retrieved data to the console
//          //     console.log(Principal_Buyer_Table, "data");
             
//          //     // Add the retrieved data to the child table
//          //     principle_buyer_addDataToChildTable(frm, Principal_Buyer_Table);
//          // },
//          // 'Principal Buyer');
//      },
     
//  //Baddebts
//  baddebts_addnew: function(frm) {
      
//          frappe.prompt([
//              {'fieldname': 'country', 'fieldtype': 'Link', 'options': 'Country', 'label': 'Country'},
              
//              {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
             
             
//              {'fieldname': 'no_of_cases', 'fieldtype': 'Data','label': 'No of Cases'},
             
//              {'fieldname': '', 'fieldtype': 'Section Break', 'label': ''},
             
             
//              {'fieldname': 'baddebts_in_last_3years', 'fieldtype': 'Heading', 'label': 'BadDebts in last 3Years'},
            
//               {'fieldname': 'year1', 'fieldtype': 'Currency', 'label': 'Year1'},
             
//               {'fieldname': 'year2', 'fieldtype': 'Currency', 'label': 'Year2'},
              
//               {'fieldname': 'year3', 'fieldtype': 'Currency', 'label': 'Year3'},
              
//               {'fieldname': '', 'fieldtype': 'Column Break', 'label': ''},
              
              
//              {'fieldname': 'baddebts_for_subsequent_period_till_date', 'fieldtype': 'Heading', 'label': 'BadDebts for subsequent Period till Date'},
              
//              {'fieldname': 'actualand_estimated', 'fieldtype': 'Currency', 'label': 'Actual and Estimated'},
             
             
//          ],
//          function(values){
//              // Construct an object with the field values
//            var data = {
//                  country: values.country,
//                  no_of_cases: values.no_of_cases,
//                  year1: values.year1,
//                  year2: values.year2,
//                  year3: values.year3,
//                  actualand_estimated: values.actualand_estimated
//              };
 
//            // Save the object to LocalStorage
//              localStorage.setItem('BadDebts_Table', JSON.stringify(data));
             
//              console.log(BadDebts_Table,"tabledata");
 
//              // Inform user that data has been saved to LocalStorage
//              // frappe.msgprint('Data saved to LocalStorage successfully');
             
//              // Retrieve the data from LocalStorage
//              var BadDebts_Table = JSON.parse(localStorage.getItem('BadDebts_Table'));
             
//              // Log the retrieved data to the console
//              console.log(BadDebts_Table, "data");
             
//              // Add the retrieved data to the child table
//              baddebts_addDataToChildTable(frm, BadDebts_Table);
//          },
//          'Past Experience');
//      },  
 
     
//  });
 
 
 
//  //addDataToChildTable in Directors add Shareholders table
//  //Local storage data displaying in child table
//  function addDataToChildTable(frm, data) {
//      // Access the child table grid
//      var childTable = frm.fields_dict['directors_shareholders_table'].grid;
 
//      // Add a new row to the child table
//      var newRow = childTable.add_new_row();
 
//      // Set values for each field in the row
//      frappe.model.set_value(newRow.doctype, newRow.name, 'id_type', data.id_type);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'id_number', data.id_number);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'directorname', data.director_name);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'emailaddress', data.e_mail_address);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'fax', data.fax);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'contact_no', data.contact_no);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'designation', data.designation);
 
 
//      // Refresh the child table to reflect the changes
//      childTable.refresh();
//  }
 
 
//  //Export Turnover
//  function export_turnover_addDataToChildTable(frm, data) {
//      // Access the child table grid
//      var childTable = frm.fields_dict['export_turnover'].grid;
 
//      // Add a new row to the child table
//      var newRow = childTable.add_new_row();
 
//      // Set values for each field in the row
//      frappe.model.set_value(newRow.doctype, newRow.name, 'buyer_type', data.buyer_type);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'country_of_dest', data.country_of_dest);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'total_turnoverlast_year', data.total_turnoverlast_year);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'estturnovernext_12_months', data.estturnovernext_12_months);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'currency_invoiced_eg_pularandsusd', data.currency_invoiced_eg_pularandsusd);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'terms_of_payment', data.terms_of_payment);
 
//      // Refresh the child table to reflect the changes
//      childTable.refresh();
//  }
 
 
//  //Principal Buyer
//  function principle_buyer_addDataToChildTable(frm, data) {
//      // Access the child table grid
//      var childTable = frm.fields_dict['principal_buyer'].grid;
 
//      // Add a new row to the child table
//      var newRow = childTable.add_new_row();
 
//      // Set values for each field in the row
//      frappe.model.set_value(newRow.doctype, newRow.name, 'buyer_name', data.buyer_name);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'bank', data.bank);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'buyer_type', data.buyer_type);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'accno', data.accno);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'amount_outstanding', data.amount_outstanding);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'buyer_country', data.buyer_country);
    
 
//      // Refresh the child table to reflect the changes
//      childTable.refresh();
//  }
 
 
//  //Baddebts
//  function baddebts_addDataToChildTable(frm, data) {
//      // Access the child table grid
//      var childTable = frm.fields_dict['baddebts'].grid;
 
//      // Add a new row to the child table
//      var newRow = childTable.add_new_row();
 
//      // Set values for each field in the row
//      frappe.model.set_value(newRow.doctype, newRow.name, 'country', data.country);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'noof_cases', data.no_of_cases);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'year1', data.year1);
//       frappe.model.set_value(newRow.doctype, newRow.name, 'year2', data.year2);
//        frappe.model.set_value(newRow.doctype, newRow.name, 'year3', data.year3);
//      frappe.model.set_value(newRow.doctype, newRow.name, 'actualand_estimated', data.actualand_estimated);
    
 
//      // Refresh the child table to reflect the changes
//      childTable.refresh();
//  }
 
 
//  //Auto generation of Proposal No
//  function generateNumber(frm) {
//      // Check if the proposal number field is already populated
//      if (!frm.doc.proposal_no) {
//          // Get the current year
//          let currentYear = new Date().getFullYear();
//          let prefix = `ECI/${currentYear}/`;
 
//          // Make a call to get the last number asynchronously
//          frappe.call({
//              method: 'frappe.client.get_list',
//              args: {
//                  doctype: 'ECI Proposal',
//                  fields: ['proposal_no', 'creation'],
//                  order_by: 'creation desc',
//                  limit: 1
//              },
//              callback: function(r) {
//                  console.log(r,"proposal no");
//                  if (r.message && r.message.length > 0) {
//                      let lastProposalNo = r.message[0].proposal_no;
//                      let lastNumber = parseInt(lastProposalNo.split("/").pop()); // Extract last part and parse it as integer
//                      if (!isNaN(lastNumber)) {
//                          // Increment the last number and pad it with leading zeros
//                          let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                          frm.set_value('proposal_no', prefix + newNumber);
//                      }
//                  } else {
//                      // If no previous numbers exist, set to default '0001'
//                      frm.set_value('proposal_no', prefix + '0001');
//                  }
//              }
//          });
//      }
//  }
 
 
 
 
 
 
 
 
 
 
 
 
 
     