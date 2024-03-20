import React from "react";
import '../styles/BtnClear.css';

const BtnClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BtnClear;