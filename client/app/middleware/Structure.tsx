import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "@/components/CustomStatusBar";
import { common } from "@/constants/Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";

interface structureProps {
  children: React.ReactNode;
  noStatus?: boolean;
  bgColor?: string;
}

export default function AppStructure({
  children,
  noStatus,
  bgColor,
}: structureProps) {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        backgroundColor: bgColor || Colors.custom.background,
        flex: 1,
        width: WINDOW_WIDTH,
      }}
    >
      {!noStatus && <CustomStatusBar />}
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        {children}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
