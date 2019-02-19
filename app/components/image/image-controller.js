import Store from "../../store.js";
import ImageService from "./image-service.js";


function draw() {
  console.log('drawing the images', Store.Images)
  let imageArr = Store.Images
  let imageIndex = Math.floor(Math.random() * imageArr.length)
  let image = imageArr[imageIndex]
  document.body.style.backgroundImage = `url(${image.url})`
}

export default class ImageController {
  constructor() {
    Store.addSubscriber('images', draw)
  }

  getImages() {
    ImageService.getImages()
    Store.getImages()
  }

}

