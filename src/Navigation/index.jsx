import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ForgotPassword from "../screens/AuthScreens/ForgotPassword";
import LandingScreen from "../screens/AuthScreens/LandingScreen";
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"LandingScreen"}>
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
