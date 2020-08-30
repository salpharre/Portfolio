import React from "react";
import "./style.css";
//container
function Container(props) {
return <div className="container">{props.children}</div>
};

export default Container;