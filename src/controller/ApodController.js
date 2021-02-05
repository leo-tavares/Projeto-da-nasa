import ApodModel from "../model/apod.js";
import { img, description } from "../view/card/index.js";

class ApodController {
  constructor(api) {
    this.api = api;
    this.model = new ApodModel();
  }

  getApodModel() {
    return this.model;
  }

  updateModel(data) {
    this.model.updateData(data);
  }

  fetchNewData() {
    this.api.addEventListener("load", () => {
      const data = JSON.parse(this.api.getResponse());
      console.log(data);
      img.src = data.url;
      description.textContent = data.explanation
      this.updateModel(data);
    });
    this.api.fetch();
  }
}

export default ApodController;
