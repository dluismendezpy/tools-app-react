import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DetailScreen from "./screens/Details";
import CalculatorScreen from "./screens/Calculator";

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
