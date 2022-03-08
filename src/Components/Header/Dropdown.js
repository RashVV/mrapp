import React, { useState } from 'react';
import { PremieresDropdown } from "./NavItems";
import { Link } from "react-router-dom";

export default function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
    
      return (
          <div className='popuptext1'>
                <ul
                     className={dropdown ? 'nav-item clicked' : 'nav-item'}
                     onClick={() => setDropdown(!dropdown)}
                     >
                      {PremieresDropdown.map((item) => {
                          return (
                              <li key={item.id}>
                                 <Link
                                      to={item.path}
                                      className={item.cName}
                                      onClick={() => setDropdown(false)}
                                      >
                                    {item.title}
                                  </Link>
                            </li>
                          );
                        })}
                  </ul>
            
                </div>
              );
    }


