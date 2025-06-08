import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable - super powerful variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const arr = useState([]);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //if no dependency array, will be called on every component render, i.e, also when component is rerendered based on state changes.
  useEffect(() => {
    console.log("rendered everytime");
  });

  //if empty dependency array, will be called only on first or initial component render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes"); //fetch is given by browsers (JS Engine)
    const json = await data.json();
    console.log("json", json);

    setListOfRestaurants(json.recipes);
    setFilteredRestaurants(json.recipes);
  };
  // whenever state variable update, it rerenders the component and its children. (reconciliation cycle)
  console.log("body rendered");
  //Codnitional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button
          onClick={() => {
            //searchText
            console.log("SearchText", searchText);
            //filter the restaurant cards and update UI
            const filteredList = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log("filteredList", filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.rating > 4
            );
            // listOfRestaurants = filteredList;
            setFilteredRestaurants(filteredList);
            console.log("listOfRestaurants", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {/* {RestaurantCard()} // cries if props are not passed and method epxects*/}
      </div>
    </div>
  );
};

export default Body;
