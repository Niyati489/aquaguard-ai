function PropertyCard({ property }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">

      <div className="h-44 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">
          Property Image
        </span>
      </div>

      <div className="p-5">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-lg font-semibold">
              {property.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {property.location}
            </p>
          </div>

          <button className="text-xl">
            ♡
          </button>

        </div>

        <div className="flex gap-4 text-sm text-gray-600 mt-4">
          <span>{property.bhk} BHK</span>
          <span>{property.area} sq.ft</span>
          <span>{property.furnished}</span>
        </div>

        <div className="mt-5 flex justify-between items-center">

          <div>
            <p className="text-xl font-bold">
              ₹{property.rent.toLocaleString()}
            </p>

            <p className="text-xs text-gray-500">
              per month
            </p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg">
            View
          </button>

        </div>

      </div>

    </div>
  );
}

export default PropertyCard;