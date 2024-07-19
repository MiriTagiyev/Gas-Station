let Diesel = 1.2,
  GasolineA95 = 2.2,
  GasolineA92 = 1.6;

let line = "\r\n";
let choice = prompt(`1. Diesel ${line}
2. Gasoline A95   ${line}
3. Gasoline A92  ${line}
`);

let choiceLitr = +prompt("How many liters will be added?");
let balance = +prompt("Enter your balance");

if (choice === "1") {
  let amountToPay = Diesel * choiceLitr;
  if (amountToPay < balance) {
    balance = balance - amountToPay;
    alert("Operation successful. Balance " + balance);
  } else {
    alert(
      "Operation unsuccessful. " +
        line +
        "Amount needed: " +
        (amountToPay - balance)
    );
  }
}
if (choice === "2") {
  let amountToPay = GasolineA92 * choiceLitr;
  if (amountToPay < balance) {
    balance = balance - amountToPay;
    alert("Operation successful. Balance " + balance);
  } else {
    alert(
      "Operation unsuccessful. " +
        line +
        "Amount needed: " +
        (amountToPay - balance)
    );
  }
}
if (choice === "3") {
  let amountToPay = GasolineA95 * choiceLitr;
  if (amountToPay < balance) {
    balance = balance - amountToPay;
    alert("Operation successful. Balance " + balance);
  } else {
    alert(
      "Operation unsuccessful. " +
        line +
        "Amount needed: " +
        (amountToPay - balance)
    );
  }
}
