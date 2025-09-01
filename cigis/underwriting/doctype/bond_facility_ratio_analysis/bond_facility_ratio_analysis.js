// Copyright (c) 2024, SAiS and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Bond Facility Ratio Analysis', {
//     refresh: function(frm) {
//         frm.fields_dict.calculate.$input.addClass('btn-primary');

//         frm.fields_dict['calculate'].$input.on('click', function() {
//             console.log("Calculation started...");
//             // Call a function to perform calculations
//             calculateFields(frm);
         
//         });
        
        
//        //colour application based on value 
       
//         var fields = [
//             { field: 'net_profit_before3', criteria: { operator: '>', value: 0.06 } },
//             { field: 'net_profit_before2', criteria: { operator: '>', value: 0.06 } },
//             { field: 'net_profit_before1', criteria: { operator: '>', value: 0.06 } },
//             { field: 'beaverratio3', criteria: { operator: '>', value: 0.18 } },
//             { field: 'beaverratio2', criteria: { operator: '>', value: 0.18 } },
//             { field: 'beaverratio1', criteria: { operator: '>', value: 0.18 } },
//             { field: 'liquidity_ratio3', criteria: { operator: '>', value: 0.10 } },
//             { field: 'liquidity_ratio2', criteria: { operator: '>', value: 0.10 } },
//             { field: 'liquidity_ratio1', criteria: { operator: '>', value: 0.10 } },
//             { field: 'working_capital3', criteria: { operator: '>', value: 0.08 } },
//             { field: 'working_capital2', criteria: { operator: '>', value: 0.08 } },
//             { field: 'working_capital1', criteria: { operator: '>', value: 0.08 } },
//             { field: 'retained_currency3', criteria: { operator: '>', value: 0.03 } },
//             { field: 'retained_currency2', criteria: { operator: '>', value: 0.03 } },
//             { field: 'retained_currency1', criteria: { operator: '>', value: 0.03 } },
//             { field: 'depriciation_mevement3', criteria: { operator: '>', value: 0.25 } },
//             { field: 'depriciation_mevement2', criteria: { operator: '>', value: 0.25 } },
//             { field: 'depriciation_mevement1', criteria: { operator: '>', value: 0.25 } },
//             { field: 'wip_turnover3', criteria: { operator: '<', value: 0.08 } },
//             { field: 'wip_turnover2', criteria: { operator: '<', value: 0.08 } },
//             { field: 'wip_turnover1', criteria: { operator: '<', value: 0.08 } },
//             { field: 'debtors_turnover3', criteria: { operator: '<', value: 0.25 } },
//             { field: 'debtors_turnover2', criteria: { operator: '<', value: 0.25 } },
//             { field: 'debtors_turnover1', criteria: { operator: '<', value: 0.25 } },
//             { field: 'overheads_turnover3', criteria: { operator: '<', value: 0.10 } },
//             { field: 'overheads_turnover2', criteria: { operator: '<', value: 0.10 } },
//             { field: 'overheads_turnover1', criteria: { operator: '<', value: 0.10 } }
//         ];

//         // Iterate through each field and apply styles based on criteria
//         fields.forEach(function(item) {
//             var field = item.field;
//             var criteria = item.criteria;
//             var value = frm.doc[field];
//             var operator = criteria.operator;
//             var criteriaValue = criteria.value;

//             if (operator === '>') {
//                 if (value < criteriaValue) {
//                     frm.fields_dict[field].$input.css({
//                         'background-color': 'red',
//                         'color': 'white'
//                     });
//                 } else {
//                     frm.fields_dict[field].$input.css({
//                         'background-color': '',
//                         'color': ''
//                     });
//                 }
//             } else if (operator === '<') {
//                 if (value > criteriaValue) {
//                     frm.fields_dict[field].$input.css({
//                         'background-color': 'red',
//                         'color': 'white'
//                     });
//                 } else {
//                     frm.fields_dict[field].$input.css({
//                         'background-color': '',
//                         'color': ''
//                     });
//                 }
//             }
//         });
        
