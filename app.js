function renderСurrencies(exchange) {
	let htmlStr = exchange.map(function(rates, index) {
		return `<tr>
		<td>${index + 1}</td>
		<td>${rates.r030}</td>
		<td>${rates.txt}</td>
		<td>${rates.rate.toFixed(2)}</td>
		<td>${rates.cc}</td>
		</tr>`;
	}).join('');
	document.getElementById('currencies').innerHTML = htmlStr;
	document.getElementById('table-name').innerHTML = `курс валют на ${exchange[0].exchangedate}`;
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230117&json').then(function(data) {
  return data.json();
}).then(function(data) {
	renderСurrencies(data);
})
