import Api from "./utils/api.js";
import CardView, { img, description } from "./view/card/index.js";
import ApodController from "./controller/ApodController.js";
import ApodModel from "./model/apod.js"

const api = new Api("GET");

const apodModel = new ApodModel({})
const apodController = new ApodController(api, apodModel);
apodController.fetchNewData()

img.src =
  "https://apod.nasa.gov/apod/image/2101/SouthernCross_Slovinsky_960.jpg";
description.textContent =
  "Have you ever seen the Southern Cross? This famous four-star icon is best seen from Earth's Southern Hemisphere. The featured image was taken last month in Chile and captures the Southern Cross just to the left of erupting Villarrica, one of the most active volcanos in our Solar System.  Connecting the reddest Southern Cross star Gacrux through the brightest star  Acrux points near the most southern location in the sky: the South Celestial Pole (SCP), around which all southern stars appear to spin as the Earth turns. In modern times, no bright star resides near the SCP, unlike in the north where bright Polaris now appears near the NCP.  Extending the Gacrux - Acrux line still further (from about four to about seven times their angular separation) leads near the Small Magellanic Cloud, a bright satellite galaxy of our Milky Way Galaxy.  The Southern Cross asterism dominates the Crux constellation, a deeper array of stars that includes four Cepheid variable stars visible to the unaided eye. Just above the volcano in the image, and looking like a dark plume, is the Coalsack Nebula, while the large red star-forming Carina Nebula is visible on the upper left.   Portal Universe: Random APOD Generator";
document.body.append(CardView);