//     },
    
//     onload: function(frm){
// frm.fields_dict.currentassetscurrentyear.$input.css("text-align", "right");

// frm.fields_dict.currentassetspreviousyear2.$input.css("text-align", "right");

// frm.fields_dict.currentassetspreviousyear1.$input.css("text-align", "right");




// frm.fields_dict.current_assests.$input.css("text-align", "right");

// frm.fields_dict.current_assests1.$input.css("text-align", "right");

// frm.fields_dict.current_assests2.$input.css("text-align", "right");


// frm.fields_dict.debtors1.$input.css("text-align", "right");

// frm.fields_dict.debtors2.$input.css("text-align", "right");

// frm.fields_dict.debtors3.$input.css("text-align", "right");


// frm.fields_dict.cruuent_liabilities1.$input.css("text-align", "right");

// frm.fields_dict.cruuent_liabilities2.$input.css("text-align", "right");

// frm.fields_dict.cruuent_liabilities3.$input.css("text-align", "right");


// frm.fields_dict.bank_overdraft1.$input.css("text-align", "right");

// frm.fields_dict.bank_overdraft2.$input.css("text-align", "right");

// frm.fields_dict.bank_overdraft3.$input.css("text-align", "right");


// frm.fields_dict.creditors1.$input.css("text-align", "right");

// frm.fields_dict.creditors2.$input.css("text-align", "right");

// frm.fields_dict.creditors3.$input.css("text-align", "right");


// frm.fields_dict.net_current_assests1.$input.css("text-align", "right");

// frm.fields_dict.net_current_assests2.$input.css("text-align", "right");

// frm.fields_dict.net_current_assests3.$input.css("text-align", "right");



// frm.fields_dict.share_capital1.$input.css("text-align", "right");

// frm.fields_dict.share_capital2.$input.css("text-align", "right");

// frm.fields_dict.share_capital3.$input.css("text-align", "right");


// frm.fields_dict.retained_income1.$input.css("text-align", "right");

// frm.fields_dict.retained_income2.$input.css("text-align", "right");

// frm.fields_dict.retained_income3.$input.css("text-align", "right");


// frm.fields_dict.reatined_income4.$input.css("text-align", "right");

// frm.fields_dict.reatined_income5.$input.css("text-align", "right");

// frm.fields_dict.reatined_income6.$input.css("text-align", "right");


// frm.fields_dict.net_profit1.$input.css("text-align", "right");

// frm.fields_dict.net_profit2.$input.css("text-align", "right");

// frm.fields_dict.net_profit3.$input.css("text-align", "right");


// frm.fields_dict.fixed_assets1.$input.css("text-align", "right");

// frm.fields_dict.fixed_assets2.$input.css("text-align", "right");

// frm.fields_dict.fixed_assets3.$input.css("text-align", "right");


// frm.fields_dict.fixed_assets4.$input.css("text-align", "right");

// frm.fields_dict.fixed_assets5.$input.css("text-align", "right");

// frm.fields_dict.fixed_assets6.$input.css("text-align", "right");


// frm.fields_dict.overheads1.$input.css("text-align", "right");

// frm.fields_dict.overheads2.$input.css("text-align", "right");

// frm.fields_dict.overheads3.$input.css("text-align", "right");


// frm.fields_dict.work_in_progress1.$input.css("text-align", "right");

// frm.fields_dict.work_in_progress2.$input.css("text-align", "right");

// frm.fields_dict.work_in_progress3.$input.css("text-align", "right");


// frm.fields_dict.total_liabilities1.$input.css("text-align", "right");

// frm.fields_dict.total_liabilities2.$input.css("text-align", "right");

// frm.fields_dict.total_liabilities3.$input.css("text-align", "right");

// //------------------

