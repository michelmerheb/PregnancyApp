import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackScreens from "./StackScreens";

export default function Navigationcontainer() {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
}
