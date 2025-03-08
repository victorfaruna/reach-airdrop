import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";

export default function LeaderBoardChart() {
  return (
    <View style={styles.container}>
      <View style={styles.barItem}>
        <Text style={styles.name}>Official</Text>
        <View
          style={[
            styles.bar,
            { backgroundColor: "#5CC738", height: scale(204) },
          ]}
        >
          <Image
            source={require("@/assets/images/headshot-1.png")}
            style={{
              width: scale(40),
              height: scale(40),
            }}
          />
          <Text style={styles.rankPosition}>1</Text>
        </View>
        <Text style={styles.name}>105, 544P</Text>
        <View style={{ flexDirection: "row", gap: scale(4) }}>
          <Svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M9.5 4.71875C10.1731 4.71875 10.7188 4.17309 10.7188 3.5H11.2812C11.2812 4.17309 11.8269 4.71875 12.5 4.71875V5.28125C11.8269 5.28125 11.2812 5.82691 11.2812 6.5H10.7188C10.7188 5.82691 10.1731 5.28125 9.5 5.28125V4.71875ZM3 8C4.65685 8 6 6.65686 6 5H7C7 6.65686 8.34315 8 10 8V9C8.34315 9 7 10.3432 7 12H6C6 10.3432 4.65685 9 3 9V8ZM4.938 8.5C5.59359 8.8638 6.13621 9.4064 6.5 10.062C6.86379 9.4064 7.40641 8.8638 8.062 8.5C7.40641 8.1362 6.86379 7.5936 6.5 6.938C6.13621 7.5936 5.59359 8.1362 4.938 8.5ZM11.125 9.5C11.125 10.3974 10.3974 11.125 9.5 11.125V11.875C10.3974 11.875 11.125 12.6026 11.125 13.5H11.875C11.875 12.6026 12.6026 11.875 13.5 11.875V11.125C12.6026 11.125 11.875 10.3974 11.875 9.5H11.125Z"
              fill="#5CC738"
            />
          </Svg>
          <Text
            style={{
              fontFamily: "Satoshi-Medium",
              fontSize: scale(14),
              lineHeight: scale(20),
              color: "#5CC738",
            }}
          >
            56
          </Text>
        </View>
      </View>

      <View style={styles.barItem}>
        <Text style={styles.name}>Manny</Text>
        <View
          style={[
            styles.bar,
            { backgroundColor: "#F2B740", height: scale(164) },
          ]}
        >
          <Image
            source={require("@/assets/images/headshot-2.png")}
            style={{
              width: scale(40),
              height: scale(40),
            }}
          />

          <Text style={styles.rankPosition}>2</Text>
        </View>
        <Text style={styles.name}>105, 544P</Text>
        <View style={{ flexDirection: "row", gap: scale(4) }}>
          <Svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M9.5 4.71875C10.1731 4.71875 10.7188 4.17309 10.7188 3.5H11.2812C11.2812 4.17309 11.8269 4.71875 12.5 4.71875V5.28125C11.8269 5.28125 11.2812 5.82691 11.2812 6.5H10.7188C10.7188 5.82691 10.1731 5.28125 9.5 5.28125V4.71875ZM3 8C4.65685 8 6 6.65686 6 5H7C7 6.65686 8.34315 8 10 8V9C8.34315 9 7 10.3432 7 12H6C6 10.3432 4.65685 9 3 9V8ZM4.938 8.5C5.59359 8.8638 6.13621 9.4064 6.5 10.062C6.86379 9.4064 7.40641 8.8638 8.062 8.5C7.40641 8.1362 6.86379 7.5936 6.5 6.938C6.13621 7.5936 5.59359 8.1362 4.938 8.5ZM11.125 9.5C11.125 10.3974 10.3974 11.125 9.5 11.125V11.875C10.3974 11.875 11.125 12.6026 11.125 13.5H11.875C11.875 12.6026 12.6026 11.875 13.5 11.875V11.125C12.6026 11.125 11.875 10.3974 11.875 9.5H11.125Z"
              fill="#5CC738"
            />
          </Svg>
          <Text
            style={{
              fontFamily: "Satoshi-Medium",
              fontSize: scale(14),
              lineHeight: scale(20),
              color: "#5CC738",
            }}
          >
            56
          </Text>
        </View>
      </View>

      <View style={styles.barItem}>
        <Text style={styles.name}>Stunnerjay</Text>
        <View
          style={[
            styles.bar,
            { backgroundColor: "#DF1C36", height: scale(116) },
          ]}
        >
          <Image
            source={require("@/assets/images/headshot-3.png")}
            style={{
              width: scale(40),
              height: scale(40),
            }}
          />
          <Text style={styles.rankPosition}>3</Text>
        </View>
        <Text style={styles.name}>105, 544P</Text>
        <View style={{ flexDirection: "row", gap: scale(4) }}>
          <Svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M9.5 4.71875C10.1731 4.71875 10.7188 4.17309 10.7188 3.5H11.2812C11.2812 4.17309 11.8269 4.71875 12.5 4.71875V5.28125C11.8269 5.28125 11.2812 5.82691 11.2812 6.5H10.7188C10.7188 5.82691 10.1731 5.28125 9.5 5.28125V4.71875ZM3 8C4.65685 8 6 6.65686 6 5H7C7 6.65686 8.34315 8 10 8V9C8.34315 9 7 10.3432 7 12H6C6 10.3432 4.65685 9 3 9V8ZM4.938 8.5C5.59359 8.8638 6.13621 9.4064 6.5 10.062C6.86379 9.4064 7.40641 8.8638 8.062 8.5C7.40641 8.1362 6.86379 7.5936 6.5 6.938C6.13621 7.5936 5.59359 8.1362 4.938 8.5ZM11.125 9.5C11.125 10.3974 10.3974 11.125 9.5 11.125V11.875C10.3974 11.875 11.125 12.6026 11.125 13.5H11.875C11.875 12.6026 12.6026 11.875 13.5 11.875V11.125C12.6026 11.125 11.875 10.3974 11.875 9.5H11.125Z"
              fill="#5CC738"
            />
          </Svg>
          <Text
            style={{
              fontFamily: "Satoshi-Medium",
              fontSize: scale(14),
              lineHeight: scale(20),
              color: "#5CC738",
            }}
          >
            56
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: scale(24),
  },

  barItem: {
    gap: scale(4),
    alignItems: "center",
  },
  name: {
    fontFamily: "Satoshi-Medium",
    fontSize: scale(14),
    lineHeight: scale(20),
    color: "#0D140A",
  },

  bar: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(16),
    borderRadius: scale(16),
  },
  rankPosition: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(16),
    lineHeight: fontScale(20),
    color: "#F7FAF6",
  },
});
