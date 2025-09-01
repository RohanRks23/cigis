// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('ECI_Rejection_Letter', {
	onload: function(frm) {
		
		frappe.call({
	
				method: 'frappe.client.get',
	
				args: {
	
					doctype: 'ECI Proposal',
	
					filters: {
	
						client_name: frm.doc.to
	
					},
	
					fields: ['proposal_no', 'establishment_date']
	
				},
	
				callback: function (r) {
	
					console.log(r,"clent short name")
	
					if (!r.exc) {
	
						if (r.message) {
	
							frm.set_value('date', r.message.establishment_date);
							frm.set_value('regisration_no', r.message.registration_no);
							frm.set_value('proposal_no', r.message.proposal_no);
							frm.set_value('information', r.message.remarks);
	
						}
	
					} else {
	
						console.error("Error occurred:", r.exc);
	
					}
	
				}
	
			});
			frappe.call({
				method: 'frappe.client.get',
				args: {
					doctype: 'Company-Details',
					filters: {
						name1: frm.doc.to
					},
					fields: ['postal_address', 'location', 'physical_address']
				},
				callback: function (r) {
					console.log(r, "client details");
					if (!r.exc) {
						if (r.message) {
							// Concatenate the fields line by line
							let address = '';
							
							if (r.message.name1) {
								address += r.message.name1 + '\n';
							}
							if (r.message.location) {
								address += r.message.location + '\n';
							}
							if (r.message.physical_address) {
								address += r.message.physical_address + '\n';
							}
							if (r.message.postal_address) {
								address += r.message.postal_address + '\n';
							}
							 
							// Remove the trailing newline character
							address = address.trim();
	
							// Set the concatenated address in the 'address' field
							frm.set_value('address', address);
						}
					} else {
						console.error("Error occurred:", r.exc);
					}
				}
			});
		}
	})