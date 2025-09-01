// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

function generateClaimNumber(frm) {
    if (!frm.doc.claim_refno) {
        let currentYear = new Date().getFullYear();
        let prefix = `CLM/${currentYear}/`;

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'CI Claim',
                fields: ['claim_refno', 'creation'],
                order_by: 'creation desc',
                limit: 1
            },
            callback: function(r) {
                console.log(r, "claim ref no");
                if (r.message && r.message.length > 0) {
                    let lastClaimRefNo = r.message[0].claim_refno;
                    let lastNumber = parseInt(lastClaimRefNo.split("/").pop());
                    if (!isNaN(lastNumber)) {
                        let newNumber = (lastNumber + 1).toString().padStart(4, '0');
                        frm.set_value('claim_refno', prefix + newNumber);
                    }
                } else {
                    frm.set_value('claim_refno', prefix + '0001');
                }
            }
        });
    }
}

// Your Frappe form script
frappe.ui.form.on('CI Claim', {
    onload: function(frm) {
var workflowState = frm.doc.workflow_state;

        if (workflowState === "Approved") {

            frm.toggle_display('ph_name', false);
            frm.toggle_display('ph_name1', true);
            
             frm.toggle_display('policyno', false);
             frm.toggle_display('policyno1', true);
                
             frm.toggle_display('potential_claim_no', false);
              frm.toggle_display('potential_claim_no1', true);

        }

 
        generateClaimNumber(frm);
    },


    refresh: function(frm) {
        fetchPolicyHolders(frm);
        fetchBuyers(frm);
    },

    ph_name: function(frm) {
        fetchBuyers(frm); // Ensure this is called when ph_name changes
        fetchPolicyNumbers(frm);
    },

    buyer: function(frm) {
        fetchClaimDetails(frm);
    }
});


function fetchPolicyHolders(frm) {
    console.log("Starting fetchPolicyHolders...");

    frappe.call({
        method: 'frappe.client.get_list',
        args: {
            doctype: 'Potential Claim Payment',
            filters: {
                workflow_state: "Approved"
            },
            fields: ['ph_name'],
            limit_page_length: 1000
        },
        callback: function(response) {
            if (response.message) {
                let uniquePolicyHolders = new Set();
                response.message.forEach(function(record) {
                    uniquePolicyHolders.add(record.ph_name);
                });

                frappe.call({
                    method: 'frappe.client.get_list',
                    args: {
                        doctype: 'CI Claim',
                        fields: ['ph_name'],
                        limit_page_length: 1000
                    },
                    callback: function(ciResponse) {
                        if (ciResponse.message) {
                            ciResponse.message.forEach(function(ciRecord) {
                                uniquePolicyHolders.delete(ciRecord.ph_name);
                            });
                        }

                        let policyHolderOptions = Array.from(uniquePolicyHolders);
                        policyHolderOptions.unshift("");

                        console.log("Policy Holder Options:", policyHolderOptions);
                        // Temporarily comment out the field update calls for testing
                        // frm.set_df_property('ph_name', 'options', policyHolderOptions.join("\n"));
                        // frm.set_value('ph_name1', policyHolderOptions.join('\n'));
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.error("Error fetching CI Claim records:", textStatus, errorThrown);
                    }
                });
            } else {
                console.error("No policy holders found");
                // Clear the field if no policy holders are found
                // frm.set_value('ph_name1', '');
            }
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error("Error fetching policy holders:", textStatus, errorThrown);
        }
    });
}





function fetchBuyers(frm) {
    let ph_name = frm.doc.ph_name;
    console.log("Fetching buyers for ph_name:", ph_name); // Debugging statement

    if (ph_name) {
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Potential Claims',
                filters: {
                    ph_name: ph_name
                },
                fields: ['buyer']
            },
            callback: function(response) {
                if (response.message) {
                    let buyers = response.message.map(x => x.buyer);
                    buyers.unshift("");
                    console.log("Buyers found:", buyers); // Debugging statement
                    frm.set_df_property('buyer', 'options', buyers.join("\n"));
                } else {
                    console.error("No buyers found for the selected ph_name");
                    frm.set_df_property('buyer', 'options', ""); // Reset options if no data is found
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("Error fetching buyers:", textStatus, errorThrown);
            }
        });
    } else {
        console.error("ph_name is not selected");
        frm.set_df_property('buyer', 'options', ""); // Reset options if ph_name is not selected
    }
}

function fetchPolicyNumbers(frm) {
    let ph_name = frm.doc.ph_name;
    if (ph_name) {
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Potential Claim Payment',
                filters: {
                    ph_name: ph_name,
                    workflow_state: "Approved"
                },
                fields: ['policy_no'],
                limit_page_length: 1000
            },
            callback: function(response) {
                if (response.message) {
                    let policyNumbers = response.message.map(record => record.policy_no);
                    frm.set_df_property('policyno', 'options', policyNumbers.join('\n'));
                    frm.set_value('policyno1', policyNumbers.join('\n')); // Updated line
                } else {
                    frm.set_df_property('policyno', 'options', '');
                    frm.set_value('policyno1', ''); // Clear the field if no policy numbers found
                    console.error("No policy numbers found for the selected policy holder");
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("Error fetching policy numbers:", textStatus, errorThrown);
            }
        });
    } else {
        frm.set_df_property('policyno', 'options', '');
        frm.set_value('policyno1', ''); // Clear the field if ph_name is empty
    }
}

function fetchClaimDetails(frm) {
    let buyer = frm.doc.buyer;
    if (buyer) {
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Potential Claims',
                filters: {
                    buyer: buyer
                },
                fields: ['terms_of_payment', 'claim_ref_no', 'cause_of_loss', 'claim_date','inception_date', 'credit_limit', 'cl_inception_date', 'cl_expiry_date', 'client_type', 'claim_value']
            },
            callback: function(response) {
                if (response.message && response.message.length > 0) {
                    let data = response.message[0];
                    frm.set_value('terms_of_payment', data.terms_of_payment);
                    frm.set_value('cause_of_loss', data.cause_of_loss);
                    frm.set_value('cl_claim_date', data.claim_date);
                    frm.set_value('credit_limit', data.credit_limit);
                    frm.set_value('inception_date', data.inception_date);
                    frm.set_value('cl_inception_date', data.cl_inception_date);
                    frm.set_value('cl_expiry_date', data.cl_expiry_date);
                    frm.set_value('client_type', data.client_type);
                    frm.set_value('claim_value__p', data.claim_value);

                    // Prepare claim reference numbers for dropdown
                    let claimRefNos = response.message.map(claim => claim.claim_ref_no);
                    let claimRefOptions = claimRefNos.map(ref => ref); // Array of strings for select dropdown

                    // Adding an empty option
                    claimRefOptions.unshift("");

                    // Set dropdown options
                    frm.set_df_property('potential_claim_no', 'options', claimRefOptions);
                    frm.set_value('potential_claim_no1', claimRefNos.join('\n'));
                } else {
                    console.error("No claim details found for the selected buyer");
                    frm.set_df_property('potential_claim_no', 'options', [""]); // Reset to empty option
                    frm.set_value('potential_claim_no1', '');
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("Error fetching claim details:", textStatus, errorThrown);
            }
        });
    }
}

