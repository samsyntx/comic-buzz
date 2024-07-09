import { StyleSheet } from "react-native";
import { colors } from "src/static/global-styles";

export const button = StyleSheet.create({
  primaryButton: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginVertical: 10,
  },
  primaryButtonText: {
    color: colors.white,
  },
  secondaryButton: {
    borderRadius: 8,
    backgroundColor: colors.white,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginVertical: 10,
  },
  secondaryButtonText: {
    color: colors.black,
  },
});
