import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Mini E-Commerce Store 🛍️</h1>
        <p className="text-lg mt-2">🛒 Cart Items: {cart.length}</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <p className="text-center text-gray-700 col-span-full">
            No products found.
          </p>
        )}
      </div>

      {/* Cart */}
      <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
    </div>
  );
}

export default App;
