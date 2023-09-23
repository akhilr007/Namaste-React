import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="links" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="links" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
