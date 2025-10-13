import "@/config/i18n"; // i18n 초기화
import RootNavigator from "@/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { queryClient } from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";

export default function App() {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </JotaiProvider>
  );
}
