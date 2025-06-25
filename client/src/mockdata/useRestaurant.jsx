import { useEffect, useState } from "react";
import { MENU_API } from "./contacts";

const useRestaurant = () => {
  const [resdet, setresdet] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    setresdet(json);
  };
  return resdet;
};
export default useRestaurant;