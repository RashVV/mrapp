import React, { useState } from 'react';
import { TVSeries } from "./NavItems";
import { Link } from "react-router-dom";

export default function DropdownTVSeries() {
  const [dropdown, setDropdown] = useState(false); 
    return (
      <div className='popuptext3'>
        <ul className={dropdown ? 'nav-item clicked' : 'nav-item'}
            id = 'myPopup'
            onClick={() => setDropdown(!dropdown)}>
            {TVSeries.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path}
                        className={item.cName}
                        onClick={() => setDropdown(false)}>
                        {item.title}
                  </Link>
                </li>
              );
            })}
          </ul> 
      </div>
    );
}
