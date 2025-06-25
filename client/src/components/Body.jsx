import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { MENU_API } from "../mockdata/contacts";
import Shimmer from "../components/Shimmer";
import useOnline from "../mockdata/useOnline";
import TopRatedRestaurant from "./TopRatedrestaurant";
import { NEW_DATA } from "../mockdata/contacts";
const Body = () => {
  const [filterrest, setfilterrest] = useState([]);
  const [allrestaurant, setallrestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  // console.log("is", isonline);
  const handleChange = (event) => {
    setsearchtext(event.target.value);
  };

  const handlebutton = () => {
    const filteredrest = allrestaurant.filter((data) =>
      data.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setfilterrest(filteredrest);
  };

  useEffect(() => {
    fetchdata();
    //console.log("useeffect");
  }, []);
  const isonline = useOnline();
  if (!isonline) {
    return <h1>Check your Internet Connection</h1>;
  }
  const fetchdata = async () => {
    try {
      const response = await fetch(NEW_DATA);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      //   console.log("json", json);
      //console.log("Cards Structure:", json?.data?.cards);

      let restaurants = json?.Cards;
      console.log("res", restaurants);

      // Set state or log an error if not found
      if (restaurants) {
        setfilterrest(restaurants);
        setallrestaurant(restaurants);
      } else {
        console.error("Restaurants data not found in the response", json);
        setfilterrest([]);
        setallrestaurant([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setfilterrest([]);
      setallrestaurant([]);
    }
  };
  const filterTopRatedRestaurant = (topratedres) => {
    console.log("rest", topratedres);
    setfilterrest(topratedres);
  };
  return (
    <>
      <div className="Body-search">
        <input
          type="text"
          value={searchtext}
          onChange={handleChange}
          placeholder="Search restaurants"
        />
        <button onClick={handlebutton}>Search</button>
        <TopRatedRestaurant
          onFilter={filterTopRatedRestaurant}
          restaurant={filterrest}
        />
      </div>

      <div className="Restflex">
        {filterrest.length > 0 ? (
          filterrest.map((data) => (
            <Link
              key={data.id}
              to={`/restarauntdetail/${data.id}`}
              state={{ restaurantdetails: data }}
            >
              <Restcard key={data.id} restaurantdetails={data} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default Body;
