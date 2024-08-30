import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import googleLogo from "@/assets/images/google-logo.png";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/app/context/AuthContext";

interface propsTypes {
  usedFor?: string;
}

const GoogleLogin = function (props: propsTypes) {
  const { login } = useAuth();

  const handleClickLogin = () => {
    login();
  };

  return (
    <TouchableOpacity onPress={handleClickLogin} style={styles.btnBackground}>
      <Image
        source={googleLogo}
        resizeMode="stretch"
        style={styles.googleLogoImage}
      />
      <Text style={styles.googleText}>{props.usedFor === "signup" ? "Sign up with Google" : "Continue With Google"}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  btnBackground: {
    backgroundColor: Colors.custom.white,
    color: Colors.custom.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
    marginVertical: 10,
    width: "100%",
  },
  googleLogoImage: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  googleText: {
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default GoogleLogin;
