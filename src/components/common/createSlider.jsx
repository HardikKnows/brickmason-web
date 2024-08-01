  import React from "react";
import Slider from "./Slider";
function CreateSlider(sliderinfo) {
        return (
            <div>

            <Slider
                key={sliderinfo.id}
                serialNo = {sliderinfo.sliderSerialNo}
                classOD = {sliderinfo.classOuterDiv}
                classCC = {sliderinfo.classCaption}
                classID = {sliderinfo.classInnerDiv}
                ClassCommonHead = {sliderinfo.classRes}
                ClassHeading1 = {sliderinfo.classH3Pt1}
                heading1 = {sliderinfo.headingNo1}
                classHeading2 = {sliderinfo.classH3Pt2}
                heading2 = {sliderinfo.headingNo2}
                classSH = {sliderinfo.classP}
                subHead1 = {sliderinfo.subHeading1}
                subHead2 = {sliderinfo.subHeading2}
                ClassButton = {sliderinfo.classOfButton}
            ></Slider></div>
                );
    }
    export default CreateSlider;