var n1 = parseInt(prompt("saisissez un nombre entier"));
var n2 = parseInt(prompt("Saisissez un 2éme nombre entier"));
var n3 = 0;
var r = 0;
if (n1>n2){
    n3=n1;
    n1=n2;
    n2=n3;
}
for (n1; n1<n2; n1++)
    r=r+ n1;

alert("la somme de l'intervalle est "+r)