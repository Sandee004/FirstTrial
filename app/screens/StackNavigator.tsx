import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./mainScreen";
import MovieDetailScreen from "./MovieDetailScreen";

export type RootStackParamList = {
  MainScreen: undefined;
  MovieDetailScreen: { movie: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
        options={{ title: "Movie Details" }}
      />
    </Stack.Navigator>
  );
}
