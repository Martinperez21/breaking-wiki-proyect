const spinner = document.querySelector("#spinner");
function fetch_episodes() {
    fetch('https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {

        let output = '';
        spinner.style.display = "none";
        data.forEach(function(episode){
          output += `
        <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="card mb-4 bg-dark text-white ">
            <img src="../img/Breaking-Wiki.png" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h5 class="card-title">${episode.title}</h5>
              <p class="card-text">EP: ${episode.episode}</p>
              <p class="card-text">${episode.air_date}</p>
            </div>

            <div class="card-footer">
              <button class="btn btn-success" type="button" data-bs-toggle="collapse"  data-bs-target="#flush-${episode.episode_id}" aria-expanded="false" aria-controls="collapseExample">
                Informacion
              </button>
            </div>
          </div>

            <div class="collapse my-3" id="flush-${episode.episode_id}">
              <div class="card card-body text-white">
                <p class="card-text">Temporada: ${episode.season}</p>
                <p class="card-text">Fecha de emisión:<br>${episode.air_date}</p>
                <p class="card-text">Personajes Principales:<br> "${episode.characters}"</p>
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
  
  fetch_episodes();
  
  