import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_CDN } from "../constant";
import useRestaurent from "../Utils/useRestaurent";
import Shimmer from "./Shimmer";

const RestaurentMenu = () =>{
    const parms = useParams();
    const id = parms.id;
    const restaurent = useRestaurent(id);
    
    if(!restaurent){
        return <Shimmer />;
    }

    return (
       <div className="restauren-menu">
             <div>
                <h2>{restaurent.name}</h2>
                <img className="Restaurent_image" src={image_CDN + restaurent.cloudinaryImageId} alt="Logo" />
                <h4>{restaurent.city}</h4>
                <h4>{restaurent.area}</h4>
                <h4>{restaurent.avgRating} Stars</h4>
            </div>
            <div>
                <h1>Menus</h1>
                <ul>
                    {Object.values(restaurent?.menu?.items).map((item)=> <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
       </div>
    )
}
export default RestaurentMenu;
