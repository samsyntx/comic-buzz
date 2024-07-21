import { Image, View, ScrollView, Text } from "react-native";
import { styles } from "../styles/home-styles";
import { common } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import SaveComicItem from "../components/comic-items/SaveComicItem";
import { ThemedText } from "@/components/ThemedText";
import DropComicItems from "../components/comic-items/DropComicItem";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.floatImageContainer}>
          <Image
            style={styles.coverImage}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/1c5c/20d7/8f1aef2f7402d109ec895a86ebb85adb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AB~ahrDMhSerPj7fOQWH2hATpg3dXGnO1ZatpyeNScgMfbOFrQotsyr8rW6u~sjzn-1rDHd93jVQPw93fEKFI0JYyIOE10pFCbyK799hmLGY6x6FdKd0XxGHQWHdxecP55dHOPAENbB~3sT9JP6y7cz9Okb42mF9CtlK4vf71CaN1qlxA0yzNDlPlspfd1Zp-gPxETudlpR0OdLI04Zx2Hu2O97xqvrLMjaW~kzbDo0wRz-aS2vkrHeqpdASA6G3cJPlWbNm2ztDqYJuFE3Ibza1ZMA2rozmIHXfTNfyQsMXcgFZoWRIajb3SwOvlC35piGExuIqaNaqaIsaNK-k8w__",
            }}
            resizeMode="cover"
          />
          <SaveComicItem isFloat={true} />
        </View>
        <View style={styles.collectionContainer}>
          <Text style={styles.homeNewCollectionName}>Latest Drops</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
              <View key={index} style={styles.ListItemsView}>
                <DropComicItems />
              </View>
            ))}
          </ScrollView>

          <Text style={styles.homeNewCollectionName}>Add To Your List</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
              <View key={index} style={styles.ListItemsView}>
                <SaveComicItem />
              </View>
            ))}
          </ScrollView>

          <Text style={styles.homeNewCollectionName}>Coming Soon</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
              <View key={index} style={styles.ListItemsView}>
                <DropComicItems />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
