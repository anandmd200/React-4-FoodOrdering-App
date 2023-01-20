# React-7-FoodOrdering-App (Routing)
## React Router DOM 
It is a very popular plugin which is used for client side routing in react application.
#### Note:
- Never create a component. You can compose it if required.
- Never write useState() inside conditional (if-else statement).Because useState() creates it's own variable if you put state inside if-else react would not know whether the state variable is created or not and it will leads to the inconsistency.
- Never write useState() inside for loop. Even it would not required in future :)
- useState() is a hook that react gives you to create local state variable inside component So Never declare useState() outside of your componet.
- In enterprise App the images kept on CDN in a optimised way because it deleivers the images very fast.
- don't import packages for small things, Improt when things gets more complecated.
- `formic` is a pliwhich used to create the complex form like `forms in Finacial Domain or Something else`.
[formic Create forms without tears](https://formik.org/docs/overview)

***
### Can we create more useEffect inside component?
Yes you can! As per the requirement or usecases.

***
### How to setup routes in project explain?
install router Package: 
```
npm install react-router-dom
```
Now in App.js file:

```
import { createBrowserRouter } from "react-router-dom";

//now need setup some routerconfiguration: 

const appRouter = createBrowserRouter([
  {
    path:"/",
    Element: <AppLayout />
  },
  {
    path:"/about",
    Element: <About />
  }
])


// now this wouldn't work because we need to provide: 

import { RouterProvider } from "react-router-dom";

this is componet which takes router configuration `appRouter` and provides it to react.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// Now root will render all component which RouterProvider config is provides.
```
***
### How to setup wildcraft route for error page?

you can provide defalt configuration with error component using the `useRouterError()` Hook;
```
import { useRouteError } from "react-router-dom";

const Error = () =>{

    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h3>Opps!!</h3>
            <h4>Something Went wrong!!</h4>
            <h4>{err.data}</h4>
            <h5>{err.status + " " + err.statusText}</h5>
        </>
    )
}

export default Error;


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />   //this is configuration 
  },
  {
    path:"/about",
    element: <About />
  }
])
```
***
### what is single page application (SPA)? 
A single page application doesn't make network call when we change page. Or it not refersh the page.
for navigating between page onClick the react-router-dom provides `Link` work as:

```
 <a href="/about">about</a>

<Link to="/about">about</Link>

```
***
### How to create nested route?
```
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />   // fill all nested componet provided
      <Footer />   // by childern configuration
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      }
    ]
  },
 
])

//show more nested: http://localhost:1234/contact/about

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/contact",
        element: <Contact />,
        children:[
          {
            path:"contact/about",
            element: <About />
          }
        ]
      }
    ]
  },
])
```
***
### How to implement dynamic routes? 
Router Configuration 
```
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/restaurent/:id",
        element: <RestaurentMenu />
      }
    ]
  },
])


//component: 
import { useParams } from "react-router-dom";

const RestaurentMenu = () =>{
    const param = useParams();
    return (
        <div>
            <h2>ResTaurent Name:  </h2>
            <h2>Restuaren Id : {param.id}</h2>
        </div>
    )
}
export default RestaurentMenu;
```
***
#### NOte: 
`useParams()` is hook that provide the feature to access the params provided in routes(Id or any param)

### how to convert the objects into array of Object (Object.values(restaurent.menu.items))?
The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

***
### What is the various way to add images to our app? Explain with code Example?
The two common way of adding image are: 
+ CDN :
```
<img className="logo" src="https://image.url" alt="Logo" />
```
+ From assests (Local folder): 
```
import logo from "../assets/foodvillalogo.png";
<img className="logo" src={logo} alt="Logo" />
```
### what would be happens if we console.log(useState());
***
### How useEffect() behaves if we don't add dependency array?
The default behaviour of `useEffect()` is called after every render and this follows the same. It will call after each render.

***
### What is difference between client side routing and server side routing?
#### Server-side
- When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

- A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

##### Pros
- A server-side route will only request the data that’s needed. No more, no less.
Because server-side routing has been the standard for a long time, search engines are optimised for webpages that come from the server.
##### Cons
- Every request results in a full-page refresh. That means that unnecessary data is being requested. A header and a footer of a webpage often stays the same. This isn’t something you would want to request from the server again.
- It can take a while for the page to be rendered. However, this is only the case when the document to be rendered is very large or when you have slow internet speed.
#### Client-side
- A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

- It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.

##### Pros
- Because less data is processed, routing between views is generally faster.
- Smooth transitions and animations between views are easier to implement.
##### Cons
- The whole website or web-application needs to be loaded on the first request. That’s why the initial loading time usually takes longer.
- Because the whole website or web-application is loaded initially, there is a possibility that there is data downloaded for views you won’t even come across.
- It requires more setup work or even a library. Because server-side is the standard, extra code must be written to make client-side routing possible.
- Search engine crawling is less optimised. Google is making good progress on crawling single-paged-apps, but it isn’t nearly as efficient as server-side routed websites.

***