import React from 'react';


import Footer from '../../components/Footer';
import Card from './components/Card';
import CardEcuador from './components/CardEcuador';


const MainPage = () => (
    <div className="container text-center">
        <h1 className="display-4">Covid-19 Tracker</h1>
        <div className="card-deck">
            <Card />
            <CardEcuador />
        </div>
        <div className="container">
            <Footer />
        </div>
    </div>

);

export default MainPage;

