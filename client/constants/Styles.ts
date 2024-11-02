import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Colors";
import { scaleSize } from "@/app/utils/scale-size";

const windowWidth = Dimensions.get("window").width;

export const button = StyleSheet.create({
  primaryButton: {
    borderRadius: scaleSize(8),
    backgroundColor: Colors.custom.primary,
    color: Colors.custom.white,
    alignItems: "center",
    justifyContent: "center",
    height: scaleSize(44),
  },
  primaryButtonText: {
    color: Colors.custom.white,
    fontSize: scaleSize(14),
    fontFamily:"DMSans-500"
  },
  secondaryButton: {
    borderRadius: scaleSize(8),
    backgroundColor: Colors.custom.white,
    color: Colors.custom.white,
    alignItems: "center",
    justifyContent: "center",
    height: scaleSize(44),
  },
  secondaryButtonText: {
    color: Colors.custom.black,
    fontSize: scaleSize(14),
    fontFamily:"DMSans-500"
  },
});

export const common = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  },
});
