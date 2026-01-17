import { useDispatch } from "react-redux";
import { addToCart } from "../App/featues/ShopCart/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 30000 },
  { id: 3, name: "Headphones", price: 2000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map(product => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow"
        >
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">₹{product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
