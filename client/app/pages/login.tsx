import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { styles } from "../styles/login-styles";
import { common, button } from "@/constants/Styles";
import GoogleLogin from "../layouts/social-login/GoogleLogin";
import CustomStatusBar from "@/components/CustomStatusBar";
import { useRouter } from "expo-router";
import AppStructure from "../middleware/Structure";

const GetStartedPage = function () {
  const windowWidth = Dimensions.get("window").width;
  const router = useRouter();

  const handleClickEmailLogin = function () {
    router.push("pages/email-login");
  };

  return (
    <AppStructure>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_5_qxde7u.png",
        }}
        style={[styles.image, { width: windowWidth - 20 }]}
        alt="image-1"
      />
      <Image
        source={{
          uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_4_rn6ecp.png",
        }}
        style={[styles.image, { width: windowWidth - 20 }]}
        alt="image-2"
      />
      <View style={{alignItems:'center', paddingHorizontal:15}}>
        <Text style={styles.detailText}>
          Discover, Read, Review: Your Gateway to{" "}
          <Text style={styles.highlightText}>Comic Vine!</Text>
        </Text>

        <GoogleLogin />

        <View style={styles.emailLoginContainer}>
          <Text style={styles.alreadyMemberText}>Already a member?</Text>
          <TouchableOpacity
            style={button.primaryButton}
            onPress={handleClickEmailLogin}
          >
            <Text style={button.primaryButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppStructure>
  );
};

export default GetStartedPage;
