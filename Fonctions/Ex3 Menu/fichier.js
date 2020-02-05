var choix=prompt( " 1- Multiples \n 2- Somme et moyenne \n 3- Recherche du nombre de voyelles \n 4- Recherche du nombre des cractères suivants \n Entrez votre choix:" );
if(choix==1){
    Multiples()
}else if(choix==2){
    Somme()
}else if(choix==3){
    Voyelles()
}else if(choix==4){
    Caract()
}else{
    alert("Choix non pris en compte")
}
function Multiples(){
    var n = parseInt(prompt("Ecrire un nombre entier N"));
    var x = parseInt(prompt("Ecrire un nombre entier X"));
    var res = 0;
    var i = 1;
        for (i;i<=n;i++){
        res=i*x;
        alert(i+"_ "+i+"x"+x+"="+res);
        }
}
function Somme(){
    var no = 1;
    var i = 0;
    var res = 0;
    while (no!=0){
        no=parseInt(prompt("Entrez une note"));
        res+=no;
        i++;
    }
    alert("la somme des nombres vaut "+res);
    res/=i;
    alert("la moyenne vaut "+res);
}
function Voyelles(){
    var lt = prompt("Donnez un mot");
    var n = lt.length;
    var i = 0;
    var res = 0;
    for (i;i<n;i++){
        if ((lt[i]=="a")||(lt[i]=="e")||(lt[i]=="i")||(lt[i]=="o")||(lt[i]=="u")||(lt[i]=="y")){
        res++;        
        }
    }
    alert("il y a "+res+" voyelles");
}
function Caract(){
    var ph=prompt("Ecrire une phrase svp");
    var ltr=prompt("Quelle lettre chercher vous?");
    var nb=ph.length;
    var i=0;
    var res=0;
    for(i; i<=nb; i++){
        if (ph[i]==ltr){
            res++;
        }
    }
    alert("il y a "+res+" de lettres dans votre phrase");
}
