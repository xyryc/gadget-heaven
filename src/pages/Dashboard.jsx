import { useEffect, useState } from "react";
import {
  clearCartList,
  getCartList,
  getStoredWishList,
} from "../utility/addToLs";
import { useLoaderData } from "react-router-dom";
import { TbSortDescending2 } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import SuccessImg from "../assets/success.png";
import {
  removeFromCartList,
  removeFromWishList,
} from "../utility/removeFromLs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const allProducts = useLoaderData();

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTab === "cart") {
      const storedCartList = getCartList();
      const storedCartListInt = storedCartList.map((id) => parseInt(id));

      const cartList = allProducts.filter((product) =>
        storedCartListInt.includes(product.product_id)
      );

      setItems(cartList);

      // Calculate total price
      const calculatedTotalPrice = cartList.reduce(
        (acc, product) => acc + product.price,
        0
      );
      setTotalPrice(calculatedTotalPrice);
    } else {
      const storedWishList = getStoredWishList();
      const storedWishListInt = storedWishList.map((id) => parseInt(id));

      const wishList = allProducts.filter((product) =>
        storedWishListInt.includes(product.product_id)
      );

      setItems(wishList);
    }
  }, [activeTab, allProducts]);

  const handleSortByPrice = () => {
    const sortedItems = [...items].sort((a, b) => b.price - a.price);
    setItems(sortedItems);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePurchase = () => {
    setShowModal(true);
    setItems([]);
    clearCartList();
  };

  const handleCloseModal = () => {
    setTotalPrice(0);
    setShowModal(false);
    navigate("/");
  };

  const handleRemoveFromCart = (id) => {
    removeFromCartList(id);
    setItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
    const storedCartList = getCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));

    const cartList = allProducts.filter((product) =>
      storedCartListInt.includes(product.product_id)
    );

    const calculateTotalPrice = cartList.reduce(
      (acc, item) => acc + item.price,
      0
    );

    setTotalPrice(calculateTotalPrice);
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromWishList(id);
    setItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
  };

  const cartDiv = (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>

      <h1>Cart</h1>

      <div className="flex flex-col sm:flex-row gap-5 items-center">
        <p>Total Cost: $ {totalPrice}</p>
        <button
          onClick={handleSortByPrice}
          className="btn btn-outline text-[#8332C5] rounded-[32px]"
        >
          Sort by Price <TbSortDescending2 />
        </button>
        <button
          onClick={handlePurchase}
          disabled={totalPrice === 0}
          className={`btn text-white bg-gradient-to-b from-[#8332C5] to-[#9538E2] rounded-[32px] ${
            totalPrice === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Purchase
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {/* modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <img className="mx-auto" src={SuccessImg} alt="" />
            <h2 className="text-2xl font-bold my-6">Payment Successful!</h2>
            <p className="mb-1 text-gray-600 font-medium">
              Thanks for purchasing
            </p>
            <p className="mb-4 text-gray-600 font-medium">
              Total: ${totalPrice}
            </p>
            <button
              onClick={handleCloseModal}
              className="btn btn-wide rounded-[32px] bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="pb-8 md:space-x-6 border bg-[#9538E2] border-t-2 border-[#9538E2] mb-12 space-y-3 md:space-y-0">
          <button
            onClick={() => handleTabClick("cart")}
            className={`btn btn-wide rounded-[32px]  ${
              activeTab === "cart"
                ? "bg-white text-[#9538E2]"
                : "btn-outline text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => {
              handleTabClick("wishlist");
            }}
            className={`btn btn-wide rounded-[32px] ${
              activeTab === "wishlist"
                ? "bg-white text-[#9538E2]"
                : "btn-outline  text-white"
            }`}
          >
            Wishlist
          </button>
        </div>

        <div className="text-left container mx-auto px-4">
          <h3 className="font-bold text-2xl mb-8">
            {activeTab === "cart" ? cartDiv : "Wishlist"}
          </h3>
          {items.length > 0 ? (
            <div>
              {items.map((item) => (
                <div
                  key={item.product_id}
                  className="flex flex-col sm:flex-row gap-8 p-8"
                >
                  <img
                    className="h-[124px] w-[200px] rounded-xl object-cover"
                    src={item.product_image}
                    alt={item.product_title}
                  />

                  <div className="flex w-full justify-between">
                    <div>
                      <h3 className="font-semibold text-2xl">
                        {item.product_title}
                      </h3>
                      <p className="text-lg text-gray-600 mt-3 mb-4">
                        {item.description}
                      </p>
                      <p className="font-semibold text-xl text-gray-800 mb-4">
                        Price: ${item.price}
                      </p>
                      <button
                        className={` ${
                          activeTab === "wishlist" ? "" : "hidden"
                        } btn btn-sm rounded-[32px] bg-[#9538E2] text-white`}
                      >
                        Add to Cart
                      </button>
                    </div>

                    {/* cart remove button */}
                    <button
                      onClick={() => handleRemoveFromCart(item.product_id)}
                      className={`btn btn-circle btn-outline text-red-600 ${
                        activeTab === "cart" ? "" : "hidden"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* wishlist remove button */}
                    <button
                      onClick={() => handleRemoveFromWishlist(item.product_id)}
                      className={`btn btn-circle btn-outline text-red-600 ${
                        activeTab === "wishlist" ? "" : "hidden"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 font-extrabold text-5xl">
              No items in {activeTab}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
