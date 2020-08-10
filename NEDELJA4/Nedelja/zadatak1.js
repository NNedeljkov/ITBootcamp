let pokemoni = [ { ime: 'Pikachu', vrsta: 'elektricni', sposobnosti: 'staticki elektricitet', karakteristike:{ napad: 55, odbrana: 40, brzina: 90 } }, 
{ ime: 'Squirtle', vrsta: 'vodeni', sposobnosti: 'vodena bujica', karakteristike: { napad: 48, odbrana: 65, brzina: 43 } }, 
{ ime: 'Charmander', vrsta: 'vatreni', sposobnosti: 'plamen', karakteristike: { napad: 52, odbrana: 43, brzina: 65 } },
{ ime: 'Bulbasaur', vrsta: 'trava/otrovni', sposobnosti: 'rast', karakteristike: { napad: 49, odbrana: 49, brzina: 45 } } ]

function pobednik(arr){
    let imeSnaga = []
    arr.forEach(snaga => imeSnaga.push([snaga.karakteristike.napad, snaga.ime]))
            if(imeSnaga[0][0] >= imeSnaga[1][0] && imeSnaga[0][0] >= imeSnaga[2][0] && imeSnaga[0][0] >= imeSnaga[3][0])
                return imeSnaga[0][1]
            if(imeSnaga[1][0] >= imeSnaga[2][0] && imeSnaga[0][0] >= imeSnaga[3][0])
                return imeSnaga[1][1]
            if(imeSnaga[2][0] >= imeSnaga[3][0])
                return imeSnaga[2][1]
            else return imeSnaga[3][1]
}
console.log(pobednik(pokemoni))
