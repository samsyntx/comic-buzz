import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import { Ionicons } from "@expo/vector-icons";
import { NoUserImage } from "../assets/data";
import { settingStyles } from "../styles/settings-styles";

export default function SettingsSecreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 15 }}>
        <Ionicons name="chevron-back-outline" color="#ffff" size={30} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={settingStyles.profileContainer}>
            <Image
              source={{
                uri: NoUserImage,
              }}
              resizeMode="stretch"
              style={settingStyles.userImage}
            />
            <View>
              <Text style={settingStyles.userNameText}>Punk Riot</Text>
              <Text style={settingStyles.userEmailText}>
                Punk fyt@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={settingStyles.profileEditButton}>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
