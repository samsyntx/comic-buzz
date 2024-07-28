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

const dummySearchList = [
  {
    id: 0,
    title: "Batman: Dark Age",
    author: "Mark Russell",
    image:
      "https://www.figma.com/file/oCPGeqUw2DyJAZRqfoZBj9/image/8b9e7b58c90292908c639fd39877ee4ea4523165",
  },
  {
    id: 1,
    title: "Superman: Red Son",
    author: "Mark Millar",
    image:
      "https://www.figma.com/file/oCPGeqUw2DyJAZRqfoZBj9/image/d2bc9e8f2b73924f66c82bd34d54f1677b13f0f9",
  },
  {
    id: 2,
    title: "Wonder Woman: Warbringer",
    author: "Leigh Bardugo",
    image:
      "https://www.figma.com/file/oCPGeqUw2DyJAZRqfoZBj9/image/36f3f55a4d25f8cf4a1e8c8f8d735fa7a3cb9b1c",
  },
  {
    id: 3,
    title: "The Flash: Rebirth",
    author: "Geoff Johns",
    image:
      "https://www.figma.com/file/oCPGeqUw2DyJAZRqfoZBj9/image/25aefd384c2454a92d394bebc0bdaae3dd1957c6",
  },
  {
    id: 4,
    title: "Green Lantern: Secret Origin",
    author: "Geoff Johns",
    image:
      "https://www.figma.com/file/oCPGeqUw2DyJAZRqfoZBj9/image/587c7bbad08e240d8fbb91e61d4dbfc5171e32d4",
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(dummySearchList);

  const handleChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            {filteredResults.length > 0
              ? filteredResults.map((each, index) => {
                  return <SearchItem key={index} />;
                })
              : null}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
