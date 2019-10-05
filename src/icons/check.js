import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function CheckIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4.99994 7.58793L2.306 4.894L2.19994 4.78793L2.09387 4.894L1.16054 5.82733L1.05447 5.9334L1.16054 6.03946L4.89387 9.7728L4.99994 9.87886L5.106 9.7728L13.106 1.7728L13.2121 1.66673L13.106 1.56067L12.1727 0.627332L12.0666 0.521266L11.9605 0.627332L4.99994 7.58793Z" fill="#109CF1" stroke="#5CC64C" strokeWidth="0.3" />
    </SvgIcon>
  );
}

CheckIcon.defaultProps = {
  width: "12",
  height: "12",
  viewBox: "-5 -7 24 24",
  fill: "none",
};

export default CheckIcon;
