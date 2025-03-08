import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";

export default function HomeStats() {
  return (
    <View style={styles.container}>
      <View style={styles.firstItem}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //   xmlns="http://www.w3.org/?2000/svg"
        >
          <Path
            d="M18.3 10.2H19.2C19.4387 10.2 19.6676 10.2948 19.8364 10.4636C20.0052 10.6324 20.1 10.8613 20.1 11.1V20.1C20.1 20.3387 20.0052 20.5676 19.8364 20.7364C19.6676 20.9052 19.4387 21 19.2 21H4.79999C4.5613 21 4.33238 20.9052 4.1636 20.7364C3.99482 20.5676 3.89999 20.3387 3.89999 20.1V11.1C3.89999 10.8613 3.99482 10.6324 4.1636 10.4636C4.33238 10.2948 4.5613 10.2 4.79999 10.2H5.69999V9.3C5.69999 8.47267 5.86295 7.65345 6.17955 6.88909C6.49616 6.12474 6.96021 5.43024 7.54522 4.84523C8.13023 4.26022 8.82474 3.79616 9.58909 3.47956C10.3534 3.16295 11.1727 3 12 3C12.8273 3 13.6465 3.16295 14.4109 3.47956C15.1753 3.79616 15.8698 4.26022 16.4548 4.84523C17.0398 5.43024 17.5038 6.12474 17.8204 6.88909C18.137 7.65345 18.3 8.47267 18.3 9.3V10.2ZM5.69999 12V19.2H18.3V12H5.69999ZM11.1 13.8H12.9V17.4H11.1V13.8ZM16.5 10.2V9.3C16.5 8.10653 16.0259 6.96193 15.182 6.11802C14.3381 5.27411 13.1935 4.8 12 4.8C10.8065 4.8 9.66193 5.27411 8.81801 6.11802C7.9741 6.96193 7.49999 8.10653 7.49999 9.3V10.2H16.5Z"
            fill="#576652"
          />
        </Svg>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.itemLabel}>Next check-in</Text>
          <Text style={styles.itemText}>12:54:05</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M10.2 14.8548L18.4728 6.58105L19.7463 7.85365L10.2 17.4L4.4724 11.6724L5.745 10.3998L10.2 14.8548Z"
            fill="#5CC738"
          />
        </Svg>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.itemLabel}>Today</Text>
          <Text style={styles.itemText}>340P</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M10.2 14.8548L18.4728 6.58105L19.7463 7.85365L10.2 17.4L4.4724 11.6724L5.745 10.3998L10.2 14.8548Z"
            fill="#5CC738"
          />
        </Svg>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.itemLabel}>Yesterday</Text>
          <Text style={styles.itemText}>90P</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M10.2 14.8548L18.4728 6.58105L19.7463 7.85365L10.2 17.4L4.4724 11.6724L5.745 10.3998L10.2 14.8548Z"
            fill="#5CC738"
          />
        </Svg>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.itemLabel}>Feb 16</Text>
          <Text style={styles.itemText}>109P</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    rowGap: scale(10),
    flexWrap: "wrap",
  },

  firstItem: {
    width: scale(160),
    height: scale(77),
    borderRadius: scale(8),
    borderWidth: scale(1.5),
    borderStyle: "dashed",
    borderColor: "#E4E9E2",
    flexDirection: "row",
    gap: scale(8),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },

  item: {
    width: scale(160),
    height: scale(77),
    borderRadius: scale(8),
    backgroundColor: "#F7FAF6",
    flexDirection: "row",
    gap: scale(8),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },

  itemLabel: {
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(14),
    color: "#576652",
  },

  itemText: {
    fontFamily: "Satoshi-Medium",
    fontSize: fontScale(18),
    lineHeight: fontScale(28),
    color: "#000000",
  },
});
