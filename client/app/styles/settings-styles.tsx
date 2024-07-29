import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const settingStyles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginRight: 10,
  },
  userNameText: {
    color: Colors.custom.white,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
  },
  userEmailText: {
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 14,
    color: Colors.custom.white,
  },
  profileEditButton: {
    color: Colors.custom.primary,
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 16,
  },
});
