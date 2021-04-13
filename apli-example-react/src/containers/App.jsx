import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from '../components/Header';
import Main from '../pages/Main';
import '../assets/styles/App.css';

const App = () => (
     <Router>
          <Header />
          <hr/>
          <Main />
          <hr/>
     </Router>
);

export default App;
