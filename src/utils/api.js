import Key from "../../key.js";

class Api {
  constructor(method, queryParams) {
    this.queryParams = queryParams;
    this._api = new XMLHttpRequest();
    this._api.open(
      method,
      `https://api.nasa.gov/planetary/apod?api_key=${Key}${queryParams || ""}`
    );
  }

  getResponse() {
    return this._api.response;
  }

  addEventListener(type, cb) {
    this._api.addEventListener(type, cb);
  }

  /**
   * @param {String} [body]
   */
  call(body) {
    this._api.send(body);
  }
}

export default Api;
