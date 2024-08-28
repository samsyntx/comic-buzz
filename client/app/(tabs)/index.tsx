import { Image, View, ScrollView, Text } from "react-native";
import { styles } from "../styles/home-styles";
import SaveComicItem from "../layouts/comic-items/SaveComicItem";
import DropComicItems from "../layouts/comic-items/DropComicItem";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";

export default function HomeScreen() {
  return (
    <AuthMiddleware>
      <AppStructure>
        <View style={styles.floatImageContainer}>
          <Image
            style={styles.coverImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTF7C30EDuDcTPqb3ZuxB5gnrNzaBWzIixA&s",
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
      </AppStructure>
    </AuthMiddleware>
  );
}
