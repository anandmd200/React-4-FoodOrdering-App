import { useState } from "react";
import logo from "../assets/foodvillalogo.png";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-container">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log In</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
      )}
    </div>
  );
};
export default Header;
