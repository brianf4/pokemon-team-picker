document.querySelector('.searchButton').addEventListener('click', getFetch)
document.querySelector('#random').addEventListener('click', getRandomButton)
document.querySelector('.add').addEventListener('click', addPokemon)

let index = 0;

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  document.querySelector('h3').innerText = choice
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    document.querySelector('#pokemonSearch').src = data.sprites.other["official-artwork"].front_default
    document.querySelector('.hp-stat').innerText = data.stats[0].base_stat
    document.querySelector('.attack-stat').innerText = data.stats[1].base_stat
    document.querySelector('.defense-stat').innerText = data.stats[2].base_stat
    document.querySelector('.spAtk-stat').innerText = data.stats[3].base_stat
    document.querySelector('.spDef-stat').innerText = data.stats[4].base_stat
    document.querySelector('.speed-stat').innerText = data.stats[5].base_stat
    document.querySelector('.total').innerText = data.stats.reduce((sum, current) => sum + current.base_stat, 0)
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
 
}


function addPokemon(){
  let pokemonName =  document.querySelector('h4').innerText;
  document.querySelector(`#poke${index}>h4`).innerText = document.querySelector('#pokemonName').innerText
  console.log(pokemonName)
  pointer++
}

function getRandomButton(){
  
  getRandomPokemon(0) 

}

function getRandomPokemon(attempt = 0){
  console.log(attempt)
  if (attempt > 3){
    console.log('Max attempt reach')
    return 
  }
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    //console.log(data)
    const randomPokemonNum = Math.floor(Math.random() * data.count)
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNum}`)
    .then(res => res.json())
  })
  .then(pokeInfo => {
    document.querySelector('#randomPokemonPic').src = pokeInfo.sprites.front_default
  }) 
  .catch(err => {
      console.log(`error ${err}`)
      getRandomPokemon(attempt + 1)
  });
}

