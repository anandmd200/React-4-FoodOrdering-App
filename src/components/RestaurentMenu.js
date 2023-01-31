import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_CDN } from "../constant";
import useRestaurent from "../Utils/useRestaurent";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const parms = useParams();
  const id = parms.id;
  const restaurent = useRestaurent(id);

  if (!restaurent) {
    return <Shimmer />;
  }

  return (
    <div className="flex m-2 justify-center  ">
      <div className="text-center">
        <h1 className="text-lg font-bold">Restauren Name</h1>
        <div className="rounded-lg w-80 text-center border-solid border-2 border-pink-100">
          <img
            className="Restaurent_image rounded-lg"
            src={image_CDN + restaurent.cloudinaryImageId}
            alt="Logo"
          />
          <h2 className="font-bold">{restaurent.name}</h2>
          <h4>{restaurent.city}</h4>
          <h4>{restaurent.area}</h4>
          <h4>{restaurent.avgRating} Stars</h4>
        </div>
      </div>
      <div className="mx-10">
        <h1 className="text-lg font-bold">Menus</h1>
        <ul className="max-w-20">
          {Object.values(restaurent?.menu?.items).map((item, i) =>
            i <= 4 ? (
              <li
                className="list-decimal border-solid border-2 border-pink-100 p-3 m-2 rounded-lg "
                key={item.id}
              >
                {item.name}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurentMenu;
