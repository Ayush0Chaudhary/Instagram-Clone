import React from "react";
import InputFieldProps from "../../types/inputFieldPropType";
import "../App.css";

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
    const {type, id, label} = props;
    return (
        <div>
            <label>{label}</label>
            <input type={type} id={id} onChange={()=>{}}></input>
        </div>
    );
}

export default InputField;