const [isVisible, setIsVisible] = useState(false);

<tbody>
<button onClick={() => setIsVisible(!isVisible)}><tr onclick="BasicShow('Design')" id="Design">
<td className="  workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px]  ">DESIGN &amp; DRAWINGS</td>
<td className=" inline-block workSans text-center  pb-[5px] pr-[30px] md:pr-[50px] ">{isVisible ? '-' : '+'}</td>
</tr></button>
{isVisible && (
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


<button onClick={() => setIsVisible(!isVisible)}><tr onclick="BasicShow('Structure')" id="Structure">
<td className="workSans uppercase  font-bold text-[12px]/[22px] md:text-[16px]/[26px]  py-[5px] pl-[10px] min-[580px]:pl-[34px] pr-[100px] xxsm:pr-[180px] xsm:pr-[250px] md:pr-[400px] lg:pr-[450px] ">STRUCTURE</td>
<td className=" workSans text-center  pb-[5px] pr-[30px] md:pr-[50px]">{isVisible ? '-' : '+'}</td>
</tr></button>
{isVisible && (
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