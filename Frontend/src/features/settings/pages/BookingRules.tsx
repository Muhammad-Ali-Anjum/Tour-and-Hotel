import { useState } from 'react';

export const BookingRules = () => {
  const [rules, setRules] = useState({
    maxDaysAdvance: 30,
    cancellationDeadline: 48, // hours
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Booking Rules</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Max booking days in advance</label>
          <input type="number" value={rules.maxDaysAdvance} onChange={e => setRules({...rules, maxDaysAdvance: parseInt(e.target.value)})} className="w-full border rounded-md px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Cancellation deadline (hours before check-in)</label>
          <input type="number" value={rules.cancellationDeadline} onChange={e => setRules({...rules, cancellationDeadline: parseInt(e.target.value)})} className="w-full border rounded-md px-3 py-2" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
    </div>
  );
};