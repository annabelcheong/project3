
anychart.onDocumentReady(function () {

    // var data = [
    //   {"x": "Mandarin chinese", "value": 1090000000},
    //   {"x": "English", "value": 983000000},
    //   {"x": "Hindustani", "value": 544000000},
    //   {"x": "Spanish", "value": 527000000},
    //   {"x": "Arabic", "value": 422000000},
    //   {"x": "Malay", "value": 281000000},
    //   {"x": "Russian", "value": 267000000},
    //   {"x": "Bengali", "value": 261000000},
    //   {"x": "Portuguese", "value": 229000000},
    //   {"x": "French", "value": 229000000},
    //   {"x": "Hausa", "value": 150000000},
    //   {"x": "Punjabi", "value": 148000000},
    //   {"x": "Japanese", "value": 129000000},
    //   {"x": "German", "value": 129000000},
    //   {"x": "Persian", "value": 121000000}
    // ];

    // Data Values are from the Random Forest (Machine Learning) Results (See model3.ipynb)
    var data =
    [{"x": 'support',"value": 0.19896549192950844},
    {"x": 'GDP per capita',"value": 0.19285595893256546},
    {"x": 'healthy life expectancy', "value": 0.17709008126225667},
    {"x": 'freedom', "value": 0.15510981975672064},
    {"x": 'corruption', "value": 0.15340257355358683},
    {"x": 'generosity', "value": 0.11042742824818405},
    {"x": 'year', "value": 0.012148646317177988}];
  
    console.log(data[0])

    // create a tag cloud chart
    var chart = anychart.tagCloud(data);
  
    // set the chart title
    chart.title('What affects the happiness score most?')
    // set array of angles, by which words will be placed
    // chart.angles([0, -45, 90])
    chart.angles([0, 45, 0])
    // enable color range

    // create and configure a color scale.
    var customColorScale = anychart.scales.linearColor();
    // customColorScale.colors(["#ffcc00", "#00ccff"]);
    customColorScale.colors(["#ffcc00", "#013220"]);



    // set the color scale as the color scale of the chart
    chart.colorScale(customColorScale);

    // add a color range
    chart.colorRange().enabled(true);



    // chart.colorRange(false);
    // set color range length
    // chart.colorRange().length('80%');
  
    // format tooltips
    var formatter = "Influence on Happiness Score: {%value}{scale:(1)(1000)(1000)(1000)|()( thousand)( million)( billion)}";
    var tooltip = chart.tooltip();
    tooltip.format(formatter);
  
    // display chart
    chart.container("happy_cloud");
    chart.draw();
  });