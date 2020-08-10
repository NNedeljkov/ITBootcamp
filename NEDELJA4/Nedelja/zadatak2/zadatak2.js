let pokemoni = [ { ime: 'Pikachu', vrsta: 'elektricni', sposobnosti: 'staticki elektricitet', karakteristike:{ napad: 55, odbrana: 40, brzina: 90 } }, 
{ ime: 'Squirtle', vrsta: 'vodeni', sposobnosti: 'vodena bujica', karakteristike: { napad: 48, odbrana: 65, brzina: 43 } }, 
{ ime: 'Charmander', vrsta: 'vatreni', sposobnosti: 'plamen', karakteristike: { napad: 52, odbrana: 43, brzina: 65 } },
{ ime: 'Bulbasaur', vrsta: 'trava/otrovni', sposobnosti: 'rast', karakteristike: { napad: 49, odbrana: 49, brzina: 45 } } ]
const button1 = document.querySelector('#prikaz')
const button2 = document.querySelector('#pobednik')
const omotac = document.querySelector('.wrapper')
//////////////////////////////////////////////////
const divPoke1 = document.createElement('div')
const opis1 = document.createElement('p')
opis1.textContent = 'Pikachu, elektricni, jak napad, brz'
const slikePoke1 = document.createElement('img')
slikePoke1.src = 'resources/pikachu.png'
const divPoke2 = document.createElement('div')
const opis2 = document.createElement('p')
opis2.textContent = 'Squirtle, vodeni, jaka odbrana'
const slikePoke2 = document.createElement('img')
slikePoke2.src = 'resources/squirtle.jpg'
const divPoke3 = document.createElement('div')
const opis3 = document.createElement('p')
opis3.textContent = 'Charmander, vatreni, jak napad, solidna brzina'
const slikePoke3 = document.createElement('img')
slikePoke3.src = 'resources/charmander.png'
const divPoke4 = document.createElement('div')
const opis4 = document.createElement('p')
opis4.textContent = 'Bulbasaur, otrovni, jake sposobnosti, slaba brzina'
const slikePoke4 = document.createElement('img')
slikePoke4.src = 'resources/bulbasaur.jpg'
////////////////////////////////////////////////
const pobednikDiv = document.createElement('div')
const pobednikOpis = document.createElement('p')
pobednikOpis.textContent = 'Pikachu, elektricni, jak napad, brz'
const pobednikSlika = document.createElement('img')
pobednikSlika.src = 'resources/pikachu.png'
button1.addEventListener('click', () =>{
    divPoke1.appendChild(opis1)
    divPoke1.appendChild(slikePoke1)
    divPoke2.appendChild(opis2)
    divPoke2.appendChild(slikePoke2)
    divPoke3.appendChild(opis3)
    divPoke3.appendChild(slikePoke3)
    divPoke4.appendChild(opis4)
    divPoke4.appendChild(slikePoke4)
    omotac.append(divPoke1,divPoke2,divPoke3,divPoke4)
})
button2.addEventListener('click', () => {
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
    button2.textContent = pobednik(pokemoni)
    pobednikDiv.appendChild(pobednikOpis)
    pobednikDiv.appendChild(pobednikSlika)
    omotac.appendChild(pobednikDiv)
})
// moram da napomenem da nisam bas dobro razumeo sta tacno treba da radim sa funkcijom u ovom zadatku