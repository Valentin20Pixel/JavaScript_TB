var tab = []
var nb = 1
var i = 0
var res = 0
while (nb!=0){
    nb=parseInt(prompt("Entrez un nombre"));
    tab [i] = nb
    res+=nb;
    i++;
}
console.log(tab)
window.alert("Vous avez saisi "+i+" nombres"+"\n"+"La somme des nombres vaut "+res+"\n"+"La moyenne vaut "+(res/=i));
