fetch('https://swapi.dev/api/starships')
  .then(response => response.json())
  .then(data => console.log(data));