import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

export default function CardCollected() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: scale(20),
        paddingVertical: scale(24),
        borderRadius: scale(16),
        backgroundColor: "#0D140A",
        gap: scale(16),
      }}
    >
      <Text
        style={{
          fontFamily: "Satoshi-Bold",
          fontSize: fontScale(28),
          lineHeight: fontScale(38),
          color: "#fff",
          maxWidth: scale(130),
        }}
      >
        <Text style={{ color: "#5CC738" }}>1</Text> Card Collected.
      </Text>

      <View style={{ flexDirection: "row", gap: scale(8) }}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M12 21C7.0293 21 3 16.9707 3 12C3 7.0293 7.0293 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21ZM12 19.2C13.9096 19.2 15.7409 18.4414 17.0912 17.0912C18.4414 15.7409 19.2 13.9096 19.2 12C19.2 10.0904 18.4414 8.25909 17.0912 6.90883C15.7409 5.55857 13.9096 4.8 12 4.8C10.0904 4.8 8.25909 5.55857 6.90883 6.90883C5.55857 8.25909 4.8 10.0904 4.8 12C4.8 13.9096 5.55857 15.7409 6.90883 17.0912C8.25909 18.4414 10.0904 19.2 12 19.2ZM11.1 7.5H12.9V9.3H11.1V7.5ZM11.1 11.1H12.9V16.5H11.1V11.1Z"
            fill="#CFD5CD"
          />
        </Svg>
        <Text
          style={{
            flex: 1,
            fontFamily: "Satoshi-Regular",
            fontSize: fontScale(16),
            lineHeight: fontScale(20),
            color: "#CFD5CD",
          }}
        >
          Cards will be available when your friends complete thier upcoming
          verification missions.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(routes)/claim/activities")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
          gap: scale(8),
        }}
      >
        <Text
          style={{
            fontFamily: "Satoshi-Regular",
            fontSize: fontScale(16),
            lineHeight: fontScale(20),
            color: "#5CC738",
          }}
        >
          View all activities
        </Text>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M12.955 11.9991L8.5 7.54408L9.7726 6.27148L15.5002 11.9991L9.7726 17.7267L8.5 16.4541L12.955 11.9991Z"
            fill="#5CC738"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
