import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { scaleSize } from "@/app/utils/scale-size";

const windowWidth = Dimensions.get("window").width;

export const geresStyle = StyleSheet.create({
  unorderContainer: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth,
    padding: scaleSize(10),
    gap:scaleSize(8)
  },
  liItemContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center'
  },
  iconContainer: {
    height: scaleSize(70),
    width: scaleSize(70),
    borderRadius: scaleSize(50),
    backgroundColor: Colors.custom.secondaryBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scaleSize(10),
  },
  title: {
    color: Colors.custom.white,
  },
});
