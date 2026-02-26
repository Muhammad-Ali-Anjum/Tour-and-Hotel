import { pendingPackages } from "../data/mockData";

const PendingPackagesTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">Pending Customer Packages</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">User</th>
            <th className="text-left">Destination</th>
            <th className="text-left">Activities</th>
            <th className="text-left">Estimated Price</th>
          </tr>
        </thead>
        <tbody>
          {pendingPackages.map((pkg, idx) => (
            <tr key={idx} className="border-b last:border-0">
              <td className="py-2">{pkg.user}</td>
              <td>{pkg.destination}</td>
              <td>{pkg.activities}</td>
              <td>${pkg.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingPackagesTable;