import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import climaIcon from '../assets/climaIcon.png'

const WeatherForm = props => (
    <div >
        <img src={climaIcon} className="imagen"/>
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Ingrese ciudad" className="form-control" autoFocus/>
            </div>
            <br/>
            <div className="form-group">
                <input type="text" name="country" placeholder="Ingrese pais" className="form-control" />
            </div>
            <br/>
            <div class="d-grid gap-2">
            <button className="btn btn-success btn-block">
                Obtener clima
            </button>
            </div>
        </form>
    </div>
);

export default WeatherForm;