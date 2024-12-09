import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./save-comic-styles";
import { scaleSize } from "@/app/utils/scale-size";
import { router } from "expo-router";

interface PropsType {
  detail: {
    id: number;
    title: string;
    thumbnail: string;
  };
}

const SearchComicItem: React.FC<PropsType> = (
  props: PropsType
): JSX.Element => {
  const { title, thumbnail } = props.detail;

  return (
    <TouchableOpacity onPress={() => router.push("/(tabs)/info")}>
      <View style={styles.normalContainer}>
        <Image
          source={{
            uri: thumbnail,
          }}
          style={{ height: scaleSize(160), width: scaleSize(104) }}
        />
        <Text style={styles.bookTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchComicItem;
