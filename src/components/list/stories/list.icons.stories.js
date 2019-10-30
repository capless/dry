import React, { useState } from "react";
import {
  MoreHoriz,
  MailOutline,
  ViewWeekOutlined,
  DashboardOutlined,
  ViewAgendaOutlined,
  PersonOutlineOutlined,
  ChatBubbleOutlineOutlined,
} from "icons";
import List from "components/list";
import ListItem from "components/list-item";
import ListItemIcon from "components/list-item-icon";
import ListItemText from "components/list-item-text";
import Divider from "components/divider";

export default {
  title: "Library|Lists/Icons",
};

export const withIcons = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <List>
      <ListItem
        selected={selected === "Dashboard"}
        onClick={() => handleClick("Dashboard")}
      >
        <ListItemIcon>
          <DashboardOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        selected={selected === "Performance"}
        onClick={() => handleClick("Performance")}
      >
        <ListItemIcon>
          <ViewAgendaOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Performance" />
      </ListItem>
      <ListItem
        selected={selected === "Email"}
        onClick={() => handleClick("Email")}
      >
        <ListItemIcon>
          <MailOutline fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>
      <ListItem
        selected={selected === "Contacts"}
        onClick={() => handleClick("Contacts")}
      >
        <ListItemIcon>
          <PersonOutlineOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
      <ListItem
        selected={selected === "Chat"}
        onClick={() => handleClick("Chat")}
      >
        <ListItemIcon>
          <ChatBubbleOutlineOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
      <ListItem
        selected={selected === "Sales"}
        onClick={() => handleClick("Sales")}
      >
        <ListItemIcon>
          <ViewWeekOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItem>
      <Divider />
      <ListItem
        selected={selected === "Settings"}
        onClick={() => handleClick("Settings")}
      >
        <ListItemIcon>
          <MoreHoriz fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );

  function handleClick(selectedItem) {
    setSelected(selectedItem);
  }
};
