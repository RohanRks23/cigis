// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

  
frappe.ui.form.on('Claim Process', {
    onload: function(frm) {
        loadSubmittedClaims(frm);
        toggleFields(frm);
        var workflowState = frm.doc.workflow_state;

        if (workflowState === "Approved") {
            frm.toggle_display('policy_no', true);
            frm.toggle_display('client1', true);
            frm.toggle_display('policy_number', false);
            frm.toggle_display('client', false);
            frm.toggle_display('buyer1', true);
            frm.toggle_display('buyer', false);
        }

      //  loadSubmittedClaims(frm);
        let clientOptions = [];
        let policyNumberOptions = [];

        // Fetch clients and policy numbers from CI Claim
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'CI Claim',
                filters: {},
                fields: ['ph_name', 'policyno']
            },
            callback: function(ciResponse) {
                if (ciResponse.message) {
                    clientOptions = ciResponse.message.map(record => record.ph_name);
                    policyNumberOptions = ciResponse.message.map(record => record.policyno);

                    // Fetch clients and policy numbers from Bond Claims
                    frappe.call({
                        method: 'frappe.client.get_list',
                        args: {
                            doctype: 'Bond Claims',
                            filters: {},
                            fields: ['client', 'bond_no']
                        },
                        callback: function(bondResponse) {
                            if (bondResponse.message) {
                                clientOptions = clientOptions.concat(bondResponse.message.map(record => record.client));
                                policyNumberOptions = policyNumberOptions.concat(bondResponse.message.map(record => record.bond_no));
                                
                                // Deduplicate and set dropdown options for client and policy_number fields
                                var uniqueClients = [...new Set(clientOptions)];
                                frm.set_df_property('client', 'options', uniqueClients.join('\n'));
                                
                                // Initially set policy_number options to an empty array
                                frm.set_df_property('policy_number', 'options', '');
                            } else {
                                console.log("No clients or policy numbers found in Bond Claims.");
                            }
                        },
                        error: function(error) {
                            console.error("API call failed for Bond Claims:", error);
                            frappe.msgprint('An error occurred while fetching clients and policy numbers from Bond Claims. Please check the console for details.');
                        }
                    });
                } else {
                    console.log("No clients or policy numbers found in CI Claim.");
                }
            },
            error: function(error) {
                console.error("API call failed for CI Claim:", error);
                frappe.msgprint('An error occurred while fetching clients and policy numbers from CI Claim. Please check the console for details.');
            }
        });
                                
    },
        client: function(frm) {
        var selectedClient = frm.doc.client;
        if (selectedClient) {
            let policyNumbers = [];

            // Fetch policy numbers based on the selected client from CI Claim
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'CI Claim',
                    filters: { 'ph_name': selectedClient },
                    fields: ['policyno']
                },
                callback: function(ciResponse) {
                    if (ciResponse.message) {
                        policyNumbers = ciResponse.message.map(record => record.policyno);
                        
                        // Fetch policy numbers based on the selected client from Bond Claims
                        frappe.call({
                            method: 'frappe.client.get_list',
                            args: {
                                doctype: 'Bond Claims',
                                filters: { 'client': selectedClient },
                                fields: ['bond_no']
                            },
                            callback: function(bondResponse) {
                                if (bondResponse.message) {
                                    policyNumbers = policyNumbers.concat(bondResponse.message.map(record => record.bond_no));
                                    
                                    // Deduplicate and set dropdown options for policy_number field
                                    var uniquePolicyNumbers = [...new Set(policyNumbers)];
                                    frm.set_df_property('policy_number', 'options', uniquePolicyNumbers.join('\n'));
                                } else {
                                    console.log("No policy numbers found in Bond Claims for the selected client.");
                                    frm.set_df_property('policy_number', 'options', '');
                                }
                            },
                            error: function(error) {
                                console.error("API call failed for Bond Claims:", error);
                                frappe.msgprint('An error occurred while fetching policy numbers from Bond Claims. Please check the console for details.');
                            }
                        });
                    } else {
                        console.log("No policy numbers found in CI Claim for the selected client.");
                        frm.set_df_property('policy_number', 'options', '');
                    }
                },
                error: function(error) {
                    console.error("API call failed for CI Claim:", error);
                    frappe.msgprint('An error occurred while fetching policy numbers from CI Claim. Please check the console for details.');
                }
            });
        } else {
            frm.set_df_property('policy_number', 'options', '');
        }
    },
    client: function(frm) {
        var selectedClient = frm.doc.client;
        if (selectedClient) {
            let policyNumbers = [];

            // Fetch policy numbers based on the selected client from CI Claim
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'CI Claim',
                    filters: { 'ph_name': selectedClient },
                    fields: ['policyno']
                },
                callback: function(ciResponse) {
                    if (ciResponse.message) {
                        policyNumbers = ciResponse.message.map(record => record.policyno);
                        
                        // Fetch policy numbers based on the selected client from Bond Claims
                        frappe.call({
                            method: 'frappe.client.get_list',
                            args: {
                                doctype: 'Bond Claims',
                                filters: { 'client': selectedClient },
                                fields: ['bond_no']
                            },
                            callback: function(bondResponse) {
                                if (bondResponse.message) {
                                    policyNumbers = policyNumbers.concat(bondResponse.message.map(record => record.bond_no));
                                    
                                    // Deduplicate and set dropdown options for policy_number field
                                    var uniquePolicyNumbers = [...new Set(policyNumbers)];
                                    frm.set_df_property('policy_number', 'options', uniquePolicyNumbers.join('\n'));
                                } else {
                                    console.log("No policy numbers found in Bond Claims for the selected client.");
                                    frm.set_df_property('policy_number', 'options', '');
                                }
                            },
                            error: function(error) {
                                console.error("API call failed for Bond Claims:", error);
                                frappe.msgprint('An error occurred while fetching policy numbers from Bond Claims. Please check the console for details.');
                            }
                        });
                    } else {
                        console.log("No policy numbers found in CI Claim for the selected client.");
                        frm.set_df_property('policy_number', 'options', '');
                    }
                },
                error: function(error) {
                    console.error("API call failed for CI Claim:", error);
                    frappe.msgprint('An error occurred while fetching policy numbers from CI Claim. Please check the console for details.');
                }
            });
        } else {
            frm.set_df_property('policy_number', 'options', '');
        }
        var client = frm.doc.client;
        frm.set_value('client1', client);
        loadBondApplicationDetails(frm, client);
    },

    policy_number: function(frm) {
        var policyNumber = frm.doc.policy_number;
 var bondNumber = frm.doc.policy_number;
        frm.set_value('policy_no', bondNumber);
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'CI Claim',
                filters: {
                    policyno: policyNumber
                },
                fields: ['client_type', 'ph_name', 'buyer', 'claim_value__p', 'credit_limit']
            },
            callback: function(cIClaimResponse) {
                if (cIClaimResponse.message && cIClaimResponse.message.length > 0) {
                    var clientType = cIClaimResponse.message[0].client_type;
                    frm.set_df_property('client', 'options', [cIClaimResponse.message[0].ph_name]);
                    frm.set_value('policy_type', clientType || '');
                    frm.set_df_property('buyer', 'options', [cIClaimResponse.message[0].buyer]);
                    // frm.set_value('insuredamt', [cIClaimResponse.message[0].credit_limit]);
                    // frm.set_value('claimamount', [cIClaimResponse.message[0].claim_value__p]);

                    frm.set_value('status', 'Approved');
                } else {
                    frm.set_df_property('client', 'options', []);
                    fetchPolicyTypeFromBondClaims(policyNumber, frm);
                    frm.set_value('status', '');
                    // frm.set_value('insuredamt', '');
                    frm.set_df_property('buyer', 'options', []);
                    // frm.set_value('insuredamt' );
                    // frm.set_value('claimamount' );
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching data from CI Claims. Please check the console for details.');
            }
        });
                        
 //frappe.msgprint('check boxes based on type');
    },

    // client: function(frm) {
    //     var client = frm.doc.client;
    //     frm.set_value('client1', client);
    //     loadBondApplicationDetails(frm, client);
    // },
 
    buyer: function(frm) {
        var buyer = frm.doc.buyer;
        frm.set_value('buyer1', buyer);

        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'CI Claim',
                filters: {
                    insuredamt: frm.doc.credit_limit
                }
            },
            callback: function(r) {
                if (r.message) {
                    frm.set_value('insuredamt', r.message.credit_limit);
                    frm.set_value('claimamount', r.message.claim_value__p);
                }
            }
        });

        loadSubmittedClaims(frm);
        frm.toggle_display('confirm', false);
        toggleFields(frm);
    },

    refresh: function(frm) {
        // Set up a custom query for the 'policy_number' field
        frm.fields_dict['policy_number'].get_query = function(doc, cdt, cdn) {
            return {
                filters: {
                    // Add any specific filters for the 'policy_number' field here (optional)
                }
            };
        };

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                'doctype': 'Bond Claims',
                'filters': {
                    'workflow_state': 'Approved',
                },
                'fields': ['claim_ref_no']
            },
            callback: function(response) {
                if (response.message) {
                    var approvedClaimRefNumbers = response.message.map(function(claim) {
                        return claim.claim_ref_no;
                    });
                    frm.set_df_property('claim_ref_no', 'options', approvedClaimRefNumbers);
                }
            }
        });

        if (!frm.doc.paymentrefno) {
            generateNumber(frm);
        }

        frm.toggle_display('next', !frm.doc.__islocal);
        
        
        frm.fields_dict['insuredamt'].$wrapper.find('input').css("text-align", "right");
        frm.fields_dict['beci'].$wrapper.find('input').css("text-align", "right");
        frm.fields_dict['claimamount'].$wrapper.find('input').css("text-align", "right");
        
    },

    claim_ref_no: function(frm) {
        var claimRefNumber = frm.doc.claim_ref_no;

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond Claims',
                filters: {
                    claim_ref_no: claimRefNumber,
                },
                fields: ['claim_ref_no', 'bond_value', 'reason', 'date']
            },
            callback: function(response) {
                if (response.message && response.message.length > 0) {
                    var bondClaimData = response.message[0];

                    frm.set_value('causeofloss', bondClaimData.reason || '');
                    frm.set_value('processdate', bondClaimData.date || '');
                } else {
                    frm.set_value('causeofloss', '');
                    frm.set_value('processdate', '');

                    frappe.msgprint('No matching record found in Bond Application for the selected bond_no.');
                }
            },
            error: function(err) {
                console.error(err);
                frappe.msgprint('An error occurred while fetching data from Bond Application. Please check the console for details.');
            }
        });

        if (!frm.doc.paymentrefno) {
            generateNumber(frm);
        }
    },

    bond: function(frm) {
        // If Bond is checked, hide DCI and ECI
        if (frm.doc.bond) {
            frm.toggle_display(['dci', 'eci'], false);
        } else {
            frm.toggle_display(['dci', 'eci'], true);
        }
    },

    dci: function(frm) {
        // If DCI is checked, hide Bond and ECI
        if (frm.doc.dci) {
            frm.toggle_display(['bond', 'eci'], false);
        } else {
            frm.toggle_display(['bond', 'eci'], true);
        }
    },

    eci: function(frm) {
        // If ECI is checked, hide Bond and DCI
        if (frm.doc.eci) {
            frm.toggle_display(['bond', 'dci'], false);
        } else {
            frm.toggle_display(['bond', 'dci'], true);
        }
    },

    next: function(frm) {
        var selectedFields = [];

        // Checking if 'Bond' is selected
        if (frm.doc.bond) {
            selectedFields.push('Bond');
        }

        // Checking if 'DCI' is selected
        if (frm.doc.dci) {
            selectedFields.push('DCI');
        }

        // Checking if 'ECI' is selected
        if (frm.doc.eci) {
            selectedFields.push('ECI');
        }

        // If no field is selected, show a message
        if (selectedFields.length === 0) {
            frappe.msgprint(__('Please select at least one field.'));
        }
        // If more than one field is selected, show a message
        else if (selectedFields.length > 1) {
            frappe.msgprint(__('Please select only one field at a time.'));
        } else {
            // Set route options based on selected field
            frappe.route_options = {
                client: frm.doc.client,
                policy_no: frm.doc.policy_number,
                type: frm.doc.policy_type,
                payment_ref_no: frm.doc.paymentrefno,
                buyer: frm.doc.buyer,
                claim_ref_no: frm.doc.claim_ref_no,
                claim_ammount: frm.doc.claimamount,
                reinsure: frm.doc.reinsure,
                status: frm.doc.status,
                process_date: frm.doc.processdate,
                cause_of_loss: frm.doc.causeofloss,
                insured_amt: frm.doc.insuredamt,
                beci: frm.doc.beci
            };

            // Open new document based on selected field
            if (selectedFields[0] === 'Bond') {
                frappe.new_doc('Claim Processing Bond Claim');
            } else if (selectedFields[0] === 'DCI') {
                frappe.new_doc('Claim Processing Dci');
            } else if (selectedFields[0] === 'ECI') {
                frappe.new_doc('Claim Processing ECI');
            }
        }
    },
     
});

