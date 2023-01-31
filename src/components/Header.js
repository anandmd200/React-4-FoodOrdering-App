import { useState } from "react";
import logo from "../assets/foodvillalogo.png";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a className="w-20" href="/" >
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <Title />
      <div className="nav-item">
        <ul className="flex">
          <li className="p-2 mt-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 mt-3">
            <Link to="/about">About</Link>
          </li>
          <li  className="p-2 mt-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li  className="p-2 mt-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li  className="p-2 mt-3" >Cart</li>
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
