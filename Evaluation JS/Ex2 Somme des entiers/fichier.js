var N = parseInt(prompt("Saisissez un nombre entier N"));
var i = 0;
var r = 0;
// je demarre une boucle qui vas incrementer mon compteur i
for (i; i <= N; i++)
// j'addition mon resultat precedent a mon compteur i
    r += i;
alert("la somme des entiers est de " + r);