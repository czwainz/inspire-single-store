//PRIVATE

let store;

let _state = {
  images: {},
  quotes: {},
  todos: [],
  weather: {},
}

let _subscribers = {
  images: {},
  quotes: {},
  todos: [],
  weather: {},
}




//PUBLIC
export default class Store {
  constructor() {
    if (store) {
      return store
    }
    store = this
  }
  addSubscriber(dataName, fn) {
    _state.Subscribers[dataName].push(fn)
  }
  setState(prop, value) {
    _state[prop] = value
    _subscribers.forEach(fn => fn());
  }

}