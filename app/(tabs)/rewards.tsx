import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import Points from "@/components/Points";
import FriendCard from "@/components/FriendCard";
import { router } from "expo-router";

export default function Rewards() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: scale(24),
            gap: scale(24),
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Satoshi-Medium",
                fontSize: scale(16),
                color: "#0D140A",
              }}
            >
              Your Rewards
            </Text>
            <Text
              style={{
                fontFamily: "Satoshi-Bold",
                fontSize: fontScale(24),
                lineHeight: fontScale(34),
                letterSpacing: fontScale(0.5),
                color: "#0D140A",
              }}
            >
              105, 554P
            </Text>
          </View>

          <View
            style={{
              borderRadius: scale(16),
              backgroundColor: "#0D140A",
            }}
          >
            <View
              style={{
                padding: scale(24),
                gap: scale(4),
                borderBottomWidth: scale(1),
                borderBottomColor: "#E4E9E2",
              }}
            >
              <Text
                style={{
                  color: "#F7FAF6",
                  fontFamily: "Satoshi-Medium",
                  fontSize: fontScale(16),
                }}
              >
                You are in the top
              </Text>
              <Text
                style={{
                  fontFamily: "Satoshi-Bold",
                  fontSize: fontScale(24),
                  lineHeight: fontScale(34),
                  color: "#fff",
                }}
              >
                10<Text style={{ color: "#5CC738" }}>%</Text>
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/(routes)/missions/leaderBoard")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                padding: scale(18),
              }}
            >
              <Text style={{ fontFamily: "Satoshi-Regular", color: "#FFFFFF" }}>
                Find out who’s leading
              </Text>
              <Svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M10.1291 10.0001L8.00732 7.87912L9.06782 6.81787L12.2501 10.0001L9.06782 13.1824L8.00732 12.1211L10.1291 10.0001Z"
                  fill="white"
                />
              </Svg>
            </TouchableOpacity>
          </View>

          {/* points breakdown */}
          <Points />
          <FriendCard />
          {/* end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
