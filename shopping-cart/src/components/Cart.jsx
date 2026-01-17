import { useDispatch, useSelector } from "react-redux";
import {decreaseQty,increaseQty,removeFromCart} from "../App/featues/ShopCart/cartSlice";

const Cart = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {items.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      {items.map(item => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-3"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              className="px-3 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="px-3 bg-gray-200 rounded"
            >
              +
            </button>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600 ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <h3 className="text-right font-bold mt-4">
          Total: ₹{total}
        </h3>
      )}
    </div>
  );
};

export default Cart;

