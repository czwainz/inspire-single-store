//PRIVATE
//IMAGES
const imageUrl = '//bcw-getter.herokuapp.com/?url=';
const imageUrl2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const imageApiUrl = imageUrl + encodeURIComponent(imageUrl2);


const imgApi = axios.create({
  baseURL: imageApiUrl,
  timeout: 3000
});

//QUOTES 

//TODO

//WEATHER


//PUBLIC
export default class Store {
  //IMAGES
  getImage(callWhenDone) {
    // ^^^^^^^ How do you call this function?
    console.log("Looking for a good pic")
    imgApi().then(res => {
      console.log('Image Data:', res.data)
      callWhenDone(res.data)
    })
  }
  //QUOTES 

  //TODO

  //WEATHER

}