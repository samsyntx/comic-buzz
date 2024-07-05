import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoSpinner from "src/components/logo-spinner";
import { styles } from "./styles";
import AppIntroPage from "../app-intro-page";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LogoSpinner />
      ) : (
        <AppIntroPage />
      )}
    </View>
  );
};

export default LandingPage;
