import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/Header.css';

const Header = () => (
     <header className="header">
          <nav>
               <ul>
                    <li>
                         <Link to="/">Main Page</Link>
                    </li>
                    <li>
                         <Link to="/country">Country Page</Link>
                    </li>
               </ul>
          </nav>
     </header>
);

export default Header;
