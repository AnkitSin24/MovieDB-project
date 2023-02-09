const apiKey = 'c68c9df02f5ce01ace3886eb05160840'

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const search = () => {
  
  document.getElementById('poster').src ='https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg';  
 document.getElementById('poster2').src ='https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg'; 
  
  const value = document.getElementById('inputSearch').value
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1`
  const res = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1`)
  .then((res) => res.json())
  .then((data) =>{
    const result = data.results[0];
     document.getElementById('movieTitle').innerHTML = result.original_title;
    document.getElementById('poster').src = "https://image.tmdb.org/t/p/original" + result.poster_path;
    document.getElementById('releasedDate').innerHTML = result.release_date;
    document.getElementById('rating').innerHTML = result.vote_average +  "/10";
    document.getElementById('popularity').innerHTML = result.popularity;
    document.getElementById('description').innerHTML = result.overview;
    document.getElementById('poster2').src = "https://image.tmdb.org/t/p/original" + result.backdrop_path;
  })
}

const random = () => {
  
  document.getElementById('poster').src ='https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg';  
 document.getElementById('poster2').src ='https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg'; 
  
  const value = generateRandomLetter()
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1`
  const res = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1`)
  .then((res) => res.json())
  .then((data) =>{
    const result = data.results[Math.floor(Math.random() * data.results.length)];
     document.getElementById('movieTitle').innerHTML = result.original_title;
    document.getElementById('poster').src = "https://image.tmdb.org/t/p/original" + result.poster_path;
    document.getElementById('releasedDate').innerHTML = result.release_date;
    document.getElementById('rating').innerHTML = result.vote_average +  "/10";
    document.getElementById('popularity').innerHTML = result.popularity;
    document.getElementById('description').innerHTML = result.overview;
    document.getElementById('poster2').src = "https://image.tmdb.org/t/p/original" + result.backdrop_path;
  })
}