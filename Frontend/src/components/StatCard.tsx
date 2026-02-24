

import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  sub1?: string;
  sub2?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, sub1, sub2 }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="text-sm font-medium text-gray-500 uppercase">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>{sub1}</span>
        <span>{sub2}</span>
      </div>
    </div>
  );
};

export default StatCard;