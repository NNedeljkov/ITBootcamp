{   // Prvi deo
    let pokemoni = [ { ime: 'Pikachu', vrsta: 'elektricni', sposobnosti: 'staticki elektricitet', karakteristike:{ napad: 55, odbrana: 40, brzina: 90 } }, 
    { ime: 'Squirtle', vrsta: 'vodeni', sposobnosti: 'vodena bujica', karakteristike: { napad: 48, odbrana: 65, brzina: 43 } }, 
    { ime: 'Charmander', vrsta: 'vatreni', sposobnosti: 'plamen', karakteristike: { napad: 52, odbrana: 43, brzina: 65 } },
    { ime: 'Bulbasaur', vrsta: 'trava/otrovni', sposobnosti: 'rast', karakteristike: { napad: 49, odbrana: 49, brzina: 45 } } ]

    // Drugi deo
    function sveSposobnosti(){
        for(let i = 0; i < pokemoni.length; i++){
        var spos = pokemoni.map(pokemon => {return pokemon.sposobnosti})
        }
        console.log(spos);
    }
    sveSposobnosti()

    // Treci deo
    for(let i = 0; i < pokemoni.length; i++){
        var brzine = pokemoni.map(brz => brz.karakteristike.brzina)
    }
    brzine.sort((a,b) => a - b)
    console.log(brzine);
}
