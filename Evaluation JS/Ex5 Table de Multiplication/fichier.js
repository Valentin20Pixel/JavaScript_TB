var x = parseInt(prompt("Ecrire un nombre dont vous voulez la table de multiplication"))
alert("Vous avez choisi la table des " + x)
function TableMultiplication() {
    var res = 0
    var i = 1
    var n = 10
    for (i; i <= n; i++) {
        res = i * x;
        alert(+i + "x" + x + "=" + res)
    }
}
TableMultiplication(x)