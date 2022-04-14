"use strict";

const tabs = document.querySelectorAll(".section-tab__button");
const tabsContent = document.querySelectorAll(".section-tab__content");
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");

function init() {
  tabs.forEach((t) => t.classList.remove("button-active"));
  tabsContent.forEach((c) => c.classList.remove("section-tab__content-active"));
}

button1.addEventListener("click", function (e) {
  const clicked = e.target.closest(".section-tab__button");
  if (!clicked) return;
  init();
  document
    .querySelector(".section-tab__content--1")
    .classList.add("section-tab__content-active");
  clicked.classList.add("button-active");
});

button2.addEventListener("click", function (e) {
  const clicked = e.target.closest(".section-tab__button");
  if (!clicked) return;
  init();
  document
    .querySelector(".section-tab__content--2")
    .classList.add("section-tab__content-active");
  clicked.classList.add("button-active");
});

button3.addEventListener("click", function (e) {
  const clicked = e.target.closest(".section-tab__button");
  if (!clicked) return;
  init();
  document
    .querySelector(".section-tab__content--3")
    .classList.add("section-tab__content-active");
  clicked.classList.add("button-active");
});
