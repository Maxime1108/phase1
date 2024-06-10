// var prenom = "Maxime";
// alert(prenom);

// var texte = window.prompt("Quel est votre prénom ?");

// var age = 18;
// var texte = window.prompt("Saisisez votre âge");
// console.log(typeof texte);
// texte = parseInt(texte);
// console.log(typeof texte);
// if (age >= texte) {
//   alert("bienvenue!");
// } else {
//   alert("Attention, prénom non reconnu");
// }

// 1- Afficher deux champs de formulaires à l'aide de la fonction prompt
// 2- Convertir les valeurs de retour des fonctions prompt aux valeurs numérique, grâce à la fonction "parseInt"
// 3- Affecter les valeurs de retours, chacune dans une variable : num1, num2
// 4- La partie comparaison : c'est à vous de développer

var num0 = "16";
var num0 = 16;
num0 = parseInt(num0);
// Le type de la variable "num1" est "string"
var num1 = window.prompt("Insérez la première valeur numérique !");
console.log(
  "Le type de la valeur de retour de la fonction 'prompte' : " + typeof num1
);
// Pour appliquer les opérations arythmétique à une variable, il faut absolument convertir le type de cette variable à un valeur numérique, grâce à la fonction parseInt ou bien la fonction "parseFloat"
num1 = parseInt(num1);
console.log(
  "Le type de la valeur de retour de la fonction 'parseInt' : " + typeof num1
);
// var
var num2 = window.prompt("Insérez la deuxième valeur numérique !");
num2 = parseInt(num2);

if (num1 < num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est inférieur de la valeur du deuxième chiffre : " +
      num2
  );
} else if (num1 > num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est supérieur de la valeur du deuxième chiffre : " +
      num2
  );
} else if (num1 == num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est égale de la valeur du deuxième chiffre : " +
      num2
  );
}
