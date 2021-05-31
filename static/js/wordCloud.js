
anychart.onDocumentReady(function () {

    // Data Values are from the Random Forest (Machine Learning) Results (See model2.ipynb)
    var data =
    [{"x": 'support',"value": 0.19896549192950844},
    {"x": 'GDP per capita',"value": 0.19285595893256546},
    {"x": 'healthy life expectancy', "value": 0.17709008126225667},
    {"x": 'freedom', "value": 0.15510981975672064},
    {"x": 'corruption', "value": 0.15340257355358683},
    {"x": 'generosity', "value": 0.11042742824818405},
    {"x": 'year', "value": 0.012148646317177988}];
  
    // console.log(data[0]) // TEST

    // create a tag cloud chart
    var chart = anychart.tagCloud(data);
  
    // set the chart title
    chart.title('What affects the happiness score most?')

    // set array of angles, by which words will be placed
    chart.angles([0, 45, 0])

    // create and configure a color scale.
    var customColorScale = anychart.scales.linearColor();
    customColorScale.colors(["#ffcc00", "#013220"])

    // set the color scale as the color scale of the chart
    chart.colorScale(customColorScale);

    // add a color range
    chart.colorRange().enabled(true);
  
    // format tooltips
    var formatter = "Influence on Happiness Score: {%value}{scale:(1)(1000)(1000)(1000)|()( thousand)( million)( billion)}";
    var tooltip = chart.tooltip();
    tooltip.format(formatter);
  
    // display chart
    chart.container("happy_cloud");
    chart.draw();
  });