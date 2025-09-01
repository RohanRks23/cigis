// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Claim Processing Dci', {
	refresh: function(frm) {
	   
		
	   frm.fields_dict['claim_ammount'].$wrapper.find('input').css("text-align", "right");
	   frm.fields_dict['insured_amt'].$wrapper.find('input').css("text-align", "right");
	   frm.fields_dict['beci'].$wrapper.find('input').css("text-align", "right");
			   frm.fields_dict['cost_saving'].$wrapper.find('input').css("text-align", "right");

   },
   next: function(frm) {
	   frappe.route_options = {
		   name1: frm.doc.client,
		   policy_numberbond_number: frm.doc.policy_no,
		   type: frm.doc.type,
		   payment_ref_no: frm.doc.payment_ref_no,
		   buyer: frm.doc.buyer,
		   claim_ref_number: frm.doc.claim_ref_no,
		   claim_ammount: frm.doc.claim_ammount,
		   reinsure: frm.doc.reinsure,
		   status: frm.doc.status,
		   process_date: frm.doc.process_date,
		   cause_of_loss: frm.doc.cause_of_loss,
		   insured_amount: frm.doc.insured_amt,
		   beci: frm.doc.beci
	   };
	   frappe.new_doc('Claim Processing Dci Status');
   }
});


