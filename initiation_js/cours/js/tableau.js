// var fruits;
// fruits = ["Apple", "Banana"];

// var tailleTab = fruits.length;
// console.log(tailleTab);
// console.log(fruits[1]);
// console.log(fruits[tailleTab - 1]);

// var couleurs = ["cyan", "rose", "blanc"];

// for (var i = 0; i < couleurs, length; i++) {
//   console.log(couleurs[i]);
// }
// console.log(couleurs.length);

// for (var i = 4; i >= 0; --i) {
//   console.log(couleurs[i]);
// }

// for (let i = 10; i >= 0; i--) {
//   document.write(i + "<br>");
// }

fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
console.log(fruits);
console.log(newLength);

//Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

//Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//Ajouter au début du tableau
var newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];

console.log(fruits);
console.log(newLength);
