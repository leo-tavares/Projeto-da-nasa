import Key from "../../key.js";

class Api {
  constructor(method, queryParams) {
    this.queryParams = queryParams;
    this.api = new XMLHttpRequest();
    this.api.open(
      method,
      `https://api.nasa.gov/planetary/apod?api_key=${Key}${queryParams || ""}`
    );
  }

  addEventListener(type, cb) {
    this.api.addEventListener(type, cb);
  }

  /**
   * @param {String} [body]
   */
  call(body) {
    this.api.send(body);
  }
}

export default Api;
