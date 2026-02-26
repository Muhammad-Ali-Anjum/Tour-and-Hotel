import { newHotels } from "../data/mockData";

const NewHotelsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">New Hotels</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Hotel Name</th>
            <th className="text-left">City</th>
            <th className="text-left">Owner</th>
            <th className="text-left">Total Rooms</th>
          </tr>
        </thead>
        <tbody>
          {newHotels.map((hotel, idx) => (
            <tr key={idx} className="border-b last:border-0">
              <td className="py-2">{hotel.name}</td>
              <td>{hotel.city}</td>
              <td>{hotel.owner}</td>
              <td>{hotel.rooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewHotelsTable;