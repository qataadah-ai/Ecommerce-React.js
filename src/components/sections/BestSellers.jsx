import ProductCard from "../ui/ProductCard";
const products = [
  {
    id: 1,
    title: "Silk Minimal Dress",
    price: 189,
    original: 249,
    rating: 4.8,
    reviews: 342,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Brown long sleeves shirt",
    price: 229,
    original: 299,
    rating: 4.9,
    reviews: 218,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8andlbGxlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Premium Leather Tote",
    price: 159,
    original: 210,
    rating: 4.7,
    reviews: 561,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Signature Cashmere Knit",
    price: 279,
    original: 349,
    rating: 5.0,
    reviews: 124,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
];


export default function BestSellers() {
  return (
    <section
      id="bestSellers"
      className="relative min-h-screen flex  overflow-hidden bg-[#F8F8F8]"
    >
     <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 w-full py-12">
        
          <div>
              <p className="section-label">
              Handpicked just for you
            </p>
            <h2 className="section-title">
              Best Sellers
            </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
     {
        products.map((products)=>{
            return(
                <ProductCard key={products.id} product={products}/>
            )
        })
     }
      </div>
        </div>
        </div>



    </section>
  );
}

