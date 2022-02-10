import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DetailScreen from "./screens/Details";
import CalculatorScreen from "./screens/Calculator";
import ToLetterScreen from "./screens/ToLetter";

window.convertir = require("numero-a-letras");

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
        <Stack.Screen
          name="Detail"
          options={{ title: "Sobre mi" }}
          component={DetailScreen}
        />
        <Stack.Screen
          name="Calculator"
          options={{ title: "Sumadora" }}
          component={CalculatorScreen}
        />
        <Stack.Screen
          name="ToLetter"
          options={{ title: "Numero a letra" }}
          component={ToLetterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
