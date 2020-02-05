var temperature = 43;
var tension = 26;
var pouls = 0;
if (temperature>38)
{
    alert("Le patient a de la fièvre");
}
if ((temperature>41) && (tension>25))
{
    alert("Le patient va perdre connaissance");
}
if ((temperature>42)||((tension<25)&&(pouls>180)))
{
    alert("Prevenir la famille");
}
if ((temperature>40)||(tension>=25))
{
    alert("Hospitaliser le patient");
}
if (pouls==0)
{
    alert("Appeler le curé");
}