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
import SearchComicItem from "../layouts/comic-items/searchComicItem";
import { scaleSize } from "../utils/scale-size";

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

const searchForYouList = [
  {
    id: 0,
    title: "Watchmen",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725879587/comic-vine/Frame_302_11zon_gzljge.png",
  },
  {
    id: 1,
    title: "V for Vendetta",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725879587/comic-vine/Frame_301_11zon_lq0urc.png",
  },
  {
    id: 2,
    title: "Saga",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878472/comic-vine/image-3_11zon_xifi8h.png",
  },
  {
    id: 3,
    title: "Sandman",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725879587/comic-vine/Frame_301_11zon_lq0urc.png",
  },
  {
    id: 4,
    title: "100 bullets",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878471/comic-vine/image-2_11zon_nhqmrt.png",
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
        <ScrollView>
          <View style={searchStyles.searchInputContainer}>
            <Ionicons name="search-outline" size={scaleSize(20)} color="white" />
            <TextInput
              style={{ flexGrow: 1, color: "#ffffff", fontSize: scaleSize(16) }}
              placeholder="Find Your Comics"
              placeholderTextColor="#999999"
              onChangeText={handleChangeSearch}
            />
          </View>

          {searchQuery === "" ? (
            <View style={{ paddingHorizontal: scaleSize(15) }}>
              <View style={[originals.collectionContainer]}>
                <Text style={styles.homeNewCollectionName}>For You</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: "row",
                  marginBottom: scaleSize(24),
                  gap: scaleSize(8),
                }}
              >
                {searchForYouList.map((each, index) => (
                  <SearchComicItem key={index} detail={each} />
                ))}
              </ScrollView>

              <View style={originals.collectionContainer}>
                <Text style={styles.homeNewCollectionName}>
                  Brand Spotlight
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: "row",
                  marginBottom: scaleSize(24),
                  gap: scaleSize(8),
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7].map((each, index) => (
                  <BrandCollectionItem key={index} />
                ))}
              </ScrollView>

              <View style={originals.collectionContainer}>
                <Text style={styles.homeNewCollectionName}>
                  Favourite Geres
                </Text>
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
                <Text style={{ color: "#ffff", fontSize: scaleSize(16) }}>No Data Found</Text>
              )}
            </View>
          )}
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
