import { Image, View, ScrollView, Text } from "react-native";
import { styles } from "../styles/home-styles";
import SaveComicItem from "../layouts/comic-items/SaveComicItem";
import DropComicItems from "../layouts/comic-items/DropComicItem";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";
import FeaturedComicItem from "../layouts/comic-items/FeaturedComicItem";
import { scaleSize } from "../utils/scale-size";

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

const dropComicList = [
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

const saveComicList = [
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
  return (
    <AuthMiddleware>
      <AppStructure>
        <ScrollView>
          <View style={styles.floatImageContainer}>
            <Image
              style={styles.coverImage}
              source={{
                uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1725868314/comic-vine/Rectangle_32_1__11zon_c6kzkk.png",
              }}
              resizeMode="cover"
            />
            <FeaturedComicItem detail={featuredComicList[0]} />
          </View>

          <View style={styles.collectionContainer}>
            <Text style={styles.homeNewCollectionName}>Latest Drops</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {dropComicList.map((each, index) => (
                <DropComicItems detail={each} key={index} />
              ))}
            </ScrollView>

            <Text style={styles.homeNewCollectionName}>Add To Your List</Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                gap: scaleSize(8),
                marginBottom: scaleSize(24),
              }}
            >
              {saveComicList.map((each, index) => (
                <SaveComicItem key={index} detail={each} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
