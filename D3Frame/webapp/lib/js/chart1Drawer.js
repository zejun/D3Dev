/**
* Chart with div set up
*/
function drawChart1(chartData){

	var x = d3.scale.linear()
				.domain([0, d3.max(chartData)])
				.range([0, 420]);

	d3.select(".chart")
	.selectAll("div")
		.data(chartData)
	.enter().append("div")
		.style("width",function(d){return x(d)+"px"})
		.text(function(d){return d});

}

function drawChartSVG(chartData){
	var width=420,
		barHeight=20;

	var x = d3.scale.linear()
		.domain([0,d3.max(chartData)])
		.range([0,width]);

	var chart = d3.select(".chart2")
		.attr("width",width)
		.attr("height",barHeight*data.length);

	var bar = chart.selectAll("g")
		.data(data)
		.enter().append("g")
		.attr("transform",function(d,i){return "translate(0," + i * barHeight + ")";});

	bar.append("rect")
		.attr("width",x)
		.attr("height",barHeight-1);

	bar.append("text")
		.attr("x",function(d){return x(d)-3;})
		.attr("y",barHeight/2)
		.attr("dy",".35em")
		.text(function(d){return d;});
}