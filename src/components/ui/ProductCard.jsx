import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return <>

<Link to={`/details/${product.id}`}>
  <div onClick={()=> window.scrollTo(0, 0)} key={product.id} className="group cursor-pointer">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-[#f9f9f9] mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              />
          
            </div>
            <h3 className="font-bold text-sm line-clamp-1 mb-1">
              {product.title}
            </h3>
            <p className="text-black/80 font-bold">${product.price}</p>
             <div className="duration-500">
                <button className="bg-black flex items-center justify-center gap-2 text-white px-4 py-2 cursor-pointer hover:-translate-y-1 transition-all mt-2 rounded-full text-xs font-bold uppercase tracking-widest">
                <p>Add to cart</p> <ShoppingCart />
                </button>
              </div>
          </div>
          </Link>
  </>;
}
