import TabNavigator from "@/navigation/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      {/* 여기에 로그인, 설정 등의 추가 화면도 나중에 넣을 수 있습니다. */}
    </Stack.Navigator>
  );
}
