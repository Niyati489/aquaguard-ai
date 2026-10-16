import StatCard from "../components/StatCard";
import RiskTrendChart from "../components/RiskTrendChart"

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <StatCard
          title="Total Areas"
          value="128"
        />

        <StatCard
          title="High Risk Areas"
          value="17"
        />

        <StatCard
          title="Active Alerts"
          value="24"
        />

      </div>
      <div className="mt-8">
  <RiskTrendChart />
</div>

    </div>
  );
}

export default Dashboard;