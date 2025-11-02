import React, { useState } from "react";

const FloorPlans = () => {
  const [filters, setFilters] = useState({
    plot: "Any Plot Size",
    floors: "Any Floors",
    budget: "Any Budget",
  });

  const floorPlans = [
    {
      id: 1,
      title: "30x30 South Facing – G+3 – 6 BHK",
      plot: "30x30",
      floors: "G+3",
      budget: "₹47,46,269",
      description: "Spacious 6 BHK modern design ideal for joint families.",
    },
    {
      id: 2,
      title: "20x50 East Facing – G+2 – 4 BHK",
      plot: "20x50",
      floors: "G+2",
      budget: "₹28,71,297",
      description: "Elegant 4 BHK layout perfect for compact plots.",
    },
    {
      id: 3,
      title: "40x60 North Facing – G+1 – Villa",
      plot: "40x60",
      floors: "G+1",
      budget: "₹65,82,920",
      description: "Luxury villa-style plan with open terrace and garden.",
    },
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Hero Section */}
      <section className="h-56 bg-gradient-to-r from-[#D2042D]/95 to-[#8B0000]/95 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">House Designs & Floor Plans</h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-100 px-4">
          Find curated floor plans designed for your dream home.
        </p>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Explore Our Floor Plans</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            value={filters.plot}
            onChange={(e) => setFilters({ ...filters, plot: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#D2042D]"
          >
            <option>Any Plot Size</option>
            <option>20x30</option>
            <option>30x40</option>
            <option>40x60</option>
          </select>

          <select
            value={filters.floors}
            onChange={(e) => setFilters({ ...filters, floors: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#D2042D]"
          >
            <option>Any Floors</option>
            <option>G+1</option>
            <option>G+2</option>
            <option>G+3</option>
          </select>

          <select
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-[#D2042D]"
          >
            <option>Any Budget</option>
            <option>Under ₹30 Lakh</option>
            <option>₹30L–₹60L</option>
            <option>Above ₹60L</option>
          </select>

          <button
            onClick={() => setFilters({ plot: "Any Plot Size", floors: "Any Floors", budget: "Any Budget" })}
            className="text-[#D2042D] font-medium hover:underline"
          >
            Reset Filters
          </button>
        </div>

        {/* Floor Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {floorPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 via-gray-100 to-white flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                  alt="Blueprint Icon"
                  className="h-20 opacity-50"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{plan.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  <p><strong>Plot:</strong> {plan.plot}</p>
                  <p><strong>Floors:</strong> {plan.floors}</p>
                  <p><strong>Budget:</strong> {plan.budget}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="text-[#D2042D] font-semibold hover:underline text-sm">View Details</button>
                  <button className="bg-[#D2042D] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#b00324] transition">
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FloorPlans;
