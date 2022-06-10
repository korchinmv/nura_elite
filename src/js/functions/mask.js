import Inputmask from "inputmask";

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (495) 999-99-99');
im.mask(selector);

let cardNumber = document.getElementById('card-number');
console.log(cardNumber);
let mask = new Inputmask('99-9999999');
mask.mask(cardNumber);

console.log(mask);
