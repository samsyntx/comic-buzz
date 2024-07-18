import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Colors";

const windowWidth = Dimensions.get("window").width;

export const button = StyleSheet.create({
  primaryButton: {
    borderRadius: 8,
    backgroundColor: Colors.custom.primary,
    color: Colors.custom.white,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginVertical: 10,
  },
  primaryButtonText: {
    color: Colors.custom.white,
  },
  secondaryButton: {
    borderRadius: 8,
    backgroundColor: Colors.custom.white,
    color: Colors.custom.white,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginVertical: 10,
  },
  secondaryButtonText: {
    color: Colors.custom.black,
  },
});

export const common = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  }
});