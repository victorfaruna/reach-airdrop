import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

export default function InviteLeaderboard() {
  const leaderboardData = [
    {
      id: 1,
      name: "Officialokpoba",
      profilePicture: require("@/assets/images/headshot-1.png"),
      points: 120200,
    },
    {
      id: 2,
      name: "Mary",
      profilePicture: require("@/assets//images/headshot-2.png"),
      points: 112300,
    },
    {
      id: 3,
      name: "Stunnerjay",
      profilePicture: require("@/assets/images/headshot-3.png"),
      points: 104550,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.leaderBoardHeader}>
        <View>
          <Text style={styles.leaderBoardHeaderTitle}>Leadership</Text>
          <Text style={styles.leaderBoardHeaderText}>Updated 30 minutes</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/(routes)/missions/leaderBoard")}
        >
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            //   xmlns="http://www.w3.org/2000/Svg"
          >
            <Path
              d="M12.955 11.9991L8.5 7.54408L9.7726 6.27148L15.5002 11.9991L9.7726 17.7267L8.5 16.4541L12.955 11.9991Z"
              fill="#576652"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={styles.leaderBoardList}>
        {leaderboardData.map((item, index) => (
          <View key={index} style={styles.leaderBoardListItem}>
            <View
              id="LEFT"
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: scale(16),
              }}
            >
              <Text
                style={{
                  fontFamily: "Satoshi-Medium",
                  fontSize: scale(16),
                  color: "#576652",
                }}
              >
                {index + 1}
              </Text>
              <Image
                source={item.profilePicture}
                style={{ width: scale(48), height: scale(48) }}
              />
              <Text
                style={{
                  fontFamily: "Satoshi-Medium",
                  fontSize: fontScale(16),
                  color: "#0D140A",
                }}
              >
                {item.name}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Satoshi-Regular",
                fontSize: fontScale(14),
                color: "#000000",
              }}
            >
              {item.points.toLocaleString()}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#5CC738",
          borderRadius: scale(8),
          padding: scale(16),
        }}
      >
        <Text
          style={{
            fontFamily: "Satoshi-Medium",
            fontSize: fontScale(16),
            lineHeight: fontScale(20),
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Share your link
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: scale(24),
  },
  leaderBoardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leaderBoardHeaderTitle: {
    fontFamily: "Satoshi-Bold",
    fontSize: scale(20),
    lineHeight: scale(30),
    color: "#0D140A",
  },
  leaderBoardHeaderText: {
    fontFamily: "Satoshi-Regular",
    fontSize: scale(14),
    lineHeight: scale(20),
    color: "#576652",
  },
  leaderBoardList: {},
  leaderBoardListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(12),
    borderBottomWidth: scale(1),
    borderColor: "#E4E9E2",
  },
});
