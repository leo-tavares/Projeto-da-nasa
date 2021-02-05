/**
 * @param {String} tagName
 * @param {String} id
 * @param {String[]} className
 */
export const createElement = (tagName, id, className) => {
  const element = document.createElement(tagName);
  element.id = id;
  element.classList.add(className);
  return element;
};
