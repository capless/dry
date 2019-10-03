import React from "react";
import Avatar from "components/avatar";

export default {
  title: "Library|Avatars/Profile",
};

export const Default = () => (
  <Avatar width="46px" height="46px" src="https://picsum.photos/46/46" />
);

export const withBorder = () => (
  <Avatar width="46px" height="46px" bordered src="https://picsum.photos/46/46" />
);
