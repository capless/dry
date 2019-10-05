import React from "react";
import { action } from "@storybook/addon-actions";
import Avatar from "components/avatar";
import Badge from "components/badge";
import Icon from "components/icon";
import { Edit, Check } from "icons";

export default {
  title: "Library|Avatars/Contact",
};

export const withEditBadge = () => (
  <Badge
    overlap="circle"
    width="24px"
    height="24px"
    background="white"
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    badgeContent={(
      <Icon
        component={Edit}
        onClick={action("click [Icon]")}
      />
    )}
  >
    <Avatar
      width="104px"
      height="104px"
      src="/images/avatar.jpg"
      onClick={action("click [Avatar]")}
    />
  </Badge>
);

export const withCheckBadge = () => (
  <Badge
    overlap="circle"
    width="24px"
    height="24px"
    background="white"
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    badgeContent={(
      <Icon
        component={Check}
        onClick={action("click [Icon]")}
      />
    )}
  >
    <Avatar
      width="104px"
      height="104px"
      src="/images/avatar.jpg"
      onClick={action("click [Avatar]")}
    />
  </Badge>
);

export const withAvatarShowBackdrop = () => (
  <Badge
    overlap="circle"
    width="24px"
    height="24px"
    background="white"
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    badgeContent={(
      <Icon
        component={Check}
        onClick={action("click [Icon]")}
      />
    )}
  >
    <Avatar
      showBackdrop
      width="104px"
      height="104px"
      src="/images/avatar.jpg"
      onClick={action("click [Avatar]")}
    />
  </Badge>
);
