import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const NavItem = ({ icon, label, active = false, hasSub = false }) => (
  <div className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${active ? 'bg-[#3182CE] text-white' : 'hover:bg-gray-700 text-gray-300'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    {hasSub && <ChevronRight size={14} />}
  </div>
);

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  hasSub: PropTypes.bool,
};

export default NavItem;