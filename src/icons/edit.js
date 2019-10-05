import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function EditIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z" fill="#334D6E" />
    </SvgIcon>
  );
}

EditIcon.defaultProps = {
  width: "12",
  height: "12",
  viewBox: "-6 -5 24 24",
  fill: "none",
};

export default EditIcon;
