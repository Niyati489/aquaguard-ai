import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { riskTrendData } from "../data/DashboardData.js";

function RiskTrendChart() {
  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-4">
        Risk Trend
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={riskTrendData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="risk"
              stroke="#111827"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RiskTrendChart;