interface StatsCardProps {
  label: string;
  value: string;
  sub: string;
}

export const StatsCard = ({ label, value, sub }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  );
};