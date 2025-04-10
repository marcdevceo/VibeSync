import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../src/themes/theme";
import AuthLayout from "@/src/components/AuthLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {
  return (
      <ClerkAndConvexProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.black }}>
            <AuthLayout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkAndConvexProvider>
  );
}
