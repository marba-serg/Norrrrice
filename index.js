let joke = document.querySelector('.joke');
let jokeBtn = document.querySelector('.joke-btn');
let img = document.querySelector('.img');
let wrap = document.querySelector('.wrap');

let color = ['red', 'pink', 'blue']


jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

const res = await fetch('https://api.chucknorris.io/jokes/random', config)

  const data = await res.json()

  joke.innerText = data.value;
  img.src = data.icon_url
 


  
}
