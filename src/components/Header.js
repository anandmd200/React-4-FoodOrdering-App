import { useState } from "react";
import logo from "../assets/foodvillalogo.png";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Title = () => {
  return (
    <a className="w-20" href="/">
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const online = useOnline();
  const { user } = useContext(UserContext);

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
          <li className="p-2 mt-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 mt-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-2 mt-3">Cart</li>
        </ul>
      </div>
      <div className="">
        {online ? (
          <h1 className="text-green-500 text-center mt-5">
            <h1>{user.name}</h1> Online
          </h1>
        ) : (
          <h1>Offiline</h1>
        )}

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>
            <h1>{user.name}</h1>Log In
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
        )}
      </div>
    </div>
  );
};
export default Header;
