interface StatCardProps {
  title: string;
  value: number | string;
  sub1: string;
  sub2: string;
}

const StatCard = ({ title, value, sub1, sub2 }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h3 className="text-sm text-gray-500 uppercase">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>{sub1}</span>
        <span>{sub2}</span>
      </div>
    </div>
  );
};

export default StatCard;