import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { scaleSize } from "../utils/scale-size";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  detailText: {
    color: Colors.custom.white,
    fontSize: scaleSize(20),
    textAlign: "center",
    fontFamily: "PlusJakartaSans-700",
  },
  highlightText: {
    color: Colors.custom.primary,
    fontSize: scaleSize(20),
  },
  emailLoginContainer: {
    marginVertical: scaleSize(24),
    width:"100%"
  },
  alreadyMemberText: {
    color: Colors.custom.white,
    textAlign: "center",
    fontSize:scaleSize(14),
    marginTop:scaleSize(24),
    marginBottom:scaleSize(8),
    fontFamily:'PlusJakrataSans-'
  },
  sheetViewContainer:{
    paddingHorizontal:scaleSize(16),
    paddingVertical:scaleSize(20),
  },
  sheetTextHeading:{
    color:Colors.custom.white,
    fontSize:scaleSize(22),
    textAlign:'center',
    fontFamily:'PlusJakartaSans-700',
    marginBottom:scaleSize(40),
  },
  sheetSepratorText:{
    color:Colors.custom.white,
    fontSize:scaleSize(12),
    textAlign:'center',
    marginVertical:scaleSize(16)
  }
});
