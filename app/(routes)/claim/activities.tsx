import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function activities() {
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
              Activities
            </Text>
          </View>

          <View
            style={{
              borderRadius: scale(8),
              backgroundColor: "#FBE2B1",
              padding: scale(16),
              flexDirection: "row",
              gap: scale(8),
              alignItems: "center",
            }}
          >
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              //   xmlns="http://www.w3.org/2000/Svg"
            >
              <Path
                d="M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16V16ZM9.25 6.25H10.75V7.75H9.25V6.25ZM9.25 9.25H10.75V13.75H9.25V9.25Z"
                fill="#0D140A"
              />
            </Svg>

            <Text
              style={{
                flex: 1,
                fontFamily: "Satoshi-Regular",
                fontSize: fontScale(16),
                lineHeight: fontScale(20),
                color: "#0D140A",
              }}
            >
              You’ve collected{" "}
              <Text
                style={{
                  fontFamily: "Satoshi-Medium",
                }}
              >
                12 Cards
              </Text>
            </Text>
          </View>
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
