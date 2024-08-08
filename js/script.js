// Recupero gli elementi dall'html
const inputName = document.getElementById("nameField");
const inputKm = document.getElementById("kmField");
const inputAge = document.getElementById("ageField");
const button = document.getElementById("calculate");
const clearButton = document.getElementById("clearButton");
const price = document.getElementById("price");
const passengerName = document.getElementById("passengerName");
const carriageNumb = document.getElementById("carriageNumb");
const cpNumb = document.getElementById("cpNumb");
const priceForKm = 0.21;

// Evento del bottone "Genera"
button.addEventListener("click", function (e) {
  e.preventDefault();
  const km = parseFloat(inputKm.value);
  // Controllo che il campo km contenga un numero e che sia maggiore di 0
  if (isNaN(km) || km <= 0) {
    alert("Per favore inserisci un numero valido di chilometri.");
    // Controllo che il campo nome non sia vuoto
  } else if (inputName.value === "") {
    alert("Per favore inserisci un nome valido.");
  } else {
    let ticketPrice = inputKm.value * priceForKm;
    // Applico eventuali sconti
    if (inputAge.value === "minorenne") {
      ticketPrice -= ticketPrice * 0.2;
    } else if (inputAge.value === "senior") {
      ticketPrice -= ticketPrice * 0.4;
    }
    // Riempio i campi
    passengerName.innerText = inputName.value.trim();
    price.innerText = ticketPrice.toFixed(2) + " €";
    carriageNumb.innerText = Math.floor(Math.random() * 9) + 1;
    cpNumb.innerText = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  }
});

// Evento del bottone "Pulisci"
clearButton.addEventListener("click", function (e) {
  e.preventDefault();
  passengerName.innerText = "";
  price.innerText = "";
  inputName.value = "";
  inputKm.value = "";
  carriageNumb.innerText = "";
  cpNumb.innerText = "";
});