function generateNumber(frm) {
    // Check if the paymentrefno field is already populated
    if (!frm.doc.paymentrefno) {
        // Get the current year
        let currentYear = new Date().getFullYear();
        let prefix = `PMT/${currentYear}/`;
        // Make a call to get the last number asynchronously
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Claim Process', // Change this to 'Bond Claims' since it seems like that's the correct doctype
                fields: ['paymentrefno', 'creation'],
                order_by: 'creation desc',
                limit: 1
            },
            callback: function(r) {
                console.log(r, "paymentrefno");
                if (r.message && r.message.length > 0) {
                    let lastPMTNumber = r.message[0].paymentrefno;
                    let lastNumber = parseInt(lastPMTNumber.split("/").pop()); // Extract last part and parse it as integer
                    if (!isNaN(lastNumber)) {
                        // Increment the last number and pad it with leading zeros
                        let newNumber = (lastNumber + 1).toString().padStart(4, '0');
                        frm.set_value('paymentrefno', prefix + newNumber);
                    }
                } else {
                    // If no previous numbers exist, set to default '0001'
                    frm.set_value('paymentrefno', prefix + '0001');
                }
            }
        });

        // Fetch claim reference numbers for options
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                'doctype': 'Bond Claims',
                'fields': ['claim_ref_no']
            },
            callback: function(response) {
                if (response.message) {
                    // Extract claim reference numbers from the response
                    var claimNumbers = response.message.map(function(claim) {
                        return claim.claim_ref_no;
                    });
                    // Set the options for the 'claim_ref_no' field
                    frm.set_df_property('claim_ref_no', 'options', claimNumbers);
                }
            }
        });
    }
}

