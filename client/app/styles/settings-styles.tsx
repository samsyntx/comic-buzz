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
  buttonTouchableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  IconTextContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  menuItemsText: {
    color: Colors.custom.white,
    fontSize: 16,
    marginLeft: 10,
  },
  editAccountHeading: {
    color: Colors.custom.white,
    fontSize: 24,
    fontFamily: "PlusJakartaSans-Bold",
    textAlign: "center",
    marginVertical: 20,
  },
  editAccountSubHeading: {
    color: Colors.custom.white,
    marginBottom: 25,
    fontSize: 18,
    fontFamily: "PlusJakartaSans-Medium",
  },
});
