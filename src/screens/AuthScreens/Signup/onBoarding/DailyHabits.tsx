import { SafeAreaView, View, Text } from "react-native";
import React, { useState } from "react";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import CheckBox from "../../../../components/Checkbox";
import SubmitButton from "../../../../components/SubmitButton";

export default function DailyHabits({ navigation }: any) {
  const [smokerChecked, setSmokerChecked] = useState(false);
  const [cafeineChecked, setCafeineChecked] = useState(false);
  const [alcoholChecked, setAlcoholChecked] = useState(false);
  const [healthy, setHealthy] = useState(false);

  const handleDone = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="Daily Habits" />

      <CheckBox
        label="Smoking"
        isChecked={smokerChecked}
        onCheck={() => {
          setSmokerChecked(!smokerChecked);
          setHealthy(false);
        }}
      />

      <CheckBox
        label="Cafeine"
        isChecked={cafeineChecked}
        onCheck={() => {
          setCafeineChecked(!cafeineChecked);
          setHealthy(false);
        }}
      />

      <CheckBox
        label="Alcohol"
        isChecked={alcoholChecked}
        onCheck={() => {
          setAlcoholChecked(!alcoholChecked);
          setHealthy(false);
        }}
      />

      <CheckBox
        label="I'm healthy"
        isChecked={healthy}
        onCheck={() => {
          setHealthy(!healthy);
          setSmokerChecked(false);
          setAlcoholChecked(false);
          setCafeineChecked(false);
        }}
      />

      <SubmitButton title="Done" onPress={handleDone} />
    </SafeAreaView>
  );
}
