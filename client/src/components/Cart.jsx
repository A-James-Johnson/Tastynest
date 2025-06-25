import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearItem } from "../mockdata/cartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  
  const handleClearItem = () => {
    dispatch(clearItem());
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="m-12 w-4/5">
          {/* Flexbox for two items per row */}
          <div className="flex flex-wrap -mx-4">
            {cartitems.length > 0 ? (
              
              cartitems.map((item) => (
                <div
                  key={item.id}
                  className="w-1/2 px-4 mb-6"
                  data-testid="foodItems"
                >
                  <div className="p-4 border-gray-200 border-b-2 flex justify-between items-center hover:shadow-lg transition-transform transform hover:scale-105 rounded-lg bg-white relative">
                    {/* Left Section - Item Details */}
                    <div className="w-7/12">
                      <div className="py-2">
                        <span className="text-lg font-semibold">
                          {item.name}
                        </span>
                        <span className="ml-2 text-green-600 font-medium">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.dsc}</p>
                    </div>

                    {/* Right Section - Image & Remove Button */}
                    <div className="relative w-4/12 flex justify-center">
                      <img
                        src={item.img}
                        className="w-full h-40 object-cover rounded-lg cursor-pointer"
                        alt={item.name}
                      />
                      <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {item.quantity}
                        
                      </span>
                      <button
                        className="absolute bottom-2 right-2 px-3 py-2 rounded-lg bg-black text-white shadow-lg hover:bg-gray-800 transition-all"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove -
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-lg font-semibold text-gray-500 mt-6">
                Your Cart is Empty
              </h1>
            )}
          </div>

          {cartitems.length > 0 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleClearItem}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
