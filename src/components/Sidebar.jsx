function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white p-4">

      <div className="space-y-2">

        <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-100 font-medium">
          🏠 Dashboard
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          🏘️ Properties
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          🗺️ Explore
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          📅 My Visits
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
          ❤️ Saved Homes
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;