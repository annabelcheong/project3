// insert into <div id='ml_table'> TABLE GOES HERE </div>

// Use API endpoint: ml_json (See file app.py)
d3.json('/ml_json').then((data) => {
    console.log(data);
});

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
    .attr("placeholder", "Spain");

// Append table heading
var column_names = ["year","country","y_actual","y_predicted"];
// CREATE TABLE happy_table_m2 (
//     id INT PRIMARY KEY,  
//     year INT NOT NULL,
//     country VARCHAR NOT NULL,
//     logged_gdp_per_capita DEC NOT NULL,
//     support DEC NOT NULL,
//     life_exp DEC NOT NULL,
//     freedom DEC NOT NULL,
//     generosity DEC NOT NULL,
//     corruption DEC NOT NULL,
//     y_actual DEC NOT NULL,
//     y_predicted DEC NOT NULL
//   );
var table = d3.select("#ml_table").append("table");
table.append("thead").append("tr"); 

var headers = table.select("tr").selectAll("th")
    .data(column_names)
    .enter()
    .append("th")
    .text(function(d) { return d; });