
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import '../App'

//KEY para conectarnos a la API
import { WEATHER_KEY } from '../keys';

class Climate extends Component {

  //estado de la aplicacion al inicar
  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    error: null
};

//funcion para obtener datos
getWeather = async (e) => {
    e.preventDefault(); //cancelamos el evento x defecto (envio al clickear/reinicio de pagina)
    const { city, country } = e.target.elements; //propiedad del formulario, traerme solamente los elementos de ciudad y pais 
    const cityValue = city.value; //almacena el valor
    const countryValue = country.value; //almacena el valor

    //si exitste ciudad y pais
    if (cityValue && countryValue) { 
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL); //direccion donde pide el dato
        const data = await response.json(); //awai (le da tiempo) y guardo al respuesta en una constante 
        console.log(data)

        //establecer el estado (asignarle)
        this.setState({
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        });
    } else {
        this.setState({
            error: 'Ingrese ciudad o pais' //si no existe ciudad y pais
        });
    }

}



  render() {
    return <div className="container p-4">

      <div className="row">
        
        <div className="col-md-6 mx-auto">
          {/* le paso la funcion al componente */}
          <WeatherForm
            getWeather={this.getWeather}
          />
          <br/>
          {/* le paso el estado para mostrar la informacion */}
          <WeatherInfo {...this.state} />
        </div>
      </div>
    </div>
  }
}

export default Climate;
