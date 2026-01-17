import { useDispatch } from "react-redux";
import { addToCart } from "../App/featues/ShopCart/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 30000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Smart Watch", price: 5000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Image
            </div>

            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 mb-4">₹{product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
