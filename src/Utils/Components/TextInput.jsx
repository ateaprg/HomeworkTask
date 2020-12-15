import React from "react";

const TextInput = props => {
  return (
    <div>
        <p style={{marginBlockEnd:0}}>{props.label}</p>
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    </div>
  );
};

export default TextInput;