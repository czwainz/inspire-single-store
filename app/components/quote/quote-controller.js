import Store from "../../store.js";

function drawQuote() {
	let quote = Store.Quote
	document.querySelector('#quote').innerHTML = `
	<div class="card col-8 bg-transparent mt-5">
		<h3>${quote.body}</h3>
		<div class="card-body justify-content-center d-flex">
		<button class="btn btn-dark btn-sm" onclick="app.controllers.quoteController.GetQuote()">New</button>
	  </div>
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
