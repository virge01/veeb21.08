function kontrolliVärvi() {

    const varv = prompt("Arva ära minu lemmikvärv")
    const minuLemmik = 'oranz'
    const valjundEl = document.getElementById("valjund")

    if (minuLemmik == varv) {
        valjundEl.innerHTML = "<h2 class='oranz'>Õnnitlused!</h2><div>See ongi minu lemmikvärv!</h2>"        
    } else {
        valjundEl.innerHTML = "<h2>Proovi uuesti</h2>"
        valjundEl.innerHTML += "<p>" + varv + " ei ole minu lemmik </p>"
        valjundEl.innerHTML += "<h3 class='oranz'>Sisesta uus värv.</h3>"
    }
}

    function valjastaNumbrid() {
        for (let i = 9; i >= 0; i-= 1) {
            console.log(i)
        }
}

valjastaNumbrid()
kontrolliVärvi()
       
