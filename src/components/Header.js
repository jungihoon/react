import React from 'react';
import {NavLink} from 'react-router-dom';
import img1 from '../images/logo.svg';

function Header() {
    return (
      <header>
       <h1><NavLink to="/" ><img src={img1} alt="사이트 로고" /></NavLink></h1>
       <nav>
           <ul>
               <li><NavLink to="/Company">공사소개</NavLink></li>
               <li><NavLink to="/Business">사업소개</NavLink></li>
               <li><NavLink to="/Train">열차소개</NavLink></li>
               <li><NavLink to="/Fee">열차운임표</NavLink></li>
               <li><NavLink to="/Place">역위치정보</NavLink></li>
           </ul>
         </nav>
       </header>
    );
  }

  export default Header;