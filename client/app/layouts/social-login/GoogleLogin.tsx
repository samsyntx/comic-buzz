import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import googleLogo from "@/assets/images/google-logo.png";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/app/context/AuthContext";

const GoogleLogin = function () {
  const { login } = useAuth();

  const handleClickLogin = () => {
    login();
  };

  return (
    <TouchableOpacity style={styles.btnBackground} onPress={handleClickLogin}>
      <Image
        source={googleLogo}
        resizeMode="stretch"
        style={styles.googleLogoImage}
      />
      <Text style={styles.googleText}>Continue With Google</Text>
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
    width:"100%"
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
