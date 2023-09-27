import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="shadow-lg">
      <div className="p-[10px_20px]  sm:max-w-[1200px] mx-auto flex justify-between items-center sm:py-[10px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-500">
          Shopping
        </h1>
        <div className="gap-5 flex sm:gap-16">
          <h4 className="text-sm sm:text-xl font-semibold hover:text-purple-500 transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </h4>
          <h4 className="text-sm sm:text-xl font-semibold  hover:text-purple-500 transition duration-300 ease-in-out">
            <Link to="/cart">Cart ({cartItem})</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
