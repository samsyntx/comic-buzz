import { StyleSheet } from "react-native";
import { colors } from "src/static/global-styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 200,
    marginBottom: 20,
  },
  detailText: {
    color: colors.white,
    fontSize: 22,
    textAlign: "center",
    width: 300,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
  highlightText: {
    color: colors.primary,
    fontSize: 20,
  },
});
