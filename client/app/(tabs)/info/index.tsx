import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";
import { scaleSize } from "@/app/utils/scale-size";
import { NoComicImage } from "@/assets/data";
import {
  OutlineLikeSvgIcon,
  OutlineSaveSvgIcon,
  OutlineShareSvgIcon,
  OutlineStarSvgIcon,
  SaveSvgIcon,
} from "@/assets/icons";
import CustomStatusBar from "@/components/CustomStatusBar";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { Colors } from "@/constants/Colors";
import { button } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function InfoDetailScreen() {
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
                <StarRating defaultRating={4} readonly />
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
                  backgroundColor: Colors.custom.redLight,
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
                marginBottom: scaleSize(30),
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

              <TouchableOpacity style={styles.iconTextContainer}>
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

            <ScrollView horizontal>
              {[1, 1, 1, 1, 1].map((each, index) => (
                <ReviewCard key={index} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
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
    fontSize: scaleSize(14),
    fontFamily: "DMSans-700",
    lineHeight: scaleSize(20),
    marginBottom: scaleSize(8),
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
});
