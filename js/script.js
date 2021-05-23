let form = document.querySelector(".js-form");
let amount = document.querySelector(".js-amount");
let convertFrom = document.querySelector(".js-convertFrom");
let convertTo = document.querySelector(".js-convertTo");
let score = document.querySelector(".js-score");
let button = document.querySelector(".js-button");


convertFrom.addEventListener("input", () => {
  convertTo.value = convertFrom.value === "pln" ? "eur" : "pln";
});

convertTo.addEventListener("input", () => {
  convertFrom.value = convertTo.value === "pln" ? "eur" : "pln";
});

let eurRate = 4.56;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let myAmount = amount.value;
  let convertFromElement = convertFrom.value;

  score.innerText = ((convertFromElement === "pln")
  ? (myAmount / eurRate).toFixed(2) : (myAmount * eurRate).toFixed(2));

  });

