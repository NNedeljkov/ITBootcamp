import { pokemoni } from 'pokemoni.js'
import {button1, button2, omotac, divPoke1, opis1, slikePoke1, divPoke2, opis2, slikePoke2, divPoke3, opis3, slikePoke3, divPoke4, opis4, slikePoke4, pobednikDiv, pobednikOpis, pobednikSlika} from 'elementi.js'

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