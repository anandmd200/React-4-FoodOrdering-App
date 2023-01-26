# React-8-Let's Get classy (calss Based Component and LifeCycle)


### Note
- React uses one object to manage the all states  both in (Functional and Class).
```
    const [count]  = useState(0);
    const [count2] = useState(0);

    this.state = {
        count : 0,
        count2: 0
    }

``` 
- Do not mutate state directily use Proper set Statement: 
```
<button onClick={()=>{
                   
    this.setState({
        count:1,
        })
}}>SetCount</button>

<button onClick={()=>{
    setCount(1);
}}>Setcout</button>
```
- useEffect is best place to call API because it component 1st renders then it calls useEffect and the update the view.
- Similarly in class Based Component there is something called `componentDidMount()` which has same behaviour as useEffect.

### How to create ClassBased Component and How get access of props inside class based component Vs funtional based component? 

Passing Props both in functional and class based Components: 
```
import ProfileClassComponent from "./ProfileClass"
import Profile from "./Profile";
const About = () => {
    return (
        <div>
            <Profile  name={"Anand Kumar"}/>
            <ProfileClassComponent name={"Anand Kumar"} />
        </div>
    );
}
export default About;
```
Receiving in class based Component: 
```
import React from "react";

class Profile extends React.Component {
    render(){
        return (
            <div>
                <br />
                <h3>Profile Class Component</h3>
                {console.log(this.props.name)}
                <p>Degination: Colemine</p>
            </div>
        )
    }
}
export default Profile;
```
Receiveing in Functional Based Component: 

```
const Profile = (props) =>{
    return (
        <div>
            <br />
            <h3>Profile Functional Component</h3>
            <p>Name: {props.name}</p>
            <p>UserName: AnandMd2001</p>
            <p>Email:anandmd@gmail.com </p>
        </div>
    );
}
export default Profile;
```

### what is `this` inside class based components? 
The ‘this’ keyword typically references a JavaScript element depending on the scope or context of its use.
####
See, if this key word used in normal console the it points to the Global `window` object of the browser.

But here(in ClassBased Component) it's pointing the properties of the class.Means it is accessable as the global object of the class.
And we can access every props or other object using `this`.
[Medium Reference](https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480)

### why do we use `super(props)` inside constructor? 

`constructor` It is a best place of initialization. And when the class is invoked or instantiated the constructor is called first.

- And this is best place of creating state variable.

### what is single Class Based component exectution sequence.
```

class Profile extends React.Component {

    constructor(props){
        super(props);
        console.log("constructer");
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    render(){
        return (
            {console.log("render")}
        )
    }
}

```

Sequence :
+ Constustor 
+ Render
+ ComponentDidMount

### In context of Parent and child relationship component execution sequence?

+ Parent constructure-parent
+ Parent render-parent
    + Child constructer
    + Child render
    + Child ComponentDidMount
+ Parent ComponentDidMount



### what would be exectution sequence among parent, first-child and Second-child at same lavel? 
- Parent - constructure
- Parent-Render
- -  First-Child Constructor
- -  First-Child Render
- - - Second-Child Constructor
- - - Second-Child Render
- - First-Child ComponentDitMount
- - - Second-Child ComponentDitMount
- Parent -ComponentDidMount


### Explain about the phases of React LifeCycle?

[React LifeCycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

There are two Phases defined: 
+ Render Phase (Render the component on every State or Props Changes) = [constructor + Render]
+ Commit Phase (Upadate the DOM with latest changes) =[componentDidMount]

### which phase is fast render or Commit phase?
Updating DOM is a expensive process So render is fast to commit phases.


### why would we see delay in child-componentDidMount when we are performing API call in side async componentDidMount? 
- Parent - constructure
- Parent-Render
  - - First-Child Constructor
  - - First-Child Render
    
    Render Phase ends!

    Commit Phase Start: 
    API CALL Performs  => this API call takes some time and The child-ComponentDidMount function is async so React(js) not waits for it. and Parent - componentDidMount is called.

- Parent -ComponentDidMount

Now data is logs: 
{login: 'anandmd200', id: 80383762, node_id: 'MDQ6VXNlcjgwMzgzNzYy', avatar_url: 'https://avatars.githubusercontent.com/u/80383762?v=4', gravatar_id: '', …}
- - First-ChildComponentDid Mount
- - `First-Child Render (Again)` this re-render cycle after Data Fetched and state changes known as `Updating`  


### when componentDidUpdate is called? 
it is called after every render for updating phase when API has been called (componentDidMount Executions ends) and it will render DOM and updates the chnages into the UI.

### Note: 
- After 1st render the `componentDidMount` is Called only once.
- when components already mounted then after every render only `componentDidUpdate` is called,and componentDidMount is not called.
- `ComponentWillUnmount` called when we chnage the page or switch the routes.


### componentDidUpdate() is a life cycle method which is called after every render, then how will you write code so that it will run when ever the state changes? 

```
    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
            //do something 
        }
        console.log("Component-did-Update is called");
    }

    IS EQUIVALENT TO

    useEffect(()=>{
       //do something

    },[count,count2])

```
this is why useEffect takes dependency array because in classbased component it useto be very difficult to manage.

### why `componentWillUnmount()` is important and how it's cleanup the code? 
It is called when we chnage the pages at this time we need to clen-up things which is un-neccessarly excutes even the page has changed. e.g, setInterval(), rxjs subscribe(), So it is required to cleanInterval and unsubscribe the things. If you are not clean things up there are a lots of `Performance Loss` going on.


```
Classbased component:

   componentDidMount(){
    this.timer = setInterval(()=>{
        console.log("Namaste React OP");
    },1000);
   }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentwillunmount has beed called");
    }

Funtional Component: 

    useEffect(()=>{
       const timer = setInterval(()=>{
        console.log("React is OP");
       },1000)
        console.log("useEffect");

       return() => {              -------------> unmouting phase for function component.
        clearInterval(timer);
       }
    },[])
    
```

### Why we can't make useEffect(async()=>{}[]) but we can make async componentDidMount()?
 Because React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.