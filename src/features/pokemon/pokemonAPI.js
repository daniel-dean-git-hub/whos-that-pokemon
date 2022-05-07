export const fetchPokemonDetails = async (currentId) => {
    //const newNumber = Math.floor(Math.random()*898)
    const newNumber = Math.floor(Math.random()*151)


    let newID = newNumber
    
    while (newID === currentId) {
        newID = newNumber
    }

    const test = await fetch(`https://pokeapi.co/api/v2/pokemon/${newID}`)
    .then(response => response.json())
    
    console.log(test)

    return test

}