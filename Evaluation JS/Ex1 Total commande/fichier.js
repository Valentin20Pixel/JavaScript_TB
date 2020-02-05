var PU = parseInt(prompt("Saisir le prix unitaire"));
var QTECOM = parseInt(prompt("Saisissez la quantité voulu"));
var PAP = 0;
var PORT = 0;
var REM = "";
var TOT = PU * QTECOM;
//  je m'occupe de la remise voir si le TOT est dans les bonnes conditions
if ((TOT >= 100) && (TOT <= 200)) {
    REM = "5%";
    TOT = TOT * 0.95;
} else if (TOT > 200) {
    REM = "10%";
    TOT = TOT * 0.90;
} else {
    REM = "0%"
    TOT = TOT
}
console.log(TOT)
// je regarde si TOT est bien inferieur a 500 et que PORT soit bien de minimum 6 
if (TOT < 500) {
    PORT = TOT * 0.02;
    if (PORT < 6) {
        PORT = 6;
    }
} PAP = TOT + PORT;
console.log(PAP)
alert("Frais de port: " + PORT + "\n" + "Remise: " + REM + "\n" + "Prix à payer: " + PAP)