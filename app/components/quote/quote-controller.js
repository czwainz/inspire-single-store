import QuoteService from "./quote-service.js";

let qs



export default class QuoteController {
	constructor(store) {
		qs = new QuoteService(store)
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
