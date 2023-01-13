# React-5-FoodOrdering-App
### what is difference `Default`, `Named`and `* as` exports?
In `Default Export`you can export only one component syntax:-
```
const Title = () => {
  return (
    <a href="/">
      <h1>Hello React</h1>
    </a>
  );
};

export default Title; 
``` 
```
import Title from './components/Title'    -> default import
```
In `Named Export`you can export only one or multiple component syntax:-

```
export const Title = () => {
  return (
    <a href="/">
      <h1>Hello React</h1>
    </a>
  );
};
``` 
```
import {Title} from './components/Title'   -> Named Import 
```


In `* as`you can export only one or multiple component syntax:-

```
export const Title = () => {
  return (
    <a href="/">
      <h1>Hello React</h1>
    </a>
  );
};

export const Header = () => (
  <div className="header-container">
    <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
``` 
```
import {Title,Header} from './components/componentName' -> Named Import 

or 

import * as Obj from './components/componentName'

<obj.Title /> <obj.Header />
```

### what is importance of config.js file?

It's good convention/practice to have `config or constant` file in the app. It containts all the hardCoded things or constant things which will be going to use in the muliple componets so that if any changes occurs in future then you need to make changes only one place.

### What is react Hooks? 
At the end of the day Hooks are the normal function.We can create our own Hooks.it is written by FB dev and it provides some cool features like `useState`;

```
import {useState} from "react";
const [searchText, setSearchText]  = useState('Default value');     // create  state varibale 

or

const searchObj = useState();
const [searchText, setSearchText] = searchObj;  // object destructuring.
```
useState() => returns Array[] in which 
- Array[0] => local state variable name
- Array[1] => Function to set and update the value of Array[0] variable.

### why do we need useState Hook?
Suppose, We don't use the `useState` then react doesn't have the track of when data is modified.
the useState hooks make sync the variable with the UI and react also have the track when the data is modified. One more thing you can't modify the state varialbe directly you should have to implement the `setVariable` method provided by useState().

### You will not able to write anything inside input type text if you assigned `value=""`?
Beacuse React support the data binding (2-way & 1-way) concept. You only able to change data if some how you bind data from view to componet and componet to view.

### Note: 
- React uses the React type variable to bind the data.
- Every React component maintains the state and you can put your variable into state.
- For creating a local vriable always use state vaiable. 

### what is event.target.value is? 
```
const input1 = document.createElement('input');
document.body.appendChild(input1);
input1.value = "hello";

function showData(evt) {
  console.log(evt.target.value);
}
input1.addEventListener('click', showData);
```