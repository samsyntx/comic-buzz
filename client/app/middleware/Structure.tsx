import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import { common } from "@/constants/Styles";

interface structureProps {
  children: React.ReactNode;
}

export default function AppStructure({ children }: structureProps) {
  return (
    <SafeAreaView style={common.container}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
