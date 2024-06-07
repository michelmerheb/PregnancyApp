import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import CheckBox from "../../../../components/Checkbox";
import SubmitButton from "../../../../components/SubmitButton";

export default function SportPracticing({ navigation }: any) {
  const [sportsContact, setSportsContact] = useState(false);
  const [sportsJumping, setSportsJumping] = useState(false);
  const [sportsRisk, setSportsRisk] = useState(false);
  const [none, setNone] = useState(false);

  const handleNext = () => {
    if (!sportsContact && !sportsJumping && !sportsRisk && !none) {
      Alert.alert("You must check at least one box!");
    } else {
      navigation.navigate("DailyHabits");
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="Sport Practicing" />

      <Text style={styles.informationText}>Check the sports you practice:</Text>

      <CheckBox
        label="Sports that involve contact or collision"
        isChecked={sportsContact}
        onCheck={() => {
          setSportsContact(!sportsContact);
          setNone(false);
        }}
      />

      <CheckBox
        label="Sports that involve jumping, running, or sudden changes in direction"
        isChecked={sportsJumping}
        onCheck={() => {
          setSportsJumping(!sportsJumping);
          setNone(false);
        }}
      />

      <CheckBox
        label="Sports that involve High risk and body temperature changing"
        isChecked={sportsRisk}
        onCheck={() => {
          setSportsRisk(!sportsRisk);
          setNone(false);
        }}
      />

      <CheckBox
        label="I don't practice sports"
        isChecked={none}
        onCheck={() => {
          setNone(!none);
          setSportsContact(false);
          setSportsJumping(false);
          setSportsRisk(false);
        }}
      />

      <SubmitButton title="Next" onPress={handleNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  informationText: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: 2,
    color: "white",
  },
});
