import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet } from "react-native";
import { styles } from "../styles/home-styles";
import { originals } from "../styles/original-styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import DropComicItems from "../layouts/comic-items/DropComicItem";
import BrandCollectionItem from "../layouts/brand-items";
import GeresItems from "../layouts/geres-items";
import { searchStyles } from "../styles/search-styles";
import { Ionicons } from "@expo/vector-icons";
import SearchItem from "../layouts/search-item";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";

const dummySearchList = [
  {
    id: 0,
    title: "Batman: Dark Age",
    author: "Mark Russell",
    image:
      "https://i.pinimg.com/originals/f5/2a/cf/f52acfe2225b427c2324f7583ab04bb2.jpg",
  },
  {
    id: 1,
    title: "Superman: Red Son",
    author: "Mark Millar",
    image:
      "https://i.pinimg.com/originals/f5/2a/cf/f52acfe2225b427c2324f7583ab04bb2.jpg",
  },
  {
    id: 2,
    title: "Wonder Woman: Warbringer",
    author: "Leigh Bardugo",
    image:
      "https://i.pinimg.com/originals/f5/2a/cf/f52acfe2225b427c2324f7583ab04bb2.jpg",
  },
  {
    id: 3,
    title: "The Flash: Rebirth",
    author: "Geoff Johns",
    image:
      "https://i.pinimg.com/originals/f5/2a/cf/f52acfe2225b427c2324f7583ab04bb2.jpg",
  },
  {
    id: 4,
    title: "Green Lantern: Secret Origin",
    author: "Geoff Johns",
    image:
      "https://i.pinimg.com/originals/f5/2a/cf/f52acfe2225b427c2324f7583ab04bb2.jpg",
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(dummySearchList);

  const handleChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredResults(dummySearchList);
    } else {
      const filtered = dummySearchList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  };

  return (
<AuthMiddleware>
  <AppStructure>
  <View style={searchStyles.searchInputContainer}>
          <Ionicons name="search-outline" size={20} color="white" />
          <TextInput
            style={{ flexGrow: 1, color: "#ffffff" }}
            placeholder="Find Your Comics"
            placeholderTextColor="#999999"
            onChangeText={handleChangeSearch}
          />
        </View>

        {searchQuery === "" ? (
          <View style={[styles.collectionContainer, { marginTop: 0 }]}>
            <View style={originals.collectionContainer}>
              <Text style={styles.homeNewCollectionName}>For You</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
                <View key={index} style={styles.ListItemsView}>
                  <DropComicItems />
                </View>
              ))}
            </ScrollView>

            <View style={originals.collectionContainer}>
              <Text style={styles.homeNewCollectionName}>Brand Spotlight</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
                <View key={index} style={styles.ListItemsView}>
                  <BrandCollectionItem />
                </View>
              ))}
            </ScrollView>

            <View style={originals.collectionContainer}>
              <Text style={styles.homeNewCollectionName}>Favourite Geres</Text>
            </View>
            <GeresItems />
          </View>
        ) : (
          <View style={[styles.collectionContainer, { marginTop: 0 }]}>
            {filteredResults.length > 0 ? (
              filteredResults.map((each, index) => {
                return <SearchItem key={index} detail={each} />;
              })
            ) : (
              <Text style={{ color: "#ffff" }}>No Data Found</Text>
            )}
          </View>
        )}
  </AppStructure>
</AuthMiddleware>
  );
}
