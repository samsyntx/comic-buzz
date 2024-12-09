import { scaleSize } from "@/app/utils/scale-size";
import { Link, router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, View } from "react-native";

interface PropsType {
  detail: {
    id: number;
    title: string;
    thumbnail: string;
  };
  removeSave?: boolean;
}

const DetailComicItem: React.FC<PropsType> = (
  props: PropsType
): JSX.Element => {
  const { title, thumbnail } = props.detail;

  return (
    <TouchableOpacity
      onPress={() => router.push("/(tabs)/info")}
      style={styles.comicImage}
    >
      <Image
        source={{
          uri: thumbnail,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableOpacity>
  );
};

export default DetailComicItem;

const styles = StyleSheet.create({
  comicImage: {
    height: scaleSize(164),
    width: scaleSize(104),
    margin: scaleSize(3),
    flexGrow: 1,
    flexShrink: 1,
  },
});
