// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bond Claims', {
    onload: function(frm) {
        // Fetch approved policy holders and update dropdown options
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond Application',
                filters: {
                    'workflow_state': 'Approved'
                },
                fields: ['facility_name']
            },
            callback: function(response) {
                if (response.message) {
                    var approvedInBondClaims = response.message.map(function(client) {
                        return client.facility_name;
                    });
                    console.log("** Approved Policy Holders in Domestic Declarations:", approvedInBondClaims);

                    // Get currently set options from the form field
                    var currentOptions = frm.get_field('client').df.options || '';

                    // Combine options from both API calls and remove duplicates
                    var combinedOptions = currentOptions.split('\n').concat(approvedInBondClaims).filter(function(item, index, self) {
                        return self.indexOf(item) === index;
                    });

                    // Set dropdown options for policy holder field
                    frm.set_df_property('client', 'options', combinedOptions.join('\n'));
                } else {
                    console.log("No approved policy holders found in Domestic Declarations.");
                }
            },
            error: function(error) {
                console.error("API call failed:", error);
                frappe.msgprint('An error occurred while fetching policy holders from Domestic Declarations. Please check the console for details.');
            }
        });

        // Toggle display based on workflow state
        var workflow_state = frm.doc.workflow_state;
        frm.toggle_display('client1', workflow_state === "Approved");
        frm.toggle_display('client', workflow_state !== "Approved");
        frm.toggle_display('bond_no1', workflow_state === "Approved");
        frm.toggle_display('bond_no', workflow_state !== "Approved");
    },

    client: function(frm) {
        var policyHolder = frm.doc.client;

        console.log("Policy Holder:", policyHolder); // Check policy_holder value

        // Check if policyHolder is not empty
        if (policyHolder) {
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Bond Application',
                    filters: {
                        'facility_name': policyHolder
                    },
                    fields: ['facility_no']
                },
                callback: function(response) {
                    console.log("Response:", response); // Check response from server

                    if (response.message && response.message.length > 0) {
                        var policyNumbers = response.message.map(item => item.facility_no);
                        console.log("Policy Numbers:", policyNumbers); // Check policy numbers fetched

                        // Update dropdown field options
                        frm.set_df_property('bond_no', 'options', policyNumbers.join('\n'));
                        frm.refresh_field('bond_no'); // Refresh dropdown field
                    } else {
                        // Clear dropdown field options if no data found
                        frm.set_df_property('bond_no', 'options', '');
                        frm.refresh_field('bond_no'); // Refresh dropdown field
                    }
                },
                error: function(err) {
                    console.error("Error fetching Policy Approvals:", err); // Log error to console
                    frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
                }
            });
        } else {
            // Clear dropdown field options if policyHolder is empty
            frm.set_df_property('bond_no', 'options', '');
            frm.refresh_field('bond_no'); // Refresh dropdown field
        }
    },

    bond_no: function(frm) {
        var policyNumber = frm.doc.bond_no;

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond Application',
                filters: {
                    'facility_no': policyNumber
                },
                fields: ['facility_name', 'facility_no', 'project', 'period_from', 'bond_type', 'to', 'reinsurer', 'reg_date', 'amount_in_pula', 'bond_in_favour']
            },
            callback: function(response) {
                if (response.message && response.message.length > 0) {
                    var policyApprovalData = response.message[0];

                    // Check if policy number is already approved
                    frappe.call({
                        method: 'frappe.client.get_list',
                        args: {
                            doctype: 'Bond Claims',
                            filters: {
                                'bond_no': policyNumber,
                                'workflow_state': 'Approved'
                            },
                            fields: ['bond_no']
                        },
                        callback: function(approvedResponse) {
                            if (approvedResponse.message && approvedResponse.message.length > 0) {
                                frappe.msgprint('This bond number is already approved.');
                            } else {
                                // Populate fields if data is found
                                frm.set_value('client', policyApprovalData.facility_name || '');
                                frm.set_value('client1', policyApprovalData.facility_name || '');
                                frm.set_value('bond_no', policyApprovalData.facility_no || '');
                                frm.set_value('bond_no1', policyApprovalData.facility_no || '');
                                frm.set_value('project', policyApprovalData.project || '');
                                frm.set_value('bond_period_from', policyApprovalData.period_from || '');
                                frm.set_value('bond_period_to', policyApprovalData.to || '');
                                frm.set_value('policy_type', policyApprovalData.bond_type || '');
                                frm.set_value('reinsurer', policyApprovalData.reinsurer || '');
                                frm.set_value('date', policyApprovalData.reg_date || '');
                                frm.set_value('bond_value', policyApprovalData.amount_in_pula || '');
                                frm.set_value('principal', policyApprovalData.bond_in_favour || '');
                            }
                        },
                        error: function(err) {
                            console.error("Error fetching approved policy numbers:", err);
                            frappe.msgprint('An error occurred while checking approved policy numbers. Please check the console for details.');
                        }
                    });
                } else {
                    // Clear fields if no matching record found
                    frm.set_value('client', '');
                    frm.set_value('client1', '');
                    frm.set_value('bond_no', '');
                    frm.set_value('bond_no1', '');
                    frm.set_value('project', '');
                    frm.set_value('bond_period_from', '');
                    frm.set_value('bond_period_to', '');
                    frm.set_value('policy_type', '');
                    frm.set_value('reinsurer', '');
                    frm.set_value('date', '');
                    frm.set_value('bond_value', '');
                    frm.set_value('principal', '');
                }
            },
            error: function(err) {
                console.error("Error fetching Policy Approvals:", err);
                frappe.msgprint('An error occurred while fetching data from Policy Approvals. Please check the console for details.');
            }
        });
    },
     refresh(frm) {
        if (!frm.doc.claim_ref_no) {
            generateNumber(frm);
        }

              frm.fields_dict. value.$input.css("text-align", "right");

    },
});
function generateNumber(frm) {
    if (!frm.doc.claim_ref_no) {
        let currentYear = new Date().getFullYear();
        let prefix = `CLM/${currentYear}/`;
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Bond Claims',
                fields: ['claim_ref_no', 'creation'],
                order_by: 'creation desc',
                limit: 1
            },
            callback: function(r) {
                if (r.message && r.message.length > 0) {
                    let lastCRNumber = r.message[0].claim_ref_no;
                    let lastNumber = parseInt(lastCRNumber.split("/").pop());
                    if (!isNaN(lastNumber)) {
                        let newNumber = (lastNumber + 1).toString().padStart(4, '0');
                        frm.set_value('claim_ref_no', prefix + newNumber);
                    }
                } else {
                    frm.set_value('claim_ref_no', prefix + '0001');
                }
            }
        });
    }
}

