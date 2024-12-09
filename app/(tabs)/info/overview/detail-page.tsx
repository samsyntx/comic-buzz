import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";
import { scaleSize } from "@/app/utils/scale-size";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DetailComicItem from "@/app/layouts/comic-items/DetailComicList";
import { router } from "expo-router";

const detailPageItem = [
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

export default function DetailPage() {
  return (
    <AuthMiddleware>
      <AppStructure>
        <View style={{flex: 1}}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="chevron-back-outline"
                size={30}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.detailPageTitle}>Detail Page Title</Text>
          </View>

          <FlatList
            data={detailPageItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            renderItem={({ item }) => <DetailComicItem detail={item} />}
            contentContainerStyle={{
              flexGrow: 1,
              marginBottom: scaleSize(10),
            }}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        </View>
      </AppStructure>
    </AuthMiddleware>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scaleSize(16),
  },
  backIcon: {
    color: Colors.custom.white,
  },
  detailPageTitle: {
    color: Colors.custom.white,
    fontSize: scaleSize(18),
    lineHeight: scaleSize(24),
    fontFamily: "PlusJakrataSans",
    fontWeight: "500",
    flexGrow: 1,
    textAlign: "center",
  },
});
