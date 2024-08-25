
import React from "react"
import { useState } from "react";


function ExplorepPlans() {
    const [isVisible1, setIsVisible1] = useState(false);
    function basicShowDesign () {
        return setIsVisible1(!isVisible1);
    }
    const [isVisible2, setIsVisible2] = useState(false);
    function basicShowStructure () {
        return setIsVisible2(!isVisible2);
    }
    const [isVisible3, setIsVisible3] = useState(false);
    function basicShowKitchen () {
        return setIsVisible3(!isVisible3);
    }
    const [isVisible4, setIsVisible4] = useState(false);
    function basicShowBathroom () {
        return setIsVisible4(!isVisible4);
    }
    const [isVisible5, setIsVisible5] = useState(false);
    function basicShowDoor () {
        return setIsVisible5(!isVisible5);
    }

    const [isVisible6, setIsVisible6] = useState(false);
    function basicShowPainting () {
        return setIsVisible6(!isVisible6);
    }
    const [isVisible7, setIsVisible7] = useState(false);
    function basicShowPop () {
        return setIsVisible7(!isVisible7);
    }
    const [isVisible8, setIsVisible8] = useState(false);
    function basicShowFlooring () {
        return setIsVisible8(!isVisible8);
    }
    const [isVisible9, setIsVisible9] = useState(false);
    function basicShowElectrical () {
        return setIsVisible9(!isVisible9);
    }
    const [isVisible10, setIsVisible10] = useState(false);
    function basicShowMiscellaneous () {
        return setIsVisible10(!isVisible10);
    }
    
  


return <section className="container bg-lightbrownc py-[100px] ">
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
        <div className="container flex justify-center content-center ">
            <div className="package_table">
               <table cols="3" className="packageData1 w-full workSans bg-black text-white h-[20px] md:h-[30px] lg:h-[45px] text-[8px] md:text-[10px] lg:text-[12px]">
                <tbody><tr><td className="p-0"><button className="h-[20px] md:h-[30px] lg:h-[45px]  mx-[-4px] px-[10px] md:px-[39px] orangeTable0s w-full" onClick="buttonPressed1(); showBasic(); " id="basicButton" styleRe="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">Basic - Rs 1,500/sq.ft</button></td>
                    <td className="p-0"><button className=" h-[20px] px-[10px] md:h-[30px] lg:h-[45px]  mx-[-4px] md:px-[39px] orangeTable10s w-full" onClick=" buttonPressed2(); showClassic()" id="classicButton" styleRe="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">Classic - Rs 1,700/sq.ft</button></td>
                     <td className="p-0"><button className=" h-[20px] px-[10px] md:h-[30px] lg:h-[45px] mx-[-4px] md:px-[39px] orangeTable20s w-full" onClick="buttonPressed3(); showPremium()" id="premiumButton" styleRe="background-color: rgb(255, 118, 7); color: rgb(0, 0, 0);">Premium - Rs 1,900/sq.ft</button>
                     </td></tr>
               </tbody></table>
                {/*<!-- Basic Package Data -->*/ }
                <table cols="3" className=" bg-white text-black text-left noneToBlock0sTable" id="BasicPackageData" styleRe="display: none;">
                                        <tbody><tr onClick={basicShowDesign} id="Design">
                        <td className="  workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px]  ">DESIGN &amp; DRAWINGS</td>
                        <td className=" inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px] ">{isVisible1 ? '-' : '+'}</td>
                        </tr> 
                        {isVisible1 && (
<div>
                        <tr>
                            <td className=" workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                                ARCHITECTURAL LAYOUT – 2D
                            </td>
                        </tr>
                        <tr>
                            <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                                3D VISUALIZATION
                            </td>
                        </tr>
                        <tr>
                            <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                                ELEVATION
                            </td>
                        </tr>
                        </div>
                        )}
                    
                    <tr onClick={basicShowStructure} id="Structure">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] ">STRUCTURE</td>
                        <td className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible2 ? '-' : '+'}</td>
                    </tr>
                    {isVisible2 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            STEEL – K2
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            BRICKS – GOOD QUALITY
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            CEMENT – ULTRATECH
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            RCC DESIGN MIX – AS PER THE STRUCTURAL DESIGNER RECOMMENDATION
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            CEILING HEIGHT – UP TO 10 FT (FINISHED FLOOR LEVEL TO FINISHED FLOOR LEVEL)
                        </td>
                    </tr>
                    </div>
                        )}
                    
                    <tr onClick={basicShowKitchen}  id="Kitchen">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> KITCHEN</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible3 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible3 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            PLAIN WALL TILES UP TO 3FT HEIGHT ABOVE KITCHEN SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            MAIN SINK FAUCET
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            KITCHEN SINK
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;"> 
                            SLAB – BARODA GREEN MARBLE
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowBathroom}  id="Bathroom">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> BATHROOM</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible4 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible4 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            PLAIN WALL TILES UP TO 7FT FEET HEIGHT
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            SANITARY WARE &amp; CPVC FITTINGS – IRIS/ESSEL 
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            CPVC PIPE – KISAN/ISO
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            BATHROOM DOORS – PVC / ALUMINIUM
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowDoor} id="Door">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> DOOR &amp; WINDOWS</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible5 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible5 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            ROOM DOORS – COMPRESSED WOOD 
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            WINDOWS – NEEM
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            WOODEN FRAME – NEEM
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowPainting}  id="Painting">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> PAINTING</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible6 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible6 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="PaintingData" styleRe="display: none;">
                            ASIAN PUTTY + WALL MASTA OR EQUIVALENT
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowPop} id="Pop">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> P.O.P</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible7 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible7 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="PopData" styleRe="display: none;">
                            ISO POP ON CEILING.
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowFlooring}  id="Flooring">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> FLOORING</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible8 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible8 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            INTERIOR TILES – PLAIN TILES (2*2)
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            PORTICO TILES – HEAVY DUTY
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            STAIRCASE – BARODA GREEN
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            BATHROOM – 1*1 FLOOR TILES
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowElectrical}  id="Electrical">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> ELECTRICAL</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible9 ? '-' : '+'}</button></td>
                    </tr>

                    {isVisible9 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="ElectricalData" styleRe="display: none;">
                            WIRES – ANCHOR
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="ElectricalData" styleRe="display: none;">
                            SWITCHES – ANCHOR RIDER
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowMiscellaneous} id="Miscellaneous">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> MISCELLANEOUS</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible10 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible10 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            OVERHEAD TANK – 500 LITRES.
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            STAIRCASE RAILING – SS202
                        </td>
                    </tr>
                    </div>
                        )}
                </tbody></table>
                {/* Classic Package Data */}
                <table cols="3" className="bg-white text-black text-left noneToBlock10sTable" id="ClassicPackageData" styleRe="display: block;">
                    <tbody><tr onClick={basicShowDesign} id="Design">
                        <td className="  workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px]  ">DESIGN &amp; DRAWINGS</td>
                        <td className=" inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px] ">{isVisible1 ? '-' : '+'}</td>
                        </tr> 
                        {isVisible1 && (
                <div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            ARCHITECTURAL LAYOUT – 2D
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            3D VISUALIZATION
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            MEP DRAWINGS
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            ELEVATION
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowStructure} id="Structure">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] ">STRUCTURE</td>
                        <td className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible2 ? '-' : '+'}</td>
                    </tr>
                    {isVisible2 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            STEEL – KAMDHENU
                                                </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            BRICKS – AVVAL
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            CEMENT – ULTRATECH, ACC GOLD FOR SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            RCC DESIGN MIX – AS PER THE STRUCTURAL DESIGNER RECOMMENDATION
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            CEILING HEIGHT – UP TO 10 FT (FINISHED FLOOR LEVEL TO FINISHED FLOOR LEVEL)
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowKitchen}  id="Kitchen">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> KITCHEN</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible3 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible3 && (
<div>
    
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            CERAMIC TILES UP TO 3FT HEIGHT ABOVE KITCHEN SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            MAIN SINK FAUCET
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            KITCHEN SINK (STAINLESS STEEL)
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            SLAB – BLACK MARBLE 
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowBathroom}  id="Bathroom">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> BATHROOM</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible4 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible4 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            CERAMIC TILES UP TO 7FT FEET HEIGHT
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            SANITARY WARE &amp; CPVC FITTINGS – CERA 
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            CPVC PIPE – ASHIRWAD
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            BATHROOM DOORS – PVC / ALUMINIUM
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowDoor} id="Door">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> DOOR &amp; WINDOWS</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible5 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible5 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            ROOM DOORS – COMPRESSED WOOD 
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            JAALI DOORS &amp; WINDOWS
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            WINDOWS – SAGWAN
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            WOODEN FRAME – MALAYSIAN
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowPainting}  id="Painting">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> PAINTING</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible6 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible6 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="PaintingData" styleRe="display: none;">
                            BIRLA PUTTY (2 COAT) + EMULSION
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowPop} id="Pop">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> P.O.P</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible7 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible7 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="PopData" styleRe="display: none;">
                            SAKARNI POP ON CEILING.
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowFlooring}  id="Flooring">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> FLOORING</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible8 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible8 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            INTERIOR TILES – PLAIN TILES (2*2)
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            PORTICO TILES – HEAVY DUTY
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            STAIRCASE – BLACK MARBLE
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            BATHROOM – 1*1 FLOOR TILES
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowElectrical}  id="Electrical">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> ELECTRICAL</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible9 ? '-' : '+'}</button></td>
                    </tr>

                    {isVisible9 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="ElectricalData" styleRe="display: none;">
                            WIRES – POLYCAB
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="ElectricalData" styleRe="display: none;">
                            SWITCHES – ANCHOR PENTA
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowMiscellaneous} id="Miscellaneous">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> MISCELLANEOUS</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible10 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible10 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            OVERHEAD TANK – 1000 LITRES.
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            STAIRCASE RAILING – SS304
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            WALLPAPER TEXTURE
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            T.V. UNITS
                        </td>
                    </tr>
                    </div>
                        )}
                </tbody></table>
               {/*} Premium Package Data */}
                <table cols="3" className="bg-white text-black text-left noneToBlock20sTable"  id="PremiumPackageData" styleRe="display: none;">
                    <tbody><tr onClick={basicShowDesign} id="Design">
                        <td className="  workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px]  ">DESIGN &amp; DRAWINGS</td>
                        <td className=" inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px] ">{isVisible1 ? '-' : '+'}</td>
                        </tr> 
                        {isVisible1 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            ARCHITECTURAL LAYOUT – 2D
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            3D VISUALIZATION
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            MEP DRAWINGS
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DesignData" styleRe="display: none;">
                            ELEVATION
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowStructure} id="Structure">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] ">STRUCTURE</td>
                        <td className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible2 ? '-' : '+'}</td>
                    </tr>
                    {isVisible2 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            STEEL – KAMDHENU/ TATA
                                                </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            BRICKS – AVVAL
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            CEMENT – ULTRATECH, ACC GOLD FOR SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            RCC DESIGN MIX – AS PER THE STRUCTURAL DESIGNER RECOMMENDATION
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="StructureData" styleRe="display: none;">
                            CEILING HEIGHT – UP TO 10 FT (FINISHED FLOOR LEVEL TO FINISHED FLOOR LEVEL)
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowKitchen}  id="Kitchen">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> KITCHEN</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible3 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible3 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            CERAMIC TILES UP TO 3FT HEIGHT ABOVE KITCHEN SLAB
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            MAIN SINK FAUCET
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            KITCHEN SINK (STAINLESS STEEL)
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="KitchenData" styleRe="display: none;">
                            SLAB – RED GRANITE 
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowBathroom}  id="Bathroom">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> BATHROOM</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible4 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible4 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            CERAMIC TILES UP TO 7FT FEET HEIGHT
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            SANITARY WARE &amp; CPVC FITTINGS – JAQUAR
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            CPVC PIPE – SUPREME/ASTRAL
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="BathroomData" styleRe="display: none;">
                            BATHROOM DOORS – SAGWAN
                        </td>
                    </tr>
                    </div>
                        )}   
                    <tr onClick={basicShowDoor} id="Door">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> DOOR &amp; WINDOWS</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible5 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible5 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            ROOM DOORS – DESIGNER DOOR  
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            JAALI DOORS &amp; WINDOWS
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            WINDOWS – SHEESHAM
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="DoorData" styleRe="display: none;">
                            WOODEN FRAME – KAPOOR/MARBLE
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowPainting}  id="Painting">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> PAINTING</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible6 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible6 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="PaintingData" styleRe="display: none;">
                            BIRLA PUTTY (2 COAT) + ROYAL SHINE
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowPop} id="Pop">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> P.O.P</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible7 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible7 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="PopData" styleRe="display: none;">
                            SAKARNI POP ON CEILING.
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowFlooring}  id="Flooring">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> FLOORING</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible8 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible8 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            INTERIOR TILES – PLAIN TILES (4*2)
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            PORTICO TILES – HEAVY DUTY
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            STAIRCASE – RED GRANITE
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="FlooringData" styleRe="display: none;">
                            BATHROOM – 2*2 FLOOR TILES
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowElectrical}  id="Electrical">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> ELECTRICAL</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible9 ? '-' : '+'}</button></td>
                    </tr>

                    {isVisible9 && (
<div>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="ElectricalData" styleRe="display: none;">
                            WIRES – HAVELLS
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="ElectricalData" styleRe="display: none;">
                            SWITCHES – ANCHOR ROMA
                        </td>
                    </tr>
                    </div>
                        )}
                    <tr onClick={basicShowMiscellaneous} id="Miscellaneous">
                        <td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] "> MISCELLANEOUS</td>
                        <td><button className="inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible10 ? '-' : '+'}</button></td>
                    </tr>
                    {isVisible10 && (
<div>
    
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            OVERHEAD TANK – 1000 LITRES.
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            STAIRCASE RAILING – SS304
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            WALLPAPER TEXTURE*
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            T.V. UNITS
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            WOODEN FLOORING*
                        </td>
                    </tr>
                    <tr>
                        <td className="workSans text-[10px] md:text-[13px] font-normal pt-[3px] pl-[20px] xsm:pl-[30px] min-[580px]:pl-[50px]" id="MiscellaneousData" styleRe="display: none;">
                            WARDROBE PANELLING*
                        </td>
                    </tr>
                    </div>
                        )}
                </tbody></table>
            </div>
        </div>
        <div className="flex justify-center content-center">        
        <div className="inner-layer  bg-orangebrick w-40 h-10 flex justify-center content-center text-center rounded mt-[30px] " >          
            <a href="#" className="no-underline text-white text-sm tracking-normal font-semibold uppercase inline-block leading-10">Get Free Quote</a>
        </div>
    </div>
</section>
}

export default ExplorepPlans;