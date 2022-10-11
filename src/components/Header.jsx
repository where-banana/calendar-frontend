import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={"header"}>
          <p className={"company"}>🍌Where is banana?🍌</p>
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/ws">
                <li>Workspaces</li>
              </Link>
              <Link to="about">
                <li>AboutUs</li>
              </Link>
            </ul>
          </nav>
        </div>
    );
};

export default Header;