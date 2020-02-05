function InitTab(tab){
    var b = parseInt(prompt ("Quelle est la taille pour le tableau?"));
    var tab =[b];
    return b ;
}
function GetInteger(i){
    return parseInt(prompt("Quelle valeur voulez-vous dans le tableau?"));
}
function SaisieTab(tab,b){
    var i = 0;
    while(i !=b){   
    tab [i]=GetInteger(i+1);
    i++;
    }
}
function AfficheTab ( tab,b ){
    var i = 0 ;
    while (i++ < b){
    alert(tab[i-1]) ;
    }
}
function RechercheTab (tab){
    var  n = parseInt(prompt ( "Quelle rangée du tableau?" ))-1;
    alert(tab[n]) ;
}
function InfoTab (tab,b){
    var max= 1;
    var i = 0;
    var res = 0;
    var moy = 0;
    for(i; i<b; i++){
        res = tab[i];
        moy += res;
// if(tab[i]>max){
//     max=tab[i];
// }
    }
    moy=moy/b;
    alert("le nombre le plus grand est "+Math.max(...tab)) ;
    alert("La moyenne du tableau vaut "+moy);
}
var tab = [];
var b = InitTab (tab) ;
SaisieTab (tab, b) ;
var  choix  =  prompt ("1- Afficher le contenu de tous les postes du tableau \n 2- Afficher le contenu d'un poste dont l'index est saisi au clavier \n 3- Afficher le maximum et de la moyenne des postes du tableau " ) ;
if ( choix  ==  1 ){
    AfficheTab (tab,b) ;
}else if ( choix  ==  2 ){
    RechercheTab (tab,b) ;
}else if ( choix  ==  3 ){
    InfoTab (tab,b) ;
}else{
    alert ( "Choix non compris" ) ;
}