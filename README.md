# Activity5Chapt3

In this exercise, you’ll start with five arrays that represent sales regions, and each array contains four values that represent the quarterly sales for the region. Then, you’ll summarize the data in the page, which should look like this:


1. Download the zip file on canvas. It will contain an html file already liked to a css file and js file that are also provided. Make sure to save them all in the same folder.
2. In the HTML file, note the link element that refers to the CSS file, and the script element refers to the JavaScript file.
3. In the JavaScript file, note that five arrays are declared with four values in each. Each of these arrays represents one sales region, and each of the values in an array represents one sales quarter. For instance, the sales for the third quarter in region 3 were 2710.
4. Write the code for summing the quarterly sales for each the five regions and displaying them on the page with the document.write() method. To do that, use an <h2> tag for each header and a <br> tag for a line break at the end of each line of sales data.
5. Write the code for getting and displaying the regional sales data.
6. Write the code for getting and displaying the total sales data.
7. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your application. Make sure you test it before submitting the link.
You will only need to edit the js file.



  
Use these comment lines in your code to define each of the processes ( I added extra for each comment after the comment. You can remove this part when writing your js. I am giving you the first line of code for each section to help you get started.

// calculate totals by quarter, Define constant and use a for loop const quarterTotals = [0, 0, 0, 0];
// display totals by quarter, document write and use a for loop document.write("<h2>Sales by Quarter</h2>");
// calculate totals by region, define constant and use a for loop const regionTotals = [0, 0, 0, 0, 0];
// display totals by quarter, document write and use a for loop with a document write in the loop.
document.write("<h2>Sales by Region</h2>");
// calculate total sales, use a for loop to add all the quarter totals together.
let totalSales = 0;
// display total sales, use document write to display on html page document.write("<h2>Total Sales</h2>"); document.write(`$${totalSales}`);
