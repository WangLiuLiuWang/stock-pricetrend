//here we will define all the param required on the page
/*********delete+add************/
var symbolArr = [];
var input = document.getElementById('symbol');
var message =document.getElementById('message');
/*********************/

/*********D3 chart************/
var width = 800;
var height = 600;
var margin = {
		top:30,right:200,bottom:10,left:200
	};
var padding = {
		top:50,right:100,bottom:50,left:100
};
var svg = d3.select('svg')
	.attr('width',width)
	.attr('height',height);
var chartW = width - padding.left - padding.right;
var chartH = height - padding.top - padding.bottom;
var tooltipG = svg.append('g');
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


	/**********for tool tip***********/
		//define a end with type of boolean to determin if use the tooltip
		var end = false;
		var cache = {};//cache the stock's data,for tooltip
	//	var bisectDate = d3.bisector(function(d){
	//		return d.date;
	//	}).left;

		//var ul = document.createElement('ul');
		//var div_tip = document.createElement('div');
		//div_tip.setAttribute('id','ul_stocks');
		//div_tip.appendChild(ul);
		//d3.select('body').append(ul);
		//document.querySelector('body').appendChild(div_tip);
		//var tooltip = document.querySelector('#ul_stocks>ul');
//		var tooltipD3 = d3.select('#ul_stocks>ul');
		var tooltip = 
				d3.select('body')
				.append('div')
				.attr('class','ul_stocks')
				.style('width','150px')
				.style('background-color','steelblue');
		var lineTol = tooltipG.append('line')
					.style('stroke','black')
					 .style('stroke-width',1)
					 .attr('transform','translate('+padding.left+','+padding.top+')')
					.attr('y1',0)
					.attr('y2',chartH);
						//put a rect on chart,and set the 'on' event 
					
		svg.append('rect')
				.attr('width',chartW)
				.attr('height',chartH)
				.style('fill','none')
				.style("pointer-events", "all")
				.attr('id','felling')
				.attr('transform','translate('+padding.left+','+padding.top+')')
				.on('mouseover',function(d){
					if(symbolArr.length === 0){
						return;
						//if no end,the tooltip will not be used
					}
					tooltip.style('opacity',0.8);
					tooltipG.style('display',null);	
				})
				.on('mouseout',function(d){
					tooltipG.style('display','none');
					tooltip.style('opacity',0);
				})
				.on('mousemove',function(e){
					if(symbolArr.length === 0){
						return;
						//if no end,the tooltip will not be used
					}
					 var date = cache.date,
						x0 = xScale.invert(d3.mouse(this)[0]),
						i = d3.bisectLeft(date, x0, 1),
						d0 = date[i - 1],
						d1 = date[i];
						i = x0 - d0 > d1 - x0 ? i : (i-1);
					var dateTrans = xScale(date[i]);//get the date translate.the all stocks have the same that.
					
						symbolArr.forEach(function(ele){//here will set the circle transform differently .
							 
							var valueTrans = yScale(cache[ele][i])  ;  //get stock ele's value transform
							d3.select('#'+ele+'circle')
								.attr('transform','translate('+(padding.left+dateTrans)+','+(padding.top+valueTrans)+')');
							//set the tooltip data
							tooltip.select('#'+ele+'_tool')
									.text(ele+': '+cache[ele][i]);
						});
					//set the line translate
					lineTol.attr('x1',dateTrans)
							.attr('x2',dateTrans);
					//tooltip
					if((dateTrans+150) > chartW){
						tooltip.style("left",(event.x-200)+"px");
					}else{
						tooltip.style("left",(event.x+50)+"px");
					}
					if((event.offsetY+150)>chartH){
						tooltip.style('top',(event.y-80)+'px');
					}else{
						tooltip.style('top',(event.y+50)+'px');
					}
					
				});
		//first the line and circle
	/*********************/
/*********************/

/**********stockInf.js***********/
var addBut = document.getElementById('adds');
var stocks = document.getElementById('stockS');
stocks.setAttribute('align','center');
stocks.setAttribute('width','80%');
/*********************/

