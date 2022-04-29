export const fetchPokemonDetails = async (currentId) => {
    //const newNumber = Math.floor(Math.random()*898)
    console.log('called')


    const newNumber = Math.floor(Math.random()*151)


    let newID = newNumber
    
    while (newID === currentId) {
        newID = newNumber
    }
    
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${newID}`)
      .then(response => response.json())
}