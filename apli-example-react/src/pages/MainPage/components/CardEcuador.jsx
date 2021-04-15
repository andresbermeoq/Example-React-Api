import React, {useState, useEffect} from 'react';

const CardEcuador = () => {
     const [casos, setCasos] = useState([]);

     useEffect(() => {
        getData()
     }, []);

     const getData = async () => {
        const data = await fetch("https://api.covid19api.com/summary")
        const resolve = await data.json()
        setCasos(resolve.Countries[50]);
     }

     let date = new Date(casos.Date);

     return(
          <div className="card text-center">
               <div className="card-header">
                    <h3><strong>Casos Ecuador</strong></h3>
                    <p className="h5 card-text">
                         <strong>Fecha:</strong> {date.toDateString()}
                    </p>
               </div>
               <div className="card-body">
                    <p className="h6 card-text">Nuevos Confirmados: {casos.NewConfirmed}</p>
                    <p className="h6 card-text">Total de Confirmados: {casos.TotalConfirmed}</p>
                    <p className="h6 card-text">Total de Muertes: {casos.TotalDeaths}</p>
                    <p className="h6 card-text">Nuevas Muertes: {casos.NewDeaths}</p>
               </div>
               <div className="card-footer text-muted">
                    <p className="card-text">Recuperados: {casos.TotalRecovered}</p>
               </div>
          </div>
     );

}

export default CardEcuador;
