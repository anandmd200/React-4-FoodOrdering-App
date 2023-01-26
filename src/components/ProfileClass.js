import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        //creating state
        this.state = {
           userInfo: {
                login: "Dummy Name",
                location: "Dummy Location"
           }
        }
        console.log(this.props.name + " Constructor");
    }
    
    /*
    async componentDidMount(){
        //best place to API Call
        const data = await fetch('https://api.github.com/users/anandmd200');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
        console.log(this.props.name + "ComponentDid Mount");
    }
    */
   componentDidMount(){
    this.timer = setInterval(()=>{
        console.log("Namaste React OP");
    },1000);
   }

    componentDidUpdate(prevProps, prevState){
        // if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
        //     do something 
        // }
        console.log("Component-did-Update is called");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentwillunmount has beed called");
    }

    render(){
        return (
            
            <div>
                {console.log(this.props.name + " Render")}
                <br />
                <h3>Profile Class Component</h3>
                <img src={this.state.userInfo.avatar_url}/>
                <p>UserName: {this.state?.userInfo?.name}</p>
                <p>UserName: {this.state?.userInfo?.login}</p>
                <p>UserName: {this.state?.userInfo?.location}</p>
            </div>
        )
    }
}

export default Profile;