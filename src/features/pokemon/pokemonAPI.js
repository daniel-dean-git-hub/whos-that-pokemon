export const fetchPokemonDetails = async (currentId) => {
    console.log(currentId)

    let newID = Math.floor(Math.random()*151)
    
    while (newID === currentId) {
        newID = Math.floor(Math.random()*151)
    }
    
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${newID}`)
      .then(response => response.json())
}