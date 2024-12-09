import { Colors } from "@/constants/Colors";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function HorizontalLine() {
  return <View style={styles.hr} />;
}

const styles = StyleSheet.create({
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.custom.gray,
    marginVertical: 10,
  },
});
