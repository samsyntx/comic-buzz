import { Tabs } from "expo-router";

export default function ChatTabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: { display: "none" },
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="settings/edit-profile"
        options={{
          title: "Edit Profile",
        }}
      />
      <Tabs.Screen
        name="settings/app-setting"
        options={{
          title: "App Setting",
        }}
      />
    </Tabs>
  );
}
