import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import comicVineLogo from "src/assets/images/comic-vine-logo.png";
import { styles } from "./styles";

const LogoSpinner: React.FC = () => {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(opacityAnim, {
            toValue: 0.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [opacityAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={comicVineLogo}
        style={[
          styles.image,
          {
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
};

export default LogoSpinner;
