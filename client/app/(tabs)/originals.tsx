import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/home-styles";
import { originals } from "../styles/original-styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import DropComicItems from "../layouts/comic-items/DropComicItem";
import { Ionicons } from "@expo/vector-icons";
import GeresItems from "../layouts/geres-items";

export default function OriginalScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.collectionContainer}>
          <Image
            style={originals.mainImage}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/4bee/2697/41b7207f5137c58524a419507d04ee81?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L4P0W6JAnuuIs-OJlZb5hr-atnbFRNUrAq1P-nVzKNDwY8G7tvnd07Rp8ml-PSn~FKjKQB2Yy3ieYi6My0SmTr7qM1QGk9rfLx7WZ-tLMOfKknBr0jjGE-zruPtC6yqgJL1Cxmmuolw3LD3p3lsSvLwzApjs03M80N-BuDySdsFVkOUDhMiOroq5lURyQOpXDNnZo9VcTUtkNk0ZTSD5srTDHk3nJ8pNu91fuqhyzpem1Pbq3Rg7i16205BVLBnrEfWN0aoZ~IET1qmBkyPZ58T8TGv~qYEC-jk73n4VVqXIXGuSgoLEZbbcNVMw4YQ0CMKPKXqL7St85Vb9kORcdg__",
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
      </ScrollView>
    </SafeAreaView>
  );
}
