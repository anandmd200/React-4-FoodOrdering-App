import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurant] = useState(restaurantList);


  function searchResturant(searchText,restaurants){
    return restaurants.filter(restaurant => restaurant.data.name.includes(searchText));
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Seach here"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={()=>{
            let result = searchResturant(searchText,restaurants);
            setRestaurant(result);
        }}>Seach</button>
        <p>{searchText}</p>
      </div>
      <div className="resturant-list">
        {restaurants.map((Element) => {
          return <RestaurantCard {...Element.data} key={Element.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
