const inputName = document.getElementById("nameField");
const inputKm = document.getElementById("kmField");
const inputAge = document.getElementById("ageField");
const button = document.getElementById("calculate");
const price = document.getElementById("price");
const passengerName = document.getElementById("passengerName");
const priceForKm = 0.21;

button.addEventListener("click", function (e) {
  e.preventDefault();
  const km = parseFloat(inputKm.value);
  if (isNaN(km) || km <= 0) {
    alert("Per favore inserisci un numero valido di chilometri.");
  } else if (inputName.value === "") {
    alert("Per favore inserisci un nome valido.");
  } else {
    let ticketPrice = inputKm.value * priceForKm;
    passengerName.innerText = inputName.value.trim();
    price.innerText = ticketPrice.toFixed(2) + " €";
  }
});
