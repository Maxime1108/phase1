// var prenom = "Maxime";
// alert(prenom);

// var texte = window.prompt("Insérez un texte");
// document.write("<h1>" + texte + "</h1>");

// type variable boolean : true or false

// var unBooleanTrue = true;
// var unBooleanFalse = false;
// if (unBooleanTrue) {
//   document.write(prenom);
// }

// if (unBooleanFalse) {
//   document.write("Ceci est faux!");
// }

// var num1 = 50;
// var num2 = 5;
// var num3 = 10;
// var num4 = 12.5;

// if ((num1 / num3) != num4) {
//     document.write ("le résultat de la division" + num1 +"par" + num3 + "est" + num2)
// }

var age = 18;
var texte = window.prompt("Saisisez votre âge");
console.log(typeof texte);
texte = parseInt(texte);
console.log(typeof texte);
if (texte >= age) {
  alert("bienvenue!");
} else {
  alert("Vous serez redirigé vers un autre site.");
  document.location.href = "http://www.darty.com/";
}
