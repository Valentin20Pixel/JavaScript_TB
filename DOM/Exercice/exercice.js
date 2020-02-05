function message(){
var prenom=document.getElementById("prenom");
var nom=prenom.value;
alert("vous avez saisie: "+nom);
}
function magic(){
var nb = document.getElementById("magicbox");
var n = nb.value;
var magic = parseInt(Math.random()*100);
while (magic!=n){
    if (magic<n){
        n=parseInt(prompt("Plus petit!! \nRecommence!!"));
    }else if (magic>n){
        n=parseInt(prompt("Plus grand!! \nRecommence!!"));
    }
}alert("Vous avez gagné!!")
}