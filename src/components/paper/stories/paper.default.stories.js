import React from "react";
import Paper from "components/paper";
import Text from "components/text";

export default {
  title: "Library|Papers/Default",
};

export const withDefault = () => (
  <Paper>
    <Text component="h1">
      This is a Paper.
    </Text>
    <Text component="p">
      Paper can be used to build surface or other elements for your application.
    </Text>
  </Paper>
);
