// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-01-JS/sw.js", {
    scope: "/ICS2O-Unit-5-01-JS/",
  })
}

// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

// process
if (valueFromSlider == randomNumber) {
  document.getElementById("answer").innerHTML =
    "That's right, I was thinking of number" + randomNumber
}

// process
if (valueFromSlider != randomNumber) {
  document.getElementById("answer").innerHTML =
    "That's right, I was thinking of number" + randomNumber
}
