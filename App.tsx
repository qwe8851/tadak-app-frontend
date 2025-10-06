import RootNavigator from "@/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
