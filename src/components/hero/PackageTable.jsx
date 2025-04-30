import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const packages = {
  structure: {
    name: "Structure",
    price: "₹1,100/sq.ft",
    features: {
      designAndDrawings: {
        architecturalLayout: "2D Architectural Layout",
        mepDetailing: "MEP Detailing",
        structuralDetailing: "Structural Detailing",
        elevation: "Elevation",
      },
      structure: {
        steel: "Kamdhenu/KAY 2 (subject to availability)",
        bricks: "Good Quality (Avval)",
        cement: "UltraTech for Masonry/ACC Gold for Slab",
        rccDesignMix: "As per the structural designer's recommendation",
        ceilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
        plumbing: "CPVC & UPVC pipeline fittings",
        electrical: "Electrical conduiting",
        plaster: "Plaster of elevation & inner walls",
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
    price: "₹1,200/sq.ft",
    features: {
      designAndDrawings: {
        architecturalLayout: "2D Architectural Layout",
        mepDetailing: "MEP Detailing",
        structuralDetailing: "Structural Detailing",
        elevation: "Elevation",
      },
      structure: {
        steel: "Kamdhenu/KAY 2 (subject to availability)",
        bricks: "Good Quality (Avval)",
        cement: "UltraTech for Masonry/ACC Gold for Slab",
        rccDesignMix: "M20 GRADE MORTAR (1:1.5:3)",
        ceilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
        footing: "PEDESTAL FOOTING",
        waterproofCoating: "BITUFIX WATERPROOF COATING FOR FOUNDATION",
        roofWaterproofing: "ROOF WATERPROOFING",
        pipeline: "6” DRAINAGE PIPELINE WORK",
        frames: "6/3 WOODEN FRAMES",
        doornWindows: "SAGWAN/ MALAYSIAN SAKHU TIGUDIA FOR DOORS & WINDOWS",
        plumbing: "CPVC & UPVC pipeline fittings",
        electrical: "Electrical conduiting",
        plaster: "Plaster of elevation & inner walls",
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
    price: "₹1,599/sq.ft",
    features: {
      designAndDrawings: {
        architecturalLayout: "2D Architectural Layout",
        mepDetailing: "MEP Detailing",
        structuralDetailing: "Structural Detailing",
        elevation: "Elevation",
      },
      structure: {
        steel: "Kamdhenu/KAY 2 (subject to availability)",
        bricks: "Good Quality (Avval)",
        cement: "UltraTech for Masonry/ACC Gold for Slab",
        rccDesignMix: "As per the structural designer's recommendation",
        ceilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
      },
      kitchen: {
        wallTiles: "Plain wall tiles up to 3ft height above kitchen slab",
        sinkFaucet: "Main sink faucet",
        sink: "Kitchen sink",
        slab: "Marble up to ₹80",
      },
      bathroom: {
        wallTiles: "Plain wall tiles up to 7ft height",
        sanitaryWare: "Cera",
        upvcPipe: "3\"-4\" Supreme/Parryware",
        doors: "Fibre doors",
      },
      doorsAndWindows: {
        roomDoors: "Compressed wood",
        windows: "Sagwan",
        woodenFrames: "Sagwan/Malaysian",
      },
      painting: {
        putty: "Asian Putty + Wall Masta or equivalent",
      },
      pop: {
        ceiling: "ISO POP on ceiling",
      },
      falseCeiling: {
        Nil: "Nil",
      },
      flooring: {
        interiorTiles: "Plain tiles (2*2)",
        porticoTiles: "Heavy duty",
        staircase: "Marble up to ₹100",
        bathroomTiles: "1*1 floor tiles",
      },
      electrical: {
        wires: "Anchor",
        switches: "Anchor Rider",
      },
      miscellaneous: {
        overheadTank: "500 litres",
        staircaseRailing: "SS202",
      },
    },
  },
  classic: {
    name: "Classic",
    price: "₹1,799/sq.ft",
    features: {
      designAndDrawings: {
        architecturalLayout: "2D Architectural Layout",
        mepDetailing: "MEP Detailing",
        structuralDetailing: "Structural Detailing",
        elevation: "Elevation",
      },
      structure: {
        steel: "Kamdhenu",
        bricks: "Good Quality (Avval)",
        cement: "UltraTech for Masonry/ACC Gold for Slab",
        rccDesignMix: "As per the structural designer's recommendation",
        ceilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
      },
      kitchen: {
        wallTiles: "Ceramic tiles up to 3ft height above kitchen slab",
        sinkFaucet: "Main sink faucet",
        sink: "Kitchen sink (stainless steel)",
        slab: "Marble up to ₹100",
      },
      bathroom: {
        wallTiles: "Ceramic tiles up to 7ft height",
        sanitaryWare: "Cera",
        cpvcPipe: "Ashirwad/Supreme",
        doors: "PVC/Aluminium",
      },
      doorsAndWindows: {
        roomDoors: "Compressed wood",
        jaaliDoors: "Jaali doors & windows of Sagwan",
        windows: "Sagwan",
        woodenFrames: "Sagwan/Malaysian",
      },
      painting: {
        putty: "Birla Putty (2 coat) + Emulsion",
      },
      pop: {
        ceiling: "Sakarni POP on ceiling",
      },
      flooring: {
        interiorTiles: "Double charge (2*2)",
        porticoTiles: "Heavy duty",
        staircase: "Black marble",
        bathroomTiles: "1*1 floor tiles",
      },
      falseCeiling: {
        Nil: "Nil",
      },
      electrical: {
        wires: "Polycab",
        switches: "Anchor Penta",
      },
      miscellaneous: {
        overheadTank: "1000 litres",
        staircaseRailing: "SS304",
        wallpaper: "1 room textured wallpaper work",
        tvUnit: "1 T.V. unit",
      },
    },
  },
  premium: {
    name: "Premium",
    price: "₹1,999/sq.ft",
    features: {
      designAndDrawings: {
        architecturalLayout: "2D Architectural Layout",
        mepDetailing: "MEP Detailing",
        structuralDetailing: "Structural Detailing",
        elevation: "Elevation",
      },
      structure: {
        steel: "Tata",
        bricks: "Avval",
        cement: "UltraTech, ACC Gold for Slab",
        rccDesignMix: "As per the structural designer's recommendation",
        ceilingHeight: "Up to 10'9\" ft (Finished Floor Level to Finished Floor Level)",
      },
      kitchen: {
        modularKitchen: "Modular kitchen",
        wallTiles: "Ceramic tiles up to 3ft height above kitchen slab",
        sinkFaucet: "Main sink faucet",
        sink: "Kitchen sink (stainless steel)",
        slab: "Red granite",
      },
      bathroom: {
        wallTiles: "Ceramic tiles up to 7ft height",
        sanitaryWare: "Jaquar",
        cpvcPipe: "Supreme/Astral",
        doors: "Sagwan",
      },
      doorsAndWindows: {
        roomDoors: "Designer door",
        jaaliDoors: "Jaali doors & windows of Sagwan",
        windows: "Sheesham",
        woodenFrames: "Kapoor/Marble",
      },
      painting: {
        putty: "Birla Putty (2 coat) + Royal Shine",
      },
      falseCeiling: {
        gypsumBoard: "Gypsum board false ceiling",
      },
      flooring: {
        interiorTiles: "Premium tiles (2*2)/(2*4)",
        porticoTiles: "Heavy duty",
        staircase: "Red granite",
        bathroomTiles: "1*1 floor tiles",
      },
      electrical: {
        wires: "Havells",
        switches: "Anchor Roma",
      },
      furnitures: {
        tvUnits: "T.V. units",
        wardrobe: "Wardrobe work",
        beds: "Designer beds",
      },
      miscellaneous: {
        overheadTank: "1000 litres",
        staircaseRailing: "SS304",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 via-orange-50 to-rose-50 py-10 min-h-screen">
      <div className="container mx-auto p-4 font-sans !flex-col">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          FIND THE BEST HOME CONSTRUCTION PACKAGES
        </h2>
        <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, and community-built environments. Building isn't just a job. It's our passion. With every project we undertake, we set the bar high and provide the best in the industry.
        </p>

        {/* Mobile package selector */}
        <div className="mb-4 block md:hidden">
          <label htmlFor="packageSelect" className="block text-sm font-medium text-gray-700 mb-1">
            Select Package
          </label>
          <select
            id="packageSelect"
            value={selectedPlan}
            onChange={(e) => handlePlanClick(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2 text-sm"
          >
            {Object.keys(packages).map((planId) => (
              <option key={planId} value={planId}>
                {packages[planId].name} - {packages[planId].price}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile version */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`border rounded-md shadow-sm p-4 ${expandedRow === row.id ? 'bg-gray-50' : 'bg-white'}`}
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
                  {Object.entries(packages[selectedPlan].features[row.id]).map(([key, value]) => (
                    <div key={key} className="mb-1">
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop table version */}
        <div className="overflow-x-auto hidden md:block mb-8 text-sm">
          <table className="min-w-full bg-white border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-2 border-b text-left text-white bg-gray-700 text-xs">Features</th>
                {Object.keys(packages).map((planId) => (
                 <th
                 key={planId}
                 className={`py-2 px-2 border-b text-center text-white text-xs cursor-pointer ${
                   selectedPlan === planId ? 'bg-[#D2042D]' : 'bg-black'
                 }`}
                 onClick={() => handlePlanClick(planId)}
               >
                 {packages[planId].name} - {packages[planId].price}
               </th>
               
                ))}
                <th className="py-2 px-2 border-b text-right text-white bg-gray-700 text-xs">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr>
                    <td className="py-2 px-2 border-b text-gray-700 text-xs">{row.label}</td>
                    {Object.keys(packages).map((planId) => (
                      <td key={planId} className="py-2 px-2 border-b text-center text-xs">
                        {/* no content */}
                      </td>
                    ))}
                    <td className="py-2 px-2 border-b text-right">
                      <button
                        onClick={() => toggleRow(row.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        {expandedRow === row.id ? <FaMinus /> : <FaPlus />}
                      </button>
                    </td>
                  </tr>
                  {expandedRow === row.id && (
                    <tr>
                      <td colSpan={Object.keys(packages).length + 2} className="py-2 px-2 border-b bg-gray-50 text-xs">
                        <div className="pl-4">
                          {Object.entries(packages[selectedPlan].features[row.id]).map(([key, value]) => (
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
          </table>
        </div>

        <div className="text-center">
          <Link to="/contact" className="px-4 py-2 text-sm bg-[#D2042D] text-white rounded hover:bg-red-700 hover:no-underline transition-colors">
            GET FREE QUOTE
          </Link>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 bg-orange-200 rounded-full opacity-30 top-10 left-10 animate-pulse" />
        <div className="absolute w-24 h-24 bg-yellow-200 rounded-full opacity-20 bottom-0 right-0 animate-[bounce_6s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};

export default PackageTable;
