import CardView, { img, description } from "./view/card/index.js";
import ApodController from "./controller/ApodController.js";


const apodController = new ApodController();
apodController.fetchNewData();

document.body.append(CardView);
