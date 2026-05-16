import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../services/Productapi";
import ProductCard from "../components/ui/ProductCard";
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
         <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
}
