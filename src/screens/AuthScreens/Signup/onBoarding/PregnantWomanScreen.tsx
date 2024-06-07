import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import globalStyles from "../../../../styles/globalStyles";
import Header from "../../../../components/Header";
import NameInputBox from "../../../../components/NameInputBox";
import SubmitButton from "../../../../components/SubmitButton";

export default function PregnantWomanScreen({ navigation }: any) {
  const [initialWeight, setInititalWeight] = useState("");
  const [menstrualCycle, setMenstrualCycle] = useState<Date | null>(null);
  const [pregnancyProgress, setPregnancyProgress] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleNext = () => {
    if (!initialWeight || !menstrualCycle || !pregnancyProgress) {
      Alert.alert("Please fill these boxes!");
    } else {
      navigation.navigate("PregnancyTypeScreen");
    }
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || menstrualCycle;
    setShowDatePicker(Platform.OS === "ios");
    setMenstrualCycle(currentDate);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Header title="Pregnancy Details" />
          <NameInputBox
            title="Initial Pregnancy Weight"
            placeholder="Initital Pregnancy Weight"
            value={initialWeight}
            onChangeText={(text) => setInititalWeight(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <View pointerEvents="none">
              <NameInputBox
                title="Last Menstrual Cycle"
                placeholder="Select Date"
                value={menstrualCycle ? menstrualCycle.toDateString() : ""}
                onChangeText={() => {}}
              />
            </View>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={menstrualCycle || new Date()}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
          <NameInputBox
            title="Pregnancy Progress"
            placeholder="Pregnancy progress"
            value={pregnancyProgress}
            onChangeText={(text) => setPregnancyProgress(text)}
            keyboardType="numeric"
          />
          <SubmitButton title="Next" onPress={handleNext} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleBoxText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
