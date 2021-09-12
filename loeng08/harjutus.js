let i=1;
while ( i<=10) {
    console.log("NUmber: " + i)
    i += 1
}

let minuLemmik = ["apelsin", "mango", "mandariin"] 
let kasutajaLemmik  

//while ( minuLemmik != kasutajaLemmik) {
//    kasutajaLemmik = prompt("Sisesta enda lemmikpuuvili")
//    document.getElementById("vastus").innerText = "Sisestasid: " + kasutajaLemmik
//}
//loe sisestuselemendi väärtus
//kontrolli, kas on minu lemmik
//document.getElementById("vastus").innerText = "Õnnitlused, tubli,// arvasid ära!"

function minuLemmikudHTML(){
    let htmlText = ''
    for (let i=0; i < minuLemmik.length; i +- 1) {
        htmlText += '<li>' + minuLemmik[i] + '</li>'
    }
    htmlText += '</ul>'

    return htmlText
}

function arvaPuuvili() {
    kasutajaLemmik = document.getElementById("puuvili").value
    let vastus
    if (kasutajaLemmik == minuLemmik) {
        vastus = '<div class="oigeVastus">"Õnnitlused, arvasid ära"</div>'
    } else {
        vastus = "Ei ole õige. Proovi midagi oranzi"
    }
    document.getElementById("vastus").innerHTML = "Sisestasid:" + kasutajaLemmik + " - " + vastus
//    document.getElementById("vastus").innerHTML = `Sisestasid: ${kasutajaLemmik}
}

function enterVajutati(event) {
    if (event.code == "Enter") {
        arvaPuuvili()
    }
}