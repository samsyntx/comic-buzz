import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "./context/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "PlusJakartaSans-400": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-500": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-700": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-600": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    //DM Sans Family
    "DMSans-400": require("../assets/fonts/DMSans-Regular.ttf"),
    "DMSans-500": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMSans-600": require("../assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-700": require("../assets/fonts/DMSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={true ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="pages/get-started"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="pages/login/email-login"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="pages/login/forget-password"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="pages/signup/signup-email"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="pages/signup/create-password"
            options={{ headerShown: false }}
          />

          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}
