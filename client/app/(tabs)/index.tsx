import { Image, View, ScrollView, Text } from "react-native";
import { styles } from "../styles/home-styles";
import { common } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import SaveComicItem from "../components/save-comic-item/SaveComicItem";
import { ThemedText } from "@/components/ThemedText";
import DropComicItems from "../components/save-comic-item/DropComicItem";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.floatImageContainer}>
          <Image
            style={styles.coverImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hF5gtOiYusfOfW69-PMwSbHt89wga8wgLQ&s",
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
