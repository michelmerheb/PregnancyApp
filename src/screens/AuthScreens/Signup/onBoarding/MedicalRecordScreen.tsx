import React, { useState } from "react";
import { SafeAreaView, Alert } from "react-native";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import SubmitButton from "../../../../components/SubmitButton";
import CheckBox from "../../../../components/Checkbox";

export default function MedicalRecordScreen({ navigation }: any) {
  const [thyroidChecked, setThyroidChecked] = useState(false);
  const [autoimmuneChecked, setAutoimmuneChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const handleAllChecked = (isChecked: boolean) => {
    setAllChecked(isChecked);
    setThyroidChecked(isChecked);
    setAutoimmuneChecked(isChecked);
  };

  const handleNext = () => {
    if (!thyroidChecked && !autoimmuneChecked) {
      Alert.alert("You must check at least one of the boxes!");
    } else {
      navigation.navigate("SportPracticing");
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="Medical Record" />
      <CheckBox
        isChecked={thyroidChecked}
        onCheck={setThyroidChecked}
        label="Thyroid Disorders"
      />
      <CheckBox
        isChecked={autoimmuneChecked}
        onCheck={setAutoimmuneChecked}
        label="Autoimmune Disorders"
      />
      <CheckBox
        isChecked={allChecked}
        onCheck={handleAllChecked}
        label="All of the above"
      />
      <SubmitButton title="Next" onPress={handleNext} />
    </SafeAreaView>
  );
}
