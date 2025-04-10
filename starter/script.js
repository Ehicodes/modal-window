'use strict';

//note: whenever you need to manipulate styles on a page, just export the styles to a class and use the class
//we will select everything we need and store it in varibles and then we can use them over and over again
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal); //notice that it only selects one button and that is because when we use querySelector with a selector that matches multiple elements, only the first one will get selected. So instead we can use querySelectorAll
//we stored the selected elements in the variables. the NodeList is a little bit like an array not exactly like an array but works like one in this context

//we can loop through the NodeList to do something  with the buttons
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// } //this shows the textcontent of each showModal

//manipulating classes with JS
//first thing to do is to react to a click . we will use the for loop to to do that

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    //using classList and .remove method
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    //clasList property has a lot of methods but we will use .remove We do not use the dot here. we can also add classes and even check if an element contains a certain class. we can remove multiple classes just by using a comma
  }); //we attached the function to the three buttons because we did it in the loop while we were looping over the Nodelist which contains all of the buttons
}

//closing the modal
// btnCloseModal.addEventListener('click', function () {
//   //using the .add method
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//closing the modal when you click on the overlay or the "x" button, and using the DRY principle because we do not want the same code in overlay and btnCloseModal. so we exported that code into a more real names function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

btnCloseModal.addEventListener('click', closeModal); //we specified the closeModal function
