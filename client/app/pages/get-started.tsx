import React, { useRef } from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../styles/get-started-styles";
import { button } from "@/constants/Styles";
import GoogleLogin from "../layouts/social-login/GoogleLogin";
import { useRouter } from "expo-router";
import AppStructure from "../middleware/Structure";
import AppBottomSheet from "@/components/AppBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { scaleSize, vh, vw } from "../utils/scale-size";

const GetStartedPage = function () {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;

  const signUpBottomSheetRef = useRef<BottomSheet>(null);
  const loginBottomSheetRef = useRef<BottomSheet>(null);

  const handleGoogleSignUpPress = () => {
    signUpBottomSheetRef.current?.expand();
  };

  const handleGoogleSignInPress = () => {
    loginBottomSheetRef.current?.expand();
  };

  const handleClickEmailLogin = function () {
    router.push("/pages/login/email-login");
  };

  const handleClickEmailSignUp = () => {
    router.push("/pages/signup/signup-email");
  };

  return (
    <AppStructure>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: scaleSize(15),
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: scaleSize(44),
          }}
        >
          <Image
            source={{
              uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_5_qxde7u.png",
            }}
            style={{
              width: windowWidth - scaleSize(20),
              height: scaleSize(200),
            }}
            alt="image-1"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_4_rn6ecp.png",
            }}
            style={{
              width: windowWidth - scaleSize(20),
              height: scaleSize(200),
            }}
            alt="image-2"
            resizeMode="contain"
          />
        </View>

        <View style={{ alignItems: "center", marginBottom: scaleSize(24) }}>
          <Text style={styles.detailText}>
            Discover, Read, Review: Your{" "}
            <Text>
              Gateway to <Text style={styles.highlightText}>Comic Vine!</Text>
            </Text>
          </Text>

          <View style={styles.emailLoginContainer}>
            <TouchableOpacity
              style={[button.secondaryButton]}
              onPress={handleGoogleSignUpPress}
            >
              <Text style={button.secondaryButtonText}>Get Started</Text>
            </TouchableOpacity>

            <Text style={styles.alreadyMemberText}>Already a member?</Text>

            <TouchableOpacity
              style={button.primaryButton}
              onPress={handleGoogleSignInPress}
            >
              <Text style={button.primaryButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <AppBottomSheet
        bottomSheetRef={signUpBottomSheetRef}
        customSnap={[scaleSize(40).toString()]}
      >
        <View style={styles.sheetViewContainer}>
          <Text style={styles.sheetTextHeading}>Choose a Sign up method</Text>
          <GoogleLogin usedFor="signup" />
          <Text style={styles.sheetSepratorText}>OR</Text>
          <TouchableOpacity
            style={button.primaryButton}
            onPress={handleClickEmailSignUp}
          >
            <Text style={button.primaryButtonText}> Sign up with email</Text>
          </TouchableOpacity>
        </View>
      </AppBottomSheet>

      <AppBottomSheet bottomSheetRef={loginBottomSheetRef} customSnap={[scaleSize(40).toString()]}>
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
    </AppStructure>
  );
};

export default GetStartedPage;
