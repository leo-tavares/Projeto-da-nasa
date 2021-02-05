import ApodModel from "../model/apod.js";
import { img, description } from "../view/card/index.js";
import Api from "../utils/api.js";
const api = new Api("GET");

class ApodController {
  constructor() {
    this.model = new ApodModel();
  }

  getApodModel() {
    return this.model;
  }

  updateModel(data) {
    this.model.updateData(data);
  }

  fetchNewData() {
    api.addEventListener("load", () => {
      const data = JSON.parse(api.getResponse());
      console.log(data);
      img.src = data.url;
      description.textContent = data.explanation;
      this.updateModel(data);
    });
    api.fetch();
  }
}

export default ApodController;
