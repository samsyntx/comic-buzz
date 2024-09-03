import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { button } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import AppStructure from "@/app/middleware/Structure";

const ForgetEmailPassword = function () {
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
  };

  return (
    <AppStructure>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={handlePressGoBack}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            style={{ color: "#fff" }}
          />
        </TouchableOpacity>

        <Text style={styles.welcomeBackText}>Forget Password</Text>

        <TextInput
          style={styles.loginTextInput}
          placeholder="Enter your email"
          placeholderTextColor={"#fff"}
        />

        <TouchableOpacity style={button.primaryButton}>
          <Text style={button.primaryButtonText}>Send Login Link</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppStructure>
  );
};

export default ForgetEmailPassword;


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
  },
});
