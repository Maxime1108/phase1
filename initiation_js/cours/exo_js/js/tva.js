// Demander à l'utilisateur de saisir un prix hors taxes
var prixHt = parseFloat(prompt("Entrez le prix hors taxes :")).toFixed(2);

console.log(typeof prixHt);
var tauxTva = 0.2;
var tva = prixHt * tauxTva;
var ttc = prixHt + tva;
console.log(ttc);
document.write(ttc);
