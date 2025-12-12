// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Agenda and Endorsements for ECI Quotation', {
    onload: function(frm) {
        var proposalNumber = frm.doc.proposal_no;

        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Policy Approvals',
                filters: {
                    proposal_no: proposalNumber
                },
                fields: ['policy_holder', 'policy_number', 'proposal_no'],
                limit: 1
            },
            callback: function(response) {
                if (response && response.message && response.message.length > 0) {
                    var policyApprovalData = response.message[0];

                    frm.set_value('policy_name', policyApprovalData.policy_holder);
                    frm.set_value('policy_number', policyApprovalData.policy_number);
                    frm.set_value('proposal_no', policyApprovalData.proposal_no);
                } else {
                    frappe.msgprint('No matching record found in Policy Approvals.');
                }
            },
            error: function(err) {
                console.error('Error fetching data from Policy Approvals:', err);
                frappe.msgprint('An error occurred while fetching data from Policy Approvals.');
            }
        });
    }
});

