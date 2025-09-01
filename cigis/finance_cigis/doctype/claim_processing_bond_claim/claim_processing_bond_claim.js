// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Claim Processing Bond Claim', {
 

    // Trigger the calculation when the claim_amount field changes
    claim_ammount: function(frm) {
        calculatePaymentAmount(frm);
    },
     refresh: function(frm) {
        
         
        frm.fields_dict['claim_ammount'].$wrapper.find('input').css("text-align", "right");
        frm.fields_dict['insured_amt'].$wrapper.find('input').css("text-align", "right");
        frm.fields_dict['beci'].$wrapper.find('input').css("text-align", "right");
                frm.fields_dict[' payment_amount'].$wrapper.find('input').css("text-align", "right");

    },
});

function calculatePaymentAmount(frm) {
    // Get the value of claim_amount from the form
    var claimAmount = frm.doc.claim_ammount || 0;

    // Calculate payment amount based on claim_amount
    var paymentAmount = (claimAmount * 70) / 100;

    // Set the calculated payment amount to the field
    frm.set_value('payment_amount', paymentAmount);
}

// Automatically trigger calculation on form load
frappe.ui.form.on('Claim Processing Bond Claim', {
    onload: function(frm) {
        // Call the calculation function
        calculatePaymentAmount(frm);
    }
});

