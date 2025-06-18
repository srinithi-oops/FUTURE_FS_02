function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-blue-600 font-bold">₹{product.price}</p>
      </div>
      <button
        onClick={onAddToCart}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
