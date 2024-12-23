import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./save-comic-styles";
import { SaveSvgIcon } from "@/assets/icons";
import { Ionicons } from "@expo/vector-icons";
import { scaleSize } from "@/app/utils/scale-size";
import { router } from "expo-router";

interface PropsType {
  detail: {
    id: number;
    title: string;
    thumbnail: string;
  };
  removeSave?: boolean;
}

const SaveComicItem: React.FC<PropsType> = (props: PropsType): JSX.Element => {
  const { title, thumbnail } = props.detail;
  const { removeSave } = props;

  return (
    <TouchableOpacity onPress={() => router.push("/(tabs)/info")}>
      <View style={styles.normalContainer}>
        <Image
          source={{
            uri: thumbnail,
          }}
          style={styles.comicImage}
        />
        {!removeSave && (
          <TouchableOpacity style={styles.normalSaveButton}>
            <SaveSvgIcon
              height={scaleSize(48).toString()}
              width={scaleSize(40).toString()}
            />
            <View style={styles.plusIconForSaveButton}>
              <Ionicons name="add-outline" size={scaleSize(30)} color="white" />
            </View>
          </TouchableOpacity>
        )}
        <Text style={styles.bookTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SaveComicItem;
