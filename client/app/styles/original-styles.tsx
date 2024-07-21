import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const originals = StyleSheet.create({
  mainImage: {
    width: "100%",
    height: 312,
    borderRadius: 10,
  },
  collectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
