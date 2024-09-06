function formatMoney(id) {
	let money = parseFloat(document.getElementById(id).value);
	document.getElementById(id).value = money.toFixed(2)
	console.log(money);
}

function results() {
	let iniInvest = parseFloat(document.getElementById("ini-invest").value);
	let rate = parseFloat(document.getElementById("rate").value);
	let monInvest = parseFloat(document.getElementById("mon-invest").value);
	let time = parseFloat(document.getElementById("time").value);
	
	if (document.getElementById("rate-unit").value = "annual") {
		rate /= 12;
	}

	if(document.getElementById("time-unit").value = "year(s)") {
		time *= 12;
	}

	let finValue = iniInvest;
	let invested = iniInvest;
	let interest = 0.0;

	document.getElementById("result").innerHTML =
		`<table id="result-table">
			<tr>
				<th>Month</th>
				<th>Invested</th>
				<th>Interest</th>
				<th>Total</th>
			</tr>
		</table>`;

	for(let i = 0; i < time; i++) {
		finValue += finValue * (rate/100);
		interest += finValue * (rate/100);
		finValue += monInvest;
		invested += monInvest;
		document.getElementById("result-table").innerHTML +=
			`<tr ${i%2 == 0 ? 'class="white"' : 'class="gray"' }>
				<td>${i+1}</td>
				<td><span>R$</span>${invested.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
				<td><span>R$</span>${interest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
				<td><span>R$</span>${finValue.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
			</tr>`
	}

	console.log(finValue);
}
