import ApodModel from "../model/apod.js";

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
      this.updateModel(data);
    });
    this.api.call();
  }
}

export default ApodController;
