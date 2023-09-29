import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ProductCart = ({ des }) => {
  // console.log(des);
  // const { image, price, title } = des;

  const dispatch = useDispatch();

  const addHandler = (des) => {
    dispatch(addItem(des));
  };
  //   console.log(title);
  return (
    <div className="">
      <div className="min-w-[250px] w-[250px] min-h-[356px] bg-white shadow-lg p-[10px_15px]  rounded-md hover:scale-110 duration-300">
        <div className="  h-[150px]  overflow-hidden">
          <img src={des.image} className="w-full h-full object-contain" />
        </div>
        <div className="">
          <h2 className="text-lg font-bold">{des.title}</h2>
          <div className="flex justify-between mt-[6px] items-center">
            <h4 className="font-semibold">{des.price} $</h4>
            <button
              className="p-[4px_18px] bg-purple-500 rounded-md text-white font-semibold hover:bg-purple-700"
              onClick={() => addHandler(des)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
