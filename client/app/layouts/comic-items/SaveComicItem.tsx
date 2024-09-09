import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./save-comic-styles";
import { SaveSvgIcon } from "@/assets/icons";
import { Ionicons } from "@expo/vector-icons";
import { scaleSize } from "@/app/utils/scale-size";

interface PropsType {
  detail: {
    id: number;
    title: string;
    thumbnail: string;
  };
}

const SaveComic: React.FC<PropsType> = (props: PropsType): JSX.Element => {
  const { title, thumbnail } = props.detail;

  return (
    <View style={styles.normalContainer}>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={styles.comicImage}
      />
      <TouchableOpacity style={styles.normalSaveButton}>
        <SaveSvgIcon
          height={scaleSize(48).toString()}
          width={scaleSize(40).toString()}
        />
        <View style={styles.plusIconForSaveButton}>
          <Ionicons name="add-outline" size={scaleSize(30)} color="white" />
        </View>
      </TouchableOpacity>
      <Text style={styles.bookTitle}>{title}</Text>
    </View>
  );
};

export default SaveComic;