frappe.ui.form.on('Claim Process', {
    policy_number: function(frm) {
        toggleFields(frm);
    }
});

function toggleFields(frm) {
    var policyNumber = frm.doc.policy_number;
    var showPLYFields = policyNumber && policyNumber.startsWith("PLY");
    var showBFCFields = policyNumber && policyNumber.startsWith("BFC");

    frm.toggle_display('buyer', showPLYFields);
    frm.toggle_display('invoiceattached', showPLYFields);
    frm.toggle_display('order_attached', showPLYFields);
    frm.toggle_display('delivery_notes', showPLYFields);
    frm.toggle_display('statement', showPLYFields);
    frm.toggle_display('sureties', showPLYFields);
    frm.toggle_display('claims_application_formannexure', showPLYFields);
    frm.toggle_display('copies_of_correspondence_with_the_buyer', showPLYFields);
    frm.toggle_display('claims_application_form', showPLYFields);
    frm.toggle_display('statement_to_show_with_is_outstanding_from_a_specific_buyer', showPLYFields);

    frm.toggle_display('contractor_final_account_report', showBFCFields);
    frm.toggle_display('deman_letter', showBFCFields);

    frm.doc.showPLYFields = showPLYFields;
    frm.doc.showBFCFields = showBFCFields;
}

