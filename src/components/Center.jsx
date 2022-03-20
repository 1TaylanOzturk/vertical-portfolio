import React from "react";

export default function Center(props) {
  return <div className={`${props.centralizeBy}-center`}>{props.children}</div>;
}
