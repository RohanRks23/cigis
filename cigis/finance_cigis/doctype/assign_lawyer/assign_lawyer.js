// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assign_Lawyer', {
    refresh(frm){
        frm.fields_dict.lawyer_.$input.css("text-align","right");
    },
    
    onload: function(frm) {
        frm.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Lawyer Debt Collector Details',
                fields: ['name1']
            },
            callback: function(response) {
                console.log("name1 received:", response);
                let Data = response.message || [];
                let FinalData = Data.map(x => x.name1);
                frm.set_df_property('lawyer', 'options', FinalData);
                console.log("final", FinalData);
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("Error fetching lawyers details:", textStatus, errorThrown);
            }
        });

        frm.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Credit Limit Processing',
                fields: ['policy_holder_name']
            },
            callback: function(response) {
                console.log("policyholder received:", response);
                let Data = response.message || [];
                let FinalData = Data.map(x => x.policy_holder_name);
                frm.set_df_property('ph_name', 'options', FinalData);
                console.log("final", FinalData);
            },
        });
    },
    ph_name: function(frm) {
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Credit Limit Processing',
                filters: {
                    'policy_holder_name': frm.doc.ph_name 
                },
                fields: ['policy_holder_name', 'buyer_name','policy_no'],
                limit_page_length: 100
            },
            callback: function(response) {
                var creditLimitProcessing = response.message[0];
                if (creditLimitProcessing) {
                    frm.set_value('buyer', creditLimitProcessing.buyer_name);
                    frm.set_value('ph_name', creditLimitProcessing.policy_holder_name);
                    frm.set_value('policy_no', creditLimitProcessing.policy_no);

                    frappe.call({
                        method: 'frappe.client.get_list',
                        args: {
                            doctype: 'CI Claim',
                            filters: {
                    'ph_name': frm.doc.ph_name 
                },
                            fields: ['claim_refno']
                        },
                        callback: function(response) {
                            var CIClaim = response.message[0];
                            if (CIClaim) {
                                frm.set_value('claim_ref_no', CIClaim.claim_refno);
                            }
                        }
                    });
                    

                    frappe.call({
                        method: 'frappe.client.get_list',
                        args: {
                            doctype: 'Policy Approvals',
                            filters: {
                                'policy_holder': creditLimitProcessing.policy_holder_name,
                                workflow_state : 'Approved'
                            },
                            fields: ['policy_type']
                        },
                        callback: function(response) {
                            var PolicyApprovals = response.message[0];
                            if (PolicyApprovals) {
                                frm.set_value('policy_type', PolicyApprovals.policy_type);
                            }
                        }
                    });
                }
            }
        });
    }
});

