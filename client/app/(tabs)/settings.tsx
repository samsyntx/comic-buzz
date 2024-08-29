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
import HorizontalLine from "@/components/HorizontalLine";
import {
  HelpQuestionIcon,
  LogoutIcon,
  PencilIcon,
  StarIcon,
} from "@/app/assets/icons";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import AuthMiddleware from "../middleware/authMiddleware";
import AppStructure from "../middleware/Structure";

export default function SettingsSecreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleUserLogout = () => {
    logout();
  };

  const settingsNavList = [
    {
      id: 1,
      title: "Rate Us",
      icon: <StarIcon />,
      handleFun: handleUserLogout,
    },
    {
      id: 2,
      title: "Publish Your Original Comics",
      icon: <PencilIcon />,
      handleFun: handleUserLogout,
    },
    {
      id: 3,
      title: "Help Centre",
      icon: <HelpQuestionIcon />,
      handleFun: handleUserLogout,
    },
    {
      id: 0,
      title: "Logout",
      icon: <LogoutIcon />,
      handleFun: handleUserLogout,
    },
  ];

  return (
    <AuthMiddleware>
      <AppStructure>
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" color="#ffff" size={30} />
          </TouchableOpacity>

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
            <TouchableOpacity
              onPress={() => router.push("settings/edit-profile")}
            >
              <Text style={settingStyles.profileEditButton}>Edit</Text>
            </TouchableOpacity>
          </View>

          <HorizontalLine />

          {settingsNavList.map((each, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={each.handleFun}
                style={settingStyles.buttonTouchableContainer}
              >
                <View style={settingStyles.IconTextContainer}>
                  {each.icon}
                  <Text style={settingStyles.menuItemsText}>{each.title}</Text>
                </View>
                <Ionicons
                  name="chevron-forward-outline"
                  color="#ffff"
                  size={25}
                />
              </TouchableOpacity>
              <HorizontalLine />
            </View>
          ))}
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
