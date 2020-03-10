// from data.js
const tableData = data;

// select tbody 
tbody = d3.select("tbody")
tableData.forEach(function(entry) {
    const row = tbody.append("tr")
     Object.entries(entry).forEach(function([key,value]) {
     row.append("td").text(value)
     });
});

//--1--collect the value from the input field

const input = d3.select("input")
const button = d3.select("#filter-btn");

const handler = function(){
// // Prevent the page from refreshing
    d3.event.preventDefault();
//--2--filter the data for the data inputed
    const query = d3.select("#datetime").property("value");
    console.log(query);
    const filtered_results = tableData.filter(d => d.datetime === query)
    console.log(filtered_results);

    const tbody = d3.select("tbody");
    tbody.html("");
//--3--use the foreach to append the data of each cell
//--4--// loop through table using pbject entries
    filtered_results.forEach(function(entry) {
    const row = tbody.append("tr")
    Object.entries(entry).forEach(function([key,value]) {
    row.append("td").text(value);
    })
})
}


input.on("change", handler)
button.on("click", handler)