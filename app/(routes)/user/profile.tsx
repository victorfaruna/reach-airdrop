import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontScale, scale } from "@/config/size";
import Svg, { Path, Rect } from "react-native-svg";
import { router } from "expo-router";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import ProfileEditOptions from "@/components/ProfileEditOptions";

export default function profile() {
  const pfpOptions = [
    {
      id: 1,
      icon: require("@/assets/images/headshot-1.png"),
    },
    {
      id: 2,
      icon: require("@/assets/images/headshot-2.png"),
    },
    {
      id: 3,
      icon: require("@/assets/images/headshot-3.png"),
    },
    {
      id: 4,
      icon: require("@/assets/images/headshot-4.png"),
    },
    {
      id: 5,
      icon: require("@/assets/images/headshot-5.png"),
    },
  ];
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // callbacks
  const handleModalToggle = () => {
    bottomSheetModalRef.current?.present();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1} // Backdrop disappears when sheet is fully closed
        appearsOnIndex={0} // Backdrop appears when sheet is opened
        opacity={0.5} // Adjust transparency here
      />
    ),
    []
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          className="main-container"
          style={{ padding: scale(20), gap: scale(24) }}
        >
          <View
            className="header"
            style={{ flexDirection: "row", gap: scale(16) }}
          >
            <TouchableOpacity hitSlop={scale(20)} onPress={() => router.back()}>
              <Svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M11.0452 12.4991L15.5002 16.9541L14.2276 18.2267L8.5 12.4991L14.2276 6.77148L15.5002 8.04408L11.0452 12.4991Z"
                  fill="#0D140A"
                />
              </Svg>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Satoshi-Bold",
                fontSize: fontScale(20),
                color: "#0D140A",
              }}
            >
              Profile
            </Text>
          </View>

          <View
            style={{
              borderRadius: scale(16),
              backgroundColor: "#5CC738",
              padding: scale(20),
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", position: "relative" }}
              onPress={handleModalToggle}
            >
              <Image
                source={require("@/assets/images/headshot-1.png")}
                style={{ width: scale(48), height: scale(48) }}
              />
              <Svg
                style={{ position: "absolute", right: scale(-5) }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Rect width="20" height="20" rx="10" fill="white" />
                <Path
                  d="M7.48625 11.8L12.0502 7.23614L11.4139 6.59984L6.84995 11.1637V11.8H7.48625ZM7.8593 12.7H5.94995V10.7907L11.0957 5.64494C11.1801 5.56058 11.2945 5.51318 11.4139 5.51318C11.5332 5.51318 11.6476 5.56058 11.732 5.64494L13.0051 6.91799C13.0894 7.00238 13.1368 7.11681 13.1368 7.23614C13.1368 7.35546 13.0894 7.4699 13.0051 7.55429L7.8593 12.7ZM5.94995 13.6H14.05V14.5H5.94995V13.6Z"
                  fill="#0D140A"
                />
              </Svg>
            </TouchableOpacity>
          </View>

          <ProfileEditOptions />

          <BottomSheetModal
            enablePanDownToClose
            ref={bottomSheetModalRef}
            snapPoints={["50%"]}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ borderRadius: scale(30) }}
          >
            <BottomSheetView
              style={{
                flex: 1,
                paddingHorizontal: scale(20),
                paddingVertical: scale(20),
                gap: scale(24),
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Satoshi-Bold",
                  fontSize: fontScale(20),
                  lineHeight: scale(30),
                  color: "#0D140A",
                }}
              >
                Choose a Profile Picture
              </Text>

              <Image
                source={require("@/assets/images/headshot-1.png")}
                style={{ width: scale(72), height: scale(72) }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: scale(16),
                }}
              >
                {pfpOptions.map((option) => (
                  <Image
                    key={option.id}
                    style={{
                      width: scale(48),
                      height: scale(48),
                    }}
                    source={option.icon}
                  />
                ))}
              </View>

              <TouchableOpacity
                style={{
                  width: "100%",
                  borderRadius: scale(8),
                  backgroundColor: "#5CC738",
                  padding: scale(16),
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Satoshi-Medium",
                    fontSize: fontScale(16),
                    lineHeight: scale(20),
                    color: "#FFFFFF",
                  }}
                >
                  Save Changes
                </Text>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: scale(24),
  },
});
