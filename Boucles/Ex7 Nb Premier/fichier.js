var n = parseInt(prompt("Donner un nombre"));
var i = 3;
var res = false;
if (n<=1){
    res=true;
}else if(n==2){
    res=false;
}else if (n%2==0){
    res=true;
}else{
    for (i; (i<=n/i); (i=i+2)){
        if(n%i==0){
            res=true;
        }
    }
}if (res==true){
    alert("Ce nombre n'est pas premier")
}else if (res==false){
    alert("Ce nombre est premier")
}