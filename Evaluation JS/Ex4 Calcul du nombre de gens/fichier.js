var tab = [];
var i = 0;
var jeu = 0;
var adu = 0;
var vie = 0;
while (tab[i - 1] != 100) {
    tab[i] = parseInt(prompt("Entrez un age"));
    if (tab[i] < 20) {
        jeu++;
    } else if (tab[i] > 40) {
        vie++;
    } else {
        adu++;
    }
    i++;
}
alert("Dans votre groupe il y a " + jeu + " de jeunes ," + adu + " d'adultes et " + vie + " vieux")