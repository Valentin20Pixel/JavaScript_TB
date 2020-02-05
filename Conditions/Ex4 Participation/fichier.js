var sit = window.confirm("Etes vous celibataire?");
var enf = prompt("Combien d'enfant avez vous?");
var sal = prompt("Quelle est votre salaire mensuel?");
var i = 0
if (sit=true){
    i=20;
}else{
    i=25
}if (enf>=1){
    i=i+(enf*10)
}if (sal<1200){
    i=i+10
}if (i>50){
    i=50
    alert("Plafonné a 50%")
}else{
    alert(i)
}