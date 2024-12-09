import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { scaleSize } from "@/app/utils/scale-size";
import { NoComicImage } from "@/assets/data";
import { Link } from "expo-router";

interface propTypes {
  detail: {
    title?: string;
    id?: number;
    thumbnail?: string;
  };
}

const DropComicItems = ({ detail }: propTypes): JSX.Element => {
  return (
    <Link href='/(tabs)/info'>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: detail?.thumbnail || NoComicImage,
          }}
          style={{
            height: scaleSize(198),
            width: scaleSize(118),
            overflow: "hidden",
            borderRadius: scaleSize(4),
          }}
        />
      </View>
    </Link>
  );
};

export default DropComicItems;
