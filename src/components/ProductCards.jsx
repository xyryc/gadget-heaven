import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();
  // console.log(typeof category);
  const data = useLoaderData();
  // console.log(data)

  useEffect(() => {
    if (category) {
      if (category === "All Product") {
        setProducts(data);
      } else {
        const filteredCategory = [...data].filter(
          (item) => item.category === category
        );
        setProducts(filteredCategory);
      }
    } else {
      setProducts(data.slice(2, 11));
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.product_id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCards;
