// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Facility Review', {
 
//     refresh: function(frm) {
        
//         frm.fields_dict.bond_facility_limit1.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limit2.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limit3.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limit4.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.net_facility_amount.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limit1.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limit2.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limit3.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limit4.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limit5.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limits1.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limits2.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limits3.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.bond_facility_limits4.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.net_facility_amounts.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limits1.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limits2.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limits3.$wrapper.find('input').css("text-align", "right");
//         frm.fields_dict.security_per_limits4.$wrapper.find('input').css("text-align", "right");
    
    
//             // Check if the workflow state is 'Pending'
//             if (frm.doc.workflow_state === 'Pending') {
//                 // Show the fields
//                 const fields_to_show = [
//                     'gmapprover_remarks', 'gm_remarks', 'column_break_lw6xr', 
//                     'section_break_jcnbq', 'send_to_recommendation', 
//                     'section_break_0iqvw', 'send', 'section_break_e4pfo', 
//                     'documents', 'section_break_3xyof', 'upload_document', 
//                     'column_break_nu1ys', 'view_document', 'section_break_eroii', 
//                     'new_terms_accepted_by_client_details', 'accepted_by', 
//                     'accepted_on'
//                 ];
    
//                 fields_to_show.forEach(field => {
//                     frm.toggle_display(field, true);
//                 });
//             } else {
//                 // Hide the fields
//                 const fields_to_hide = [
//                     'gmapprover_remarks', 'gm_remarks', 'column_break_lw6xr', 
//                     'section_break_jcnbq', 'send_to_recommendation', 
//                     'section_break_0iqvw', 'send', 'section_break_e4pfo', 
//                     'documents', 'section_break_3xyof', 'upload_document', 
//                     'column_break_nu1ys', 'view_document', 'section_break_eroii', 
//                     'new_terms_accepted_by_client_details', 'accepted_by', 
//                     'accepted_on'
//                 ];
    
//                 fields_to_hide.forEach(field => {
//                     frm.toggle_display(field, false);
//                 });
//             }
//         },
//     //}); 
     
     
     
     
     
     
     
     
     
//         // refresh(frm){
//         // frm.fields_dict.send_to_recommendation.$input.addClass('btn-primary');
//         //     frm.fields_dict.upload_document.$input.addClass('btn-primary');
//         //     frm.fields_dict.view_document.$input.addClass('btn-primary');
            
            
            
//         //   var workflow_state = frm.doc.workflow_state;
     
//         //     // Check if the workflow state is 'Pending'
//         //     if (workflow_state === 'Pending') {
//         //         // Show the fields
//         //         frm.toggle_display('gmapprover_remarks', true);
//         //         frm.toggle_display('gm_remarks', true);
//         //          frm.toggle_display('column_break_lw6xr', true);
//         //           frm.toggle_display('section_break_jcnbq', true);
                  
//         //         frm.toggle_display('send_to_recomendation', true);
//         //         frm.toggle_display('section_break_0iqvw', true);
//         //          frm.toggle_display('send', true);
//         //           frm.toggle_display('send_to_recommendation', true);
                  
//         //           frm.toggle_display('section_break_e4pfo', true);
//         //         frm.toggle_display('documents', true);
//         //          frm.toggle_display('section_break_3xyof', true);
//         //           frm.toggle_display('upload_document', true);
                  
//         //           frm.toggle_display('column_break_nu1ys', true);
//         //         frm.toggle_display('view_document', true);
//         //          frm.toggle_display('section_break_eroii', true);
//         //           frm.toggle_display('new_terms_accepted_by_client_details', true);
                  
//         //           frm.toggle_display('accepted_by', true);
//         //         frm.toggle_display('accepted_on', true);
               
//         //     } else {
//         //         // Hide the fields
//         //         frm.toggle_display('gmapprover_remarks', false);
//         //         frm.toggle_display('gm_remarks', false);
//         //          frm.toggle_display('column_break_lw6xr', false);
//         //           frm.toggle_display('section_break_jcnbq', false);
                  
