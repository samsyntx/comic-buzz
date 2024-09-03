import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { button } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import AppStructure from "@/app/middleware/Structure";

const passwordValidationList = [
  { title: "At Least 8 characters", isTrue: false },
  { title: "At Least 1 number", isTrue: true },
  { title: "Both upper and lower case charcters", isTrue: false },
];

const CreateEmailPassword = function () {
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

        <Text style={styles.welcomeBackText}>Create your password</Text>

        <TextInput
          style={styles.loginTextInput}
          placeholder="Password"
          placeholderTextColor={"#fff"}
          secureTextEntry={true}
        />

        {passwordValidationList.map((each, index) => (
          <View key={index} style={styles.passwordValidationContainer}>
            <View style={[styles.validateCircle, each.isTrue && styles.validateIsTrueStyle]}>
              {each.isTrue && (
                <Ionicons
                  name="checkmark-outline"
                  size={15}
                  style={{ color: Colors.custom.white }}
                />
              )}
            </View>
            <Text style={styles.validateText}>{each.title}</Text>
          </View>
        ))}

        <TouchableOpacity style={[button.primaryButton, {marginTop:15}]}>
          <Text style={button.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppStructure>
  );
};

export default CreateEmailPassword;

export const styles = StyleSheet.create({
  passwordValidationContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  validateCircle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  validateText: {
    fontSize: 14,
    color: Colors.custom.white,
  },
  validateIsTrueStyle: {
    backgroundColor: '#00890e',
  },
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
