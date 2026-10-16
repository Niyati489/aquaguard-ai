import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/Properties";

function Dashboard() {
  return (
    <main className="p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Find a place you'll love
        </h1>

        <p className="text-gray-500 mt-2">
          Discover homes and understand the neighbourhood before you rent.
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">

        <h2 className="text-lg font-semibold mb-4">
          Search for a home
        </h2>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Enter area or locality"
            className="flex-1 border rounded-lg px-4 py-3 outline-none"
          />

          <button className="bg-black text-white px-6 rounded-lg">
            Search
          </button>
          

        </div>
        <div className="mt-8">

  <div className="flex justify-between items-center mb-4">

    <div>
      <h2 className="text-xl font-semibold">
        Recommended homes
      </h2>

      <p className="text-sm text-gray-500">
        Based on your selected area
      </p>
    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

    {properties.map((property) => (
      <PropertyCard
        key={property.id}
        property={property}
      />
    ))}

  </div>

</div>

      </div>

    </main>
  );
}

export default Dashboard;