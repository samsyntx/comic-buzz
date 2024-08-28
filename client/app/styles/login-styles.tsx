import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  image: {
    height: 200,
    width: windowWidth - 40,
    resizeMode: "contain",
  },
  detailText: {
    marginVertical: 10,
    color: Colors.custom.white,
    fontSize: 22,
    textAlign: "center",
    width: windowWidth * 0.8,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
  highlightText: {
    color: Colors.custom.primary,
    fontSize: 20,
  },
  emailLoginContainer: {
    marginVertical: 10,
    width:"100%"
  },
  alreadyMemberText: {
    color: Colors.custom.white,
    textAlign: "center",
  },
});
