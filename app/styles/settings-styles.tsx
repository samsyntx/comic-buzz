import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { scaleSize } from "../utils/scale-size";

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

export const profileStyles = StyleSheet.create({
  mainProfileImageContainer: {
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(8),
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight:scaleSize(230)
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  userImage:{
    borderRadius:scaleSize(50),
  },
  userName:{
    color:Colors.custom.white,
    fontSize:scaleSize(18),
    fontFamily:'DMSans-700',
    lineHeight:scaleSize(18)
  },
  editProfileContainer:{
    backgroundColor:'#222324',
    borderRadius:scaleSize(50),
    padding:scaleSize(5),
    borderWidth:scaleSize(2),
    borderColor:Colors.custom.white,
    width:scaleSize(70),
    height:'auto',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  editProfileText:{
    color:Colors.custom.white,
    fontSize:scaleSize(14),
    fontFamily:'DMSans-500',
    lineHeight:scaleSize(18)
  },
  homeNewCollectionName: {
    fontFamily: "PlusJakartaSans-Medium",
    color: Colors.custom.white,
    fontSize: scaleSize(16),
  },
  collectionContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:scaleSize(10)
  },
});
