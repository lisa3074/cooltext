"use strict";
window.addEventListener("DOMContentLoaded", global);
const HTML = {};

//GLOBAL VARIABLES

function global() {
  HTML.coolText = document.querySelector("#cooltext");
  HTML.characters = [];
  start();
}

//CONTROLLER

function start() {
  const text = getHtmlText();
  removeHtmlText();
  const charArray = createArray(text);
  createSpan();
  setAnimation();
}

//MODEL

function getHtmlText() {
  const text = HTML.coolText.textContent;
  return text;
}

function removeHtmlText() {
  HTML.coolText.textContent = "";
}

function createArray(text) {
  text.split("");
  const char = Array.from(text);
  char.forEach(entry => {
    HTML.characters.push(entry);
  });
  return HTML.characters;
}

//DISPLAY

function createSpan() {
  HTML.characters.forEach(letter => {
    const spans = document.createElement("span");
    spans.textContent = letter;
    HTML.coolText.appendChild(spans);
  });
}

function setAnimation() {
  let counter = 0;
  document.querySelectorAll("span").forEach(e => {
    e.style.setProperty("--delay", counter + "0ms");
    e.classList.add("fade_in");
    counter++;
  });
}