//         //         frm.toggle_display('send_to_recomendation', false);
//         //         frm.toggle_display('section_break_0iqvw', false);
//         //          frm.toggle_display('send', false);
//         //           frm.toggle_display('send_to_recommendation', false);
                  
//         //           frm.toggle_display('section_break_e4pfo', false);
//         //         frm.toggle_display('documents', false);
//         //          frm.toggle_display('section_break_3xyof', false);
//         //           frm.toggle_display('upload_document', false);
                  
//         //           frm.toggle_display('column_break_nu1ys', false);
//         //         frm.toggle_display('view_document', false);
//         //          frm.toggle_display('section_break_eroii', false);
//         //           frm.toggle_display('new_terms_accepted_by_client_details', false);
                
                
                
                
                
//         //         frm.toggle_display('accepted_by', false);
//         //         frm.toggle_display('accepted_on', false);
//         //     } 
            
            
//         // },
        
        
        
//         onload: function (frm) {
//              if (!frm.doc.review_number) {
//                 generateNumber(frm);
//             }
            
//       frappe.call({
//                 method: 'frappe.client.get_list',
//                 args: {
//                     doctype: 'Company-Details',
//                     filters: {
//                         status: "Active"
//                     },
//                     fields: ['name1'],
//                     limit_page_length: 100
//                 },
//                 callback: function(response) {
//                     console.log("client_name received:", response);
//                     let DataArray = []
//                     DataArray = response.message;
//                     let FinalArray = [];
    
//                     for (let x of DataArray) {
//                         console.log(x.name1)
//                         FinalArray.push(x.name1)
    
//                     }
//                     frm.set_df_property('name1', 'options', FinalArray);
//                     console.log("final", FinalArray)
    
//                 },
//                 error: function(xhr, textStatus, errorThrown) {
//                     console.error("Error fetching approved bonds:", textStatus, errorThrown);
//                 }
//             });
            
     
//         },
        
        
//     name1: function(frm) {
//         frappe.call({
//             method: "frappe.client.get_list",
//             args: {
//                 doctype: "Bond Facility Quotation Acceptance",
//                 filters: {
//                     name1: frm.doc.name1
//                 },
//                 fields:  ["faciity_no","net_facility_amount","security_percentage_for_limit5"],
//             },
//             callback: function(r) {
//                 console.log(r, "client short name");
    
//                 if (!r.exc) {
//                     if (r.message && r.message.length > 0) {
//                         var firstRecord = r.message[0]; // Assuming you only want to consider the first record
//                         frm.set_value('facility_no', firstRecord.faciity_no);
//                         frm.set_value('net_facility_amount', firstRecord.net_facility_amount);
//                          frm.set_value('security_per_limit5', firstRecord.security_percentage_for_limit5);
                      
//                     } else {
//                         // Handle the case when no records are found
//                         console.log("No records found for the given filters.");
//                     }
//                 } else {
//                     console.error("Error occurred:", r.exc);
//                 }
//             }
//         });
        
        
//     }
        
//     });
    
    
//     function generateNumber(frm) {
//         let currentYear = new Date().getFullYear();
//         let prefix = `BFR/${currentYear}/`;
    
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Facility Review',
//                 fields: ['review_number', 'creation'],
//                 order_by: 'creation desc',
//                 limit: 1
//             },
//             callback: function (r) {
//                 if (r.message && r.message.length > 0) {
//                     let lastReviewNo = r.message[0].review_number;
//                     let lastNumber = parseInt(lastReviewNo.split("/").pop()) || 0;
//                     let newNumber = (lastNumber + 1).toString().padStart(4, '0');
//                     frm.set_value('review_number', prefix + newNumber);
//                 } else {
//                     frm.set_value('review_number', prefix + '0001');
//                 }
//             }
//         });
//     }
    
    
    
    
    
    
    
    
    