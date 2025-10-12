import ErrorScreen from "@/screens/errors/ErrorScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainStack} />
      <Stack.Screen name="Error" component={ErrorScreen} />
    </Stack.Navigator>
  );
}
