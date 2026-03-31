"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      
      {/* Ảnh */}
      <Link href={`/product/${product.id}`}>
        <div className="w-full h-52 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Nội dung */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-500 mb-2">
          {product.category}
        </span>

        <Link href={`/product/${product.id}`}>
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mb-3 hover:text-blue-600 transition">
            {product.title}
          </h2>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex">
            {[1,2,3,4,5].map((s) => (
              <span key={s} className={`text-xs ${s <= Math.round(product.rating) ? "text-amber-400" : "text-gray-200"}`}>★</span>
            ))}
          </div>
          <span className="text-xs text-gray-400">{product.rating}</span>
        </div>

        {/* Giá + nút */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-gray-900">${product.price}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert(`✅ Added "${product.title}" to cart!`);
            }}
            className="bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}