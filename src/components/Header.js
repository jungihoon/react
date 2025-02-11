import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/logo.png";

function Header() {
  return (
    <header>
      <h1>
        <NavLink to="/">
          <img src={img1} alt="사이트 로고" />
        </NavLink>
      </h1>
      <nav>
        <ul>
          {/* <li>
            <NavLink to="/ Main">???</NavLink>
          </li> */}
          <li>
            <NavLink to="/Company">공사소개</NavLink>
          </li>
          <li>
            <NavLink to="/Business">주요사업</NavLink>
          </li>
          <li>
            <NavLink to="/Train">열차소개</NavLink>
          </li>
          <li>
            <NavLink to="/Fee">이건먼데</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
