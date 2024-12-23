import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/home-styles";
import SaveComicItem from "../layouts/comic-items/SaveComicItem";
import DropComicItems from "../layouts/comic-items/DropComicItem";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";
import FeaturedComicItem from "../layouts/comic-items/FeaturedComicItem";
import { scaleSize } from "../utils/scale-size";
import Slider from "@/components/SnapSlider";
import { Ionicons } from "@expo/vector-icons";
import { originals } from "../styles/original-styles";
import { router } from "expo-router";

const featuredComicList = [
  {
    cover:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725868314/comic-vine/Rectangle_32_1__11zon_c6kzkk.png",
    name: "The Story – Unstoppable Doom Patrol (2024) #1",
    display:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725869417/comic-vine/Rectangle_33_11zon_z41ogi.png",
  },
  {
    cover:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725869503/comic-vine/Rectangle_32_11zon_vhw5z4.png",
    name: "DEADPOOL & WOLVERINE: WWIII (2024) #1",
    display:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725869569/comic-vine/Rectangle_33_11zon_1_yihi8m.png",
  },
];

export const dropComicList = [
  {
    id: 0,
    title: "",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878471/comic-vine/image-4_11zon_foh5bq.png",
  },
  {
    id: 1,
    title: "",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878472/comic-vine/image_11zon_g5braq.png",
  },
  {
    id: 2,
    title: "",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878472/comic-vine/image-3_11zon_xifi8h.png",
  },
  {
    id: 3,
    title: "",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878471/comic-vine/image-5_11zon_puykpy.png",
  },
  {
    id: 4,
    title: "",
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725878471/comic-vine/image-2_11zon_nhqmrt.png",
  },
];

export const saveComicList = [
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

export default function HomeScreen() {
  const formattedFeaturedComicList = featuredComicList.map((item, index) => ({
    id: index,
    title: item.name,
    thumbnail: item.cover,
  }));

  const renderItem = (
    item: { id: number; title: string; thumbnail: string },
    index: number
  ) => {
    return (
      <View style={styles.floatImageContainer}>
        <Image
          style={styles.coverImage}
          source={{
            uri: item.thumbnail,
          }}
          resizeMode="cover"
        />
        <FeaturedComicItem detail={featuredComicList[0]} />
      </View>
    );
  };

  const handleViewDetailOverview = () => {
    router.push('/(tabs)/info/overview/detail-page')
  }

  return (
    <AuthMiddleware>
      <AppStructure>
        <ScrollView>
          <View style={{ marginBottom: scaleSize(32) }}>
            <Slider
              itemsData={formattedFeaturedComicList}
              renderItem={renderItem}
            />
          </View>

          <View style={styles.collectionContainer}>
            <View style={styles.homeDropAndArrowContainer}>
              <Text style={styles.homeNewCollectionName}>Latest Drops</Text>
              <TouchableOpacity onPress={handleViewDetailOverview}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(32),
                gap: scaleSize(8),
              }}
            >
              {dropComicList.map((each, index) => (
                <DropComicItems detail={each} key={index} />
              ))}
            </ScrollView>

            <View style={styles.homeDropAndArrowContainer}>
              <Text style={styles.homeNewCollectionName}>Add To Your List</Text>
              <TouchableOpacity onPress={handleViewDetailOverview}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                gap: scaleSize(8),
                marginBottom:scaleSize(32)
              }}
            >
              {saveComicList.map((each, index) => (
                <SaveComicItem key={index} detail={each} />
              ))}
            </ScrollView>

            {/* Coming Soon Section */}
            <View style={styles.homeDropAndArrowContainer}>
              <Text style={styles.homeNewCollectionName}>Coming Soon</Text>
              <TouchableOpacity onPress={handleViewDetailOverview}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                gap: scaleSize(8),
                marginBottom:scaleSize(32)
              }}
            >
              {saveComicList.map((each, index) => (
                <SaveComicItem removeSave={true} key={index} detail={each} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
