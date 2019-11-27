import React from "react";
import Avatar from "dry/components/avatar";

export default {
  title: "Library|Avatars/Associated",
};

export const Default = () => (
  <Avatar width="24px" height="24px" src="/images/avatar-small.jpg" />
);

export const withBorder = () => (
  <Avatar width="24px" height="24px" bordered src="/images/avatar-small.jpg" />
);
