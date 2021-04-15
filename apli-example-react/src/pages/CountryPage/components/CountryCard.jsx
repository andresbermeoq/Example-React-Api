import React from 'react';

const CountryCard = ({item}) => (
     <div className="card">
          <div className="card-body">
               <img className="card-img-top" src={item.countryInfo.flag} alt=""/>
               <h5 className="card-title">{item.country}</h5>
               <p className="card-text">
                    <li><strong>Casos:</strong> {item.cases}</li>
                    <li><strong>Casos por Dia:</strong> {item.todayCases}</li>
                    <li><strong>Muertes:</strong> {item.deaths}</li>
                    <li><strong>Recuperados:</strong> {item.recovered}</li>
                    <li><strong>Tests:</strong> {item.tests}</li>
               </p>
          </div>
     </div>
);

export default CountryCard;
