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
	symbolArr.push(json.symbol);
}