var nb = prompt("Ecrire une heure en HH:MM:SS");
var nb2 = prompt("Ecrire une autre heure a additionner en HH:MM:SS");
var tab = nb.split(":");
var tab2 = nb2.split(":");
var h=parseInt(tab[0])+parseInt(tab2[0]);
var m=parseInt(tab[1])+parseInt(tab2[1]);
var s=parseInt(tab[2])+parseInt(tab2[2]);
if(h>=24){
  h=0+(h-24);
  console.log(s,m,h)
}if(m>=60){
  m=0+(m-60);
  h++;
  console.log(s,m,h)
  if(h>=24){
    h=0;
  }
}if(s>=60){
  s=0+(s-60);
  m++;
  if(m>=60)
  h++;
  console.log(s,m,h)
}
alert("Il sera "+h+":"+m+":"+s)