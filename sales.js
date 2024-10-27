"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// ---------------------calculate totals by quarter ---------------------
// Define constant ,, where the total of each region quarter (1-4) gonna go, put the regions arrays into an array so it's easier to call them
const quarterTotals = [0, 0, 0, 0];
const regions = [region1, region2, region3, region4, region5]; 

// use a for loop to add each score for each region quarter to total and display it
// outer loop to go through regions array 
for (let region of regions) { 
    // inner loop starts with the first element (0) and then uses .length to get the array length so you don't loop past the amount of elements.
    for (let i = 0; i < region.length; i++) {
        // grabs and adds each region quarter amount to sum up the total to the array index 
        quarterTotals[i] += region[i];
    }
}

// ---------------------Display the total for each quarter ---------------------
// document write and use a for loop
document.write("<h2>Sales by Quarter</h2>");
// loop through quarterTotals array and display each element
for (let i = 0; i < quarterTotals.length; i++) {
    // display totals by quarter 
    document.write(`Q${i + 1}: $${quarterTotals[i]}<br>`);
}

// ---------------------calculate totals by region------------------------------
// define constant and use a for loop 
const regionTotals = [0, 0, 0, 0, 0];

// Loop through each element in the regions array, use to go through each index or element in the array checks whether regionIndex is less than the length of the regions array
for (let regionIndex = 0; regionIndex < regions.length; regionIndex++) {
    // placeholder to keep track of the total sales for the current region; each time it loops the variable resets to 0.
    let regionTotal = 0; 

    // inner loop, loops through each sale in the current region using the index from the outer loop 
    for (let i = 0; i < regions[regionIndex].length; i++) {
        // The regionIndex tells us where to store the total. For example, if regionIndex is 0 (the first region), it will save the total in the first spot of regionTotals.
        regionTotal += regions[regionIndex][i]; 
    }
    // After summing all sales in the current region, store the total in the correct index
    // Assign the total to the corresponding index
    regionTotals[regionIndex] = regionTotal; 
}

// Display totals by region 
document.write("<h2>Sales by Region</h2>");

for (let i = 0; i < regionTotals.length; i++) {
    document.write(`Region ${i + 1}: $${regionTotals[i]}<br>`); // Use regionTotals[i] to display the total
}

// ---------------------calculate total sales ---------------------
// use a for loop to add all the quarter totals together.
let totalSales = 0;

// Loops through each sale in the current region
for (let i = 0; i < quarterTotals.length; i++) {
    totalSales += quarterTotals[i];
}

// display total sales, use document write to display on html page 
document.write("<h2>Total Sales</h2>"); 
document.write(`$${totalSales}`);
