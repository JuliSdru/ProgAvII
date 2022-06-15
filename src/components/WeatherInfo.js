import React from 'react';

//componente que recibe propiedades
//muestra datos y retorna la interfaz
const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
            {
                //si propos.error sale el div
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ? //si existe la temperatura muestro los siguientes datos
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country && //si existe ciudad y pais
                        <p><i className="fas fa-location-arrow"></i>  Localidad: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature && //si existe la temperatura
                        <p><i className="fas fa-temperature-low"></i>  Temperatura: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity && //si existe la humedad
                        <p><i className="fas fa-water"></i>  Humedad: {props.humidity}</p>
                    }
                    {
                        props.wind_speed && //si existe viento
                        <p><i className="fas fa-wind"></i>  Viento: {props.wind_speed}</p>
                    }
                    
                </div>
                : //SINO
                <div >
                    {/* <p>
                    <i className="fas fa-sun fa-10x"></i>
                    No hay datos todavia
                    </p> */}
                </div>
            }
        </div>

    )
}

export default WeatherInfo;