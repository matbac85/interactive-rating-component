document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêcher la soumission par défaut

  let selectedRadioValue = document.querySelector(
    'input[type="radio"]:checked'
  ).value;

  // Rediriger vers la page-2 en ajoutant la valeur en tant que paramètre d'URL
  window.location.href =
    "page-02.html?selectedValue=" + encodeURIComponent(selectedRadioValue);
});
