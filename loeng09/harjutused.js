let apelsin = {
    nimi: "apelsin",
    varv: "oranz",
    kuju: "ümmargune",
    liik: "puuvili"
}

let banaan = {
    nimi: "banaan",
    varv: "kollane",
    kuju: "kumer",
    liik: "rohttaim"
}

let porgand = {
    nimi: "porgand",
    varv: "oranz",
    kuju: "koonus",
    liik: "juurvili"
}

function trykiLemmik(lemmik) {
    document.getElementById('sisu').innerHTML += `
    <div>
    Minu lemmik ${lemmik.nimi} on ${lemmik.varv} ja see on ${lemmik.kuju} ning ${lemmik.liik}    
    </div>    
    `
}

trykiLemmik(apelsin)
trykiLemmik(banaan)
trykiLemmik(porgand)

let lemmikud = [ apelsin, banaan, porgand]

for (let i = 0; i < lemmikud.length; i++) {
    let objekt = lemmikud[i]
    trykiLemmik(objekt)
}


console.log(`Minu lemmik ${apelsin.liik} on ${apelsin.värv} ja ${apelsin.kuju}`)