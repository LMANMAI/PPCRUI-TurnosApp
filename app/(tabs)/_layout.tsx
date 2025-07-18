import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1A73E8",
        headerShown: false,
        tabBarInactiveTintColor: "#666",
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="inicio/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cartilla/index"
        options={{
          title: "Cartilla",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tramites/index"
        options={{
          title: "Tramites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="file-text" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mas/index"
        options={{
          title: "Más",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="bars" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
