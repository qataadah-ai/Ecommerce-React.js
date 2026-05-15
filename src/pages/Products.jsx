import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../services/Productapi";

export default function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const apiCategory = category.replace(/-/g, " "); 
      
      const data = await fetchProductsByCategory(apiCategory);
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-black"></div>
      </div>
    );
  }

  return (
    <section className="py-20 px-5 md:px-8 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold capitalize mb-12 border-l-4 border-black pl-6">
        {category.replace(/-/g, " ")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f9f9f9] mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  Quick Add
                </button>
              </div>
            </div>
            <h3 className="font-bold text-sm line-clamp-1 mb-1">{product.title}</h3>
            <p className="text-black/80 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
