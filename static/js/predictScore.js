d3.select("#predict_but").on("click", function(year) {
            
    // Get value from input and save VARIABLE VALUES via d3 

    year = d3.select("#year").property("value")
    // year =2020 // TEST
    console.log(year)

    // gdp = 50000 // TEST
    gdp = d3.select("#gdp").property("value")
    console.log(gdp)

    life_exp = d3.select("#life_exp").property("value")
    console.log(life_exp)
    // life_exp=70

    support = d3.select("#support").property("value")
    // console.log(support)

    freedom = d3.select("#freedom").property("value")
    // freedom=0.44

    generosity = d3.select("#generosity").property("value")
    // generosity = 0.2

    corruption = d3.select("#corruption").property("value")
    // corruption =0.4

    // Read in flask end point
    d3.json(`/predict/${year}/${gdp}/${life_exp}/${support}/${freedom}/${generosity}/${corruption}`).then((data) => {

    console.log(data);

    // Use to enter year:
    // d3.select(".predict_class")
    // .append("p")
    // .attr("class", "searchPredict")
    // .text("Enter values for year:")
    // .append("br");

    // Append year box:
    d3.select(".SearchPredict")
    .append("input")
    .attr("class","searchPredict")
    .attr("type","number")
    .attr("placeholder","2021")
    .enter();

    // Use to enter GDP/capita value:
    d3.select(".predict_class")
    .append("p")
    .attr("class", "searchPredict")
    .text("Enter values for gdp/capita:")
    .append("br");

    // Append GDP/capita box:
    d3.select(".SearchPredict")
    .append("input")
    .attr("class","searchPredict")
    .attr("type","number")
    .attr("placeholder","GDP/capita (USD)")
    .enter();


    });

    
});













