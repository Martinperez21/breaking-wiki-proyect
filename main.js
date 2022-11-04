const request = new XMLHttpRequest();
request.open('GET', 'https://www.breakingbadapi.com/api/characters', true);

request.onload = function () {
  const data = JSON.parse(this.response);
  
  const container = document.getElementById('container');
  container.setAttribute('class','container my-3');

  data.forEach((characters) => {
    const row = document.createElement('div');
    row.setAttribute('class','row row-cols-1 row-cols-md-2 row-cols-sm.2 row-cols-lg-4 g-4');
    const col = document.createElement('div');
    col.setAttribute('class','col');
    const div = document.createElement('div');
    div.setAttribute('class','card bg-dark text-white');
    const img = document.createElement('img');
    img.setAttribute('class','card-img-top img-size');
    img.src = characters.img;
    const divInfo = document.createElement('div');
    divInfo.setAttribute('class','card-body shadow');
    const name = document.createElement('h5');
    name.setAttribute('class','card-title');
    name.textContent = characters.name;
    const occupation = document.createElement('p');
    occupation.setAttribute('class','card-text');
    occupation.textContent = characters.occupation[0];
    const footer = document.createElement('div');
    footer.setAttribute('class','card-footer');
    const portrayed = document.createElement('small');
    portrayed.setAttribute('class','text-muted');
    portrayed.textContent = 'Portrayed : ' + characters.portrayed;

    container.appendChild(row);
    container.appendChild(col);
    col.appendChild(div);
    div.appendChild(img);
    div.appendChild(divInfo);
    divInfo.appendChild(name);
    divInfo.appendChild(occupation);
    div.appendChild(footer);
    footer.appendChild(portrayed);
  });
}

request.send();