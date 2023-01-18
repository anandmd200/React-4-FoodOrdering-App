import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurant] = useState([]);
  const [allReataurents, setAllRestauren] = useState([]);

  function searchResturant(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  }

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestauren(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurantList()
    // .catch(console.error)
    // .then(console.log("we are cleanup here"));
  }, []);

  console.log("render");

  //early return;

  // if (allReataurents.length === 0) return <h1>No Restaurent found</h1>;

  return allReataurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Seach here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            let result = searchResturant(searchText, allReataurents);
            setFilterRestaurant(result);
          }}
        >
          Seach
        </button>
        <p>{searchText}</p>
      </div>
      <div className="resturant-list">
        {/* Turnary Oprator to handle empty case when no searchText Found */
          
          filterRestaurants.length === 0 ? (
          <h1>No filted match found</h1>
        ) : (
          filterRestaurants.map((Element) => {
            return <RestaurantCard {...Element.data} key={Element.data.id} />;
          })
        )}
      </div>
    </>
  );
};
export default Body;
