var lt = prompt("mot?");
var n = lt.length;
var i = 0;
var res = 0;
for (i;i<n;i++){
    if ((lt[i]=="a")||(lt[i]=="e")||(lt[i]=="i")||(lt[i]=="o")||(lt[i]=="u")||(lt[i]=="y")){
        res++;        
    }
}
alert(res);



