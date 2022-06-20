// init variables
const initialAmount = document.getElementById("initial");
const interest = document.getElementById("interest");
const years = document.getElementById("years");

// display
const display = document.getElementById("interestAmount");

// getting interest type selected option
let select = document.getElementById("interestType");
let option = select.value;

// getting compound type option
let compoundSelect = document.getElementById("compounded");
let compoundOption = compoundSelect.value;

const btnCalc = document.getElementById("calculate");
btnCalc.addEventListener("click", (P, i, n) => {
  P = initialAmount.value;
  i = interest.value;
  n = years.value;

  // Simple
  if ((option.value = "simple")) {
    let SI = P * (1 + i * n);
    display.innerHTML = SI;

    // Compound interest
  } else if ((option.value = "compound")) {
    // amount of times compounded
    let r = 0;

    if ((compoundOption.value = "4")) {
      r = 4;
    } else if ((compoundOption.value = "6")) {
      r = 6;
    } else if ((compoundOption.value = "12")) {
      r = 12;
    }
    // Compound
    let CI = P * (Math.pow(1 + i / r), r * n) - P;
    display.innerHTML = CI;
  }
});

const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
  initialAmount.value = "";
  interest.value = "";
  years.value = "";
  display.innerHTML = "";
  select.options[(select.selectedIndex = 0)];
  compoundSelect.options[(compoundSelect.selectedIndex = 0)];
});

// copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML = `
&copyAbdus-Samad Charles ${Year}
`;
