
import { useState } from "react";
import "./CompleRegistrate.css"


const FormInput = (props) => {
    const[focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div id={id} className="formInput">
            <label className="labelR">{label}</label>
            <input className="inputregis" {...inputProps} onChange={onChange} onBlur={handleFocus} 
            onFocus={()=>
            inputProps.name==="confirmPassword" && setFocused(true)} 
            focused={focused.toString()}
            />
            <span className="Span">{errorMessage}</span>
        </div>
    );
};

export default FormInput