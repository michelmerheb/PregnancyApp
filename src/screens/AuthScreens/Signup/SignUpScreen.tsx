import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import globalStyles from "../../../styles/globalStyles";
import Header from "../../../components/Header";
import NameInputBox from "../../../components/NameInputBox";
import SubmitButton from "../../../components/SubmitButton";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null as any], "Passwords must match")
    .required("Required"),
});

export default function SignUpScreen({ navigation }: any) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title="Welcome to Mommy Meter" />
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            navigation.navigate("GetToKnowYouScreen");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <NameInputBox
                title="Email"
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && touched.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}

              <NameInputBox
                title="Password"
                placeholder="Password"
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => handleBlur("password")}
              />
              {errors.password && touched.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}

              <NameInputBox
                title="Confirm Password"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={() => handleBlur("confirmPassword")}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              ) : null}

              <SubmitButton title="Sign Up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginLeft: 10,
    marginBottom: 10,
  },
});
