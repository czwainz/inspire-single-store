let quoteUrl = '//bcw-getter.herokuapp.com/?url=';
let quoteUrl2 = 'https://favqs.com/api/qotd';
let quoteApiUrl = quoteUrl + encodeURIComponent(quoteUrl2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
	baseURL: quoteApiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(callWhenDone) {
		console.log('looking for some good quotes')
		quoteApi().then((res) => {
			callWhenDone(res.data)
		})
	}
}
