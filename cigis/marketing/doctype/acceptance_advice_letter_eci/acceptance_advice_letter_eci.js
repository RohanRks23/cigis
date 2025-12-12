// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Acceptance Advice Letter ECI', {
	refresh: function(frm) {
        console.log("Acceptance letter");

      
        var proposalnumber = sessionStorage.getItem('proposalnumber');
        var Schedulenumber = sessionStorage.getItem('Schedulenumber');

        console.log(proposalnumber, "retrieved from sessionStorage");

        if (proposalnumber && Schedulenumber) {
            
            frm.set_value('proposal_no', proposalnumber);
            frm.set_value('policy_no', Schedulenumber);
            console.log(proposalnumber, "set to the to field");
            
               frm.toggle_enable('proposal_no', false);
               frm.toggle_enable('policy_no', false);
        } else {
            console.log("Not found in sessionStorage");
        }
    }
});
