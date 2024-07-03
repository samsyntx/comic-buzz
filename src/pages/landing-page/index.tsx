import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoSpinner from "src/components/logo-spinner";
import { styles } from "./styles";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LogoSpinner />
      ) : (
        <Text>Content Loaded</Text>
      )}
    </View>
  );
};

export default LandingPage;
