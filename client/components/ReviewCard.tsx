import { scaleSize } from "@/app/utils/scale-size";
import { NoUserImage } from "@/assets/data";
import { Image, Text } from "react-native";
import { StyleSheet, View } from "react-native";
import StarRating from "./StarRating";
import { Colors } from "@/constants/Colors";

export default function ReviewCard() {
  return (
    <View style={styles.mainCardContainer}>
      <View style={{ flexDirection: "row", gap: scaleSize(10) }}>
        <Image source={{ uri: NoUserImage }} style={styles.userImage} />
        <View style={{ flexDirection: "column", gap: scaleSize(5) }}>
          <StarRating defaultRating={3.5} readonly/>
          <Text style={styles.userRateName}>Jenny Smith</Text>
        </View>
      </View>
      <Text style={styles.ratingDescription}>
        A haunting, expertly woven story that delves deep into the psyche of
        Batman and Joker, beautifully illustrated and intensely written.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardContainer: {
    width: scaleSize(250),
    flexDirection: "column",
    gap: scaleSize(4),
  },
  userImage: {
    width: scaleSize(48),
    height: scaleSize(48),
    resizeMode: "stretch",
    borderRadius: scaleSize(50),
  },
  userRateName: {
    color: Colors.custom.white,
    fontSize: scaleSize(16),
    fontFamily: "DMSans-700",
  },
  nameContainer: {
    flexDirection: "column",
    gap: scaleSize(15),
  },
  ratingDescription: {
    color: Colors.custom.white,
    fontSize: scaleSize(14),
    lineHeight: scaleSize(20),
    fontFamily: "DMSans-400",
  },
});
