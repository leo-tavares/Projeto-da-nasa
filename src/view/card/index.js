import { createElement } from "../../utils/elements.js";

const container = createElement("div", "div__card__container", [
  "div__card__container",
]);

const img = createElement("img", "img__card__image", ["img__card__image"]);

const description = createElement("p", "p__card__description", [
  "p__card__description",
]);

container.append(img, description);

export {
    container,
    img,
    description
}

export default container;
