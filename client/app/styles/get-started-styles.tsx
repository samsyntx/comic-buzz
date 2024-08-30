import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  detailText: {
    marginVertical: 10,
    color: Colors.custom.white,
    fontSize: 22,
    textAlign: "center",
    width: windowWidth * 0.8,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
  highlightText: {
    color: Colors.custom.primary,
    fontSize: 20,
  },
  emailLoginContainer: {
    marginVertical: 10,
    width:"100%"
  },
  alreadyMemberText: {
    color: Colors.custom.white,
    textAlign: "center",
  },
  sheetViewContainer:{
    padding:15
  },
  sheetTextHeading:{
    color:Colors.custom.white,
    fontSize:22,
    textAlign:'center',
    fontFamily:'PlusJakartaSans-ExtraBold',
    marginBottom:18,
  },
  sheetSepratorText:{
    color:Colors.custom.white,
    fontSize:15,
    textAlign:'center',
    marginVertical:12
  }
});
