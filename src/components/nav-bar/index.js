import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav-bar">
      <ul>
        <li>
          <Link to="/pwebsite/">Home</Link>
        </li>
        <li>
          <Link to="/pwebsite/about">About</Link>
        </li>
        <li>
          <Link to="#Resume">Resume</Link>
        </li>
        {/* <li>
              <a href="#Projects">Projects</a>
            </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
