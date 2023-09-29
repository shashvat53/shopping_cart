import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Shimmer from "./Shimmer";
const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      // console.log(json);
      setProducts(json);
    };
    fetchData();
  }, []);

  if (products.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-[10px_20px]  sm:max-w-[1200px] mx-auto bg-gray-100 py-[50px]">
      <div className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <ProductCart key={product.id} des={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
