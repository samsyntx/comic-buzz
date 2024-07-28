import { Text, View } from "react-native";
import { searchItemStyle } from "./search-items-styles";

export default function SearchItem() {
  return (
    <View style={searchItemStyle.liItemContainer}>
      <Text style={{ color: "#ffffff" }}>Hello World</Text>
    </View>
  );
}
