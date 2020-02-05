var no = 1
var i = 0
var res = 0
while (no!=0){
    no=parseInt(prompt("Entrez une note"));
    res+=no;
    i++;
}
alert("la somme des nombres vaut "+res);
res/=i;
alert("la moyenne vaut "+res);