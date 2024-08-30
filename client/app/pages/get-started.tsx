import React, { useRef } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styles/get-started-styles";
import { button } from "@/constants/Styles";
import GoogleLogin from "../layouts/social-login/GoogleLogin";
import { useRouter } from "expo-router";
import AppStructure from "../middleware/Structure";
import AppBottomSheet from "@/components/AppBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { Colors } from "@/constants/Colors";

const GetStartedPage = function () {
  const router = useRouter();

  const signUpBottomSheetRef = useRef<BottomSheet>(null);
  const loginBottomSheetRef = useRef<BottomSheet>(null);

  const handleGoogleSignUpPress = () => {
    signUpBottomSheetRef.current?.expand();
  };

  const handleGoogleSignInPress = () => {
    loginBottomSheetRef.current?.expand();
  }

  const handleClickEmailLogin = function () {
    router.push("pages/email-login");
  };

  const handleClickEmailSignUp = () => {
    router.push("pages/email-login");
  }

  return (
    <AppStructure>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          flex: 1,
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_5_qxde7u.png",
          }}
          style={styles.image}
          alt="image-1"
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_4_rn6ecp.png",
          }}
          style={styles.image}
          alt="image-2"
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.detailText}>
            Discover, Read, Review: Your Gateway to{" "}
            <Text style={styles.highlightText}>Comic Vine!</Text>
          </Text>

          <TouchableOpacity
            style={[button.secondaryButton, { width: "100%" }]}
            onPress={handleGoogleSignUpPress}
          >
            <Text style={button.secondaryButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.emailLoginContainer}>
            <Text style={styles.alreadyMemberText}>Already a member?</Text>
            <TouchableOpacity
              style={button.primaryButton}
              onPress={handleGoogleSignInPress}
            >
              <Text style={button.primaryButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <AppBottomSheet
          bottomSheetRef={signUpBottomSheetRef}
          customSnap={["40%"]}
        >
          <View style={styles.sheetViewContainer}>
            <Text style={styles.sheetTextHeading}>Choose a Sign up method</Text>
            <GoogleLogin usedFor="signup"/>
            <Text style={styles.sheetSepratorText}>OR</Text>
            <TouchableOpacity
              style={button.primaryButton}
              onPress={handleClickEmailSignUp}
            >
              <Text style={button.primaryButtonText}> Sign up with email</Text>
            </TouchableOpacity>
          </View>
        </AppBottomSheet>

        <AppBottomSheet
          bottomSheetRef={loginBottomSheetRef}
          customSnap={["40%"]}
        >
          <View style={styles.sheetViewContainer}>
            <Text style={styles.sheetTextHeading}>Choose a Sign up method</Text>
            <GoogleLogin />
            <Text style={styles.sheetSepratorText}>OR</Text>
            <TouchableOpacity
              style={button.primaryButton}
              onPress={handleClickEmailLogin}
            >
              <Text style={button.primaryButtonText}> Login with email</Text>
            </TouchableOpacity>
          </View>
        </AppBottomSheet>
      </ScrollView>
    </AppStructure>
  );
};

export default GetStartedPage;
