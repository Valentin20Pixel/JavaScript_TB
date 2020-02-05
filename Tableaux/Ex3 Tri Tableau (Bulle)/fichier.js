var b=parseInt(prompt('taille du tableau?'));
var tab=[b];
var i=0;
var j=0;
var temp=0;
// var isChanged=false
for(i;i<b;i++){
    tab[i]=parseInt(prompt('Valeurs du tableau'));
}
for(i=0;i<b;i++){
    for(j=0;j<b;j++){
        console.log(tab[j+1]+"/"+(tab[j]))
        if(tab[j]>tab[j+1]){
            temp=tab[j];
            tab[j]=tab[j+1];
            tab[j+1]=temp;
            // isChanged=true
        }
    }
    // if(isChanged=false)
    //     break
}
    alert(tab)