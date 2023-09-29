import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/CartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  // console.log(cartItem);

  const dispatch = useDispatch();

  const removeHandler = (productId) => {
    dispatch(removeItem(productId));
  };

  const clearHandler = () => {
    dispatch(clearItem());
  };
  return (
    <div className="p-[50px_20px]  sm:max-w-[1200px] mx-auto">
      <h3 className="mb-[25px] text-center font-bold text-2xl">Cart</h3>
      <button onClick={clearHandler}>Clear All</button>
      {cartItem.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center  border-b-2 border-gray-200 py-[10px]"
        >
          <div className="w-[150px] h-[100px]">
            <img src={product.image} className="w-full h-full object-contain" />
          </div>
          <h2>{product.title}</h2>
          <h4>{product.price}</h4>
          <button
            className="p-[4px_18px] bg-purple-500 rounded-md text-white font-semibold hover:bg-purple-700"
            onClick={() => removeHandler(product.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
