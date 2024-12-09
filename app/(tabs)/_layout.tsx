import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  HomeSvgIcon,
  OriginalSvgIcon,
  ProfileSvgIcon,
  SearchSvgIcon,
} from "@/assets/icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeSvgIcon color={Colors.custom.primary} />
            ) : (
              <HomeSvgIcon />
            ),
        }}
      />
      <Tabs.Screen
        name="originals"
        options={{
          title: "Originals",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <OriginalSvgIcon color={Colors.custom.primary} />
            ) : (
              <OriginalSvgIcon />
            ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <SearchSvgIcon color={Colors.custom.primary} />
            ) : (
              <SearchSvgIcon />
            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <ProfileSvgIcon color={Colors.custom.primary} />
            ) : (
              <ProfileSvgIcon />
            ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          href: null,
        }}
      />
    </Tabs>
  );
}
