import { StyleSheet, Dimensions } from "react-native";
import { scaleSize } from "../utils/scale-size";

const windowWidth = Dimensions.get("window").width;

export const originals = StyleSheet.create({
  originalsFeatureImage: {
    width: windowWidth - scaleSize(20),
    height: scaleSize(312),
    overflow: "hidden",
    marginBottom: scaleSize(25),
  },
  collectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaleSize(8),
    marginTop:scaleSize(16)
  },
});
