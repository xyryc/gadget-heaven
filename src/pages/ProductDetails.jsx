import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToCart,
  addToWishList,
  getStoredWishList,
} from "../utility/addToLs";
import { removeFromWishList } from "../utility/removeFromLs";
import { useContext, useEffect, useState } from "react";
import { CartContext, WishlistContext } from "../layouts/MainLayout";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { productId } = useParams(); //dynamic url
  const id = parseInt(productId);
  const allProducts = useLoaderData(); // all product

  const selectedProduct = allProducts.find(
    (product) => product.product_id === id
  );

  const {
    product_id: currentId,
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
  } = selectedProduct;

  const [cart, setCart] = useContext(CartContext);
  const [wishlist, setWishlist] = useContext(WishlistContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    setIsWishlisted(storedWishList.includes(currentId));
  }, [currentId]);

  const handleWishlistClick = () => {
    if (!isWishlisted) {
      addToWishList(currentId);
      setWishlist(wishlist + 1); // Update wishlist count
      setIsWishlisted(true); // Disable button
    } else {
      removeFromWishList(currentId);
      setWishlist(wishlist - 1); // Update wishlist count
      setIsWishlisted(false); // Enable button
    }
  };

  return (
    <div>
      <Helmet>
        <title>Product Details | Gadget Heaven</title>
      </Helmet>

      {/* Header */}
      <div className="relative text-center pt-8 pb-60 bg-[#9538E2] text-white mb-[1064px] lg:mb-[464px]">
        <h1 className="font-bold text-[32px] mb-4">Product Details</h1>
        <p className="md:w-3/5 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details */}
      <div className="absolute inset-0 mt-60 px-4">
        <div className="container mx-auto p-8 mb-24 flex flex-col md:flex-row gap-8 justify-center bg-white rounded-3xl">
          <img
            className="h-[570px] w-[425px] rounded-2xl object-cover"
            src={product_image}
            alt={product_title}
          />

          <div>
            <h1 className="text-[28px] font-semibold mb-3">{product_title}</h1>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Price: $ {price}
            </p>
            <button
              className={`btn btn-sm btn-outline rounded-[32px] ${
                availability ? "btn-success" : "btn-error"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="my-4  text-lg text-gray-600">{description}</p>
            <p className="mb-2 text-lg font-bold">Specification</p>
            <ol className="text-lg text-gray-600 mb-4">
              {Specification.map((spec, index) => (
                <li key={index}>
                  {index + 1}. {spec}
                </li>
              ))}
            </ol>

            <div className="flex items-center gap-1">
              <p className="font-bold text-lg">Rating:</p>{" "}
              <span className="text-yellow-500 ">
                <FaStar />
              </span>
            </div>

            <div className="flex items-center gap-7 font-medium">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              {rating}
            </div>
            <div className="space-x-4 mt-4">
              <a
                onClick={() => {
                  addToCart(currentId);
                  setCart(cart + 1);
                }}
                className="btn rounded-[32px] bg-[#9538E2] text-white"
              >
                Add To Cart
                <IoCartOutline />
              </a>
              <a
                onClick={handleWishlistClick}
                className="btn btn-circle btn-outline"
                disabled={isWishlisted}
              >
                <FaRegHeart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
