import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import NameInputBox from "../../../../components/NameInputBox";
import SubmitButton from "../../../../components/SubmitButton";

export default function GetToKnowYouScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNextPress = () => {
    if (!name || !age) {
      Alert.alert("Please enter both weight and height");

      return;
    } else {
      navigation.navigate("FillInformationScreen", { name });
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView behavior="height">
        <ScrollView>
          <Header title="Getting To Know You" />

          <NameInputBox
            title="Name"
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <NameInputBox
            title="Age"
            placeholder="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
          />

          <SubmitButton title="Next" onPress={handleNextPress} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  skipButton: {
    marginTop: 10,
  },
  skipButtonText: {
    color: "red",
  },
});
