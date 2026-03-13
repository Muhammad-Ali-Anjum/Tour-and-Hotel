export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
          3
        </span>
      </div>
    </header>
  );
}