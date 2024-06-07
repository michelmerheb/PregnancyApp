import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function InputBox({ placeholder }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    padding: 15,
    margin: 15,
  },
  inputBox: {
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
  },
});
