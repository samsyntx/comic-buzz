import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./save-comic-styles";
import { SaveSvgIcon } from "@/app/assets/icons";
import { Ionicons } from "@expo/vector-icons";

const DropComicItems: React.FC = (): JSX.Element => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiY-7u1EkHwfhw2g_j5BZwTUb5EELBlVmfQ&s",
        }}
        style={{ height: 124, width: 104 }}
      />

      <Text style={styles.bookTitle}>Hello World</Text>
    </View>
  );
};

export default DropComicItems;
