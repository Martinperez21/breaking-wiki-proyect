const request = new XMLHttpRequest();
request.open('GET', 'https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad', true);

request.onload = function () {
  const data = JSON.parse(this.response);

  const container = document.getElementById('container');
  container.setAttribute('class','container my-5');

  data.forEach((episodes) => {
    const row = document.createElement('div');
    row.setAttribute('class','row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-4 g-4');
    const col = document.createElement('div');
    col.setAttribute('class','col');
    const div = document.createElement('div');
    div.setAttribute('class','card bg-dark text-white h-100');
    const divBody = document.createElement('div');
    divBody.setAttribute('class','card-body');
    const info = document.createElement('h5');
    info.setAttribute('class','card-title');
    info.textContent = "Temporada " + episodes.season + " Episodio " + episodes.episode + " " + episodes.title;
    const date = document.createElement('p');
    date.setAttribute('class','card-text');
    date.textContent = "Fecha de emision: " + episodes.air_date;

    container.appendChild(row);
    container.appendChild(col);
    col.appendChild(div);
    div.appendChild(divBody);
    divBody.appendChild(info);
    divBody.appendChild(date);
    // console.log(episodes);
  });
}
request.send();