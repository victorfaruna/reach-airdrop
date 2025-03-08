import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import LeaderBoardChart from "@/components/LeaderBoardChart";

export default function leaderBoard() {
  const leaderboardData = [
    {
      id: 1,
      name: "Carla",
      profilePicture: require("@/assets/images/headshot-3.png"),
      points: 120200,
    },
    {
      id: 2,
      name: "Mary",
      profilePicture: require("@/assets//images/headshot-4.png"),
      points: 112300,
    },
    {
      id: 3,
      name: "Tony",
      profilePicture: require("@/assets/images/headshot-5.png"),
      points: 104550,
    },
  ];
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
            <View>
              <Text
                style={{
                  fontFamily: "Satoshi-Bold",
                  fontSize: fontScale(20),
                  lineHeight: fontScale(30),
                  color: "#0D140A",
                }}
              >
                Leaderboard
              </Text>
              <Text
                style={{
                  fontFamily: "Satoshi-Regular",
                  fontSize: fontScale(14),
                  color: "#576652",
                }}
              >
                Updated 45 minutes ago.
              </Text>
            </View>
          </View>

          <LeaderBoardChart />

          <View style={styles.pointLeader}>
            <Image
              style={{
                width: scale(40),
                height: scale(40),
              }}
              source={require("@/assets/images/headshot-1.png")}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.pointLeaderTitle}>
                1st {"   "} <Text style={{ color: "#E4E9E2" }}>| {"   "}</Text>{" "}
                10%
              </Text>
              <Text style={styles.pointLeaderText}>among 423,756 members</Text>

              <View style={{ marginTop: scale(16) }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: scale(16),
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Satoshi-Medium",
                      fontSize: fontScale(12),
                      lineHeight: fontScale(17),
                      color: "#576652",
                    }}
                  >
                    Points
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Satoshi-Medium",
                      fontSize: fontScale(12),
                      lineHeight: fontScale(17),
                      color: "#576652",
                    }}
                  >
                    105, 544P
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: scale(16),
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Satoshi-Medium",
                      fontSize: fontScale(12),
                      lineHeight: fontScale(17),
                      color: "#576652",
                    }}
                  >
                    Mission
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Satoshi-Medium",
                      fontSize: fontScale(12),
                      lineHeight: fontScale(17),
                      color: "#576652",
                    }}
                  >
                    56
                  </Text>
                </View>
              </View>
            </View>
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
                    {index + 3}
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

  pointLeader: {
    borderRadius: scale(16),
    padding: scale(16),
    flexDirection: "row",
    gap: scale(16),
    backgroundColor: "#F7FAF6",
  },

  pointLeaderTitle: {
    fontFamily: "Satoshi-Medium",
    fontSize: fontScale(16),
    lineHeight: fontScale(20),
    color: "#0D140A",
  },
  pointLeaderText: {
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(12),
    lineHeight: fontScale(17),
    color: "#576652",
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
