import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { scaleSize } from "../utils/scale-size";

export const searchStyles = StyleSheet.create({
  searchInputContainer: {
    height: scaleSize(40),
    borderColor: "gray",
    borderWidth: scaleSize(1),
    paddingLeft: scaleSize(8),
    marginHorizontal: scaleSize(15),
    borderRadius: scaleSize(5),
    marginTop: scaleSize(20),
    color: Colors.custom.white,
    flexDirection: "row",
    alignItems: "center",
    gap: scaleSize(10),
  },
});
