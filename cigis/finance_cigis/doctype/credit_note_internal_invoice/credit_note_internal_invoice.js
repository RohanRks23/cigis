// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Credit Note Internal Invoice', {
	refresh(frm) {
	    frm.fields_dict['currency4'].$wrapper.find('input').css("text-align", "right");
        
	 
	}
})
