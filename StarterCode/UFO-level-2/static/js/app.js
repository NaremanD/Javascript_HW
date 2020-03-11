
// const input = d3.select("input")
// const button = d3.select("button")

// Variable Declaration
let tbody = d3.select("tbody");
// From data.js
const tableData = data;

// Function Build Table
// Function Build Table
function buildTable(data){
  // Start By Clearing Existing Data
  tbody.html("");
  // Loop Through `data` 
  data.forEach(function(dataRow) {
      // Append Table Row `tr` to the Table Body `tbody`
      let row = tbody.append("tr")
      // `Object.values` & `forEach` to Iterate Through Values
      Object.entries(dataRow).forEach(function([key, value]){
          // Append a Cell to the Row for Each Value
          let cell = row.append("td");
          cell.text(value);
      });
  })
}
buildTable(tableData)

var button = d3.selectAll("#filter-btn");
// Event that Triggers a Function When the Button is Clicked
button.on('click', function () {
  // Prevents the Page from Refreshing
    d3.event.preventDefault();
  // Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");

      // Get the value property of the input element
      console.log(dateInput.property("value"));
      console.log(cityInput.property("value"));
      console.log(stateInput.property("value"));
      console.log(countryInput.property("value"));
      console.log(shapeInput.property("value"));

      //create a variable which filters the table if a user enters only some information in so that it will still work

    var filtered = tableData.filter(et_sighting =>{
      return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
                (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
                (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
                (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
                (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
    })
    //run the filtered entries through the displayData function to update the table
    buildTable(filtered);

   
    });
    var filterInputs = d3.selectAll('.form-control');

    // Clears input fields and input object
    function clearEntries() {
        filters = {};

        // Sets every input field to empty
        filterInputs._groups[0].forEach(entry => {
            if (entry.value != 0) {
                d3.select('#' + entry.id).node().value = "";
            }
        });
    };

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Keeps page from refreshing completely, only want the table to refresh
    d3.event.preventDefault();
    // Clears input fields
    clearEntries()
});