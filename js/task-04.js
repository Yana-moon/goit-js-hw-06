const counterValue = 0;

const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector("#value");

const clickButtonDecr = (counterValue) => {
counterValue = Number.parseInt(currentValue.textContent);
counterValue--;
console.log(counterValue);
currentValue.textContent = counterValue;
return counterValue;
};

const clickButtonIncr = (counterValue) => {
counterValue = Number.parseInt(currentValue.textContent);
counterValue++;
console.log(counterValue);
currentValue.textContent = counterValue;
return counterValue;
};

buttonDecr.addEventListener("click", clickButtonDecr);
buttonIncr.addEventListener("click", clickButtonIncr);