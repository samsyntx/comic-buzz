import { ScrollView, Text, View, Dimensions } from "react-native";
import {
  ActionIcon,
  DramaIcon,
  ScriptedIcon,
  SportsIcon,
} from "@/assets/icons";
import { geresStyle } from "./geres-styles";
import { scaleSize } from "@/app/utils/scale-size";

const geresList = [
  {
    title: "Scripted",
    icon: <ScriptedIcon height={scaleSize(32)} width={scaleSize(32)}/>,
  },
  {
    title: "Sports",
    icon: <SportsIcon height={scaleSize(32)} width={scaleSize(32)}/>,
  },
  {
    title: "Drama",
    icon: <DramaIcon height={scaleSize(32)} width={scaleSize(32)}/>,
  },
  {
    title: "Action",
    icon: <ActionIcon height={scaleSize(32)} width={scaleSize(32)}/>,
  },
];

export default function GeresItems() {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={geresStyle.unorderContainer}
      showsHorizontalScrollIndicator={false}
    >
      {geresList.map((each, index) => {
        return (
          <View key={index} style={geresStyle.liItemContainer}>
            <View style={geresStyle.iconContainer}>{each.icon}</View>
            <Text style={geresStyle.title}>{each.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
