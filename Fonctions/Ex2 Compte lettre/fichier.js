var ph = prompt("Donnez une phrase");
var ltr = prompt("quelle lettre chercher vous?");
var nb = ph.length;
var i = 0;
var res = 0;
    for(i; i<=nb; i++){
        if (ph[i]==ltr){
            res++;
        }
    }    document.write("il y a "+res+" de lettres dans votre phrase");
    