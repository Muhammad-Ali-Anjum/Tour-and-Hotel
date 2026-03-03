import { useParams } from 'react-router-dom';

export const PartnerHotelDetails = () => {
  const { partnerId, hotelId } = useParams();
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Hotel Details (Partner {partnerId})</h1>
      <p>Hotel ID: {hotelId}</p>
    </div>
  );
};