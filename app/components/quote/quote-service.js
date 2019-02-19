let quoteUrl = '//bcw-getter.herokuapp.com/?url=';
let quoteUrl2 = 'https://favqs.com/api/qotd';
let quoteApiUrl = quoteUrl + encodeURIComponent(quoteUrl2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
	baseURL: quoteApiUrl,
	timeout: 3000
});


export default class QuoteService {
	// callWhenDone
	static async GetQuote() {
		try {
			let response = await quoteApi()
			return response.data.quote
		} catch (err) {
			console.error(err)
		}
		// .then((res) => {
		// 	console.log('this the quote', res.data.quote)
		// 	return res.data.quote
		// }).
		// catch(err => console.error(err))
	}
}
