"use strict";
var clickableAreaEl = document.querySelector(".clickable-area");
var leftButtonEl = document.querySelector(".mouse__left-button");
var middleButtonEl = document.querySelector(".mouse__middle-button");
var rightButtonEl = document.querySelector(".mouse__right-button");
var toggleActiveEl = function (event) {
    switch (event.button) {
        case 0:
            leftButtonEl.classList.toggle("active");
            break;
        case 1:
            middleButtonEl.classList.toggle("active");
            break;
        case 2:
            rightButtonEl.classList.toggle("active");
    }
};
clickableAreaEl === null || clickableAreaEl === void 0 ? void 0 : clickableAreaEl.addEventListener("mousedown", function (event) { return toggleActiveEl(event); });
clickableAreaEl === null || clickableAreaEl === void 0 ? void 0 : clickableAreaEl.addEventListener("mouseup", function (event) { return toggleActiveEl(event); });
clickableAreaEl === null || clickableAreaEl === void 0 ? void 0 : clickableAreaEl.addEventListener("contextmenu", function (event) { return event.preventDefault(); });
