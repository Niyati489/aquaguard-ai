function Predictions() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Risk Predictions
      </h1>

      <div className="bg-white border rounded-xl p-6">
        <p className="text-gray-600">
          Enter water and environmental parameters
          to predict disease risk.
        </p>

        <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg">
          Make Prediction
        </button>
      </div>
    </div>
  );
}

export default Predictions;