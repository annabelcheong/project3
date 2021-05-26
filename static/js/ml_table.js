// insert into <div id='ml_table'> TABLE GOES HERE </div>

// Use API endpoint: ml_json (See file app.py)
// d3.json('/ml_json').then((data) => {
//     // console.log(data);
// });

// Append search bar and placeholder in the search
d3.select("#ml_table")
    .attr("class", "SearchBar")
    .append("p")
    .attr("class", "SearchBar")
    .text("Search By Country");

d3.select(".SearchBar")
    .append("input")
    .attr("class", "SearchBar")
    .attr("id", "search")
    .attr("type", "text")
    .attr("placeholder", "Spain")
    .enter()
    .append("br");

    // d3.select(".SearchBar")
    // .append("br")
    // .append("hr");



 
// Append table heading
var column_names = ["Year","Country","Actual Happiness Score","Predicted Happiness Score"];

var table = d3.select("#ml_table").append("table").attr("class", "table-bordered");
table.append("thead").append("tr"); 

var headers = table.select("tr").selectAll("th")
    .data(column_names)
    .enter()
    .append("th")
    .text((d) => d); //in entries in column_names array

var rows, row_entries, row_entries_no_anchor, row_entries_with_anchor;


d3.json("/ml_json").then((data) => { // loading data from server
  
    yr = data.map(elem =>elem.year);
    console.log(yr);

    country = data.map(elem => elem.country);
    y_actual = data.map(elem => elem.y_actual);
    y_predicted = data.map(elem => elem.y_predicted);

    // draw table body with rows
    for (var i = 0; i < 70; i++) {
        trow = table.append("tr")
        trow.append("td").text(yr[i])
        trow.append("td").text(country[i])
        trow.append("td").text(y_actual[i])
        trow.append("td").text(y_predicted[i])
        // .text(country[i])
    };


    // trow = tbody.append("tr");
    // trow.append("td").text(data.year[i]);
        // .text(data.year);

//   // data bind
//   rows = table.select("tbody").selectAll("tr")
//     .data(data, function(data){ return data.year; });
  
//   // enter the rows
//   rows.enter()
//     .append("tr")
  
//   // enter td's in each row
//   row_entries = rows.selectAll("td")
//       .data(function(data) { 
//         var arr = [];
//         for (var k in data {
//           if (data.hasOwnProperty(k)) {
// 		    arr.push(data[k]);
//           }
//         }
//         return [arr[0],arr[1],arr[2],arr[3]];
//       })
//     .enter()
//       .append("td") 

//       console.log(data);

});
