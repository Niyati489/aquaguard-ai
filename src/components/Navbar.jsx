function Navbar() {
  return (
    <nav className="h-16 border-b bg-white flex items-center justify-between px-6">
      
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          RentWise
        </h1>

        <p className="text-xs text-gray-500">
          Smart Rental Intelligence
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600">
          🔔
        </button>

        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          N
        </div>
      </div>

    </nav>
  );
}

export default Navbar;