import AuthMiddleware from "@/app/middleware/authMiddleware";
import AppStructure from "@/app/middleware/Structure";
import { profileStyles } from "@/app/styles/settings-styles";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { ImageBackground } from "react-native";
import { NoUserImage } from "@/assets/data";
import { scaleSize } from "@/app/utils/scale-size";
import { originalItemList } from "../originals";
import OriginalComicItem from "@/app/layouts/comic-items/OriginalsComicItems";

export default function ProfileScreen() {
  const handleViewDetailOverview = () => {
    router.push('/(tabs)/info/overview/detail-page')
  }

  return (
    <AuthMiddleware>
      <AppStructure>
        <ScrollView>
          <ImageBackground
            source={{
              uri: "https://assets-prd.ignimgs.com/2023/10/14/collage-maker-14-oct-2023-04-22-pm-1875-1697314940997.jpg",
            }}
            style={profileStyles.mainProfileImageContainer}
          >
            <View style={profileStyles.imageOverlay} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="chevron-back-outline" color="#ffff" size={30} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/profile/settings/app-setting")}
              >
                <Ionicons name="ellipsis-horizontal" color="#ffff" size={30} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: scaleSize(10),
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: NoUserImage }}
                resizeMode="stretch"
                height={scaleSize(72)}
                width={scaleSize(72)}
                style={profileStyles.userImage}
              />

              <View style={{ flexDirection: "column", gap: scaleSize(8) }}>
                <Text style={profileStyles.userName}>Punk Riot</Text>
                <TouchableOpacity
                  onPress={() => router.push("/profile/settings/edit-profile")}
                  style={profileStyles.editProfileContainer}
                >
                  <Text style={profileStyles.editProfileText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <View style={{ padding: scaleSize(15) }}>
            <View style={profileStyles.collectionContainer}>
              <Text style={profileStyles.homeNewCollectionName}>
                Latest Drops
              </Text>
              <TouchableOpacity onPress={handleViewDetailOverview}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {originalItemList.map((each, index) => (
                <OriginalComicItem key={index} detail={each} />
              ))}
            </ScrollView>


            <View style={profileStyles.collectionContainer}>
              <Text style={profileStyles.homeNewCollectionName}>
              Favourites 
              </Text>
              <TouchableOpacity onPress={handleViewDetailOverview}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {originalItemList.map((each, index) => (
                <OriginalComicItem key={index} detail={each} />
              ))}
            </ScrollView>

            <View style={profileStyles.collectionContainer}>
              <Text style={profileStyles.homeNewCollectionName}>
              Currently Reading 
              </Text>
              <TouchableOpacity onPress={handleViewDetailOverview}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={scaleSize(20)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                marginBottom: scaleSize(24),
                gap: scaleSize(8),
              }}
            >
              {originalItemList.map((each, index) => (
                <OriginalComicItem key={index} detail={each} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </AppStructure>
    </AuthMiddleware>
  );
}
