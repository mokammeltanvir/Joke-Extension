// fetch api to get a random joke
fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => {
    // set the joke text
    document.getElementById('joke').innerHTML = data.setup + ' ' + data.punchline;
  }
);