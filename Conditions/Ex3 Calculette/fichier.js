var a = prompt("Saisisser un nombre entier");
var b = prompt("Saisisser un autre nombre entier");
var c = prompt("Saisisser un operateur");
if (c=="+")
{
    alert(parseInt(a)+parseInt(b))
}
else if (c=="-")
{
    alert(parseInt(a)-parseInt(b))
}
else if (c=="*")
{
    alert(parseInt(a)*parseInt(b))
}
else if (c=="/")
{
    alert(parseInt(a)/parseInt(b))
}
else
{
    alert("Erreur!!")
}