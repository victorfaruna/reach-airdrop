import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import HeadshotCluster from "./HeadshotCluster";
import { router } from "expo-router";

export default function MissionCTA() {
  return (
    <View
      style={{
        backgroundColor: "#F2FAEF",
        borderRadius: scale(16),
        height: scale(256),
        justifyContent: "space-between",
      }}
    >
      <View
        className="top"
        style={{ flex: 1, justifyContent: "space-between", padding: scale(24) }}
      >
        <Text
          style={{
            fontFamily: "Satoshi-Medium",
            fontSize: fontScale(12),
            color: "#576652",
          }}
        >
          Mission &middot; Invite friends
        </Text>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              flex: 1,
              fontSize: fontScale(24),
              fontFamily: "Satoshi-Bold",
              lineHeight: fontScale(34),
              color: "#0D140A",
            }}
          >
            Manny has joined Over
          </Text>
          <HeadshotCluster />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(routes)/claim/userReferred")}
        className="bottom"
        style={{
          height: scale(48),
          backgroundColor: "#5CC738",
          borderBottomLeftRadius: scale(16),
          borderBottomRightRadius: scale(16),
          justifyContent: "center",
          paddingHorizontal: scale(24),
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Satoshi-Medium",
              fontSize: fontScale(18),
              color: "#fff",
            }}
          >
            Claim your Reward
          </Text>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M12.1548 12L9.6087 9.45477L10.8813 8.18127L14.7 12L10.8813 15.8187L9.6087 14.5452L12.1548 12Z"
              fill="white"
            />
          </Svg>
        </View>
      </TouchableOpacity>
    </View>
  );
}
