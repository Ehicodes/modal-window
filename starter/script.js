'use strict';
//we will select everything we need and store it in varibles and then we can use them over and over again
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal); //notice that it only selects one button and that is because when we use querySelector with a selector that matches multiple elements, only the first one will get selected. So instead we can use querySelectorAll
//we stored the selected elements in the variables. the NodeList is a little bit like an array not exactly like an array but works like one in this context

//we can loop through the NodeList to do something  with the buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
} //this shows the textcontent of each showModal
