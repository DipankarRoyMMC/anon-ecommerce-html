'use strict';
// modal varialble 
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function 
const modalCloseFun = function() {
    modal.classList.add('closed');
}

// modal eventlistener 
modalCloseBtn.addEventListener('click', modalCloseFun);
modalCloseOverlay.addEventListener('click', modalCloseFun)