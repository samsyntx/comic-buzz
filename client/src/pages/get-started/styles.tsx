import { StyleSheet, Dimensions } from "react-native";
import { colors } from "src/static/global-styles";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  image: {
    height: 200,
    width: windowWidth - 40,
    resizeMode: "contain",
  },
  detailText: {
    marginVertical:10,
    color: colors.white,
    fontSize: 22,
    textAlign: "center",
    width: windowWidth * 0.8,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
  highlightText: {
    color: colors.primary,
    fontSize: 20,
  },
});
