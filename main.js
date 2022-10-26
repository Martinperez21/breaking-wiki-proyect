const request = new XMLHttpRequest();
request.open('GET', 'https://www.breakingbadapi.com/api/character/random', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);
    data.forEach((characters) => {
      console.log(characters);
    });
  } else {
    console.log('Ha ocurrido un error con código ' + request.status);
  }
}

request.send();