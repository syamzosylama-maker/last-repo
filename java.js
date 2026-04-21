async function ouvrirIle(bat) {
  if (progression >= parcours.length) {
    document.getElementById("enigme").innerHTML = "<p>Aventure terminée !</p>";
    return;
  }

  const chambreData = parcours[progression];

  document.getElementById("enigme").innerHTML = `
    <h2>${bat} - Chambre ${chambreData.chambre}</h2>
    <p>${chambreData.question}</p>
    <input id="reponse" placeholder="Entrez le code">
    <button onclick="valider('${chambreData.code}')">Valider</button>
  `;
}
