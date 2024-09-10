function formatMoney(id) {
	let money = parseFloat(document.getElementById(id).value);
	document.getElementById(id).value = money.toFixed(2)
	console.log(money);
}

function results() {

	document.getElementById("result").innerHTML = "";

	let iniInvest = parseFloat(document.getElementById("ini-invest").value);
	let rate = parseFloat(document.getElementById("rate").value);
	let monInvest = parseFloat(document.getElementById("mon-invest").value);
	let time = parseFloat(document.getElementById("time").value);
	
	if (document.getElementById("rate-unit").value == "annual") {
		rate /= 12;
	}

	if(document.getElementById("time-unit").value == "year(s)") {
		time *= 12;
	}

	let finValue = iniInvest;
	let invested = iniInvest;
	let monInterest = 0.0;
	let interest = 0.0;

	document.getElementById("result").innerHTML =
		`<div class="totals">
			<div class="total-div" id="total-invested">
				Invested:
			</div>
			<div class="total-div" id="total-interest">
				Interest:
			</div class="total-div">
			<div class="total-div red" id="total-sum">
				Final Sum:
			</div>
		</div>
		<table id="result-table">
			<tr>
				<th>Month</th>
				<th>Invested</th>
				<th>Interest</th>
				<th>Total Int.</th>
				<th>Total</th>
			</tr>
		</table>`;

	for(let i = 0; i < time; i++) {
		monInterest = finValue * (rate/100);
		finValue += monInterest;
		interest += monInterest;
		finValue += monInvest;
		invested += monInvest;
		document.getElementById("result-table").innerHTML +=
			`<tr ${i%2 == 0 ? 'class="white"' : 'class="gray"' }>
				<td class="month">${i+1}</td>
				<td><span>U$</span>${invested.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
				<td><span>U$</span>${monInterest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
				<td><span>U$</span>${interest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
				<td><span>U$</span>${finValue.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
			</tr>`
	}
	document.getElementById("result-table").innerHTML += `</div>`;

	document.getElementById("total-invested").innerHTML +=
		` U$${invested.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
	document.getElementById("total-interest").innerText +=
		` U$${interest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
	document.getElementById("total-sum").innerText +=
		` U$${finValue.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function clearInput() {
	document.getElementById("ini-invest").value = "";
	document.getElementById("rate").value = "";
	document.getElementById("mon-invest").value = "";
	document.getElementById("time").value = "";
}
