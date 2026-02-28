import { useMemo, useState } from 'react';
import { Search, MoreVertical } from 'lucide-react';

// Data type definition
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

const Tables = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Stable data
  const data: Person[] = useMemo(() => [
    { name: { firstName: 'John', lastName: 'Doe' }, address: '261 Erdman Ford', city: 'East Daphne', state: 'Kentucky' },
    { name: { firstName: 'Jane', lastName: 'Doe' }, address: '769 Dominic Grove', city: 'Columbus', state: 'Ohio' },
    { name: { firstName: 'Joe', lastName: 'Doe' }, address: '566 Brakus Inlet', city: 'South Linda', state: 'West Virginia' },
    { name: { firstName: 'Kevin', lastName: 'Vandy' }, address: '722 Emie Stream', city: 'Lincoln', state: 'Nebraska' },
    { name: { firstName: 'Joshua', lastName: 'Rolluffs' }, address: '32188 Larkin Turnpike', city: 'Omaha', state: 'Nebraska' },
  ], []);

  // Filter logic for search
  const filteredData = data.filter((person) =>
    `${person.name.firstName} ${person.name.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    person.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header with Search */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-800">Tour & Hotel Directory</h2>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search users or states..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-72 transition-all text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Modern Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 uppercase text-xs font-semibold tracking-wider">
                <th className="px-6 py-4 border-b">Full Name</th>
                <th className="px-6 py-4 border-b">Address</th>
                <th className="px-6 py-4 border-b">City</th>
                <th className="px-6 py-4 border-b">State</th>
                <th className="px-6 py-4 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((person, index) => (
                  <tr key={index} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">
                        {person.name.firstName} {person.name.lastName}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{person.address}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{person.city}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold border border-blue-100">
                        {person.state}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-gray-400 hover:text-blue-600 p-1 rounded-full hover:bg-white transition-all">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400 italic">
                    No results found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Simple Footer */}
        <div className="p-4 bg-gray-50/30 border-t border-gray-100 text-xs text-gray-400">
          Total Entries: {filteredData.length}
        </div>
      </div>
    </div>
  );
};

export default Tables;