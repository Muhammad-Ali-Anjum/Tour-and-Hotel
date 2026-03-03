// import { useMemo, useState } from 'react';
// import { Search, MoreVertical, ArrowUpNarrowWide, ArrowDownWideNarrow, Filter } from 'lucide-react';

// // --- Types Definition ---
// interface Person {
//   id: number;
//   name: {
//     firstName: string;
//     lastName: string;
//   };
//   address: string;
//   city: string;
//   state: string;
//   status: 'Active' | 'Pending' | 'Inactive';
//   email: string;
// }

// type SortConfig = {
//   key: string | null;
//   direction: 'asc' | 'desc';
// };

// const Tables = () => {
//   // --- Data ---
//   const initialData: Person[] = useMemo(() => [
//     { id: 1, name: { firstName: 'John', lastName: 'Doe' }, email: 'john@example.com', address: '261 Erdman Ford', city: 'East Daphne', state: 'Kentucky', status: 'Active' },
//     { id: 2, name: { firstName: 'Jane', lastName: 'Doe' }, email: 'jane@example.com', address: '769 Dominic Grove', city: 'Columbus', state: 'Ohio', status: 'Pending' },
//     { id: 3, name: { firstName: 'Joe', lastName: 'Doe' }, email: 'joe@example.com', address: '566 Brakus Inlet', city: 'South Linda', state: 'West Virginia', status: 'Active' },
//     { id: 4, name: { firstName: 'Kevin', lastName: 'Vandy' }, email: 'kevin@example.com', address: '722 Emie Stream', city: 'Lincoln', state: 'Nebraska', status: 'Inactive' },
//     { id: 5, name: { firstName: 'Joshua', lastName: 'Rolluffs' }, email: 'josh@example.com', address: '32188 Larkin Turnpike', city: 'Omaha', state: 'Nebraska', status: 'Active' },
//   ], []);

//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });

//   // --- Sorting Logic ---
//   const handleSort = (key: string) => {
//     let direction: 'asc' | 'desc' = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // --- Processed Data (Filter + Sort) ---
//   const processedData = useMemo(() => {
//     let filtered = initialData.filter((person) =>
//       `${person.name.firstName} ${person.name.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       person.city.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (sortConfig.key) {
//       filtered.sort((a: any, b: any) => {
//         // Nested key support (e.g., 'name.firstName')
//         const getNestedValue = (obj: any, path: string) => path.split('.').reduce((acc, part) => acc && acc[part], obj);
        
//         const aValue = getNestedValue(a, sortConfig.key!);
//         const bValue = getNestedValue(b, sortConfig.key!);
        
//         if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
//         if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
//         return 0;
//       });
//     }
//     return filtered;
//   }, [searchTerm, sortConfig, initialData]);

//   return (
//     <div className="p-4 md:p-8 bg-[#f8fafc] min-h-screen font-sans text-slate-900">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Directory</h1>
//             <p className="text-slate-500 mt-1">Manage tours, hotels, and customer records in one place.</p>
//           </div>
          
//           <div className="flex items-center gap-3">
//             <div className="relative group">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
//               <input 
//                 type="text"
//                 placeholder="Search records..."
//                 className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 w-full md:w-72 transition-all"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all">
//               <Filter className="w-5 h-5 text-slate-600" />
//             </button>
//           </div>
//         </div>

//         {/* Table Container */}
//         <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-separate border-spacing-0">
//               <thead>
//                 <tr className="bg-slate-50/80 backdrop-blur-sm">
//                   <th 
//                     onClick={() => handleSort('name.firstName')} 
//                     className="px-6 py-4 cursor-pointer hover:bg-slate-100/50 transition-colors border-b border-slate-200"
//                   >
//                     <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
//                       User info {sortConfig.key === 'name.firstName' && (sortConfig.direction === 'asc' ? <ArrowUpNarrowWide size={14} className="text-indigo-600"/> : <ArrowDownWideNarrow size={14} className="text-indigo-600"/>)}
//                     </div>
//                   </th>
//                   <th className="px-6 py-4 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest">Location</th>
//                   <th className="px-6 py-4 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
//                   <th className="px-6 py-4 border-b border-slate-200 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {processedData.length > 0 ? (
//                   processedData.map((person) => (
//                     <tr key={person.id} className="hover:bg-indigo-50/30 transition-all duration-200 group">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-4">
//                           <div className="w-10 h-10 rounded-xl bg-gradient from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-100">
//                             {person.name.firstName[0]}
//                           </div>
//                           <div>
//                             <div className="font-bold text-slate-800">{person.name.firstName} {person.name.lastName}</div>
//                             <div className="text-xs text-slate-400">{person.email}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="text-sm font-medium text-slate-700">{person.city}</div>
//                         <div className="text-xs text-slate-400">{person.address}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider shadow-sm border ${
//                           person.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
//                           person.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-slate-50 text-slate-600 border-slate-100'
//                         }`}>
//                           <span className={`w-1.5 h-1.5 rounded-full ${
//                             person.status === 'Active' ? 'bg-emerald-500' : 
//                             person.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'
//                           }`}></span>
//                           {person.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <button className="text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-xl transition-all">
//                           <MoreVertical size={20} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={4} className="px-6 py-24 text-center">
//                       <div className="flex flex-col items-center">
//                         <div className="bg-slate-100 p-4 rounded-full mb-4">
//                           <Search className="w-8 h-8 text-slate-400" />
//                         </div>
//                         <p className="text-slate-500 font-medium">No results found for "{searchTerm}"</p>
//                         <p className="text-slate-400 text-sm">Try adjusting your search or filters.</p>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
          
//           {/* Footer Info */}
//           <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center text-xs font-semibold text-slate-500 uppercase tracking-widest">
//             <span>Showing {processedData.length} entries</span>
//             <div className="flex gap-2">
//                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-all">Previous</button>
//                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-all shadow-sm">Next</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tables;