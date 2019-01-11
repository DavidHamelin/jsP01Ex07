function calculator()
{
    var shoeSize = document.getElementById('shoeSize').value;
    var yearOfBirth = document.getElementById('yearOfBirth').value;
    var result = ((((shoeSize *= 2) + 5) * 50) - yearOfBirth) + 1769;
    /* identique à ce calcul :
    shoeSize *= 2
    shoeSize + 5;
    shoeSize * 50;
    var result = (shoeSize - yearOfBirth) + 1769;*/

    var regexNum = /^[0-9.,]+$/i; /* n'accepte que les nombres */
    if (regexNum.test(shoeSize) == false) {
        alert('Pointure non valide')
    }
    else if (regexNum.test(yearOfBirth) == false) {
        alert('Année de naissance non valide')
    }
    else {
        alert(`La calculette a trouvé (après un calcul tordu) : ${result}`);
    }
}