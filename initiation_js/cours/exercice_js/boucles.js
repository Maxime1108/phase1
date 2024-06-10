// for (var i = 1; i <= 10; i += 2) {
//   document.write("<p>Instruction exécutée : " + i + "</p>");
// }

// for (var j = 1; j <= 10; j++) {
//   document.write("<p> Instruction exécutée : " + j + "<p>");
// }

// for (var i = 1; i <= 10; i += 2) {
//   document.write("<p> Instruction exécutée : " + i + "</p>");
// }

// var tps = 0;

// for (var mesSous = 1000; mesSous <= 2000; mesSous += 50) {
//   document.write("<p>Sous sur mon compte épargne : " + mesSous + "</p>");
//   tps++;
// }
// document.write("<p> la valeur de votre compte épargne");

var age = prompt("Veuillez entrer votre âge:");

while (true) {
  age = parseInt(age, 10);

  if (age && age >= 3 && age <= 120) {
    break;
  }

  age = prompt("Âge invalide. Veuillez sasir votre âge");
}

if (age >= 18) {
  alert("Bienvenue, vous êtes autorisé à accéder au site !");
} else {
  alert("Refus d'accès. Allez plutôt regarder des animés.");
  document.location.href = "https://www.crunchyroll.com/fr/"; // Remplacez par le site souhaité
}

// // 1- Je déclare la majorité légale "majoriteFR" avec la valeur 18
// 2- Je demande l'age de l'utilisateur
// 3- Je déclare une variable "age" et j'affecte le la réponse de l'utilisateur à cette variable
// 4- Je convertie la réponse de l'utilisateur, qui est en chaîne de caractère en type "number", en utilisant la fonction "parseInt" par défaut de JS, car la boîte de dialogue du formulaire nous retourne toujours un type de chaîne de caractère, même si la valeur saisie est un chiffre :
// var age = parseInt(prompt('message'));

// version 2 :

// var age = prompt('message');

// age = parseInt(age);

// 6- J'utilise la boucle "while" et j'affecte une condition afin de vérifier si la valeur de la réponse et (inférieur ou égale à 3) ou bien (suppérieur ou égale à 120). Tant que l'utilisateur ne saisie pas une valeur entre 4 et 119, la boîte de dialogue s'affichera
// 7- Dans le cas contraire et en dehors de la boucle, je vérifie si l'age est suppérieur ou égale à 18 et inférieur à 120 : dans ce cas j'aurai le message :  "Bienvenue, vous êtes majeur" sinon : j'affiche une boîte de dialogue "Allez voir un autre super site..." et la redirection vers mon site préféré : "https://fr.boohoo.com/"
