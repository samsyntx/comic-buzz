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
import { scaleSize } from "@/app/utils/scale-size";
import { registerStyles } from "../signup/signup-email";

const EmailLogin = function () {
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
  };

  const handleForgetPassword = () => {
    router.push("/pages/login/forget-password");
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

        <Text style={registerStyles.welcomeBackText}>Welcome Back</Text>

        <TextInput
          style={[
            registerStyles.loginTextInput,
            { marginBottom: scaleSize(12) },
          ]}
          placeholder="Email"
          placeholderTextColor={"#fff"}
        />

        <TextInput
          style={[registerStyles.loginTextInput, {marginBottom: scaleSize(0)}]}
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
  forgetPasswordText: {
    color: Colors.custom.white,
    textAlign: "center",
    fontSize: scaleSize(14),
    marginVertical: scaleSize(16),
  },
});
