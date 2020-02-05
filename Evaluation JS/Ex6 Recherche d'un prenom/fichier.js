var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var nom = prompt("Un nom");
var pr = tab.includes(nom);
console.log(pr);
if (pr) {
    tab.splice(tab.indexOf(nom), 1);
    tab.push("");
}
else {
    while (!pr) {
        nom = prompt("Dommage Reessai");
        pr = tab.includes(nom);
    } tab.splice(tab.indexOf(nom), 1);
    tab.push("");
}
console.log(tab);