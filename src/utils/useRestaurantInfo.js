// always have prefix "use" for hooks

import { useState, useEffect } from "react";

// set contract, input and output
const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState({});
  useEffect(() => {
    fecthMenu();
  }, []);

  const fecthMenu = async () => {
    const data = await fetch("https://dummyjson.com/recipes/" + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantInfo;
