// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Claim Processing Eci Status', {
 
	  
 
    // Trigger the calculation when the claim_amount field changes
    claim_amoun: function(frm) {
        calculatePaymentAmount(frm);
    }
});

function calculatePaymentAmount(frm) {
    // Get the value of claim_amount from the form
    var claimAmount = frm.doc.claim_amoun || 0;

    // Calculate payment amount based on claim_amount
    var paymentAmount = (claimAmount * 85) / 100;

    // Set the calculated payment amount to the field
    frm.set_value('payment_amount', paymentAmount);
}

// Automatically trigger calculation on form load
frappe.ui.form.on('Claim Processing Eci Status', {
    onload: function(frm) {
        // Call the calculation function
        calculatePaymentAmount(frm);
    }
});

