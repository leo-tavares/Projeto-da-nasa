import Api from "./utils/api.js";
import CardView, { img, description } from "./view/card/index.js";
import ApodController from "./controller/ApodController.js";

const api = new Api("GET");

const apodController = new ApodController(api);
apodController.fetchNewData();

document.body.append(CardView);
