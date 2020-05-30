/*  React  */
import React from "react";

/*  Export Input  */
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

/*  Export FormBtn  */
export function FormBtn(props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
}
