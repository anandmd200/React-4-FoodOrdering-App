import Profile from "./Profile";
import UserContext from "../Utils/UserContext";
import { useContext } from "react";
const Contact = () => {

const {user,setUser} = useContext(UserContext);
  return (
    <>
      <input
        type="text"
        value={user.name}
        className="border-solidborder-solid border-2 border-pink-200 px-5 rounded-md"
        onChange={(e) => {setUser({
            name:e.target.value,
            email:"Anand@234@gmail.com"
        })}}
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <h3>Get in touch!!</h3>
      <h4>Facebook</h4>
      <h4>Instagram</h4>
      <p>Email: Ananad@gmail.com</p>
      <Profile name={"Anand"} />
    </>
  );
};

export default Contact;
