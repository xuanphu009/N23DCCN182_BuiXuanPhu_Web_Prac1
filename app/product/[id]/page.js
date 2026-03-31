import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span className="mx-2">/</span>
        <span className="capitalize">{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium line-clamp-1 max-w-xs inline-block align-bottom">
          {product.title}
        </span>
      </div>

      {/* Main content */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-10">
        
        {/* Ảnh sản phẩm */}
        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-8 min-h-72">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-80 w-full object-contain"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-lg">
                {"★".repeat(Math.round(product.rating?.rate))}
                {"☆".repeat(5 - Math.round(product.rating?.rate))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.rating?.rate}/5 ({product.rating?.count} reviews)
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              {product.description}
            </p>
          </div>

          <div>
            <p className="text-4xl font-extrabold text-green-600 mb-6">
              ${product.price}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-base">
                🛒 Add to Cart
              </button>
              <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition text-base">
                ♡ Wishlist
              </button>
            </div>

            <Link
              href="/"
              className="inline-block mt-4 text-sm text-blue-600 hover:underline"
            >
              ← Back to all products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}