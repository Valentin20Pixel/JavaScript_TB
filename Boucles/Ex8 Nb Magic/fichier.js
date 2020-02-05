var n = parseInt(prompt("Donnez un nombre"));
var magic = parseInt(Math.random()*100);
while (magic!=n){
    if (magic<n){
        n=parseInt(prompt("Plus petit!! \nRecommence!!"));
    }else if (magic>n){
        n=parseInt(prompt("Plus grand!! \nRecommence!!"));
    }
}alert("Vous avez gagné!!")