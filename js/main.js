const add_card = document.getElementById("add-card");
// card btn
const card_holder_input = document.querySelector("#card-holder");
let card_holder_card = document.querySelector(".name");
// card number
let card_number = document.querySelector("#card-number");
let card_number_input = card_number;
let card_number_card = document.querySelector(".card-number");
// MM month code (Exp date)
const expMonth_input = document.querySelector(".month");
let expMonth_card = document.querySelector(".month-card");
//  YY year code
const expYear_input = document.querySelector(".year");
let expYear_card = document.querySelector(".year-card");
// CVC
const cvc_input = document.querySelector(".cvc");
let cvc_card = document.querySelector(".cvc-number");
/////ERROR MESSAGES
let ERROR_1 = document.querySelector(".error1");
// let ERROR_2 = document.querySelector('.error2');
let ERROR_2A = document.querySelector(".error2a");
let ERROR_3 = document.querySelector(".error3");
let ERROR_4 = document.querySelector(".error4");
let ERROR_5 = document.querySelector(".error5"); // confirm card btn.
// Display
let formDisplay = document.querySelector(".form_container");
let thankyouDisplay = document.querySelector(".Thankyou_message");
let Span = document.querySelectorAll("span");
// CARD NAME CODE
const inputName = () => {
  card_holder_card.innerText = card_holder_input.value;
  if ((card_holder_card.innerText = card_holder_input.value)) {
    card_holder_card.innerText = card_holder_input.value;
    card_holder_input.style.borderColor = "#dedddf";
    ERROR_1.style.visibility = "hidden";
    nameAsteric.style.color = "green";
  } else {
    card_holder_card.innerHTML = "<span>xxxx&nbsp;  xxxxxx</span>";
    card_holder_input.style.borderColor = "red";
    ERROR_1.style.visibility = "visible";
    nameAsteric.style.color = "red";
  }
};

card_number.onkeypress = function () {
  if (card_number.value.length > 0) {
    if (card_number.value.length % 4 == 0) {
      card_number.value += "    ";
    }
  }
};

// CARD NUMBER CODE
const inputNumber = () => {
  card_number_card.innerText = card_number_input.value;
  if ((card_number_card.innerText = card_number_input.value)) {
    card_number_card.innerText = card_number_input.value;
    card_number_input.style.borderColor = "#dedddf";
    ERROR_2A.style.visibility = "hidden";
    numAsteric.style.color = "green";
  } else {
    card_number_card.innerText = "xxxx xxxx xxxx xxxx";
    ERROR_2A.style.visibility = "visible";
    card_number_input.style.borderColor = "red";
    numAsteric.style.color = "red";
  }
};
//
// EXP DATE (month) MOnTH
const InputMonth = () => {
  expMonth_card.innerText = expMonth_input.value;
  if ((expMonth_card.innerText = expMonth_input.value)) {
    expMonth_card.innerText = expMonth_input.value;
    expMonth_input.style.borderColor = "#dedddf";
    ERROR_3.style.visibility = "hidden";
    mthAsteric.style.color = "green";
  } else {
    expMonth_input.style.borderColor = "red";
    expMonth_card.innerText = "xx";
    ERROR_3.style.visibility = "visible";
    mthAsteric.style.color = "red";
  }
};
// EXP DATE (month) MOnTH
const InputYear = () => {
  expYear_card.innerText = expYear_input.value;
  if ((expYear_input.innerText = expYear_input.value)) {
    expYear_card.innerText = expYear_input.value;
    expYear_input.style.borderColor = "#dedddf";
    ERROR_4.style.visibility = "hidden";
    yrAsteric.style.color = "green";
  } else {
    expYear_input.style.borderColor = "red";
    expYear_card.innerText = "xx";
    ERROR_4.style.visibility = "visible";
    yrAsteric.style.color = "red";
  }
};
// CVC NUMBER CODE

const Inputcvc = () => {
  cvc_card.innerText = cvc_input.value;
  if ((cvc_card.innerText = cvc_input.value)) {
    cvc_card.innerText = cvc_input.value;
    cvc_input.style.borderColor = "#dedddf";
    ERROR_5.style.visibility = "hidden";
    cvvAsteric.style.color = "green";
  } else {
    cvc_input.style.borderColor = "red";
    cvc_card.innerText = "xxx";
    ERROR_5.style.visibility = "visible";
    cvvAsteric.style.color = "red";
  }
};


// let numCharacter1;
// numCharacter1 = card_number_card.innerText.substring(0, 4);


const changedisplay = () => {
  if (
    card_holder_card.innerText === card_holder_input.value &&
    card_number.value.substring(0, 4) === card_number_card.innerText.substring(0, 4) &&
    expMonth_card.innerText === expMonth_input.value &&
    expYear_card.innerText === expYear_input.value &&
    cvc_card.innerText === cvc_input.value
  ) {
    document.body.classList.add("success");
    }
   
  else {
    document.body.classList.remove("success");
  }
};



let userDetails = [];

const saveValue = () => {
  let content = {
    name: card_holder_input.value,
    cardNumber: card_number_input.value,
    expMonth: expMonth_input.value,
    expYear: expYear_input.value,
    cvcNumber: cvc_input.value,
  };
  userDetails.push(content);
  localStorage.setItem('User details', JSON.stringify(userDetails));
  console.log("User details", { userDetails });
};

let reload_page = document.querySelector(".reload_btn");
reload_page.addEventListener("click", () => {
  window.location.reload();
  // document.forms[0].reset();
  document.body.classList.remove("success");
});
add_card.addEventListener("click", () => {
  // event
  // event.preventDefault();
  console.log("you clicked it");
  inputName();
  inputNumber();
  InputMonth();
  InputYear();
  Inputcvc();
  changedisplay();
  saveValue();
 
});

function printfunction() {}
// *****
let nameAsteric = document.querySelector(".name-assteric");
let numAsteric = document.querySelector(".num-assteric");
let mthAsteric = document.querySelector(".mth-assteric");
let yrAsteric = document.querySelector(".yr-assteric");
let cvvAsteric = document.querySelector(".cvc-assteric");
