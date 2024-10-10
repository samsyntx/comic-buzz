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
import { scaleSize } from "@/app/utils/scale-size";
import { registerStyles } from "./signup-email";

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

        <Text style={registerStyles.welcomeBackText}>Create your password</Text>

        <TextInput
          style={[registerStyles.loginTextInput, {marginBottom:scaleSize(10)}]}
          placeholder="Password"
          placeholderTextColor={"#fff"}
          secureTextEntry={true}
        />

        <View style={{ marginBottom: scaleSize(20) }}>
          {passwordValidationList.map((each, index) => (
            <View key={index} style={styles.passwordValidationContainer}>
              <View
                style={[
                  styles.validateCircle,
                  each.isTrue && styles.validateIsTrueStyle,
                ]}
              >
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
        </View>

        <TouchableOpacity style={[button.primaryButton, { marginTop: 15 }]}>
          <Text style={button.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppStructure>
  );
};

export default CreateEmailPassword;

export const styles = StyleSheet.create({
  passwordValidationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scaleSize(10),
    marginBottom:scaleSize(5)
  },
  validateCircle: {
    width: scaleSize(20),
    height: scaleSize(20),
    borderRadius: scaleSize(100),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  validateText: {
    fontSize: scaleSize(14),
    color: Colors.custom.white,
  },
  validateIsTrueStyle: {
    backgroundColor: "#00890e",
  },
  forgetPasswordText: {
    color: Colors.custom.white,
    textAlign: "center",
    fontSize: scaleSize(14),
    marginHorizontal: scaleSize(10),
    marginTop: scaleSize(10),
    marginBottom: scaleSize(5),
  },
});
