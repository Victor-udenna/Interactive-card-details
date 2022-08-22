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
// let ERROR_2 = document.querySelector('.error2');
let ERROR_2A = document.querySelector('.error2a');
let ERROR_3 = document.querySelector('.error3');
let ERROR_4 = document.querySelector('.error4');
let ERROR_5 = document.querySelector('.error5');// confirm card btn.
// Display
let formDisplay = document.querySelector('.form_container');
let thankyouDisplay = document.querySelector('.Thankyou_message');
// All card content
// let card__text = document.querySelectorAll('.card-text');
// console.log(card__text);
// let card__input = document.querySelectorAll('.card_input');
// console.log(card__input);
// CARD NAME CODE
const inputName = () => {
        card_holder_card.innerText = card_holder_input.value;
    if (card_holder_card.innerText = card_holder_input.value) {
        card_holder_card.innerText = card_holder_input.value;
        card_holder_input.style.borderColor = "#dedddf";
        ERROR_1.style.visibility = "hidden";
    } else {
        card_holder_card.innerText = "XXXX  XXXXXXX";
        card_holder_input.style.borderColor = "red";
        ERROR_1.style.visibility = "visible";
    }
}
//
// CARD NUMBER CODE
const inputNumber = () => {
    card_number_card.innerText = card_number_input.value;
    if (card_number_card.innerText = card_number_input.value) {
        card_number_card.innerText = card_number_input.value;
        card_number_input.style.borderColor = "#dedddf";
        ERROR_2A.style.visibility = "hidden";
        // ERROR_2.style.visibility = "hidden";
    } else  {
        card_number_card.innerText = "xxxx xxxx xxxx xxxx";
        ERROR_2A.style.visibility = "visible";
        // ERROR_2.style.visibility = "hidden";
        card_number_input.style.borderColor = "red";
    }

}
//
// EXP DATE (month) MOnTH
const InputMonth = () => {
    expMonth_card.innerText = expMonth_input.value;
    if (expMonth_card.innerText = expMonth_input.value) {
        expMonth_card.innerText = expMonth_input.value;
        expMonth_input.style.borderColor = "#dedddf";
        ERROR_3.style.visibility = "hidden";
    } else {
        expMonth_input.style.borderColor = "red";
        expMonth_card.innerText = "xx";
        ERROR_3.style.visibility = "visible";
    }
}
// EXP DATE (month) MOnTH
const InputYear = () => {
        expYear_card.innerText = expYear_input.value;
    if (expYear_input.innerText = expYear_input.value) {
        expYear_card.innerText = expYear_input.value;
        expYear_input.style.borderColor = "#dedddf";
        ERROR_4.style.visibility = "hidden";
    } else {
        expYear_input.style.borderColor = "red";
        expYear_card.innerText = "xx";
        ERROR_4.style.visibility = "visible";
    }
}
// CVC NUMBER CODE

const Inputcvc = () => {
    cvc_card.innerText = cvc_input.value;
    if (cvc_card.innerText = cvc_input.value) {
        cvc_card.innerText = cvc_input.value;
        cvc_input.style.borderColor = "#dedddf";
        ERROR_5.style.visibility = "hidden";
    } else {
        cvc_input.style.borderColor = "red";
        cvc_card.innerText = "xxx";
        ERROR_5.style.visibility = "visible";
    }
}

const chanegedisplay = () => {
    if (cvc_card.innerText == cvc_input.value && expYear_card.innerText == expYear_input.value && expMonth_card.innerText == expMonth_input.value && card_number_card.innerText == card_number_input.value && card_holder_card.innerText == card_holder_input.value) {
        console.log("Nice");
        formDisplay.style.display = "none";
        thankyouDisplay.style.display = "flex";
    } 
    
    else {
        console.log(' opps')
        formDisplay.style.display = "block";
        thankyouDisplay.style.display = "none";
    }

}



add_card.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("you clicked it");
    inputName();
    inputNumber();
    InputMonth();
    InputYear();
    Inputcvc();
    chanegedisplay();
})

function printfunction() {
    
}  

