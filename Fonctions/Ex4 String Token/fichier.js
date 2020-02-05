function strtok(){
    var str1=prompt("Donnez une liste de mots separé de ;");
    var str2=str1.split(';');
    var n=str2[prompt("Choisissez un Nième mot de votre liste")-1];
    return n;
}alert(strtok())
