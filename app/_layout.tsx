import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from "expo-router";
import { theme } from "../src/themes/theme";

export default function RootLayout() {
  return (
    <ClerkProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.black }}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
