
export default function createElement(...elements) {
  elements.forEach((element) => {
    document
    .querySelector("body")
    .append(document.createElement(element));
  });
}
