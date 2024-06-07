import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import CheckBox from "../../../../components/Checkbox";
import SubmitButton from "../../../../components/SubmitButton";

export default function PregnancyTypeScreen({ navigation }: any) {
  const [selectedType, setSelectedType] = useState("");

  const handleCheck = (type: string) => {
    setSelectedType(selectedType === type ? "" : type);
  };

  const handleNext = () => {
    navigation.navigate("MedicalRecordScreen");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="Pregnancy Type" />
      <CheckBox
        label="Singlet Pregnancy"
        isChecked={selectedType === "single"}
        onCheck={() => handleCheck("single")}
      />
      <CheckBox
        label="Twins Pregnancy"
        isChecked={selectedType === "twins"}
        onCheck={() => handleCheck("twins")}
      />
      <CheckBox
        label="Triplets Pregnancy"
        isChecked={selectedType === "triplets"}
        onCheck={() => handleCheck("triplets")}
      />
      <CheckBox
        label="Other"
        isChecked={selectedType === "other"}
        onCheck={() => handleCheck("other")}
      />
      <SubmitButton title="Next" onPress={handleNext} />
    </SafeAreaView>
  );
}
