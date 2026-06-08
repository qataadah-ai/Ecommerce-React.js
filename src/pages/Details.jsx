import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../services/Productapi";
import { useDispatch } from "react-redux";
import { addToCart, addToast } from "../redux/feature/addToCartSlice";
import { ShoppingCart, Star, Minus, Plus, ArrowLeft } from "lucide-react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline font-semibold"
        >
          Go back
        </button>
      </div>
    );
  }

  const AddtoCart = () => {
    dispatch(addToCart({ ...product, quantity, size: selectedSize }));
    dispatch(addToast());
    console.log("Added to cart", product);
  };

  return (
    <section className="py-8 px-5 md:px-8 max-w-6xl mx-auto min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold">Back</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Section */}
        <div className="bg-[#f9f9f9] rounded-2xl p-8 flex items-center justify-center aspect-square shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">
            {product.category}
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-gray-900">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <Star fill="currentColor" size={20} />
              <span className="ml-2 font-bold text-black">
                {product.rating?.rate}
              </span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 font-medium">
              {product.rating?.count} Reviews
            </span>
          </div>

          <p className="text-3xl font-black mb-6 text-gray-900">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-10">
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-gray-900">
              Select Size
            </h3>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-full font-bold transition-all duration-300 cursor-pointer flex items-center justify-center border-2 
                    ${
                      selectedSize === size
                        ? "bg-black text-white border-black scale-105 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 mb-10">
            {/* Quantity Selector */}
            <div className="flex items-center border-2 border-gray-200 rounded-full p-1 bg-white shrink-0">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-black"
              >
                <Minus size={18} />
              </button>
              <span className="w-10 text-center font-bold text-lg">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-black"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button onClick={AddtoCart} className="btn-primary flex-1 ">
              <span className="text-base">Add to Cart</span>
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
