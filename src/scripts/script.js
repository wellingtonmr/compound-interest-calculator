function formatMoney(id) {
	let money = parseFloat(document.getElementById(id).value);
	document.getElementById(id).value = money.toFixed(2)
	console.log(money);
}

function results() {

	document.getElementById("result").innerHTML = "";

	if (document.getElementById("ini-invest").value == "") {
		document.getElementById("result").innerHTML = 
			`<div class="warning">Enter the initial investment!</div>`;
	}
	else if (document.getElementById("rate").value == "") {
		document.getElementById("result").innerHTML = 
			`<div class="warning">Enter the rate!</div>`;
	}
	else if (document.getElementById("time").value == "") {
		document.getElementById("result").innerHTML =
			`<div class="warning">Enter the time period!</div>`;
	}
	else {
		if (document.getElementById("mon-invest").value == "") {
			document.getElementById("mon-invest").value = 0;
		}

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
			<div class="total-div attention" id="total-sum">
			Final Sum:
			</div>
			</div>
			<div id="result-table">
			<div class="table-row title">
			<div class="table-content">Month</div>
			<div class="table-content">Invested</div>
			<div class="table-content">Interest</div>
			<div class="table-content">Total Int.</div>
			<div class="table-content">Total</div>
			</div>
			<div id="table-container">
			</div>
			</div>`;

		for(let i = 0; i < time; i++) {
			monInterest = finValue * (rate/100);
			finValue += monInterest;
			interest += monInterest;
			finValue += monInvest;
			invested += monInvest;
			document.getElementById("table-container").innerHTML +=
				`<div class="table-row ${i%2 == 0 ? 'white"' : 'gray"' }>
				<div class="table-content">${i+1}</div>
				<div class="table-content"><span>U$</span>${invested.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
				<div class="table-content"><span>U$</span>${monInterest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
				<div class="table-content"><span>U$</span>${interest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
				<div class="table-content"><span>U$</span>${finValue.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
				</div>`
		}
		document.getElementById("result-table").innerHTML += `</div>`;

		document.getElementById("total-invested").innerHTML +=
			`<br /> U$ ${invested.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
		document.getElementById("total-interest").innerHTML +=
			`<br /> U$ ${interest.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
		document.getElementById("total-sum").innerHTML +=
			`<br /> U$ ${finValue.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
	}
}

function clearInput() {
	document.getElementById("ini-invest").value = "";
	document.getElementById("rate").value = "";
	document.getElementById("mon-invest").value = "";
	document.getElementById("time").value = "";
}
