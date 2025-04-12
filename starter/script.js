'use strict';

//note: whenever you need to manipulate styles on a page, just export the styles to a class and use the class
//we will select everything we need and store it in varibles and then we can use them over and over again
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

//we can loop through the NodeList to do something  with the buttons
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// } //this shows the textcontent of each showModal

//manipulating classes with JS
//first thing to do is to react to a click . we will use the for loop to to do that

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button Clicked');
//     //using classList and .remove method
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//
//   }); //we attached the function to the three buttons because we did it in the loop while we were looping over the Nodelist which contains all of the buttons
// }

//closing the modal
// btnCloseModal.addEventListener('click', function () {
//   //using the .add method
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//closing the modal when you click on the overlay or the "x" button
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//we specified the closeModal function

//lets do the same for the opening of the modal

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//specified the openModal function

//HOW TO HANDLE A KEY PRESS MODAL
//-WE CAN ALSO USE THE ESC KEY TO CLOSE THE MODAL, THAT IS A THIRD WAY

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
