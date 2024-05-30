var prenom,
  monNom = "Loir";
alert(monNom);
var prenomPourMonProjet;

// - - 2 : Affecter une valeur à une variable
prenom = "Maxime";

alert(prenom);

console.log(prenom);

document.write(monNom + "<br>");
document.write(prenom + "<br>");
document.write("RADWIMPS !" + "<br>");

var jourSemaine = window.prompt(
  "Question : on est quel jour?",
  "jour de la semaine" + "<br>"
);

document.write(jourSemaine);
console.log("jour de la semaine");
console.log("Mercredi");
console.log(jourSemaine);

var variable = "ma variable";
var unChiffre = 2;
var cetteAnnee = 2024;
var stringAddition = "2+5";
var addition2Number = 2 + 6;

alert(variable);
document.write(unChiffre);
console.log(cetteAnnee, stringAddition, addition2Number);

// type variables
// 1- string "maison"
// 2- interger : 4, 5, ...
// 3- boolean true / false
// 4- float 12,56

// console.log(typeof stringAddition);
var convertNumberToString = addition2Number.toString();
console.log(typeof addition2Number);
console.log(typeof convertNumberToString);
