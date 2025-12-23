import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Ruler, Square, IndianRupee } from "lucide-react";

export default function CostEstimator() {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [packageRate, setPackageRate] = useState("");
  const [totalCost, setTotalCost] = useState(null);

  const handleEstimate = () => {
    const L = parseFloat(length);
    const B = parseFloat(breadth);
    const rate = parseFloat(packageRate);
    if (isNaN(L) || isNaN(B) || isNaN(rate)) return;

    const area = L * B;
    const totalArea = area + 100; // extra area for septic tank
    const cost = totalArea * rate;
    setTotalCost({ area, totalArea, cost });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4ebf5] flex flex-col items-center justify-center px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-10 text-gray-800 text-center"
      >
      <span className="text-indigo-600">Cost Estimator</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8"
      >
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-indigo-500" /> Length (ft)
            </label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter length"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <Square className="w-5 h-5 text-indigo-500" /> Breadth (ft)
            </label>
            <input
              type="number"
              value={breadth}
              onChange={(e) => setBreadth(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter breadth"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-indigo-500" /> Choose Package
            </label>
            <select
              value={packageRate}
              onChange={(e) => setPackageRate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="">Select Package</option>
              <option value="1149">Budget - ₹1149/sqft</option>
              <option value="1249">Classic - ₹1249/sqft</option>
              <option value="1649">Premium - ₹1649/sqft</option>
              <option value="1849">Luxury - ₹1849/sqft</option>
              <option value="2049">Elite - ₹2049/sqft</option>
            </select>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleEstimate}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Calculate Estimate
          </motion.button>
        </div>

        {/* Output */}
        {totalCost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center border-t border-gray-200 pt-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Estimated Cost
            </h2>
            <div className="flex items-center justify-center gap-2 text-4xl font-extrabold text-green-600">
              <IndianRupee className="w-8 h-8" />
              {totalCost.cost.toLocaleString("en-IN")}
            </div>
            <p className="text-gray-600 mt-3">
              Total Area: <span className="font-semibold">{totalCost.totalArea} sq.ft</span>{" "}
              (including 100 sq.ft septic tank)
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Base Area: {totalCost.area} sq.ft × ₹{packageRate}/sq.ft
            </p>
          </motion.div>
        )}
      </motion.div>

      <p className="text-sm text-gray-500 mt-8 text-center max-w-md">
        *Disclaimer: This is an approximate estimate for general understanding.
        Actual cost may vary based on material quality, site conditions, and local regulations.
      </p>
    </div>
  );
}
