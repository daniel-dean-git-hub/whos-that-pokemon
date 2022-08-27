export const fetchPokemonDetails = async (currentId = 0, genList ) => {  
    if (!genList || genList.length === 0) genList = [[1,151]];

    // generates a random number from provided range
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // picks a random pokemon gen from available selection
    const genRandomiser = () => randomNum(0 , Object.values(genList).length - 1)

    const randomPokemonId = () => randomNum(genList[genRandomiser()][0], genList[genRandomiser()][1])

    let validPokemonId = randomPokemonId()

    while (validPokemonId === currentId || validPokemonId === 0) {
        validPokemonId = randomPokemonId()      
    }

    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${validPokemonId}`)
    .then(response => response.json())
    
    return pokemon
}