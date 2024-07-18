import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  normalContainer: {
    alignItems: "center",
  },

  comicImage: {
    width: 105,
    height: 160,
    position: "relative",
  },
  saveButton: {
    position: "absolute",
    left: 20,
    top: 0,
  },
  normalSaveButton: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  plusIconForSaveButton: {
    position: "absolute",
    top: 0,
    left: 7,
  },
  bookTitle: {
    color: Colors.custom.white,
    fontSize: 15,
    lineHeight: 25,
  },
  bookSideTitle: {
    color: Colors.custom.white,
    left: 8,
    bottom: 5,
    fontFamily: "PlusJakartaSans-Medium",
    paddingHorizontal: 3,
    fontSize: 14,
    alignSelf: "flex-end",
    maxWidth: windowWidth - 110,
  },
});
