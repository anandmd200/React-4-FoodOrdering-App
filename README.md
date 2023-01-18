# React-6-FoodOrdering-App

### Lecture Note: 
- The most expennsive operation -> Dom menipulation and react does it very quickly using the concept of VDOM(Reconciliation and Diff Algorithms).
- BY default the component renders ones but when You made changes in local state variable react re-renders the whole component and keep state sync with UI.
- `For example`: if you entering the search text it will rerenders whole component on every key press.

- fetch(): Is a way of Exploring world in JS and it is provided by the JS engine through window object for making call to the API.


### where to call an API? 
Inside component directly => NOOOO , Because componet renders on every state changes and it call API on every render either by changing the state or props.
#####
React provides another hook call useEffect(); to calling the API or any things that requiered execution based on given parameter in side dependency array.

### What is Microservice?

`Microservices` - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

- Independently deployable
- Loosely coupled
- Organized around business capabilities
- Owned by a small team
- Highly maintainable and testable


The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack like you can build a application using multiple tecknology like front-end : React and Angular, Backend: different module and services using different backend framework like go, java, Node and you can deploy it even different server with different ports as totally Independent features.
- example: Backed API is handled by different projet, Using JAVA
- Generating logs is one more project, Using Python
- UI is also running and build as independently, Using React
- Message sending service is managed in different project,by python
and these all containg small-small services which combinally crates a big APP.   
#### how these all projects combined?
These all projects are deplyed on the server with `same domain name` with `different port`:
```
swiggy.com:3000 - / fromtend
swiggy.com:4000 - /dpi
swiggy.com:5000 - /notification 

```

### what is Monoloth architecture?
This is traditional way of developing the application these application use to have every this in single project, like same project contains all UI, message sending feature, nofication feature, data, backend every things which is required to build the application.
- Problem is deployemt means on-every change (small or big) the new deployment of whole application is required and in this time span the is appears unable for end users.
- Advantages like we don't need to manage different repositories. Every things is availabe at one place.


### where this foodApp Lies?
It lies in Microservices of building UI-Frontend project.


### what is the Different between Monolith and Microservice?
### why do we need a useEffect Hook?
For calling a API we need something like when the page loads the API is called and the given object is filled with data once or as per requiremt.
`useEffect()` is a Hook provided by the react which is best and safe place to calling the API.
-  2 ways of calling a API:
+ As soon As User loads the Page => API(300 ms) => renderPage(200ms) = Delay to end user = (500)ms
+ As soon As User loads the Page => Render Page (100ms) => API call (300ms) => Upadate the data on UI(100ms) = 500ms 

- but second approach is better then 1st approch because here the user experiance is good the page is availabe in 100ms to end user. and UseEffect is Follows the same approach. 

```
import {useEffect} from 'react';

 useEffect(() => {
    fetch("https://APi_Url.com/userData");
  }, []);

```
####
useEffect() => takes 2 parameter: 
+ callback function() => which react(useeffect decides when to call it),
+ Dependency array => this is parameter on which the UseEffect() hook is dependent which besically deifines the how frequently call the useEffect() hook.

#### Note: 
- if Dependency Array is empty => Component Renders One and UseEffect() also called One time After 1st render.
- if Dependency Array is Filled => Component Renders One and UseEffect() called as frequently as the passing parameter or text changes. Suppose we passed `searchText` in dependency array then it called `1 + onEvery Key Press`.
- if we does not pass Dependency Array then it calls on every render of the that component where it presents.


### indside {} you can write any javaScript code?
Yes, But you should have to write javaScript expression instead of javaScript statement. 

### What is Optional Channing?
### what is Shimmer UI?
### Whatt is Differnce between JS expression and Js statement?

A `expression` Any unit of code that can be evaluated to a value is an expression. Since expressions produce values, they can appear anywhere in a program where JavaScript expects a value such as the arguments of a function invocation.
#### Example: 
+ 10+13
+ 10
+ "hello" + "world"
+ (isExpression)?"Yes":"No"

A `statement` is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.

```
var sum;
var average;
var total = 0;
// A function declaration statement 
function greet(message) {
  console.log(message);
}
```

For More Information about expression vs statement [Medium Link](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)


### What is Conditional Rendering, Explain with a code Example.
Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```
#### 
In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return null:
```
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```
### What is CORS?
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

![See Image](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)
### What is async and await?

The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

[async await error Handling](https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a)

### What is the use od `const json = await data.json()` in `getRestaurent()`?
If we do not use await here then javaScript quick complete it's execution and we would not able to get the actual data returned by the API and this will produces erroe. We only get a promise object which have details about the call but not a full response you can say you will receive only partial information.