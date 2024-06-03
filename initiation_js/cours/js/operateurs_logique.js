// alert("Chayma");

var prenom = window.prompt("Inserez votre prénom : ");
var prenom2 = "Amine";
var prenom3 = "Gustave";
var prenom4 = "Jawad";
var num1 = 20;
var age = 19;
var anneeCourante = 2024;
// document.write(prenom + "<br>");
console.log(prenom);

// if (prenom == prenom2 || prenom == prenom3) {
//   if (prenom == prenom2) {
//     document.write(prenom + " est égale à " + prenom2 + " !");
//   } else {
//     document.write(prenom + " est égale à " + prenom3 + " !");
//   }
// } else {
//   document.write(
//     prenom + " n'est égale ni à " + prenom2 + " ni à " + prenom3 + " !"
//   );
// }

// J'affiche un message sur la page du navigateur : Prenom est égale à Jawad et l'age est égale à 19 si la variable "prenom" est égale à la variable "prenom4" ET la variable "age" est égale à 19
if (prenom == prenom4 && age === num1) {
  document.write(
    prenom +
      " est égale à " +
      prenom4 +
      " et l'age : " +
      age +
      " est égale au chiffre : " +
      num1 +
      " !"
  );
} else if (prenom != prenom4 && age !== num1) {
  document.write(
    prenom +
      " n'est pas égale à " +
      prenom4 +
      " et l'age : " +
      age +
      " n'est pas égale au chiffre : " +
      num1 +
      " !"
  );
} else if (prenom != prenom4) {
  document.write(prenom + " n'est pas égale à " + prenom4);
} else {
  document.write(age + " n'est pas égale au chiffre : " + num1 + " !");
}
