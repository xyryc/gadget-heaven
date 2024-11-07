import { toast } from "react-toastify";
import { getCartList, getStoredWishList } from "./addToLs";

const removeFromCartList = (id) => {
  const storedCartList = getCartList();
  const updatedCartList = storedCartList.filter((itemId) => itemId !== id);

  if (storedCartList.length !== updatedCartList.length) {
    localStorage.setItem("gadget-heaven-cart", JSON.stringify(updatedCartList));
    toast.success("Item removed from your cart.");
  } else {
    toast.error("Item not found in cart.");
  }
};

const removeFromWishList = (id) => {
  const storedWishList = getStoredWishList();
  const updatedWishList = storedWishList.filter((itemId) => itemId !== id);

  if (storedWishList.length !== updatedWishList.length) {
    localStorage.setItem(
      "gadget-heaven-wishlist",
      JSON.stringify(updatedWishList)
    );
    toast.success("Item removed from your wishlist.");
  } else {
    toast.error("Item not found in wishlist.");
  }
};

export { removeFromCartList, removeFromWishList };
