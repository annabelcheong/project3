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
    .enter();

    d3.select(".SearchBar")
    .append("br")
    .append("hr");

/////////////////////////////////
// TABLE
/////////////////////////////////

// Append table heading
var column_names = ["Year","Country","Actual Happiness Score","Predicted Happiness Score"];

var table = d3.select("#ml_table").append("table").attr("class", "table-bordered tab");
table.append("thead").append("tr"); 

var headers = table.select("tr").selectAll("th")
    .data(column_names)
    .enter()
    .append("th")
    .text((d) => d); //in entries in column_names array

/////////////////////////////////
//Append table data entries
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
    };

    //////////////////////////////////////////

    d3.select("#search")
    .on("keyup", function() { // filter according to key pressed 
      var searched_data = data,
          text = this.value.trim();
      
          var searchResults = searched_data.map(function(r) {
            var regex = new RegExp("^" + text + ".*", "i");
            if (regex.test(r.country)) { // if there are any results
              console.log(r.country);
              console.log(r.y_actual);
                // return regex.exec(r.country)[0]; // return them to searchResults
            } 
          })
          
        //   // filter blank entries from searchResults
        //   searchResults = searchResults.filter(function(r){ 
        //     return r != undefined;
        //   })
          
        //   // filter dataset with searchResults
        //   searched_data = searchResults.map(function(r) {
        //      return data.filter(function(p) {
        //       return p.country.indexOf(r) != -1;
        //     })
        //   })
  
        //   // flatten array 
        //   searched_data = [].concat.apply([], searched_data)
          
        //   // data bind with new data
        //   rows = table.select("tbody").selectAll("tr")
        //     .data(searched_data, function(d){ return d.country; })
          
        //   // enter the rows
        //   rows.enter()
        //    .append("tr");
           
        //   // enter td's in each row
        //   row_entries = rows.selectAll("td")
        //       .data(function(d) { 
        //         var arr = [];
        //         for (var k in d) {
        //           if (d.hasOwnProperty(k)) {
        //             arr.push(d[k]);
        //           }
        //         }
        //         return [arr[3],arr[1],arr[2],arr[0]];
        //       })
        //     .enter()
        //       .append("td") 
  
        //   // draw row entries with no anchor 
        //   row_entries_no_anchor = row_entries.filter(function(d) {
        //     return (/https?:\/\//.test(d) == false)
        //   })
        //   row_entries_no_anchor.text(function(d) { return d; })
  
        //   // draw row entries with anchor
        //   row_entries_with_anchor = row_entries.filter(function(d) {
        //     return (/https?:\/\//.test(d) == true)  
        //   })
        //   row_entries_with_anchor
        //     .append("a")
        //     .attr("href", function(d) { return d; })
        //     .attr("target", "_blank")
        //   .text(function(d) { return d; })
          
        //   // exit
        //   rows.exit().remove();
        // })









    // console.log(data);
        // var regex = new RegExp("^" + text + ".*", "i");
        // var searchResults = searched_data.map(elem => elem.country);

      
            

        // var regex = new RegExp("^" + text + ".*", "i");
        // if (regex.text(searchResults)) {
            // return regex.exec(elem.country[0])
            // console.log(elem.country[0])
        // }



    //   var searchResults = searched_data.map(function(r) {
        // var regex = new RegExp("^" + text + ".*", "i");
        // console.log(r);
        // if (regex.test(r.country)) { // if there are any results
        //   return regex.exec(r.country)[0]; // return them to searchResults
        // } 
      })

















});
