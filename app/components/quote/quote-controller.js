import QuoteService from "./quote-service.js";

let qs = new QuoteService

let _store


export default class QuoteController {
	constructor(store) {
		_store = store
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
