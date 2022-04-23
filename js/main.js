document.querySelector('.searchButton').addEventListener('click', getFetch)



function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    //console.log(data.sprites.front_default)
    document.querySelector('#pokemonSearch').src = data.sprites.front_default
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

// fetch('https://pokeapi.co/api/v2/pokemon/seel')
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data.stats)
//     console.log(data.stats.reduce((sum, current) => sum + current.base_stat, 0))
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });