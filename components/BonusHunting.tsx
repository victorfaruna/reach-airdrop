import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";

const Icon = () => (
  <Svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.00005 12.3789L15.8941 5.48413L16.9553 6.54463L9.00005 14.4999L4.22705 9.72688L5.28755 8.66638L9.00005 12.3789Z"
      fill="#0D140A"
    />
  </Svg>
);

const Icon2 = ({ color }: { color?: any }) => (
  <Svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10.5 15.25C11.121 15.25 11.625 15.754 11.625 16.375C11.625 16.996 11.121 17.5 10.5 17.5C9.879 17.5 9.375 16.996 9.375 16.375C9.375 15.754 9.879 15.25 10.5 15.25ZM10.5 2.5C12.9855 2.5 15 4.5145 15 7C15 8.62375 14.4353 9.4675 12.9945 10.6923C11.5493 11.92 11.25 12.4727 11.25 13.75H9.75C9.75 11.8945 10.3403 10.9788 12.0233 9.54925C13.161 8.5825 13.5 8.0755 13.5 7C13.5 5.3425 12.1575 4 10.5 4C8.8425 4 7.5 5.3425 7.5 7V7.75H6V7C6 4.5145 8.0145 2.5 10.5 2.5Z"
      fill={color}
    />
  </Svg>
);

export default function BonusHunting() {
  const currentDay = "FRI";
  const CALENDAR_DATA = [
    {
      day: "SUN",
      done: true,
    },
    {
      day: "MON",
      done: true,
    },
    {
      day: "TUE",
      done: true,
    },
    {
      day: "WED",
      done: true,
    },
    {
      day: "THU",
      done: true,
    },
    {
      day: "FRI",
      done: false,
    },
    {
      day: "SAT",
      done: false,
    },
  ];
  return (
    <View style={{ gap: scale(24) }}>
      <Text style={styles.sectionTitle}>
        Bonus Hunting <Text style={{ color: "#B48018" }}>Day 6</Text>
      </Text>

      <View style={styles.calendarContaier}>
        {CALENDAR_DATA.map((day, index) => (
          <View
            key={index}
            style={[
              styles.calendarItem,
              day.day === currentDay && { backgroundColor: "#0D140A" },
            ]}
          >
            <Text
              style={[
                styles.calendarText,
                day.day === currentDay && { color: "#FFFFFF" },
              ]}
            >
              {day.day}
            </Text>
            {day.done ? (
              <Icon />
            ) : (
              <Icon2 color={day.day === currentDay ? "#FFFFFF" : "#0D140A"} />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(20),
    lineHeight: fontScale(30),
    color: "#0D140A",
  },

  calendarContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: scale(8),
  },

  calendarItem: {
    alignItems: "center",
    borderRadius: scale(20),
    paddingHorizontal: scale(6),
    paddingVertical: scale(12),
    backgroundColor: "#F7FAF6",
    gap: scale(8),
  },

  calendarText: {
    fontFamily: "Satoshi-Medium",
    fontSize: fontScale(12),
    lineHeight: fontScale(17),
    color: "#000000",
  },
});
