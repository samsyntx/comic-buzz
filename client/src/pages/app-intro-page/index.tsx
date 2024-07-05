import React from "react";
import { View, Image, Dimensions, Text } from "react-native";
import { styles } from "./styles";
import RootLayout from "src/static/RootLayout";

const AppIntroPage = function () {
  const windowWidth = Dimensions.get("window").width;

  return (
    <RootLayout>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_5_qxde7u.png",
          }}
          style={[styles.image, { width: windowWidth - 20 }]}
          alt="image-1"
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/dqmmxqwiq/image/upload/v1720196411/comic-vine/Group_4_rn6ecp.png",
          }}
          style={[styles.image, { width: windowWidth - 20 }]}
          alt="image-2"
        />
        <View>
          <Text style={styles.detailText}>
            Discover, Read, Review: Your Gateway to{" "}
            <Text style={styles.highlightText}>Comic Vine!</Text>
          </Text>
        </View>
      </View>
    </RootLayout>
  );
};

export default AppIntroPage;
