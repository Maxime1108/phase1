var prenom = "Maxime";
alert(prenom);

var texte = window.prompt("Quel est votre prénom ?");

var age = 18;
var texte = window.prompt("Saisisez votre âge");
console.log(typeof texte);
texte = parseInt(texte);
console.log(typeof texte);
if (age >= texte) {
  alert("bienvenue!");
} else {
  alert("Attention, prénom non reconnu");
}
