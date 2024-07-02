import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  selectCartTotal,
} from "../../redux/CartSlice";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4 mt-10 mb-10">
      <h1 className="text-2xl font-bold text-gray-600">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <>
       <section className="bg-white ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-3xl tracking-tight font-semibold lg:text-5xl text-pink-600">Your cart currently is empty</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"> You'll find lots to explore on the home page. </p>
            <button
                  onClick={handleContinueShopping}
                  className="text-sm px-4 py-2.5  font-semibold tracking-wide text-white  bg-pink-500 hover:bg-pink-600 rounded-md"
                >
                  Continue Shopping
                </button>
        </div>   
    </div>
</section>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"
                >
                  <div className="flex gap-4">
                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                      <img
                        src={item.image}
                        className="w-full h-full object-contain"
                        alt={item.title}
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-base font-bold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                          Color:{" "}
                          <span className="inline-block w-5 h-5 rounded-md bg-[#ac7f48]"></span>
                        </p>
                      </div>

                      <div className="mt-auto flex items-center gap-3">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2 fill-white"
                            viewBox="0 0 124 124"
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </button>
                        <span className="font-bold text-sm leading-[18px]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2 fill-white"
                            viewBox="0 0 42 42"
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col">
                    <div className="flex items-start gap-4 justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 cursor-pointer fill-gray-400 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        ></path>
                      </svg>

                      <svg
                        onClick={() => handleRemoveItem(item.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 cursor-pointer fill-gray-400 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mt-auto">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className=" bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <ul className="text-gray-800 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal{" "}
                  <span className="ml-auto font-bold">${total.toFixed(2)}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping <span className="ml-auto font-bold">$2.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">$4.00</span>
                </li>
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">
                  Total{" "}
                  <span className="ml-auto">${(total + 6).toFixed(2)}</span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <button
                  onClick={handleCheckout}
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-pink-600 hover:bg-pink-700 text-white rounded-md"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleContinueShopping}
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <img
                  src="https://readymadeui.com/images/master.webp"
                  alt="card1"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/visa.webp"
                  alt="card2"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/american-express.webp"
                  alt="card3"
                  className="w-10 object-contain"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
