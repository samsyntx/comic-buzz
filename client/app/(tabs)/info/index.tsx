import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";
import { scaleSize } from "@/app/utils/scale-size";
import { NoComicImage } from "@/assets/data";
import CustomStatusBar from "@/components/CustomStatusBar";
import StarRating from "@/components/StarRating";
import { Colors } from "@/constants/Colors";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

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

          <View>
            <Text style={{color:'#fff'}}>Hello World</Text>
          </View>
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}

const styles = StyleSheet.create({
  mainCoverContainer: {
    position: "relative",
    height:scaleSize(370),
    overflow:'hidden'
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
});
