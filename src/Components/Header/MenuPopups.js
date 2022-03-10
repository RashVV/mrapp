import { useState } from 'react';
import { NavItems } from './NavItems';
import DropdownPremiere from "./DropdownPremiere";
import { Link } from "react-router-dom";
import DropdownAllMuvies from './DropdownAllMuvies';
import DropdownTVSeries from './DropdownTVSeries';
import DropdownTape from './DropdownTape';
import DropdownVideos from './DropdownVideos';
import './MenuPopups.css';

export default function MenuButton( ) {  
  const [dropdownPremiere, setDropdown] = useState(false);
  const [dropdownAllMuvies, setDropdownA] = useState(false);
  const [dropdownTVSeries, setDropdownTV] = useState(false);
  const [dropdownTape, setDropdownT] = useState(false);
  const [dropdownVideos, setDropdownV] = useState(false);
    return(
      <div className='btn__box'>
        <ul className="nav-items popup">
            {NavItems.slice(0, 1).map((item) => {
              if (item.title === 'Premieres'  ) {
                  return (
                    <li key={item.id}
                        className={item.cName}
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}>
                          <Link to={item.path}>{item.title}</Link>
                          {dropdownPremiere && <DropdownPremiere />}
                    </li>
                  );
                }
                  return (
                    <div className='box'>
                    <li key={item.id} className={item.cName}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                    </div>
                  );
              })}
          </ul>
          <ul className="nav-items2 popup">
           {NavItems.slice(1, 2).map((item) => {
            if (item.title === 'All movies'  ) {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownA(true)}
                  onMouseLeave={() => setDropdownA(false)}>
                  <Link to={item.path}>{item.title}</Link>
                  {dropdownAllMuvies && <DropdownAllMuvies />}
                </li>
              );
            }
              return (
                <div className='box'>
                <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
                </li>
                </div>
              );
            })}
          </ul>
          <ul className="nav-items3 popup">
            {NavItems.slice(2, 3).map((item) => {
              if (item.title === 'TV series'  ) {
                return (
                  <li key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setDropdownTV(true)}
                      onMouseLeave={() => setDropdownTV(false)}>
                        <Link to={item.path}>{item.title}</Link>
                          {dropdownTVSeries && <DropdownTVSeries />}
                    </li>
                );
              }
                return (
                  <div className='box'>
                    <li key={item.id} className={item.cName}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  </div>
                );
            })}
          </ul>
          <ul className="nav-items4 popup">
            {NavItems.slice(3, 4).map((item) => {
              if (item.title === 'Tape'  ) {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdownT(true) }
                    onMouseLeave={() => setDropdownT(false)}>
                    <div>
                      <Link to={item.path}>{item.title}</Link>
                      {dropdownTape && <DropdownTape />}
                    </div>
                  </li>
                );
              }
            return (
              <div className='box'>
                <li key={item.id} className={item.cName} id='myPopup'>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              </div>
            );
          })}
        </ul>
        <ul className="nav-items5 popup">
           {NavItems.slice(4, 5).map((item) => {
              if (item.title === 'Videos'  ) {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdownV(true)}
                    onMouseLeave={() => setDropdownV(false)}>
                    <Link to={item.path}>{item.title}</Link>
                    {dropdownVideos && <DropdownVideos />}
                  </li>
                );
              }
            return (
              <div className='box'>
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              </div>
            );
          })}
        </ul>
        <ul className="nav-items6">
          {NavItems.slice(5, 6).map((item) => {
              if (item.title === 'News'  ) {
                return (
                  <li
                      key={item.id}
                      className={item.cName}>
                        <Link to={item.path}>{item.title}
                        </Link>
                  </li>
                );
              }
                return (
                  <div className='box'>
                  </div>
                );
            })}
        </ul>
      </div>
    ) 
}
