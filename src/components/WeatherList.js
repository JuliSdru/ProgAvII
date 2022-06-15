import React, {useEffect} from 'react'
import { WEATHER_KEY } from '../keys';
const WeatherList = () => {

    const [clima, setClima] = React.useState([])
    const datos = [
        {id: 1, nombre: 'Argentina'},
        {id: 2, nombre: 'Londres'}
    ]


    React.useEffect(()=>{
        console.log('use')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {

        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${WEATHER_KEY}`);
        const climas = await data.json()
        console.log(climas);
        setClima(climas);
    }
  

  return (
    <div>
        <h1>List</h1>
        { <ul>
            { datos.map(item =>(
                <li key={item.id}>{item.nombre}</li>
            ))}
        </ul>
        }
    </div>
  )
}

export default WeatherList