// frm.fields_dict.net_profit_before1.$input.css("text-align", "right");

// frm.fields_dict.net_profit_before2.$input.css("text-align", "right");

// frm.fields_dict.net_profit_before3.$input.css("text-align", "right");


// frm.fields_dict.turnover1.$input.css("text-align", "right");

// frm.fields_dict.turnover2.$input.css("text-align", "right");

// frm.fields_dict.turnover3.$input.css("text-align", "right");


// frm.fields_dict.retained_earnings1.$input.css("text-align", "right");

// frm.fields_dict.retained_earnings2.$input.css("text-align", "right");

// frm.fields_dict.retained_earnings3.$input.css("text-align", "right");


// frm.fields_dict.beaverratio1.$input.css("text-align", "right");

// frm.fields_dict.beaverratio2.$input.css("text-align", "right");

// frm.fields_dict.beaverratio3.$input.css("text-align", "right");


// frm.fields_dict.liquidity_ratio1.$input.css("text-align", "right");

// frm.fields_dict.liquidity_ratio2.$input.css("text-align", "right");

// frm.fields_dict.liquidity_ratio3.$input.css("text-align", "right");


// frm.fields_dict.working_capital1.$input.css("text-align", "right");

// frm.fields_dict.working_capital2.$input.css("text-align", "right");

// frm.fields_dict.working_capital3.$input.css("text-align", "right");


// frm.fields_dict.retained_currency1.$input.css("text-align", "right");

// frm.fields_dict.retained_currency2.$input.css("text-align", "right");

// frm.fields_dict.retained_currency3.$input.css("text-align", "right");


// frm.fields_dict.depriciation_mevement1.$input.css("text-align", "right");

// frm.fields_dict.depriciation_mevement2.$input.css("text-align", "right");

// frm.fields_dict.depriciation_mevement3.$input.css("text-align", "right");


// frm.fields_dict.wip_turnover1.$input.css("text-align", "right");

// frm.fields_dict.wip_turnover2.$input.css("text-align", "right");

// frm.fields_dict.wip_turnover3.$input.css("text-align", "right");


// frm.fields_dict.debtors_turnover1.$input.css("text-align", "right");

// frm.fields_dict.debtors_turnover2.$input.css("text-align", "right");

// frm.fields_dict.debtors_turnover3.$input.css("text-align", "right");


// frm.fields_dict.overheads_turnover1.$input.css("text-align", "right");

// frm.fields_dict.overheads_turnover2.$input.css("text-align", "right");

// frm.fields_dict.overheads_turnover3.$input.css("text-align", "right");



// frm.fields_dict.currentratio_working1.$input.css("text-align", "right");

// frm.fields_dict.currentratio_working2.$input.css("text-align", "right");

// frm.fields_dict.currentratio_working3.$input.css("text-align", "right");



// frm.fields_dict.turnover_growth1.$input.css("text-align", "right");

// frm.fields_dict.turnover_growth2.$input.css("text-align", "right");

// frm.fields_dict.turnover_growth3.$input.css("text-align", "right");



// frm.fields_dict.calculated_facility1.$input.css("text-align", "right");

// frm.fields_dict.calculated_facility2.$input.css("text-align", "right");

// frm.fields_dict.calculated_facility3.$input.css("text-align", "right");


// }


// });


