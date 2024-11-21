/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;
  return (
    <div className="p-5 border rounded-xl">
      <img
        className="h-[180px] rounded-xl mb-6 w-full object-scale-down"
        src={product_image}
        alt={product_title}
      />
      <h3 className="text-2xl font-semibold mb-3">{product_title}</h3>
      <p className="text-xl font-medium text-gray-600 mb-4">Price: ${price}</p>
      <Link
        to={`/products/${product_id}`}
        className="btn btn-outline btn-sm rounded-[32px] text-[#9538E2]"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;
