const joke = document.querySelector('.joke');
let jokeBtn = document.querySelector('.joke-btn');
let img = document.querySelector('.img');
let wrap = document.querySelector('.wrap');
const foto = document.querySelector('.foto');
const audio = document.querySelector('audio')

let color = ['PeachPuff ', 'PaleTurquoise ', 'LightSalmon ', 'Khaki ', 'LightSteelBlue ', 'LightPink']
let i = 0
audio.volume = 0.3

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
  if (i < 7){
    foto.src = `assets/img/${i}.png`
    i++
  } else i = 0
  
  foto.classList.add('active')
  joke.innerText = data.value;
  audio.play();
  
  setTimeout(() => foto.classList.remove('active'), 2000)
}
