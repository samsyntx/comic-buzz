import { scaleSize } from "@/app/utils/scale-size";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Stars from "react-native-stars";

type StarRatingProps = {
  defaultRating?: number;
  starCount?: number;
  onRatingUpdate?: (rating: number) => void;
  readonly?: boolean;
  starSize?: number;
  isDetail?: boolean;
  size?: number;
  starColor?: string;
};

const StarRating: React.FC<StarRatingProps> = ({
  defaultRating = 0,
  starCount = 5,
  onRatingUpdate = () => {},
  readonly = false,
  starSize = 40,
  isDetail = false,
  size = scaleSize(20),
  starColor,
}) => {
  const [rating, setRating] = useState<number>(defaultRating);

  const handleUpdate = (newRating: number) => {
    setRating(newRating);
    if (onRatingUpdate) {
      onRatingUpdate(newRating);
    }
  };

  return (
    <View style={styles.container}>
      <Stars
        default={defaultRating}
        count={starCount}
        half={true}
        starSize={starSize}
        fullStar={
          <Ionicons
            size={size}
            name="star"
            style={[styles.starStyle, { color: starColor || "#F5C618" }]}
          />
        }
        emptyStar={
          <Ionicons
            size={size}
            name="star-outline"
            style={[styles.starStyle, { color: starColor || "#F5C618" }]}
          />
        }
        halfStar={
          <Ionicons
            size={size}
            name="star-half-outline"
            style={[styles.starStyle, { color: starColor || "#F5C618" }]}
          />
        }
        update={(val: any) => handleUpdate(val)}
        disabled={readonly}
      />
      {isDetail && (
        <Text style={styles.text}>
          Rating: {rating}/{starCount}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  starStyle: {
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#ffffff",
  },
});

export default StarRating;
