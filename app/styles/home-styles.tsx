import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { scaleSize } from "../utils/scale-size";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 1,
    borderColor: "red",
  },
  floatImageContainer: {
    height: scaleSize(240),
    position: "relative",
    marginBottom:scaleSize(24)
  },
  container: {
    backgroundColor: Colors.custom.background,
    flex: 1,
  },
  coverImage: {
    width: windowWidth,
    height: scaleSize(184),
  },
  collectionContainer: {
    padding: scaleSize(15),
  },
  homeNewCollectionName: {
    fontFamily: "PlusJakartaSans-Medium",
    color: Colors.custom.white,
    fontSize: scaleSize(16),
  },
  homeDropAndArrowContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:scaleSize(8),
    marginBottom:scaleSize(16)
  }
});
