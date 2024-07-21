import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./save-comic-styles";
import { SaveSvgIcon } from "@/app/assets/icons";
import { Ionicons } from "@expo/vector-icons";

interface PropsType {
  isFloat?: boolean;
}

const SaveComic: React.FC<PropsType> = (props: PropsType): JSX.Element => {
  return (
    <View style={props.isFloat ? styles.container : styles.normalContainer}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiY-7u1EkHwfhw2g_j5BZwTUb5EELBlVmfQ&s",
        }}
        style={styles.comicImage}
      />
      <TouchableOpacity
        style={props.isFloat ? styles.saveButton : styles.normalSaveButton}
      >
        <SaveSvgIcon />
        <View style={styles.plusIconForSaveButton}>
          <Ionicons name="add-outline" size={30} color="white" />
        </View>
      </TouchableOpacity>
      {!props.isFloat && <Text style={styles.bookTitle}>Hello World</Text>}
      {props.isFloat && (
        <Text style={styles.bookSideTitle}>
          The Story – Unstoppable Doom Patrol (2024) #1
        </Text>
      )}
    </View>
  );
};

export default SaveComic;
