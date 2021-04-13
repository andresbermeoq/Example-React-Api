import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CountryPage from '../pages/CountryPage/CountryPage'

const Main = () => (
     <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/country" component={CountryPage} />
     </Switch>
);

export default Main;
