import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 1,
    borderColor: "red",
  },
  floatImageContainer: {
    height: 240,
    position: "relative",
  },
  container: {
    backgroundColor: Colors.custom.background,
    flex: 1,
  },
  coverImage: {
    width: windowWidth,
    height: 184,
  },
  collectionContainer: {
    padding: 15,
  },
  homeNewCollectionName: {
    fontFamily: "PlusJakartaSans-Regular",
    color: Colors.custom.white,
    fontSize: 22,
    marginVertical: 15,
  },
  ListItemsView: {
    marginHorizontal: 5,
  },
});
