import { scale } from "@/config/size";
import React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function CompletedMissions() {
  return (
    <View
      style={{
        backgroundColor: "#F7FAF6",
        padding: scale(16),
        borderRadius: scale(4),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: "Satoshi-Regular",
          fontSize: scale(16),
          color: "#576652",
        }}
      >
        <Text
          style={{
            color: "#0D140A",
            fontFamily: "Satoshi-Medium",
          }}
        >
          2
        </Text>{" "}
        Completed Missions
      </Text>

      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.0001 10.9451L7.54506 15.4001L6.27246 14.1275L12.0001 8.3999L17.7277 14.1275L16.4551 15.4001L12.0001 10.9451Z"
          fill="#576652"
        />
      </Svg>
    </View>
  );
}
