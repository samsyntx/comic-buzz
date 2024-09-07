import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import googleLogo from "@/assets/images/google-logo.png";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/app/context/AuthContext";
import { button } from "@/constants/Styles";
import { scaleSize } from "@/app/utils/scale-size";

interface propsTypes {
  usedFor?: string;
}

const GoogleLogin = function (props: propsTypes) {
  const { login } = useAuth();

  const handleClickLogin = () => {
    login();
  };

  return (
    <TouchableOpacity
      onPress={handleClickLogin}
      style={[
        button.secondaryButton,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Image
        source={googleLogo}
        resizeMode="stretch"
        style={styles.googleLogoImage}
      />
      <Text style={[button.secondaryButtonText]}>
        {props.usedFor === "signup"
          ? "Sign up with Google"
          : "Continue With Google"}
      </Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  googleLogoImage: {
    height: scaleSize(24),
    width: scaleSize(24),
    marginRight: scaleSize(10),
  },
});

export default GoogleLogin;
