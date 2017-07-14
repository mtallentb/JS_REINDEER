"use strict"

console.log("Reindeer");

let colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
let reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
let colorsAndReindeer =[];

for (let i = 0; i < reindeer.length; i++) {
		colorsAndReindeer.push(colors[i] + " " + reindeer[i]);
	

	let hohohoElement = document.getElementById("reindeer");
	hohohoElement.innerHTML += `<p>${colorsAndReindeer[i]}</p>`
}
