// Déclarer deux variables n1: 10 et n2 : 5
// Utiliser les 4 opérateurs arithmétiques (+,-,*,/) et vérifier les résultats à partir de la console
// afficher le type dechaque résultat sur la console (terminal)

var n1 = 10;
var n2 = 5;

var result = n1 + n2;
console.log(result);
console.log(typeof result);

var result = n1 - n2;
console.log(result);
console.log(typeof result);

var result = n1 * n2;
console.log(result);
console.log(typeof result);

var result = n1 / n2;
console.log(result);
console.log(typeof result);

// -- 5. Modulo
// -- Le Modulo retourne le reste d'une Division
// -- Modulo nb1% nb2 avec l'opérateur "%"

resultat = n1 % n2;
console.log(resultat);

var n3 = 100;
var n4 = 17;
var resModulo = n3 % n4;
console.log(resModulo);

// Afficher le texte suivant sur la page du navigateur en utilisant les variables :
// "Le reste de la division de 100 par 17 est égale à : ?"

var text1 = "Le reste de la division de";
var text2 = "par";
var text3 = "est égale à : ";

var resultat = text1 + n3 + text2 + n4 + text3 + resModulo;
document.write(resultat);
