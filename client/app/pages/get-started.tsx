import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../styles/login-styles";
import { common, button } from "@/constants/Styles";
const GetStartedPage = function () {
  const windowWidth = Dimensions.get("window").width;

  const handleClickGetStarted = () => {
    console.log("Hello World!");
  };

  return (
    <ScrollView>
      <View
        style={[
          common.container,
          {
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 40,
          },
        ]}
      >
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
        <View>
          <Text style={styles.detailText}>
            Discover, Read, Review: Your Gateway to{" "}
            <Text style={styles.highlightText}>Comic Vine!</Text>
          </Text>
          <TouchableOpacity
            style={button.primaryButton}
            onPress={handleClickGetStarted}
          >
            <Text style={button.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button.secondaryButton}
            onPress={handleClickGetStarted}
          >
            <Text style={button.secondaryButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default GetStartedPage;
