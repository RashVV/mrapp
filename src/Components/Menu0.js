import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Menu0() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Прем’єри
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>В кіно</MenuItem>
        <MenuItem onClick={handleClose}>Онлайн</MenuItem>
        <MenuItem onClick={handleClose}>Скоро</MenuItem>
      </Menu>
    </div>
  );
}
    /*<div class="topMenu__wrapper topMenu_experimentFixedMenu"> 
    <div class="topMenu"> 
    <div class="modalWindow modalWindow_experimentFixedMenu" id="modalWindow"> 
    <div class="modalContent">
      </div> 
      </div> 
      <div class="toolbox"> 
      <span href="/" class="topMenu__logo topMenu__logo_ua"></span>
       <button onclick="authWindow();" class="auth_button round_button bluebutton">Увійти</button> 
       <div class="menu topMenu__menu topMenu__menu_desktop">
          <ul class="topMenu__menu-wrapper"> 
          <li> <a class="submenu-opener" href="/movies/">Прем’єри</a> 
          <ul class="submenu submenu-js-init"> 
          <li class="submenu__item submenu__item_cinema"> 
          <a href="/movies/cinema/" class="submenu__link clearfix"> 
          <span class="title">В кіно</span> </a> </li>
           <li class="submenu__item submenu__item_home"> <a href="/movies/online/" class="submenu__link clearfix"> 
           <span class="title">Онлайн</span> </a> 
           </li> <li class="submenu__item submenu__item_premier"> <a href="/movies/premier/" class="submenu__link clearfix">
              <span class="title">Скоро</span> </a> <div class="submenu__extra-links"> 
              <a href="/movies/premier/" class="submenu__extra-link submenu__extra-link_cinema clearfix"> 
              <span>В кіно</span> </a> <span>•</span> 
              <a href="/movies/premier/online/" class="submenu__extra-link clearfix"> 
              <span>Онлайн</span> 
              </a> 
              </div> 
              </li> 
              </ul> 
              </li> 
              <li> <a class="submenu-opener" href=" /R2D2/">Всі фільми</a>
               <ul class="submenu submenu_longer submenu-js-init"> 
               <li class="submenu__item submenu__item_best"> 
               <a href="/R2D2/" class="submenu__link clearfix">
                  <span class="title">Пошук фільмів</span> </a> </li>
                   <li class="submenu__item submenu__item_collections"> <a href="/collections/" class="submenu__link clearfix"> 
                   <span class="title">Колекції</span> </a> 
                   <div class="submenu__extra-links"> <a href="/collections/kinorium/300/" class="submenu__extra-link"> <span>Топ-500</span> </a> 
                   </div> 
                   </li> 
                   <li class="submenu__item submenu__item_recommendations"> <a href="/recommendations/" class="submenu__link clearfix"> <span class="title">Рекомендації</span> </a>
                    <div class="submenu__extra-links"> 
                    <a href="/recommendations/movies/" class="submenu__extra-link submenu__extra-link_cinema clearfix"> 
                    <span>Фільми</span> </a> <span>•</span> <a href="/recommendations/shows/" class="submenu__extra-link clearfix"> 
                    <span>Серіали</span>
                     </a> 
                     </div> 
                     </li>
                      <li class="submenu__item submenu__item_collections"> <a href="/search/names/" class="submenu__link clearfix"> 
                      <span class="title">Пошук за іменем</span> </a>
                       </li> 
                       </ul> 
                       </li> 
                       <li> <a class="submenu-opener" href="/shows/" rel="nocache">Серіали</a> 
                       <ul class="submenu submenu-js-init submenu_serial"> 
                       <li class="submenu__item submenu__item_popular"> <a href="/shows/popular/" class="submenu__link clearfix"> <span class="title">Популярні</span> </a> 
                       <div class="submenu__extra-links"> <a href="/collections/kinorium/301/" class="submenu__extra-link submenu__extra-link_cinema clearfix"> <span>Топ-500</span> </a> <span>•</span> <a href="/shows/premier/" class="submenu__extra-link submenu__extra-link_cinema clearfix"> <span>Скоро</span> </a> 
                       </div>
                        </li>
                         <li class="submenu__item submenu__item_my"> <a href="/shows/my/" class="submenu__link clearfix"> <span class="title">Мої серіали</span> </a> 
                         </li> 
                         <li class="submenu__item submenu__item_future"> <a href="/shows/calendar/" class="submenu__link clearfix"> 
                         <span class="title">Мій календар</span> </a> 
                         </li> 
                         </ul>
                          </li>
                           <li class="topMenu__item_bull">•</li>
                            <li class="topMenu__status-counter"> 
                            <a class="link_status_counter submenu-opener" href="/feed/"> Стрічка </a>
                             <ul class="submenu submenu-js-init"> <li class="submenu__item submenu__item_friends">
                                <a href="/feed/friends/" class="submenu__link clearfix"> <span class="title"> Друзі </span> <span class="statusCounter" style={{display:"none"}}> </span> </a> 
                                </li> 
                                <li class="submenu__item submenu__item_any"> <a href="/feed/favorites/" class="submenu__link clearfix"> <span class="title">Обране</span> </a> </li> </ul>
                                 <span class="statusCounter" style={{display:"none"}}> </span> </li> 
                                 <li> <a class="link_status_counter submenu-opener" href="/videos/">Відео</a> 
                                 <ul class="submenu submenu-js-init"> 
                                 <li class="submenu__item"> <a href="/videos/trailers/" class="submenu__link clearfix"> <span class="title"> Трейлери </span> 
                                 <span class="trailerCounter" style={{display:"none"}}> </span> 
                                 </a> 
                                 </li> 
                                 <li class="submenu__item submenu__item_any"> <a href="/videos/reviews/" class="submenu__link clearfix"> <span class="title">Огляди прем’єр</span> </a> 
                                 </li> 
                                 </ul> <span class="trailerCounter" style={{display:"none"}}> </span>
                                  </li> <li> <a class="link_status_counter" href="/news/">Новини</a> <span class="newsCounter" style={{display:"none"}}> </span> 
                                  </li> 
                                  </ul>
                                   <div class="topMenu__search-wrap">
                                      <button class="search_reset"></button> 
                                      <input type="textfield" spellcheck="false" class="topMenu__Search ui-autocomplete-input" placeholder="Швидкий пошук" value="" autocomplete="off"> </input>
                                      </div> 
                                      </div> 
                                      </div>
                                       <div class="clear" style={{height:"0;"}}></div>
                                        </div> </div>*/
