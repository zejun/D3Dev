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