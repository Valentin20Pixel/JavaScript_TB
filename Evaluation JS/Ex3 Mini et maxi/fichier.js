var tab = [];
var nb = 0;
var i = 0;
var som = 0;
var res = 0;
var k = 0;
var j = 0;
var temp = 0;
var isChanged = false
for (i; tab[i - 1] != 0; i++) {
    nb = parseInt(prompt("Saisissez un nombre\nSaisissez 0 pour arrêter"));
    tab[i] = nb;
    console.log(tab);
}
for (i = 0; tab[i] != 0; i++)
    som = som + parseInt(tab[i]);

res = som / i;
alert("Somme: " + som + "\nMoyenne: " + res);
for (k = 0; k < i; k++) {
    for (j = 0; j < i; j++) {
        console.log(tab[j + 1] + "/" + (tab[j]))
        if (tab[j] > tab[j + 1]) {
            temp = tab[j];
            tab[j] = tab[j + 1];
            tab[j + 1] = temp;
            isChanged = true
        }
    }
    if (isChanged = false)
        break
} alert("Le mini est : " + tab[1] + "\nLe max est : " + tab[j])