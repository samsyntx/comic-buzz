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
import { scaleSize } from "@/app/utils/scale-size";

const SignupEmail = function () {
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
  };

  const handleCreatePassword = () => {
    router.push("/pages/signup/create-password");
  };

  return (
    <AppStructure>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: scaleSize(15),
          marginTop: scaleSize(35),
        }}
      >
        <TouchableOpacity onPress={handlePressGoBack}>
          <Ionicons
            name="arrow-back-outline"
            size={scaleSize(30)}
            style={registerStyles.backIcon}
          />
        </TouchableOpacity>

        <Text style={registerStyles.welcomeBackText}>What’s your Email?</Text>

        <TextInput
          style={registerStyles.loginTextInput}
          placeholder="Email"
          placeholderTextColor={"#fff"}
        />

        <TouchableOpacity
          onPress={handleCreatePassword}
          style={button.primaryButton}
        >
          <Text style={button.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppStructure>
  );
};

export default SignupEmail;

export const registerStyles = StyleSheet.create({
  backIcon: { color: "#fff", marginBottom: scaleSize(20) },
  welcomeBackText: {
    color: Colors.custom.white,
    fontSize: scaleSize(24),
    fontFamily: "PlusJakartaSans",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: scaleSize(24),
  },
  loginTextInput: {
    backgroundColor: "#4F4F4F",
    color: Colors.custom.white,
    padding: scaleSize(10),
    borderRadius: scaleSize(4),
    height: scaleSize(40),
    marginBottom: scaleSize(44),
    fontSize: scaleSize(14),
  },
});
