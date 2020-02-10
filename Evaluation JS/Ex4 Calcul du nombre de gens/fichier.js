var tab = [];
var i = 0;
var jeu = 0;
var adu = 0;
var vie = 0;
//  Je rempli le tableau si tab[i] est different de 100
while (tab[i - 1] != 100) {
    tab[i] = parseInt(prompt("Entrez un age"));
    // Je tris les ages dans les differentes variables declarer plus tot
    if (tab[i] < 20) {
        jeu++;
    } else if (tab[i] > 40) {
        vie++;
    } else {
        adu++;
    }
    i++;
};
alert("Dans votre groupe il y a " + jeu + " de jeunes ," + adu + " d'adultes et " + vie + " vieux");