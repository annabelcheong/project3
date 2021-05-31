// insert into <div id='ml_table'> TABLE GOES HERE </div>

/////////////////////////////////
////// TEST //////
/////////////////////////////////
// Use API endpoint: ml_json (See file app.py)
// d3.json('/ml_json').then((data) => {
//     console.log(data); // TEST TO ENSURE DATA ENDPOINT (FROM APP.PY FLASK IS WORKING)
// });  

/////////////////////////////////
////// SEARCH INPUT BY COUNTRY //////
/////////////////////////////////
// Append in text 'Search by country' into <div class="searching"> in page3.html
d3.select(".searching")
    .attr("class", "SearchBar")
    .append("p")
    .attr("class", "SearchBar")
    .text("Search By Country");

// Append in input box to allow user to type in a country, with placeholder = "Spain"
d3.select(".SearchBar")
    .append("input")
    .attr("class", "SearchBar")
    .attr("id", "search")
    .attr("type", "text")
    .attr("placeholder", "Spain")
    .enter();

    d3.select(".SearchBar")
    .append("br")
    .append("hr");

/////////////////////////////////
// TABLE
/////////////////////////////////

//Append table data entries
var rows, row_entries, row_entries_no_anchor, row_entries_with_anchor;

d3.json("/ml_json").then((data) => { // loading data from server
  
    // Clear out content in table previously
    const tbody = d3.select("tbody");

    // Year 
    yr = data.map(elem =>elem.year);
    console.log(yr);
    console.log(typeof(yr));
    // Country
    country = data.map(elem => elem.country);
    console.log(typeof(country));
    // y_actual (Happiness Score)
    y_actual = data.map(elem => elem.y_actual);
    console.log(typeof(y_actual));
    // y_predicted (Happiness Score)
    y_predicted = data.map(elem => elem.y_predicted);

    // Draw table body with rows
    for (var i = 0; i < 70; i++) {
        trow = tbody.append("tr")
        trow.append("td").text(yr[i])
        trow.append("td").text(country[i])
        trow.append("td").text(y_actual[i])
        trow.append("td").text(y_predicted[i])
    };

    //////////////////////////////////////////
    // EVENT LISTENER WHEN USER TYPES KEY //
    //////////////////////////////////////////

    d3.select("#search").on("keyup", function() { // filter according to key pressed 
        var searched_data = data,
        text = this.value.trim();
        tbody.html("");
      
        searched_data.map((r) => {
                // console.log(searched_data); // TEST

                var regex = new RegExp("^" + text + ".*", "i");
                    
                if (regex.test(r.country)) { // if there are any results matching user input 
                    // console.log(r.year);    // TEST
                    // console.log(r.country); // TEST
                    // console.log("y_actual: " + r.y_actual); // TEST
                    // console.log("y_predicted: " + r.y_predicted);   // TEST
                    // console.log("------------------------");
            
                    trow = tbody.append("tr");
                    trow.append("td").text(r.year);
                    trow.append("td").text(r.country);
                    trow.append("td").text(r.y_actual);
                    trow.append("td").text(r.y_predicted);

                };

            });

    });

});