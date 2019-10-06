import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function CalendarIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13.8333 2.50004H13V0.833374H11.3333V2.50004H4.66667V0.833374H3V2.50004H2.16667C1.24167 2.50004 0.508333 3.25004 0.508333 4.16671L0.5 15.8334C0.5 16.75 1.24167 17.5 2.16667 17.5H13.8333C14.75 17.5 15.5 16.75 15.5 15.8334V4.16671C15.5 3.25004 14.75 2.50004 13.8333 2.50004ZM13.8333 15.8334H2.16667V6.66671H13.8333V15.8334Z" fill="#C2CFE0" />
    </SvgIcon>
  );
}

CalendarIcon.defaultProps = {
  width: "12",
  height: "12",
  viewBox: "-8 -2 24 24",
  fill: "none",
};

export default CalendarIcon;
