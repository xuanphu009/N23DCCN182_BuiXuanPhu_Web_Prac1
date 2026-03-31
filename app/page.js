import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products; // ⚠️ DummyJSON trả về { products: [...] } khác FakeStore
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Our Products
        </h1>
        <p className="text-gray-500 text-lg">
          Discover our curated collection of amazing products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}