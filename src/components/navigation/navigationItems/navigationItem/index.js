import React from "react";
import { Link } from "react-scroll";

const NavigationItem = (props) => {
  let listItem = (
    <li>
      <Link
        to={props.link}
        activeClass="active"
        duration={500}
        smooth={true}
        offset={0}
      >
        {props.children}
      </Link>
    </li>
  );

  return listItem;
};

export default NavigationItem;
