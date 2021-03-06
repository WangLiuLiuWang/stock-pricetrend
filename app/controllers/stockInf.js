var stockInf = function(json){
	var div = document.createElement('div');
	var symbol = document.createElement('h2');
	var inf = document.createElement('p');
	var button = document.createElement('button');
	var id = json.symbol+'_inf';
	div.setAttribute('id',id);
	symbol.innerHTML = json.symbol;
	inf.innerHTML = json.name;
	button.classList.add('btn','btn-infor');
	button.innerHTML = 'delete';
	button.setAttribute('onclick','delet("'+id+'")');
	symbol.appendChild(button);
	div.appendChild(symbol);
	div.appendChild(inf);
	stocks.insertBefore(div,addBut);
		//add the new symbol to symbol array
	var data = json.data.map(function(ele){
			return ele[1];//we juse store the price and we'll store date with key 'date'
		});
	symbolArr.push(json.symbol);
	//tooltip
	cache[json.symbol] = data;
	if(!cache.hasOwnProperty('date')){
		var date = json.data.map(function(ele){
			return ele[0];
		});
		cache['date'] = date;
	}
	
 		//circle appended
	tooltipG.append('circle')
		 .style("fill", "none") 
         .style("stroke", "blue")
		 .attr('id',json.symbol+'circle')
         .attr("r", 4);
	//add the node of stock to tooltip
	tooltip.append('span')
			.attr('id',json.symbol+'_tool');
	tooltip.append('br');
	
//    var li = document.createElement('li');
//    var span = document.createElement('span');
// 	span.setAttribute('id',json.symbol+'_tool');
//	li.setAttribute('id',json.symbol+'symboldata');
// 	li.innerHTML = json.symbol+': ';
// 	li.appendChild(span);
// 	tooltip.appendChild(li);
}