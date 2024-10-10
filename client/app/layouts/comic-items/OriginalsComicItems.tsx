import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./save-comic-styles";
import { scaleSize } from "@/app/utils/scale-size";

interface PropsType {
  detail: {
    id: number;
    title: string;
    thumbnail: string;
  };
}

const OriginalComicItem: React.FC<PropsType> = (props: PropsType): JSX.Element => {
  const { title, thumbnail } = props.detail;

  return (
    <View style={styles.normalContainer}>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={{height:scaleSize(124), width:scaleSize(104)}}
      />
      <Text style={styles.bookTitle}>{title}</Text>
    </View>
  );
};

export default OriginalComicItem;
