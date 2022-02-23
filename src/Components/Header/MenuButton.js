import React, {useState} from 'react';
import { NavItems } from './NavItems';
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";




export default function MenuButton( ) {
    
  const [dropdown, setDropdown] = useState(false);

      return(

        <ul className="nav-items">
          {NavItems.map((item) => {
            if (item.title === 'Premieres' && item.title === 'All movies'  && item.title === 'TV series' && item.title === 'Tape' && item.title === 'Videos' && item.title === 'News' ) {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      )
  
}
