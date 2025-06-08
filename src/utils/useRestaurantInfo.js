// always have prefix "use" for hooks

import { useState, useEffect } from "react";
import { RES_MENU_URL } from "./constants";

// set contract, input and output
const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState({});
  useEffect(() => {
    const fecthMenu = async () => {
      const data = await fetch(RES_MENU_URL + resId);
      const json = await data.json();
      setResInfo(json.data);
    };
    fecthMenu();
  }, []);

  return resInfo;
};

export default useRestaurantInfo;
