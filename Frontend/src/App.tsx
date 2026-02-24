// import React from "react";
import Sidebar from "./components/Siderbar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import Table from './components/Table'

const Dashboard = () => {
  // Data for cards
  const stats = [
    { title: "Total Users", value: "5,420", sub1: "Users", sub2: "Active Users" },
    { title: "Total Bookings", value: "1,250", sub1: "Bookings", sub2: "This Month" },
    { title: "Total Hotels", value: "120", sub1: "Hotels", sub2: "Active Hotels" },
    { title: "Total Cars", value: "75", sub1: "Cars", sub2: "Available Cars" },
    { title: "Total Packages", value: "60", sub1: "Packages", sub2: "Active Packages" },
    { title: "Pending Reviews", value: "18", sub1: "Reviews", sub2: "New Reviews" },
    { title: "New Hotels", value: "60", sub1: "Hotels", sub2: "New Hotels" },
    { title: "Revenue (This Month)", value: "$52,300", sub1: "Revenue", sub2: "This Month" },
  ];

  // Recent Bookings table
  const bookingsColumns = ["User", "Type", "Item", "Date", "Status"];
  const bookingsData = [
    { User: "Ahmed Khan", Type: "Luxury Skardu Tour", Item: "Deluxe Hotel", Date: "2024-05-12", Status: "Confirmed" },
    { User: "Sarah Ali", Type: "Mike Hotel Room", Item: "Luxury Car", Date: "2024-05-10", Status: "Pending" },
    { User: "John Doe", Type: "Swat, Narah", Item: "Hiking Camping", Date: "2024-05-16", Status: "Cancelled" },
    { User: "Emma White", Type: "Economy Room", Item: "Economy Room", Date: "2024-05-01", Status: "Confirmed" },
  ];

  // New Hotels table
  const hotelsColumns = ["Hotel Name", "City", "Owner", "Total Rooms"];
  const hotelsData = [
    { "Hotel Name": "Mountain View Resort", City: "Skardu", Owner: "Bilal Zaman", "Total Rooms": 80 },
    { "Hotel Name": "Deluxe Hunza Hotel", City: "Hunza", Owner: "Noor Ahmed", "Total Rooms": 60 },
    { "Hotel Name": "Swat Valley Inn", City: "Swat", Owner: "Naveed Khan", "Total Rooms": 50 },
  ];

  // Pending Customer Packages table
  const packagesColumns = ["User", "Destination", "Activities", "Estimated Price"];
  const packagesData = [
    { User: "Ali Raza", Destination: "Skardu", Activities: "Luxury Hotel", "Estimated Price": "$ 950" },
    { User: "Hamza Ahmed", Destination: "Hunza", Activities: "Hunza", "Estimated Price": "$ 1,050" },
    { User: "Sara Khan", Destination: "Swat", Activities: "Swat, Narah", "Estimated Price": "$ 800" },
  ];

  // New Contact Messages table
  const messagesColumns = ["User", "Email", "Date", "Status"];
  const messagesData = [
    { User: "Abdullah", Email: "abdullah@example.com", Date: "2024-05-10", Status: "Uncalled" },
    { User: "Emily White", Email: "emily@example.com", Date: "2024-05-09", Status: "Annulled" },
    { User: "Farhan Ali", Email: "farhan@example.com", Date: "2024-05-06", Status: "Uncalled" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <main className="p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>

          {/* Tables */}
          <div className="space-y-8">
            <Table title="Recent Bookings" columns={bookingsColumns} data={bookingsData} />
            <Table title="New Hotels" columns={hotelsColumns} data={hotelsData} />
            <Table title="Pending Customer Packages" columns={packagesColumns} data={packagesData} />
            <Table title="New Contact Messages" columns={messagesColumns} data={messagesData} />
          </div>

          {/* View All Link */}
          <div className="flex justify-end mt-4">
            <button className="text-blue-600 hover:underline font-medium">View All &gt;</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;