import React from "react";
import Avatar from "components/avatar";

export default {
  title: "Library|Avatars/Associated",
};

export const Default = () => (
  <Avatar width="24px" height="24px" src="https://picsum.photos/24/24" />
);

export const withBorder = () => (
  <Avatar width="24px" height="24px" bordered src="https://picsum.photos/24/24" />
);
