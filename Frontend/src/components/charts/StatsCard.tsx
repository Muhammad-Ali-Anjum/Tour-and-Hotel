import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      {icon && <div className="mr-4 text-3xl">{icon}</div>}
      <div>
        <h3 className="text-sm text-gray-500 uppercase">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
};