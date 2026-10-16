import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Predictions from "./pages/Predictions";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Areas from "./pages/Areas";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 p-8">

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/predictions"
                element={<Predictions />}
              />

              <Route
                path="/reports"
                element={<Reports />}
              />

              <Route
                path="/alerts"
                element={<Alerts />}
              />
                <Route
                path="/areas"
                element={<Areas />}
              />

            </Routes>

          </main>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;