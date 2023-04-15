import * as jsdom from "jsdom";
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html>`);
const conversionCanvas = dom.window.document.createElement("canvas");
conversionCanvas.width = 1;
conversionCanvas.height = 1;
const conversionContext = conversionCanvas.getContext("2d");
const conversionCache = {};

const colors = {
  bright: "#aefffb",
  text: "#8ff2ed",
  error: "#ea393d",
  success: "#7ef575",
  standard: "#3cece5",
  background: "#000",
};

const colorToRGBA = (colorKey) => {
  const color = colors[colorKey] || colorKey;
  if (!conversionCache.hasOwnProperty(colorKey)) {
    conversionContext.clearRect(0, 0, 1, 1);
    conversionContext.fillStyle = color;
    conversionContext.fillRect(0, 0, 1, 1);
    conversionCache[colorKey] = [
      ...conversionContext.getImageData(0, 0, 1, 1).data,
    ];
  }
  return conversionCache[colorKey];
};

const brightness = (color, mod) => {
  const rgba = colorToRGBA(color);
  const sanity = (number) => Math.min(Math.max(0, number), 255);
  return `rgba(${sanity(rgba[0] + mod)},${sanity(rgba[1] + mod)},${sanity(
    rgba[2] + mod
  )},${rgba[3]})`;
};

const opacity = (color, opacity) => {
  const rgba = colorToRGBA(color);
  return `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${opacity})`;
};

export default Object.assign({ brightness, opacity }, colors);
