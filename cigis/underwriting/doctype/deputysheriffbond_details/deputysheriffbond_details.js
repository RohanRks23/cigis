// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('DeputySheriffBond_Details', {
	onload:function(frm){
	 reinsureload(frm);
	 sheriffnameload(frm);
	 if(!frm.doc.bondno)
	 {
		 generateBondNumber(frm);
	 }
 }, 
 refresh(frm) {

 },
 
 //To call another Doctype
 addnew(frm)
 {
	 frappe.set_route('Form','DeputySheriffBond');
 },
});

//Automatic generation of bondno)
function generateBondNumber(frm) {
 var currentYear = new Date().getFullYear();
 
 frappe.call({
	 method: 'frappe.client.get_value',
	 args: {
		 'doctype': 'DeputySheriffBond_Details',
		 'filters': {
			 'bondno': currentYear.toString() // Assuming bondno is a data type field storing the year
		 },
		 'fieldname': 'bondno',
		 'order_by': 'creation',
		 'sort_order': 'desc'
	 },
	 callback: function(response) {
		 var lastBondNo = response.message.bondno;
		 var currentCounter = lastBondNo ? parseInt(lastBondNo.split('/')[2]) + 1 : 1;
		 var newBondNo = 'BND/' + currentYear + '/' + ('000' + currentCounter).slice(-4);
		 frm.set_value('bondno', newBondNo);
		 frm.fields_dict.bondvalue.$input.css("text-align", "right");
		 frm.fields_dict.premiumwithoutvat.$input.css("text-align", "right");
		 frm.fields_dict.invoiceno.$input.css("text-align", "right");
		 frm.fields_dict.commission.$input.css("text-align", "right");
		 frm.fields_dict.premiumrate.$input.css("text-align", "right");
		 frm.fields_dict.reinsureamt.$input.css("text-align", "right");
		  frm.fields_dict.ecgc_ref_no.$input.css("text-align", "right");
		 frm.fields_dict.guarentee_amount.$input.css("text-align", "right");
		 frm.fields_dict.month.$input.css("text-align", "right");
		 frm.fields_dict.guarentee_fee_rate.$input.css("text-align", "right");
		 frm.fields_dict.reinsure1.$input.css("text-align", "right");
		 frm.fields_dict.reinsurer_ref_number.$input.css("text-align", "right");
		 frm.fields_dict.portion_of_guarentee_amount_to_reinsurer.$input.css("text-align", "right");
		 frm.fields_dict.portion_of_guarentee_feeto_reinsurer.$input.css("text-align", "right");
		 frm.fields_dict.ecgc_commission.$input.css("text-align", "right");
		 frm.fields_dict.total_due_with_out_vat.$input.css("text-align", "right");
		 frm.fields_dict.vat.$input.css("text-align", "right");
		 frm.fields_dict.vat1.$input.css("text-align", "right");
		 frm.fields_dict.total_due.$input.css("text-align", "right");
		 frm.fields_dict.guarentee_fee.$input.css("text-align", "right");
		 frm.fields_dict.ecgc.$input.css("text-align", "right");
		 frm.fields_dict.portion_of_guarentee_amount_to_ecgc.$input.css("text-align", "right");
		 frm.fields_dict.portion_of_guarentee_fee_to_ecgc.$input.css("text-align", "right");
		 frm.fields_dict.ecgc1.$input.css("text-align", "right");
		 frm.fields_dict.broker_commission.$input.css("text-align", "right");
		


	 }
 });
}



//To load the ReInsure Name 
function reinsureload(frm) {
 frappe.call({
	 method: 'frappe.client.get_list',
	 args: {
		 doctype: 'ReInsurers_Details',
		 fields: ['reinsurename']
	 },
	 callback: function(response) {
		 if (response.message) {
			 var options = [];
			 $.each(response.message, function(i, item) {
				 options.push( item.reinsurename);
			 });
			 frm.set_df_property('reinsure', 'options', options);
		 }
	 }
 });
}



//To load the sheriff Name 
function sheriffnameload(frm) {
 frappe.call({
	 method: 'frappe.client.get_list',
	 args: {
		 doctype: 'DeputySheriffBond',
		 fields: ['sheriffname']
	 },
	 callback: function(response) {
		 if (response.message) {
			 var options = [];
			 $.each(response.message, function(i, item) {
				 options.push( item.sheriffname);
			 });
			 frm.set_df_property('dsheriffname', 'options', options);
		 }
	 }
 
 });
}


frappe.ui.form.on('DeputySheriffBond_Details', {

 bondvalue: function(frm) {

	 calculateResult(frm);

 },

 premium: function(frm) {

	 calculateResult(frm);

 }

});

function calculateResult(frm) {

 var bondvalue = frm.doc.bondvalue || 0; // Get the value of field1, default to 0 if empty

 var premium = frm.doc.premium || 0; // Get the value of field2, default to 0 if empty

 var result = bondvalue * premium; // Calculate the result

 frm.set_value('premiumwithoutvat', result); // Set the calculated result to result_field
 
}

frappe.ui.form.on('DeputySheriffBond_Details', {

 premiumwithoutvat: function(frm) {

	 calculateResults(frm);

 },



});

function calculateResults(frm) {

 var premiumwithoutvat = frm.doc.premiumwithoutvat || 0; // Get the value of field1, default to 0 if empty

 var results = premiumwithoutvat * 0.14; // Calculate the results

 frm.set_value('premiumrate', results); // Set the calculated result to result_field

 
}




