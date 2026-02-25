import React from 'react';
import {
  LayoutDashboard, Package, Briefcase, Calendar,
  Hotel, Car, Users, Star, MessageSquare, Settings
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSub?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, hasSub = false }) => (
  <div className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${active ? 'bg-[#3182CE] text-white' : 'hover:bg-gray-700 text-gray-300'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    {hasSub && <ChevronRight size={14} />}
  </div>
);

import { ChevronRight } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#2D3748] hidden md:block shrink-0">
      <div className="p-6 flex items-center gap-3 border-b border-gray-700/50">
        <img
          src="https://ui-avatars.com/api/?name=Muhammad+Ali+Anjum&background=random"
          className="w-10 h-10 rounded-full border-2 border-white/20"
          alt="Admin"
        />
        <div>
          <p className="text-white font-bold text-sm leading-tight">Muhammad Ali Anjum</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Admin</p>
        </div>
      </div>

      <nav className="mt-4">
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
        <NavItem icon={<Package size={18} />} label="Packages" />
        <NavItem icon={<Briefcase size={18} />} label="Custom Packages" />
        <NavItem icon={<Calendar size={18} />} label="Bookings" />
        <NavItem icon={<Hotel size={18} />} label="Hotels" />
        <NavItem icon={<Car size={18} />} label="Cars" />
        <div className="my-4 border-t border-gray-700/30 mx-4" />
        <NavItem icon={<Hotel size={18} />} label="Hotel Partners" hasSub />
        <NavItem icon={<Car size={18} />} label="Car Partners" />
        <NavItem icon={<Users size={18} />} label="Users" />
        <NavItem icon={<Star size={18} />} label="Reviews" />
        <NavItem icon={<MessageSquare size={18} />} label="Contact Messages" hasSub />
        <NavItem icon={<Settings size={18} />} label="Settings" />
      </nav>
    </aside>
  );
};

export default Sidebar;