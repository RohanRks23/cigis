// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Acceptance Form', {
    refresh(frm) {
         console.log("covering Letter - refresh function executed");
  
         // Retrieve client name from sessionStorage
         var selectedProposalNo = sessionStorage.getItem('selectedProposalNo');
  
         console.log(selectedProposalNo, "retrieved from sessionStorage");
  
         if (selectedProposalNo) {
             // Set the 'to' field in the 'covering Letter' doctype
             frm.set_value('proposal_no', selectedProposalNo);
             console.log(selectedProposalNo, "set to the to field");
         } else {
             console.log("No client name found in sessionStorage");
         }
     }
 });
