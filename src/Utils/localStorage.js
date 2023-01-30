import { useEffect, useState } from "react";

const useLocalStorage = (key,value) =>{

    const [storageValue,setStorageValue] = useState(null);

   // set localstorage value;
    const setValue = (key,value) =>{
        window.localStorage.setItem(key,value);
    }
   //get local Storage value;

   const getValue = (key) =>{
    const value = window.localStorage.getItem(key);
    setStorageValue(value);
   }

   useEffect(()=>{
    const item = window.localStorage.getItem(key);
    if(!item){
        setValue(key,value);
    }else{
        getValue(key);
    }
   },[])

   return [storageValue,setValue];
}

export default useLocalStorage;