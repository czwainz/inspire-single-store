import Store from "../../store.js";

function draw() {

  console.log('drawing the image', Store.Image)
  let imageArr = Store.Image
  let imageIndex = Math.floor(Math.random() * imageArr.length)
  let image = imageArr[imageIndex].url
  document.querySelector('body').setAttribute('url', image)
}

export default class ImageController {
  constructor() {
    Store.addSubscriber('image', draw)
  }

  getImage() {
    Store.getImage()
  }

}

