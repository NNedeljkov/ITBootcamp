let count = 0

const counter1 = document.querySelector('#brojac1')
const counter2 = document.querySelector('#brojac2')
const naruci1 = document.querySelector('#odmah1')
const naruci2 = document.querySelector('#odmah2')
const glavni = document.querySelector('#wrapper')
const brojac = document.querySelector('#counter')
brojac.textContent = count.value

counter1.addEventListener('click', () => {
    count++
})
console.log(count);
counter2.addEventListener('click', () => {
    count++
})