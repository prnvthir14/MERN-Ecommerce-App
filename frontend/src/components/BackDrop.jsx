import React from "react";
import './BackDrop.css'


const BackDrop = ({show, click}) => {
  //if show is true, show backdrop
  return show && <div className="backdrop" onClick={click}></div>;
};

export default BackDrop;
