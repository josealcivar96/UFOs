//import data frfom data.js
const tableData = data;

//reference HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clearing out existing data
    tbody.html("");

    //Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");
        //loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });

};

function handleClick() {
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check if date was entered and filter data using that date
    if (date) {
        //apply filter to table data to only keep rows 
        //where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data
    //@NOTE: if no date was entered, filteredData will be original tableData
    buildTable(filteredData);
};

//'listen' to button click
d3.selectAll("#filter-btn").on("click", handleClick);

//build default table
buildTable(tableData);

