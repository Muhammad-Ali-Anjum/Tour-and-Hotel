import React from 'react';
import { StatCardData } from '../../types';

const StatCard: React.FC<StatCardData> = ({ icon, label, value, unit, sub, color }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
    <div className={`p-3 rounded-lg ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">
        {value} {unit && <span className="text-xs font-normal text-gray-400 uppercase ml-1">{unit}</span>}
      </h3>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  </div>
);

export default StatCard;