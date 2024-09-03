import React from "react";
import {
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

const SignupEmail = function () {
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
  };

  const handleCreatePassword = () => {
    router.push('pages/signup/create-password');
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

        <Text style={styles.welcomeBackText}>What’s your Email?</Text>

        <TextInput
          style={styles.loginTextInput}
          placeholder="Email"
          placeholderTextColor={"#fff"}
        />

        <TouchableOpacity onPress={handleCreatePassword} style={button.primaryButton}>
          <Text style={button.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppStructure>
  );
};

export default SignupEmail;

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
