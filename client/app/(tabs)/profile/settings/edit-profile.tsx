import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import { Ionicons } from "@expo/vector-icons";
import { settingStyles } from "@/app/styles/settings-styles";
import HorizontalLine from "@/components/HorizontalLine";
import {
  HelpQuestionIcon,
  LogoutIcon,
  PencilIcon,
  StarIcon,
} from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";

const settingsNavList = [
  {
    id: 0,
    key: "Email Address",
    value: "abc@gmail.com",
  },
  {
    id: 1,
    key: "Password",
    value: "*********",
  },
  {
    id: 2,
    key: "Name",
    value: "Comic Vine",
  },
  {
    id: 3,
    key: "Username",
    value: "@comicvine",
  },
];

export default function EditProfilePage() {
  const router = useRouter();

  return (
    <AuthMiddleware>
      <AppStructure>
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          <TouchableOpacity onPress={() => router.push("/profile")}>
            <Ionicons name="chevron-back-outline" color="#ffff" size={30} />
          </TouchableOpacity>

          <Text style={settingStyles.editAccountHeading}>Account</Text>

          <Text style={settingStyles.editAccountSubHeading}>
            Account Details
          </Text>

          {settingsNavList.map((each, index) => (
            <View key={index}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={settingStyles.userNameText}>{each.key}</Text>
                  <Text style={settingStyles.userEmailText}>{each.value}</Text>
                </View>
                <TouchableOpacity>
                  <PencilIcon color={Colors.custom.primary} />
                </TouchableOpacity>
              </View>
              <HorizontalLine />
            </View>
          ))}
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
