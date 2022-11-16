const spinner = document.querySelector("#spinner");
const pre = document.getElementById("prev");
const next = document.getElementById("next");

let limit = 8 
let offset = 0

next.addEventListener("click", () => {
    limit += 8  
    fetch_characters(limit, offset)
});

pre.addEventListener("click", () =>  {
   if(limit != 1) {
       limit -= 8
       fetch_characters(limit, offset)
   } 
});

function fetch_characters() {
  fetch(`https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      // This is an array so we have to loop through it
      let output = '';
      spinner.style.display = "none";
      data.forEach(function(character){
        output += `
      <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">

        <div class="card bg-dark text-white">
            <img src="${character.img}" class="card-img-top img-size" alt="...">
            <div class="card-body shadow">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">"${character.nickname}"</p>
            </div>

            <div class="card-footer">
              <button class="btn btn-success" type="button" data-bs-toggle="collapse"  data-bs-target="#flush-${character.char_id}" aria-expanded="false" aria-controls="collapseExample">
                Informacion
              </button>
              </div>
            </div>
              <div class="collapse my-3" id="flush-${character.char_id}">
                <div class="card card-body text-white">
                  <p class="card-text">Ocupación:<br>"${character.occupation}"</p>
                  <p class="card-text">Temporadas:<br>${character.appearance}</p>
                  <p class="card-text">Protagonizado por:<br> "${character.portrayed}"</p>
                </div>
              </div>  

        </div>
       </div>



        `;
      });
      document.getElementById('output').innerHTML = output; 

    })
    .catch(function(error){
      console.log(error);
    });
}

fetch_characters(limit, offset);


