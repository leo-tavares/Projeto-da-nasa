class ApodController {
  constructor(api, model) {
    this.api = api;
    this.model = model;
  }

  get ApodModel() {
    return this.model;
  }

  updateModel(data) {
    this.model.updateData(data);
  }

  fetchNewData() {
    let data;
    this.api.addEventListener("load", function() {
      data = JSON.parse(this.response);
    });
    this.updateModel(data)

    this.api.call();
  }
}

export default ApodController;
