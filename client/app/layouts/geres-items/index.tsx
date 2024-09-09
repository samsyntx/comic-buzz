import { ScrollView, Text, View, Dimensions } from "react-native";
import {
  ActionIcon,
  DramaIcon,
  ScriptedIcon,
  SportsIcon,
} from "@/assets/icons";
import { geresStyle } from "./geres-styles";

const geresList = [
  {
    title: "Scripted",
    icon: <ScriptedIcon />,
  },
  {
    title: "Sports",
    icon: <SportsIcon />,
  },
  {
    title: "Drama",
    icon: <DramaIcon />,
  },
  {
    title: "Action",
    icon: <ActionIcon />,
  },
];

export default function GeresItems() {
  return (
    <ScrollView
      horizontal={true}
      style={geresStyle.unorderContainer}
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
