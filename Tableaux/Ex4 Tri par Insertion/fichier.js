var tab = [666,1,7,69,33,13];
var array = tab;
var j = 1;
var n = array.length;
while(j!=n){
    i=j-1;
    tmp=array[j];
    while((i>-1)&(array[i]>tmp)){
        array[i+1]=array[i];
        i=i-1;
    }
    array[i+1]=tmp;
    j=j+1;
}console.log(tab);