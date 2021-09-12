
function looMatkaHtml(matk) {
    return `
    <div class="col-md-4 card">
       <img class="card-img-top" src="./pildid/Image.png" alt="">  
       <div class="card-body">
           <h4 class="card-title" >${matk.nimetus}</h4>
           <p>
           ${matk.kirjeldus}
           </p>                        
           <a href="#" class="btn btn-primary">Registreeru</a>
       </div> 
    </div>         
    `
}

const matk1 = {
    nimetus: "Kevadmatk Kõrvemaal",
    kirjeldus: "Lähme kõnnime looduses"
    
}

const matk2 = {
    nimetus: "Rattamatk teedel",
    kirjeldus: "Väntame iga päev"
}

const matk3 = {
    nimetus: "Kepikõnnimatk ümber järve",
    kirjeldus: "14 km jalutuskäik"
}

const matkad = [matk1, matk2, matk3]
document.getElementById('matkad').innerHTML = matk1Html
for (const matk of matkad) {
    document.getElementById('matkad').innerHTML += looMatkaHtml(matk)
}