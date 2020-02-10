var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var NomM = prompt("Ecrivez un nom de ce groupe pour le supprimez: \n" + tab);
// J'utilise charAt(1) pour selectionner le premier caractere et toUpperCase() pour le mettre en Majuscule
// et slice(1) pour separer le reste du nom pour ne pas le mettre en majuscule
var nom = NomM.charAt(0).toUpperCase() + NomM.slice(1);
var pr = tab.includes(nom);
console.log(pr);
if (pr) {
    // j'utilise splice pour retirer l'elements de mon tableau et push pour un integrer un espace a la fin du tableau
    tab.splice(tab.indexOf(nom), 1);
    tab.push("");
} else {
    while (!pr) {
        // si la saisis de nom n'est pas correcte je redemande de saisir un nom jusqu'a ce qui soit bon
        NomM = prompt("Dommage Reessai");
        nom = NomM.charAt(0).toUpperCase() + NomM.slice(1);
        pr = tab.includes(nom);
        if (nom == null)
            break;
    };
    if (pr) {
        tab.splice(tab.indexOf(nom), 1);
        tab.push("");
    };
};
alert(tab);