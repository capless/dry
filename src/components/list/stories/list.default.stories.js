import React, { useState } from "react";
import List from "components/list";
import ListItem from "components/list-item";
import ListItemText from "components/list-item-text";
import Divider from "components/divider";

export default {
  title: "Library|Lists/Default",
};

export const withDefault = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <List>
      <ListItem
        selected={selected === "Dashboard"}
        onClick={() => handleClick("Dashboard")}
      >
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        selected={selected === "Performance"}
        onClick={() => handleClick("Performance")}
      >
        <ListItemText primary="Performance" />
      </ListItem>
      <ListItem
        selected={selected === "Email"}
        onClick={() => handleClick("Email")}
      >
        <ListItemText primary="Email" />
      </ListItem>
      <ListItem
        selected={selected === "Contacts"}
        onClick={() => handleClick("Contacts")}
      >
        <ListItemText primary="Contacts" />
      </ListItem>
      <ListItem
        selected={selected === "Chat"}
        onClick={() => handleClick("Chat")}
      >
        <ListItemText primary="Chat" />
      </ListItem>
      <ListItem
        selected={selected === "Sales"}
        onClick={() => handleClick("Sales")}
      >
        <ListItemText primary="Sales" />
      </ListItem>
      <Divider />
      <ListItem
        selected={selected === "Settings"}
        onClick={() => handleClick("Settings")}
      >
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );

  function handleClick(selectedItem) {
    setSelected(selectedItem);
  }
};
