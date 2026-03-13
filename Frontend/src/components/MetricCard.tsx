

import type { Stat } from '../types';

export default function MetricCard({ title, value, footer }: Stat) {


  return (
    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 my-2">{value}</div>
      <div className="text-xs text-gray-400">{footer}</div>
    </div>
  );
}