import { Component } from "react";
import ProfileClassComponent from "./ProfileClass";
import UserContext from "../Utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    console.log("Parent - constructure");
  }

  componentDidMount() {
    console.log("Parent -ComponentDidMount");
  }

  render() {
    return (
      <div>
        {console.log("Parent-Render")}
        <UserContext.Consumer>
          {({ user }) => <h1 className="font-bold text-xl">{user.name}</h1>}
        </UserContext.Consumer>
        <br />
        <h3>About Us Page</h3>
        <p>This is react live implementation</p>
        <p>Let's check for class</p>
        <ProfileClassComponent name={"First-Child"} />
      </div>
    );
  }
}

export default About;
