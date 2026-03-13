interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = ['Dashboard', 'Packages', 'Custom Packages', 'Bookings', 'Hotels', 'Cars'];

  return (
    <div className="flex border-b border-gray-200 bg-gray-50 px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 ${
            activeTab === tab
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}