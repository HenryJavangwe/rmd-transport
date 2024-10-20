import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const BaseIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};


export default BaseIcon;