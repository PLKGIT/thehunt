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

/*  Export TextArea  */
// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

/*  Export FormBtn  */
export function FormBtn(props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
}
