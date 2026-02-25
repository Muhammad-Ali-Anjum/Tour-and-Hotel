import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ icon, label, value, sub, color, unit }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
    <div className={`p-3 rounded-lg ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">
        {value} <span className="text-xs font-normal text-gray-400 uppercase ml-1">{unit}</span>
      </h3>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  </div>
);

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sub: PropTypes.string,
  color: PropTypes.string.isRequired,
  unit: PropTypes.string,
};

export default StatCard;