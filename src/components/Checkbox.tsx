import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  isChecked: boolean;
  onCheck?: (value: boolean) => void;
  label: string;
}
export default function CheckBox({ isChecked, onCheck, label }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={onCheck}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.paragraph}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 10,
  },
  checkbox: {
    margin: 8,
    padding: 10,
  },
});
