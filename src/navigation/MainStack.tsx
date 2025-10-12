import MainMenuScreen from "@/screens/MainMenuScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: "메인 메뉴" }} />
    </Stack.Navigator>
  );
}
