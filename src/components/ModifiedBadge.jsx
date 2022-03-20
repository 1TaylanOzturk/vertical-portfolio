import React from "react";
import { Badge } from "react-bootstrap";

export default function ModifiedBadge(props) {
  return (
    <Badge style={{ marginRight: 5 }} bg={props.bg}>
      {props.tags}
    </Badge>
  );
}
