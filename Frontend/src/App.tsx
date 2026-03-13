import { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Dashboard from './pages/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          {activeTab === 'Dashboard' && <Dashboard />}
          {/* Other tabs can be added later */}
        </main>
      </div>
    </div>
  );
}

export default App;