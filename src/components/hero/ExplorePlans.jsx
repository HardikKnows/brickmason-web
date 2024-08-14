
import React from "react"


function ExplorepPlans() {


return <section className=" bg-lightbrownc py-[100px]">
        <div className="container ">
            <div className="sm-padding text-left text-[#000000b2]">
                <div className="content-info wow fadeInRight" data-wow-delay="300ms" styleRe="visibility: visible; animation-delay: 300ms; animation-name: fadeInRight;">
                    <span className="workSans text-xs uppercase ">Find the best home construction packages.*</span>
                    <h2 className="poppins text-2xl md:text-3xl mt-[16px] mb-[20px]">Packages</h2>
                    <p className="source-sans text-base mb-[30px] !font-normal">We are committed to building a sustainable future by fostering a collaborative spirit that
                        creates exceptional experiences, balanced relationships, and community built environment.
                        Building isn’t just job. It's our passion. With every project we undertake, we set the bar
                        high and provide the best industry.</p>
    
                </div>
            </div>
        </div>
        <div className="container">
            <div className="package_table">
               <table cols="3" className="packageData1">
                <tbody><tr><td><button className="default-btn-package" onclick="buttonPressed1(); showBasic(); " id="basicButton" styleRe="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">Basic - Rs 1,500/sq.ft</button></td>
                    <td><button className="default-btn-package " onclick=" buttonPressed2(); showClassic()" id="classicButton" styleRe="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">Classic - Rs 1,700/sq.ft</button></td>
                     <td><button className="default-btn-package" onclick="buttonPressed3(); showPremium()" id="premiumButton" styleRe="background-color: rgb(255, 118, 7); color: rgb(0, 0, 0);">Premium - Rs 1,900/sq.ft</button>
                     </td></tr>
               </tbody></table>
                {/*<!-- Basic Package Data -->*/}
                <table cols="3" className="packageData" id="BasicPackageData" styleRe="display: none;">
                   
                                        <tbody><tr onclick="BasicShow('Design')" id="Design">
                        <td className="package_detail_title">DESIGN &amp; DRAWINGS</td>
                        <td className="showmorebutton">+</td>
                        </tr><tr>
                            <td className="package_details" id="DesignData" styleRe="display: none;">
                                ARCHITECTURAL LAYOUT – 2D
                            </td>
                        </tr>
                        <tr>
                            <td className="package_details" id="DesignData" styleRe="display: none;">
                                3D VISUALIZATION
                            </td>
                        </tr>
                        <tr>
                            <td className="package_details" id="DesignData" styleRe="display: none;">
                                ELEVATION
                            </td>
                        </tr>
                    
                    
                    <tr onclick="BasicShow('Structure')" id="Structure">
                        <td className="package_detail_title">STRUCTURE</td>
                        <td className="showmorebutton">-</td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            STEEL – K2
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            BRICKS – GOOD QUALITY
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            CEMENT – ULTRATECH
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            RCC DESIGN MIX – AS PER THE STRUCTURAL DESIGNER RECOMMENDATION
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            CEILING HEIGHT – UP TO 10 FT (FINISHED FLOOR LEVEL TO FINISHED FLOOR LEVEL)
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Kitchen')" id="Kitchen">
                        <td className="package_detail_title"> KITCHEN</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            PLAIN WALL TILES UP TO 3FT HEIGHT ABOVE KITCHEN SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            MAIN SINK FAUCET
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            KITCHEN SINK
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;"> 
                            SLAB – BARODA GREEN MARBLE
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Bathroom')" id="Bathroom">
                        <td className="package_detail_title"> BATHROOM</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            PLAIN WALL TILES UP TO 7FT FEET HEIGHT
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            SANITARY WARE &amp; CPVC FITTINGS – IRIS/ESSEL 
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            CPVC PIPE – KISAN/ISO
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            BATHROOM DOORS – PVC / ALUMINIUM
                        </td>
                    </tr>
                        
                    <tr onclick="BasicShow('Door')" id="Door">
                        <td className="package_detail_title"> DOOR &amp; WINDOWS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            ROOM DOORS – COMPRESSED WOOD 
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            WINDOWS – NEEM
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            WOODEN FRAME – NEEM
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Painting')" id="Painting">
                        <td className="package_detail_title"> PAINTING</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="PaintingData" styleRe="display: none;">
                            ASIAN PUTTY + WALL MASTA OR EQUIVALENT
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Pop')" id="Pop">
                        <td className="package_detail_title"> P.O.P</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="PopData" styleRe="display: none;">
                            ISO POP ON CEILING.
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Flooring')" id="Flooring">
                        <td className="package_detail_title"> FLOORING</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            INTERIOR TILES – PLAIN TILES (2*2)
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            PORTICO TILES – HEAVY DUTY
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            STAIRCASE – BARODA GREEN
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            BATHROOM – 1*1 FLOOR TILES
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Electrical')" id="Electrical">
                        <td className="package_detail_title"> ELECTRICAL</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="ElectricalData" styleRe="display: none;">
                            WIRES – ANCHOR
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="ElectricalData" styleRe="display: none;">
                            SWITCHES – ANCHOR RIDER
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Miscellaneous')" id="Miscellaneous">
                        <td className="package_detail_title"> MISCELLANEOUS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            OVERHEAD TANK – 500 LITRES.
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            STAIRCASE RAILING – SS202
                        </td>
                    </tr>
                </tbody></table>
               
               {// <!-- Classic Package Data -->//
               }
                <table cols="3" className="packageData" id="ClassicPackageData" styleRe="display: none;">
                    <tbody><tr onclick="BasicShow('Design')" design="">
                        <td className="package_detail_title"> DESIGN &amp; DRAWINGS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            ARCHITECTURAL LAYOUT – 2D
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            3D VISUALIZATION
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            MEP DRAWINGS
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            ELEVATION
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Structure')" id="Structure">
                        <td className="package_detail_title"> STRUCTURE</td>
                        <td><button className="showmorebutton">-</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            STEEL – KAMDHENU
                                                </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            BRICKS – AVVAL
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            CEMENT – ULTRATECH, ACC GOLD FOR SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            RCC DESIGN MIX – AS PER THE STRUCTURAL DESIGNER RECOMMENDATION
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            CEILING HEIGHT – UP TO 10 FT (FINISHED FLOOR LEVEL TO FINISHED FLOOR LEVEL)
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Kitchen')" id="Kitchen">
                        <td className="package_detail_title"> KITCHEN</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            CERAMIC TILES UP TO 3FT HEIGHT ABOVE KITCHEN SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            MAIN SINK FAUCET
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            KITCHEN SINK (STAINLESS STEEL)
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            SLAB – BLACK MARBLE 
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Bathroom')" id="Bathroom">
                        <td className="package_detail_title"> BATHROOM</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            CERAMIC TILES UP TO 7FT FEET HEIGHT
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            SANITARY WARE &amp; CPVC FITTINGS – CERA 
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            CPVC PIPE – ASHIRWAD
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            BATHROOM DOORS – PVC / ALUMINIUM
                        </td>
                    </tr>
                        
                    <tr onclick="BasicShow('Door')" id="Door">
                        <td className="package_detail_title"> DOOR &amp; WINDOWS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            ROOM DOORS – COMPRESSED WOOD 
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            JAALI DOORS &amp; WINDOWS
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            WINDOWS – SAGWAN
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            WOODEN FRAME – MALAYSIAN
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Painting')" id="Painting">
                        <td className="package_detail_title"> PAINTING</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="PaintingData" styleRe="display: none;">
                            BIRLA PUTTY (2 COAT) + EMULSION
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Pop')" id="Pop">
                        <td className="package_detail_title"> P.O.P</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="PopData" styleRe="display: none;">
                            SAKARNI POP ON CEILING.
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Flooring')" id="Flooring">
                        <td className="package_detail_title"> FLOORING</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            INTERIOR TILES – PLAIN TILES (2*2)
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            PORTICO TILES – HEAVY DUTY
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            STAIRCASE – BLACK MARBLE
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            BATHROOM – 1*1 FLOOR TILES
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Electrical')" id="Electrical">
                        <td className="package_detail_title"> ELECTRICAL</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="ElectricalData" styleRe="display: none;">
                            WIRES – POLYCAB
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="ElectricalData" styleRe="display: none;">
                            SWITCHES – ANCHOR PENTA
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Miscellaneous')" id="Miscellaneous">
                        <td className="package_detail_title"> MISCELLANEOUS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            OVERHEAD TANK – 1000 LITRES.
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            STAIRCASE RAILING – SS304
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            WALLPAPER TEXTURE
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            T.V. UNITS
                        </td>
                    </tr>
                </tbody></table>
                {//<!-- Premium Package Data -->
                }
                <table cols="3" className="packageData" id="PremiumPackageData" styleRe="display: block;">
                    <tbody><tr onclick="BasicShow('Design')" id="Design">
                        <td className="package_detail_title"> DESIGN &amp; DRAWINGS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            ARCHITECTURAL LAYOUT – 2D
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            3D VISUALIZATION
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            MEP DRAWINGS
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DesignData" styleRe="display: none;">
                            ELEVATION
                        </td>
                    </tr>
                    <tr id="Structure" onclick="BasicShow('Structure')">
                        <td className="package_detail_title"> STRUCTURE</td>
                        <td><button className="showmorebutton">-</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            STEEL – KAMDHENU/ TATA
                                                </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            BRICKS – AVVAL
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            CEMENT – ULTRATECH, ACC GOLD FOR SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            RCC DESIGN MIX – AS PER THE STRUCTURAL DESIGNER RECOMMENDATION
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="StructureData" styleRe="display: block;">
                            CEILING HEIGHT – UP TO 10 FT (FINISHED FLOOR LEVEL TO FINISHED FLOOR LEVEL)
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Kitchen')" id="Kitchen">
                        <td className="package_detail_title"> KITCHEN</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            CERAMIC TILES UP TO 3FT HEIGHT ABOVE KITCHEN SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            MAIN SINK FAUCET
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            KITCHEN SINK (STAINLESS STEEL)
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="KitchenData" styleRe="display: none;">
                            SLAB – RED GRANITE 
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Bathroom')" id="Bathroom">
                        <td className="package_detail_title"> BATHROOM</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            CERAMIC TILES UP TO 7FT FEET HEIGHT
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            SANITARY WARE &amp; CPVC FITTINGS – JAQUAR
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            CPVC PIPE – SUPREME/ASTRAL
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="BathroomData" styleRe="display: none;">
                            BATHROOM DOORS – SAGWAN
                        </td>
                    </tr>
                        
                    <tr onclick="BasicShow('Door')" id="Door">
                        <td className="package_detail_title"> DOOR &amp; WINDOWS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            ROOM DOORS – DESIGNER DOOR  
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            JAALI DOORS &amp; WINDOWS
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            WINDOWS – SHEESHAM
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="DoorData" styleRe="display: none;">
                            WOODEN FRAME – KAPOOR/MARBLE
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Painting')" id="Painting">
                        <td className="package_detail_title"> PAINTING</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="PaintingData" styleRe="display: none;">
                            BIRLA PUTTY (2 COAT) + ROYAL SHINE
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Pop')" id="Pop">
                        <td className="package_detail_title"> P.O.P</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="PopData" styleRe="display: none;">
                            SAKARNI POP ON CEILING.
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Flooring')" id="Flooring">
                        <td className="package_detail_title"> FLOORING</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            INTERIOR TILES – PLAIN TILES (4*2)
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            PORTICO TILES – HEAVY DUTY
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            STAIRCASE – RED GRANITE
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="FlooringData" styleRe="display: none;">
                            BATHROOM – 2*2 FLOOR TILES
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Electrical')" id="Electrical">
                        <td className="package_detail_title"> ELECTRICAL</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="ElectricalData" styleRe="display: none;">
                            WIRES – HAVELLS
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="ElectricalData" styleRe="display: none;">
                            SWITCHES – ANCHOR ROMA
                        </td>
                    </tr>
                    <tr onclick="BasicShow('Miscellaneous')" id="Miscellaneous">
                        <td className="package_detail_title"> MISCELLANEOUS</td>
                        <td><button className="showmorebutton">+</button></td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            OVERHEAD TANK – 1000 LITRES.
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            STAIRCASE RAILING – SS304
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            WALLPAPER TEXTURE*
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            T.V. UNITS
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            WOODEN FLOORING*
                        </td>
                    </tr>
                    <tr>
                        <td className="package_details" id="MiscellaneousData" styleRe="display: none;">
                            WARDROBE PANELLING*
                        </td>
                    </tr>
                </tbody></table>
            </div>
        </div>
        <a id="get_free_quota" href="contact.html" className="default-btn">Get Free Quote</a>
        
    </section>

            }
            export default ExplorepPlans;