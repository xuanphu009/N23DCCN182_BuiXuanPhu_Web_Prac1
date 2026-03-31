export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
        🛍️ MyStore
      </h1>
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <a href="/" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">Products</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
        🛒 Cart (0)
      </button>
    </nav>
  );
}