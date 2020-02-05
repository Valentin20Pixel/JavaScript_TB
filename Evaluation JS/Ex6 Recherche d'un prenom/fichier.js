var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var nom = prompt("Ecrivez un nom de ce groupe pour le supprimez: \n"+tab);
var pr = tab.includes(nom);
console.log(pr);
if (pr) {
    tab.splice(tab.indexOf(nom), 1);
    tab.push("");
}else{
    while (!pr) {
        nom = prompt("Dommage Reessai");
        pr = tab.includes(nom);
        if(nom==null);
        break;
    } if(pr){
        tab.splice(tab.indexOf(nom), 1);
        tab.push("");
    }
}
alert(tab);