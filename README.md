# React-9-Optimising Our App


### Note
- Always create a hook as `use<Hook_name>` this is react style of creating the Hook.
- if there is a one component or one file which is build to serve one task then use `default export`. or Use named export like `helper.js` doesn't make sance what are functions are there user named export in this case.

### when, how and why we need to build hooks?

#### why:
- Reusability
- Readbility
- Maintainility / seperation of concerns

In our application we have function like filter or Search which also can be used by other component too. so this is normal convention or good practice that Keep the reusable function or code inside `Utils` Folder. 
- this makes our code more re-usable, testable, modular, maintainable (Easy to debug).

### Write a hook for fething Restuaren Menu Data? 
```
import { useState } from "react";
import { useEffect } from "react";
import { RESTAURENT_MENU_URL } from "../constant";
const useRestaurent = (id) =>{

    const [restaurent,setRestaurent] = useState(null);

    async function getRestaurenMenus(){
        const data = await fetch(RESTAURENT_MENU_URL + id);
        const JsonData = await data.json();
        setRestaurent(JsonData.data);
    }
    useEffect(()=>{
        getRestaurenMenus();
    },[]);

    return restaurent;
};

export default useRestaurent;
```

### why we can't write normal JS function as Hook?
We can't use React hooks inside normal js function and it will never trigges the reconceliation process thats we can't.

### Write a hook to detect whether a you are online or offline and make early retun from the body component?

```
import { useEffect, useState } from "react";

const useOnline = () =>{

    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = ()=>{
        setIsOnline(true);
    }
    const handleOffline = () =>{
        setIsOnline(false);
    }

    useEffect(()=>{
        window.addEventListener("online" , handleOnline)
    
        window.addEventListener("offline", handleOffline)

        return () =>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[])
   return isOnline;
}

export default useOnline;


body.js:
  const isonline = useOnline();

  if(!isonline){
    return <h1>You are offline, Please check your internet connection!!</h1>
  }

```

### List down the differnt names of Lazy loading thing?
- Code Spliting
- Dynamic Loading 
- chunking
- On Demand Loading
- Dynamic Import
- Lazy loading

### How you perform lazy lode ?
#### Note: 
when you try to render dynamic lazy routes react try to render component very quickly but it wouldn't find any things there.Because it's took some time to load the Javascript and the react `suspend` the rendering of this component.
```
const Instamart = lazy(()=>import("./components/Instamart") );

{
    path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
    ),
}
```