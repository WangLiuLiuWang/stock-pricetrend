//here we will define all the param required on the page
/*********D3 chart************/
var width = 800;
var height = 600;
var margin = {
		top:10,right:200,bottom:10,left:200
	};
var padding = {
		top:50,right:100,bottom:50,left:100
};
var svg = d3.select('svg')
	.attr('width',width)
	.attr('height',height);
var chartW = width - padding.left - padding.right;
var chartH = height - padding.top - padding.bottom;
var axisG = svg.append('g');
var chartG = svg.append('g');
var axisXG = axisG.append('g');
var axisYG = axisG.append('g');
		//define the axis
		var dateN = new Date();//now time
		var yearB = dateN.getFullYear()-1;
		var day =  dateN.getDate();//day thought date
		var dayB = day + 1;
		var dayN = day - 1;
		var dateB =  new Date();//before time
		dateN.setDate(dayN);dateB.setDate(dayB);dateB.setFullYear(yearB);
		var format = d3.timeFormat('%Y-%m-%d');
	
		//up is date deal
		var priceMax = 1000;
		var priceMin = 0;
		var xScale = d3.scaleTime()
						.range([0,chartW])
						.domain([dateB,dateN]);
		//here,we'll format the date like '2016-05-08'
		dateN = format(dateN);dateB = format(dateB);
		console.log(dateN+'....................'+dateB);
		var yScale = d3.scaleLinear()
						.range([0,chartH])
						.domain([priceMax,priceMin]);
		var axisX = d3.axisTop(xScale);
		var axisY = d3.axisLeft(yScale);
		axisXG.attr('transform','translate('+padding.left+','+(height - padding.bottom)+')')
			 .call(axisX);
		axisYG.attr('transform','translate('+padding.left+','+padding.top+')')
			 .call(axisY);
var parseT = d3.timeParse('%Y-%m-%d');
var color = d3.schemaCategory20;var ordinal = 1;
/*********************/

/**********stockInf.js***********/
var addBut = document.getElementById('adds');
var stocks = document.getElementById('stockS');
stocks.setAttribute('align','center');
stocks.setAttribute('width','80%');
/*********************/

/*********delete+add************/
var symbolArr = [];
var input = document.getElementById('symbol');
var message =document.getElementById('message');
/*********************/