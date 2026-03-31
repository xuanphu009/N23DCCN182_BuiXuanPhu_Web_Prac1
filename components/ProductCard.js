import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white h-full flex flex-col">
        {/* Ảnh sản phẩm */}
        <div className="h-52 flex items-center justify-center bg-gray-50 rounded-lg mb-4 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-44 w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Thông tin */}
        <div className="flex flex-col flex-1">
          <span className="text-xs uppercase text-blue-500 font-semibold tracking-wide mb-1">
            {product.category}
          </span>
          <h2 className="font-semibold text-gray-800 line-clamp-2 text-sm mb-2 flex-1">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-sm text-gray-600">
              {product.rating?.rate} ({product.rating?.count})
            </span>
          </div>

          {/* Giá & nút */}
          <div className="flex justify-between items-center mt-auto">
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              + Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}