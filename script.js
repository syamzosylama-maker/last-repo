let equipe = null;
let progression = 0;
let parcours = [];

async function connecter() {
  equipe = document.getElementById("nomEquipe").value.trim();
  const data = await fetch("enigmes.json").then(r => r.json());
  if (!data[equipe]) {
    alert("Équipe inconnue !");
    return;
  }
  parcours = data[equipe];
  document.getElementById("connexion").style.display = "none";
  document.getElementById("carte").style.display = "block";
}

async function ouvrirIle(bat) {
  if (progression >= parcours.length) {
    document.getElementById("enigme").innerHTML = "<p>Aventure terminée !</p>";
    return;
  }
  const data = await fetch("enigmes.json").then(r => r.json());
  const chambre = parcours[progression];
  const enigme = data.enigmes[chambre];

  document.getElementById("enigme").innerHTML = `
    <h2>${bat} - Chambre ${chambre}</h2>
    <p>${enigme.question}</p>
    <input id="reponse" placeholder="Entrez le code">
    <button onclick="valider('${enigme.code}')">Valider</button>
  `;
}

function valider(code) {
  const reponse = document.getElementById("reponse").value.trim().toLowerCase();
  if (reponse === code.toLowerCase()) {
    alert("Bravo moussaillon !");
    progression++;
    if (progression >= parcours.length) {
      alert("🎉 Trésor trouvé !");
    }
  } else {
    alert("Essaie encore, matelot !");
  }
}
