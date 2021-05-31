// EVENT LISTENER when user clicks on 'Predict Happiness Score'
d3.select("#predict_but").on("click", function(year) {
    
    // Clear previous user output happiness score 
    const final_output = d3.select("#final_score")
    final_output.html("");

    // Get value from input and save VARIABLE VALUES via d3 

    year = d3.select("#year").property("value")
    // year =2020 // TEST
    console.log(year) // TEST

    // gdp = 50000 // TEST
    gdp = d3.select("#gdp").property("value")
    // console.log(gdp) // TEST

    life_exp = d3.select("#life_exp").property("value")
    // console.log(life_exp) // TEST
    // life_exp=70 // TEST

    support = d3.select("#support").property("value")
    // console.log(support) // TEST

    freedom = d3.select("#freedom").property("value")
    // freedom=0.44 // TEST

    generosity = d3.select("#generosity").property("value")
    // generosity = 0.2 // TEST

    corruption = d3.select("#corruption").property("value")
    // corruption =0.4 // TEST

    // Read in flask end point
    d3.json(`/predict/${year}/${gdp}/${life_exp}/${support}/${freedom}/${generosity}/${corruption}`).then((data) => {

    console.log("Prediction score: " + data);

    // Final Score
    d3.select("#final_score")
        .append("h3")
        .attr("class", "text-muted")
        .text(data);

    });
  
});













