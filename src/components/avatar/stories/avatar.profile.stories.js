import React from "react";
import Avatar from "dry/components/avatar";

export default {
  title: "Library|Avatars/Profile",
};

export const Default = () => (
  <Avatar width="46px" height="46px" src="/images/avatar.jpg" />
);

export const withBorder = () => (
  <Avatar width="46px" height="46px" bordered src="/images/avatar.jpg" />
);
