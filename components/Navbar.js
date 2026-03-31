export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-black text-gray-900 tracking-tight" style={{fontFamily:'Syne,sans-serif'}}>
          MY<span className="text-blue-600">STORE</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="/" className="hover:text-gray-900 transition">Home</a>
          <a href="#" className="hover:text-gray-900 transition">Products</a>
          <a href="#" className="hover:text-gray-900 transition">About</a>
        </div>
        <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300">
          🛒 <span>Cart (0)</span>
        </button>
      </div>
    </nav>
  );
}