import { useEffect, useState } from "react";

const Profile = (props) =>{

    const [count,setCount]  = useState(0);

    useEffect(()=>{
       const timer = setInterval(()=>{
        console.log("React is OP");
       },1000)
        console.log("useEffect");

       return() => {
        clearInterval(timer);
       }
    },[])

    console.log("render");
    return (
        <div>
            <br />
            <h3>Profile Functional Component</h3>
            <p>Name: {props.name}</p>
            <p>Count: {count}</p>
            <p>UserName: AnandMd2001</p>
            <p>Email:anandmd@gmail.com </p>
            <button onClick={()=>{
                setCount(1);
            }}>Setcout</button>
        </div>
    );
}

export default Profile;