import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ Required for animation

const packages = {
  structure: {
    name: "Structure",
    price: "₹1,149/sq.ft",
    features: {
      designAndDrawings: {
        ArchitecturalLayout: "2D Architectural Layout",
        MEPDetailing: "MEP Detailing",
        StructuralDetailing: "Structural Detailing",
        Elevation: "Elevation",
      },
      structure: {
        Steel: "Kamdhenu/KAY 2 (subject to availability)",
        Bricks: "Good Quality (Avval)",
        Cement: "UltraTech for Masonry/ACC Gold for Slab",
        RCCDesignMix: "As per the structural designer's recommendation",
        CeilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
        Plumbing: "CPVC & UPVC pipeline fittings",
        Electrical: "Electrical conduiting",
        Plaster: "Plaster of elevation & inner walls",
      },
      kitchen: {
        Nil: "Nil",
      },
      bathroom: {
        Nil: "Nil",
      },
      doorsAndWindows: {
        Nil: "Nil",
      },
      painting: {
        Nil: "Nil",
      },
      falseCeiling: {
        Nil: "Nil",
      },
      flooring: {
        Nil: "Nil",
      },
      electrical: {
        Nil: "Nil",
      },
      furnitures: {
        Nil: "Nil",
      },
      miscellaneous: {
        Nil: "Nil",
      },
    },
  },
  structure2: {
    name: "Structure",
    price: "₹1,249/sq.ft",
    features: {
      designAndDrawings: {
        ArchitecturalLayout: "2D Architectural Layout",
        MEPDetailing: "MEP Detailing",
        StructuralDetailing: "Structural Detailing",
        Elevation: "Elevation",
      },
      structure: {
        Steel: "Kamdhenu/KAY 2 (subject to availability)",
        Bricks: "Good Quality (Avval)",
        Cement: "UltraTech for Masonry/ACC Gold for Slab",
        RCCDesignMix: "M20 GRADE MORTAR (1:1.5:3)",
        CeilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
        Footing: "PEDESTAL FOOTING",
        WaterproofCoating: "BITUFIX WATERPROOF COATING FOR FOUNDATION",
        RoofWaterproofing: "ROOF WATERPROOFING",
        Pipeline: "6” DRAINAGE PIPELINE WORK",
        Frames: "6/3 WOODEN FRAMES",
        DoorAndWindows: "SAGWAN/ MALAYSIAN SAKHU TIGUDIA FOR DOORS & WINDOWS",
        Plumbing: "CPVC & UPVC pipeline fittings",
        Electrical: "Electrical conduiting",
        Plaster: "Plaster of elevation & inner walls",
      },
      kitchen: {
        Nil: "Nil",
      },
      bathroom: {
        Nil: "Nil",
      },
      doorsAndWindows: {
        Nil: "Nil",
      },
      painting: {
        Nil: "Nil",
      },
      falseCeiling: {
        Nil: "Nil",
      },
      flooring: {
        Nil: "Nil",
      },
      electrical: {
        Nil: "Nil",
      },
      furnitures: {
        Nil: "Nil",
      },
      miscellaneous: {
        Nil: "Nil",
      },
    },
  },
  budget: {
    name: "Budget",
    price: "₹1,649/sq.ft",
    features: {
      designAndDrawings: {
        ArchitecturalLayout: "2D Architectural Layout",
        MEPDetailing: "MEP Detailing",
        StructuralDetailing: "Structural Detailing",
        Elevation: "Elevation",
      },
      structure: {
        Steel: "Kamdhenu/KAY 2 (subject to availability)",
        Bricks: "Good Quality (Avval)",
        Cement: "UltraTech for Masonry/ACC Gold for Slab",
        RCCDesignMix: "As per the structural designer's recommendation",
        CeilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
      },
      kitchen: {
        WallTiles: "Plain wall tiles up to 3ft height above kitchen slab",
        SinkFaucet: "Main sink faucet",
        Sink: "Kitchen sink",
        Slab: "Marble up to ₹80",
      },
      bathroom: {
        WallTiles: "Plain wall tiles up to 7ft height",
        SanitaryWare: "Cera",
        UPVCPipe: '3"-4" Supreme/Parryware',
        Doors: "Fibre doors",
      },
      doorsAndWindows: {
        RoomDoors: "Compressed wood",
        Windows: "Sagwan",
        WoodenFrames: "Sagwan/Malaysian",
      },
      painting: {
        Putty: "Asian Putty + Wall Masta or equivalent",
      },
      pop: {
        Ceiling: "ISO POP on ceiling",
      },
      falseCeiling: {
        Nil: "Nil",
      },
      flooring: {
        InteriorTiles: "Plain tiles (2*2)",
        PorticoTiles: "Heavy duty",
        Staircase: "Marble up to ₹100",
        BathroomTiles: "1*1 floor tiles",
      },
      electrical: {
        Wires: "Anchor",
        Switches: "Anchor Rider",
      },
      miscellaneous: {
        OverheadTank: "500 litres",
        StaircaseRailing: "SS202",
      },
    },
  },
  classic: {
    name: "Classic",
    price: "₹1,849/sq.ft",
    features: {
      designAndDrawings: {
        ArchitecturalLayout: "2D Architectural Layout",
        MEPDetailing: "MEP Detailing",
        StructuralDetailing: "Structural Detailing",
        Elevation: "Elevation",
      },
      structure: {
        Steel: "Kamdhenu",
        Bricks: "Good Quality (Avval)",
        Cement: "UltraTech for Masonry/ACC Gold for Slab",
        RCCDesignMix: "As per the structural designer's recommendation",
        CeilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
      },
      kitchen: {
        WallTiles: "Ceramic tiles up to 3ft height above kitchen slab",
        SinkFaucet: "Main sink faucet",
        Sink: "Kitchen sink (stainless steel)",
        Slab: "Marble up to ₹100",
      },
      bathroom: {
        WallTiles: "Ceramic tiles up to 7ft height",
        SanitaryWare: "Cera",
        CPVCPipe: "Ashirwad/Supreme",
        Doors: "PVC/Aluminium",
      },
      doorsAndWindows: {
        RoomDoors: "Compressed wood",
        JaaliDoors: "Jaali doors & windows of Sagwan",
        Windows: "Sagwan",
        WoodenFrames: "Sagwan/Malaysian",
      },
      painting: {
        Putty: "Birla Putty (2 coat) + Emulsion",
      },
      pop: {
        Ceiling: "Sakarni POP on ceiling",
      },
      flooring: {
        InteriorTiles: "Double charge (2*2)",
        PorticoTiles: "Heavy duty",
        Staircase: "Black marble",
        BathroomTiles: "1*1 floor tiles",
      },
      falseCeiling: {
        Nil: "Nil",
      },
      electrical: {
        Wires: "Polycab",
        Switches: "Anchor Penta",
      },
      miscellaneous: {
        OverheadTank: "1000 litres",
        StaircaseRailing: "SS304",
        Wallpaper: "1 room textured wallpaper work",
        TVUnit: "1 T.V. unit",
      },
    },
  },
  premium: {
    name: "Premium",
    price: "₹2049/sq.ft",
    features: {
      designAndDrawings: {
        ArchitecturalLayout: "2D Architectural Layout",
        MEPDetailing: "MEP Detailing",
        StructuralDetailing: "Structural Detailing",
        Elevation: "Elevation",
      },
      structure: {
        Steel: "Tata",
        Bricks: "Avval",
        Cement: "UltraTech, ACC Gold for Slab",
        RCCDesignMix: "As per the structural designer's recommendation",
        CeilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
      },
      kitchen: {
        ModularKitchen: "Modular kitchen",
        WallTiles: "Ceramic tiles up to 3ft height above kitchen slab",
        SinkFaucet: "Main sink faucet",
        Sink: "Kitchen sink (stainless steel)",
        Slab: "Red granite",
      },
      bathroom: {
        WallTiles: "Ceramic tiles up to 7ft height",
        SanitaryWare: "Jaquar",
        CPVCPipe: "Supreme/Astral",
        Doors: "Sagwan",
      },
      doorsAndWindows: {
        RoomDoors: "Designer door",
        JaaliDoors: "Jaali doors & windows of Sagwan",
        Windows: "Sheesham",
        WoodenFrames: "Kapoor/Marble",
      },
      painting: {
        Putty: "Birla Putty (2 coat) + Royal Shine",
      },
      falseCeiling: {
        GypsumBoard: "Gypsum board false ceiling",
      },
      flooring: {
        InteriorTiles: "Premium tiles (2*2)/(2*4)",
        PorticoTiles: "Heavy duty",
        Staircase: "Red granite",
        BathroomTiles: "1*1 floor tiles",
      },
      electrical: {
        Wires: "Havells",
        Switches: "Anchor Roma",
      },
      furnitures: {
        TVUnits: "T.V. units",
        Wardrobe: "Wardrobe work",
        Beds: "Designer beds",
      },
      miscellaneous: {
        OverheadTank: "1000 litres",
        StaircaseRailing: "SS304",
      },
    },
  },
};


const PackageTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("budget");

  const toggleRow = (rowId) => {
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
  };

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId);
  };

  const rows = [
    { id: "designAndDrawings", label: "Design & Drawings" },
    { id: "structure", label: "Structure" },
    { id: "kitchen", label: "Kitchen" },
    { id: "bathroom", label: "Bathroom" },
    { id: "doorsAndWindows", label: "Doors & Windows" },
    { id: "painting", label: "Painting" },
    { id: "falseCeiling", label: "False Ceiling" },
    { id: "flooring", label: "Flooring" },
    { id: "electrical", label: "Electrical" },
    { id: "furnitures", label: "Furnitures" },
    { id: "miscellaneous", label: "Miscellaneous" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-tl from-amber-50 via-white to-pink-50 py-10 min-h-screen"
    >
      <div className="max-w-4xl mx-auto p-4 font-sans flex flex-col">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          FIND THE BEST HOME CONSTRUCTION PACKAGES
        </h2>
        <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, and community-built environments.
        </p>

        {/* Mobile Selector */}
        <div className="mb-4 block md:hidden">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Package</label>
          <select
  id="packageSelect"
  value={selectedPlan}
  onChange={(e) => handlePlanClick(e.target.value)}
  className="block w-full border border-[#ffff] text-[#ffff] font-semibold rounded-md p-2 text-sm bg-[#D2042D] shadow-sm text-center"
>

            {Object.keys(packages).map((planId) => (
              <option key={planId} value={planId}>
                {packages[planId].name} - {packages[planId].price}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 pb-12">
          {rows.map((row) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className={`border rounded-xl shadow-md p-4 ${expandedRow === row.id ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">{row.label}</span>
                <button
                  onClick={() => toggleRow(row.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expandedRow === row.id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {expandedRow === row.id && (
                <div className="mt-2 text-sm text-gray-700">
                  {Object.entries(packages[selectedPlan].features[row.id] || {}).map(([key, value]) => (
                    <div key={key} className="mb-1">
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto hidden md:block mb-10 text-sm">
          <motion.table
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-full border-separate border-spacing-0 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left text-white bg-gray-700 text-xs rounded-tl-2xl">Features</th>
                {Object.keys(packages).map((planId) => (
                  <th
                    key={planId}
                    className={`py-3 px-4 text-center text-white text-xs cursor-pointer ${
                      selectedPlan === planId ? 'bg-[#D2042D]' : 'bg-black'
                    }`}
                    onClick={() => handlePlanClick(planId)}
                  >
                    {packages[planId].name} - {packages[planId].price}
                  </th>
                ))}
                <th className="py-3 px-4 text-right text-white bg-gray-700 text-xs rounded-tr-2xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <React.Fragment key={row.id}>
                  <tr className="border-b last:border-none">
                    <td className="py-3 px-4 text-gray-800 text-xs font-medium">{row.label}</td>
                    {Object.keys(packages).map((planId) => (
                      <td key={planId} className="py-3 px-4 text-center text-xs text-gray-600">
                        {/* You can add summary icons or tick marks here if needed */}
                      </td>
                    ))}
                    <td className="py-3 px-4 text-right">
                      <button onClick={() => toggleRow(row.id)} className="text-blue-500 hover:text-blue-700">
                        {expandedRow === row.id ? <FaMinus /> : <FaPlus />}
                      </button>
                    </td>
                  </tr>
                  {expandedRow === row.id && (
                    <tr className="bg-gray-50 text-xs">
                    <td colSpan={Object.keys(packages).length + 2} className="py-3 px-4">
                      <div className="max-w-md mx-auto text-left">
                        {Object.entries(packages[selectedPlan].features[row.id] || {}).map(([key, value]) => (
                          <div key={key} className="text-gray-600 mb-1">
                            <strong>{key}:</strong> {value}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                  
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </motion.table>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm bg-[#D2042D] text-white rounded hover:bg-red-700 hover:no-underline transition-colors"
          >
            GET FREE QUOTE
          </Link>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 bg-orange-200 rounded-full opacity-30 top-10 left-10 animate-pulse blur-xl" />
        <div className="absolute w-24 h-24 bg-yellow-200 rounded-full opacity-20 bottom-0 right-0 animate-bounce blur-lg" />
      </div>
    </motion.section>
  );
};

export default PackageTable;