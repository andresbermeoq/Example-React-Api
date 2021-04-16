import React, {useState, useEffect}  from 'react';

import CardItem from '../pages/CountryPage/components/CountryCard'

const Search = () => {

     const [search, setSearch] = useState('');
     const [casos, setCasos] = useState([]);

     useEffect(() => {
          getData()
     }, []);

     const getData = async () => {
          const data = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
          const response = await data.json()
          setCasos(response)
     }

     console.log(search);

     return(
          <div>
               <input className="form-control form-control-lg"
                         type="text"
                         placeholder="Buscar por Pais...."
                         name="searchText"
                         onChange={event => {setSearch(event.target.value)}}
               />

               <div>
                    <hr/>
                    <div className="card-columns">
                         {
                              casos.filter((item) => {
                                   if (search === "") {
                                        return item
                                   }else if (item.country.toLowerCase().includes(search.toLowerCase())){
                                        return item
                                   }
                              }).map((item, index) =>
                                   <CardItem key={index} item={item}/>
                              )
                         }
                    </div>

               </div>
          </div>
     )
};

export default Search;
