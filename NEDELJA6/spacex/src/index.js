import { LaunchList } from './components/LaunchList.js'
import {  getAllLaunches, getLaunchesByYear } from './service'
// import { Launch } from './components/Launch.js'

const app = document.querySelector('#app')


// getAllLaunches().then(res => {
//     app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })

if(confirm('Да ли сте сигурни?')){
    getAllLaunches().then(res => {
        const head = document.createElement('h1')
        head.textContent = 'SpaceX'
        head.style.color = 'white'
        const select = document.createElement('select')
        
        const selectOptionsArr = res.data.reduce((agr, item) => {
            if(!agr.includes(item.launch_year)){
                agr.push(item.launch_year)
            }
            return agr
        }, [])

        selectOptionsArr.forEach(item => {
            const option = document.createElement('option')
            option.value = item
            option.textContent = item
            select.appendChild(option)
        })
        select.addEventListener('change', (event) => {
            const launchYear = event.target.value
            getLaunchesByYear(launchYear).then(res => {
                app.appendChild(LaunchList(res.data))
            })
        })
        app.append(head, select)
        app.appendChild(LaunchList(res.data))
        console.log(select.value);
        
    })
}
else{
    console.log('Није потврђено')
}


