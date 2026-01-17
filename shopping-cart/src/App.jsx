import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductList/>
        </div>

        <div className="lg:col-span-1">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
