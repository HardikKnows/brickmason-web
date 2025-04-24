import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
  const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
  const [selectedPlan, setSelectedPlan] = useState("budget"); // Track the selected plan

  const toggleRow = (rowId) => {
    setExpandedRow((prev) => (prev === rowId ? null : rowId)); // Toggle expanded row
  };

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId); // Update the selected plan
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
    <div className="bg-[#D6CBBF]">
      <div className="container mx-auto p-4 font-sans !flex-col">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          FIND THE BEST HOME CONSTRUCTION PACKAGES
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-600 mb-8">
          We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, and community-built environments. Building isn't just a job. It's our passion. With every project we undertake, we set the bar high and provide the best in the industry.
        </p>

        {/* Package Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left text-white bg-gray-700">Features</th>
                {Object.keys(packages).map((planId) => (
                  <th
                    key={planId}
                    className={`py-3 px-4 border-b text-center text-white bg-black cursor-pointer ${
                      selectedPlan === planId ? "!bg-[#D2042D]" : ""
                    }`}
                    onClick={() => handlePlanClick(planId)}
                  >
                    {packages[planId].name} - {packages[planId].price}
                  </th>
                ))}
                <th className="py-3 px-4 border-b text-right text-white bg-gray-700">Actions</th> {/* New column for icons */}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-700">{row.label}</td>
                    {Object.keys(packages).map((planId) => (
                      <td
                        key={planId}
                        className={`py-3 px-4 border-b text-center`}
                      >
                        {/* No "+" sign here */}
                      </td>
                    ))}
                    <td className="py-3 px-4 border-b text-right">
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
                      <td colSpan={Object.keys(packages).length + 2} className="py-3 px-4 border-b bg-gray-50">
                        <div className="pl-8">
                          {Object.entries(packages[selectedPlan].features[row.id]).map(([key, value]) => (
                            <div key={key} className="text-gray-600 mb-2">
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

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-[#D2042D] text-white rounded-lg hover:bg-red-700 transition-colors">
            GET FREE QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageTable;