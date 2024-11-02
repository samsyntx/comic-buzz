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
          title: "Info Screen",
        }}
      />

      <Tabs.Screen
        name="rate-book/[bookId]"
        options={{
          title: "Rate A Book",
        }}
      />
    </Tabs>
  );
}
