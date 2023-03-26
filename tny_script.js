"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Thomas Gander
   Date:   26/03/2023

*/
/* Store the current date and time */
var currentDay = new Date("May 23, 2021 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

window.alert("Welcome to Tulsa");
/* Display the current date and time */
document.getElementById("dateNow").innerHTML =
dateStr + "<br />" + timeStr;
/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";