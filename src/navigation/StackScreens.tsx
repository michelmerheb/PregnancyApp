import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/AuthScreens/Login/LogInScreen";
import SignUpScreen from "../screens/AuthScreens/Signup/SignUpScreen";
import HomeScreen from "../screens/AppScreens/HomeScreen";
import GetToKnowYouScreen from "../screens/AuthScreens/Signup/onBoarding/GetToKnowYouScreen";
import FillInformationScreen from "../screens/AuthScreens/Signup/onBoarding/FillInformationScreen";
import MedicalRecordScreen from "../screens/AuthScreens/Signup/onBoarding/MedicalRecordScreen";
import PregnantWomanScreen from "../screens/AuthScreens/Signup/onBoarding/PregnantWomanScreen";
import PregnancyTypeScreen from "../screens/AuthScreens/Signup/onBoarding/PregnancyTypeScreen";
import SportPracticing from "../screens/AuthScreens/Signup/onBoarding/SportPracticing";
import DailyHabits from "../screens/AuthScreens/Signup/onBoarding/DailyHabits";

const Stack = createStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GetToKnowYouScreen" component={GetToKnowYouScreen} />
      <Stack.Screen
        name="FillInformationScreen"
        component={FillInformationScreen}
      />
      <Stack.Screen
        name="MedicalRecordScreen"
        component={MedicalRecordScreen}
      />
      <Stack.Screen
        name="PregnantWomanScreen"
        component={PregnantWomanScreen}
      />
      <Stack.Screen
        name="PregnancyTypeScreen"
        component={PregnancyTypeScreen}
      />
      <Stack.Screen name="SportPracticing" component={SportPracticing} />
      <Stack.Screen name="DailyHabits" component={DailyHabits} />
    </Stack.Navigator>
  );
}
