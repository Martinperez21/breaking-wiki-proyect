const url = "https://www.breakingbadapi.com/api/characters"


var mejorNumeroRandom = (desde, hasta) => { return Math.random() * (hasta - desde) + desde }



document.querySelector(".row").classList.add("d-none")

//genera un numero alazar entre el 0 y el 62, para elegir un personaje de la api
var random = Math.trunc(mejorNumeroRandom(0,62))

var random2 = Math.trunc(mejorNumeroRandom(0,62))

fetch (url)

.then(response => response.json())
.then (data =>{     
    document.querySelector(".titulo").classList.remove("d-none")
    document.querySelector(".row").classList.remove("d-none")
    document.querySelector(".spinner").classList.add("d-none")

    //completa la informacion de la primera card
    var elementoNombre = document.querySelector("#nombre")
    elementoNombre.innerText  = data[random].name;
    var elementoActor = document.querySelector("#actor")
    elementoActor.innerText  = data[random].portrayed;
    var elementoImagen = document.querySelector(".card-img-top").setAttribute("src", data[random].img)
    

    //completa la informacion de la segunda card
    var elementoName = document.querySelector("#name")
    elementoName.innerText  = data[random2].name;

    var elementoPortrayed = document.querySelector("#portrayed")
    elementoPortrayed.innerText  = data[random2].portrayed;

    var elementoImg = document.querySelector("#imagen").setAttribute("src", data[random2].img)
    
    
})


var valuefloat = Math.random() * (100 - 0) + 0;
var value = valuefloat.toFixed()


function BarraProgreso() {
    let progress = document.getElementById("progress-bar");
    progress.style.width = value + '%';
    var valor = document.getElementById("valorcomp");
    valor.innerHTML = value + '%'; 
  }


function frase_compatibilidad(){
    var frase = document.getElementById("frase-comp")
    if (value > 0){
        frase.innerHTML = '" Por ahí no es :( "'
    }
    if (value > 25){
        frase.innerHTML = '" Con esfuerzo capaz se te da "' 
    }
     if (value > 50){
        frase.innerHTML = '" Epa, puede funcionar, con probar no se pierde "' 
    }
     if (value > 80){
        frase.innerHTML = '" Son el uno para el otro "' 
    }
}
frase_compatibilidad();
BarraProgreso();