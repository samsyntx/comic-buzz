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
import { registerStyles } from "../signup/signup-email";
import { scaleSize } from "@/app/utils/scale-size";

const ForgetEmailPassword = function () {
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
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

        <Text style={registerStyles.welcomeBackText}>Forget Password</Text>

        <TextInput
          style={registerStyles.loginTextInput}
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