// function calculateFields(frm) {
//     // Current Year
//     // Net Current Assets
//     frm.set_value('net_current_assests1', frm.doc.current_assests - frm.doc.cruuent_liabilities1);
//     // Net Profit Before
//     frm.set_value('net_profit_before1', (frm.doc.net_profit1 / frm.doc.currentassetscurrentyear) * 100);
//     // Turnover
//     frm.set_value('turnover1', frm.doc.currentassetscurrentyear * 0.2);
//     // Retained Earnings
//     frm.set_value('retained_earnings1', frm.doc.reatined_income4 * 3);
//     // Beaver Ratio
//     frm.set_value('beaverratio1', (frm.doc.net_profit1 / frm.doc.total_liabilities1) * 100);
//     // Liquidity Ratio
//     frm.set_value('liquidity_ratio1', ((frm.doc.current_assests - frm.doc.cruuent_liabilities1) / frm.doc.cruuent_liabilities1) * 100);
//     // Working Capital
//     frm.set_value('working_capital1', ((frm.doc.current_assests - frm.doc.cruuent_liabilities1) / frm.doc.currentassetscurrentyear) * 100);
//     // Retained Currency
//     var LY = Math.abs(frm.doc.retained_income1);
//     if (LY > 0) {
//         frm.set_value('retained_currency1', (frm.doc.reatined_income4 - frm.doc.retained_income1) / LY * 100);
//     } else {
//         frm.set_value('retained_currency1', 100);
//     }
//     // Depreciation Movement
//     frm.set_value('depriciation_mevement1', (frm.doc.fixed_assets4 - frm.doc.fixed_assets1) / frm.doc.fixed_assets1 * 100);
//     // WIP Turnover
//     frm.set_value('wip_turnover1', frm.doc.work_in_progress1 / frm.doc.currentassetscurrentyear * 100);
//     // Debtors Turnover
//     frm.set_value('debtors_turnover1', frm.doc.debtors1 / frm.doc.currentassetscurrentyear * 100);
//     // Overheads Turnover
//     frm.set_value('overheads_turnover1', frm.doc.overheads1 / frm.doc.currentassetscurrentyear * 100);
//     // Current Ratio Working
//     frm.set_value('currentratio_working1', frm.doc.net_current_assests1 / frm.doc.total_liabilities1);
//     // Turnover Growth
//      frm.set_value('turnover_growth1', 
// 	(frm.doc.currentassetscurrentyear - frm.doc.currentassetspreviousyear2) / frm.doc.currentassetspreviousyear2 * 100);

//     // Calculated Facility
//     if (frm.doc.turnover1 >= frm.doc.retained_earnings1) {
//         frm.set_value('calculated_facility1', frm.doc.retained_earnings1);
//     } else if (frm.doc.retained_earnings1 > frm.doc.turnover1) {
//         frm.set_value('calculated_facility1', (frm.doc.turnover1 + frm.doc.retained_earnings1) / 2);
//     }

//     // Year 1
//     // Net Current Assets
//     frm.set_value('net_current_assests2', frm.doc.current_assests1 - frm.doc.cruuent_liabilities2);
//     // Net Profit Before
//     frm.set_value('net_profit_before2', (frm.doc.net_profit2 / frm.doc.currentassetspreviousyear2) * 100);
//     // Turnover
//     frm.set_value('turnover2', frm.doc.currentassetspreviousyear2 * 0.2);
//     // Retained Earnings
//     frm.set_value('retained_earnings2', frm.doc.reatined_income5 * 3);
//     // Beaver Ratio
//     frm.set_value('beaverratio2', (frm.doc.net_profit2 / frm.doc.total_liabilities1) * 100);
//     // Liquidity Ratio
//     frm.set_value('liquidity_ratio2', ((frm.doc.current_assests1 - frm.doc.cruuent_liabilities2) / frm.doc.cruuent_liabilities2) * 100);
//     // Working Capital
//     frm.set_value('working_capital2', ((frm.doc.current_assests1 - frm.doc.cruuent_liabilities2) / frm.doc.currentassetspreviousyear2) * 100);
//     // Retained Currency
//     if (frm.doc.retained_income2 === 0) {
//         frm.set_value('retained_currency2', 100);
//     } else {
//         frm.set_value('retained_currency2', (frm.doc.reatined_income5 - frm.doc.retained_income2) / frm.doc.retained_income2 * 100);
//     }
//     // Depreciation Movement
//     frm.set_value('depriciation_mevement2', (frm.doc.fixed_assets5 - frm.doc.fixed_assets2) / frm.doc.fixed_assets2 * 100);
//     // WIP Turnover
//     frm.set_value('wip_turnover2', frm.doc.work_in_progress2 / frm.doc.currentassetspreviousyear2 * 100);
//     // Debtors Turnover
//     frm.set_value('debtors_turnover2', frm.doc.debtors2 / frm.doc.currentassetspreviousyear2 * 100);
//     // Overheads Turnover
//     frm.set_value('overheads_turnover2', frm.doc.overheads2 / frm.doc.currentassetspreviousyear2 * 100);
//     // Current Ratio Working
//     frm.set_value('currentratio_working2', frm.doc.net_current_assests2 / frm.doc.total_liabilities1);
//     // Turnover Growth
   
    
//     // Calculated Facility
//     if (frm.doc.turnover2 >= frm.doc.retained_earnings2) {
//         frm.set_value('calculated_facility2', frm.doc.retained_earnings2);
//     } else if (frm.doc.retained_earnings1 > frm.doc.turnover1) {
//         frm.set_value('calculated_facility2', (frm.doc.turnover2 + frm.doc.retained_earnings2) / 2);
//     }

