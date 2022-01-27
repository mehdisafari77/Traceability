
const button = document.getElementsByClassName("button")

function getPokemon(){
  axios.get("https://pokeapi.co/api/v2/pokemon")
  .then(res => {
    let randomIndex = Math.floor(Math.random() * 20)
    pokemon = res.data.results[randomIndex].name

    let h2 = document.createElement("h2")
    let text = document.createTextNode(pokemon)
  
    h2.appendChild(text);

    let div = document.createElement("div")
    div.appendChild(h2)
  
    document.body.appendChild(div)
  })
}

button.addEventListener("click", getPokemon);

try {
  getPokemon();
  Rollbar.info("PokeAPI successfully fetched.")
} catch (error) {
  Rollbar.warning("Could not fetch PokeAPI");
}