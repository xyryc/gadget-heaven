import { toast } from "react-toastify";

const getCartList = () => {
  const storedListStr = localStorage.getItem("gadget-heaven-cart");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToCart = (id) => {
  const storedList = getCartList();

  if (storedList.includes(id)) {
    // already exist
    toast.error("Already exist in cart!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("gadget-heaven-cart", storedListStr);

    toast.success("Item added to cart.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("gadget-heaven-wishlist");

  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    // already exist
    toast.error("Already exist in the wishlist!");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("gadget-heaven-wishlist", storedWishListStr);

    toast.success("Item added to your wishlist.");
  }
};

const clearCartList = () => {
  localStorage.removeItem("gadget-heaven-cart");
};

export {
  addToCart,
  addToWishList,
  getCartList,
  getStoredWishList,
  clearCartList,
};
