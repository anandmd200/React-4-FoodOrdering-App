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

    //get data from API 
    useEffect(()=>{
        getRestaurenMenus();
    },[]);

    //return restaurent data;

    return restaurent;
};

export default useRestaurent;