import React from "react";
import InterestProps from "../../types/InterestPropType";
import {changeInterests} from "../../utils/Interest";
import "./interests.css"

const Interest: React.FC<InterestProps> = (props: InterestProps) => {
    const {interest} = props;
    return(
        <button onClick={()=>{console.log(interest);changeInterests(interest)}} key={interest} id={interest} className="unselected">{interest}</button>
    );
}

export default Interest;