const request = new XMLHttpRequest();
request.open('GET', 'https://www.breakingbadapi.com/api/character/random', true);

request.onload = function () {
  const data = JSON.parse(this.response);
  data.forEach((characters) => {
    // Muestro imagen
    const image = document.getElementById("image");
    image.src = characters.img;
    // Muestro nombre
    const name = document.getElementById("name");
    name.textContent = characters.name;
    // Muesto ocupacion
    const occupation = document.getElementById("occupation");
    occupation.textContent = characters.occupation[0];
    // Muestro interprete
    const portrayed = document.getElementById("portrayed");
    portrayed.textContent = "Portrayed : " + characters.portrayed;
  });
}

request.send();