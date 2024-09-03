import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { common, button } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import AppStructure from "@/app/middleware/Structure";

const EmailLogin = function () {
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
  };

  const handleForgetPassword = () => {
    router.push('pages/login/forget-password');
  }

  return (
    <AppStructure>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity onPress={handlePressGoBack}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            style={{ color: "#fff" }}
          />
        </TouchableOpacity>

        <Text style={styles.welcomeBackText}>Welcome Back</Text>

        <TextInput
          style={styles.loginTextInput}
          placeholder="Email"
          placeholderTextColor={"#fff"}
        />

        <TextInput
          style={styles.loginTextInput}
          placeholder="Password"
          placeholderTextColor={"#fff"}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.forgetPasswordText}>Forget Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button.primaryButton}>
          <Text style={button.primaryButtonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppStructure>
  );
};

export default EmailLogin;

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  welcomeBackText: {
    color: Colors.custom.white,
    fontSize: 24,
    fontFamily: "PlusJakartaSans-Bold",
    textAlign: "center",
    marginBottom: 10,
  },
  loginTextInput: {
    backgroundColor: "#4F4F4F",
    color: Colors.custom.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
    height: 50,
  },
  forgetPasswordText: {
    color: Colors.custom.white,
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 10,
    marginTop:10,
    marginBottom:5
  },
});
