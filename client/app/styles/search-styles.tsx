import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const searchStyles = StyleSheet.create({
  searchInputContainer: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: 20,
    color: Colors.custom.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
