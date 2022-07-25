import React, {useState} from "react";
import Step from "./Step";

export default function StepNavigation(props){
    return(
              <div className="stemWrapper">
                  {props.labelArray.map((item, index) => <Step key={index} index={index} label={item} selected={props.currentSetp === index+1} updateStep={props.updateStep}></Step> )} 
              </div>

    )
}