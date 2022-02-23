import React, { useState } from 'react';
import { PremieresDropdown, AllmuviesDropdown, TVseriesDropdown, TapeDropdown, VideosDropdown, } from "./NavItems";
import { Link } from "react-router-dom";

export default function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? 'nav-item clicked' : 'nav-item'}
        onClick={() => setDropdown(dropdown)}
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
      <ul
        className={dropdown ? 'show__submenu-item clicked' : 'show__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {TVseriesDropdown.map((item) => {
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
      <ul
        className={dropdown ? 'search__submenu-item clicked' : 'search__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {AllmuviesDropdown.map((item) => {
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
      <ul
        className={dropdown ? 'feed__submenu-item clicked' : 'feed__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {TapeDropdown.map((item) => {
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
      <ul
        className={dropdown ? 'videos__submenu-item clicked' : 'videos__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {VideosDropdown.map((item) => {
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
    </>
  );
}

