import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import globalStyles from "../../../styles/globalStyles";
import Header from "../../../components/Header";
import NameInputBox from "../../../components/NameInputBox";
import SubmitButton from "../../../components/SubmitButton";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function LogInScreen({ navigation }: any) {
  const handleLogIn = (
    values: { email: string; password: string },
    { setErrors }: any
  ) => {
    LoginSchema.validate(values, { abortEarly: false })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((validationErrors) => {
        const errors: { [key: string]: string } = {};
        validationErrors.inner.forEach((error: any) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
        setErrors(errors);
      });
  };

  const handleSignup = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView behavior="height">
        <ScrollView>
          <Header title="Welcome" />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={handleLogIn}
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

                <SubmitButton title="Log In" onPress={handleSubmit} />
              </>
            )}
          </Formik>

          <TouchableOpacity style={styles.forgotView}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Doesn't have account?
            <TouchableOpacity onPress={handleSignup}>
              <Text style={[{ color: "purple", fontWeight: "bold" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginLeft: 10,
    marginBottom: 10,
  },
  forgotView: {
    padding: 10,
  },
  forgotText: {
    fontSize: 10,
    textAlign: "center",
  },
  signupText: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
  },
});
