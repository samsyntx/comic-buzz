import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { scaleSize } from "@/app/utils/scale-size";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  normalContainer: {
    alignItems: "center",
  },
  comicImage: {
    width: scaleSize(116),
    height: scaleSize(176),
    position: "relative",
    borderRadius:scaleSize(4),
    overflow:'hidden'
  },
  normalSaveButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  plusIconForSaveButton: {
    position: "absolute",
    top: 0,
    left: scaleSize(7),
  },
  bookTitle: {
    color: Colors.custom.white,
    fontSize: scaleSize(12),
    lineHeight: scaleSize(18),
    marginTop:scaleSize(8),
    fontFamily:'DMSans-400'
  },
});
