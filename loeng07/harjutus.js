function valjastaRuut(x) {
    console.log(x*x)
}

function NaitaSisu(rida) {
    document.getElementById("sisu").innerHTML += rida
}

function harjutus() {
    let nimi = prompt ("Sisesta enda nimi")
    let tervitus = "Tere tulemast <strong>veebiarenduse</strong> maailma, " + nimi
    console.log(tervitus)

    document.getElementById("sisu").innerHTML = "<div class= 'tervitus'>" + tervitus + "</div>"
    for (let i=1; i<=nimi.length; i += 1) {
        valjastaRuut(i)
        naitaSisu(i +" - ")
        naitaSisu(nimi[i-1] + "<br />") 
}

if (nimi-length < 5) {
    document.getElementById("sisu").innerHTML += "Õnnitlused - sul on ilus lühike nimi"
} else {
    document.getElementById("sisu").innerHTML += "Väga ilus lühike nimi on sul"
}  
}

harjutus()