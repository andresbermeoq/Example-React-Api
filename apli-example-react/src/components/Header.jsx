import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/Header.css';

const Header = () => (
     <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
               <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                         <Link className="nav-link" to="/">Main Page</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" to="/country">Country Page</Link>
                    </li>
               </ul>
          </nav>
     </header>
);

export default Header;
