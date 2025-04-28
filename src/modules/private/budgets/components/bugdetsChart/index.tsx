import { PieChart, Pie, Cell } from "recharts";
import { FormattedNumber } from "react-intl";

const data = [
  { name: "Entertainment", value: 50 },
  { name: "Bills", value: 750 },
  { name: "Dining Out", value: 75 },
  { name: "Personal Care", value: 100 },
];

const COLORS = ["#277C78", "#82C9D7", "#F2CDAC", "#626070"];

export const BudgetsChart = () => {
  return (
    <div className="relative w-[240px] h-[240px] flex items-center justify-center">
      <PieChart width={240} height={240}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80} // bigger inner hole
          outerRadius={120}
          paddingAngle={0}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Overlay faded white circle */}
      <div className="absolute flex items-center justify-center w-[187.5px] h-[187.5px] bg-white/25 rounded-full">
        {/* Inner solid white circle */}
        <div className="flex items-center justify-center w-[160px] h-[160px] bg-white rounded-full">
          {/* Centered Content */}
          <div className="text-center flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-gray-900">
              <FormattedNumber
                value={338}
                style="currency"
                currency="USD"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </h3>
            <p className="text-sm text-gray-500">
              of{" "}
              <FormattedNumber
                value={975}
                style="currency"
                currency="USD"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />{" "}
              limit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
