var max = parseInt(prompt("Donner la taille MAX de votre tableau"));
var tab = Array(max);
var j = 1;
for(j=1;j<=max;j++){
    tab[j-1]=nbp()
}
function nbp (){
    var n = j;
    var i = 3;
    if(n==2){
        return 1;
    }
    else if((n<=1)||(n%2==0)){
        return 0;
    }
      else {
            for (i; (i<=n/i); (i=i+2)){
            if(n%i==0){
                return 0;
            }
        }
    }
    return 1;
}
alert(tab)
