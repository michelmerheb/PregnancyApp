import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import SubmitButton from "../../../../components/SubmitButton";
import NameInputBox from "../../../../components/NameInputBox";
import CheckBox from "../../../../components/Checkbox";

export default function FillInformationScreen({ route, navigation }: any) {
  const { name } = route.params;
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isPregnant, setIsPregnant] = useState(false);
  const [isTrying, setIsTrying] = useState(false);

  const handleNextPress = () => {
    if (!weight || !height) {
      Alert.alert("Please enter both weight and height");
      return;
    }

    if (isPregnant) {
      navigation.navigate("PregnantWomanScreen");
    } else if (isTrying) {
      navigation.navigate("MedicalRecordScreen");
    } else {
      Alert.alert("Please check one of the boxes");
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView behavior="height">
        <ScrollView>
          <Header title={`Hello ${name}`} />
          <Text style={styles.informationText}>
            For a better cooperation, please fill these information
          </Text>

          <NameInputBox
            title="Weight"
            placeholder="e.g. 53 kg"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
          <NameInputBox
            title="Height"
            placeholder="e.g. 166 cm"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />

          <CheckBox
            label="I'm a pregnant woman"
            isChecked={isPregnant}
            onCheck={() => {
              setIsPregnant(!isPregnant);
              setIsTrying(false);
            }}
          />

          <CheckBox
            label="I'm aiming to be pregnant"
            isChecked={isTrying}
            onCheck={() => {
              setIsTrying(!isTrying);
              setIsPregnant(false);
            }}
          />

          <SubmitButton title="Next" onPress={handleNextPress} />
        </ScrollView>
      </KeyboardAvoidingView>
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

  checkboxText: {
    fontSize: 15,
  },
});
