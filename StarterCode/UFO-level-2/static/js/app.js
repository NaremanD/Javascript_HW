// from data.js
const tableData = data;

// select tbody 
tbody = d3.select("tbody");
tbody.html("");
tableData.forEach(function(entry) {
    const row = tbody.append("tr")
     Object.entries(entry).forEach(function([key,value]) {
     row.append("td").text(value)
     });
});

//--1--collect the value from the input field

const input = d3.select("input")
const button = d3.select(".filters")
inputValues = {};
const handler = function(){
// // Prevent the page from refreshing
    d3.event.preventDefault();
//--2--filter the data for the data inputed
    
    const query = d3.select(this).select("input");
    const queryvalue = query.property("value");
    const queryid = query.attr("id");
    //console.log(query);
    inputValues[queryid] = queryvalue;
    console.log(inputValues);
    createnewtable();
    }

    function createnewtable() {
    let NewData = tableData    
    Object.entries(inputValues).forEach(function([key,value]){
        NewData = NewData.filter(d => d[key] === value);
        console.log(NewData);
    });

    const tbody = d3.select("tbody");
    tbody.html("");
//--3--use the foreach to append the data of each cell
//--4--// loop through table using pbject entries
    NewData.forEach(function(entry) {
    const row = tbody.append("tr")
    Object.entries(entry).forEach(function([key,value]) {
    row.append("td").text(value);
    });
})
}

button.on("click", handler)