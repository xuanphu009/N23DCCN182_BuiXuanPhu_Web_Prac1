import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="text-gray-700 font-medium truncate max-w-xs">{product.title}</span>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">

          {/* Ảnh */}
          <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-10 min-h-80">
            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              className="max-h-80 max-w-full object-contain"
            />
          </div>

          {/* Thông tin */}
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.category}
                </span>
                {product.brand && (
                  <span className="text-xs text-gray-400 font-medium">{product.brand}</span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className={`text-base ${s <= Math.round(product.rating) ? "text-amber-400" : "text-gray-200"}`}>★</span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">{product.rating}/5</span>
                <span className="text-sm text-gray-400">· {product.stock} in stock</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Tags */}
              {product.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Giá + nút */}
            <div>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-4xl font-black text-gray-900">${product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="bg-red-50 text-red-500 text-sm font-semibold px-2 py-0.5 rounded-lg">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-blue-600 text-white py-3.5 rounded-2xl font-semibold hover:bg-blue-700 active:scale-[.98] transition-all text-sm">
                  🛒 Add to Cart
                </button>
                <button className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all text-sm">
                  ♡ Wishlist
                </button>
              </div>

              <Link href="/" className="inline-flex items-center gap-1 mt-5 text-sm text-gray-400 hover:text-blue-600 transition">
                ← Back to all products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-black text-gray-900 mb-5" style={{fontFamily:'Syne,sans-serif'}}>
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-gray-800">{review.reviewerName}</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className={`text-xs ${s <= review.rating ? "text-amber-400" : "text-gray-200"}`}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}