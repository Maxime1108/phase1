var heures = paresInt(window.prompt("Insérez une valeur pour l'heure : "));
while (heure < 0 || heure > 24 || isNaN(heure)) {
  heure = parseInt(
    window.prompt("Insérez une valeur correcte pour l'heure : ")
  );
}

var minutes = paresInt(window.prompt("Insérez une valeur pour l'heure : "));
while (minutes < 0 || minutes > 60 || isNaN(minutes)) {
  minutes = parseInt(
    window.prompt("Insérez une valeur correcte pour les minutes : ")
  );
}

var secondes = paresInt(
  window.prompt("Insérez une valure pour les secondes : ")
);
while (secondes < 0 || secondes > 60 || isNaN(secondes)) {
  secondes = parseInt(
    window.prompt("Insérez une valeur correcte pour les secondes : ")
  );
}

secondes++;
if (secondes == 60) {
  secondes = 0;
  minutes++;
  if (minutes == 60) {
    minutes = 0;
    heures++;
    if (heure == 24) {
      heure = 0;
    }
  }
}
