import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "../comic-items/save-comic-styles";

const BrandCollectionItem: React.FC = (): JSX.Element => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8h-JijRcDEk4CpRHqdzlx8-ewxFOl17RtQ&s",
        }}
        style={{ height: 140, width: 160 }}
        resizeMode="stretch"
      />

      <Text style={styles.bookTitle}>Hello World</Text>
    </View>
  );
};

export default BrandCollectionItem;