import { Component } from "react";

import ProfileClassComponent from "./ProfileClass"


// const About2 = () => {
//     return (
//         <div>
//             <br />
//             <h3>About Us Page</h3>
//             <p>This is react live implementation</p>
//             <p>Let's check for class</p>
//             <Profile  name={"Anand Kumar"}/>
//             <ProfileClassComponent name={"Anand Kumar"} />
//         </div>
//     );
// }

// // export default About2;


class About extends Component{

    constructor(props){
        super(props);

        this.state = {
            count:1
        }

        console.log("Parent - constructure");
    }

    componentDidMount(){
        console.log("Parent -ComponentDidMount");
    }

    render(){
        return (
            <div>
                {console.log("Parent-Render")}
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