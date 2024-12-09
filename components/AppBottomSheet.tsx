import { ReactNode } from "react";
import { Text } from "react-native";
import { Colors } from "@/constants/Colors";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useCallback, useMemo } from "react";

const initialSnapPoints = ["25%", "50%", "90%"];

const AppBottomSheet = function ({
  bottomSheetRef,
  customSnap = initialSnapPoints,
  children,
  hideIndicator = false,
}: {
  bottomSheetRef: React.RefObject<BottomSheet>;
  customSnap?: string[];
  children: ReactNode;
  hideIndicator?: boolean;
}) {
  const snapPoints = useMemo(() => customSnap, [customSnap]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      handleIndicatorStyle={[
        { backgroundColor: Colors.custom.white },
        hideIndicator && { display: "none" },
      ]}
      backgroundStyle={{ backgroundColor: Colors.custom.background }}
      backdropComponent={renderBackdrop}
    >
      {children}
    </BottomSheet>
  );
};

export default AppBottomSheet;
