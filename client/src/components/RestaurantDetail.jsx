import { useParams, useLocation } from "react-router-dom";
import React from "react";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../mockdata/cartSlice";
const RestaurantDetail = () => {
  const { resid } = useParams();
  const location = useLocation();
  const detail = location?.state?.restaurantdetails?.items || [];
  
  const dispatch=useDispatch();

  const handleAddItem = (item) => {
     dispatch(addItem(item));
    //console.log("Item added:", item);
  };
// 
  return (
    <div className="flex justify-center">
      <div className="m-12 w-4/5">
        {/* Flexbox for two items per row */}
      
        <div className="flex flex-wrap -mx-4">
          {detail.length>0?(
            detail.map((item) => (
            <div
              key={item.id}
              className="w-1/2 px-4 mb-6"
              data-testid="foodItems"
            >
              <div className="p-4 border-gray-200 border-b-2 flex justify-between items-center hover:shadow-lg transition-transform transform hover:scale-105 rounded-lg bg-white">
                {/* Left Section - Item Details */}
                <div className="w-7/12">
                  <div className="py-2">
                  
                    <span className="text-lg font-semibold">{item.name}</span>
                    <span className="ml-2 text-green-600 font-medium">
                    ₹{item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.dsc}</p>
                </div>

                {/* Right Section - Image & Add Button */}
                <div className="relative w-4/12 flex justify-center">
                  <img
                    src={item.img}
                    className="w-full h-40 object-cover rounded-lg cursor-pointer"
                    alt={item.name}
                  />
                  <button
                    className="absolute bottom-2 right-2 px-3 py-2 rounded-lg bg-black text-white shadow-lg hover:bg-gray-800 transition-all"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
              </div>
             
            </div>
          ))):(
            <Shimmer/>
          )
        }
        </div>
        
      </div>
    </div>

  );
};

export default RestaurantDetail;
