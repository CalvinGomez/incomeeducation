/**
 * Created by arnoldchen on 5/28/16.
 */
/*var margin ={top:20, right:30, bottom:30, left:40},
    width=960-margin.left - margin.right,
    height=500-margin.top-margin.bottom;

// scale to ordinal because x axis is not numerical
var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
var y = d3.scale.linear().range([height, 0]);

var chart = d3.select("#chart")
    .append("svg")  //append svg element inside #chart
    .attr("width", width+(2*margin.left)+margin.right)    //set width
    .attr("height", height+margin.top+margin.bottom);  //set height
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");  //orient bottom because x-axis will appear below the bars

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");*/




var w = 500;
var h = 100;
//Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);


 //= requires("data/income.json")[0];
var dataArray= new Array();
$.getJSON("data/income.json", function(json) {
    var employmentData    = json[0];
    var less15            = employmentData["Households with income <$15K"];
    var from15to35        = employmentData["Households with income $15k-$35k"];
    var from35to50        = employmentData["Households with income$35k-$50k"];
    var from50to75        = employmentData["Households with income $50k-$75k"];
    var from75to100       = employmentData["Households with income $75k-$100k"];
    var from100to150      = employmentData["Households with income $100k-$150k"];
    var from150to200      = employmentData["Households with income $150k-$200k"];
    var more200           = employmentData["Households with income >$200k"];
    dataArray             = [less15, from15to35, from35to50, from50to75, from75to100, from100to150, from150to200, more200];
    // console.log(dataArray);

    svg.selectAll("rect")
        .data(dataArray)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 100)
        .attr("fill", "white");

});

// console.log(dataArray);










/*d3.json(employmentData, function(error, data){
    x.domain(data.map(function(d){ return d.letter}));
    y.domain([0, d3.max(data, function(d){return d.frequency})]);

    var bar = chart.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d, i){
            return "translate("+x(d.letter)+", 0)";
        });

    bar.append("rect")
        .attr("y", function(d) {
            return y(d.frequency);
        })
        .attr("x", function(d,i){
            return x.rangeBand()+(margin.left/2);
        })
        .attr("height", function(d) {
            return height - y(d.frequency);
        })
        .attr("width", x.rangeBand());  //set width base on range on ordinal data

    bar.append("text")
        .attr("x", x.rangeBand()+margin.left )
        .attr("y", function(d) { return y(d.frequency) -10; })
        .attr("dy", ".75em")
        .text(function(d) { return d.frequency; });

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate("+margin.left+","+ height+")")
        .call(xAxis);

    chart.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+margin.left+",0)")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");
});*/

function type(d) {
    d.letter = +d.letter; // coerce to number
    return d;
}
