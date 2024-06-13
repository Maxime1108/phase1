// j'ai declarer une variable "nom", j'ai executer la fontion prompt de JS
// la fontion prompt a deux roles principaux:
//  1- affichage d'une boite de dialogue avec un champ de formulaire.
// 2- retour de la valeur de saisie dans le champ de formulaire.
// j'ai affectée la valeur de retour de la fonction prompt a ma variable " nom "
//  Conculsion : grâce a la syntaxe suivante la valeur de la variable " nom ", sera la valeur saisie dans le champ de formulaire.

var nom = prompt("Insérez votre nom");
var prenom = prompt("Insérez votre prénom");

alert("Bonjour " + nom + " " + prenom);
