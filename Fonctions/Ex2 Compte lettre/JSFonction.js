var ph=prompt("Ecrire une phrase svp");
var ltr=prompt("Quelle lettre chercher vous?");
function compte (ltr, ph){
    var nb=ph.length;
    var i=0;
    var res=0;
    for(i; i<=nb; i++){
        if (ph[i]==ltr){
            res++;
        }
    }
    return res
}
var resultat=compte(ltr, ph)
alert("il y a "+resultat+" de lettres dans votre phrase");