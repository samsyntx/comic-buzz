import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const searchItemStyle = StyleSheet.create({
  liItemContainer: {
    flexGrow: 1,
    flexDirection: "row",
    marginRight: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 104,
    height: 150,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: Colors.custom.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    color: Colors.custom.gray,
    fontSize: 14,
  },
});
