import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {

  const {user} = useContext(UserContext);

  return (
    <div>
      <h1>Footer Component</h1>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Footer;