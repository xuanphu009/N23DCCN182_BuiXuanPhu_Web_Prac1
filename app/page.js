import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
          New Arrivals
        </span>
        <h1 className="text-5xl font-black text-gray-900 mb-4 leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
          Our Products
        </h1>
        <p className="text-gray-400 text-base max-w-md mx-auto">
          Discover our curated collection of amazing products at unbeatable prices.
        </p>
      </div>

      {/* Grid — key fix: items-stretch để các card cao bằng nhau */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
}