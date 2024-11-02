import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";
import { originals } from "@/app/styles/original-styles";
import { scaleSize } from "@/app/utils/scale-size";
import { NoComicImage } from "@/assets/data";
import {
  OutlineLikeSvgIcon,
  OutlineSaveSvgIcon,
  OutlineShareSvgIcon,
  OutlineStarSvgIcon,
} from "@/assets/icons";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { Colors } from "@/constants/Colors";
import { button } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { originalItemList } from "../originals";
import OriginalComicItem from "@/app/layouts/comic-items/OriginalsComicItems";
import { router } from "expo-router";
import { useRef, useState } from "react";
import AppBottomSheet from "@/components/AppBottomSheet";
import SaveComicItem from "@/app/layouts/comic-items/SaveComicItem";
import { saveComicList } from "..";

export default function InfoDetailScreen() {
  const recommandedRef = useRef<BottomSheet>(null);

  const hadleToggleRateBook = () => {
    router.push(`/(tabs)/info/rate-book/${"bookId"}`);
    recommandedRef.current?.expand();
  };

  const recommandedRefSheet = () => {
    return (
      <View style={{ paddingHorizontal: scaleSize(10) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: scaleSize(32),
            marginTop: scaleSize(15),
          }}
        >
          <Text style={styles.mightAlsoLike}>You Might Also Love</Text>
          <TouchableOpacity onPress={() => recommandedRef.current?.close()}>
            <Ionicons
              name="close-outline"
              size={scaleSize(35)}
              style={{ color: "#fff" }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            gap: scaleSize(8),
          }}
        >
          {saveComicList.map((each, index) => (
            <SaveComicItem key={index} detail={each} />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <AuthMiddleware>
      <AppStructure noStatus={true}>
        <ScrollView>
          <View style={styles.mainCoverContainer}>
            <Image
              source={{ uri: NoComicImage }}
              style={{
                height: scaleSize(230),
                width: WINDOW_WIDTH,
                overflow: "hidden",
              }}
            />
            <View style={styles.infoDisplayContainer}>
              <View style={styles.infoDisplayContent}>
                <Text style={styles.infoDisplayHeading}>
                  Batman: The Killing Joke
                </Text>
                <Text style={styles.infoDisplaySeconday}>By Alan Moore </Text>
                <Text style={styles.infoDisplaySeconday}>2008 • 64 Pages</Text>
                <StarRating
                  starColor={Colors.custom.primary}
                  defaultRating={4}
                  readonly
                />
              </View>

              <Image
                style={styles.infoDisplayImage}
                source={{
                  uri: "https://m.media-amazon.com/images/I/71R7phxvI6L._AC_UF1000,1000_QL80_.jpg",
                }}
              />
            </View>
          </View>

          <View style={{ padding: scaleSize(16) }}>
            <Text style={styles.infoDetailTitle}>
              A New York Times best-seller
            </Text>
            <Text style={styles.infoDetailParagraph}>
              In "Batman: The Killing Joke," the Joker kidnaps Barbara Gordon
              and tortures her to drive her father, Commissioner Gordon, insane.
              The story delves into the Joker's origin, explores his twisted
              relationship with Batman, and questions the nature of sanity
            </Text>

            <TouchableOpacity
              style={[
                button.primaryButton,
                {
                  marginTop: scaleSize(16),
                  marginBottom: scaleSize(24),
                },
              ]}
            >
              <Text
                style={[
                  button.primaryButtonText,
                  { textDecorationLine: "underline" },
                ]}
              >
                Read Now
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: scaleSize(10),
                marginBottom: scaleSize(32),
              }}
            >
              <TouchableOpacity style={styles.iconTextContainer}>
                <View style={styles.iconContainer}>
                  <OutlineLikeSvgIcon />
                </View>
                <Text style={styles.iconText}>Like</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTextContainer}>
                <View style={styles.iconContainer}>
                  <OutlineSaveSvgIcon />
                </View>
                <Text style={styles.iconText}>Bookshelf</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={hadleToggleRateBook}
                style={styles.iconTextContainer}
              >
                <View style={styles.iconContainer}>
                  <OutlineStarSvgIcon />
                </View>
                <Text style={styles.iconText}>Rate This</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconTextContainer}>
                <View style={styles.iconContainer}>
                  <OutlineShareSvgIcon />
                </View>
                <Text style={styles.iconText}>Share</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoDetailTitle}>Community Reviews</Text>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                flexDirection: "row",
                gap: scaleSize(8),
                marginBottom: scaleSize(32),
              }}
            >
              {[1, 1, 1, 1, 1].map((each, index) => (
                <ReviewCard key={index} />
              ))}
            </ScrollView>

            <View style={styles.collectionContainer}>
              <Text style={styles.collectionName}>Related Comics</Text>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {originalItemList.map((each, index) => (
                <OriginalComicItem key={index} detail={each} />
              ))}
            </ScrollView>

            <View style={styles.collectionContainer}>
              <Text style={styles.collectionName}>Readers Also Loved</Text>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {originalItemList.map((each, index) => (
                <OriginalComicItem key={index} detail={each} />
              ))}
            </ScrollView>

            <View style={styles.collectionContainer}>
              <Text style={styles.collectionName}>More By Alan Moore</Text>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {originalItemList.map((each, index) => (
                <OriginalComicItem key={index} detail={each} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        <AppBottomSheet
          bottomSheetRef={recommandedRef}
          customSnap={[scaleSize(45).toString()]}
          hideIndicator
        >
          {recommandedRefSheet()}
        </AppBottomSheet>
      </AppStructure>
    </AuthMiddleware>
  );
}

const styles = StyleSheet.create({
  mainCoverContainer: {
    position: "relative",
    height: scaleSize(370),
    overflow: "hidden",
  },
  infoDisplayContainer: {
    flexDirection: "row",
    gap: scaleSize(20),
    position: "absolute",
    bottom: scaleSize(20),
    marginHorizontal: scaleSize(15),
  },
  infoDisplayContent: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginBottom: scaleSize(8),
  },
  infoDisplayHeading: {
    fontSize: scaleSize(16),
    color: Colors.custom.white,
    lineHeight: scaleSize(20),
    marginBottom: scaleSize(5),
    fontFamily: "DMSans-700",
  },
  infoDisplaySeconday: {
    color: Colors.custom.white,
    marginBottom: scaleSize(4),
    fontSize: scaleSize(14),
    fontFamily: "DMSans-400",
  },
  infoDisplayImage: {
    width: scaleSize(119),
    height: scaleSize(176),
    borderRadius: scaleSize(10),
  },
  infoDetailTitle: {
    fontSize: scaleSize(16),
    fontFamily: "DMSans-700",
    lineHeight: scaleSize(20),
    marginBottom: scaleSize(14),
    color: Colors.custom.white,
  },
  infoDetailParagraph: {
    fontSize: scaleSize(12),
    fontFamily: "DMSans-400",
    lineHeight: scaleSize(18),
    color: Colors.custom.white,
    marginBottom: scaleSize(8),
  },
  iconTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: scaleSize(5),
    width: scaleSize(60),
  },
  iconContainer: {
    width: scaleSize(50),
    height: scaleSize(50),
    borderWidth: scaleSize(1),
    borderColor: "rgba(255, 255, 255, 0.16)",
    borderRadius: scaleSize(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: scaleSize(10),
  },
  iconText: {
    fontSize: scaleSize(12),
    fontFamily: "DMSans-400",
    lineHeight: scaleSize(16),
    color: Colors.custom.white,
  },
  collectionName: {
    fontFamily: "PlusJakartaSans-Medium",
    color: Colors.custom.white,
    fontSize: scaleSize(16),
  },
  collectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaleSize(12),
  },
  mightAlsoLike: {
    color: Colors.custom.white,
    fontSize: scaleSize(18),
    fontFamily: "PlusJakrataSans",
    lineHeight: scaleSize(20),
    fontWeight: "500",
  },
});
