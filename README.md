# React-11-Context API (Data is new Oil Data Handling globally)

### Note:
- Data handling is one of the most crutial tast in web apps
- Every web Apps consist of 2-layers 
- - Data Layer
- - UI Layer (Every UI layer is powered by data layer)

### what is difference between props and State?
`state` which is use to manage data within a scope as a local state varible. basically inside a component.
`props` it is prameter inside a component to passing data from one component to another parent-child component you can say it as `props drilling` it can be local state variable for the `parent component`.

### What is props drilling? 
Passing data or local state variable of parent to it's child and then child to it's child and so on at the lower hierarchy.
means you pass the data from parent to end child and the component in between have no need of this props data as they works only as a medium is known as props drilling. And component in between re-renders un-necessary which works as medium. 

- AppLayout 
- -  Body (props)
- - + Restauren (props)
- - + + ReasturenCard(props) receives props show to UI.

even this hierarchy increased more deep. 

#### NOte:  
- props drilling is not a good way passing data it show be passed if hierarchy is 2 or three level.

### what is lifting the state up? 
Lifting the parent state to the child component such a way that parent have all the controls over the child component using the local state variable of praent. which can modifis the parent state by the help of child event. known as lifting the state up; 

### what is context API and why do we need this? 
A context is centeral space for storing data in the boject formate. It is totally different from state and props. The Conatext is available whole accross the component. 

#### Creation of context: 

```
import { createContext } from "react";

export const UserInfoContext = createContext({
    user:{
        userName:"Anand Kumar",
        email:"anand123@gmail.com"
    },
});

export default UserInfoContext;
```
Consuming conetext inside Footer Function component using `useConext` hook imported form `react`:

```
import { useContext } from "react";
import UserInfoContext from "../Utils/UserInfoContext";

const Footer = () => {
  const {user} = useContext(UserInfoContext);
  console.log(user);
  return (
    <>
      <h1>Footer Component</h1>
      <h1>{user.userName}</h1>
    </>
  );
};

export default Footer;
``` 

### How to provide context to the every Component? 
```
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ananad Kumar",
    email:"anandmd2002@gmail.com"
  }) 
  return (
    <UserContext.Provider value={{
      user: user,
      setUser:setUser,
    }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

```

### How to use Context inside Class Component? 
```
import UserContext from "../Utils/UserContext";

<UserContext.Consumer>
  {({ user }) => <h1 className="font-bold text-xl">{user.name}</h1>}
</UserContext.Consumer>
```

### How to update context on object field Value?
```
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
    </>
  );
};

```
