import React, { useState } from 'react';
import { Videos } from "./NavItems";
import { Link } from "react-router-dom";

export default function DropdownVideos() {
  const [dropdown, setDropdown] = useState(false);   
    return (
      <div className='popuptext'>
        <ul className={dropdown ? 'nav-item clicked' : 'nav-item'}
            id = 'myPopup'
            onClick={() => setDropdown(!dropdown)}>
            {Videos.map((item) => {
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