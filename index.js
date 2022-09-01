const btnElement = document.querySelector(".convert-btn");
const inputElement = document.querySelector(".input-text");
const inputValueMeter = document.querySelector(".input-value-meter");
const inputValueLiter = document.querySelector(".input-value-liter");
const inputValueKilos = document.querySelector(".input-value-kilo");

const isNumber = () => {
  const value = inputElement.value;
  const valueToNumber = Number(value);
  if (!valueToNumber) {
    alert(
      "Please enter a number greater than 0. Decimals are seperated with a dot"
    );
  } else {
    displayInput();
  }
};

const displayInput = () => {
  const value = inputElement.value;
  const valueToNumber = Number(value);
  inputValueMeter.innerHTML = `<p>${valueToNumber} meters = ${(
    valueToNumber * 3.281
  ).toFixed(3)} feet | ${valueToNumber} feet = ${(
    valueToNumber * 0.3048
  ).toFixed(3)} meters </p>`;
  inputValueLiter.innerHTML = `<p>${valueToNumber} liters = ${(
    valueToNumber * 0.264
  ).toFixed(3)} gallons | ${valueToNumber} gallons = ${(
    valueToNumber * 3.785
  ).toFixed(3)} liters </p>`;
  inputValueKilos.innerHTML = `<p>${valueToNumber} kilos = ${(
    valueToNumber * 2.20462
  ).toFixed(3)} pounds | ${valueToNumber} pounds = ${(
    valueToNumber * 0.453592
  ).toFixed(3)} kilos </p>`;
};

const handleClickConvert = () => {
  isNumber();
};

btnElement.addEventListener("click", handleClickConvert);
