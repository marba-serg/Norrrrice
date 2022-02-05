const joke = document.querySelector('.joke');
let jokeBtn = document.querySelector('.joke-btn');
let img = document.querySelector('.img');
let wrap = document.querySelector('.wrap');
const foto = document.querySelector('.foto');
let color = ['PeachPuff ', 'PaleTurquoise ', 'LightSalmon ', 'Khaki ', 'LightSteelBlue ', 'LightPink']
let i = 0


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


  wrap.style.backgroundColor = color[i]
  if (i > 5) i = 0
  else {
    foto.src = `assets/img/${i}.png`
    i++
  }
  joke.innerText = data.value;
}
