import Store from "../../store.js";

function draw() {
  console.log('drawing the image', Store.Image)
}

export default class ImageController {
  constructor() {
    Store.addSubscriber('image', draw)
  }

  getImage() {
    Store.getImage()
  }

}

