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
import CustomStatusBar from "@/components/CustomStatusBar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const EmailLogin = function () {
  const windowWidth = Dimensions.get("window").width;
  const router = useRouter();

  const handlePressGoBack = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <CustomStatusBar />
      <View
        style={[
          common.container,
          {
            paddingHorizontal: 20,
            paddingVertical: 40,
          },
        ]}
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

        <Text style={styles.forgetPasswordText}>Forget Password ?</Text>

        <TouchableOpacity style={button.primaryButton}>
          <Text style={button.primaryButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  },
  forgetPasswordText: {
    color: Colors.custom.white,
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 10,
  },
});
