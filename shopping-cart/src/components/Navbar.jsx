import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-600">
            ShopCart
          </h1>

          {/* Cart */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9"
              />
            </svg>

            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQty}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

