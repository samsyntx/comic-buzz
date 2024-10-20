import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import { common } from "@/constants/Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface structureProps {
  children: React.ReactNode;
  noStatus?: boolean;
}

export default function AppStructure({ children, noStatus }: structureProps) {
  return (
    <SafeAreaView style={common.container}>
      {!noStatus && <CustomStatusBar />}
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        {children}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
