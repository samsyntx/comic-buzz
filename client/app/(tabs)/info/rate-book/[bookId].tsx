import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scaleSize } from "@/app/utils/scale-size";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { button } from "@/constants/Styles";
import StarRating from "@/components/StarRating";
import { router } from "expo-router";

const imageUrl =
  "https://images-cdn.ubuy.co.id/633b3911d4127523c2223e49-spider-man-comic-book-cover-poster-size.jpg";

export default function RateBookScreen() {
  return (
    <AuthMiddleware>
      <ImageBackground
        source={{
          uri: imageUrl,
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill}>
          <AppStructure bgColor="transparent">
            <ScrollView contentContainerStyle={styles.mainScrollContainer}>
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons
                  style={styles.crossBackIcon}
                  name="close-outline"
                  size={scaleSize(45)}
                />
              </TouchableOpacity>

              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image
                  source={{ uri: imageUrl }}
                  style={styles.mainDisplayImage}
                />
                <Text style={styles.displayText}>
                  How Would You Rate The Comic Book{" "}
                </Text>
                <View style={{ marginBottom: scaleSize(24) }}>
                  <StarRating size={scaleSize(40)} />
                </View>

                <View style={{ alignSelf: "flex-start", width: "100%" }}>
                  <Text style={styles.ratingLabel}>
                    Express More{" "}
                    <Text style={styles.ratingLabelSpan}>(optional)</Text>
                  </Text>

                  <TextInput multiline style={styles.textInputStyle} />
                </View>
              </View>

              <TouchableOpacity
                style={[
                  button.primaryButton,
                  { marginVertical: scaleSize(20) },
                ]}
              >
                <Text style={button.primaryButtonText}>Submit Now</Text>
              </TouchableOpacity>
            </ScrollView>
          </AppStructure>
        </BlurView>
      </ImageBackground>
    </AuthMiddleware>
  );
}

const styles = StyleSheet.create({
  mainScrollContainer: {
    paddingHorizontal: scaleSize(16),
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  crossBackIcon: {
    color: Colors.custom.white,
  },
  mainDisplayImage: {
    height: scaleSize(261),
    width: scaleSize(174),
    marginBottom: scaleSize(24),
  },
  displayText: {
    fontSize: scaleSize(16),
    fontFamily: "PlusJakrataSans",
    fontWeight: "500",
    lineHeight: scaleSize(21),
    color: Colors.custom.white,
    marginBottom: scaleSize(16),
  },
  ratingLabel: {
    fontSize: scaleSize(16),
    fontFamily: "PlusJakrataSans",
    fontWeight: "500",
    lineHeight: scaleSize(21),
    color: Colors.custom.white,
    marginBottom: scaleSize(16),
  },
  ratingLabelSpan: {
    fontSize: scaleSize(12),
    fontFamily: "PlusJakrataSans",
    fontWeight: "500",
    lineHeight: scaleSize(21),
    color: "rgba(255, 255, 255, 0.40)",
    marginBottom: scaleSize(16),
  },
  textInputStyle: {
    height: scaleSize(100),
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(5),
    color: Colors.custom.white,
    fontSize: scaleSize(14),
    fontFamily: "PlusJakrataSans",
    borderWidth: scaleSize(2),
    borderColor: "rgba(255, 255, 255, 0.30)",
    borderRadius: scaleSize(5),
  },
});
