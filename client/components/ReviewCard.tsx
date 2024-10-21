import { scaleSize } from "@/app/utils/scale-size";
import { NoUserImage } from "@/assets/data";
import { Image, Text } from "react-native";
import { StyleSheet, View } from "react-native";

export default function ReviewCard() {
  return (
    <View style={styles.mainCardContainer}>
      <View>
        <Image source={{ uri: NoUserImage }} style={styles.userImage} />
        <View>
            <View>
<Text>5</Text>
            </View>
            <Text>
            Jenny Smith
            </Text>
        </View>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardContainer: {
    width: scaleSize(250),
    flexDirection: "column",
    gap: scaleSize(4),
  },
  userImage: {
    width: scaleSize(48),
    height: scaleSize(48),
    resizeMode: "stretch",
    borderRadius:scaleSize(50)
  },
});
