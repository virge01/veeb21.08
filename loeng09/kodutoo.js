
let kass = {
    nimi: "kass nimega Kiisu",
    varv: "kollakas",
    kuju: "piklik",
    omadus: "pehme",
    liik: "loom",
}

let koer = {
    nimi: "koer nimega Kuts",
    varv: "kirju",
    kuju: "piklik",
    omadus: "karvane",
    liik: "loom",
}

let jänes = {
    nimi: "jänes nimega Jänn",
    varv: "valge",
    kuju: "ümaram",
    omadus: "pehme",
    liik: "loom",
}

let karu = {
    nimi: "karu nimega Mõmm",
    varv: "pruunikas",
    kuju: "piklik", 
    omadus: "pehme ja karvane",
    liik: "loom",
}

function trykiLemmik(lemmik) {
    document.getElementById('sisu').innerHTML += `
    <div>
    Minu lemmik${lemmik.nimi} on ${lemmik.varv}, ta on ${lemmik.kuju} ja
    ${lemmik.omadus} ning ta on ${lemmik.liik}.      
    </div>    
    `
}

trykiLemmik(kass)
trykiLemmik(koer)
trykiLemmik(jänes)
trykiLemmik(karu)

let lemmikud = [ kass, koer, jänes, karu ]

for (let i = 0; i < lemmikud.length; i++) {
    let objekt = lemmikud[i]
    trykiLemmik(objekt)
}


console.log(`Minu lemmik ${kass.liik} on ${kass.värv} ja ${kass.kuju}`)