//     // Year 2
//     // Net Current Assets
//     frm.set_value('net_current_assests3', frm.doc.current_assests2 - frm.doc.cruuent_liabilities3);
//     // Net Profit Before
//     frm.set_value('net_profit_before3', (frm.doc.net_profit3 / frm.doc.currentassetspreviousyear1) * 200);
//     // Turnover
//     frm.set_value('turnover3', frm.doc.currentassetspreviousyear1 * 0.2);
//     // Retained Earnings
//     frm.set_value('retained_earnings3', frm.doc.reatined_income6 * 3);
//     // Beaver Ratio
//     frm.set_value('beaverratio3', (frm.doc.net_profit3 / frm.doc.total_liabilities3) * 200);
//     // Liquidity Ratio
//     frm.set_value('liquidity_ratio3', ((frm.doc.current_assests2 - frm.doc.cruuent_liabilities3) / frm.doc.cruuent_liabilities3) * 200);
//     // Working Capital
//     frm.set_value('working_capital3', ((frm.doc.current_assests2 - frm.doc.cruuent_liabilities3) / frm.doc.currentassetspreviousyear1) * 200);
//     // Retained Currency
//     if (frm.doc.retained_income3 === 0) {
//         frm.set_value('retained_currency3', 100);
//     } else {
//         frm.set_value('retained_currency3', (frm.doc.reatined_income6 - frm.doc.retained_income3) / frm.doc.retained_income3 * 200);
//     }
//     // Depreciation Movement
//     frm.set_value('depriciation_mevement3', (frm.doc.fixed_assets6 - frm.doc.fixed_assets3) / frm.doc.fixed_assets3 * 200);
//     // WIP Turnover
//     frm.set_value('wip_turnover3', frm.doc.work_in_progress3 / frm.doc.currentassetspreviousyear1 * 100);
//     // Debtors Turnover
//     frm.set_value('debtors_turnover3', frm.doc.debtors3 / frm.doc.currentassetspreviousyear1 * 200);
//     // Overheads Turnover
//     frm.set_value('overheads_turnover3', frm.doc.overheads3 / frm.doc.currentassetspreviousyear1 * 200);
//     // Current Ratio Working
//     frm.set_value('currentratio_working3', frm.doc.net_current_assests3 / frm.doc.total_liabilities3);
//     // Turnover Growth
    
    
//     // Calculated Facility
//     if (frm.doc.turnover3 > frm.doc.retained_earnings3) {
//         frm.set_value('calculated_facility3', (frm.doc.turnover3 + frm.doc.turnover3) / 2);
//     } else if (frm.doc.retained_earnings3 > frm.doc.turnover3) {
//         frm.set_value('calculated_facility3', frm.doc.retained_earnings3);
//     }
// }

