import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ProductCart = (props) => {
  const { image, price, title } = props.des;

  const dispatch = useDispatch();

  const addHandler = (props) => {
    dispatch(addItem(props));
  };
  //   console.log(title);
  return (
    <div className="">
      <div className="min-w-[250px] w-[250px] min-h-[356px] bg-white shadow-lg p-[10px_15px]  rounded-md hover:scale-110 duration-300">
        <div className="  h-[150px]  overflow-hidden">
          <img src={image} className="w-full h-full object-contain" />
        </div>
        <div className="">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex justify-between mt-[6px] items-center">
            <h4 className="font-semibold">{price} $</h4>
            <button
              className="p-[4px_18px] bg-purple-500 rounded-md text-white font-semibold hover:bg-purple-700"
              onClick={() => addHandler(props)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
