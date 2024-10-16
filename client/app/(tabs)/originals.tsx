import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/home-styles";
import { originals } from "../styles/original-styles";
import { Ionicons } from "@expo/vector-icons";
import GeresItems from "../layouts/geres-items";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";
import Slider from "@/components/SnapSlider";
import OriginalComicItem from "../layouts/comic-items/OriginalsComicItems";
import { scaleSize } from "../utils/scale-size";

const originalFeaturedList = [
  {
    id: 0,
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1726228015/comic-vine/Rectangle_39_11zon_rljide.png",
  },
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1726228015/comic-vine/Rectangle_38_11zon_xcdzzz.png",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1726228015/comic-vine/Rectangle_37_11zon_p3ywct.png",
  },
];

export const originalItemList = [
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

export default function OriginalScreen() {
  const renderItem = (
    item: { id: number; thumbnail: string },
    index: number
  ) => {
    return (
      <Image
        source={{ uri: item.thumbnail }}
        style={originals.originalsFeatureImage}
        accessibilityLabel={item.id.toString()}
        resizeMode="stretch"
      />
    );
  };

  return (
    <AuthMiddleware>
      <AppStructure>
        <ScrollView contentContainerStyle={styles.collectionContainer}>
          <Slider itemsData={originalFeaturedList} renderItem={renderItem} />

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Latest Drops</Text>
            <TouchableOpacity>
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
              marginBottom: scaleSize(24),
              gap: scaleSize(8),
            }}
          >
            {originalItemList.map((each, index) => (
              <OriginalComicItem key={index} detail={each} />
            ))}
          </ScrollView>

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Top Rated</Text>
            <TouchableOpacity>
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
              marginBottom: scaleSize(24),
              gap: scaleSize(8),
            }}
          >
            {originalItemList.map((each, index) => (
              <OriginalComicItem key={index} detail={each} />
            ))}
          </ScrollView>

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Editor’s Choice</Text>
            <TouchableOpacity>
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
              marginBottom: scaleSize(24),
              gap: scaleSize(8),
            }}
          >
            {originalItemList.map((each, index) => (
              <OriginalComicItem key={index} detail={each} />
            ))}
          </ScrollView>

          <View style={originals.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Favourite Geres</Text>
          </View>

          <GeresItems />
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
