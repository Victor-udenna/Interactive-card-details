const add_card = document.getElementById('add-card');
// card btn
const card_holder_input = document.querySelector('#card-holder');
let card_holder_card = document.querySelector('.name');
// card number
const card_number_input = document.querySelector('#card-number');
let card_number_card = document.querySelector('.card-number');
// MM month code (Exp date)
const expMonth_input = document.querySelector('.month');
let expMonth_card = document.querySelector('.month-card');
//  YY year code
const expYear_input = document.querySelector('.year');
let expYear_card = document.querySelector('.year-card');
// CVC
const cvc_input = document.querySelector('.cvc');
let cvc_card = document.querySelector('.cvc-number');
/////ERROR MESSAGES
let ERROR_1 = document.querySelector('.error1');
let ERROR_2 = document.querySelector('.error2');
let ERROR_3 = document.querySelector('.error3');
let ERROR_4 = document.querySelector('.error4');// confirm card btn.
// Display
let formDisplay = document.querySelector('.form_container');
let thankyouDisplay = document.querySelector('.Thankyou_message');
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
// EXP DATE (month) MOnTH
const InputMonth = () => {
    expMonth_card.innerText = expMonth_input.value;
    if (expMonth_card.innerText = expMonth_input.value) {
        expMonth_card.innerText = expMonth_input.value;
        expMonth_input.style.borderColor = "#dedddf";
        ERROR_2.style.visibility = "hidden";
    } else {
        expMonth_input.style.borderColor = "red";
        expMonth_card.innerText = "00";
        ERROR_2.style.visibility = "visible";
    }
}
// EXP DATE (month) MOnTH
const InputYear = () => {
        expYear_card.innerText = expYear_input.value;
    if (expYear_input.innerText = expYear_input.value) {
        expYear_card.innerText = expYear_input.value;
        expYear_input.style.borderColor = "#dedddf";
        ERROR_3.style.visibility = "hidden";
    } else {
        expYear_input.style.borderColor = "red";
        expYear_card.innerText = "00";
        ERROR_3.style.visibility = "visible";
    }
}
// CVC NUMBER CODE

const Inputcvc = () => {
    cvc_card.innerText = cvc_input.value;
    if (cvc_card.innerText = cvc_input.value) {
        cvc_card.innerText = cvc_input.value;
        cvc_input.style.borderColor = "#dedddf";
        ERROR_4.style.visibility = "hidden";
    } else {
        cvc_input.style.borderColor = "red";
        cvc_card.innerText = "000";
        ERROR_4.style.visibility = "visible";
    }
}

const chanegedisplay = () => {
    formDisplay.style.display = "none";
    thankyouDisplay.style.display = "flex";

}



add_card.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("you clicked it");
    inputName();
    inputNumber();
    InputMonth();
    InputYear();
    Inputcvc();
    // chanegedisplay();
})

function printfunction() {
    
}  

