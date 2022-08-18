const add_card = document.getElementById('add-card');
// card btn
const card_holder_input = document.querySelector('#card-holder');
let card_holder_card = document.querySelector('.name');
// card number
const card_number_input = document.querySelector('#card-number');
let card_number_card = document.querySelector('.card-number');
// MM month code (Exp date)
const expMonth_input = document.querySelector('.moNth');
let expMonth_card = document.querySelector('.month-card');
//  YY year code
const expYEAR_input = document.querySelector('.yeaR');
let expYEAR_card = document.querySelector('.year-card');
// CVC
const cvc_input = document.querySelector('.cvc');
let cvc_card = document.querySelector('.cvc-number');
// confirm card btn.
// CARD NAME CODE
const inputName = () => {
    card_holder_card.innerText = card_holder_input.value;
}
//
// CARD NUMBER CODE
const inputNumber = () => {
    card_number_card.innerText = card_number_input.value;
}
//
// EXP DATE (month) MONTH
const InputMonth = () => {
    expMonth_card.innerText = expMonth_input.value;
}
// EXP DATE (month) MONTH
const InputYear = () => {
    expYEAR_card.innerText = expYEAR_input.value;
}
// CVC NUMBER CODE

const Inputcvc = () => {
    cvc_card.innerText = cvc_input.value;
}






add_card.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("you clicked it");
    inputName();
    inputNumber();
    InputMonth();
    InputYear();
    Inputcvc();
})

function printfunction() {
    
}