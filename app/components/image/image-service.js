
const imageUrl = '//bcw-getter.herokuapp.com/?url=';
const imageUrl2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const imageApiUrl = imageUrl + encodeURIComponent(imageUrl2);

let _store

const imgApi = axios.create({
	baseURL: imageApiUrl,
	timeout: 3000
});

export default class ImageService {
	static getImages() {
		return imgApi().then(res => {
			console.log('Image Data:', res.data)
			return res.data
		})
			.catch(err => console.error(err))
	}
}
