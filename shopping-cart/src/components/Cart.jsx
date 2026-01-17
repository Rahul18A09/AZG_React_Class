import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../App/featues/ShopCart/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="bg-white rounded-xl shadow p-5 sticky top-20">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {items.length === 0 && (
        <p className="text-gray-500 text-sm">
          Your cart is empty
        </p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">
              ₹{item.price}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              className="px-2 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="text-sm">{item.qty}</span>

            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="px-2 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <div className="flex justify-between font-semibold mt-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
