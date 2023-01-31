import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurant] = useState([]);
  const [allReataurents, setAllRestauren] = useState([]);


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
  }, []);

  const isonline = useOnline();

  if(!isonline){
    return <h1>You are offline, Please check your internet connection!!</h1>
  }


  return allReataurents.length === 0 ? (
      <Shimmer />
  ) : (
    <>
      <div className="flex justify-center mt-2">
        <input
          type="text"
          className="border-solidborder-solid border-2 border-pink-200 px-5 rounded-md"
          placeholder="Seach here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-pink-400 p-2 mx-2 w-35 rounded-md"
          onClick={() => {
            let result = filterData(searchText, allReataurents);
            setFilterRestaurant(result);
          }}
        >
          Seach
        </button>
        <p>{searchText}</p>
      </div>
      <div className="flex flex-wrap justify-center m-4">
        {/* Turnary Oprator to handle empty case when no searchText Found */
          
          filterRestaurants.length === 0 ? (
          <h1>No filted match found</h1>
        ) : (
          filterRestaurants.map((Element) => {
            return<Link to={"/restaurent/"+Element.data.id} key={Element.data.id}>
            <RestaurantCard {...Element.data} />
            </Link> 
          })
        )}
      </div>
    </>
  );
};
export default Body;
