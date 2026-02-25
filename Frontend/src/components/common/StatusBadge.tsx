import React from 'react';
import { StatusType } from '../../types';

interface Props {
  type: StatusType;
}

const StatusBadge: React.FC<Props> = ({ type }) => {
  const styles: Record<StatusType, string> = {
    Confirmed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-600",
    Cancelled: "bg-red-100 text-red-600",
    Uncalled: "bg-orange-100 text-orange-600",
    Handled: "bg-green-100 text-green-700",
    Unrealized: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${styles[type] || "bg-gray-100 text-gray-500"}`}>
      {type}
    </span>
  );
};

export default StatusBadge;