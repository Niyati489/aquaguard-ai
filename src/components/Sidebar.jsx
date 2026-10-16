import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gray-900 text-white p-5">

      <h2 className="text-lg font-semibold mb-8">
        Menu
      </h2>

      <nav className="space-y-3">

        <NavLink
          to="/"
          className="block p-2 rounded hover:bg-gray-800"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/predictions"
          className="block p-2 rounded hover:bg-gray-800"
        >
          Predictions
        </NavLink>

        <NavLink
          to="/reports"
          className="block p-2 rounded hover:bg-gray-800"
        >
          Reports
        </NavLink>

        <NavLink
          to="/alerts"
          className="block p-2 rounded hover:bg-gray-800"
        >
          Alerts
        </NavLink>
        
        <NavLink
          to="/areas"
          className="block p-2 rounded hover:bg-gray-800"
        >
          areas
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;