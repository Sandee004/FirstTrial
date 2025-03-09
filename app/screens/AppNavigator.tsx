import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
import StackNavigator from "./StackNavigator";
import FavoriteScreen from "./FavoriteScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Favorites") {
              iconName = "favorite";
            } else if (route.name === "Profile") {
              iconName = "person";
            }

            return (
              <Icon
                name={iconName as string}
                size={size}
                color={focused ? "#cccccc" : "purple"}
              />
            );
          },
          tabBarActiveTintColor: "#cccccc",
          tabBarInactiveTintColor: "purple",
          tabBarStyle: tw`bg-[#373b69] pb-4 h-14`,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
