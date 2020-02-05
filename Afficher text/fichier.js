var a = prompt('Entrez votre nom');
var b = prompt('Entrez votre prénom');
if(confirm("Es-tu un homme?")==true)
{
    alert("Bonjour Monsieur " + a + " " + b);
}
else
{
    alert("Bonjour Madame" + a + " " + b);
}