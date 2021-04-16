import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/Header.css';

const Header = () => (
     <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light justify-content-center">
               <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item btn btn-outline-success m-1">
                         <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item btn btn-outline-success m-1">
                         <Link className="nav-link" to="/country">Paises</Link>
                    </li>
               </ul>
          </nav>
     </header>
);

export default Header;
