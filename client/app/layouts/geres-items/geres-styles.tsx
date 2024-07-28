import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const geresStyle = StyleSheet.create({
  unorderContainer: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth,
    padding: 10,
  },
  liItemContainer: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },
  iconContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: Colors.custom.secondaryBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: Colors.custom.white,
  },
});
