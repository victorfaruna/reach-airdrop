import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/HomeHeader";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import MissionCTA from "@/components/MissionCTA";
import HomeStats from "@/components/HomeStats";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: scale(20), paddingTop: scale(20) }}>
        <HomeHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: scale(24), paddingHorizontal: scale(20) }}>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.balanceLabel}>Total Points</Text>
              <Text style={styles.balanceText}>1,088,888</Text>
            </View>
            {/* ... */}
            <View>
              <Text style={styles.balanceLabel}>Today&apos;s Points</Text>
              <Text style={styles.balanceText}>
                340
                <Svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M10.25 9.871L8.129 11.9927L7.06775 10.9323L10.25 7.75L13.4322 10.9323L12.371 11.9927L10.25 9.871Z"
                    fill="#5CC738"
                  />
                </Svg>
              </Text>
            </View>
          </View>

          <MissionCTA />

          <Text
            style={{
              width: scale(212),
              fontFamily: "Satoshi-Medium",
              fontSize: fontScale(28),
              color: "#8B9886",
              lineHeight: fontScale(38),
            }}
          >
            You&apos;ve got{" "}
            <Text style={{ color: "#0D140A", fontFamily: "Satoshi-Bold" }}>
              125P
            </Text>{" "}
            for today
          </Text>

          <HomeStats />
          <View style={{ height: 10 }} />
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

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7FAF6",
    paddingVertical: scale(15),
    paddingHorizontal: scale(30),
    borderRadius: scale(16),
  },

  balanceLabel: {
    color: "#8B9886",
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(14),
  },

  balanceText: {
    color: "#0D140A",
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(20),
  },
});
