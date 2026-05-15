import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/Productapi";

const categoryImages = {
  "men's clothing": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60",
  "women's clothing": "https://plus.unsplash.com/premium_photo-1690820318580-04f12f5f0de9?w=600&auto=format&fit=crop&q=60",
 
};

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <div className="animate-pulse text-muted">Loading categories...</div>
      </section>
    );
  }

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Shop by Category
            </h2>
            <p className="text-muted max-w-md">
              Explore our curated collections across various styles and needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.slice(2, 4).map((cat) => (
            <div
              key={cat}
              className="group relative h-64 md:h-80 rounded-3xl overflow-hidden bg-gray-100 cursor-pointer transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              {/* Background Image */}
              <img 
                src={categoryImages[cat]} 
                alt={cat}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                  {cat}
                </h3>
                <div className="w-12 h-1 bg-white mb-4 transition-all duration-500 group-hover:w-24" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop Collection
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


