import { useState } from 'react';

export const PaymentSettings = () => {
  const [settings, setSettings] = useState({
    currency: 'USD',
    taxRate: 10,
    paymentMethods: ['Credit Card', 'PayPal'],
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Payment Settings</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Currency</label>
          <select value={settings.currency} onChange={e => setSettings({...settings, currency: e.target.value})} className="w-full border rounded-md px-3 py-2">
            <option>USD</option>
            <option>EUR</option>
            <option>PKR</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tax Rate (%)</label>
          <input type="number" value={settings.taxRate} onChange={e => setSettings({...settings, taxRate: parseInt(e.target.value)})} className="w-full border rounded-md px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Payment Methods</label>
          <input type="text" value={settings.paymentMethods.join(', ')} onChange={e => setSettings({...settings, paymentMethods: e.target.value.split(',').map(s => s.trim())})} className="w-full border rounded-md px-3 py-2" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
    </div>
  );
};