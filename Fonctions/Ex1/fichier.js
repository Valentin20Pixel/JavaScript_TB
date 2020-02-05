var y = window.prompt("donnez un chiffre");
var x = window.prompt("donnez un autre chiffre");
function cube(y){
    var res = Math.pow(y, 3);
    return res;
}
var result = cube (y);
document.write("le cube de "+y+" est egale à "+result+"<br/>");

function produit(y, x){
    var ress = y*=x
    return ress
}
var resultat = produit (y, x)
document.write("Le produit de "+y+" X "+x+" est egale à "+resultat)
var img1 = new Image();
img1.src = "img/papillon.pjg";




