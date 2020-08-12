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

export {button1, button2, omotac, divPoke1, opis1, slikePoke1, divPoke2, opis2, slikePoke2, divPoke3, opis3, slikePoke3, divPoke4, opis4, slikePoke4, pobednikDiv, pobednikOpis, pobednikSlika}