function loadSubmittedClaims(frm) {
//     frappe.call({
//         method: 'frappe.client.get_list',
//         args: {
//             'doctype': 'CI Claim',
//             'filters': {
//                 'workflow_state': 'Approved'
//             },
//             'fields': ['policyno']
//         },
//         callback: function(submittedCIClaimsResponse) {
//             if (submittedCIClaimsResponse.message) {
//                 var submittedCIClaims = submittedCIClaimsResponse.message.map(function(claim) {
//                     return claim.policyno;
//                 });

// //                 frappe.call({
// //                     method: 'frappe.client.get_list',
// //                     args: {
// //                         'doctype': 'Bond Claims',
// //                         'filters': {
// //                             'workflow_state': 'Approved'
// //                         },
// //                         'fields': ['bond_no']
// //                     },
// //                     callback: function(submittedBondClaimsResponse) {
// //                         if (submittedBondClaimsResponse.message) {
// //                             var submittedBondClaims = submittedBondClaimsResponse.message.map(function(claim) {
// //                                 return claim.bond_no;
// //                             });

// //                             var allSubmittedClaims = submittedCIClaims.concat(submittedBondClaims);

// //                             frappe.call({
// //                                 method: 'frappe.client.get_list',
// //                                 args: {
// //                                     'doctype': 'Claim Process',
// //                                     'filters': {
// //                                         'workflow_state': 'Approved',
// //                                         'policy_number': ['in', allSubmittedClaims]
// //                                     },
// //                                     'fields': ['policy_number', 'client']
// //                                 },
// //                                 callback: function(approvedClaimProcessingResponse) {
// //                                     if (approvedClaimProcessingResponse.message) {
// //                                         var approvedClaimProcessing = approvedClaimProcessingResponse.message.map(function(claimProcessing) {
// //                                             return claimProcessing.policy_number;
// //                                         });

// //                                         var filteredApprovals = allSubmittedClaims.filter(function(claim) {
// //                                             return !approvedClaimProcessing.includes(claim);
// //                                         });
// // frm.set_df_property('policy_number', 'options', filteredApprovals);
// //                                         frm.refresh_field('policy_number');
// //                                     }
// //                                 }
// //                             });
// //                         }
// //                     }
// //                 });
//             }
//         }
//     });
}

function fetchPolicyTypeFromBondClaims(policyNumber, frm) {
    frappe.call({
        method: 'frappe.client.get_list',
        args: {
            doctype: 'Bond Claims',
            filters: {
                bond_no: policyNumber
            },
            fields: ['policy_type', 'client', 'value']
        },
        callback: function(bondClaimsResponse) {
            if (bondClaimsResponse.message && bondClaimsResponse.message.length > 0) {
                var policyType = bondClaimsResponse.message[0].policy_type;

                frm.set_value('policy_type', policyType || '');
              // frm.set_df_property('client', 'options', [bondClaimsResponse.message[0].client]);
                frm.set_value('status', 'Approved');
                frm.set_value('claimamount', bondClaimsResponse.message[0].value);
            } else {
                frm.set_value('policy_type', '');
              // frm.set_df_property('client', 'options', []);
                frm.set_value('status', '');
                frm.set_value('claimamount', '');
            }
        },
        error: function(err) {
            console.error(err);
            frappe.msgprint('An error occurred while fetching data from Bond Claims. Please check the console for details.');
        }
    });
}

    
 
         
             
