import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import { common } from "@/constants/Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface structureProps {
  children: React.ReactNode;
}

export default function AppStructure({ children }: structureProps) {
  return (
    <SafeAreaView style={common.container}>
      <CustomStatusBar />
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        {children}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
