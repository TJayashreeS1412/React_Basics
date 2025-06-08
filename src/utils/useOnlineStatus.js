import { useEffect, useState } from "react";

//finalise contract - input, output
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online - use online event listener(window object/browser gives us)

  // add event listener only once
  useEffect(() => {
    window.addEventListener("offline", () => setOnlineStatus(false));
    window.addEventListener("online", () => setOnlineStatus(true));
  }, []);

  return onlineStatus; //boolean value
};

export default useOnlineStatus;
