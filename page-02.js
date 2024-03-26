document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les paramètres d'URL
  let urlParams = new URLSearchParams(window.location.search);
  let selectedRadioValue = urlParams.get("selectedValue");
  let message = " " + selectedRadioValue + " out of 5";

  // Afficher le message dans la carte de remerciement
  document.getElementById("thankYouMessage").textContent = message;
});
