import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";

export const CartContext = createContext(0);
export const WishlistContext = createContext(0);

const MainLayout = () => {
  const [cart, setCart] = useState(0);
  const [wishlist, setWishlist] = useState(0);

  return (
    <div className="font-sora ">
      <CartContext.Provider value={[cart, setCart]}>
        <WishlistContext.Provider value={[wishlist, setWishlist]}>
          <Navbar />

          <div className="">
            <Outlet />
          </div>

          <Footer />
        </WishlistContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default MainLayout;
