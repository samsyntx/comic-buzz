import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/home-styles";
import { originals } from "../styles/original-styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import DropComicItems from "../layouts/comic-items/DropComicItem";
import { Ionicons } from "@expo/vector-icons";
import GeresItems from "../layouts/geres-items";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";

export default function OriginalScreen() {
  return (
    <AuthMiddleware>
      <AppStructure>
      <View style={styles.collectionContainer}>
          <Image
            style={originals.mainImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTF7C30EDuDcTPqb3ZuxB5gnrNzaBWzIixA&s",
            }}
            resizeMode="stretch"
          />
          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Latest Drops</Text>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
              <View key={index} style={styles.ListItemsView}>
                <DropComicItems />
              </View>
            ))}
          </ScrollView>

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Top Rated</Text>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
              <View key={index} style={styles.ListItemsView}>
                <DropComicItems />
              </View>
            ))}
          </ScrollView>

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Editor's Choice</Text>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
              <View key={index} style={styles.ListItemsView}>
                <DropComicItems />
              </View>
            ))}
          </ScrollView>

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Favourite Geres</Text>
          </View>

          <GeresItems />
        </View>
      </AppStructure>
    </AuthMiddleware>
  );
}
