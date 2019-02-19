import Store from "../../store.js";

function drawQuote() {
	let quote = Store.Quote
	document.querySelector('#quote').innerHTML = `
	<div class="card">
		<h3>${quote.body}</h3>
		<button onclick="app.controllers.quoteController.GetQuote()">Lame</button>
	</div>
	`
}

export default class QuoteController {
	constructor() {
		Store.addSubscriber('quote', drawQuote)
	}

	GetQuote() {
		Store.getQuote()
	}
}
