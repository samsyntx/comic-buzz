import React from "react";
import { Image, View, TouchableOpacity, Text, Touchable } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { SaveSvgIcon } from "@/assets/icons";
import { Ionicons } from "@expo/vector-icons";
import { scaleSize } from "@/app/utils/scale-size";
import { Link, router } from "expo-router";

const windowWidth = Dimensions.get("window").width;

interface PropsType {
  detail: {
    cover: string;
    name: string;
    display: string;
  };
}

const FeaturedComicItem: React.FC<PropsType> = (
  props: PropsType
): JSX.Element => {
  const { detail } = props;

  return (
    <TouchableOpacity
      onPress={() => router.push("/(tabs)/info")}
      style={styles.container}
    >
      <Image
        source={{
          uri: detail.display,
        }}
        style={styles.comicImage}
      />
      <TouchableOpacity style={styles.saveButton}>
        <SaveSvgIcon
          height={scaleSize(48).toString()}
          width={scaleSize(40).toString()}
        />
        <View style={styles.plusIconForSaveButton}>
          <Ionicons name="add-outline" size={scaleSize(30)} color="white" />
        </View>
      </TouchableOpacity>
      <Text style={styles.bookSideTitle}>
        The Story – Unstoppable Doom Patrol (2024) #1
      </Text>
    </TouchableOpacity>
  );
};

export default FeaturedComicItem;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: scaleSize(20),
    borderRadius: scaleSize(10),
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  comicImage: {
    width: scaleSize(104),
    height: scaleSize(160),
    position: "relative",
  },
  saveButton: {
    position: "absolute",
    left: scaleSize(20),
    top: 0,
  },
  plusIconForSaveButton: {
    position: "absolute",
    top: 0,
    left: scaleSize(7),
  },
  bookSideTitle: {
    color: Colors.custom.white,
    fontFamily: "DMSans-500",
    fontSize: scaleSize(15),
    alignSelf: "flex-end",
    flexShrink: 1,
  },
});
